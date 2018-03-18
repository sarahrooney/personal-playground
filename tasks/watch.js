import gulp from 'gulp';
import watch from 'gulp-watch';

gulp.task('watch', () => {
  watch('src/**/*.styl', function () {
    gulp.start(['styles']);
  });
});
