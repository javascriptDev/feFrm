define('js/component/validateCode', function(require, exports, module) {



    module.exports = VC;

    function VC(opt) {
        this.sid = new Date().getTime();
        this.el = opt.el;
    }

    VC.prototype = {
        render: function() {
            this.el.attr('src', '/services/getCode?s=' + this.sid);
        },
        validate: function(code) {
            var me = this;
            $.get('/services/validate?code=' + code + '&s=' + this.sid, function(data) {
                data = JSON.parse(data);
                if (data.code == 0) {
                    me.done && me.done(1);
                } else {
                    me.done && me.done(me.update());
                }
            });
            return this;
        },
        update: function() {
            this.sid = new Date().getTime(), this.render()
        },
        then: function(cb) {
            !this.done && (this.done = cb);
        }
    }
})
