const expect = require('chai').expect;

const fizzBuzz = require('../fizzBuzzer');

describe('fizzbuzz', function(){
    it('should return fizz-buzz', function(){
        const fizzbuzzResult = [
            {num: 15},
            {num: 30},
            {num: 45}
        ];

        fizzbuzzResult.forEach(function(test){
            const result = fizzBuzz(test.num)
            // console.log(result);
            expect(result).to.equal("fizz-buzz");
        })
    });

    it('should return buzz', function(){
        const buzzResult = [
            {num: 5},
            {num: 10},
            {num: 20}
        ];

        buzzResult.forEach(function(test){
            const result = fizzBuzz(test.num);
            expect(result).to.equal("buzz")
        });
    });

    it('should return fizz', function(){
        const fizzResult = [
            {num: 3},
            {num: 6},
            {num: 9}
        ];

        fizzResult.forEach(function(test){
            const result = fizzBuzz(test.num);
            expect(result).to.equal("fizz")
        });
    });

    it('return error if not numerical', function(){
        const errorResult = [
            {num: 'a'},
            {num: 'b'},
        ];

        errorResult.forEach(function(test){
            expect(function(){
                fizzBuzz(test.num);
            }).to.throw(Error);
        });
    })
});