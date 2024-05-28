import multer from "multer";

// Configure storage settings
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      // Set the destination folder for the uploaded files
      cb(null, '../public/files');
    },
    filename: (req, file, cb) => {
      // Set the filename for the uploaded files
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });
  
 const multerUpload = multer({
    storage:storage,
  //we're only  the limiting the size of the uploads of file we send , we're not using diskstorage as we're gonna store the images in cloud
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

const singleAvatar = multerUpload.single("avatar");
//in the controller req.files will contain the avatar

const attachmentsMulter = multerUpload.array("files", 5);
// in thecontroller req.files is the array of files we send

export { singleAvatar, attachmentsMulter };
