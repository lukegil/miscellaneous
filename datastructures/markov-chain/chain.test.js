"use strict";

const { createMarkovChain } = require("./chain");

describe("createMarkovChain", () => {
  test("returns the correct object", () => {
    expect(createMarkovChain("foo")).toEqual({
      getNextWord: expect.any(Function),
      addSentence: expect.any(Function),
      getWord: expect.any(Function),
    });
  });

  describe("MarkovChain", () => {
    describe("getNextWord", () => {
      test("works", () => {
        const chain = createMarkovChain();
        chain.addSentence(["hello", "world"]);
        expect(chain.getNextWord("hello")).toEqual("world");
      });
      test("gets a random one if no next", () => {
        const chain = createMarkovChain();
        chain.addSentence(["hello", "world"]);
        const next = chain.getNextWord("world");
        expect(next === chain.getWord("hello") || chain.getWord("world"))
          .toBeTruthy;
      });
    });
  });
});
