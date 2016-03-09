"use strict"

var gulp = require('gulp'),
  runSequence = require('run-sequence'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps'),
  webpack = require('webpack-stream'),
  del = require('del');

gulp.task("addJsDependencies", function() {
  return gulp.src([
      './bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
      './bower_components/jquery/dist/jquery.min.js',
    ])
    .pipe(gulp.dest('build/js'))
});

gulp.task('compileSassDependencies', function () {
    return gulp.src('src/bs-application.scss')
        .pipe(sass({
          outputStyle: 'nested',
          precison: 3,
          errLogToConsole: true,
          includePaths: ['./bower_components/bootstrap-sass/assets/stylesheets']
        }))
        .pipe(gulp.dest('build/css/'));
});

gulp.task('addFonts', function () {
    return gulp
        .src('./bower_components/bootstrap-sass/assets/fonts/**/*')
        .pipe(gulp.dest('build/fonts/'));
});

gulp.task('clean-js', function() {
  return del('build/js');
});

gulp.task('clean-fonts', function() {
  return del('build/fonts');
});

gulp.task('clean-css', function() {
  return del('build/css');
});

gulp.task("build", function() {
    runSequence(
      ['clean-js', 'clean-fonts', 'clean-css'],
      ['addFonts', 'compileSassDependencies', 'addJsDependencies']
    );
});

