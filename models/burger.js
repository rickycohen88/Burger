let orm = require("../config/orm");

let burger = {
    all:function(cb){
        orm.all(function(res){
            cb(res);
        })
    },
    create:function(name, cb){
        orm.create(name,function(res){
            cb(res);
        })
    },
    update:function(id,cb){
        orm.update(id,function(res){
            cb(res);
        })
    },
    delete:function(id,cb){
        orm.delete(id,function(res){
            cb(res);
        })
    }
};

module.exports = burger;