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
                    joeCss: ['css/perf.css']
                }
                // data.catgory_tpl = fs.readFileSync(path.join(__dirname, '../template/catgory.html'));;
            yield this.render('perf', data);
        }
    },
    detail: function() {
        return function*() {


            var data = {
                    joeCss: ['css/detailOrder.css']
                }
                // data.catgory_tpl = fs.readFileSync(path.join(__dirname, '../template/catgory.html'));;
            yield this.render('detail', data);
        }
    },
    list: function() {
        return function*() {
            var data = {
                joeCss: ['css/pl.css']
            }
            data.list = minhtml(fs.readFileSync(path.join(__dirname, '../template/plTpl.html')).toString());
            yield this.render('pl', data);
        }
    }
}
