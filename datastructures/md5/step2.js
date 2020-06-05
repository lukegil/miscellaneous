function appendLength(len, buffer) {
  const firstWord = Buffer.alloc(4); // lower 32 bits
  firstWord.writeUInt32BE(len & 0xffffffff);

  const secondWord = Buffer.alloc(4); // upper
  secondWord.writeUInt32BE(len >>> 31);

  buffer = Buffer.concat([buffer, firstWord]);
  buffer = Buffer.concat([buffer, secondWord]);
  return buffer;
}

module.exports = { appendLength };
