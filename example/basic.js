var score = require('../')(10);
// we've created a scoring function with a max byte length of 10.
console.log(score('Carlos Rodriguez'));
// the result is actually an instance of justmoon/node-bignum, with a special
// toString() method that zero-pads the value.
// <BigNum 067097114108111115032082111100>
console.log(score('Carlos Rodriguez').toNumber());
// 6.709711410811112e+28
