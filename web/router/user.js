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
                joeCss: ['css/hg.css']
            }
            console.log(1);

            data.list = minhtml(fs.readFileSync(path.join(__dirname, '../template/list.html')).toString());
            data.carousel = fs.readFileSync(path.join(__dirname, '../template/carousel.html'));
            data.catgory_tpl = fs.readFileSync(path.join(__dirname, '../template/catgory.html'));;

            yield this.render('user', data);
        }
    },
    'topic': function() {
        return function*() {

            var data = {
                joeCss: ['css/detail.css']
            }

            data.det = minhtml(fs.readFileSync(path.join(__dirname, '../template/detail.html')).toString());
            yield this.render('userTopic', data);
        }
    },
    'sub': function() {
        return function*() {


            var data = {
                joeCss: ['css/hg.css']
            }

            data.list = minhtml(fs.readFileSync(path.join(__dirname, '../template/subtpl.html')).toString());

            yield this.render('sub', data);
        }
    },
    subShare: function() {
        return function*() {


            var data = {
                joeCss: ['css/hg.css']
            }


            data.list = minhtml(fs.readFileSync(path.join(__dirname, '../template/list.html')).toString());;

            yield this.render('subShare', data);
        }
    },
    tdj: function() {
        return function*() {


            var data = {
                joeCss: ['css/tdj.css']
            }

            data.det = fs.readFileSync(path.join(__dirname, '../template/tdjTpl.html'));;

            yield this.render('tdj', data);
        }
    },
    e: function() {
        return function*() {
            var data = {
                joeJs: ['js/lib/rem.js']
            }
            yield this.render('egou', data);
        }
    }
}
