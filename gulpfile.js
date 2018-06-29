'use strict';

const gulp =  require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./assets/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public'));
});

gulp.watch('./assets/style.scss', gulp.series('sass'));