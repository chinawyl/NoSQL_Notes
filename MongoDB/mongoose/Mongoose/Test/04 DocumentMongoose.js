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

//增加文档
var stu = new stuModel({
    name:"刘备",
    age:44,
    gender: "male",
    address: "平原"
});
stu.save(function (err) { //通过文档直接保存
    if(!err){
        console.log("保存成功");
    }
});

//查询文档
stuModel.find({},function (err,docs) {
    if(!err){
        console.log(docs);
    }
});

//修改文档
stuModel.findOne({},function (err,doc) {
    if(!err){
        doc.age=18;
        doc.save();
    }
});

//删除文档
stuModel.findOne({},function (err,doc) {
    if(!err){
        doc.remove()
    }
});

//set和get
stuModel.findOne({},function (err,doc) {
    if(!err){
        doc.set("name","白石麻衣");
        console.log(doc)
    }
});