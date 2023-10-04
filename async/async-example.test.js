import {expect, it} from 'vitest';
import {generateToken, generateTokenPromise} from "./async-example.js";

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

it("should generate a token value", ()=>{
    const testUserEmail = 'test@gmail.com';

    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
})

it("should generate a token value", async ()=>{
    const testUserEmail = 'test@gmail.com';

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();
})