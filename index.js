var packer = require('int-packer');

function scorer (maxLength) {
  var lengths = [];
  for (var n = 0; n < maxLength; n++) lengths.push(3);
  var p = packer(lengths);
  return function score (str) {
    var values = [], len = str.length;
    for (var i = 0; i < len; i++) values.push(str.charCodeAt(i));
    return p.pack(values);
  };
}
module.exports = scorer;
