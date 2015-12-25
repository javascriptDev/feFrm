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
    '/': function() {
        return function*() {


            var data = {
                joeCss: ['css/ol.css']
            }
            data.olListTpl = fs.readFileSync(path.join(__dirname, '../template/olTpl.html'));;
            yield this.render('ol', data);
        }
    },
    sr: function() {
        return function*() {
            var data = {
                joeCss: ['css/sr.css']
            }
            data.list = minhtml(fs.readFileSync(path.join(__dirname, '../template/srTpl.html')).toString());
            yield this.render('shareRecord', data);
        }
    }
}
