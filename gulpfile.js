// Add our dependencies
var gulp = require('gulp'), // Main Gulp module
    browserSync  = require('browser-sync')

// Configuration
var configuration = {
    paths: {
        src: './src'
    },
    localServer: {
        port: 8001,
        url: 'http://localhost:8001/'
    }
};

// Serve
gulp.task('serve', function() {
    browserSync.init({
      server: {
        baseDir: './src'
      },
      notify: false
    });
  
    gulp.watch('src/**/*.html', browserSync.reload);

});


// Gulp default task
gulp.task('default', ['serve'], browserSync.reload);
