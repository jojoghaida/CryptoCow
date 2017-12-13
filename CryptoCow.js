//Crypto Cow

var date = new Date();
console.log(date);

var plotCanvas = document.getElementById('plotter');
//offset height of toolbar and tabs menu!

var sW = plotCanvas.offsetWidth
var sH = plotCanvas.offsetHeight
var params = {width: sW, height: sH};
var two = new Two(params).appendTo(plotCanvas);

var line = two.makeLine(sH/2,0,sW,sH);
line.linewidth = 3;
line.stroke = "black";

//
