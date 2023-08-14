Harry_Potter_Song = ""
Peter_pan_song = ""

function preload()
{
    Harry_Potter_Song = loadsound("music.mp3")
    Peter_pan_song = loadsound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}