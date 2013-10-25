/*
combined files : 

page/mods/header
page/init

*/
/**
 * @fileoverview 页面头部公用脚本
 * @author: cc
 *
 **/
KISSY.add('page/mods/header',function(S) {
 
    return function(){
        alert('header of refund.');
    }
 
});
/**
 * @fileOverview 
 * @author   cc
 */
KISSY.add('page/init',function(S, Header) {
 
    return function(){
        Header();
        return 'this is demo page.';
    }
 
}, {requires:['./mods/header']});
