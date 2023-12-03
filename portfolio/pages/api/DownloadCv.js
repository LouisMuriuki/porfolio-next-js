import path from "path";
import fs from "fs";

export default async function (req, res) {
  const filePath = path.resolve("./public/CURRICULUM VITAE.docx");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    console.log(data);
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=CURRICULUM VITAE.docx"
    );
    res.status(200).end(data);
  });
}
