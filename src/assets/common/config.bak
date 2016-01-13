var conf = 1; //控制服务    0：调用前端假数据   1：调用后台真是数据
var srvMap = (function(){
    var srcPref = ["../../asset/data/","/ecp/"];
    var dataArray = [{}, {}];
    return {
        add: function(uid, mockSrc, srvSrc) {
            dataArray[0][uid] = srcPref[conf] + mockSrc;
            dataArray[1][uid] = srcPref[conf] + srvSrc;         
        },
        get: function(uid) {
            return dataArray[conf][uid];
        },
        getAppPath:function(){
        	return srcPref[conf];
        },
        dataArrays:function(){
            return dataArray[conf];
        }
    };
})(jQuery);

/**
 * tpl 定义
 */
var tplMap = (function(){
    var version = '20131225';
    var tplPref = ["/aiscrm/pc/base/tpl/","page/"];
    var tpl = {
        // 办理路径
        "globalPath":tplPref[conf]+"globalPath.tpl"
    };
    
    // 为tpl添加版本号
    version = '?ver=' + version;
    for(var perTpl in tpl){
        if(tpl.hasOwnProperty(perTpl)){
        	var tplPath = tpl[perTpl];
        	tplPath = (conf==1)?tplPath.replace(".tpl","_tpl"):tplPath;
            tpl[perTpl] = tplPath+version;
        }
    }
    
    return {
        add: function(uid,tplSrc) {
            if(1 == conf){
                tplSrc = tplSrc.replace(".tpl","_tpl");
            }
            tpl[uid] = tplPref[conf] + tplSrc + version;
        },
        get: function(uid) {
            return tpl[uid];
        },
        tpls: function() {
            return tpl;
        }
    };
})(jQuery);


//将srvMap和tplMap对象注册为符合AMD规范的模块，可使用requireJS模块化加载
if (typeof define === "function" && define.amd) {
    define('srvMap',[], function () {
        return srvMap;
    });
}
if (typeof define === "function" && define.amd) {
    define('tplMap',[], function () {
        return tplMap;
    });
}