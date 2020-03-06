### 一、基本概念

数据库(database)

集合(collection)

文档(document)

注:在MongoDB中数据库和集合不需要手动创建，当我们创建文档时，那些东西会自动创建

### 二、基本指令

```sql
show dbs
show databases
	- 显示当前所有数据库
use 数据库名
	- 进入指定的数据库中(如果没有该数据库则创建)
db
	- db表示当前所处的数据库
show collections
	- 显示数据库中所有的集合
db.createCollections("user")	
	- 创建空集合
```

### 三、数据库的CRUD(增删改查)

##### 1.向集合中插入文档

db.<collection>.insert()

```sql
/*向集合中插入一个文档*/
db.users.insert({name:"wyl",age:20,gender:"男"})
db.users.insertOne({name:"wyl",age:20,gender:"男"})

/*向集合中插入多个文档*/
db.users.insert([
    {name:"xyql",age:26,gender:"女"},
    {name:"ztfn",age:21,gender:"女"},
    {name:"scsyl",age:26,gender:"女"}
])
db.users.insertMany([
    {name:"xyql",age:26,gender:"女"},
    {name:"ztfn",age:21,gender:"女"},
    {name:"scsyl",age:26,gender:"女"}
])

/*给文档指定唯一标识_id*/
db.users.insert({_id:"nmb46",name:"bsmy",age:26,gender:"女"})
```

注:

1)._id由时间戳生成，唯一，可以自己指定

2).insertOne()和insertMany()在3.2版本以后才有

##### 2.在集合中查询文档

db.<collection>.find()

```sql
/*查询集合中所有文档*/
db.users.find()

/*查询集合中符合条件的某一字段的文档*/
db.users.find({_id:"nmb46"})

/*查询集合中符合条件的多个字段的文档*/
db.users.find({name:"wyl",age:20})

/*查询集合中符合条件的第一个文档*/
db.users.findOne({age:26})

/*查询集合中文档个数*/
db.users.find({}).count()

```

注:

1).find()返回一个数组，findOne()返回一个对象

2).find()不传参也行

3).多个符合条件的数据用find()会全部查询出来

##### 3.在集合中修改文档

db.<collection>.update()

```sql
/*修改集合中的文档，替换原文档*/
db.users.update({name:"wyl"},{name:"WYL"})

/*
修改集合中的文档，不替换原文档
$set:修改文档指定属性
$unset:删除文档指定属性
*/
db.users.update(
    {"_id":ObjectId("5e5b5771158578a536d1eb5a")},
    {$set:{
        name:"wsc"
    	address:"CN"
    }}
)

db.users.update(
    {"_id":ObjectId("5e5b5771158578a536d1eb5a")},
    {$unset:{
    	address:1 /*这里值随意*/
    }}
)

/*修改集合中的文档，修改多个*/
db.users.update(
    {name:"WYL"},
    {$set:{
        name:"WSC"
        }},
    {multi:true} /*默认为false，true为修改多个*/
)
```

注:

1).直接用update太凶残，最好加上参数如:$set

2).update()默认只修改一个

3).updateOne和updateMany为修改一个和修改多个

4).replace方法

```sql
db.users.replaceOne({name:"wyl"},{name,"WYL"}) /*只有replaceOne()方法*/
```

##### 4.在集合中删除文档

db.<collection>.remove()

```sql
/*删除集合中的文档，删除符合条件的第一个文档*/
db.users.remove({_id:"nmb46"},true)
db.users.deleteOne({name:"wyl"})

/*删除集合中的文档，删除符合条件的所有文档*/
db.users.remove({_id:"nmb46"})
db.users.deleteMany({name:"wyl"})

/*删除集合中的所有文档*/
db.users.remove({}) /*如果只有一个集合会连集合结构也删除*/
```

注:

1).remove()必须传参，否则报错

2).删除集合

```sql
db.users.remove({})/*效率低，只删除文档，保留集合结构*/

db.users.drop() /*效率高，直接删除集合，如果只有一个集合，数据库也会删除/*
```

3).删除当前数据库

```sql
db.dropDatabase()
```

### 四、排序和投影

```sql
db.emp.find({}).sort({sal:1,empnp:-1}) /*1为正序，-1为倒序，若sal相同则以empanp排序*/

db.emp.find({},{ename:1,_id:0}) 、/*只显示ename，不要id*/
```