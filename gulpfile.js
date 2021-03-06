"use strict"

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps'),
  webpack = require('webpack-stream'),
  del = require('del');

gulp.task("addJsDep", function() {
  return gulp.src([
      './bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
      './bower_components/jquery/dist/jquery.min.js',
    ])
    .pipe(gulp.dest('build/js'))
});

gulp.task('compileSass', function () {
    return gulp.src('src/styles/bs-application.scss')
        .pipe(sass({
          outputStyle: 'nested',
          precison: 3,
          errLogToConsole: true,
          includePaths: ['./bower_components/bootstrap-sass/assets/stylesheets']
        }))
        .pipe(gulp.dest('build/css/'));
});

gulp.task('copyIndex', function () {
	return gulp.src('src/index.html').pipe(gulp.dest('build/'));
});

gulp.task('addFonts', function () {
    return gulp.src('./bower_components/bootstrap-sass/assets/fonts/**/*')
        .pipe(gulp.dest('build/fonts/'));
});

gulp.task('clean', function() {
  return del.sync(['build/js', 'build/css', 'build/fonts']);
});

gulp.task("default", ['clean', 'copyIndex', 'addJsDep', 'addFonts', 'compileSass']);

