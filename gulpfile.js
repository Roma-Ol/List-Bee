const { src, dest, watch } = require('gulp'),
  sass = require('gulp-sass')(require('sass')),
  gulpStyleLint = require('gulp-stylelint'),
  sourcemaps = require('gulp-sourcemaps');

function style () {
  return src('./**/*.scss')
    .pipe(sourcemaps.init(undefined))
    .pipe(gulpStyleLint({
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./'));
}

function watcher () {
  watch('./**/*.scss', style);
}

exports.style = style;
exports.watch = watcher;
