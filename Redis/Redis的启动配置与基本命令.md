### 一、Redis的启动

```sql
/*1.启动服务端*/
cd /usr/local/redis
./bin/redis-server

/*2.启动客户端*/
cd /usr/local/redis
./bin/redis-cli

/*3.查看连接是否成功*/
ping /*出现PONG成功*/
```

### 二、自定义Redis.conf文件

```sql
/*1.复制配置文件*/
cd /opt/redis-5.0.7/
cp redis.conf /usr/local/redis

/*2.修改配置文件*/
vim redis.conf
daemonize no 修改为 daemonize yes
bind 127.0.0.1
requirepass 密码

/*启动服务端*/
./bin/redis-server ./redis.conf
ps -ef | grep -i redis

/*启动客户端*/
./bin/redis-cli -a 123456
```

### 三、Redis关闭

```sql
/*1.非正常关闭:断电，杀死进程*/
ps -ef | grep -i redis
kill -9 PID

/*2.正常关闭:关闭Redis服务*/
在客户端:shutdown

```

### 四、Redis的键

##### 以下命令小写也行

```sql
1.	DEL key
该命令用于在 key 存在时删除 key:DEL /*删除多个键时用空行隔开*/ 

2.	DUMP key 
序列化给定 key ，并返回被序列化的值。

3.	EXISTS key 
检查给定 key 是否存在。

4.	EXPIRE key seconds
为给定 key 设置过期时间，以秒计。

5.	EXPIREAT key timestamp 
EXPIREAT 的作用和 EXPIRE 类似，都用于为 key 设置过期时间。 不同在于 EXPIREAT 命令接受的时间参数是 UNIX 时间戳(unix timestamp)。

6.	PEXPIRE key milliseconds 
设置 key 的过期时间以毫秒计。

7.	PEXPIREAT key milliseconds-timestamp 
设置 key 过期时间的时间戳(unix timestamp) 以毫秒计

8.	KEYS pattern 
查找所有符合给定模式( pattern)的 key 。 /*其中*代表所有,?代表一个字符*/

9.	MOVE key db 
将当前数据库的 key 移动到给定的数据库 db 当中。/*select 1 切换数据库*/

10.	PERSIST key 
移除 key 的过期时间，key 将持久保持。

11.	PTTL key 
以毫秒为单位返回 key 的剩余的过期时间。

12.	TTL key 
以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)。

13.	RANDOMKEY 
从当前数据库中随机返回一个 key 。

14.	RENAME key newkey 
修改 key 的名称

15.	RENAMENX key newkey 
仅当 newkey 不存在时，将 key 改名为 newkey 。

16	TYPE key 
返回 key 所储存的值的类型。
```

##### 注:key区分大小写