var gulp = require("gulp");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');

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

gulp.task("serve", function() {
    connect.server({
        root: './',
        //livereload: true,
        port: 8888        
    });
});

gulp.task('watch', function() {
    gulp.watch('./src/*.js', gulp.series('babel'));
});

gulp.task('default', gulp.parallel('babel', 'serve', 'watch'));

