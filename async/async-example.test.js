import {expect, it} from 'vitest';
import {generateToken} from "./async-example.js";

it("should generate a token value", ()=>{
    const testUserEmail = "test@test.com";

    generateToken(testUserEmail, (err, token)=>{
        expect(token).toBe(2);
    });
})