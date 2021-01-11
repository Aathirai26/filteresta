nose_x=0;
nose_y=0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/bJm2VBTR/images.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",getposes);
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nose_x,nose_y,30,30);
}


function capture(){
    save("realtime.png");
}

function modelloaded(){
    console.log("Model has been loaded");
}

function getposes(results){

    if(results.length>0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }

}


