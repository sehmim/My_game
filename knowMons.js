function showImage(img1, img2){
    document.getElementById(img1).style.visibility='visible';
    document.getElementById(img2).style.visibility='hidden';
    };

function wrongAnswer(){

	var wrongAns1 = document.getElementById('choice1');
	health = health - 50;
	wrongAns1.onclick = alert("WRONG!! YOU LOSE -50% HP. Health = "+ health);
	if (health==0) {
		alert("you lose");
		window.location="death.html";		
	}
}

function rightAnswer(){

	var right = document.getElementById('answer');
	choice = document.getElementById('question');
	choice.style.visibility = 'hidden';
	right.onclick = alert("GOOD JOB");

	showImage("question2", "question")
}






function wrongAnswer3(){

	var wrongAns1 = document.getElementById('choice10');
	health = health - 50;
	wrongAns1.onclick = alert("WRONG!! YOU LOSE -50% HP. Health = "+ health);
	if (health==0) {
		alert("you lose");
		window.location="death.html";		
	}
}

function rightAnswer3(){

	var right = document.getElementById('answer10');
	choice = document.getElementById('question10');
	choice.style.visibility = 'hidden';
	right.onclick = alert("GOOD JOB");

	showImage("question2", "question")
	run("question10", "monster5")
}


function run(a,b){

	div = document.getElementById(a);
	div.style.visibility = 'hidden';
	choice = document.getElementById(b);
	choice.style.visibility = 'hidden';
}


function wrongAnswer2(){

	var wrongAns1 = document.getElementById('choice5');
	health = health - 50;
	wrongAns1.onclick = alert("WRONG!! YOU LOSE -50% HP. Health = "+ health);
	if (health==0) {
		alert("you lose");
		window.location="death.html";		
	}
}

function rightAnswer2(){

	var right = document.getElementById('answer10');
	choice = document.getElementById('question10');
	choice.style.visibility = 'hidden';
	right.onclick = alert("GOOD JOB");

	showImage("question2", "question")
	run("question5", "monster4")
}