//Crypto Cow

var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear().toString().substr(-2);
var today = day+"/"+month+"/"+year;


var plotCanvas = document.getElementById('plotter');
//offset height of toolbar and tabs menu!


var sW = plotCanvas.offsetWidth
var sH = plotCanvas.offsetHeight
var params = {width: sW, height: sH};
var two = new Two(params).appendTo(plotCanvas);

var graphOffsetHeight = 100;

var plotLine = two.makeLine(0,sH-graphOffsetHeight,sW,sH-graphOffsetHeight);
plotLine.linewidth = 2;
plotLine.stroke = "black";

// var dateText = two.makeText(today,sW/2,sH+15-graphOffsetHeight);
// dateText.fill = "black";
// dateText.size = 12;
// dateText.family = 'Karla';
// dateText.value = date;

var colorStyle = "black";
var tickQuan = 150;
var bigTick = 5;
var tickSpan = 10;
var leftWhiteSpace = 50;
var tickerGroup = []

for(i=0;i<tickQuan;i++){
  if(i/bigTick % 1 == 0){
    tick = two.makeLine(i*tickSpan+leftWhiteSpace,sH-graphOffsetHeight,i*tickSpan+leftWhiteSpace,sH+15-graphOffsetHeight);
    tick.stroke = colorStyle;
    integer = two.makeText(i,i*tickSpan+leftWhiteSpace,sH+25-graphOffsetHeight);
    integer.fill = colorStyle;
    integer.family = 'Karla';
    tickerGroup.push(tick,integer);
  }else{
    tick = two.makeLine(i*tickSpan+leftWhiteSpace,sH-graphOffsetHeight,i*tickSpan+leftWhiteSpace,sH+10-graphOffsetHeight);
    tick.stroke = colorStyle;
    tickerGroup.push(tick);
  }
}

two.update();


//
