import gulp from 'gulp';

gulp.task('html', () =>
  gulp.src('src/index.html')
  .pipe(gulp.dest('build'))
);
