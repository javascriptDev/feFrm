module.exports = {
	'/' : function(){
		return function *(){

			var data = {
				joeCss : ['css/demo.css']
			};

			yield this.render('demo',data);
		}
	}
}