var test = require('tape');

var xor = require('./');

test('Logic tests', function (t) {
  t.true(xor(true, false));
  t.true(xor(false, true));

  t.false(xor(true, true));
  t.false(xor(false, false));

  t.end();
});
