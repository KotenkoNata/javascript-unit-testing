import {expect, it} from 'vitest';
import {generateToken} from "./async-example.js";

it("should generate a token value", (done)=>{
    const testUserEmail = "test@test.com";

    generateToken(testUserEmail, (err, token)=>{
        try {
            expect(token).toBeDefined();
            done();
        }catch (e) {
            done(e);
        }
    });
})