import {it, vi} from "vitest";
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
it('first test', ()=>{
    showError('test')
})