const mongoose=require('mongoose');
const schema=new mongoose.Schema({job_id:{type:mongoose.Schema.Types.ObjectId,ref:'Job',required:true,index:true},fullName:{type:String,required:true,trim:true},email:{type:String,required:true,lowercase:true,trim:true},phone:{type:String,required:true,trim:true},resumeUrl:{type:String,required:true},coverLetter:{type:String,default:''}},{timestamps:true});
module.exports=mongoose.model('Application',schema);
