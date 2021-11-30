/**
 * 
 * Mocha asincrono. Con Axios se simplifica el proceso, con fetch supone més lineas de código
 * 
 * https://masteringjs.io/tutorials/mocha/async
 */

//const assert = require("assert");
//const axios = require("axios");
//const fetch = require("node-fetch");

import assert from 'assert';
import axios from 'axios';
import fetch from 'node-fetch';
import {suma} from '../src/js/operaciones.mjs';


// Amb Axios

describe("axios get sobre httpbin, answer = 42", function () {
  it("works", async function () {
    const res = await axios.get("http://httpbin.org/get?answer=42");

    //console.log(res);

    assert.strictEqual(res.data.args.answer, '42');
  });
});

// Con fetch

describe("fetch sobre httpbin, answer = 42", function () {
    it("works", async function () {

      const res = await fetch("http://httpbin.org/get?answer=42");
      const promesa = res.json();
      promesa.then( (dades) => { assert.strictEqual(dades.args.answer, '42') } );
  });
});
  
  