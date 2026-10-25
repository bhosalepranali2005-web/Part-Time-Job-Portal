const mongoose=require('mongoose');
const schema=new mongoose.Schema({title:{type:String,required:true,trim:true},company:{type:String,required:true,trim:true},location:{type:String,required:true,trim:true},salary:{type:String,required:true,trim:true},job_type:{type:String,enum:['part-time'],default:'part-time'},category:{type:String,required:true,trim:true},description:{type:String,required:true},status:{type:String,enum:['active','archived'],default:'active'}},{timestamps:true});
module.exports=mongoose.model('Job',schema);
