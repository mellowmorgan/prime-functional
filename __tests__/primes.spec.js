import primes from '../src/primes.js';

describe('primes function', () => {
  test('should return 2 if input is 3', () => {
    const result = primes(3);
    expect(result).toEqual([2]);
  });

  test('should return 2,3 if input is 5', () => {
    const result = primes(5);
    expect(result).toEqual([2,3]);
  });
  test('should return 2,3,5,7,11,13 if input is 14', () => {
    const result = primes(14);
    expect(result).toEqual([2,3,5,7,11,13]);
  });

});
