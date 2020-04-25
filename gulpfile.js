'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var svgstore = require('gulp-svgstore');

gulp.task('sprite', function () {
  return gulp.src('src/assets/img/icon-*.svg')
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename('sprite_auto.svg'))
    .pipe(gulp.dest('dist/assets'));
});
