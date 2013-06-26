describe('basic test', function () {
  it('generates correct score', function () {
    var score = scorer(10);
    assert.strictEqual(score('Carlos Rodriguez').toString(), '067097114108111115032082111100');
  });
  it('converts to number', function () {
    var score = scorer(10);
    assert.strictEqual(score('Carlos Rodriguez').toNumber(), 67097114108111115032082111100);
  });
  it('short word', function () {
    var score = scorer(6);
    assert.strictEqual(score('blah').toNumber(), 98108097104000000);
  });
});
