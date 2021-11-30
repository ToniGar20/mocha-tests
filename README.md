# Tests Unitarios en Front Web

Tests unitarios con Mocha.js para aplicación web (_No para Node.js_).

## Preparar el entorno

1. Instala `Mocha` como dependencia de desarrollo con:
```bash
npm install --save-dev mocha
```

2. Crea un archivo `package.json` si no lo tienes con:
```bash
npm init -y
```
3. Crea una carpeta llamada `test` en el directorio raíz e introduce dentro de los archivos de test (como en el ejemplo de este repositorio.)
4. En `package.json`, debe haber un descriptor en el primer nivel como:
```
  "scripts": {
    "test": "mocha test"
  }
```

## Configurar el soporte por módulos ES6

1. Los archivos de módulos deberían tener la extensión `.mjs`
2. En el archivo `package.json`, añade este descriptor en el primer nivel de JSON:
```
"type": "module"
```

## Ejecutar los test,
```
npm test
```

## Webgrafía
- [Unit Testing in JavaScript with Mocha, Tania Rascia, 03-27-2018](https://www.taniarascia.com/unit-testing-in-javascript)
- [Mocha Docs](https://mochajs.org/)
- https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling
- https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js
- https://dev.to/yerac/attempting-to-use-mocha-chai-to-unit-test-es6-3fcm

### Ampliaciones
Tests con Mocha (y Chai) para Node.js, en [este repositorio](https://github.com/classicoman2/tests-mocha-chai-nodejs-modules).
