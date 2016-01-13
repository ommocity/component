var gulp    = require('gulp'),
    clean   =  require('gulp-clean'),
    connect = require('gulp-connect'),
    gulpSequence = require('gulp-sequence'),
    fileinclude = require('gulp-file-include'),
    fs = require('fs'),
    path = require('path'),
    cors = require('cors');

gulp.task('clean', function () {
    return gulp.src('docs/api/')
        .pipe(clean({force: true}))
        .pipe(clean());
});

//test
gulp.task('copy',['clean'],function(){
    return gulp.src('src/**/*')
        .pipe( gulp.dest('release/'));
})

//开启服务
gulp.task('connect', function() {
    connect.server({
        port: 8090,
        livereload: false,
        middleware: function(connect, options) {
            return [
                cors(),//支持cors
                function(req, res, next) {
                    var filepath = path.join(options.root, req.url);
                    if ('POSTPUTDELETE'.indexOf(req.method.toUpperCase()) > -1
                        && fs.existsSync(filepath) && fs.statSync(filepath).isFile()) {
                        return res.end(fs.readFileSync(filepath));
                    }
                    return next();
                }
            ];
        }
    });
});

//将tpl/res/目录下的公用资源引用添加至业务html文件中
gulp.task('include', function() {
  return gulp.src(['docs/src/**/*'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('docs/api/'));
});


// 监听
gulp.task('watch', function() {
  /*
      开发是监听此任务，会实时将dev环境的代码copy到release下
      不要在release下修改代码，会被覆盖
  */
  gulp.watch(['docs/src/**/*','docs/_include/**/*'], ['include']);
});

//开发调试
gulp.task('default', gulpSequence('clean','connect','include','watch'));