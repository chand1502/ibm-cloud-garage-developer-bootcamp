describe.only('the palindrome canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });

  function ispalindrome(phrase) {
    if (phrase.trim().length === 0) return false;
    return phrase.split('').reverse().join('') === phrase;
  }

  describe('a palindrome', () => {
    it('is racecar', () => {
      ispalindrome('racecar').should.be.true();
    });
    it('is not racecars', () => {
      ispalindrome('racecars').should.be.false();
    });
    it('is not race car', () => {
      ispalindrome('race car').should.be.false();
    });
    it('"      " is not a palindrome', () => {
      ispalindrome('      ').should.be.false();
    });
    it('"" is not a palindrome', () => {
      ispalindrome('').should.be.false();
    });
    it('is "mom dad mom"', () => {
      ispalindrome('mom dad mom').should.be.true();
    });
  });
});
