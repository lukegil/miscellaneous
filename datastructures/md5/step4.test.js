const { F, G, H, I } = require("./step3");

describe("step3", () => {
  describe("F", () => {
    test("works", () => {
      expect(F(Buffer.from([3]), Buffer.from([11]), Buffer.from([14]))).toEqual(
        Buffer.from([15])
      );
    });
  });
  describe("G", () => {
    test("works", () => {
      expect(G(Buffer.from([3]), Buffer.from([11]), Buffer.from([14]))).toEqual(
        Buffer.from([3])
      );
    });
  });
  describe("H", () => {
    test("works", () => {
      expect(H(Buffer.from([3]), Buffer.from([11]), Buffer.from([14]))).toEqual(
        Buffer.from([6])
      );
    });
  });
  describe("I", () => {
    test("works", () => {
      expect(I(Buffer.from([3]), Buffer.from([11]), Buffer.from([14]))).toEqual(
        Buffer.from([10])
      );
    });
  });
});
