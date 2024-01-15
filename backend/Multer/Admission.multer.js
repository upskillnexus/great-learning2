const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/admission'); // Set the destination folder
  },
  filename: function (req, file, cb) {
    const date = Date.now();
    cb(null, date + '-' + file.originalname);
  },
});

// const mustbe = { storage: storage };

// const AdmissionMulter = multer(mustbe);

const AdmissionMulter = multer({ storage: storage });

module.exports = { AdmissionMulter };