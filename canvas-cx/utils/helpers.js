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

// map a value from one range to another
/**
 *
 * @param {*} value: Number - The value that should be mapped (typically it's between inMin and inMax).
 * @param {*} inMin: Number - The lower bound of the initial range to map from
 * @param {*} inMax: Number - The upper bound of the initial range to map from
 * @param {*} outMin: Number - The lower bound of the range to map to
 * @param {*} outMax: Number - The upper bound of the range to map to
 * @returns Number - The mapped value
 */

function mapRange (value, inMin, inMax, outMin, outMax){
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// constrain a value to a range
function constrain(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
