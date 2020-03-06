# MongoDB

##### MongoDB官网:https://mongodb.com

##### MongoDB中文文档:http://www.mongoing.com/docs/

##### 图形化界面Robo 3T官网:https://robomongo.org

##### MomgoDB安装教程:https://blog.csdn.net/fengtingyan/article/details/88371232

##### Node.js官网:https://nodejs.org/en/download/

##### mongoose文档:https://mongoosejs.com/

#### 常用命令

```sql
mongo   
运行mongo

db	
显示当前的数据库名称

show dbs	
显示当前服务器下数据库（非空的数据库）列表

use test	
如果test数据库不存在，则创建test数据库
如果test已存在，则切换到test数据库

show collections	
显示当前数据库下所包含的集合（表）列表

db.users.insert({name:'zhangsha'})	
向users集合中插入数据
如果users集合存在，则直接插入数据，如果不存在，则创建users集合再插入数据

db.createCollection('products')
创建一个空集合products

db.products.insert([{name:'lishi'},{name:'wangwu'}])		
一次插入多个数据

db.products.find()
查询products集合中所有的数据

db.products.find({name:'苹果手机'})
查询stu集合中name='苹果手机'的数据

db.products.find({name:{$eq:'苹果手机'}})
同上，$eq=>等号，建议使用上面的方式，易记，易输入
eq = equal

db.products.find({price:{$gt:18}})
查询stu集合中age>18的数据  
 
把$gt换成如下的符号试试：
$gt=>大于   great
$gte=>大于等于 great equal
$lt=>小于   less than
$lte=>小于等于 less than equal
$ne=>不等于  not equal
$in=>在范围内
$nin=>不在范围内
以上几个符号格式总结为：{ field: {符号: value}}

db.products.find({name:/^华为/})
查找stu集合中name域中以“华为”字符的开头的数据

db.products.find({name:{$in:['手机1','手机2']}})
查询stu集合中name='手机1'和name='手机2'的数据
$in=>在范围内
$nin=>不在范围内
以上两个符号格式为：{ field:{符号:[value1,value2,....]}}

db.products.find({name:"华为手机",price:800})
查找name="华为手机"并且price:800的数据

db.products.find({$or:[{name:'华为手机'},{price:{$lt:1000}}]})
查询products集合中name='华为手机' 或者 price<1000的数据
$or=>或者  注意$or:[{},{},....]
$and=>并且  格式同$or, 例：{$and:[{},{},....]}
$nor=>not or 与$or相反， 格式同$or

db.products.find({price:{$not:{$gt:100}}})
查询products集合中price<=100的数据，不存在price属性的数据也会查询出来
$not=>取反 

db.products.find({price:{$exists: true}})
查询products集合中包含域名称为price的数据

db.products.find({name:{$type:2}})
查询products集合中name属性为字符串类型的数据

db.products.find({
	$where: function(){
		return this.name == '华为手机'
	}
})
查询products集合中name='华为手机'的数据

db.products.find({
	$where: function(){
 		return  this.name.indexOf('华为手机') > -1;
	}
})
查询products集合中name域中包含“华为手机”字符的数据

db.products.update({name:'华为手机'},{$set:{price:2000}},{
	upsert: true,
	multi:false
})
把products集合中name='华为手机'的那条数据，把price属性设置成2000，其它属性保留
$set是指更改的属性列表，不在列表中其他属性会被保留，如果不加此符号，其它属性会被丢弃（_id属性比较特殊，不会丢失）
upsert:true如果没有符号条件的更新时，则插入一条，为false时，则不会插入, 默认是false
multi:false一次只能更新一条数据，为true时，可更新多条，默认是false

db.students.remove({})
清空集合students

db.products.remove({name:'abc'})
删除products集合中name='abc'的数据，注意，即使把集合products中的所有数据都删除了
products集合仍然存在， remove()是用来删除数据的，而drop()不仅会删除数据，还会把
集合的结构给删除

db.products.drop()
把stu集合彻底从当前数据中删除，集合stu不再存在，注意与remove()的区别

db.dropDatabase()
删除当前数据库

db.users.distinct('name')
查询users集合中不重复的name属性，返回的是数组

db.stu.count({name:'zhangshan'})
查询stu集合中name='zhangshan'的数据数量

db.stu.find().limit(5)
查询stu集合中前5条数据

db.stu.find().skip(5)
查询stu集合中跳过前5条后的数据

db.stu.find().sort({name:1})
查询stu集合中的全部数据，并按name属性正序排列  注：1：正序 -1: 倒序

由于mongodb的api接口方法很多，除以上命令外，其他的命令请多看官方文档
要求：根据官方文档中的方法原型，能够操作相应的方法
```

------

# Redis

##### Redis官网:https://redis.io/download(只有Linux版本，并含Docker)

##### Redis的Linux版本安装教程:https://www.runoob.com/redis/redis-install.html

##### Redis的Windows版本下载:https://github.com/microsoftarchive/redis/releases

##### Redis的Windows版本安装教程:https://blog.csdn.net/qq_43571415/article/details/103715019

##### 图形化界面:Redis Desktop Manager官网:https://redisdesktop.com/download

#### 常用命令

```sql
https://www.runoob.com/redis/redis-tutorial.html
```

