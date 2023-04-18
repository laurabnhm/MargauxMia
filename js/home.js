let sound_site = document.querySelector('.sound-file-site');
let sound_logo = document.querySelector('.sound-file-logo');
let sound_symbole = document.querySelector('.sound-file-symbole');



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
}


/*********** SON SYMBOLE ***********/

document.querySelector('.img-symbole').addEventListener('click', playSoundSymbole);

function playSoundSymbole() {
    sound_symbole.play();
}