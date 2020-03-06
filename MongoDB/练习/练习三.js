//一对一
db.HusbandAndWife.insert([{name:"王艺霖",wife:{name:"西野七濑"}}])
//一对多，多对一
db.users.insert([{username:"斉藤优里"},{username:"寺田兰世"}])
db.users.find()
db.order.insert({list:["苹果","香蕉","西瓜"],userid:ObjectId("5e61c9a3864bf8cfa31dcfb6")})
db.order.find()
db.order.insert({list:["牛肉","西瓜"],userid:ObjectId("5e61c9a3864bf8cfa31dcfb7")})
db.order.insert({list:["游戏机","电脑","手机"],userid:ObjectId("5e61c9a3864bf8cfa31dcfb6")})
/*查找用户订单*/
var user_id = db.users.findOne({username:"斉藤优里"})._id
db.order.find({userid:user_id})
//多对多
db.teachers.insert([{name:"孔子"},{name:"老子"},{name:"庄子"}])
db.teachers.find()
db.stus.insert([{name:"王艺霖",teachersid:[ObjectId("5e61ccae864bf8cfa31dcfbb"),ObjectId("5e61ccae864bf8cfa31dcfbc")]},{name:"刘备",teachersid:ObjectId("5e61ccae864bf8cfa31dcfbb")}])
db.stus.find()