var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

var paths = {
    components: {
      src: './src/components/**/*.scss',
      dest: './src/assets/bundles'
    },
    library: {
        src: './src/library/**/*.scss',
        dest: './src/assets/bundles'
    },
    containers: {
        src: './src/containers/**/*.scss',
        dest: './src/assets/bundles'
    }
};

function components() {
    return gulp.src(paths.components.src)
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(changed(paths.components.dest))
    .pipe(gulp.dest(paths.components.dest));
}

function library () {
    return gulp.src(paths.library.src)
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(changed(paths.library.dest))
    .pipe(gulp.dest(paths.library.dest));
}

function containers () {
    return gulp.src(paths.containers.src)
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(changed(paths.containers.dest))
    .pipe(gulp.dest(paths.containers.dest));
}

function watch() {
    gulp.watch(paths.components.src, components);
    gulp.watch(paths.library.src, components);
    gulp.watch(paths.containers.src, containers);
}

exports.components = components;
exports.watch = watch;

var build = gulp.series(library, components, containers);
var watch = gulp.series(watch);

gulp.task('watch', watch);
gulp.task('build', build);
gulp.task('default', build);