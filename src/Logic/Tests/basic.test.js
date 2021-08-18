import basic from '../basic'
//Brain dead test making
describe('Every basic operator works properly', () => {
    it('Works with addition', () => {
        expect(basic.add(2,4)).toBe(6)
    })
    it('Works with divison', () => {
        expect(basic.subtract(2,4)).toBe(-2)
    })
    it('Works with subtraction', () => {
        expect(basic.divide(2,4)).toBe(0.5)
    })
    it('Works with multiplication', () => {
        expect(basic.multiply(2,4)).toBe(8)
    })
    it('Operate works with previous functions', () => {
        expect(basic.operate(basic.multiply, 2, 4)).toBe(8)
    })
    //funny
    it('big', () => {
        expect(basic.add(200000000000000000000000000000000000000000000000000000,200000000000000000000000000000000000000000000000000000)).toBe(400000000000000000000000000000000000000000000000000000)
    })
})