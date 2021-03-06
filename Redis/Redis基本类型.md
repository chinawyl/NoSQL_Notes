### 一、字符串类型(String)

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

### 二、哈希类型(Hash)

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

##### 1.Redis hash 是一个 string 类型的 field 和 value 的映射表，hash 特别适合用于存储对象

##### 2.Redis 中每个 hash 可以存储 232 - 1 键值对（40多亿）

##### 3.哈希常用来存储一个对象,是最接近关系型数据库的类型,相当于hashmap

##### 4.哈希删除的key会自动回收

### 三、列表类型(List)

```sql
1.	LPUSH key value1 [value2] /*lpush number 1 2 3 4 5 结果为5 4 3 2 1*/
将一个或多个值插入到列表头部(从左侧添加)

2.	LPUSHX key value 
将一个值插入到已存在的列表头部(从左侧添加,如果列表不存在则操作无效)

3.	RPUSH key value1 [value2]  /*rpush letters A B C D E 结果为A B C D E*/
在列表中添加一个或多个值(从右侧添加)

4.	RPUSHX key value 
为已存在的列表添加值(从右侧添加,如果列表不存在则操作无效)

5.	LINSERT key BEFORE|AFTER pivot value /*linsert number before 3 C*/
在列表的元素前或者后插入元素

6.	LRANGE key start stop /*lrange letters 0 -1*/
获取列表指定范围内的元素

7.	LINDEX key index 
通过索引获取列表中的元素

8.	LLEN key 
获取列表长度

9.	LREM key count value /*lpush number2 1 1 1 2 3 4 结果为4 3 2 1*/
移除列表元素

10.	LPOP key 
移出并获取列表的第一个元素，返回值为移除的元素

11.	RPOP key 
移除列表的最后一个元素，返回值为移除的元素

12.	RPOPLPUSH source destination /*RPOPLPUSH l1 l2 把l1的最后一个元素添加到l2并返回*/
移除列表的最后一个元素，并将该元素添加到另一个列表并返回

13.	BLPOP key1 [key2 ] timeout /*blpop number 100*/
移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止，(时间为秒)

14.	BRPOP key1 [key2 ] timeout 
移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止

15.	BRPOPLPUSH source destination timeout 
从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止

16.	LTRIM key start stop 
对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除。

17.	LSET key index value 
通过索引设置列表元素的值
```

##### 注:

##### 1.对数据量大的集合数据进行删减如:关注列表，粉丝列表，留言评价，分页等

##### 2.任务对列如:登录注册的短信验证，订单系统下单流程

```sql
RPOPLPUSH l1 l1 /*循环转圈*/
```

### 四、集合类型(Set)

```sql
1.	SADD key member1 [member2] 
向集合添加一个或多个成员

2.	SMEMBERS key 
返回集合中的所有成员

3.	SCARD key 
获取集合的成员数

4.	SISMEMBER key member 
判断 member 元素是否是集合 key 的成员

5.	SRANDMEMBER key [count] /*srandmember numbers 不写随机返回1个numbers集合中的元素*/
返回集合中一个或多个随机数 /*用于抽奖*/

6.	SREM key member1 [member2] 
移除集合中一个或多个成员

7.	SPOP key 
移除并返回集合中的一个随机元素

8.	SMOVE source destination member 
将 member 元素从 source 集合移动到 destination 集合

9.	SDIFF key1 [key2] 
返回给定所有集合的差集(左侧,key1为主)

10.	SDIFFSTORE destination key1 [key2] 
返回给定所有集合的差集并存储在 destination 中

11.	SINTER key1 [key2] 
返回给定所有集合的交集

12.	SINTERSTORE destination key1 [key2] 
返回给定所有集合的交集并存储在 destination 中

13.	SUNION key1 [key2] 
返回所有给定集合的并集

14.	SUNIONSTORE destination key1 [key2] 
所有给定集合的并集存储在 destination 集合中

15.	SSCAN key cursor [MATCH pattern] [COUNT count] 
迭代集合中的元素
```

##### 注:

##### 1.Set类型是String类型的无序不可重复的集合

##### 2.Set类型的底层是hashtable和intest实现的

### 五、有序集合类型(sorted set或zest)

```sql
1.	ZADD key score1 member1 [score2 member2] /*zadd z1 100 python 80 java 72 c*/
向有序集合添加一个或多个成员，或者更新已存在成员的分数

2.	ZCARD key 
获取有序集合的成员数

3.	ZCOUNT key min max 
计算在有序集合中指定区间分数的成员数

4.	ZRANK key member 
返回有序集合中指定成员的索引

5.	ZRANGE key start stop [WITHSCORES] 
通过索引区间返回有序集合指定区间内的成员

6.	ZREVRANK key member 
返回有序集合中指定成员的排名，有序集成员按分数值递减(从大到小)排序

7.	ZSCORE key member 
返回有序集中，成员的分数值

8.	ZINCRBY key increment member 
有序集合中对指定成员的分数加上增量 increment

9.	ZREVRANGE key start stop [WITHSCORES] 
返回有序集中指定区间内的成员，通过索引，分数从高到低

10.	ZREVRANGEBYSCORE key max min [WITHSCORES] 
返回有序集中指定分数区间内的成员，分数从高到低排序

11.	ZRANGEBYLEX key min max [LIMIT offset count] 
通过字典区间返回有序集合的成员

12.	ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT] 
通过分数返回有序集合指定区间内的成员

13.	ZREM key member [member ...] 
移除有序集合中的一个或多个成员

14.	ZREMRANGEBYLEX key min max 
移除有序集合中给定的字典区间的所有成员

15.	ZREMRANGEBYRANK key start stop 
移除有序集合中给定的排名区间的所有成员

16.	ZREMRANGEBYSCORE key min max 
移除有序集合中给定的分数区间的所有成员

17.	ZLEXCOUNT key min max 
在有序集合中计算指定字典区间内成员数量

18.	ZUNIONSTORE destination numkeys key [key ...] 
计算给定的一个或多个有序集的并集，并存储在新的 key 中

19.	ZINTERSTORE destination numkeys key [key ...] 
计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 key 中

20.	ZSCAN key cursor [MATCH pattern] [COUNT count] 
迭代有序集合中的元素（包括元素成员和元素分值）
```

##### 注:

##### 1.Redis 有序集合和集合一样也是string类型元素的集合,且不允许重复的成员。

##### 2.不同的是每个元素都会关联一个double类型的分数。redis正是通过分数来为集合中的成员进行从小到大的排序。

##### 3.有序集合的成员是唯一的,但分数(score)却可以重复。

##### 4.集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是O(1)。 集合中最大的成员数为 232 - 1 (4294967295, 每个集合可存储40多亿个成员)。