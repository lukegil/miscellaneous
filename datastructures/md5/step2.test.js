const { appendLength } = require("./step2");

describe("appendLength", () => {
  test("should append the length", () => {
    const buff = Buffer.from([0x07]);
    const len = 0xFF;
    const expected = Buffer.from([0x07, 0x00, 0x00, 0x00, 0xFF, 0x00, 0x00, 0x00, 0x00]);
    const actual = appendLength(len, buff);
    expect(actual).toEqual(expected);
  });
});
