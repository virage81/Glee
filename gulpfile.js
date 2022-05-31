const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const rename = require("gulp-rename");
const nunjucksRender = require("gulp-nunjucks-render");
const browserSync = require("browser-sync").create();
const del = require("del");

function browsersync() {
	browserSync.init({
		server: {
			baseDir: "app/",
		},
		notify: false,
	});
}

function nunjucks() {
	return src("app/njk/*.njk").pipe(nunjucksRender()).pipe(dest("app")).pipe(browserSync.stream());
}

function styles() {
	return src("app/scss/*.scss")
		.pipe(scss({ outputStyle: "compressed" }))
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(
			autoprefixer({
				overrideBrowserslist: ["last 10 versions"],
				grid: true,
			})
		)
		.pipe(dest("app/css"))
		.pipe(browserSync.stream());
}

function scripts() {
	return src([
		"node_modules/jquery/dist/jquery.js",
		"node_modules/mixitup/dist/mixitup.js",
		"node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js",
		"node_modules/ion-rangeslider/js/ion.rangeSlider.js",
		"node_modules/rateyo/src/jquery.rateyo.js",
		"node_modules/slick-carousel/slick/slick.js",
		"node_modules/jquery-form-styler/dist/jquery.formstyler.js",
		"app/js/main.js",
	])
		.pipe(concat("main.min.js"))
		.pipe(uglify())
		.pipe(dest("app/js"))
		.pipe(browserSync.stream());
}

function images() {
	return src("app/img/**/*.*")
		.pipe(
			imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.mozjpeg({ quality: 75, progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.svgo({
					plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
				}),
			])
		)
		.pipe(dest("dist/img"));
}

function build() {
	return src(["app/**/*.html", "app/css/*.min.css", "app/js/main.min.js", "app/fonts/*.*"], { base: "app" }).pipe(dest("dist/"));
}

function cleanDist() {
	return del("dist/");
}

function watching() {
	watch(["app/**/*.scss"], styles);
	watch(["app/njk/*.njk", "app/module/*/*.*", "app/module/**/*.html"], nunjucks);
	watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
	watch(["app/**/*.html"]).on("change", browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.nunjucks = nunjucks;
exports.browsersync = browsersync;
exports.cleanDist = cleanDist;
exports.watching = watching;
exports.build = series(cleanDist, images, build);

exports.default = parallel(styles, scripts, nunjucks, browsersync, watching);
