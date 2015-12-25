define(function(require) {
    var a = require('js/component/calendar');
    var util = require('js/component/util');
    var DateHelper = require('js/tools/date');


   


    var mask = document.querySelector('.date-get'),
        container = mask.querySelector('.date-get-inner');
    var end = new a({
        height: 150,
        max: [2015, 12, 1],
        title: '开始日期',
        container: container
    });
    var begin = new a({
        height: 150,
        max: [2015, 12, 1],
        cls: 'date2',
        title: '结束日期',
        container: container
    });

    $ok.click(function() {
        console.log(end.getVal());
        console.log(begin.getVal());
        mask.style.left = '100%';

    })

    window.show = function() {
        mask.style.left = '0';

    }
    window.hide = function() {
        mask.style.left = '100%';

    }

    
})
