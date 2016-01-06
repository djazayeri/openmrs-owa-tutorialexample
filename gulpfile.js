'use strict';
var gulp = require('gulp');
var zip = require('gulp-zip');

var THIS_APP_NAME = 'tutorialexample'; // REPLACE THIS

var sources = ['manifest.webapp', '**/*.html', '**/*.js', '**/*.css', '**/*.png',
    '**/*.otf', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2',
    '!node_modules', '!node_modules/**', '!gulpfile.js'];

gulp.task('default', function () {
    return gulp.src(sources)
        .pipe(zip(THIS_APP_NAME + '.zip'))
        .pipe(gulp.dest('dist'));
});