const divisibleBy = require('./divisibleBy');

describe('divisibleBy', () => {
    test('1', () => {
        expect(divisibleBy([1, 2, 3, 4, 5, 6], 2)).toEqual([ 2, 4, 6 ]);
    })
    test('2', () => {
        expect(divisibleBy([1, 2, 3, 4, 5, 6], 3)).toEqual([ 3, 6 ]);
    })
    test('3', () => {
        expect(divisibleBy([1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([ 4, 8 ]);
    })
})