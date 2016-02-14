var gulp = require('gulp');

gulp.task('default', function() {
    gulp.src('vendors/pixi.js-3.0.9/bin/pixi.min.js')
    .pipe(gulp.dest('src/scripts/vendors'));
    console.log('Copied pixie to project directory.');
});
