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

/*
增加文档
*/
stuModel.create({
    name:"斋藤飞鸟",
    age:22,
    gender: "female",
    address: "日本"
},function (err) {
    if (!err){
        console.log(arguments); //显示插入的信息
    }
});




/*
查询文档
*/
//普通查询,返回数组
stuModel.find({name:"西野七濑"},function (err,docs) {
    if(!err){
        console.log(docs);
    }
});
//返回的是数组，查询要加索引
stuModel.find({name:"西野七濑"},function (err,docs) {
    if(!err){
        console.log(docs[0].age);
    }
});
//查询所有
stuModel.find({},function (err,docs) {
    if(!err){
        console.log(docs);
    }
});
//查询部分列方法一(1为显示,0为不显示)
stuModel.find({},{name:1,_id:0},function (err,docs) {
    if(!err){
        console.log(docs);
    }
});
//查询部分列方法二(-为不显示)
stuModel.find({},"name age -_id",function (err,docs) {
    if(!err){
        console.log(docs);
    }
});
//跳过查询
stuModel.find({},{name:1,_id:0},{skip:3,limit:1},function (err,docs) {
    if(!err){
        console.log(docs);
    }
});
//查询一个文档,返回的是对象,可以直接点
stuModel.findOne({},function (err,doc) {
    if(!err){
        console.log(doc);
    }
});
//按照id查询
stuModel.findById("5e6214241c107328708fd936",function (err,docs) {
    if(!err){
        console.log(docs);
    }
});




/*
修改文档
updateOne,updateMany方法也可以
还有replaceOne等替换方法
*/
//修改一个
stuModel.update({name:"西野七濑"},{$set:{age:18}},function (err) {
    if (!err){
        console.log("修改成功");
    }
});




/*
删除文档
*/
//删除一个
stuModel.remove({name:"王艺霖"},function (err) {
    if (!err){
        console.log("删除成功");
    }
});

stuModel.deletOne({name:"王艺霖"},function (err) {
    if (!err){
        console.log("删除成功");
    }
});
//删除多个有deleteMany




/*
统计文档数量
 */
stuModel.count({},function (err,count) {
    if (!err){
        console.log(count);
    }
});