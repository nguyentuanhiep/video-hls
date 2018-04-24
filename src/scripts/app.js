
Vue.component('components-video', {
    template: '<video  id="video"  class="video-js vjs-default-skin" controls><source src="./audio/master.m3u8" type="application/x-mpegURL"></video>'
})

Vue.component('components-info', {
    template: '<div class="videojs-overlay" id="overlay"><div class="onvideo"><img src="./audio/img/logo.png" alt="Video.js" class="logo"></div></div>'
})

var app = new Vue({
    el: '#app' 
})

videojs('video', {
    playbackRates: [0.5, 1, 1.5, 2, 2.5, 3], 
});


var player  = videojs('video');

player.hlsQualitySelector();
var qualityLevels = player.qualityLevels();
console.log(qualityLevels);


player.on(['play', 'playing'], function () {
    $("#overlay").hide();
});
player.on(['pause'], function () {
    $("#overlay").show();
});

