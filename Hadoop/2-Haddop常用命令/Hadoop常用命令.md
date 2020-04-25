```shell
#创建目录
hadoop dfs -mkdir /test

#创建空文件(vim也可以)
hadoop dfs -touchz /test.txt

#上传文件或目录到hdfs
hadoop dfs -put test.txt /user
hadoop dfs -put test/ /user

#查看目录
hadoop dfs -ls /

#删除一个目录
hadoop dfs -rmr /home

#删除一个文件
hadoop dfs -rm /wahaha

#重命名
hadoop dfs -mv /test.txt /tests.txt

#查看文件内容
hadoop dfs -cat /test.txt

#将指定目录下的所有内容merge成一个文件，下载到本地
hadoop dfs -getmerge /test T.txt

#使用du文件和目录大小
hadoop dfs -du /

#将目录拷贝到其他目录
hadoop dfs -copyToLocal /home localdir

#将hadoop上文件down至本机已有目录下：hadoop fs -get [文件目录] [本机目录]
hadoop fs -get /lance/tmp.txt /lance 

#查看dfs的情况
hadoop dfsadmin -report

#查看正在跑的Java程序
jps

#将正在运行的hadoop作业kill掉
hadoop job –kill  [jobId]
```

