const twiceAsOld = require('./twiceAsOld');

describe('twiceAsOld', () => {
    test('1', () => {
        expect(twiceAsOld(36, 7)).toBe(22);
    })
    test('2', () => {
        expect(twiceAsOld(20, 5)).toBe(10);
    })
    test('3', () => {
        expect(twiceAsOld(32, 10)).toBe(12);
    })
})