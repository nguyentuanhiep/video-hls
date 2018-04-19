var gulp = require('gulp')  
var concat = require('gulp-concat')
var minifyHTML = require('gulp-minify-html');

gulp.task('audio', function() {
    gulp.src('./audio/**/*')
        .pipe(gulp.dest('../build/audio/'))
})

// gulp.task('video', function() {
//     gulp.src('./Manifest/**/*')
//         .pipe(guld.dest('../build/video/'))
// })

gulp.task('html', function() {
    gulp.src('index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('../build/'))
})

gulp.task('css', function() {
    gulp.src('./css/main.css')
        .pipe(gulp.dest('../build/style/'))
})

gulp.task('babel', function() {
    gulp.src('./scripts/app.js')
        .pipe(gulp.dest('../build/scripts/'))
})
gulp.task('vendor:css', function() {
    gulp.src([
        './node_modules/video.js/dist/video-js.min.css'
    ])
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('../build/style/'))
})

gulp.task('vendor:js', function() {
    gulp.src([
        './node_modules/video.js/dist/video.min.js',
        './scripts/dash.all.min.js',
        './scripts/videojs-dash.min.js',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/vue/dist/vue.min.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('../build/scripts/'));
});

gulp.task('vendor', ['vendor:css', 'vendor:js'])

gulp.task('default', ['html','css', 'babel', 'vendor', 'audio']);
