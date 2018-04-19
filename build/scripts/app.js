Vue.component('components-1', {template: '<video  id="video"  class="video-js vjs-default-skin" controls></video>'})
Vue.component('components-2', {template: '<div class="videojs-overlay" id="overlay"><div class="onvideo"><img src="./audio/img/logo.png" alt="Video.js" class="logo"></div></div>'})

var app = new Vue({
    el: '#app' 
})

videojs('video', {
    playbackRates: [0.5, 1, 1.5, 2, 2.5, 3],
  
});


var player = videojs('video');

player.ready(function () {
    player.src({
        src: "/audio/Manifest/output_dash.mpd",
        type: 'application/dash+xml',
    });
});

player.on(['play', 'playing'], function () {
    $("#overlay").hide();
});
player.on(['pause'], function () {
    $("#overlay").show();
});