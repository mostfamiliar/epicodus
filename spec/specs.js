describe('pingPong', function() {
  it("the remainder of 15 divided by 3 equals 0", function() {
    expect(pingPong(3)).to.equal(true);
  });

  it("the remainder of 15 divided by 5 equals 0", function() {
    expect(pingPong(5)).to.equal(true);
  });

  it("is false for most even numbers", function() {
    expect(pingPong(2)).to.equal(false);
  });
});
