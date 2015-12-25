define('js/tools/date', function(req, exports, module) {
    module.exports = {
        getEndDate: _getEt
    }

    /**
     * 获取结束日期
     * @param  {string} date 日期
     * @param  {number} dc   相差天数
     * @return {string}      
     */
    function _getEt(date, dc) {
        var year = date[0],
            month = date[1],
            day = date[2];

        var dayPerMonth = 0;

        //闰年
        if (day + dc < 1) {
            month--;
            if (month <= 0) {
                month += 12;
                year--;
            }

            if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) != -1) {
                dayPerMonth = 31;
            } else if ([4, 6, 8, 9, 11].indexOf(month) != -1) {
                //30天
                dayPerMonth = 30;
            } else {
                (year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0) && (dayPerMonth = 29) || (dayPerMonth = 28)
            }

            day = dayPerMonth + day + dc;
        } else {
            day = day + dc;
        }

        month < 10 &&  (month = '0' + month);
        day < 10   &&  (day   = '0' + day);

        return [year, month, day];
    }
})
