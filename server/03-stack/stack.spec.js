const makeStack = () => {
  let stackSize = 0;

  // noinspection JSAnnotator
  return {
    isEmpty: () => stackSize === 0,
    size: () => stackSize,
    push: () => {
      if (stackSize === 3) throw new Error('stack size cannot exceed 3');
      stackSize++;
    },
    pop: () => {
      if (stackSize === 0) throw new Error('cannot pop empty stack');
      stackSize--;
    },
  };
};

  let stack;

describe.only('the stack spec', () => {
  beforeEach(() => {
    stack = makeStack();
  });

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
    stack.push();
    stack.size().should.equal(1);
  });

  it('leaves stack empty when pushed and popped', () => {
    stack.push();
    stack.pop();
    stack.isEmpty().should.be.true();
  });

  it('leaves stack size 0 when pushed and popped', () => {
    stack.push();
    stack.pop();
    stack.size().should.equal(0);
  });

  it('overflows', () => {
    stack.push();
    stack.push();
    stack.push();
    (() => {
      stack.push();
    }).should.throw('stack size cannot exceed 3');
  });

  it('under-flows', () => {
    stack.push();
    stack.pop();
    (() => {
      stack.pop();
    }).should.throw('cannot pop empty stack');
  });

  it('pops the same one pushed');
  it('pops the same two pushed');
  it('accepts only positive capacity');
});

