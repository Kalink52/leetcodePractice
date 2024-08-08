const intToWords = require('../index')

describe("", () =>{
    test("isFunction?",() =>{
        expect(typeof intToWords).toEqual('function');
    });
    test("Hundreds",() =>{
        let test = 123
        let result = 'One Hundred Twenty Three'
        expect(intToWords(test)).toEqual(result)
    });
    test("Thousands",() =>{
        let test = 1234
        let result = 'One Thousand Two hundred Thirty Four'
        expect(intToWords(test)).toEqual(result)
    });
    test("Millions",() =>{
        let test = 1234567
        let result = 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven'
        expect(intToWords(test)).toEqual(result)
    });
})
