const makeStack = (maxSize = 2) => {
  let stackValues = [];
  if (maxSize < 1) throw new Error('stack size cannot be < 1');

  return {
    isEmpty: () => stackValues.length === 0,
    size: () => stackValues.length,
    push: (value) => {
      if (stackValues.length === maxSize) throw new Error('stack size cannot exceed 3');
      stackValues.push(value);
    },
    pop: () => {
      if (stackValues.length === 0) throw new Error('cannot pop empty stack');
      return stackValues.pop();
    }
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
    stack = makeStack(3);
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

    const underFlow = () => {
      stack.pop();
    };
    underFlow.should.throw('cannot pop empty stack');
  });

  it('pops the same one pushed', () => {
    stack.push('a');
    stack.pop().should.be.equal('a');
  });

  it('pops the same two pushed', () => {
    stack.push('a');
    stack.push('b');
    stack.pop().should.be.equal('b');
    stack.pop().should.be.equal('a');
  });
  it('accepts only positive capacity', () => {
    (() => {
      stack = makeStack(0);
    }).should.throw('stack size cannot be < 1');
  });
});

