var gulp = require("gulp");
var replace = require("gulp-replace");
var cleanCSS = require("gulp-clean-css");
var concat = require("gulp-concat");
var del = require("del");
var argv = require("yargs").argv;

var paths = {
  styles: {
    src: [
      "src/styles/styles.css",
      "src/styles/styles.buttons.css",
      "src/styles/styles.forms.css",
      "src/styles/styles.pages.css"
    ],
    dest: "build/"
  },
  pages: {
    src: "public/**/*.html",
    dest: "build/"
  }
};

function clean() {
  console.log(argv);
  return del([paths.styles.dest]);
}

function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(cleanCSS())
    .pipe(concat("styles.min.css"))
    .pipe(gulp.dest(paths.styles.dest));
}

function pages() {
  return gulp
    .src(paths.pages.src)
    .pipe(replace("@@ENDPOINT", argv.endpoint))
    .pipe(gulp.dest(paths.pages.dest));
}

var build = gulp.series(clean, styles, pages);

exports.clean = clean;
exports.styles = styles;
exports.pages = pages;
exports.build = build;

exports.default = build;
