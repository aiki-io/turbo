const gulp = require('gulp');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const w3cjs = require('gulp-w3cjs');
const jshint = require('gulp-jshint');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');

gulp.task('html', () => {
    return gulp.src('./spa/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./static'))
        .pipe(browserSync.stream());
});

gulp.task('css', () => {
    gulp.src('./spa/scss/*.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest('./static/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', () => {
    gulp.src('./spa/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./static/js'))
        .pipe(browserSync.stream());
});

gulp.task('vendor', () => {
   gulp.src('./node_modules/jquery/dist/jquery.min.*')
       .pipe(gulp.dest('./static/js'));
});

gulp.task('clean', () => {
    return del.sync('./static');
});

gulp.task('html-vet', () => {
    return gulp.src('./spa/*.html')
        .pipe(w3cjs())
        .pipe(w3cjs.reporter());
});

gulp.task('js-vet', () => {
    return gulp.src([
        'gulpfile.js',
        './spa/js/*.js'
    ])
        .pipe(jshint())
        .pipe(jshint.reporter('unix'));
});

gulp.task('vet', ['html-vet', 'js-vet']);

gulp.task('build', ['clean', 'html', 'css', 'js', 'vendor']);

gulp.task('serve', ['html', 'css', 'js', 'vendor'], () => {
    browserSync.init({
        server: './static'
    });
    gulp.watch('./spa/*.html', ['html']);
    gulp.watch('./spa/scss/*.scss', ['css']);
    gulp.watch('./spa/js/*.js', ['js']);
});
