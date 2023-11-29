const radio = document.getElementById('radio');
const currentSongElement = document.getElementById('currentSong');

radio.addEventListener('play', () => {
    // Do something when the radio starts playing
});

radio.addEventListener('pause', () => {
    // Do something when the radio is paused
});

// You may want to use an API to get the current song information
// For simplicity, let's assume you have a function getSongInfo() that returns song information
function updateCurrentSong() {
    const currentSongInfo = getSongInfo();
    currentSongElement.textContent = `Current Song: ${currentSongInfo}`;
}

// Update the current song information initially and set an interval for periodic updates
updateCurrentSong();
setInterval(updateCurrentSong, 5000); // Update every 5 seconds
