let play = document.getElementById("Play");
let forward = document.getElementById("Forward");
let track = document.getElementById("track");
let artist = document.getElementById("artist");
let backward = document.getElementById("Backword");
let ad = document.querySelector("audio");
let image = document.querySelector("img");
let con = document.querySelector(".container");
let player = document.querySelector(".player");
let progress = document.querySelector(".progress");
let progress_bar = document.querySelector(".progress_bar");
let start = document.querySelector(".start");
let end = document.querySelector(".end");
let isPlay = false;
// play and pause -------------------------
play.addEventListener("click", function (e) {
  if (isPlay == false) {
    ad.play();
    image.classList.add("animate");
    play.classList.replace("fa-play", "fa-pause");
    con.classList.add("addback");
    player.classList.add("addshadow");
    player.classList.add("background");
    isPlay = true;
  } else {
    ad.pause();
    image.classList.remove("animate");
    play.classList.replace("fa-pause", "fa-play");
    con.classList.remove("addback");
    player.classList.remove("addshadow");
    player.classList.remove("background");
    isPlay = false;
  }
});
// changing the artist and title onclicking forward and backword------------------------
// song data--
let song = [
  {
    name: "Jeene Laga Hoon",
    artist: "Atif Aslam & Shreya Ghoshal",
  },
  {
    name: "Chahun Main Ya Naa",
    artist: "Arjit Singh",
  },
  {
    name: "Mast Magan",
    artist: "Arjit Singh",
  },
  {
    name: "Shanivaar Raati",
    artist: "Arjit singh & Shalmali kholagade",
  },
];
function ChangeSong(song) {
  track.textContent = song.name;
  artist.textContent = song.artist;
  ad.src = "music/" + song.name + ".mp3";
}
let i = 0;
forward.addEventListener("click", function (e) {
  i++;
  if (i == 4) {
    i = 0;
  }
  ChangeSong(song[i]);
  ad.play();
});
backward.addEventListener("click", function (e) {
  i--;
  if (i == -1) {
    i = 3;
  }
  ChangeSong(song[i]);
  ad.play();
});

// progrees bar code-----------------------
ad.addEventListener("timeupdate", function (e) {
  let { currentTime, duration } = e.srcElement;
  let progresstime = (currentTime / duration) * 100;
  progress.style.width = `${progresstime}%`;
  start.innerHTML = `${Math.floor(currentTime / 60)}:${Math.floor(
    currentTime % 60
  )}`;
  end.innerHTML = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
});
ad.addEventListener("ended", function () {
  i++;
  if (i == 4) {
    i = 0;
  }
  ChangeSong(song[i]);
  ad.play();
});

// progress bar drag Option--------
progress_bar.addEventListener("click", function (e) {
  let o = e.offsetX;
  let w = e.srcElement.clientWidth;
  let { duration } = ad;
  let update = (o / w) * duration;
  ad.currentTime = update;
});
progress.addEventListener("click", function (e) {
  let o = e.offsetX;
  let w = e.srcElement.clientWidth;
  let { duration } = ad;
  let update = (o / w) * duration;
  ad.currentTime = update;
});
