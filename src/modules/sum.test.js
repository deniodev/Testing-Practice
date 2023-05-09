import {
  stringLength, reverseString, calculator, capitalize
} from './sum.js';


test('string has atleast 1 and atmost 10 characters', () => {
  const string = 'denio';
  expect(stringLength(string)).toBeGreaterThanOrEqual(1);
  expect(stringLength(string)).toBeLessThanOrEqual(10);
});

test('reverse name to equal eman', () => {
  const stringReverse = 'name';
  expect(reverseString(stringReverse)).toMatch(/eman/);
});


describe('Calculator', () => {
  describe('add()', () => {
    test('should add two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });
  });

  describe('subtract()', () => {
    test('should subtract two numbers', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });
  });

  describe('divide()', () => {
    test('should divide two numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('multiply()', () => {
    test('should multiply two numbers', () => {
      expect(calculator.multiply(4, 7)).toBe(28);
    });
  });
});

describe('capitalize', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('this is a test')).toBe('This is a test');
    expect(capitalize('1st letter should be capitalized')).toBe('1st letter should be capitalized');
  });
});