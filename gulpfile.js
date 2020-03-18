var fs = require('fs');
var gulp = require('gulp');
var pug = require('pug');
var pug= require('gulp-pug');
var data = require('gulp-data');
//var path = require('path');

gulp.task('build-pug', function buildHTML(){
  var dataFile = 'pages.json';
  return gulp.src('test.pug')
    //.pipe(data(function(file){
    //  return JSON.parse(fs.readFileSync(dataFile));
    //}))
    //.pipe(pug({ pretty: true }))
    .pipe(pug().on('error', pug.logError))
    .pipe(gulp.dest('.'))
    //.pipe(browserSync.reload({
    //  stream: true
    //}));
});
