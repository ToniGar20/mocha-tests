/**
 *  TESTS con CHAI
 * 
 *  Documentación de Chai, https://www.chaijs.com/
 * 
 *  assert --> TDD (clásico)
 *  expect, should --> BDD (más moderno)
 *
 */


//var assert = require("chai").assert;
//var expect = require("chai").expect;
//const operaciones = require("../src/operaciones.mjs");


import chai from 'chai';
import {creaArrayDe3} from '../src/js/operaciones.mjs';


 /* DESCRIBE: apartado */
describe("#pruebas con creaArrayDe3()", function () {
    /* IT: TEST CASE */
  it("la longitud es 3", function () {
    //assert.lengthOf()
    chai.assert.lengthOf(
      creaArrayDe3(1, 2, 3),
      3,
      "Array es de longitud 3"
    );
    //expect().to.have.length()
    chai.expect(creaArrayDe3(1, 2, 3)).to.have.length(3);
  });

  it("Los tres elementos del array están incluidos en él", function () {
    //expect().to.include()
    chai.expect(creaArrayDe3(10, 20, 35)).to.include(10);
    chai.expect(creaArrayDe3(10, 20, 35)).to.include(20);
    chai.expect(creaArrayDe3(10, 20, 35)).to.include(35);
  });

  /* CONTEXT: Puramente descriptivo, subapartado en un Describe */
  context("amb numeros", function () {
    it("Els tres elements són de tipus 'number", function () {
      //assert.typeOf
      chai.assert.typeOf(creaArrayDe3(10, 20, 35)[0], "number");
      //assert.equal
      chai.assert.equal(typeof creaArrayDe3(10, 20, 35)[1], "number");
      //expect().to.be.a()
      chai.expect(creaArrayDe3(10, 20, 35)[2]).to.be.a("number");
    });
  });

  /*  
    context('with number arguments', function() {
      it('should return sum of arguments', function() {
        expect(sum(1, 2, 3, 4, 5)).to.equal(15)
      })
      
      it('should return argument when only one argument is passed', function() {
        expect(sum(5)).to.equal(5)
      })
    })
    
    context('with non-number arguments', function() {
      it('should throw error', function() {
        expect(function() {
          sum(1, 2, '3', [4], 5)
        }).to.throw(TypeError, 'sum() expects only numbers.')
      })
    })
    */
});
//describe('Proves amb Arrays',  function() {

/*
assert("foo" !== "bar", "foo is not bar");
assert(Array.isArray([]), "empty arrays are arrays");

assert.isArray(operacions.creaArrayDe3(1, 2, 3), "is array of numbers");
//assert.include(numbers, 2, 'array contains 2');
///assert.lengthOf(numbers, 5, 'array contains 5 numbers');
*/
//})
