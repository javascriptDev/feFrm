define('js/tools/css', function(req, exp, module) {
    module.exports = {
        inject: _inject
    }

    function _inject(html) {
        var s = document.createElement('style');
        s.innerHTML = html;
        document.getElementsByTagName("head")[0].appendChild(s);


    }

})
