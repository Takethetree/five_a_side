let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let watch = require('gulp-watch');
let gulpSequence = require('gulp-sequence');
let src = require('gulp-src');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;
let dest = require('gulp-dest');


gulp.task('sass', function () {
    var stream = gulp.src('./scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
        .pipe(rename('styles.css'));
    return stream;
});


gulp.task('watch', function () {
	gulp.watch('./scss/*.scss', ['sass']);
});


