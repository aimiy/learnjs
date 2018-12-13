// gulpfile.js
var gulp = require('gulp');

var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var smushit = require('gulp-smushit');

var concat = require('gulp-concat');

var connect = require('gulp-connect');


var serverConfig={
  root:'public',//从哪个目录开启server
  port:8080,//将服务开启在哪个端口
  livereload:true
}

gulp.task('html', function(){
    gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
              removeComments: true
        }))
        .pipe(gulp.dest('public'))
        .pipe(connect.reload());
});

gulp.task('script',function(){
	gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify({mangle:false}))
		.pipe(gulp.dest('public/js'))
    .pipe(connect.reload());
});

gulp.task('css',function(){
    gulp.src('src/css/*.css')
    	.pipe(concat('animate.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('public/css'))
        .pipe(connect.reload());
})

gulp.task('imagemin',function(){
	gulp.src(['src/images/*.png','src/images/*.jpg'])
        .pipe(smushit({
            verbose:true
        }))
        .pipe(gulp.dest('public/images'))
        .pipe(connect.reload());
});

gulp.task('server',function(){
    connect.server(serverConfig);
});

gulp.task('watch', function () {
  gulp.watch(['src/*.html'], ['html']);
  gulp.watch(['src/js/*.js'], ['script']);
  gulp.watch(['src/css/*.css'], ['css']);
  gulp.watch(['src/images/*.*'], ['imagemin']);
});

// gulp.task('default',['html','script','css','imagemin','server','watch']);
gulp.task('default',['html','script','css','server','watch']);