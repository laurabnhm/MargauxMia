let sound_site = document.querySelector('.sound-file-site');
let sound_logo = document.querySelector('.sound-file-logo');

document.querySelector('.img-sound').addEventListener('click', playSoundSite);
sound_site.play();

function playSoundSite() {
    if (sound_site.paused) {
        sound_site.play();
        document.querySelector('.img-sound').src = 'img/volume-high.svg';
        console.log('son play');
    } else {
        sound_site.pause();
        document.querySelector('.img-sound').src = 'img/volume-mute.svg';
        console.log('son off');
    }
}