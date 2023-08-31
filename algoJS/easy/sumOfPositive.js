// Ne supprimez pas la ligne ci-dessous
const Test = require("@codewars/test-compat");

// Rédigez la fonction répondant à l'exercice ci-dessous

function positiveSum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (element > 0) {
      sum += element;
    }
  });
  return sum;
}

// Indiquez le code de test fourni par codewars ci-dessous
// (section Sample Tests en bas à droite de l'éditeur)
const { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1, 2, 3, 4, 5]), 15);
  });
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1, -2, 3, 4, 5]), 13);
  });
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([]), 0);
  });
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([-1, -2, -3, -4, -5]), 0);
  });
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([-1, 2, 3, 4, -5]), 9);
  });
});
