var gulp = require('gulp');
var sass = require('gulp-sass');

// Set Task
gulp.task('styles', function() {
    gulp.src('css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

// Watch Task
gulp.task('default',function() {
    gulp.watch('css/**/*.scss',['styles']);
});
