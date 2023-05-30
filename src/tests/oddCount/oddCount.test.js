const oddCount = require('./oddCount');

describe('oddCount', () => {
    test('1', () => {
        expect(oddCount(15)).toBe(7);
    })
    test('2', () => {
        expect(oddCount(7)).toBe(3);
    })
    test('3', () => {
        expect(oddCount(25)).toBe(12);
    })
})