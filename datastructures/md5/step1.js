const FIFTYSIX_BYTES = 448 / 8;
const SIXTYFOUR_BYTES = 512 / 8;

function pad(buffer) {
  buffer = Buffer.concat([buffer, Buffer.from([128])]);

  do {
    buffer = Buffer.concat([buffer, Buffer.from([0])]);
  } while (buffer.length % SIXTYFOUR_BYTES !== FIFTYSIX_BYTES);

  return buffer;
}

module.exports = { pad };
