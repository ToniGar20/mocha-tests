import assert from "assert";
import { suma, validadorDeTokens, creaArrayDe3 } from "../src/js/operaciones.mjs";

describe("Tests función suma()", function () {
  it("suma correcta", () => {
    assert.equal(suma(2, 2), 4);
    assert.strictEqual(suma(20, 2), 22);
    assert.equal(isNaN(suma(100, "patata")), true);
 });
})

 describe("Tests función comprovaToken", function () {
  it("Comprobación correcta", () => {
    assert.equal(validadorDeTokens("AAAAABBBBBCCCCCDDDDD"), true)
    assert.equal(validadorDeTokens("AAAAABBBB"), false)
    assert.equal(validadorDeTokens("AAAAABBBBBCCCCCDDDD1"), false)
 });
})

 


describe("Tests función creaArrayDe3()", function () {
  it("creaArray devuelve siempre un array", () => {
    assert.strictEqual(typeof creaArrayDe3(1, 2, 3), "object");
  });
  it("creaArray devuelve siempre un array de 3 elementos", () => {
    assert.strictEqual(creaArrayDe3(1, 2, 3).length, 3);
  });
});
