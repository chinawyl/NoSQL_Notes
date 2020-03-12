### 一、Redis多数据库

```sql
select 数据库 /*数据库的切换*/

move key 数据库 /*移动数据key*/

flushdb /*清除当前数据库所有的key*/

flushall /*清除整个Redis数据库所有的key*/
```

##### 注:Redis默认情况下有16个数据库，客户端默认访问到数据库0

### 二、Redis事务

```sql
1.	DISCARD 
取消事务，放弃执行事务块内的所有命令。

2.	EXEC 
执行所有事务块内的命令。

3.	MULTI 
标记一个事务块的开始。

4.	UNWATCH 
取消 WATCH 命令对所有 key 的监视。

5.	WATCH key [key ...] 
监视一个(或多个) key ，如果在事务执行之前这个(或这些) key 被其他命令所改动，那么事务将被打断。
```

例子:

```sql
127.0.0.1:6379> set account:a 80
OK
127.0.0.1:6379> set account:b 10
OK
127.0.0.1:6379> multi
OK
127.0.0.1:6379> get account:a
QUEUED
127.0.0.1:6379> get account:b
QUEUED
127.0.0.1:6379> decrby account:a 50
QUEUED
127.0.0.1:6379> incrby account:b 50
QUEUED
127.0.0.1:6379> exec
1) "80"
2) "10"
3) (integer) 30
4) (integer) 60
127.0.0.1:6379> get account:a
"30"
127.0.0.1:6379> get account:b
"60"
```

##### 注:

##### 1.Redis事务可以一次性执行多个命令，按顺序的串行化执行，执行中不会被其他命令插入，不允许加塞

##### 2.Redis事务如果是业务逻辑错误，已成功命令不会回滚，还会继续执行，失败的命令不会继续执行

##### 3.Redis事务如果是报告错误会回滚

### 三、Redis脚本

```sql
1.	EVAL script numkeys key [key ...] arg [arg ...] 
执行 Lua 脚本。

2.	EVALSHA sha1 numkeys key [key ...] arg [arg ...] 
执行 Lua 脚本。

3.	SCRIPT EXISTS script [script ...] 
查看指定的脚本是否已经被保存在缓存当中。

4.	SCRIPT FLUSH 
从脚本缓存中移除所有脚本。

5.	SCRIPT KILL 
杀死当前正在运行的 Lua 脚本。

6.	SCRIPT LOAD script 
将脚本 script 添加到脚本缓存中，但并不立即执行这个脚本。
```

##### 注:Redis 脚本使用 Lua 解释器来执行脚本,执行脚本的常用命令为 EVAL。

### 四、Redis连接

```sql
1.	AUTH password 
验证密码是否正确

2.	ECHO message 
打印字符串

3.	PING 
查看服务是否运行

4.	QUIT 
关闭当前连接

5.	SELECT index 
切换到指定的数据库
```

### 五、Redis服务器

```sql
1.	BGREWRITEAOF 
异步执行一个 AOF（AppendOnly File） 文件重写操作

2.	BGSAVE 
在后台异步保存当前数据库的数据到磁盘

3.	CLIENT KILL [ip:port] [ID client-id] 
关闭客户端连接

4.	CLIENT LIST 
获取连接到服务器的客户端连接列表

5.	CLIENT GETNAME 
获取连接的名称

6.	CLIENT PAUSE timeout 
在指定时间内终止运行来自客户端的命令

7.	CLIENT SETNAME connection-name 
设置当前连接的名称

8.	CLUSTER SLOTS 
获取集群节点的映射数组

9.	COMMAND 
获取 Redis 命令详情数组

10.	COMMAND COUNT 
获取 Redis 命令总数

11.	COMMAND GETKEYS 
获取给定命令的所有键

12.	TIME 
返回当前服务器时间

13.	COMMAND INFO command-name [command-name ...] 
获取指定 Redis 命令描述的数组

14.	CONFIG GET parameter 
获取指定配置参数的值

15.	CONFIG REWRITE 
对启动 Redis 服务器时所指定的 redis.conf 配置文件进行改写

16.	CONFIG SET parameter value 
修改 redis 配置参数，无需重启

17.	CONFIG RESETSTAT 
重置 INFO 命令中的某些统计数据

18.	DBSIZE 
返回当前数据库的 key 的数量

19.	DEBUG OBJECT key 
获取 key 的调试信息

20.	DEBUG SEGFAULT 
让 Redis 服务崩溃

21.	FLUSHALL 
删除所有数据库的所有key

22.	FLUSHDB 
删除当前数据库的所有key

23.	INFO [section] 
获取 Redis 服务器的各种信息和统计数值

24.	LASTSAVE 
返回最近一次 Redis 成功将数据保存到磁盘上的时间，以 UNIX 时间戳格式表示

25.	MONITOR 
实时打印出 Redis 服务器接收到的命令，调试用

26.	ROLE 
返回主从实例所属的角色

27.	SAVE 
同步保存数据到硬盘

28.	SHUTDOWN [NOSAVE] [SAVE] 
异步保存数据到硬盘，并关闭服务器

29.	SLAVEOF host port 
将当前服务器转变为指定服务器的从属服务器(slave server)

30.	SLOWLOG subcommand [argument] 
管理 redis 的慢日志

31.	SYNC 
用于复制功能(replication)的内部命令
```

