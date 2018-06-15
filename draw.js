
var width;
var height;
var counter;

function setup() {
  width = 800;
  height = 500;
  createCanvas(width, height);
  background(240);
  counter = 5;

  console.log(generateRecaman(50));

  var sequence = generateRecaman(150);
  drawRecaman(sequence);
}

function draw() {
  background(240);
  var sequence = generateRecaman(counter);
  drawRecaman(sequence);
  counter ++;
}


function generateRecaman(x) {
  var prevNum = 0;
  var results = [prevNum];

  for (var i=1; i < x; i++) {
    var back = prevNum - i;
    var canGoBack = back > 0 && !results.includes(back);

    var nextNum = canGoBack ? back : prevNum + i;
    // Store nextNum in prevNum variable for next iteration to access
    prevNum = nextNum;
    results.push(prevNum);
  }

  return results;
}

function drawRecaman(seq) {
  var ratio = height * 0.7 / seq.length;
  for (var i=0; i < seq.length - 1; i++) {
    var x = seq[i];
    var y = seq[i + 1];
    var center = (x + y) / 2;
    var radius = Math.abs(x - y) / 2;
    // console.log(x, y, center, radius);
    var start = i % 2 == 0 ? 0 : PI;
    var stop = i % 2 == 0 ? PI : 2*PI;

    noFill();
    arc(center * ratio, height/2, radius * ratio * 2, radius * ratio * 2, start, stop);
  }
}
