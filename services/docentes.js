const { create, createImages } = require("../models/docentes");
const { imgFile } = require("../utils/fileHandler");
/* 
const createDocente = async (body,files) => {
  try {
    const [idDocente] = await create(body);
    // [Promise, Promise, Promise]
    const results = files.map(file => {
      const uid = imgFile(files);
      const obj = {
        idDocente,
        uid,
      };
      createImages(obj); // [10]
    })
    return await Promise.all(results)
    return returnImg
  } catch (e){

  }
}
*/

// while, for, do while, forEach
const createDocente = async (body, files) => {
  try {
    const [idDocente] = await create(body); 
     //espera que mientras hace el create en el models


     //el map ya me devuelve la lista 
    const results = files.map((file) => { //por cada iteracion
      const uid = imgFile(files);
      const obj = {
        idDocente,
        uid,
      };

      //primero resuelve todas las promesas y las meto en un solo obj
              
      //existe un promiseAll
      const [idImagen] = createImages(obj); // [10]
    });
    return idImagen;  //lo que devulve es un array de imagenes
  } catch (e) {
    throw e;
  }
  // insertar en la tabla docente_imagenes el obj
};

module.exports = { createDocente };
