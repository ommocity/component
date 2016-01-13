define(['Util','text!module/example/demo.tpl'], function(Util, tpl){
	/*
		@param1: 服务名
		@param2: 模拟数据服务地址
		@param3: 真实后台服务地址
		desc:动态添加ajax服务地址，
	*/
	Util.svMap.add('demo','demo.json','');

	Util.ajax.postJson(Util.svMap.get('demo'),'aaa=111',function(json,status){
		if (status) {
			var template = Util.hdb.compile(tpl);//handlebars模板编译
			$('#J_tabletpl').html(template(json));
		}else{
			alert('加载失败！');
		}
	})

	return "expose interface";
});