/**
 * Created by Nightost on 2015/7/2.
 */
var express = require('express');
var router = express.Router();
var saveUserScreenDetail = require('../controller/saveUserScreenDetail');
/* GET device arg. */
router.get('/', function(req, res, next) {
    res.render('getDeviceWidth');
});
/* post device arg. */
router.post('/sendDeviceInfo', function(req, res, next) {
    var doc;
    if (req.body.data) {
        //能正确解析 json 格式的post参数
        doc = req.body.data;
        res.send({"status": "success"});
    } else {
        doc = req.body;
    }
    res.send({"status": "success"});
    console.log(doc);
    // 增加记录 基于model操作
    saveUserScreenDetail(doc);
});

module.exports = router;