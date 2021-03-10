const express = require("express");
const router = express.Router();
const multer = require("multer");
const config = { dest: "./public/tmp" };
const upload = multer(config);
const service = require("../services/docentes");
const fs = require("fs");
// .tmp
// req -> body, params, query, files, session

// Insertar un docente en la tabla
// Tenemos que almacenar la imagen del docente
// Tenemos que subir la imagen del docente a aws

const create = async (req, res) => {
  try {
    const result = await service.createDocente(req.body, req.file);
    //res.send("imagen subida ");
    res.json(result);
  } catch (e) {
    res.sendStatus(500);
  }
};

//NOTAS:
//tener en cuenta que upload.single recibe req.file y upload.array recibe req.files

router.post("/create", upload.single("imagen"), create);

module.exports = router;
