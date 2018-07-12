'use strict';

const gulp =  require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('js', () => {
        return gulp.src('assets/js/app.js')
            .pipe(babel({
                presets: ['env']
            }))
            .pipe(gulp.dest('public'))
});

gulp.task('sass', () => {
    return gulp.src('./assets/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', () => {
    gulp.watch('./assets/scss/style.scss', gulp.series('sass'));
    gulp.watch('./assets/js/app.js', gulp.series('js'));
});

gulp.task('start', gulp.series('sass', 'js', 'watch'));