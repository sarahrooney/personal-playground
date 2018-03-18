import gulp from 'gulp';
import stylus from 'gulp-stylus';
import nib from 'nib';
import normalize from 'normalize'
import sourcemaps from 'gulp-sourcemaps';

gulp.task('styles', () =>
  gulp.src('src/index.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use: [
        nib(),
        normalize(),
      ],
      compress: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'))
);
