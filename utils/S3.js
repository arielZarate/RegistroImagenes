const fs = require("fs");
const AWS = require("aws-sdk");

const S3 = new AWS.S3({
  accessKeyId: "AKIAICI7VRG7O6PVLV5A",
  secretAccessKey: "miSecretAccessKey",
});

const upload = (file, mimetype) => {
  // jpeg / png
  // subir el archivo a aws


  //o 
  // leer el temporal
  // subir ese archivo a aws
  try {
    const body = fs.readFileSync(`./public/images/${file}`);
    const params = {
      Bucket: "imagenes", //nombre del backet creado
      key: file,  //file es el unico id que tenemos ene l backet
      body, //arcchivo en si mismo
      contentType: mimetype, //tipo y fotmato
      ACL: "public-read", //para qu sea publico el archivo para *
    };
    S3.putObject(params, (err, response) => {
      if (err) throw err;
    });
    fs.unlink(`./public/images/${file}`, (e) => {
      throw e;
    });
  } catch (e) {
    throw e;
  }


};
