console.log('Welcomne to The Spotify Clone')
let songIndex=0
let audioElement = new Audio('songs/1.mp3')
let seekBar = document.getElementById('seekBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItems'))
let gifSong = document.getElementsByClassName('gifSong')
let backward = document.getElementById('backward')
let forward = document.getElementById('forward')
// audioElement.play();
let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
    { songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" },
    { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" },
    { songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" },
]
songItems.forEach((element, i) => {

    element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
})




let masterPlay = document.getElementById('masterPlay')
masterPlay.addEventListener('click', function () {
    if (this.classList.contains('fa-circle-play')) {

        masterPlay.classList.add('fa-circle-pause')
        masterPlay.classList.remove('fa-circle-play')
        audioElement.play()
        gif.style.opacity = "1"
    }
    else {
        this.classList.remove('fa-cicle-pause')
        this.classList.add('fa-circle-play')
        audioElement.pause()
        gif.style.opacity = "0"
    }
})

audioElement.addEventListener('timeupdate', () => {
    // console.log('timeUpdate')
    // console.log(audioElement.duration/60)
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    // console.log(progress)
    seekBar.value = progress
})

seekBar.addEventListener('change', () => {
    audioElement.currentTime = (seekBar.value * audioElement.duration / 100);
})
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((e) => {

        e.classList.add('fa-circle-play')
        e.classList.remove('fa-circle-pause')
    })


}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((e) => {
    e.addEventListener('click', () => {
        makeAllPlay();
        songIndex = parseInt(e.id)
        // console.log(index)
        e.classList.add('fa-circle-pause')
        e.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        masterPlay.classList.remove('fa-circle-play')
        gif.style.opacity = "1"
        audioElement.src = `songs/${songIndex + 1}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        console.log(gifSong)
        gifSong[0].innerText = songs[songIndex].songName

    })
})

backward.addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex--
    }
    
        masterPlay.classList.add('fa-circle-pause')
        masterPlay.classList.remove('fa-circle-play')
        gif.style.opacity = "1"
        audioElement.src = `songs/${songIndex + 1}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        console.log(gifSong)
        gifSong[0].innerText = songs[songIndex].songName
})
forward.addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex=0
    }
    else{
        songIndex++

    }
      masterPlay.classList.add('fa-circle-pause')
        masterPlay.classList.remove('fa-circle-play')
        gif.style.opacity = "1"
        audioElement.src = `songs/${songIndex + 1}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        console.log(gifSong)
        gifSong[0].innerText = songs[songIndex].songName
})