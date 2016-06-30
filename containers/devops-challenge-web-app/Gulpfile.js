var gulp = require('gulp');
var preprocess = require('gulp-preprocess');

gulp.task('html', function() {
  gulp.src('./src/*.html')
    .pipe(preprocess({context: { ENDPOINT: process.env.ENDPOINT || 'localhost', PORT: process.env.ENDPOINT_PORT || '8000' }}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['html']);
