describe('sort', function () {
  var names = [], names_alt = [];
  before(function () {
    var score = scorer(20);
    for (var i = 0; i < 5000; i++) {
      var name = namegen();
      name.score = score(name.last + ',' + name.first);
      names.push(name);
      names_alt.push(name);
    }
  });
  it('sorts same as normal comparator', function () {
    names.sort(function (a, b) {
      if (a.score < b.score) return -1;
      if (a.score > b.score) return 1;
      return 0;
    });
    names_alt.sort(function (a, b) {
      if (a.last < b.last) return -1;
      if (a.last > b.last) return 1;
      if (a.first < b.first) return -1;
      if (a.first > b.first) return 1;
      return 0;
    });
    assert.deepEqual(names, names_alt);
  });
});
