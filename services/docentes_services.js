const { create, createImages } = require("./../models/docentes");
const { imgFile } = require("./../utils/fileHandlers");

/*
const createDocente = async (bodyObj, fileObj) => {


 
  try {
    const [idDocente] = await create(bodyObj);
    const uid = imgFile(fileObj);
    // Insertar la imagen del docente
    const obj = {
      idDocente,
      uid,
    };
    const [idImagen] = await createImages(obj);
    return idImagen;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
*/

const createDocenMuchasImg = async (bodyObj, files) => {
  try {
    const [idDocente] = await create(bodyObj);
    const results = files.map((file) => {
      const uid = imgFile(file);
      const obj = {
        idDocente,
        uid,
      };

      console.log(obj, "id docente y uid imagen");

      return createImages(obj);

      // Fran dice que quizás tendría que ponerle return a createImages para retornar al vector
      // results para resolver la promise
    });

    const returnImg = await Promise.all(results);
    console.log(returnImg);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = { createDocenMuchasImg };
