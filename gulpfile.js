var gulp = require("gulp");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task("babel", function () {
    return browserify({
        entries: ["./src/app.js"]
    })
    .transform(babelify.configure({}))
    .bundle()
    .pipe(source("bundle.js"))
    //.pipe(buffer())
    //.pipe(uglify())
    .pipe(gulp.dest("./scripts"));
});

gulp.task('default', gulp.series('babel'));

