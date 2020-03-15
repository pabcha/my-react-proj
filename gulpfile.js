var gulp = require("gulp");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');

gulp.task("babel", function () {
    return browserify({
        entries: ["./src/main.js"]
    })
    .transform(babelify.configure({}))
    .bundle()
    .pipe(source("bundle.js"))
    //.pipe(buffer())
    //.pipe(uglify())
    .pipe(gulp.dest("./public/scripts"));
});

gulp.task("serve", function() {
    connect.server({
        root: './public',
        //livereload: true,
        port: 8888        
    });
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.js', gulp.series('babel'));
});

gulp.task('default', gulp.parallel('babel', 'serve', 'watch'));

/* 
    References:
        https://stackoverflow.com/questions/34114922/babelify-transformation-on-jsx-for-react-element-failing
        https://github.com/babel/babelify
        https://github.com/gulpjs/gulp/tree/master/docs/recipes
        https://gist.github.com/SigurdMW/13847ee74f041279f81dfe2038893675
        https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-transforms.md
*/