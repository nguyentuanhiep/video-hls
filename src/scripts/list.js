Vue.component('components-list', {
    template: '<div><a href="video1.html"><div class="list-video"><div class="left"><img src="./audio/img/ronaldo.jpg"></div><div class="right"><p>video.mp4</p></div></div></a><a href="video2.html"><div class="list-video"><div class="left"></div><div class="right"><p>mov_bbb.mp4</p></div></div></a><a href="video3.html"><div class="list-video"><div class="left"></div><div class="right"><p>output_dash.mp4</p></div></div></a></div>',
})


var list = new Vue({
    el: "#list"
})