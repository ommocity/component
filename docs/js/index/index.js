
/*
	Util用法及作用：
	Util集合了所有公用的js文件，并对外暴露相关接口，用于各模块调用。每个模块只需引入Util对象即可调用所有公用功能。
	可以根据项目自行向Util内添加公用js。
	作用：
	1、确保打包时只对Util打包一次，防止模块私自引入公用js文件，导致引用混乱，重复压缩合并
	2、方便统一调用公用js
*/
require(['Util', 'js/example/demo'], function(Util,demo) {
	console.log(demo)
	console.log(Util)

	/*
		编码区域
	*/

	return  ' index interface';
});
