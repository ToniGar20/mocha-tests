import assert from "assert";
import { suma, validadorDeTokens, creaArrayDe3 } from "../src/js/operacions.mjs";

describe("Tests funció suma()", function () {
  it("suma correctament", () => {
    assert.equal(suma(2, 2), 4);
    assert.strictEqual(suma(20, 2), 22);
    assert.equal(isNaN(suma(100, "patata")), true);
 });
})

 describe("Tests funció comprovaToken", function () {
  it("Comprova correctament", () => {
    assert.equal(validadorDeTokens("AAAAABBBBBCCCCCDDDDD"), true)
    assert.equal(validadorDeTokens("AAAAABBBB"), false)
    assert.equal(validadorDeTokens("AAAAABBBBBCCCCCDDDD1"), false)
 });
})

 


describe("Tests funció creaArrayDe3()", function () {
  it("creaArray retorna sempre un array", () => {
    assert.strictEqual(typeof creaArrayDe3(1, 2, 3), "object");
  });
  it("creaArray torna sempre un array de 3 elements", () => {
    assert.strictEqual(creaArrayDe3(1, 2, 3).length, 3);
  });
});
