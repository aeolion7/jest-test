const sum = require('./sum');

test('adds 1 and 2 and returns 3', () => {
  expect(sum(1, 2)).toBe(3);
});

/*
expect() returns an "expectation object". typically, "matchers" are called
on them. in the following test case, .toBe(4) is the matcher.
*/

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

/*
.toBe() uses Object.is. to check the value of an object, use .toEqual(), which
recursively checks every field of an object or array.
*/

test('object assignment', () => {
  const data = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

/*
toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite of toBeUndefined
toBeTruthy matches anything that an if statement treats as true
toBeFalsy matches anything that an if statement treats as false
*/

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('undefined', () => {
  const w = undefined;
  expect(w).not.toBeNull();
  expect(w).not.toBeDefined();
  expect(w).toBeUndefined();
  expect(w).not.toBeTruthy();
  expect(w).toBeFalsy();
});

// number comparison matchers

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

/*
for floating point equality, use toBeCloseTo instead of toEqual,
because you don't want a test to depend on a tiny rounding error.
*/

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3); won't work because of rounding error
  expect(value).toBeCloseTo(0.3);
});

// strings can be checked against regular expressions using .toMatch()

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// arrays and iterables can be checking using .toContain()

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});

// .toThrow() can be used to check for exceptions

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});
