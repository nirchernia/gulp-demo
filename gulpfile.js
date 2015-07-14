var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');

gulp.task('process-styles', function() { //'process-styles' is a variable, can be named anything that makes sense 
    return sass('main.scss', {style: 'expanded'})
        .pipe(gulp.dest('.')) //current directory
});    
gulp.task('default', function() {
    console.log('I have configured a gulpfile');
});
