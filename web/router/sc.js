var fs = require('fs');
var path = require('path');
function minhtml(html) {
    console.log(html);
    var stripchars = ["\\n", "\\t", "\\r", "\n", "\r", "\t", "  ", ];
    for (var i = 0, len = stripchars.length; i < len; i++) {
        var char = stripchars[i];
        while (html.indexOf(char) > -1) {
            html = html.split(char).join(" ");
        }
    }
    if (html.indexOf("> <") > -1) {
        html = html.split("> <").join("><");
    }
    return html;
}
module.exports = {
	'/' : function(){
		return function *(){

			var data = {
				joeCss : ['css/sc.css']
			};

			data.list  = minhtml(fs.readFileSync(path.join(__dirname, '../template/scTpl.html')).toString());

			yield this.render('sc',data);
		}
	}
}