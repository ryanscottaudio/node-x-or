# node-x-or
Node/browser exclusive or function.

## What's this?
Implements the logical [exclusive or](https://en.wikipedia.org/wiki/Exclusive_or) function in JS.

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
