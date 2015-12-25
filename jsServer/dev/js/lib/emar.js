;
! function(global, factory) {

    var emar = factory();
    !window['emar'] && (window['emar'] = emar, window.define = emar.define, window.cmd = true);

}(window, function() {



    /*
     * module manager
     */
    var ModuleMgr = (function() {
            var modules = {};
            window.gm = modules;
            return {
                get: function(name) {
                    return modules[name];
                },
                add: function(mod) {
                    modules[mod.name] = mod;
                }
            }
        }()),
        /*
         * 事件管理器
         */
        EventMgr = (function() {
            window._eventCache = {};
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
                },
                rm: function(name, context) {
                    var ets = _eventCache[name];
                    ets && ets.forEach(function(item, index) {
                        if (context) {
                            item.context && item.context.__id == context.__id && ets.splice(index, 1);
                        } else {
                            ets.length = 0;
                        }
                    })
                    return this;

                }
            }
        }()),
        emar = {
            define: _define,
            use: _use,
            base: '',
            setPath: function(path) {
                emar.base = path;
            },
            cache: {},
            release: 0
        },
        loadingScripts = [],
        reg = /require(\([^\(\)]*\))/g,
        space = /\s+/g,
        /*模块状态*/
        status = {
            init: 0,
            loading: 1,
            loaded: 2,
            error: 3,
            done: 4
        };


    /*
     * 兼容低版本浏览器,不知道数组forEach
     */
    !Array.prototype.forEach && (Array.prototype.forEach = function(fn) {
        if (typeof fn != 'function') return;
        for (var i = 0, len = this.length; i < len; i++) {
            fn(this[i], i);
        }
    })

    /*
     * module constructor
     */
    function Module(opt) {
        this.deps = opt.deps;
        this.name = opt.name;
        this.factory = opt.factory;
        this.status = status.init;
        this.exports = {};

        if (ModuleMgr.get(opt.name)) {
            return;
        }

        ModuleMgr.add(this);

        //init
        this.init();
    }

    var proto = Module.prototype;



    /*
     * 初始化module
     */
    proto.init = function() {
        var me = this;
        EventMgr.on(this.name + ':loaded', this.loaded, this);

        this.loadDeps();
    }

    /*
     * 加载所有模块依赖
     */
    proto.loadDeps = function() {
        if (emar.release || this.deps.length == 0) {
            EventMgr.emit(this.name + ':loaded').rm(this.name + ':loaded', this);

            return;
        }
        var me = this;
        this.deps.forEach(function(item) {
            EventMgr.on(item + ':depsLoaded', me.loaded, me);
            if (!emar.release) {
                loadingScripts.indexOf(item) == -1 && (loadingScripts.push(item), me.load(item))
            }
        })
    }

    /*
     * 载入脚本
     */
    proto.load = function(url) {
            var me = this;
            var script = document.createElement('script');
            script.src = this.resolve(url);

            document.head.appendChild(script);
            script.onload = script.onerror = script['onreadystatechange'] = function(e) {
                script.onload = script['onreadystatechange'] = null

                if (e.type == 'error') {
                    throw new Error('module' + url + ' is not find!');
                }

                EventMgr.emit(url + ':loaded').rm(url + ':loaded', me);;
                this.remove();
            }
        }
        /*
         * 脚本文件加载完毕
         */
    proto.loaded = function() {

        this.status = status.loaded;
        if (this.isDepsLoaded()) {

            this.status = status.done
            this.factory(_require, this.exports, this)
            emar.cache[this.name] = this.exports
            EventMgr.emit(this.name + ':depsLoaded')
        }
    }

    /*
     * 判断所有依赖是否加载完毕
     */
    proto.isDepsLoaded = function() {

        if (this.deps.length == 0) {
            return true;
        }

        var result = true;
        this.deps.forEach(function(item) {
            var mod = ModuleMgr.get(item);
            if (!mod || (mod && mod.status != status.done)) {
                result = false;
                return;
            }
        })

        return result;
    }

    /*
     * 路径修复
     */
    proto.resolve = function(url) {
        var result = url.indexOf('.js') != -1 ? url : url + '.js';
        return emar.base + result;
    }


    /*
     * 全局define 方法
     */
    function _define(name, factory) {

        var moduleName = '',
            fac = function() {};

        if (arguments.length == 1 && typeof arguments[0] == 'function') {
            moduleName = 'emar_0';
            fac = name;
        } else if (arguments.length == 2 && typeof arguments[0] == 'string' && typeof arguments[1] == 'function') {
            moduleName = name;
            fac = factory;
        }


        new Module({
            name: moduleName,
            factory: fac,
            deps: _parseDependence(fac.toString())
        })

    }

    /*
     * 模块内 require方法定义
     */
    function _require(name) {
        return emar.cache[name];
    }


    /*
     * 查找依赖模块
     */
    function _parseDependence(str) {
        var result = [];
        var deps = str.replace(space, '').match(reg) || [];
        for (var i = 0, len = deps.length; i < len; i++) {
            result.push(deps[i].replace(/"/ig, "'").replace("require('", '').replace("')", ''));
        }
        return result;
    }

    /*
     * 模块引入
     */

    function _use(name) {
        var mod = emar.cache[name];
        if (mod) {
            return mod;
        }

        var script = document.createElement('script');
        script.src = Module.prototype.resolve(name);
        document.head.appendChild(script);
    }


    return emar;
})
