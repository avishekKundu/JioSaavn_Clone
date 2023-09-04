// List of Array of Songs
import { songsList } from "./songList.js";

// Initialize variables
let playIndex = 0;
let playAudio = new Audio(undefined);
const playBtn = document.getElementById('btnPlay');
const playProgressBar = document.getElementById('progressBar');
let gif = document.getElementById('imgPlayGif');
let gifIcon = document.getElementById('imgePlayGif');
let sngName = document.getElementById('imgPlayGif2');
let sngList = Array.from(document.getElementsByClassName('sngItem'));
const plyIcn = document.getElementsByClassName('playIcon');

// Iterate to set song in each element
sngList.forEach((element, index) => {
    element.getElementsByTagName('img')[0].src = songsList[index].coverImg;
    element.getElementsByClassName('sngName')[0].innerText = songsList[index].name;
})


// Play/Pause song
playBtn.addEventListener('click', () => {
    if (playAudio.paused || playAudio.currentTime <= 0) {
        playAudio.src = songsList[playIndex].filePath;
        document.getElementById('imgPlayGif2').innerText = songsList[playIndex].name;
        playAudio.play();
        gif.style.display = 'block';
        sngName.style.display = 'block';
        playBtn.classList.remove('fa-circle-play');
        playBtn.classList.add('fa-circle-pause');
    }
    else {
        playAudio.pause();
        gif.style.display = 'none';
        sngName.style.display = 'none';
        playBtn.classList.remove('fa-circle-pause');
        playBtn.classList.add('fa-circle-play');
    }
})

// Modyfying & onclick user modyfying Progress bar
playAudio.addEventListener('timeupdate', () => {
    let timer = Number.parseInt((playAudio.currentTime / playAudio.duration) * 100);
    playProgressBar.value = timer;
})

playProgressBar.addEventListener('change', () => {
    playAudio.currentTime = (playProgressBar.value * playAudio.duration) / 100;
    // if (playAudio.currentTime == playAudio.duration)
    //     console.log('Ready to play next song');
})

const pause = () => {
    Array.from(plyIcn).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
        playAudio.pause();
        gif.style.display = 'none';
        sngName.style.display = 'none';
    });
};

const play = (ele, filPth, i) => {
    ele.target.classList.remove('fa-circle-play');
    ele.target.classList.add('fa-circle-pause');
    playAudio.src = filPth;
    document.getElementById('imgPlayGif2').innerText = songsList[i].name;
    playAudio.play();
    playAudio.currentTime = 0;
    gif.style.display = 'block';
    sngName.style.display = 'block';
    playBtn.classList.remove('fa-circle-play');
    playBtn.classList.add('fa-circle-pause');
};

Array.from(plyIcn).forEach((element, index) => {
    const filPth = songsList[index].filePath;
    element.addEventListener('click', (ele) => {
        if (playAudio.paused) {
            play(ele, filPth, element.id);
        }
        else {
            pause();
        }
    })
});


const btnprv = document.getElementById('btnPrev');
function prevSong() {
    if (playIndex <= 0)
        playIndex = 8;
    else
        playIndex -= 1;
    playAudio.src = songsList[playIndex].filePath;
    playAudio.currentTime = 0;
    document.getElementById('imgPlayGif2').innerText = songsList[playIndex].name;
    playAudio.play();
    playBtn.classList.remove('fa-circle-play');
    playBtn.classList.add('fa-circle-pause');
}

btnprv.addEventListener('click', () => {
    prevSong();
})

const btnNxt = document.getElementById('btnNext');
btnNxt.addEventListener('click', () => {
    if (playIndex >= 8)
        playIndex = 0;
    else
        playIndex += 1;
    playAudio.src = songsList[playIndex].filePath;
    playAudio.currentTime = 0;
    document.getElementById('imgPlayGif2').innerText = songsList[playIndex].name;
    playAudio.play();
    playBtn.classList.remove('fa-circle-play');
    playBtn.classList.add('fa-circle-pause');
})



