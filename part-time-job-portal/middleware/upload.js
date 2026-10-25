const multer=require('multer'),path=require('path'),crypto=require('crypto');
const storage=multer.diskStorage({destination:path.join(__dirname,'../uploads'),filename:(req,file,cb)=>cb(null,crypto.randomUUID()+'.pdf')});
module.exports=multer({storage,limits:{fileSize:5*1024*1024},fileFilter:(req,file,cb)=>{if(file.mimetype!=='application/pdf'||path.extname(file.originalname).toLowerCase()!=='.pdf')return cb(new Error('Only PDF resumes allowed'));cb(null,true);}});
