const { create, createImages } = require("../models/docentes");
const { imgFile, pdfFile } = require("../utils/fileHandlers");

const createDocente = async (bodyObj, fileObj) => {
  try {
    const [idDocente] = await create(bodyObj);
    // console.log("El id del docente " + idDocente);

    const uid = imgFile(fileObj);
    console.log("id generado es " + uid + " DE 36 CARACTERES");

    const obj = {
      idDocente,
      uid,
    };

    console.log(obj);
    const [idImagen] = await createImages(obj); //[1] [10] va devolver elid que corersponda
    console.log(idImagen);
    return idImagen;
  } catch (e) {
    throw e;
  }
};

module.exports = { createDocente };

/**
 
const createLibro = async (bodyObj, fileObj) => {
  try {
    const [idLibro] = await create(bodyObj);

    const uid = imgFile(fileObj);
    console.log("Uid de imagen : ", uid);

    const obj = {
      idLibro,
      uid,
    };

    const [type, extension] = fileObj.mimetype.split("/");
    const file = `${uid}.${extension}`;

    const [idImagen] = await createImages(obj);

    return upload(file, fileObj.mimetype);
  } catch (e) {
    throw e;
  }
};

 * 
 */
