// Ne supprimez pas la ligne ci-dessous
const Test = require("@codewars/test-compat");

// Rédigez la fonction répondant à l'exercice ci-dessous

function opposite(number) {
  console.log(number);
  return -number;
}

// Indiquez le code de test fourni par codewars ci-dessous
// (section Sample Tests en bas à droite de l'éditeur)
const { assert } = require("chai");

describe("Fixed tests", () => {
  it("Is it a function?", () => {
    assert.strictEqual(
      typeof opposite,
      "function",
      "opposite should be a function"
    );
  });
  it("should return -1", () => {
    assert.strictEqual(opposite(1), -1);
  });
  it("should return 0", () => {
    assert.strictEqual(opposite(0), 0);
  });
  it("should return -4.25", () => {
    assert.strictEqual(opposite(4.25), -4.25);
  });
  it("should return -3.3333333", () => {
    assert.strictEqual(opposite(3.3333333), -3.3333333);
  });
  it("should return 12525220.3325", () => {
    assert.strictEqual(opposite(-12525220.3325), 12525220.3325);
  });
  it("should return 5", () => {
    assert.strictEqual(opposite(-5), 5);
  });
});
