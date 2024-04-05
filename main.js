

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	mario_gameover = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(750, 400);
	video.parent("gameConsole");
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded() {
	console.log("Its me Mario and I loaded to you screen");
}
function gotPoses(results) {
	if(results.length>0){
		console.log(results);
		noseX = results[0].poseNet.nose.x;
		noseY = results[0].poseNet.nose.y;
	}
}

function draw() {
	game()
}






