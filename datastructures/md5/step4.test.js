const { F, G, H, I, getT, rotateLeft } = require("./step4");

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
  describe('getT', () => {
    test('1', () => {
      expect(getT(1)).toBe(3614090360);
    })
    test('16', () => {
      expect(getT(16)).toBe(1236535329);
    })
  })
  describe('rotateLeft', () => {
    test('1', () => {
      expect(rotateLeft(1)).toBe(256);
    })
    test('16', () => {
      expect(rotateLeft(16)).toBe(4097);
    })
  })
});
