//һ��һ
db.HusbandAndWife.insert([{name:"������",wife:{name:"��Ұ����"}}])
//һ�Զ࣬���һ
db.users.insert([{username:"��������"},{username:"��������"}])
db.users.find()
db.order.insert({list:["ƻ��","�㽶","����"],userid:ObjectId("5e61c9a3864bf8cfa31dcfb6")})
db.order.find()
db.order.insert({list:["ţ��","����"],userid:ObjectId("5e61c9a3864bf8cfa31dcfb7")})
db.order.insert({list:["��Ϸ��","����","�ֻ�"],userid:ObjectId("5e61c9a3864bf8cfa31dcfb6")})
/*�����û�����*/
var user_id = db.users.findOne({username:"��������"})._id
db.order.find({userid:user_id})
//��Զ�
db.teachers.insert([{name:"����"},{name:"����"},{name:"ׯ��"}])
db.teachers.find()
db.stus.insert([{name:"������",teachersid:[ObjectId("5e61ccae864bf8cfa31dcfbb"),ObjectId("5e61ccae864bf8cfa31dcfbc")]},{name:"����",teachersid:ObjectId("5e61ccae864bf8cfa31dcfbb")}])
db.stus.find()