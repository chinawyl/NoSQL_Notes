### 一、连接

```sql
/*
        1.下载安装mongoose
            npm i mongoose --save

        2.在项目中引入mongoose
            var mongoose = require("mongoose")

        3.连接MongoDB数据库
            mongoose.connect('mongodb:数据库的ip地址:端口号/数据库名',{useMongoClient:true})

            监听MongoDB数据库连接状态
                -数据库连接成功事件:mongoose.connection.once("open",function(){})

                -数据库断开事件:mongoose.connection.once("close",function(){})

        4.断开数据库连接(一般不需要)
            mongoose.disconnect()
 */

/*引入*/
var mongoose = require("mongoose");
/*连接*/
mongoose.connect("mongodb://127.0.0.1/test");
/*监听*/
mongoose.connection.once("open",function () {
    console.log("数据库连接成功")
});

mongoose.disconnect();

mongoose.connection.once("close",function () {
    console.log("数据库连接已断开")
});
```

注:MongoDB一般只需要连接一次，除非服务器断开，一般不需要手动断开

### 二、操作数据库

```sql
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
```

##### 注:创建集合为student但MongoDB会自动将其变为复数，查询应为students

```sql
db.students.find()
```

### 三、Model的方法

```sql
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
统计文档数量,更高效
 */
stuModel.count({},function (err,count) {
    if (!err){
        console.log(count);
    }
});
```

##### 注:

##### 1.find()返回数组,findOne返回对象

##### 2.通过Model返回的结果即Document是Model的实例

### 四、Document的方法

```sql
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
```

### 五、封装

##### 1.05 Connect_MongoDB

```sql
var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/test");

mongoose.connection.once("open",function () {
    console.log("数据库连接成功")
});
```

##### 2.05 Modle_MongoDB.js

```sql
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
```

##### 3.index.js

```sql
require("./05 Connect_MongoDB");

var Student = require("./05 Modle_MongoDB");

console.log(Student);

Student.find({},function (err,docs) {
    if(!err){
        console.log(docs);
    }
});
```

