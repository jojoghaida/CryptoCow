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

var graphOffsetHeight = 120;

var plotLine = two.makeLine(0,sH-graphOffsetHeight,sW,sH-graphOffsetHeight);
plotLine.linewidth = 2;
plotLine.stroke = "black";

var zoom = two.makeText("zoom",sW/2,sH+15-graphOffsetHeight);
zoom.fill = "black";
zoom.size = 12;
zoom.family = 'Karla';
zoom.value = "zoom";

var colorStyle = "black";
var tickQuan = 150;
var bigTick = 5;
var tickSpan = -10;
var rightOffset = sW-60;
var tickerGroup = []

for(i=0;i<tickQuan;i++){
  if(i/bigTick % 1 == 0){
    tick = two.makeLine(i*tickSpan+rightOffset,sH-graphOffsetHeight,i*tickSpan+rightOffset,sH+15-graphOffsetHeight);
    tick.stroke = colorStyle;
    integer = two.makeText(today,i*tickSpan+rightOffset,sH+25-graphOffsetHeight);
    integer.fill = colorStyle;
    integer.family = 'Karla';
    tickerGroup.push(tick,integer);
  }else{
    tick = two.makeLine(i*tickSpan+rightOffset,sH-graphOffsetHeight,i*tickSpan+rightOffset,sH+10-graphOffsetHeight);
    tick.stroke = colorStyle;
    tickerGroup.push(tick);
  }
}

two.update();


//
