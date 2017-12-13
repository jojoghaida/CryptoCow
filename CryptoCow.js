//Crypto Cow

var date = new Date();
console.log(date);

var plotCanvas = document.getElementById('plotter');
var sW = plotCanvas.offsetWidth
var sH = plotCanvas.offsetHeight
var params = {width: sW, height: sH};
var two = new Two(params).appendTo(plotCanvas);

//
