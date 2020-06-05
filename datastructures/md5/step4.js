const T_CONST = 4294967296;

function F(x, y, z) {
  const result = [];
  for (let i = 0; i < x.length; i++) {
    result.push((x[i] & y[i]) | ((~x[i] >>> 0) & z[i]));
  }
  return Buffer.from(result);
}

function G(x, y, z) {
  const result = [];
  for (let i = 0; i < x.length; i++) {
    result.push((x[i] & z[i]) | (y[i] & (~z[i] >>> 0)));
  }
  return Buffer.from(result);
}

function H(x, y, z) {
  const result = [];
  for (let i = 0; i < x.length; i++) {
    result.push(x[i] ^ y[i] ^ z[i]);
  }
  return Buffer.from(result);
}

function I(x, y, z) {
  const result = [];
  for (let i = 0; i < x.length; i++) {
    result.push(y[i] ^ (x[i] & (~z[i] >>> 0)));
  }
  return Buffer.from(result);
}

function getT(i) {
  return Math.round(T_CONST * Math.abs(Math.sin(i)));
}

function round1(a, b, c, d, x, s, t) {
  a += F(b, c, d) + x + t;
  return rotateLeft(a, s);
}

// no idea why it needs the bar
function rotateLeft(x, n) {
  return (x << n) | (x >> ( 32 - n ));
}

module.exports = {
  F,
  G,
  H,
  I,
  getT,
  rotateLeft,
  round1
};
