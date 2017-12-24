

function randInt(low,high) {
  return Math.floor(Math.random()*(high-low+1)+low);
 };

function rollDice(high, monster, attack, question){
	var dice = document.getElementById("dice");
	var roll = randInt(1,6);
	if (roll>= high) {
		mHealth -= 25;
		alert("Rolled: "+roll+" \nCritical Hit")
		alert("Monster Current Health" + mHealth)
	if (mHealth ==0) {
			alert("YOU WIN!!!")
			run(monster, attack)
			showImage(question, monster)
			mHealth = 100;
		}
	}else{
		health -= 25;
		alert("Rolled: "+roll+"you miss")
		alert("\n you took damge. Health= "+ health)
				if (health ==0) {
			alert("LOSE!!!")
			window.location="death.html";
		}
	}
	
};

function diceAnimation(){
	document.getElementById('dice').className ='dice';
}