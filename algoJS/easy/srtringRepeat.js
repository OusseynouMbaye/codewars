// Ne supprimez pas la ligne ci-dessous
const Test = require("@codewars/test-compat");

// Rédigez la fonction répondant à l'exercice ci-dessous
/**Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times. */
function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

// Indiquez le code de test fourni par codewars ci-dessous
// (section Sample Tests en bas à droite de l'éditeur)
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", function () {
  it("Basic tests", function () {
    assert.strictEqual(repeatStr(3, "*"), "***");
  });
  it("Basic tests", function () {
    assert.strictEqual(repeatStr(5, "#"), "#####");
  });
  it("Basic tests", function () {
    assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
  });
});
