# node-x-or
Node/browser exclusive or function.

## Installation
`npm install x-or`

## Usage
```js
var xor = require('x-or');

xor(true, false) === true;
xor(false, true) === true;

xor(true, true) === false;
xor(false, false) === false;

```
