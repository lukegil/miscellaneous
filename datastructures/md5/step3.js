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

module.exports = {
  F,
  G,
  H,
  I,
};
