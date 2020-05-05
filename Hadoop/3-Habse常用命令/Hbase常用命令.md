| hbase shell命令 | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| alter           | 修改列族（column family）模式                                |
| count           | 统计表中行的数量                                             |
| create          | 创建表                                                       |
| describe        | 显示表相关的详细信息                                         |
| delete          | 删除指定对象的值（可以为表，行，列对应的值，另外也可以指定时间戳的值） |
| deleteall       | 删除指定行的所有元素值                                       |
| disable         | 使表无效                                                     |
| drop            | 删除表                                                       |
| enable          | 使表有效                                                     |
| exists          | 测试表是否存在                                               |
| exit            | 退出hbase shell                                              |
| get             | 获取行或单元（cell）的值                                     |
| incr            | 增加指定表，行或列的值                                       |
| list            | 列出hbase中存在的所有表                                      |
| put             | 向指向的表单元添加值                                         |
| tools           | 列出hbase所支持的工具                                        |
| scan            | 通过对表的扫描来获取对用的值                                 |
| status          | 返回hbase集群的状态信息                                      |
| shutdown        | 关闭hbase集群（与exit不同）                                  |
| truncate        | 重新创建指定表                                               |
| version         | 返回hbase版本信息                                            |

### 一、进入hbase命令行,hbase需要在环境变量路径中

```shell
hbase shell
```

### 二、表操作

```shell
# 显示hbase中的表
list

# 创建user表，包含info、data两个列族
create 'user', 'info', 'data' 

# 查看表结构（省略部分信息）
describe 'user'  
{NAME => 'data'}
{NAME => 'info'}

# 添加列
alter 'user','history'
describe 'user'
{NAME => 'data'}
{NAME => 'history'}
{NAME => 'info'}

# 删除列

#执行前先禁用表
#alter 'member', {NAME => 'address', METHOD => 'delete'}

alter 'user', 'delete'=>'history'
describe 'user'
{NAME => 'data'}
{NAME => 'info'}

# 删除表 先禁用表再删除
disable 'user'
drop 'user'
```

### 三、数据操作

```shell
# 插入数据，info列增加name和age两个属性
put 'user', 'rk0001', 'info:name', 'zhangsan'
put 'user', 'rk0001', 'info:age', 20

# 获取数据 整行
get 'user','rk0001'
COLUMN                  CELL
 info:age               timestamp=1544779092565, value=20
 info:name              timestamp=1544779031210, value=zhangsan

# 获取数据 指定行
get 'user','rk0001', 'info'
COLUMN                  CELL
 info:age               timestamp=1544779092565, value=20
 info:name              timestamp=1544779031210, value=zhangsan

# 获取数据 指定行的指定属性
get 'user','rk0001','info:name'
COLUMN                  CELL
 info:name              timestamp=1544779031210, value=zhangsan

# 更新数据
put 'user', 'rk0001', 'info:age', 22


# 查询表中的所有消息
scan 'user'
ROW                     COLUMN+CELL
 rk0001                 column=info:age, timestamp=1544779484540, value=22
 rk0001                 column=info:name, timestamp=1544779031210, value=zhangsan

# 删除指定对象的值
delete 'user', 'rk0001', 'info:age'
scan 'user'
ROW                     COLUMN+CELL
 rk0001                 column=info:name, timestamp=1544779031210, value=zhangsan

# 清空表数据
truncate 'user'
scan 'user'
ROW                     COLUMN+CELL
```

