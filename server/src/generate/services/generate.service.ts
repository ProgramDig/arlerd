import { Injectable } from "@nestjs/common";
import * as PizZip from "pizzip";
import * as fs from "fs";
import * as path from "path";

const Docxtemplater = require("docxtemplater");

@Injectable()
export class GenerateService {
  constructor() {
  }

  generatePlan(data) {
    const dirPath = path.join(__dirname + "../../../../public");
    const template = fs.readFileSync(`${dirPath}/template/template.docx`, "binary");
    const zip = new PizZip(template);
    const docx = new Docxtemplater();

    docx.loadZip(zip);
    docx.setData(data);
    docx.render();

    const output = docx.getZip().generate({ type: "nodebuffer" });
    const outputName = `Індивідувальний план ${data.teacherSecondName} ${data.nowYear}`
    fs.writeFileSync(`${dirPath}/output/${outputName}.docx`, output);
    return output;
  }
}
