require("./05 Connect_MongoDB");

var Student = require("./05 Modle_MongoDB");

console.log(Student);

Student.find({},function (err,docs) {
    if(!err){
        console.log(docs);
    }
});