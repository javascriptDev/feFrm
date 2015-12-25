define(function(require) {

    var Vc = require('js/component/validateCode');

    var $vc = $('.vc'),
        $submit = $('.btn'),
        $code = $('.rcode');

    var vcInstance = new Vc({
        el: $vc
    })

    vcInstance.render();

    $('.btn').click(function() {
        vcInstance.validate($code.val()).then(function(isPass) {
            alert(!!isPass);
        })
    })

})
