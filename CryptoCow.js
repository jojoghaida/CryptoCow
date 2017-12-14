//Crypto Cow

var date = new Date();
console.log(date);

var plotCanvas = document.getElementById('plotter');
//offset height of toolbar and tabs menu!

var sW = plotCanvas.offsetWidth
var sH = plotCanvas.offsetHeight
var params = {width: sW, height: sH};
var two = new Two(params).appendTo(plotCanvas);

var line = two.makeLine(0,sH/2,sW,sH/2);
line.linewidth = 3;
line.stroke = "black";

var dateText = two.makeText(date,sW/2,sH/2+15);
dateText.fill = "black";
dateText.size = 12;
dateText.family = 'Karla';
dateText.value = date;

two.update();

//
