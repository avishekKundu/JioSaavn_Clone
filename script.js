// List of Array of Songs
const songsList = [
    {
        name: 'Faded',
        filePath: './songs/Faded - Alan Walker.mp3',
        coverImg: './images/song1.jpg'
    },
    {
        name: 'On My Way',
        filePath: './songs/On My Way - Sabrina Carpenter.mp3',
        coverImg: './images/song2.jpg'
    },
    {
        name: 'Ignite',
        filePath: './songs/Ignite---Alan-Walker-320.mp3',
        coverImg: './images/song3.jpg'
    },
    {
        name: 'Alone.Pt.II',
        filePath: './songs/Alan-Walker-Ava-Max-Alone-Pt-II.mp3',
        coverImg: './images/song4.jpg'
    },
    {
        name: 'Lily',
        filePath: './songs/Lily_320.mp3',
        coverImg: './images/song5.webp'
    },
    {
        name: 'Darkside',
        filePath: './songs/Darkside.mp3',
        coverImg: './images/song6.webp'
    },
    {
        name: 'Bones',
        filePath: './songs/Bones.mp3',
        coverImg: './images/song7.webp'
    },
    {
        name: 'Sing Me to Sleep',
        filePath: './songs/Alan_Walker_-_Sing_Me_To_Sleep.mp3',
        coverImg: './images/song8.png'
    },
    {
        name: 'Paradise',
        filePath: './songs/Paradise.mp3',
        coverImg: './images/song9.jpg'
    }
];

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
    if (playAudio.paused || playAudio.currentTime < 0) {
        playAudio.src = songsList[playIndex].filePath;
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
})

const play = () => {
    Array.from(plyIcn).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
        playAudio.pause();
        gif.style.display = 'none';
        sngName.style.display = 'none';
    });
};

Array.from(plyIcn).forEach((element, index) => {
    const filPth = songsList[index].filePath;
    playIndex = index;
    element.addEventListener('click', (ele) => {
        play();
        ele.target.classList.remove('fa-circle-play');
        ele.target.classList.add('fa-circle-pause');
        playAudio.src = filPth;
        playAudio.play();
        playAudio.currentTime = 0;
        gif.style.display = 'block';
        sngName.style.display = 'block';
        playBtn.classList.remove('fa-circle-play');
        playBtn.classList.add('fa-circle-pause');
    })
});

const btnprv = document.getElementById('btnPrev');
btnprv.addEventListener('click', () => {
    if (playIndex <= 0)
        playIndex = 0;
    else
        playIndex -= 1;
    playAudio.src = songsList[playIndex].filePath;
    playAudio.currentTime = 0;
    playAudio.play();
    playBtn.classList.remove('fa-circle-play');
    playBtn.classList.add('fa-circle-pause');
})

const btnNxt = document.getElementById('btnNext');
btnNxt.addEventListener('click', () => {
    if (playIndex >= 8)
        playIndex = 0;
    else
        playIndex += 1;
    playAudio.src = songsList[playIndex].filePath;
    playAudio.currentTime = 0;
    playAudio.play();
    playBtn.classList.remove('fa-circle-play');
    playBtn.classList.add('fa-circle-pause');
})



