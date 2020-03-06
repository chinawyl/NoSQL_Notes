var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//创建Schema(模式)对象
var stuSchema = new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:"female"
    },
    address:String
});

//定义模型
var stuModel = mongoose.model("student", stuSchema);

module.exports = stuModel;