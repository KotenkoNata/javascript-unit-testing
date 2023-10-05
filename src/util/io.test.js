import {it, expect} from "vitest";

import writeData from "./io.js";

it("should execute the writeFile method", ()=>{
    const testData = "Test"
    const testFilename = "test.txt"
    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
})