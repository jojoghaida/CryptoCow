//Crypto Cow

var date = new Date();
var day = date.getDate();
console.log(day);


var plotCanvas = document.getElementById('plotter');
//offset height of toolbar and tabs menu!


var sW = plotCanvas.offsetWidth
var sH = plotCanvas.offsetHeight
var params = {width: sW, height: sH};
var two = new Two(params).appendTo(plotCanvas);

var graphOffsetHeight = 65;

var line = two.makeLine(0,sH-30-graphOffsetHeight,sW,sH-30-graphOffsetHeight);
line.linewidth = 2;
line.stroke = "black";

var dateText = two.makeText(date,sW/2,sH-30+15-graphOffsetHeight);
dateText.fill = "black";
dateText.size = 12;
dateText.family = 'Karla';
dateText.value = date;

var colorStyle = "black";
var tickQuan = 150;
var bigTick = 5;
var tickSpan = 10;
var leftWhiteSpace = 50;
var tickerGroup = []

for(i=0;i<tickQuan;i++){
  if(i/bigTick % 1 == 0){
    tick = two.makeLine(i*tickSpan+leftWhiteSpace,sH,i*tickSpan+leftWhiteSpace,sH-15);
    tick.stroke = colorStyle;
    integer = two.makeText(i,i*tickSpan+leftWhiteSpace,sH-25);
    integer.fill = colorStyle;
    integer.family = 'Karla';
    tickerGroup.push(tick,integer);
  }else{
    tick = two.makeLine(i*tickSpan+leftWhiteSpace,sH,i*tickSpan+leftWhiteSpace,sH-10);
    tick.stroke = colorStyle;
    tickerGroup.push(tick);
  }
}

two.update();


//
