//1�������ݿ�test
use test
//2.��numbers�������20000������
/*��Ч��д��
for(var i=1; i<=20000; i++){
    db.numbers.insert({num:i})
}
*/
/*��Ч��д��*/
var arr = []
for(var i=1; i<=20000; i++){
    arr.push({num:i})
}
db.numbers.insert(arr)
//3.��ѯnumbers��numΪ500���ĵ�
db.numbers.find({num:500})
//4.��ѯnumbers��num����5000���ĵ�
db.numbers.find({num:{$gt:5000}})
//5.��ѯnumbers��numС��30���ĵ�
db.numbers.find({num:{$lt:30}})
//6.��ѯnumbers��num����40С��50���ĵ�
db.numbers.find({num:{$gt:40,$lt:50}})
//7.��ѯnumbers��num���ڵ���19996���ĵ�
db.numbers.find({num:{$gte:19996}})
//8.��ѯnumbers������ǰ10������
db.numbers.find().limit(10)
//9.��ѯnumbers�����е�11������12��������
db.numbers.find().skip(10).limit(10)
db.numbers.find().limit(10).skip(10)