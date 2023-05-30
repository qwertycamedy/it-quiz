const season = require('./season');

describe('season', () => {
    test('Зима 1', () => {
        expect(season(12)).toBe("winter");
    })
    test('Зима 2', () => {
        expect(season(1)).toBe("winter");
    })
    test('Зима 3', () => {
        expect(season(2)).toBe("winter");
    })
    test('Весна 1', () => {
        expect(season(3)).toBe("spring");
    })
    test('Весна 2', () => {
        expect(season(4)).toBe("spring");
    })
    test('Весна 3', () => {
        expect(season(5)).toBe("spring");
    })
    test('Лето 1', () => {
        expect(season(6)).toBe("summer");
    })
    test('Лето 2', () => {
        expect(season(7)).toBe("summer");
    })
    test('Лето 3', () => {
        expect(season(8)).toBe("summer");
    })
    test('Осень 1', () => {
        expect(season(9)).toBe("fall");
    })
    test('Осень 2', () => {
        expect(season(10)).toBe("fall");
    })
    test('Осень 3', () => {
        expect(season(11)).toBe("fall");
    })
})