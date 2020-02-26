var gulp = require("gulp");
var babel = require("gulp-babel");
var browserSync = require('browser-sync').create();


gulp.task("babel", function () {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("scripts"))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/*.js", gulp.series('babel'));
    gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task('default', gulp.series('babel', 'serve'));

