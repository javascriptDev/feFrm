module.exports = {
    '/': function(argument) {
        return function*() {
            yield this.render('help',{});
        }
    }
}
