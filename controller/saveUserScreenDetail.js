/**
 * Created by Nightost on 2015/7/2.
 */
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://10.20.42.220:27017/db');
var schema = mongoose.Schema;
// 链接错误
db.on('error', function(error) {
    console.log(error);
});

// Schema 结构
var mongooseSchema = new schema({
    deviceWidth : {type : String, default : ''},
    deviceHeight :{type : String, default : ''},
    viewportWidth : {type : String, default : ''},
    viewportHeight : {type : String, default : ''},
    elWidth : {type : String, default : ''},
    elHeight : {type : String, default : ''},
    browserAgent : {type : String, default : ''}
});
// model
var mongooseModel = db.model('mongoose', mongooseSchema);

/*
 *添加记录
 */
function saveSingDataToDB(doc){
    mongooseModel.create(doc, function(error){
        if(error) {
            console.log(error);
        } else {
            console.log('save ok');
        }
        // 关闭数据库链接
        //db.close();
    });
}
function saveDataArrayToDB(data){
    if(!data instanceof Array)return;
    var i = 0;
    for(;i<data.length;i++){
        saveSingDataToDB(data[i]);
    }
}
/**
 *
 * @type {saveDataToDB}
 */
module.exports = saveSingDataToDB;