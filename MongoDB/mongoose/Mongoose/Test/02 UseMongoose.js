var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/test");

mongoose.connection.once("open",function () {
    console.log("数据库连接成功")
});

//将mongoose.Schema赋给一个变量
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

//创建Model(也就是数据库的集合)
//mongoose.model(modelName,schema)
var stuModel = mongoose.model("student", stuSchema);

//创建文档
stuModel.create({
    name:"王艺霖",
    age:20,
    gender: "male",
    address: "中国"
},function (err) {
    if (!err){
        console.log("插入成功");
    }
});