const { initialize } = require("./step3");

describe("step3", () => {
  test("initializes correctly", () => {
    expect(initialize()).toEqual({
      A: Buffer.from([0x67, 0x45, 0x23, 0x01]),
      B: Buffer.from([0xef, 0xcd, 0xab, 0x89]),
      C: Buffer.from([0x98, 0xba, 0xdc, 0xfe]),
      D: Buffer.from([0x10, 0x32, 0x54, 0x76]),
    });
  });
});
