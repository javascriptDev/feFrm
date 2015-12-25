define('js/tools/storage', function(require, exports, module) {

    function check(key) {
        var val = localStorage.getItem(key);
        if (!val) {
            console.log('no this storage');
        }
        return JSON.parse(val || '[]');
    }

    module.exports = {
        add: function(key, val) {
            var data = check(key);
            var index = data.indexOf(val)
            if (index != -1) {
                data.splice(index,1);
            }

            data.push(val)
            localStorage.setItem(key, JSON.stringify(data));
        },
        del: function(key, val) {
            var data = check(key);
            for (var i = 0, len = data.length; i < len; i++) {
                if (data[i] == val) {
                    data.splice(i, 1);
                    return;
                }
            }
        },
        get: function(key, count) {
            var data = check(key);
            return data.splice(data.length <= count ? 0 : data.length - (count || 0), count || data.length);
        },
        empty: function(key) {
            var data = localStorage.getItem(key);
            data && localStorage.setItem(key, '');
        }
    }
})
