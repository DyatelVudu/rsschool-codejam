'use strict';

var assert = require('assert');
var tasks = require('../sumOfOther');
it.optional = require('../extensions/it-optional');

describe('sumOfOther', function() {

    it.optional('should return the array, where each element equal the sum of all other elements', function () {
       [
           {
               arr:      [2, 3, 4, 1],
               expected: [8, 7, 6, 9]
           },{
               arr:      [1, 2, 3],
               expected: [5, 4, 3 ]
           },{
               arr:      [10, 25, 30, 40],
               expected: [95, 80, 75, 65]
           },{
               arr:      [10],
               expected: [0]
           },{
               arr:      [1, 0],
               expected: [0, 1]
           },{
               arr:      [1345425, 235325235, 32353251678, 910453145991, 326819211424],
               expected: [1269860934328, 1269626954518, 1237509028075, 359409133762, 943043068329]

           },{
               arr:      [-1, 2, -3],
               expected: [-1, -4, 1]
           }
       ].forEach(data => {
           assert.deepEqual(
               data.expected,
               tasks.sumOfOther(data.arr)
           );
       });
   });

   it.optional('should contain only integers, or elements that can become integer, array should one-dimensional', function () {
      [
          {
              arr:      [],
              expected: null
          },{
              arr:      [1, '2', 3],
              expected: [5, 4, 3 ]
          },{
              arr:      [1, 'i', 3],
              expected: 'Not all elements in your array are numbers'
          },{
              arr:      [1, [1, 2], 3],
              expected: 'Not all elements in your array are numbers'
          }
      ].forEach(data => {
          assert.deepEqual(
              data.expected,
              tasks.sumOfOther(data.arr)
          );
      });
  });
});
