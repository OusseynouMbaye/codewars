// Ne supprimez pas la ligne ci-dessous
const Test = require("@codewars/test-compat");

// Rédigez la fonction répondant à l'exercice ci-dessous

function removeChar(str) {
  return str.slice(1, -1);
}

// Indiquez le code de test fourni par codewars ci-dessous
// (section Sample Tests en bas à droite de l'éditeur)
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar("eloquent"), "loquen");
  });
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar("country"), "ountr");
  });
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar("person"), "erso");
  });
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar("place"), "lac");
  });
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar("ooopsss"), "oopss");
  });
});
