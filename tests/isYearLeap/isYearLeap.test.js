const isYearLeap = require('./isYearLeap');

describe('isYearLeap', () => {
    test('Високосный', () => {
        expect(isYearLeap(2020)).toBe(true);
    })
    test('Не високосный', () => {
        expect(isYearLeap(2021)).toBe(false);
    })
})