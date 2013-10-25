/**
 * @fileoverview 页面头部公用脚本
 * @author: cc
 *
 **/
KISSY.add(function(S) {
 
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