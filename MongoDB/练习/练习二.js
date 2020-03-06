//1创建数据库test
use test
//2.向numbers集合添加20000条数据
/*低效率写法
for(var i=1; i<=20000; i++){
    db.numbers.insert({num:i})
}
*/
/*高效率写法*/
var arr = []
for(var i=1; i<=20000; i++){
    arr.push({num:i})
}
db.numbers.insert(arr)
//3.查询numbers中num为500的文档
db.numbers.find({num:500})
//4.查询numbers中num大于5000的文档
db.numbers.find({num:{$gt:5000}})
//5.查询numbers中num小于30的文档
db.numbers.find({num:{$lt:30}})
//6.查询numbers中num大于40小于50的文档
db.numbers.find({num:{$gt:40,$lt:50}})
//7.查询numbers中num大于等于19996的文档
db.numbers.find({num:{$gte:19996}})
//8.查询numbers集合中前10条数据
db.numbers.find().limit(10)
//9.查询numbers集合中第11条到第12条的数据
db.numbers.find().skip(10).limit(10)
db.numbers.find().limit(10).skip(10)