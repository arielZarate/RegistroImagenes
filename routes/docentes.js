const express = require("express");
const router = express.Router();
const multer = require("multer");
const config = { dest: "./public/tmp" };
const upload = multer(config);
const service = require("../services/docentes_services");
const fs = require("fs");
// .tmp
// req -> body, params, query, files, session

// Insertar un docente en la tabla
// Tenemos que almacenar la imagen del docente
// Tenemos que subir la imagen del docente a aws

const single = async (req, res) => {
  try {
    // console.log("req files");
    //console.log(req.file);
    const result = await service.createDocente(req.body, req.file);

    res.send("imagen subida ");
    //res.json({ result });
  } catch (e) {
    res.sendStatus(500);
  }
};

const varios = async (req, res) => {
  try {
    // console.log("req files");
    //console.log(req.files);
    const result = await service.createDocenMuchasImg(req.body, req.files);

    res.send("imagenes subidas ");
    //res.json({ result });
  } catch (e) {
    res.sendStatus(500);
  }
};

//NOTAS:
//tener en cuenta que upload.single recibe req.file y upload.array recibe req.files

router.post("/single", upload.single("imagen"), single);

//                parametros 5 maxCount  => array("imagen",5)
router.post("/varios", upload.array("imagen"), varios);

module.exports = router;
