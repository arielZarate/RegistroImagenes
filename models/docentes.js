const bd = require("../utils/bd");

const create = (obj) => bd("docentes").insert(obj);

//imagenes
const createImages = (obj) => bd("docentes_imagenes").insert(obj);

module.exports = { create, createImages };
