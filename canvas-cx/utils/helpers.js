// helper functions
// most copied from Radu from Finland

function toDeg(rad) {
  return rad*180/Math.PI;
}

function toRad(deg) {
  return deg*Math.PI/180;
}

function average(p1, p2) {
  return {
    x:(p1.x+p2.x)/2,
    y:(p1.y+p2.y)/2
  }
}

// also in math.js
function distance(p1, p2) {
  // return Math.sqrt((p1.x-p2.x)**2 + (p1.y-p2.y)**2);
  return Math.hypot(p1.x-p2.x, p1.y-p2.y);
}
