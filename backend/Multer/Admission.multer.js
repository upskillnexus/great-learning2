const multer = require('multer');

const { S3Client } = require('@aws-sdk/client-s3')
const multerS3 = require("multer-s3")




const s3 = new S3Client({
  region: "ap-south-1",
  credentials: {
    secretAccessKey: process.env.S3Accesskey,
    accessKeyId: process.env.S3AccesskeyId
  }
});

const AdmissionMulter = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.Bucketname,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      const date = Date.now()
      cb(null, `upskillnexus/admission/${date}-${file.originalname}`)
    }
  })
})


module.exports = { AdmissionMulter }