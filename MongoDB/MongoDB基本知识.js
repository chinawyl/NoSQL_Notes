use test
db.users.insert({name:"wyl",age:20,gender:"男"})
db.users.insert([
    {name:"xyql",age:26,gender:"女"},
    {name:"ztfn",age:21,gender:"女"},
    {name:"scsyl",age:26,gender:"女"}
])
db.users.insert({_id:"nmb46",name:"bsmy",age:26,gender:"女"})
db.users.find()
db.users.find({_id:"nmb46"})
db.users.find({name:"wyl",age:20})
db.users.findOne({age:26})
db.users.find({}).count()
db.users.update({name:"wyl"},{name:"WYL"})
db.users.update(
    {"_id":ObjectId("5e5b5771158578a536d1eb5a")},
    {$set:{
        name:"wsc"
        }}
)
db.users.update(
    {name:"WYL"},
    {$set:{
        name:"WSC"
        }},
    {
        multi:true
        }
)
db.users.remove({_id:"nmb46"})
db.users.remove({_id:"nmb46"},true)
db.users.remove({})
db.users.find()
db.users.drop()