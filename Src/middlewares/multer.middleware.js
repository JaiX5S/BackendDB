import req from "express/lib/request"
import multer from "multer"

const storage = multer.diskStorage({
  destination: (req, file, cb){
    cb(null , './Public/temp')
  },
  filename : function (req, file , cb) {
    //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname)
  }
})
const upload = multer(
  {
    storage,
  }
)