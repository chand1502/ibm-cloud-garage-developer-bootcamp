const makeStack = () => {
  let stackSize = 0;

  return {
    isEmpty: () => stackSize === 0,
    size: () => stackSize,
    push: () => stackSize++
 };
};

let stack = makeStack();

describe.only('the stack', () => {
  it('start empty', () => {
    stack.isEmpty().should.be.true();
  });

  it('starts with stack size 0', () => {
    stack.size().should.equal(0);
  });

  it('is not empty when pushed', () => {
    stack.push();
    stack.isEmpty().should.be.false();
  });

  it('leaves stack size 1 when pushed', () => {
  stack.size().should.equal(1);
  });

  it('leaves stack empty when pushed and popped');
  it('leaves stack size 0 when pushed and popped');
  it('overflows');
  it('under-flows');
  it('pops the same one pushed');
  it('pops the same two pushed');
  it('accepts only positive capacity');
});

