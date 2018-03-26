'use strict';

var gulp = require('gulp');
// var concat = require('gulp-concat');
var order = require('gulp-order');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('scss', function() {
    return gulp.src('./public/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public'));
});

gulp.task('scss:watch', function() {
    gulp.watch('./public/scss/**/*.scss', ['scss']);
});

gulp.task('js', function() {
    return gulp.src('./public/script/**/*.js')
        .pipe(order(['vendor/**/*.js', 'modules/**/*.js']))
        // .pipe(concat('script.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('js:watch', function() {
    gulp.watch('script/**/*.js', ['js']);
});

gulp.task('watch:all', function() {
    gulp.watch('script/**/*.js', ['js']);
    gulp.watch('./public/scss/**/*.scss', ['scss']);
});