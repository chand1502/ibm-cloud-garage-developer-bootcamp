describe.only('the palindrome canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });

  function ispalindrome() {
      return true;
  }

  describe('a palindrome', () => {
    it('is racecar', () => {
      ispalindrome('racecar').should.be.true();
    });
    it('is not racecars');
    it('is not race car');
    it('"      " is not a palindrome');
    it('"" is not a palindrome');
    it('is "mom dad mom"');
  });
});
