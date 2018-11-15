'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    minify = require('gulp-clean-css'),
    rename = require('gulp-rename');

sass.compiler = require('node-sass');

gulp.task('sass-shiny', function () {
    return gulp.src('./scss/shiny.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(minify({compatibility: 'ie8'}))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass-style', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(minify({compatibility: 'ie8'}))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('styles', ['sass-shiny', 'sass-style'], function () {});