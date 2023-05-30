const isPrime = require('./isPrime');

describe('isPrime', () => {
    test('Простое', () => {
        expect(isPrime(5)).toBe(true);
    })
    test('Не простое', () => {
        expect(isPrime(6)).toBe(false);
    })
    test('1', () => {
        expect(isPrime(1)).toBe(false);
    })
})