//1.����my_test���ݿ�
use my_test
//2.�����ݿ��users���ϲ���һ���ĵ�
db.users.insert({name:"�����"})
//3.��ѯusers���ϵ��ĵ�
db.users.find()
//4.�����ݿ�ļ����в������ĵ�
db.users.insert([
    {name:"��˽�"},
    {name:"ɳ����"}
])
//5.��ѯusers�������е��ĵ�
db.users.find()
//6.ͳ��users�����ĵ�������
db.users.find().count()
//7.��ѯusers����nameΪ����յ��ĵ�
db.users.find({name:"�����"})
//7.��users����nameΪ����յ��ĵ��������addressΪ����ɽ
db.users.update({name:"�����"},{$set:{address:"����ɽ"}})
//8.ʹ��{name:"��ɮ"}�滻nameΪ��˽���ĵ�
db.users.replaceOne({name:"��˽�"},{name:"��ɮ"})
//9.ɾ��nameΪ����նԵ��ĵ���address����
db.users.update({name:"�����"},{$unset:{address:1}})
//10.��nameΪ����յ��ĵ������hobby{cities:["����","�Ϻ�","����"],movies:["����","Ӣ��"]}
db.users.update({name:"�����"},{$set:{hobby:{cities:["����","�Ϻ�","����"],movies:["����","Ӣ��"]}}}) /*mongodb�ĵ������Ե�ֵҲ������һ���ĵ�����Ƕ�ĵ�*/
//11.��nameΪ��ɮ���ĵ������hobby{movies:["������","ϲ��֮��"]}
db.users.update({name:"��ɮ"},{$set:{hobby:{movies:["������","ϲ��֮��"]}}})
//12.��ѯϲ��Ӣ�۵��ĵ�
db.users.find({"hobby.movies":"Ӣ��"}) /*Ҫͨ����Ƕ�ĵ���ѯ�ĵ������������������*/
//13.����ɮ���һ���µĵ�Ӱ�Ǽʴ�Խ
db.users.update({name:"��ɮ"},{$push:{"hobby.movies":"�Ǽʴ�Խ"}}) /*put�������������Ԫ��(���ظ����)��addToSet(�����ظ����,������ʧ��)*/
//14.ɾ��ϲ���������û�
db.users.remove({"hobby.cities":"����"})
//15.ɾ��users����
db.users.drop()