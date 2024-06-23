document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    video.muted = false; // Unmute the video
    video.play();
    this.style.display = 'none'; // Hide the button after the video starts playing
});
