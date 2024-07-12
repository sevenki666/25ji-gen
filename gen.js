function genPhoto(event){
	//get inputText
	event.preventDefault();
	var inputText = document.getElementById('inputField').value;

	//get Canvas
	var canvas = document.getElementById('photoDisplay');
    var ctx = canvas.getContext('2d');

    //Decide width,Setting word style.
    ctx.font = "italic bold 74px shsTC,shsSC,shsJP";
    var textLen = ctx.measureText(inputText);
    canvas.width = 250+textLen.width;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //draw left logo
    var leftLogo = new Image();
    leftLogo.onload = function () {
    	ctx.drawImage(leftLogo, 0, 0);
    }
    leftLogo.src = "./images/left.png";

     // gradient
    var gradient = ctx.createLinearGradient(0, 90, 0, 220);
    gradient.addColorStop(0, "black");
    gradient.addColorStop(1, "rgb(111,93,153)");

    //draw texts
    ctx.font = "italic bold 74px shsTC,shsSC,shsJP";
    ctx.fillStyle = gradient;
    ctx.strokeStyle = "white";
    ctx.lineWidth = 7;
    ctx.strokeText(inputText, 232, 173);
    ctx.fillText(inputText, 232, 173);

    //draw right logo
    var rightPos = textLen.width*4/7+212;
    var rightLogo = new Image();
    rightLogo.onload = function () {
    	ctx.drawImage(rightLogo, rightPos, 0);
    }
    rightLogo.src = "./images/right.png";

}