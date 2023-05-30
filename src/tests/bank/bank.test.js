const bank = require('./bank');

describe('Bank', () => {
    test('Год', () => {
        expect(bank(10000, 1)).toBe(11000);
    })
    test('Обычный вклад', () => {
        expect(bank(1234, 3)).toBe(1642.4540000000004);
    })
    test('Без денег', () => {
        expect(bank(0, 5)).toBe(0);
    })
    test('0 лет', () => {
        expect(bank(200, 0)).toBe(200);
    })
})