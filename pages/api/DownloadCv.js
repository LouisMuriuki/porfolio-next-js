import path from 'path';
import fs from 'fs';

export default (req, res) => {
  const filePath = path.resolve('./public/resume-cv-v1.pdf');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.setHeader('Content-Disposition', 'attachment; filename=sample.pdf');
    res.end(data);
  });
};
