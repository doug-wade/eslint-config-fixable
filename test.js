const tap = require('tap');

tap.test("can be required", {}, t => {
  require('.');
  t.pass();
  t.end();
});
