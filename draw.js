const ctx = document.getElementById("canvas").getContext("2d");

function firstHorizontal(){
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(180,300);
    ctx.lineTo(250,300);
    ctx.stroke();
}

function verticalLine(){
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(215,300);
    ctx.lineTo(215,60);
    ctx.stroke();
}

function secondHorizontal(){
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(198,60);
    ctx.lineTo(330,60);
    ctx.stroke();
}

function head(){
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.arc(327,142,25,250,360,false);
    ctx.stroke();
}

function neck(){
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(328,165);
    ctx.lineTo(328,200);
    ctx.stroke();
}

function leftHand(){
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(328,180);
    ctx.lineTo(278,240);
    ctx.stroke();
}

function rightHand(){
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(328,180);
    ctx.lineTo(380,240);
    ctx.stroke();
}

function body(){
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(328,200);
    ctx.lineTo(328,250);
    ctx.stroke();
}

function leftLeg(){
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(328,250);
    ctx.lineTo(278,310);
    ctx.stroke();
}

function rightLeg(){
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(328,250);
    ctx.lineTo(380,310);
    ctx.stroke();
}

function rope(){
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(328,60);
    ctx.lineTo(328,120);
    ctx.stroke();
}

let drawHangman = [
    function() { rope() },
    function() { rightLeg() },
    function() { leftLeg() },
    function() { body() },
    function() { rightHand() },
    function() { leftHand() },
    function() { neck() },
    function() { head() },
    function() { secondHorizontal() },
    function() { verticalLine() },
    function() { firstHorizontal() }  
]
