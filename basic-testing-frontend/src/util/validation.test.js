import {it, expect, describe} from "vitest";
import {validateNumber, validateStringNotEmpty} from "./validation";

describe('validateStringNotEmpty()', () => {
    it('should throw an error, if an empty string is provided', ()=>{
        const input = '';

        const result = ()=>validateStringNotEmpty(input);

        expect(result).toThrow();
    });

    it('should throw an error with a message that contains a reason (must not be empty)', ()=>{
        const input = '';

        const result = ()=>validateStringNotEmpty(input);

        expect(result).toThrow(/must not be empty/);
    });

    it('should throw an error if a long string of blanks is provided', ()=>{
        const input = '';

        const result = ()=>validateStringNotEmpty(input);

        expect(result).toThrow();
    });

    it('should throw an error if any other value than a string is provided', ()=>{
        const inputNum = 1;
        const inputBool = 1;
        const inputObj = {};

        const validationNum = ()=>validateStringNotEmpty(inputNum);
        const validationBool = ()=>validateStringNotEmpty(inputBool);
        const validationObj = ()=>validateStringNotEmpty(inputObj);

        expect(validationNum).toThrow();
        expect(validationBool).toThrow();
        expect(validationObj).toThrow();
    });

    it('should not throw an error, if a non-empty string is provided', ()=>{
        const input = "valid";
        const result = ()=>{
            validateStringNotEmpty(input)
        }
        expect(result).not.toThrow();
    })
})

describe('validateNumber()', ()=>{
    it('should throw an error if NaN is provided', ()=>{
        const input = NaN;
        const result = ()=>{
            validateNumber(input)
        }
        expect(result).toThrow();
    })

    it('should throw an error with a message that contains a reason (invalid number)', ()=>{
        const input = NaN;
        const result = ()=>{
            validateNumber(input)
        }
        expect(result).toThrow(/Invalid number/);
    })

    it('should throw an error, if a non-numeric value is provided', ()=>{
        const input = "1";
        const result = ()=>{
            validateNumber(input)
        }
        expect(result).toThrow();
    })

    it('should not throw an error, if a number is provided', ()=>{
        const input = 1;
        const result = ()=>{
            validateNumber(input)
        }
        expect(result).not.toThrow();
    })
})
