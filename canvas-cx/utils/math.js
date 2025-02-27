// Radu from Finland scripts
// 2D Vectors Video
// https://youtu.be/nzyOCd9FcCA

function scale(p, scalar) {
   return { x: p.x * scalar, y: p.y * scalar };
}

function add(p1, p2) {
   return { x: p1.x + p2.x, y: p1.y + p2.y };
}

function subtract(p1, p2) {
   return { x: p1.x - p2.x, y: p1.y - p2.y };
}

function dot(p1, p2) {
   return p1.x * p2.x + p1.y * p2.y;
}

function normalize(p) {
   return scale(p, 1 / magnitude(p));
}

function toPolar({ x, y }) {
   return { dir: direction({ x, y }), mag: magnitude({ x, y }) };
}

function toXY({ mag, dir }) {
   return { x: Math.cos(dir) * mag, y: Math.sin(dir) * mag };
}

function direction({ x, y }) {
   return Math.atan2(y, x);
}

function magnitude({ x, y }) {
   return Math.hypot(x, y);
}

// Pythagorean Theorem Video
// https://youtu.be/iqSlzYXdFzw
function distance(p1, p2) {
   return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}

// Linear Interpolation Video
// https://youtu.be/J_puRs40GhM
function lerp(a, b, t) {
   return a + (b - a) * t;
}

function lerp2D(A, B, t) {
   return { x: lerp(A.x, B.x, t), y: lerp(A.y, B.y, t) };
}
