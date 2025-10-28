// instead of using lodash
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Josh Comeur's version from https://www.joshwcomeau.com/snippets/javascript/range/
const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};


// this alternative range code writted by Copilot Claude
// function range(size, startAt = 0) {
//   return [...Array(size).keys()].map(i => i + startAt);
// }


// Convert polar coordinates (angle in degrees, distance) to cartesian (x, y)
const convertPolarToCartesian = (angle, distance) => {
  const angleInRadians = convertDegreesToRadians(angle);

  const x = Math.cos(angleInRadians) * distance;
  const y = Math.sin(angleInRadians) * distance;

  return [x, y];
};

const convertDegreesToRadians = (angle) => (angle * Math.PI) / 180;

