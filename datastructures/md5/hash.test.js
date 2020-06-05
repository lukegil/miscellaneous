const { hash } = require("./hash");

describe("hash", () => {
  test("works", () => {
    expect(hash("")).toEqual("d41d8cd98f00b204e9800998ecf8427e");
    expect(hash("a")).toEqual("0cc175b9c0f1b6a831c399e269772661");
    expect(hash("abc")).toEqual("900150983cd24fb0d6963f7d28e17f72");
    expect(hash("message digest")).toEqual("f96b697d7cb7938d525a2f31aaf161d0");
    expect(hash("abcdefghijklmnopqrstuvwxyz")).toEqual(
      "c3fcd3d76192e4007dfb496cca67e13b"
    );
    expect(
      hash("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
    ).toEqual("d174ab98d277d9f5a5611c2c9f419d9f");
    expect(
      hash(
        "12345678901234567890123456789012345678901234567890123456789012345678901234567890"
      )
    ).toEqual("57edf4a22be3c955ac49da2e2107b67a");
  });
});
