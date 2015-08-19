'use strict';
/**
*
* The packages we are using:
* Not using gulp-load-plugins as it is nice to see whats here.
*
**/
var gulp          = require('gulp');
var sass          = require('gulp-sass');
var browserSync   = require('browser-sync');
var prefix        = require('gulp-autoprefixer');
var plumber       = require('gulp-plumber');
var uglify        = require('gulp-uglify');
var rename        = require('gulp-rename');
var imagemin      = require('imagemin');
var pngquant      = require('pngquant');

/**
*
* Styles: SASS -> SCSS
* - Compile
* - Compress/Minify
* - Catch errors (gulp-plumber)
* - Autoprefixer
*
**/
gulp.task('sass', function() {
  return gulp.src('components/scss/main.scss')
  .pipe(sass({
    'sourcemap=none': true,
    style: 'compressed',
    errLogToConsole: false
    // ,
    // onError: function(err) {
    //   return notify().write(err);
    // }
  }))
  .pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'Android 2', 'Firefox ESR'))
  .pipe(plumber())
  .pipe(gulp.dest('app/assets/css'));
});


/**
*
* BrowserSync.io
* - Watch CSS, JS & HTML for changes
* - View project at: localhost:3000
*
**/
gulp.task('browser-sync', function() {
  browserSync({
    proxy: 'gulp.dev'
  });
});


/**
*
* Javascript
* - Uglify
*
**/
gulp.task('scripts', function() {
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(rename({
    dirname: 'min',
    suffix: '.min',
  }))
  .pipe(gulp.dest('js'));
});

/**
*
* Images
* - Compress them!
*
**/
gulp.task('images', function () {
  return gulp.src('images/*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('images'));
});


/**
*
* Default task
* - Runs sass, browser-sync, scripts and image tasks
* - Watchs for file changes for images, scripts and sass/css
*
**/
// gulp.task('default', ['sass', 'browser-sync', 'scripts', 'images'], function () {
//   gulp.watch('./components/scss/**/*.scss', ['sass']);
//   //gulp.watch('js/**/*.js', ['scripts']);
//   //gulp.watch('images/*', ['images']);
// });

gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch('components/scss/main.scss', ['sass']);
  //gulp.watch('js/**/*.js', ['scripts']);
  //gulp.watch('images/*', ['images']);
});