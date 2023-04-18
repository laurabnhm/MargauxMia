let sound_site = document.querySelector('.sound-file-site');
let sound_logo = document.querySelector('.sound-file-logo');



/*********** SON SITE ***********/

document.querySelector('.img-sound-site').addEventListener('click', playSoundSite);

function playSoundSite() {
    if (sound_site.paused) {
        sound_site.play();
        document.querySelector('.img-sound-site').src = 'img/volume-high.svg';
    } else {
        sound_site.pause();
        document.querySelector('.img-sound-site').src = 'img/volume-mute.svg';
    }
}


/*********** SON LOGO ***********/

document.querySelector('.img-logo').addEventListener('click', playSoundLogo);

function playSoundLogo() {
    sound_logo.play();
    console.log('hey');
}