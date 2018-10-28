'use strict';

var assert = require('assert');
var tasks = require('../make');
it.optional = require('../extensions/it-optional');

describe('make', function() {
    it.optional('should perform the passed function for all previously received arguments', function() {
       assert.equal(777, tasks.make(15)(34, 21, 666)(41)((a, b) => a + b ));
       assert.equal(777, tasks.make(34, 21, 666)(15)(41)((a, b) => a + b ));
       assert.equal(292447260, tasks.make(34, 21, 666)(15)(41)((a, b) => a * b ));
       assert.equal(0.000003952849481304766, tasks.make(34, 21, 666)(15)(41)((a, b) => a / b ));
       assert.equal(-709, tasks.make(34, 21, 666)(15)(41)((a, b) => a - b ));
   });

   it.optional('should save function, if it is the first in chain', function() {
      assert.equal(777, tasks.make((a, b) => a + b )(34, 21, 666)(15)(41));
  });
});
