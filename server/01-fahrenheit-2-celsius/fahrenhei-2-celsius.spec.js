describe('the fahrenheit2celsius canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  function farenheit2celsius(temperature) {
    return (temperature - 32) * 5 / 9;
  }

  describe('fahrenheit2celsius should', () => {
    it('give 0°C for 32°F', () => {
      farenheit2celsius(32).should.equal(0);
    });
    it('give 10°C for 50°F', () => {
      farenheit2celsius(50).should.equal(10);
    });
  });
});
