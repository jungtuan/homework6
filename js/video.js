var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	video.volume = 1;
	document.querySelector('#volume').innerHTML = '100%';
	document.querySelector('#volumeSlider').value = 100;
	console.log("Play Video");

} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate = video.playbackRate * 0.8;
  	console.log("Speed is "+video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	var cur = video.currentTime+=60;
	if (cur <= video.duration){
		video.currentTime = cur
		console.log("Current location is "+ cur);
	}
	else{
		video.currentTime = 0;
		console.log("Current location is 0");
		video.playbackRate = 1;
	}

	
} 

function mute() { 
	var mute = document.querySelector('#mute');
	if (video.muted){
		video.muted = false;
		mute.innerHTML='Mute';
		console.log("Unmuted");
	}
	else{
		video.muted = true;
		mute.innerHTML='Unmute';
		console.log("Muted");
	}    	
}

function changeVolume() {
	var vols = document.querySelector('#volumeSlider');
	var x = vols.value;
	var y = x/100;
	video.volume = y;
	document.querySelector('#volume').innerHTML = (y * 100).toString()+'%';

	console.log("Volume is "+(y * 100).toString());
}
       

function gray() { 
	video.classList.add('grayscale');
	console.log("In grayscale");
}

function color() {
	video.classList.remove('grayscale');
	console.log("In color");
}
