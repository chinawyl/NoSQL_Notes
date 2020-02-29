一、**基本概念**

数据库(database)

集合(collection)

文档(document)

注:在MongoDB中数据库和集合不需要手动创建，当我们创建文档时，那些东西会自动创建

二、**基本指令**

```sql
show dbs
show databases
	- 显示当前所有数据库
use 数据库名
	- 进入指定的数据库中
db
	- db表示当前所处的数据库
show collections
	- 显示数据库中所有的集合
```

三、**数据库的CRUD(增删改查)**

1.向数据库中插入文档

```sql
db.<collection>.insert(doc)
	- 向集合中插入一个文档
	- 例子:db.stus.insert({name:"wyl",age:18,gender:"male"})
	
db.<collection>.find()
	- 查询集合中所有的文档
	- 例子:db.stus.find()
```

