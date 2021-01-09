let connection = require('../config/connection');



let orm = {
    all: function(tableInput, cb){
        let querystring = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString,function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    create:
}