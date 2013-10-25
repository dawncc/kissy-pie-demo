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
 
  	/**
  	 *  augment的使用和mixin 特性
  	 */
	var S = KISSY,
  	Shoutable = { 
  		shout: function() { alert("Iam a " + this.name + ".") }
  	};

  	function Dog(name) { this.name = "Dog " + name; };
  	function Cat(name) { this.name = "Cat " + name; };

  	S.augment(Dog, Shoutable);
  	S.augment(Cat, Shoutable);

  	new Dog('Jack').shout();
  	new Cat('Tom').shout();

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
