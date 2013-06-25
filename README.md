scorer
======

generate the total ordinal score of a string

[![build status](https://secure.travis-ci.org/carlos8f/score.png)](http://travis-ci.org/carlos8f/score)

## Idea

The idea is that given an an ASCII or lower-ordinal utf8 string, `scorer` will
give you a "string ordinal", a deterministic number which any set of strings
could be sorted by, without direct comparison or having access to the entire set.

The catch is that you must pre-define the max byte length of your index.

One use case could be generating ranks to use with
[redis sorted sets](http://redis.io/commands#sorted_set).

## Example

```js
var score = require('scorer')(10);
// we've created a scoring function with a max byte length of 10.
console.log(score('Carlos Rodriguez'));
// the result is actually an instance of justmoon/node-bignum, with a special
// toString() method that zero-pads the value.
// <BigNum 067097114108111115032082111100>
console.log(score('Carlos Rodriguez').toNumber());
// 6.709711410811112e+28
``` 

- - -

### Developed by [Terra Eclipse](http://www.terraeclipse.com)
Terra Eclipse, Inc. is a nationally recognized political technology and
strategy firm located in Aptos, CA and Washington, D.C.

- - -

### License: MIT

- Copyright (C) 2013 Carlos Rodriguez (http://s8f.org/)
- Copyright (C) 2013 Terra Eclipse, Inc. (http://www.terraeclipse.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
