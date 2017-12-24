var health = document.cookie = 100;
var mHealth = document.cookie = 100;
var gen = document.cookie = 0;
var crul = document.cookie = 0;
function showDiv(a) {
    div = document.getElementById(a);
    div.style.visibility = 'visible';
}

function run(a,b){

	div = document.getElementById(a);
	div.style.visibility = 'hidden';
	choice = document.getElementById(b);
	choice.style.visibility = 'hidden';
}

function kill(a,b){
	crul += 10;
	alert("YOUR CURRENT STATUS: GENOROCITY = " + gen + "CRULNESS = " + crul);
	run(a, b);	
}
function letgo(a,b){
	gen += 10;
	alert("YOUR CURRENT STATUS: GENOROCITY = " + gen + "CRULNESS = " + crul);
	run(a, b);	
}


function bossfight(){
	if (gen || crul == 100) {
		window.location="boss.html";
	} else{
		alert("YOUR NOT READY YET. EARN 100 Value Points")
	}
}