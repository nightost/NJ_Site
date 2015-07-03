/**
 * Created by Nightost on 2015/6/29.
 */
var http = require("http");
var util = require("util");
var url = require("url");
var httpIns = http.createServer();
httpIns.on("request",requestHandle);
addServerListen();
/**
 *请求处理
 */
function requestHandle(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end(util.inspect(url.parse(req.url),true));
}
/**
 *事件监听，顺便打印日志
 */
function addServerListen(){
    httpIns.listen(4000);
    console.log("server is listening 4000");
}