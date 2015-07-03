/**
 * Created by Nightost on 2015/7/2.
 */
var args = {
    postUrl : "/getUserInfo/sendDeviceInfo",
    temp :['<div class="arg-box">',
            '<p id = "deviceWidth"><span class="title">device 宽度</span><span class="val"></span></p>',
            '<p id = "deviceHeight"><span class="title">device 高度</span><span class="val"></span></p>',
            '<p id = "viewportWidth"><span class="title">viewport 宽度</span><span class="val"></span></p>',
            '<p id = "viewportHeight"><span class="title">viewport 高度</span><span class="val"></span></p>',
            '<p id = "elWidth"><span class="title">box 宽度</span><span class="val"></span></p>',
            '<p id = "elHeight"><span class="title">box 高度</span><span class="val"></span></p>',
            '<p id = "browserAgent"><span class="title">浏览器标识</span><span class="val"></span></p>',
        '</div>']
};
$(function(){
    getArgBind();
});
/**
 * 绑定提交
 */
function getArgBind(){
    $("#getArgs").on("click",function(){
        var template
            ,tempObj = {}
            ,i;
        //var doc = {deviceArgKey : '设备宽度', deviceArgVal : '3000'};
        template = $(args.temp.join(""));
        tempObj.deviceWidth = window.innerWidth;
        tempObj.deviceHeight = window.innerHeight;
        tempObj.viewportWidth = document.documentElement.clientWidth;
        tempObj.viewportHeight = document.documentElement.clientHeight;
        tempObj.elWidth = $("#box").outerWidth();
        tempObj.elHeight = $("#box").outerHeight();
        tempObj.browserAgent = navigator.userAgent;
        for(i in tempObj){
            template.find("#" + i + " .val").text(tempObj[i]);
        }
        sendUserDeviceData(tempObj);
        $("body").append(template);
    });
}
/**
 * 发送数据
 * @param data
 */
function sendUserDeviceData(data){
    console.log(JSON.stringify(data));
    $.ajax({
        url : args.postUrl,
        data : JSON.stringify(data),
        type : 'post',
        contentType : 'application/json',
        success:function(){
            if(window.confirm('数据发送成功了，关闭该死的网页？')){
                window.close();
            }
        },
        error : function(){
            if(window.confirm('数据发送虽然失败，还是关了吧，该死的程序员？')){
                window.close();
            }
        }
    });
}