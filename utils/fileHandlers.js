const fs = require("fs");
const { v4: uuid } = require("uuid");

//extensiones permitidas
const allowImageExtension = ["png", "jpeg", "jpg", "gif"];
const allowPDFExtension = ["pdf"];

/**
 * 
 {
    fieldname: 'imagen',
    originalname: '3.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: './public/tmp',
    filename: 'e230c8e3a128aa51a59cf151e1e909da',
    path: 'public\\tmp\\e230c8e3a128aa51a59cf151e1e909da',
    size: 13733
  },
 */

//  { mimetype, path, size },
const saveFile = (
  { mimetype, path, size },
  allowExtension,
  destFolder = "./public/images"
) => {
  try {
    const [type, extension] = mimetype.split("/"); //image/png
    //allowImageExtension.includes(files.mimetype.split("/")[1]);
    if (!allowImageExtension.includes(extension)) throw "Formato no permitido";
    const uid = uuid();
    const fileName = `${uid}.${extension}`;
    const fileNameOut = `${destFolder}/${fileName}`;
    fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));
    //una vez guardado en la carpeta images borramos
    fs.unlink(path, (e) => {
      if (e) throw "No se pudo borrar el archivo temporal ";
    });
    return uid;
  } catch (e) {
    throw e;
  }
};

//size mimetype
const imgFile = (file) => {
  console.log(file);
  return saveFile(file, allowImageExtension);
};
const pdfFile = (file) => {
  return saveFile(file, allowPDFExtension);
};

module.exports = { imgFile, pdfFile };
