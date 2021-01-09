let connection = require("../config/orm");

let burger = {
    all:function(cb){
        orm.all("",function(res){
            cb(res);
        })
    }
}