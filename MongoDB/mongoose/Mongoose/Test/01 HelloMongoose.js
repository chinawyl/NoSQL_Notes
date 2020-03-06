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

//引入
var mongoose = require("mongoose");
//连接
mongoose.connect("mongodb://127.0.0.1/test");
//监听
mongoose.connection.once("open",function () {
    console.log("数据库连接成功")
});

mongoose.disconnect();

mongoose.connection.once("close",function () {
    console.log("数据库连接已断开")
});