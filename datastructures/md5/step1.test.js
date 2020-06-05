const { pad } = require("./step1");

describe("pad", () => {
  test("should be 448 bits long", () => {
    expect(pad(Buffer.from("foo")).length).toEqual(56);
  });
  test("should end in a 0", () => {
    const buf = pad(Buffer.from("foo"));
    const last = buf[buf.length - 1];
    expect(last).toBe(0);
  });
});
