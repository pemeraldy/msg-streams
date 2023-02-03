const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const extractUploadedFile = upload.fields([
  { name: "audio", maxCount: 1 },
  { name: "photo", maxCount: 1 },
]);

module.exports = extractUploadedFile;
