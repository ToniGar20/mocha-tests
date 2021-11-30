# Tests Unitaris a Front Web

Tests unitaris amb Mocha.js per a aplicació web (_No per a Node.js_). 

## Preparar l'entorn

1. Instal·la `Mocha` com a dependència de desenvolupament amb:
```bash
npm install --save-dev mocha
```

2. Crea un fitxer `package.json` si no el tens amb:
```bash
npm init -y
```
3. Crea una carpeta anomenada `test` en el directori arrel i introdueix a dins els fitxers de test (com en l'exemple d'aquest repositori.)
4. En el `package.json`, hi ha d'haver un descriptor en el primer nivell com:
```
  "scripts": {
    "test": "mocha test"
  }
```

## Configurar el suport per mòduls ES6

1. Els fitxers de mòduls haurien de tenir l'extensió `.mjs` 
2. En el fitxer `package.json`, afegeix aquest descriptor en el primer nivell del JSON:
```
"type": "module"
```

## Executar els test,
```
npm test
```

## Webgrafia
- [Unit Testing in JavaScript with Mocha, Tania Rascia, 03-27-2018](https://www.taniarascia.com/unit-testing-in-javascript)
- [Mocha Docs](https://mochajs.org/)
- https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling
- https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js
- https://dev.to/yerac/attempting-to-use-mocha-chai-to-unit-test-es6-3fcm

### Ampliacions
Tests amb Mocha (i Chai) per a Node.js, en [aquest repositori](https://github.com/classicoman2/tests-mocha-chai-nodejs-modules).