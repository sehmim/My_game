function showimg(a) {
        document.getElementById(a).src = "images/ace.png";
        setTimeout(function(){ alert("YOU Will Be Sent Back in the Game"); }, 600);
        setTimeout(function(){ window.location = "hero1.html"; }, 600);
        
}

function youLose(a) {
        document.getElementById(a).src = "images/dead.jpg";
        setTimeout(function(){ alert("YOU LOSE!!!"); }, 300);
        setTimeout(function(){ window.location = "credits.html"; }, 300);
        
}