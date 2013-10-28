/**
 * @fileOverview 
 * @author   cc
 */
 KISSY.add(function(S, Header, Bind, Each) {

 	return function(){
 		Header(); // 获取return 回调
 		Bind();
 		return 'this is demo page.';
 	}

 }, {requires:['./mods/header', './mods/bind', './mods/each', './mods/extends']});