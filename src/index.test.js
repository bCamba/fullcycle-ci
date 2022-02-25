const { sum, multiply, divide, subtract, modulo, square } = require('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

test('multiply 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

test('divide 6 by 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
  });

test('subtract 6 by 3 to equal 3', () => {
    expect(subtract(6, 3)).toBe(3);
  });

test('modulo 6 by 3 to equal 0', () => {
    expect(modulo(6, 3)).toBe(0);
  });

test('square 3 to be 9', () => {
    expect(square(3)).toBe(9);
  });
