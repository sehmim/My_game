function showImage(img1, img2){
    document.getElementById(img1).style.visibility='visible';
    document.getElementById(img2).style.visibility='hidden';
    };


function hover (){

	audio = new Audio("music/hover.mp3");
	audio.play();
}

function click(){
	audio = new Audio("music/click.mp3");
	audio.play();
}