//1.进入my_test数据库
use my_test
//2.向数据库的users集合插入一个文档
db.users.insert({name:"孙悟空"})
//3.查询users集合的文档
db.users.find()
//4.向数据库的集合中插入多个文档
db.users.insert([
    {name:"猪八戒"},
    {name:"沙和尚"}
])
//5.查询users集合所有的文档
db.users.find()
//6.统计users集合文档的数量
db.users.find().count()
//7.查询users集合name为孙悟空的文档
db.users.find({name:"孙悟空"})
//7.向users集合name为孙悟空的文档添加属性address为花果山
db.users.update({name:"孙悟空"},{$set:{address:"花果山"}})
//8.使用{name:"唐僧"}替换name为猪八戒的文档
db.users.replaceOne({name:"猪八戒"},{name:"唐僧"})
//9.删除name为孙悟空对的文档的address属性
db.users.update({name:"孙悟空"},{$unset:{address:1}})
//10.向name为孙悟空的文档中添加hobby{cities:["北京","上海","深圳"],movies:["三国","英雄"]}
db.users.update({name:"孙悟空"},{$set:{hobby:{cities:["北京","上海","深圳"],movies:["三国","英雄"]}}}) /*mongodb文档的属性的值也可以是一个文档即内嵌文档*/
//11.向name为唐僧的文档中添加hobby{movies:["大话西游","喜剧之王"]}
db.users.update({name:"唐僧"},{$set:{hobby:{movies:["大话西游","喜剧之王"]}}})
//12.查询喜欢英雄的文档
db.users.find({"hobby.movies":"英雄"}) /*要通过内嵌文档查询文档，属性名必须加引号*/
//13.向唐僧添加一个新的电影星际穿越
db.users.update({name:"唐僧"},{$push:{"hobby.movies":"星际穿越"}}) /*put向数组中添加新元素(可重复添加)，addToSet(不可重复添加,但不会失败)*/
//14.删除喜欢北京的用户
db.users.remove({"hobby.cities":"北京"})
//15.删除users集合
db.users.drop()