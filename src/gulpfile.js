var gulp = require('gulp')  
var concat = require('gulp-concat')
var minifyHTML = require('gulp-minify-html');

gulp.task('audio', function() {
    gulp.src('./audio/**/*')
        .pipe(gulp.dest('../build/audio/'))
})

gulp.task('html', function() {
    gulp.src('index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('../build/'))
})

gulp.task('video1', function() {
    gulp.src('video1.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('../build/'))
})

gulp.task('video2', function() {
    gulp.src('video2.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('../build/'))
})

gulp.task('video3', function() {
    gulp.src('video3.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('../build/'))
})

gulp.task('css', function() {
    gulp.src('./css/main.css')
        .pipe(gulp.dest('../build/style/'))
})

gulp.task('babel1', function() {
    gulp.src('./scripts/app.js')
        .pipe(gulp.dest('../build/scripts/'))
})

gulp.task('babel2', function() {
    gulp.src('./scripts/list.js')
        .pipe(gulp.dest('../build/scripts/'))
})

gulp.task('vendor:css', function() {
    gulp.src([
        './node_modules/video.js/dist/video-js.min.css',
        './node_modules/videojs-hls-quality-selector/dist/videojs-hls-quality-selector.css'
    ])
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('../build/style/'))
})

gulp.task('vendor:js', function() {
    gulp.src([
        './node_modules/video.js/dist/video.min.js',
        // './scripts/dash.all.min.js',
        // './scripts/videojs-dash.min.js',
        './node_modules/videojs-contrib-hls/dist/videojs-contrib-hls.min.js',
        './node_modules/videojs-contrib-quality-levels/dist/videojs-contrib-quality-levels.min.js',
        './node_modules/videojs-hls-quality-selector/dist/videojs-hls-quality-selector.min.js',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/vue/dist/vue.min.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('../build/scripts/'));
});

gulp.task('vendor', ['vendor:css', 'vendor:js'])

gulp.task('default', ['html', 'css', 'babel1', 'babel2', 'vendor', 'audio', 'video1', 'video2', 'video3']);
