music1 = "";
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;

function preload(){
        music1 = loadsound("music.mp3");
        music2 = loadsound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,500);

    fill("#ffd700");
    stroke("#ffd700");
    if(scoreLeftWrist > 0.2){ 
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);}
}

function modelLoaded() {
    console.log("posenet model is loaded");
}
function gotPoses(results){
    if(results.length > 0){
    console.log(results);    
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX + " ,leftWristY = "+ leftWristY);
    
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX + " ,rightWristY = "+ rightWristY);
    }
    }
    
    function play(){
        music1.play();
        music2.play();
        
    }