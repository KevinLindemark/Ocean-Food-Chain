function play() {
  var audio = document.getElementById("audio");
  audio.play();
}



function playVideo() {

  var myVideo = document.getElementById("video");
  if (myVideo.paused && myVideo.style.display === "none") {
    myVideo.style.display = "block";
    myVideo.play();
    play();
  } else {
    myVideo.pause();
    myVideo.style.display = "none";
  }

}

function playVideo2() {

  var myVideo2 = document.getElementById("video2");
  if (myVideo2.paused && myVideo2.style.display === "none") {
    myVideo2.style.display = "block";
    myVideo2.play();
  } else {
    myVideo2.pause();
    myVideo2.style.display = "none";
  }

}

function hideShow() {
  var x = document.getElementById("annotation");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
