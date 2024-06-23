document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    var muteButton = document.getElementById('muteButton');
    function toggleMute() {
        video.muted = !video.muted;
        if (video.muted) {
            muteButton.textContent = 'Unmute';
        } else {
            muteButton.textContent = 'Mute';
        }
    }
    muteButton.addEventListener('click', function() {
        toggleMute();
    });
    video.volume = 1;
    video.addEventListener('canplay', function() {
        video.play();
        video.muted = false;
    });
});