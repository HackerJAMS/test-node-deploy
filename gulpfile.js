var gulp = require('gulp');
var sass    = require('gulp-sass');
var rename  = require('gulp-rename');

gulp.task('scss', function(){
  return gulp.src('client/src/styles/scss/styles.scss')
  .pipe(sass())
  .pipe(rename('styles.css'))
  .pipe(gulp.dest('client/dist/css'))
   .pipe(browserSync.stream());
});

gulp.task('default', ['scss'], function () {
    gulp.watch("client/src/styles/**/*.scss", ['scss']);
});