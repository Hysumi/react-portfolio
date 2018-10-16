var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

var paths = {
    styles: {
      src: './src/Assets/scss/*.scss',
      dest: './src/Assets/css'
    }
};

function styles() {
    return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(changed(paths.styles.dest))
    .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
    gulp.watch(paths.styles.src, styles);
}
exports.styles = styles;
exports.watch = watch;

var build = gulp.series(styles);
var watch = gulp.series(watch);

gulp.task('watch', watch);
gulp.task('build', build);
gulp.task('default', build);