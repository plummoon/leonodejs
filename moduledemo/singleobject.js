function Hello(){
	var name;
	this.setName= function(thyName){
		name = thyName;
	};
	this.sayHello  = function (argument) {
		console.log('Hello '+name);
	}
};
module.exports = Hello;