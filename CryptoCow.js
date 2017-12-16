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

var zoom = two.makeText("-    zoom    +",sW/2,sH + 75 - graphOffsetHeight);
zoom.fill = "black";
zoom.size = 30;
zoom.family = 'Karla';
zoom.value = "-    zoom    +";


//horizontal ticker
var h_colorStyle = "black";
var h_tickQuan = 150;
var h_bigTick = 5;
var h_tickSpan = -10;
var rightOffset = sW-60;
var h_tickerGroup = []

for(i=0;i<h_tickQuan;i++){
  if(i/h_bigTick % 1 == 0){
    tick = two.makeLine(i*h_tickSpan+rightOffset,sH-graphOffsetHeight,i*h_tickSpan+rightOffset,sH+15-graphOffsetHeight);
    tick.stroke = h_colorStyle;
    integer = two.makeText(today,i*h_tickSpan+rightOffset,sH+25-graphOffsetHeight);
    integer.fill = h_colorStyle;
    integer.family = 'Karla';
    h_tickerGroup.push(tick,integer);
  }else{
    tick = two.makeLine(i*h_tickSpan+rightOffset,sH-graphOffsetHeight,i*h_tickSpan+rightOffset,sH+10-graphOffsetHeight);
    tick.stroke = h_colorStyle;
    h_tickerGroup.push(tick);
  }
}
//horizontal ticker

//vertical ticker
var v_colorStyle = "black";
// var v_tickQuan = 150;
// var v_bigTick = 5;
// var v_tickSpan = -10;
// var rightOffset = sW-60;
// var v_tickerGroup = []
//
// for(i=0;i<v_tickQuan;i++){
//   if(i/v_bigTick % 1 == 0){
//     tick = two.makeLine(i*v_tickSpan+rightOffset,sH-graphOffsetHeight,i*v_tickSpan+rightOffset,sH+15-graphOffsetHeight);
//     tick.stroke = v_colorStyle;
//     integer = two.makeText(today,i*v_tickSpan+rightOffset,sH+25-graphOffsetHeight);
//     integer.fill = v_colorStyle;
//     integer.family = 'Karla';
//     v_tickerGroup.push(tick,integer);
//   }else{
//     tick = two.makeLine(i*v_tickSpan+rightOffset,sH-graphOffsetHeight,i*v_tickSpan+rightOffset,sH+10-graphOffsetHeight);
//     tick.stroke = v_colorStyle;
//     v_tickerGroup.push(tick);
//   }
// }
//vertical ticker

//cashline
var cashLine = two.makeLine(rightOffset,10,rightOffset,sH-graphOffsetHeight);
cashLine.stroke = "v_colorStyle";

//cashline

// var h_origin = two.makeLine(rightOffset-10,sH-graphOffsetHeight,rightOffset+10,sH-graphOffsetHeight);
// h_origin.stroke = "red";
// h_origin.linewidth = 3;
//
// var v_origin = two.makeLine(rightOffset,sH-graphOffsetHeight+10,rightOffset,sH-graphOffsetHeight-10);
// v_origin.stroke = "red";
// v_origin.linewidth = 3;

var origin = two.makeCircle(rightOffset,sH-graphOffsetHeight,5);
origin.stroke = "red";
origin.fill = "red";

two.update();


//
