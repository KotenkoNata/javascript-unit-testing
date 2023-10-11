import {expect, it, vi, beforeEach} from "vitest";
import {showError} from "./dom";
import * as fs from "fs";
import path from 'path';
import {Window} from "happy-dom";

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);

vi.stubGlobal('document', document);

beforeEach(()=>{
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);
})
it('should add an error paragraph to the id="errors" element', ()=>{
    showError("Test");

    const errorEl = document.getElementById('errors');

    const errorParagraph = errorEl.firstElementChild;

    expect(errorParagraph).not.toBeNull();
})

it('should not contain an error paragraph initially', ()=>{
    const errorEl = document.getElementById('errors');
    const errorParagraph = errorEl.firstElementChild;

    expect(errorParagraph).toBeNull();
})