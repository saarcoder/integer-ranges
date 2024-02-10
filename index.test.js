const solution = require('./index')
test('Give ordered list of integers with ranges', ()=> {
    expect(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])).toBe("-10--8,-6,-3-1,3-5,7-11,14,15,17-20")
})