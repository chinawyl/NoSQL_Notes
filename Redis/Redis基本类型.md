### 一、String类型

```sql
1.	SET key value 
设置指定 key 的值

2.	GET key 
获取指定 key 的值。

3.	GETRANGE key start end 
返回 key 中字符串值的子字符 /*getrange name 0 3*/

4.	GETSET key value
将给定 key 的值设为 value ，并返回 key 的旧值(old value)。

5.	GETBIT key offset
对 key 所储存的字符串值，获取指定偏移量上的位(bit)。

6.	MGET key1 [key2..]
获取所有(一个或多个)给定 key 的值。

7.	SETBIT key offset value
对 key 所储存的字符串值，设置或清除指定偏移量上的位(bit)。

8.	SETEX key seconds value
将值 value 关联到 key ，并将 key 的过期时间设为 seconds (以秒为单位)。

9.	SETNX key value
只有在 key 不存在时设置 key 的值。/*分布式锁问题*/

10.	SETRANGE key offset value
用 value 参数覆写给定 key 所储存的字符串值，从偏移量 offset 开始。

11.	STRLEN key
返回 key 所储存的字符串值的长度。

12.	MSET key value [key value ...]
同时设置一个或多个 key-value 对。

13.	MSETNX key value [key value ...] 
同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在。

14.	PSETEX key milliseconds value
这个命令和 SETEX 命令相似，但它以毫秒为单位设置 key 的生存时间，而不是像 SETEX 命令那样，以秒为单位。

15.	INCR key
将 key 中储存的数字值增一。/*get key时若incr key过则加1*/

16.	INCRBY key increment
将 key 所储存的值加上给定的增量值（increment） 。

17.	INCRBYFLOAT key increment
将 key 所储存的值加上给定的浮点增量值（increment） 。

18.	DECR key
将 key 中储存的数字值减一。/*和15类似*/

19.	DECRBY key decrement
key 所储存的值减去给定的减量值（decrement） 。

20.	APPEND key value
如果 key 已经存在并且是一个字符串， APPEND 命令将指定的 value 追加到该 key 原来值（value）的末尾。
```

##### 注:

##### 1.String类型是二进制安全的,Redis的String可以包含任意数据类型,如图片视频

##### 2.incr等指令具有原子性,常用来计数

### 二、哈希类型

##### 注:

##### 1.Redis hash 是一个 string 类型的 field 和 value 的映射表，hash 特别适合用于存储对象

##### 2.Redis 中每个 hash 可以存储 232 - 1 键值对（40多亿）

```sql
1.	HSET key field value 
将哈希表 key 中的字段 field 的值设为 value 。

2.	HMSET key field1 value1 [field2 value2 ] 
同时将多个 field-value (域-值)对设置到哈希表 key 中。

3.	HGET key field 
获取存储在哈希表中指定字段的值。

4.	HMGET key field1 [field2] 
获取所有给定字段的值

5.	HINCRBY key field increment 
为哈希表 key 中的指定字段的整数值加上增量 increment 

6.	HINCRBYFLOAT key field increment 
为哈希表 key 中的指定字段的浮点数值加上增量 increment 。

7.	HDEL key field1 [field2] 
删除一个或多个哈希表字段

8.	HGETALL key 
获取在哈希表中指定 key 的所有字段和值

9.	HVALS key 
获取哈希表中所有值

10.	HLEN key 
获取哈希表中字段的数量

11.	HKEYS key 
获取所有哈希表中的字段

12.	HEXISTS key field 
查看哈希表 key 中，指定的字段是否存在。

13.	HSETNX key field value 
只有在字段 field 不存在时，设置哈希表字段的值。

14.	HSCAN key cursor [MATCH pattern] [COUNT count] 
迭代哈希表中的键值对。
```

##### 注:

##### 1.哈希常用来存储一个对象

##### 2.哈希是最接近关系型数据库的类型,相当于hashmap

##### 3.哈希删除的key会自动回收