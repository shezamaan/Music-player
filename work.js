const fileInput = document.querySelector('input[type="file"]');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    const objectURL = URL.createObjectURL(file);
    audioSource.src = objectURL;
    audioPlayer.load();
});