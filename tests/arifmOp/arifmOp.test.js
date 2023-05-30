const arifmOp = require('./arifmOp');

describe('arifmOp', () => {
    test('+', () => {
        expect(arifmOp(2,2,"+")).toBe(4);
    })
    test('-', () => {
        expect(arifmOp(4,2,"-")).toBe(2);
    })
    test('/', () => {
        expect(arifmOp(8,4,"/")).toBe(2);
    })
    test('*', () => {
        expect(arifmOp(4,6,"*")).toBe(24);
    })
})