// var katzDeliLine = []; passed from test script

// function 1
var line = [];
var n = 1;

function takeANumber(line){

  line.push(n);
  n += 1;
  return `You are number ${line.length} in line.`;
}
// function 2

function nowServing (katzDeliLine){
  
   if (katzDeliLine.length > 0){
     return `Currently serving ${katzDeliLine.shift()}.`;
   }else {
    return "There is nobody waiting to be served!";
   }
}

//  function 3

function currentLine(line){
  var lineArray = [];

  for(var i = 0; i < line.length; i++) {
        lineArray.push(` ${i + 1}. ${line[i]}`)
  }
  if (line.length > 0){
    return `The line is currently:${lineArray}`;
  }else {
      return "The line is currently empty.";
   }
}
