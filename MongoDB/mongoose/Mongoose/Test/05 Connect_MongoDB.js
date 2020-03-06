var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/test");

mongoose.connection.once("open",function () {
    console.log("数据库连接成功")
});