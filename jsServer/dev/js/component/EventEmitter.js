define('js/component/EventEmitter', function(require, exports, module) {



    return (function() {
        var _eventCache = {};
        return {
            on: function(name, fn, context) {
                !_eventCache[name] && (_eventCache[name] = []);
                context && !context.__id && (context.__id = Math.random())
                _eventCache[name].push({
                    fn: fn,
                    context: context
                })
                return this;
            },
            emit: function(name, data, context) {

                _eventCache[name] && _eventCache[name].forEach(function(item, index) {
                    if (context) {
                        if (item.context.__id == context.__id) {
                            item.fn.apply(context, data);

                            return;
                        }
                    } else {
                        item.fn.apply(item.context || null, data);
                    }

                })
                return this
            }
        }
    }())
})
