
let connection = require('../config/connection');

let orm = {
    all: function(cb){
        let queryString = "SELECT * FROM" + "burgers" + ";";
        connection.query(queryString,function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    create: function(vals,cb){
        let queryString = "INSERT INTO burgers(burger_name)VALUES(?)";
        //console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function(condition, cb){
        let queryString = "UPDATE burgers SET devoured = true WHERE id ="+ condition;
        //console.log(queryString);
        connection.query(queryString, function(err,res){
            if(err) throw err;
            cb(res);
        })
    },

    delete: function(condition, cb){
        let queryString = "DELETE from burgers WHERE id="+condition;
        // console.log(condition);
        connection.query(queryString,function(err,res){
            if(err) throw err;
            cb(res);
        })
    }
}