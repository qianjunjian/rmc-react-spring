(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime-corejs3/core-js-stable/reflect/construct'), require('@babel/runtime-corejs3/helpers/slicedToArray'), require('@babel/runtime-corejs3/helpers/createClass'), require('@babel/runtime-corejs3/helpers/classCallCheck'), require('@babel/runtime-corejs3/helpers/inherits'), require('@babel/runtime-corejs3/helpers/possibleConstructorReturn'), require('@babel/runtime-corejs3/helpers/getPrototypeOf'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.replace.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/web.dom-collections.for-each.js'), require('core-js/modules/es.array.join.js'), require('core-js/modules/es.promise.js'), require('@babel/runtime-corejs3/core-js-stable/object/keys'), require('@babel/runtime-corejs3/core-js-stable/instance/trim'), require('@babel/runtime-corejs3/core-js-stable/object/values'), require('@babel/runtime-corejs3/core-js-stable/instance/map'), require('@babel/runtime-corejs3/core-js-stable/instance/concat'), require('@babel/runtime-corejs3/core-js-stable/instance/starts-with'), require('@babel/runtime-corejs3/core-js-stable/symbol'), require('@babel/runtime-corejs3/core-js/get-iterator-method'), require('@babel/runtime-corejs3/helpers/assertThisInitialized'), require('@babel/runtime-corejs3/helpers/toConsumableArray'), require('@babel/runtime-corejs3/helpers/get'), require('@babel/runtime-corejs3/helpers/wrapNativeSuper'), require('@babel/runtime-corejs3/helpers/asyncToGenerator'), require('@babel/runtime-corejs3/regenerator'), require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor'), require('@babel/runtime-corejs3/core-js-stable/object/freeze'), require('@babel/runtime-corejs3/core-js-stable/object/assign'), require('@babel/runtime-corejs3/core-js-stable/instance/includes'), require('@babel/runtime-corejs3/core-js-stable/promise'), require('@babel/runtime-corejs3/core-js-stable/instance/sort'), require('@babel/runtime-corejs3/core-js-stable/symbol/for'), require('@babel/runtime-corejs3/core-js-stable/set'), require('@babel/runtime-corejs3/core-js-stable/instance/values'), require('@babel/runtime-corejs3/core-js-stable/number/is-nan'), require('@babel/runtime-corejs3/core-js-stable/instance/reverse'), require('@babel/runtime-corejs3/core-js-stable/object/is-frozen'), require('@babel/runtime-corejs3/core-js-stable/array/from'), require('@babel/runtime-corejs3/core-js-stable/map'), require('@babel/runtime-corejs3/core-js-stable/instance/keys'), require('@babel/runtime-corejs3/core-js-stable/instance/splice'), require('@babel/runtime-corejs3/core-js-stable/instance/slice'), require('@babel/runtime-corejs3/core-js-stable/instance/find'), require('core-js/modules/es.array.iterator.js'), require('core-js/modules/es.string.iterator.js'), require('core-js/modules/web.dom-collections.iterator.js'), require('core-js/modules/es.function.name.js'), require('@babel/runtime-corejs3/core-js-stable/instance/find-index'), require('core-js/modules/es.regexp.constructor.js'), require('core-js/modules/es.regexp.to-string.js'), require('core-js/modules/es.string.match.js'), require('core-js/modules/es.number.constructor.js'), require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime-corejs3/core-js-stable/reflect/construct', '@babel/runtime-corejs3/helpers/slicedToArray', '@babel/runtime-corejs3/helpers/createClass', '@babel/runtime-corejs3/helpers/classCallCheck', '@babel/runtime-corejs3/helpers/inherits', '@babel/runtime-corejs3/helpers/possibleConstructorReturn', '@babel/runtime-corejs3/helpers/getPrototypeOf', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.string.replace.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/web.dom-collections.for-each.js', 'core-js/modules/es.array.join.js', 'core-js/modules/es.promise.js', '@babel/runtime-corejs3/core-js-stable/object/keys', '@babel/runtime-corejs3/core-js-stable/instance/trim', '@babel/runtime-corejs3/core-js-stable/object/values', '@babel/runtime-corejs3/core-js-stable/instance/map', '@babel/runtime-corejs3/core-js-stable/instance/concat', '@babel/runtime-corejs3/core-js-stable/instance/starts-with', '@babel/runtime-corejs3/core-js-stable/symbol', '@babel/runtime-corejs3/core-js/get-iterator-method', '@babel/runtime-corejs3/helpers/assertThisInitialized', '@babel/runtime-corejs3/helpers/toConsumableArray', '@babel/runtime-corejs3/helpers/get', '@babel/runtime-corejs3/helpers/wrapNativeSuper', '@babel/runtime-corejs3/helpers/asyncToGenerator', '@babel/runtime-corejs3/regenerator', '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor', '@babel/runtime-corejs3/core-js-stable/object/freeze', '@babel/runtime-corejs3/core-js-stable/object/assign', '@babel/runtime-corejs3/core-js-stable/instance/includes', '@babel/runtime-corejs3/core-js-stable/promise', '@babel/runtime-corejs3/core-js-stable/instance/sort', '@babel/runtime-corejs3/core-js-stable/symbol/for', '@babel/runtime-corejs3/core-js-stable/set', '@babel/runtime-corejs3/core-js-stable/instance/values', '@babel/runtime-corejs3/core-js-stable/number/is-nan', '@babel/runtime-corejs3/core-js-stable/instance/reverse', '@babel/runtime-corejs3/core-js-stable/object/is-frozen', '@babel/runtime-corejs3/core-js-stable/array/from', '@babel/runtime-corejs3/core-js-stable/map', '@babel/runtime-corejs3/core-js-stable/instance/keys', '@babel/runtime-corejs3/core-js-stable/instance/splice', '@babel/runtime-corejs3/core-js-stable/instance/slice', '@babel/runtime-corejs3/core-js-stable/instance/find', 'core-js/modules/es.array.iterator.js', 'core-js/modules/es.string.iterator.js', 'core-js/modules/web.dom-collections.iterator.js', 'core-js/modules/es.function.name.js', '@babel/runtime-corejs3/core-js-stable/instance/find-index', 'core-js/modules/es.regexp.constructor.js', 'core-js/modules/es.regexp.to-string.js', 'core-js/modules/es.string.match.js', 'core-js/modules/es.number.constructor.js', 'react', 'react-dom'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}, global._Reflect$construct, global._slicedToArray, global._createClass, global._classCallCheck, global._inherits, global._possibleConstructorReturn, global._getPrototypeOf, null, null, null, null, null, null, global._Object$keys, global._trimInstanceProperty, global._Object$values, global._mapInstanceProperty, global._concatInstanceProperty, global._startsWithInstanceProperty, global._Symbol, global._getIteratorMethod, global._assertThisInitialized, global._toConsumableArray, global._get, global._wrapNativeSuper, global._asyncToGenerator, global._regeneratorRuntime, global._Object$getOwnPropertyDescriptor, global._Object$freeze, global._Object$assign, global._includesInstanceProperty, global._Promise, global._sortInstanceProperty, global._Symbol$for, global._Set, global._valuesInstanceProperty, global._Number$isNaN, global._reverseInstanceProperty, global._Object$isFrozen, global._Array$from, global._Map, global._keysInstanceProperty, global._spliceInstanceProperty, global._sliceInstanceProperty, global._findInstanceProperty, null, null, null, null, global._findIndexInstanceProperty, null, null, null, null, global.require$$1, global.require$$1$1));
})(this, (function (exports, _Reflect$construct, _slicedToArray, _createClass, _classCallCheck, _inherits, _possibleConstructorReturn, _getPrototypeOf, es_regexp_exec_js, es_string_replace_js, es_object_toString_js, web_domCollections_forEach_js, es_array_join_js, es_promise_js, _Object$keys, _trimInstanceProperty, _Object$values, _mapInstanceProperty, _concatInstanceProperty, _startsWithInstanceProperty, _Symbol, _getIteratorMethod, _assertThisInitialized, _toConsumableArray, _get, _wrapNativeSuper, _asyncToGenerator, _regeneratorRuntime, _Object$getOwnPropertyDescriptor, _Object$freeze, _Object$assign, _includesInstanceProperty, _Promise, _sortInstanceProperty, _Symbol$for, _Set, _valuesInstanceProperty, _Number$isNaN, _reverseInstanceProperty, _Object$isFrozen, _Array$from, _Map, _keysInstanceProperty, _spliceInstanceProperty, _sliceInstanceProperty, _findInstanceProperty, es_array_iterator_js, es_string_iterator_js, web_domCollections_iterator_js, es_function_name_js, _findIndexInstanceProperty, es_regexp_constructor_js, es_regexp_toString_js, es_string_match_js, es_number_constructor_js, require$$1, require$$1$1) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var _Reflect$construct__default = /*#__PURE__*/_interopDefaultLegacy(_Reflect$construct);
	var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
	var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
	var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
	var _inherits__default = /*#__PURE__*/_interopDefaultLegacy(_inherits);
	var _possibleConstructorReturn__default = /*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn);
	var _getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_getPrototypeOf);
	var _Object$keys__default = /*#__PURE__*/_interopDefaultLegacy(_Object$keys);
	var _trimInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_trimInstanceProperty);
	var _Object$values__default = /*#__PURE__*/_interopDefaultLegacy(_Object$values);
	var _mapInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_mapInstanceProperty);
	var _concatInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_concatInstanceProperty);
	var _startsWithInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_startsWithInstanceProperty);
	var _Symbol__default = /*#__PURE__*/_interopDefaultLegacy(_Symbol);
	var _getIteratorMethod__default = /*#__PURE__*/_interopDefaultLegacy(_getIteratorMethod);
	var _assertThisInitialized__default = /*#__PURE__*/_interopDefaultLegacy(_assertThisInitialized);
	var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
	var _get__default = /*#__PURE__*/_interopDefaultLegacy(_get);
	var _wrapNativeSuper__default = /*#__PURE__*/_interopDefaultLegacy(_wrapNativeSuper);
	var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
	var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
	var _Object$getOwnPropertyDescriptor__default = /*#__PURE__*/_interopDefaultLegacy(_Object$getOwnPropertyDescriptor);
	var _Object$freeze__default = /*#__PURE__*/_interopDefaultLegacy(_Object$freeze);
	var _Object$assign__default = /*#__PURE__*/_interopDefaultLegacy(_Object$assign);
	var _includesInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_includesInstanceProperty);
	var _Promise__default = /*#__PURE__*/_interopDefaultLegacy(_Promise);
	var _sortInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_sortInstanceProperty);
	var _Symbol$for__default = /*#__PURE__*/_interopDefaultLegacy(_Symbol$for);
	var _Set__default = /*#__PURE__*/_interopDefaultLegacy(_Set);
	var _valuesInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_valuesInstanceProperty);
	var _Number$isNaN__default = /*#__PURE__*/_interopDefaultLegacy(_Number$isNaN);
	var _reverseInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_reverseInstanceProperty);
	var _Object$isFrozen__default = /*#__PURE__*/_interopDefaultLegacy(_Object$isFrozen);
	var _Array$from__default = /*#__PURE__*/_interopDefaultLegacy(_Array$from);
	var _Map__default = /*#__PURE__*/_interopDefaultLegacy(_Map);
	var _keysInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_keysInstanceProperty);
	var _spliceInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_spliceInstanceProperty);
	var _sliceInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_sliceInstanceProperty);
	var _findInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_findInstanceProperty);
	var _findIndexInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_findIndexInstanceProperty);
	var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
	var require$$1__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$1$1);

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var reactSpringWeb_cjs_prod = {};

	var reactSpringCore_cjs_prod = {};

	var reactSpringShared_cjs_prod = {};

	var reactSpringRafz_cjs_prod = {};

	Object.defineProperty(reactSpringRafz_cjs_prod, '__esModule', {
	  value: true
	});
	var updateQueue = makeQueue();

	var raf = function raf(fn) {
	  return schedule(fn, updateQueue);
	};

	var writeQueue = makeQueue();

	raf.write = function (fn) {
	  return schedule(fn, writeQueue);
	};

	var onStartQueue = makeQueue();

	raf.onStart = function (fn) {
	  return schedule(fn, onStartQueue);
	};

	var onFrameQueue = makeQueue();

	raf.onFrame = function (fn) {
	  return schedule(fn, onFrameQueue);
	};

	var onFinishQueue = makeQueue();

	raf.onFinish = function (fn) {
	  return schedule(fn, onFinishQueue);
	};

	var timeouts = [];

	raf.setTimeout = function (handler, ms) {
	  var time = raf.now() + ms;

	  var cancel = function cancel() {
	    var i = _findIndexInstanceProperty__default["default"](timeouts).call(timeouts, function (t) {
	      return t.cancel == cancel;
	    });

	    if (~i) _spliceInstanceProperty__default["default"](timeouts).call(timeouts, i, 1);
	    __raf.count -= ~i ? 1 : 0;
	  };

	  var timeout = {
	    time: time,
	    handler: handler,
	    cancel: cancel
	  };

	  _spliceInstanceProperty__default["default"](timeouts).call(timeouts, findTimeout(time), 0, timeout);

	  __raf.count += 1;
	  start();
	  return timeout;
	};

	var findTimeout = function findTimeout(time) {
	  return ~(~_findIndexInstanceProperty__default["default"](timeouts).call(timeouts, function (t) {
	    return t.time > time;
	  }) || ~timeouts.length);
	};

	raf.cancel = function (fn) {
	  updateQueue.delete(fn);
	  writeQueue.delete(fn);
	};

	raf.sync = function (fn) {
	  sync = true;
	  raf.batchedUpdates(fn);
	  sync = false;
	};

	raf.throttle = function (fn) {
	  var lastArgs;

	  function queuedFn() {
	    try {
	      fn.apply(void 0, _toConsumableArray__default["default"](lastArgs));
	    } finally {
	      lastArgs = null;
	    }
	  }

	  function throttled() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    lastArgs = args;
	    raf.onStart(queuedFn);
	  }

	  throttled.handler = fn;

	  throttled.cancel = function () {
	    onStartQueue.delete(queuedFn);
	    lastArgs = null;
	  };

	  return throttled;
	};

	var nativeRaf = typeof window != 'undefined' ? window.requestAnimationFrame : function () {};

	raf.use = function (impl) {
	  return nativeRaf = impl;
	};

	raf.now = typeof performance != 'undefined' ? function () {
	  return performance.now();
	} : Date.now;

	raf.batchedUpdates = function (fn) {
	  return fn();
	};

	raf.catch = console.error;
	raf.frameLoop = 'always';

	raf.advance = function () {
	  if (raf.frameLoop !== 'demand') {
	    console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand');
	  } else {
	    update();
	  }
	};

	var ts = -1;
	var sync = false;

	function schedule(fn, queue) {
	  if (sync) {
	    queue.delete(fn);
	    fn(0);
	  } else {
	    queue.add(fn);
	    start();
	  }
	}

	function start() {
	  if (ts < 0) {
	    ts = 0;

	    if (raf.frameLoop !== 'demand') {
	      nativeRaf(loop);
	    }
	  }
	}

	function loop() {
	  if (~ts) {
	    nativeRaf(loop);
	    raf.batchedUpdates(update);
	  }
	}

	function update() {
	  var prevTs = ts;
	  ts = raf.now();
	  var count = findTimeout(ts);

	  if (count) {
	    eachSafely(_spliceInstanceProperty__default["default"](timeouts).call(timeouts, 0, count), function (t) {
	      return t.handler();
	    });
	    __raf.count -= count;
	  }

	  onStartQueue.flush();
	  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
	  onFrameQueue.flush();
	  writeQueue.flush();
	  onFinishQueue.flush();
	}

	function makeQueue() {
	  var next = new _Set__default["default"]();
	  var current = next;
	  return {
	    add: function add(fn) {
	      __raf.count += current == next && !next.has(fn) ? 1 : 0;
	      next.add(fn);
	    },
	    delete: function _delete(fn) {
	      __raf.count -= current == next && next.has(fn) ? 1 : 0;
	      return next.delete(fn);
	    },
	    flush: function flush(arg) {
	      if (current.size) {
	        next = new _Set__default["default"]();
	        __raf.count -= current.size;
	        eachSafely(current, function (fn) {
	          return fn(arg) && next.add(fn);
	        });
	        __raf.count += next.size;
	        current = next;
	      }
	    }
	  };
	}

	function eachSafely(values, each) {
	  values.forEach(function (value) {
	    try {
	      each(value);
	    } catch (e) {
	      raf.catch(e);
	    }
	  });
	}

	var __raf = {
	  count: 0,
	  clear: function clear() {
	    ts = -1;
	    timeouts = [];
	    onStartQueue = makeQueue();
	    updateQueue = makeQueue();
	    onFrameQueue = makeQueue();
	    writeQueue = makeQueue();
	    onFinishQueue = makeQueue();
	    __raf.count = 0;
	  }
	};

	reactSpringRafz_cjs_prod.__raf = __raf;

	reactSpringRafz_cjs_prod.raf = raf;

	(function (exports) {

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });
	  var rafz = reactSpringRafz_cjs_prod;
	  var React = require$$1__default["default"];

	  function _interopNamespace(e) {
	    if (e && e.__esModule) return e;
	    var n = Object.create(null);

	    if (e) {
	      _Object$keys__default["default"](e).forEach(function (k) {
	        if (k !== 'default') {
	          var d = _Object$getOwnPropertyDescriptor__default["default"](e, k);

	          Object.defineProperty(n, k, d.get ? d : {
	            enumerable: true,
	            get: function get() {
	              return e[k];
	            }
	          });
	        }
	      });
	    }

	    n['default'] = e;
	    return _Object$freeze__default["default"](n);
	  }

	  var React__namespace = /*#__PURE__*/_interopNamespace(React);

	  function noop() {}

	  var defineHidden = function defineHidden(obj, key, value) {
	    return Object.defineProperty(obj, key, {
	      value: value,
	      writable: true,
	      configurable: true
	    });
	  };

	  var is = {
	    arr: Array.isArray,
	    obj: function obj(a) {
	      return !!a && a.constructor.name === 'Object';
	    },
	    fun: function fun(a) {
	      return typeof a === 'function';
	    },
	    str: function str(a) {
	      return typeof a === 'string';
	    },
	    num: function num(a) {
	      return typeof a === 'number';
	    },
	    und: function und(a) {
	      return a === undefined;
	    }
	  };

	  function isEqual(a, b) {
	    if (is.arr(a)) {
	      if (!is.arr(b) || a.length !== b.length) return false;

	      for (var i = 0; i < a.length; i++) {
	        if (a[i] !== b[i]) return false;
	      }

	      return true;
	    }

	    return a === b;
	  }

	  var each = function each(obj, fn) {
	    return obj.forEach(fn);
	  };

	  function eachProp(obj, fn, ctx) {
	    if (is.arr(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	        fn.call(ctx, obj[i], "".concat(i));
	      }

	      return;
	    }

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        fn.call(ctx, obj[key], key);
	      }
	    }
	  }

	  var toArray = function toArray(a) {
	    return is.und(a) ? [] : is.arr(a) ? a : [a];
	  };

	  function flush(queue, iterator) {
	    if (queue.size) {
	      var items = _Array$from__default["default"](queue);

	      queue.clear();
	      each(items, iterator);
	    }
	  }

	  var flushCalls = function flushCalls(queue) {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return flush(queue, function (fn) {
	      return fn.apply(void 0, args);
	    });
	  };

	  var createStringInterpolator$1;
	  var to;
	  var colors$1 = null;
	  var skipAnimation = false;
	  var willAdvance = noop;

	  var assign = function assign(globals) {
	    if (globals.to) to = globals.to;
	    if (globals.now) rafz.raf.now = globals.now;
	    if (globals.colors !== undefined) colors$1 = globals.colors;
	    if (globals.skipAnimation != null) skipAnimation = globals.skipAnimation;
	    if (globals.createStringInterpolator) createStringInterpolator$1 = globals.createStringInterpolator;
	    if (globals.requestAnimationFrame) rafz.raf.use(globals.requestAnimationFrame);
	    if (globals.batchedUpdates) rafz.raf.batchedUpdates = globals.batchedUpdates;
	    if (globals.willAdvance) willAdvance = globals.willAdvance;
	    if (globals.frameLoop) rafz.raf.frameLoop = globals.frameLoop;
	  };

	  var globals = /*#__PURE__*/_Object$freeze__default["default"]({
	    __proto__: null,

	    get createStringInterpolator() {
	      return createStringInterpolator$1;
	    },

	    get to() {
	      return to;
	    },

	    get colors() {
	      return colors$1;
	    },

	    get skipAnimation() {
	      return skipAnimation;
	    },

	    get willAdvance() {
	      return willAdvance;
	    },

	    assign: assign
	  });

	  var startQueue = new _Set__default["default"]();
	  var currentFrame = [];
	  var prevFrame = [];
	  var priority = 0;
	  var frameLoop = {
	    get idle() {
	      return !startQueue.size && !currentFrame.length;
	    },

	    start: function start(animation) {
	      if (priority > animation.priority) {
	        startQueue.add(animation);
	        rafz.raf.onStart(flushStartQueue);
	      } else {
	        startSafely(animation);
	        rafz.raf(advance);
	      }
	    },
	    advance: advance,
	    sort: function sort(animation) {
	      if (priority) {
	        rafz.raf.onFrame(function () {
	          return _sortInstanceProperty__default["default"](frameLoop).call(frameLoop, animation);
	        });
	      } else {
	        var prevIndex = currentFrame.indexOf(animation);

	        if (~prevIndex) {
	          _spliceInstanceProperty__default["default"](currentFrame).call(currentFrame, prevIndex, 1);

	          startUnsafely(animation);
	        }
	      }
	    },
	    clear: function clear() {
	      currentFrame = [];
	      startQueue.clear();
	    }
	  };

	  function flushStartQueue() {
	    startQueue.forEach(startSafely);
	    startQueue.clear();
	    rafz.raf(advance);
	  }

	  function startSafely(animation) {
	    if (!_includesInstanceProperty__default["default"](currentFrame).call(currentFrame, animation)) startUnsafely(animation);
	  }

	  function startUnsafely(animation) {
	    _spliceInstanceProperty__default["default"](currentFrame).call(currentFrame, findIndex(currentFrame, function (other) {
	      return other.priority > animation.priority;
	    }), 0, animation);
	  }

	  function advance(dt) {
	    var nextFrame = prevFrame;

	    for (var i = 0; i < currentFrame.length; i++) {
	      var animation = currentFrame[i];
	      priority = animation.priority;

	      if (!animation.idle) {
	        willAdvance(animation);
	        animation.advance(dt);

	        if (!animation.idle) {
	          nextFrame.push(animation);
	        }
	      }
	    }

	    priority = 0;
	    prevFrame = currentFrame;
	    prevFrame.length = 0;
	    currentFrame = nextFrame;
	    return currentFrame.length > 0;
	  }

	  function findIndex(arr, test) {
	    var index = _findIndexInstanceProperty__default["default"](arr).call(arr, test);

	    return index < 0 ? arr.length : index;
	  }

	  var colors = {
	    transparent: 0x00000000,
	    aliceblue: 0xf0f8ffff,
	    antiquewhite: 0xfaebd7ff,
	    aqua: 0x00ffffff,
	    aquamarine: 0x7fffd4ff,
	    azure: 0xf0ffffff,
	    beige: 0xf5f5dcff,
	    bisque: 0xffe4c4ff,
	    black: 0x000000ff,
	    blanchedalmond: 0xffebcdff,
	    blue: 0x0000ffff,
	    blueviolet: 0x8a2be2ff,
	    brown: 0xa52a2aff,
	    burlywood: 0xdeb887ff,
	    burntsienna: 0xea7e5dff,
	    cadetblue: 0x5f9ea0ff,
	    chartreuse: 0x7fff00ff,
	    chocolate: 0xd2691eff,
	    coral: 0xff7f50ff,
	    cornflowerblue: 0x6495edff,
	    cornsilk: 0xfff8dcff,
	    crimson: 0xdc143cff,
	    cyan: 0x00ffffff,
	    darkblue: 0x00008bff,
	    darkcyan: 0x008b8bff,
	    darkgoldenrod: 0xb8860bff,
	    darkgray: 0xa9a9a9ff,
	    darkgreen: 0x006400ff,
	    darkgrey: 0xa9a9a9ff,
	    darkkhaki: 0xbdb76bff,
	    darkmagenta: 0x8b008bff,
	    darkolivegreen: 0x556b2fff,
	    darkorange: 0xff8c00ff,
	    darkorchid: 0x9932ccff,
	    darkred: 0x8b0000ff,
	    darksalmon: 0xe9967aff,
	    darkseagreen: 0x8fbc8fff,
	    darkslateblue: 0x483d8bff,
	    darkslategray: 0x2f4f4fff,
	    darkslategrey: 0x2f4f4fff,
	    darkturquoise: 0x00ced1ff,
	    darkviolet: 0x9400d3ff,
	    deeppink: 0xff1493ff,
	    deepskyblue: 0x00bfffff,
	    dimgray: 0x696969ff,
	    dimgrey: 0x696969ff,
	    dodgerblue: 0x1e90ffff,
	    firebrick: 0xb22222ff,
	    floralwhite: 0xfffaf0ff,
	    forestgreen: 0x228b22ff,
	    fuchsia: 0xff00ffff,
	    gainsboro: 0xdcdcdcff,
	    ghostwhite: 0xf8f8ffff,
	    gold: 0xffd700ff,
	    goldenrod: 0xdaa520ff,
	    gray: 0x808080ff,
	    green: 0x008000ff,
	    greenyellow: 0xadff2fff,
	    grey: 0x808080ff,
	    honeydew: 0xf0fff0ff,
	    hotpink: 0xff69b4ff,
	    indianred: 0xcd5c5cff,
	    indigo: 0x4b0082ff,
	    ivory: 0xfffff0ff,
	    khaki: 0xf0e68cff,
	    lavender: 0xe6e6faff,
	    lavenderblush: 0xfff0f5ff,
	    lawngreen: 0x7cfc00ff,
	    lemonchiffon: 0xfffacdff,
	    lightblue: 0xadd8e6ff,
	    lightcoral: 0xf08080ff,
	    lightcyan: 0xe0ffffff,
	    lightgoldenrodyellow: 0xfafad2ff,
	    lightgray: 0xd3d3d3ff,
	    lightgreen: 0x90ee90ff,
	    lightgrey: 0xd3d3d3ff,
	    lightpink: 0xffb6c1ff,
	    lightsalmon: 0xffa07aff,
	    lightseagreen: 0x20b2aaff,
	    lightskyblue: 0x87cefaff,
	    lightslategray: 0x778899ff,
	    lightslategrey: 0x778899ff,
	    lightsteelblue: 0xb0c4deff,
	    lightyellow: 0xffffe0ff,
	    lime: 0x00ff00ff,
	    limegreen: 0x32cd32ff,
	    linen: 0xfaf0e6ff,
	    magenta: 0xff00ffff,
	    maroon: 0x800000ff,
	    mediumaquamarine: 0x66cdaaff,
	    mediumblue: 0x0000cdff,
	    mediumorchid: 0xba55d3ff,
	    mediumpurple: 0x9370dbff,
	    mediumseagreen: 0x3cb371ff,
	    mediumslateblue: 0x7b68eeff,
	    mediumspringgreen: 0x00fa9aff,
	    mediumturquoise: 0x48d1ccff,
	    mediumvioletred: 0xc71585ff,
	    midnightblue: 0x191970ff,
	    mintcream: 0xf5fffaff,
	    mistyrose: 0xffe4e1ff,
	    moccasin: 0xffe4b5ff,
	    navajowhite: 0xffdeadff,
	    navy: 0x000080ff,
	    oldlace: 0xfdf5e6ff,
	    olive: 0x808000ff,
	    olivedrab: 0x6b8e23ff,
	    orange: 0xffa500ff,
	    orangered: 0xff4500ff,
	    orchid: 0xda70d6ff,
	    palegoldenrod: 0xeee8aaff,
	    palegreen: 0x98fb98ff,
	    paleturquoise: 0xafeeeeff,
	    palevioletred: 0xdb7093ff,
	    papayawhip: 0xffefd5ff,
	    peachpuff: 0xffdab9ff,
	    peru: 0xcd853fff,
	    pink: 0xffc0cbff,
	    plum: 0xdda0ddff,
	    powderblue: 0xb0e0e6ff,
	    purple: 0x800080ff,
	    rebeccapurple: 0x663399ff,
	    red: 0xff0000ff,
	    rosybrown: 0xbc8f8fff,
	    royalblue: 0x4169e1ff,
	    saddlebrown: 0x8b4513ff,
	    salmon: 0xfa8072ff,
	    sandybrown: 0xf4a460ff,
	    seagreen: 0x2e8b57ff,
	    seashell: 0xfff5eeff,
	    sienna: 0xa0522dff,
	    silver: 0xc0c0c0ff,
	    skyblue: 0x87ceebff,
	    slateblue: 0x6a5acdff,
	    slategray: 0x708090ff,
	    slategrey: 0x708090ff,
	    snow: 0xfffafaff,
	    springgreen: 0x00ff7fff,
	    steelblue: 0x4682b4ff,
	    tan: 0xd2b48cff,
	    teal: 0x008080ff,
	    thistle: 0xd8bfd8ff,
	    tomato: 0xff6347ff,
	    turquoise: 0x40e0d0ff,
	    violet: 0xee82eeff,
	    wheat: 0xf5deb3ff,
	    white: 0xffffffff,
	    whitesmoke: 0xf5f5f5ff,
	    yellow: 0xffff00ff,
	    yellowgreen: 0x9acd32ff
	  };
	  var NUMBER = '[-+]?\\d*\\.?\\d+';
	  var PERCENTAGE = NUMBER + '%';

	  function call() {
	    for (var _len2 = arguments.length, parts = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      parts[_key2] = arguments[_key2];
	    }

	    return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
	  }

	  var rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
	  var rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
	  var hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
	  var hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
	  var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
	  var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
	  var hex6 = /^#([0-9a-fA-F]{6})$/;
	  var hex8 = /^#([0-9a-fA-F]{8})$/;

	  function normalizeColor(color) {
	    var match;

	    if (typeof color === 'number') {
	      return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
	    }

	    if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;

	    if (colors$1 && colors$1[color] !== undefined) {
	      return colors$1[color];
	    }

	    if (match = rgb.exec(color)) {
	      return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 0x000000ff) >>> 0;
	    }

	    if (match = rgba.exec(color)) {
	      return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
	    }

	    if (match = hex3.exec(color)) {
	      return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + 'ff', 16) >>> 0;
	    }

	    if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

	    if (match = hex4.exec(color)) {
	      return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
	    }

	    if (match = hsl.exec(color)) {
	      return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 0x000000ff) >>> 0;
	    }

	    if (match = hsla.exec(color)) {
	      return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
	    }

	    return null;
	  }

	  function hue2rgb(p, q, t) {
	    if (t < 0) t += 1;
	    if (t > 1) t -= 1;
	    if (t < 1 / 6) return p + (q - p) * 6 * t;
	    if (t < 1 / 2) return q;
	    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	    return p;
	  }

	  function hslToRgb(h, s, l) {
	    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	    var p = 2 * l - q;
	    var r = hue2rgb(p, q, h + 1 / 3);
	    var g = hue2rgb(p, q, h);
	    var b = hue2rgb(p, q, h - 1 / 3);
	    return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
	  }

	  function parse255(str) {
	    var int = parseInt(str, 10);
	    if (int < 0) return 0;
	    if (int > 255) return 255;
	    return int;
	  }

	  function parse360(str) {
	    var int = parseFloat(str);
	    return (int % 360 + 360) % 360 / 360;
	  }

	  function parse1(str) {
	    var num = parseFloat(str);
	    if (num < 0) return 0;
	    if (num > 1) return 255;
	    return Math.round(num * 255);
	  }

	  function parsePercentage(str) {
	    var int = parseFloat(str);
	    if (int < 0) return 0;
	    if (int > 100) return 1;
	    return int / 100;
	  }

	  function colorToRgba(input) {
	    var _context, _context2, _context3;

	    var int32Color = normalizeColor(input);
	    if (int32Color === null) return input;
	    int32Color = int32Color || 0;
	    var r = (int32Color & 0xff000000) >>> 24;
	    var g = (int32Color & 0x00ff0000) >>> 16;
	    var b = (int32Color & 0x0000ff00) >>> 8;
	    var a = (int32Color & 0x000000ff) / 255;
	    return _concatInstanceProperty__default["default"](_context = _concatInstanceProperty__default["default"](_context2 = _concatInstanceProperty__default["default"](_context3 = "rgba(".concat(r, ", ")).call(_context3, g, ", ")).call(_context2, b, ", ")).call(_context, a, ")");
	  }

	  var createInterpolator = function createInterpolator(range, output, extrapolate) {
	    if (is.fun(range)) {
	      return range;
	    }

	    if (is.arr(range)) {
	      return createInterpolator({
	        range: range,
	        output: output,
	        extrapolate: extrapolate
	      });
	    }

	    if (is.str(range.output[0])) {
	      return createStringInterpolator$1(range);
	    }

	    var config = range;
	    var outputRange = config.output;
	    var inputRange = config.range || [0, 1];
	    var extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
	    var extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

	    var easing = config.easing || function (t) {
	      return t;
	    };

	    return function (input) {
	      var range = findRange(input, inputRange);
	      return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, _mapInstanceProperty__default["default"](config));
	    };
	  };

	  function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
	    var result = map ? map(input) : input;

	    if (result < inputMin) {
	      if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
	    }

	    if (result > inputMax) {
	      if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
	    }

	    if (outputMin === outputMax) return outputMin;
	    if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax;
	    if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin);
	    result = easing(result);
	    if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
	    return result;
	  }

	  function findRange(input, inputRange) {
	    for (var i = 1; i < inputRange.length - 1; ++i) {
	      if (inputRange[i] >= input) break;
	    }

	    return i - 1;
	  }

	  function _extends() {
	    _extends = _Object$assign__default["default"] || function (target) {
	      for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }

	      return target;
	    };

	    return _extends.apply(this, arguments);
	  }

	  var $get = _Symbol$for__default["default"]('FluidValue.get');

	  var $observers = _Symbol$for__default["default"]('FluidValue.observers');

	  var hasFluidValue = function hasFluidValue(arg) {
	    return Boolean(arg && arg[$get]);
	  };

	  var getFluidValue = function getFluidValue(arg) {
	    return arg && arg[$get] ? arg[$get]() : arg;
	  };

	  var getFluidObservers = function getFluidObservers(target) {
	    return target[$observers] || null;
	  };

	  function callFluidObserver(observer, event) {
	    if (observer.eventObserved) {
	      observer.eventObserved(event);
	    } else {
	      observer(event);
	    }
	  }

	  function callFluidObservers(target, event) {
	    var observers = target[$observers];

	    if (observers) {
	      observers.forEach(function (observer) {
	        callFluidObserver(observer, event);
	      });
	    }
	  }

	  var FluidValue = /*#__PURE__*/_createClass__default["default"](function FluidValue(get) {
	    _classCallCheck__default["default"](this, FluidValue);

	    this[$get] = void 0;
	    this[$observers] = void 0;

	    if (!get && !(get = this.get)) {
	      throw Error('Unknown getter');
	    }

	    setFluidGetter(this, get);
	  });

	  var setFluidGetter = function setFluidGetter(target, get) {
	    return setHidden(target, $get, get);
	  };

	  function addFluidObserver(target, observer) {
	    if (target[$get]) {
	      var observers = target[$observers];

	      if (!observers) {
	        setHidden(target, $observers, observers = new _Set__default["default"]());
	      }

	      if (!observers.has(observer)) {
	        observers.add(observer);

	        if (target.observerAdded) {
	          target.observerAdded(observers.size, observer);
	        }
	      }
	    }

	    return observer;
	  }

	  function removeFluidObserver(target, observer) {
	    var observers = target[$observers];

	    if (observers && observers.has(observer)) {
	      var count = observers.size - 1;

	      if (count) {
	        observers.delete(observer);
	      } else {
	        target[$observers] = null;
	      }

	      if (target.observerRemoved) {
	        target.observerRemoved(count, observer);
	      }
	    }
	  }

	  var setHidden = function setHidden(target, key, value) {
	    return Object.defineProperty(target, key, {
	      value: value,
	      writable: true,
	      configurable: true
	    });
	  };

	  var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	  var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
	  var unitRegex = new RegExp("(".concat(numberRegex.source, ")(%|[a-z]+)"), 'i');
	  var namedColorRegex;
	  var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;

	  var rgbaRound = function rgbaRound(_, p1, p2, p3, p4) {
	    var _context4, _context5, _context6;

	    return _concatInstanceProperty__default["default"](_context4 = _concatInstanceProperty__default["default"](_context5 = _concatInstanceProperty__default["default"](_context6 = "rgba(".concat(Math.round(p1), ", ")).call(_context6, Math.round(p2), ", ")).call(_context5, Math.round(p3), ", ")).call(_context4, p4, ")");
	  };

	  var createStringInterpolator = function createStringInterpolator(config) {
	    var _context7, _context9;

	    if (!namedColorRegex) namedColorRegex = colors$1 ? new RegExp("(".concat(_Object$keys__default["default"](colors$1).join('|'), ")(?!\\w)"), 'g') : /^\b$/;

	    var output = _mapInstanceProperty__default["default"](_context7 = config.output).call(_context7, function (value) {
	      return getFluidValue(value).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
	    });

	    var keyframes = _mapInstanceProperty__default["default"](output).call(output, function (value) {
	      var _context8;

	      return _mapInstanceProperty__default["default"](_context8 = value.match(numberRegex)).call(_context8, Number);
	    });

	    var outputRanges = _mapInstanceProperty__default["default"](_context9 = keyframes[0]).call(_context9, function (_, i) {
	      return _mapInstanceProperty__default["default"](keyframes).call(keyframes, function (values) {
	        if (!(i in values)) {
	          throw Error('The arity of each "output" value must be equal');
	        }

	        return values[i];
	      });
	    });

	    var interpolators = _mapInstanceProperty__default["default"](outputRanges).call(outputRanges, function (output) {
	      return createInterpolator(_extends({}, config, {
	        output: output
	      }));
	    });

	    return function (input) {
	      var _output$find;

	      var missingUnit = !unitRegex.test(output[0]) && ((_output$find = _findInstanceProperty__default["default"](output).call(output, function (value) {
	        return unitRegex.test(value);
	      })) == null ? void 0 : _output$find.replace(numberRegex, ''));
	      var i = 0;
	      return output[0].replace(numberRegex, function () {
	        var _context10;

	        return _concatInstanceProperty__default["default"](_context10 = "".concat(interpolators[i++](input))).call(_context10, missingUnit || '');
	      }).replace(rgbaRegex, rgbaRound);
	    };
	  };

	  var prefix = 'react-spring: ';

	  var once = function once(fn) {
	    var func = fn;
	    var called = false;

	    if (typeof func != 'function') {
	      throw new TypeError("".concat(prefix, "once requires a function parameter"));
	    }

	    return function () {
	      if (!called) {
	        func.apply(void 0, arguments);
	        called = true;
	      }
	    };
	  };

	  var warnInterpolate = once(console.warn);

	  function deprecateInterpolate() {
	    warnInterpolate("".concat(prefix, "The \"interpolate\" function is deprecated in v9 (use \"to\" instead)"));
	  }

	  var warnDirectCall = once(console.warn);

	  function deprecateDirectCall() {
	    warnDirectCall("".concat(prefix, "Directly calling start instead of using the api object is deprecated in v9 (use \".start\" instead), this will be removed in later 0.X.0 versions"));
	  }

	  function isAnimatedString(value) {
	    return is.str(value) && (value[0] == '#' || /\d/.test(value) || value in (colors$1 || {}));
	  }

	  var useOnce = function useOnce(effect) {
	    return React.useEffect(effect, emptyDeps);
	  };

	  var emptyDeps = [];

	  function useForceUpdate() {
	    var update = React.useState()[1];
	    var mounted = React.useState(makeMountedRef)[0];
	    useOnce(mounted.unmount);
	    return function () {
	      if (mounted.current) {
	        update({});
	      }
	    };
	  }

	  function makeMountedRef() {
	    var mounted = {
	      current: true,
	      unmount: function unmount() {
	        return function () {
	          mounted.current = false;
	        };
	      }
	    };
	    return mounted;
	  }

	  function useMemoOne(getResult, inputs) {
	    var _React$useState = React.useState(function () {
	      return {
	        inputs: inputs,
	        result: getResult()
	      };
	    }),
	        _React$useState2 = _slicedToArray__default["default"](_React$useState, 1),
	        initial = _React$useState2[0];

	    var committed = React.useRef();
	    var prevCache = committed.current;
	    var cache = prevCache;

	    if (cache) {
	      var useCache = Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs));

	      if (!useCache) {
	        cache = {
	          inputs: inputs,
	          result: getResult()
	        };
	      }
	    } else {
	      cache = initial;
	    }

	    React.useEffect(function () {
	      committed.current = cache;

	      if (prevCache == initial) {
	        initial.inputs = initial.result = undefined;
	      }
	    }, [cache]);
	    return cache.result;
	  }

	  function areInputsEqual(next, prev) {
	    if (next.length !== prev.length) {
	      return false;
	    }

	    for (var i = 0; i < next.length; i++) {
	      if (next[i] !== prev[i]) {
	        return false;
	      }
	    }

	    return true;
	  }

	  function usePrev(value) {
	    var prevRef = React.useRef();
	    React.useEffect(function () {
	      prevRef.current = value;
	    });
	    return prevRef.current;
	  }

	  var useLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? React__namespace.useLayoutEffect : React__namespace.useEffect;
	  Object.defineProperty(exports, 'raf', {
	    enumerable: true,
	    get: function get() {
	      return rafz.raf;
	    }
	  });
	  exports.FluidValue = FluidValue;
	  exports.Globals = globals;
	  exports.addFluidObserver = addFluidObserver;
	  exports.callFluidObserver = callFluidObserver;
	  exports.callFluidObservers = callFluidObservers;
	  exports.colorToRgba = colorToRgba;
	  exports.colors = colors;
	  exports.createInterpolator = createInterpolator;
	  exports.createStringInterpolator = createStringInterpolator;
	  exports.defineHidden = defineHidden;
	  exports.deprecateDirectCall = deprecateDirectCall;
	  exports.deprecateInterpolate = deprecateInterpolate;
	  exports.each = each;
	  exports.eachProp = eachProp;
	  exports.flush = flush;
	  exports.flushCalls = flushCalls;
	  exports.frameLoop = frameLoop;
	  exports.getFluidObservers = getFluidObservers;
	  exports.getFluidValue = getFluidValue;
	  exports.hasFluidValue = hasFluidValue;
	  exports.hex3 = hex3;
	  exports.hex4 = hex4;
	  exports.hex6 = hex6;
	  exports.hex8 = hex8;
	  exports.hsl = hsl;
	  exports.hsla = hsla;
	  exports.is = is;
	  exports.isAnimatedString = isAnimatedString;
	  exports.isEqual = isEqual;
	  exports.noop = noop;
	  exports.removeFluidObserver = removeFluidObserver;
	  exports.rgb = rgb;
	  exports.rgba = rgba;
	  exports.setFluidGetter = setFluidGetter;
	  exports.toArray = toArray;
	  exports.useForceUpdate = useForceUpdate;
	  exports.useLayoutEffect = useLayoutEffect;
	  exports.useMemoOne = useMemoOne;
	  exports.useOnce = useOnce;
	  exports.usePrev = usePrev;
	})(reactSpringShared_cjs_prod);

	var reactSpringAnimated_cjs_prod = {};

	function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = _Reflect$construct__default["default"](Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

	function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !_Reflect$construct__default["default"]) return false; if (_Reflect$construct__default["default"].sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct__default["default"](Boolean, [], function () {})); return true; } catch (e) { return false; } }

	Object.defineProperty(reactSpringAnimated_cjs_prod, '__esModule', {
	  value: true
	});
	var shared = reactSpringShared_cjs_prod;
	var React = require$$1__default["default"];

	function _interopNamespace$1(e) {
	  if (e && e.__esModule) return e;
	  var n = Object.create(null);

	  if (e) {
	    _Object$keys__default["default"](e).forEach(function (k) {
	      if (k !== 'default') {
	        var d = _Object$getOwnPropertyDescriptor__default["default"](e, k);

	        Object.defineProperty(n, k, d.get ? d : {
	          enumerable: true,
	          get: function get() {
	            return e[k];
	          }
	        });
	      }
	    });
	  }

	  n['default'] = e;
	  return _Object$freeze__default["default"](n);
	}

	var React__namespace = /*#__PURE__*/_interopNamespace$1(React);

	var $node = _Symbol$for__default["default"]('Animated:node');

	var isAnimated = function isAnimated(value) {
	  return !!value && value[$node] === value;
	};

	var getAnimated = function getAnimated(owner) {
	  return owner && owner[$node];
	};

	var setAnimated = function setAnimated(owner, node) {
	  return shared.defineHidden(owner, $node, node);
	};

	var getPayload = function getPayload(owner) {
	  return owner && owner[$node] && owner[$node].getPayload();
	};

	var Animated = /*#__PURE__*/function () {
	  function Animated() {
	    _classCallCheck__default["default"](this, Animated);

	    this.payload = void 0;
	    setAnimated(this, this);
	  }

	  _createClass__default["default"](Animated, [{
	    key: "getPayload",
	    value: function getPayload() {
	      return this.payload || [];
	    }
	  }]);

	  return Animated;
	}();

	var AnimatedValue = /*#__PURE__*/function (_Animated) {
	  _inherits__default["default"](AnimatedValue, _Animated);

	  var _super = _createSuper$2(AnimatedValue);

	  function AnimatedValue(_value) {
	    var _this;

	    _classCallCheck__default["default"](this, AnimatedValue);

	    _this = _super.call(this);
	    _this.done = true;
	    _this.elapsedTime = void 0;
	    _this.lastPosition = void 0;
	    _this.lastVelocity = void 0;
	    _this.v0 = void 0;
	    _this.durationProgress = 0;
	    _this._value = _value;

	    if (shared.is.num(_this._value)) {
	      _this.lastPosition = _this._value;
	    }

	    return _this;
	  }

	  _createClass__default["default"](AnimatedValue, [{
	    key: "getPayload",
	    value: function getPayload() {
	      return [this];
	    }
	  }, {
	    key: "getValue",
	    value: function getValue() {
	      return this._value;
	    }
	  }, {
	    key: "setValue",
	    value: function setValue(value, step) {
	      if (shared.is.num(value)) {
	        this.lastPosition = value;

	        if (step) {
	          value = Math.round(value / step) * step;

	          if (this.done) {
	            this.lastPosition = value;
	          }
	        }
	      }

	      if (this._value === value) {
	        return false;
	      }

	      this._value = value;
	      return true;
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      var done = this.done;
	      this.done = false;

	      if (shared.is.num(this._value)) {
	        this.elapsedTime = 0;
	        this.durationProgress = 0;
	        this.lastPosition = this._value;
	        if (done) this.lastVelocity = null;
	        this.v0 = null;
	      }
	    }
	  }], [{
	    key: "create",
	    value: function create(value) {
	      return new AnimatedValue(value);
	    }
	  }]);

	  return AnimatedValue;
	}(Animated);

	var AnimatedString = /*#__PURE__*/function (_AnimatedValue) {
	  _inherits__default["default"](AnimatedString, _AnimatedValue);

	  var _super2 = _createSuper$2(AnimatedString);

	  function AnimatedString(value) {
	    var _this2;

	    _classCallCheck__default["default"](this, AnimatedString);

	    _this2 = _super2.call(this, 0);
	    _this2._string = null;
	    _this2._toString = void 0;
	    _this2._toString = shared.createInterpolator({
	      output: [value, value]
	    });
	    return _this2;
	  }

	  _createClass__default["default"](AnimatedString, [{
	    key: "getValue",
	    value: function getValue() {
	      var value = this._string;
	      return value == null ? this._string = this._toString(this._value) : value;
	    }
	  }, {
	    key: "setValue",
	    value: function setValue(value) {
	      if (shared.is.str(value)) {
	        if (value == this._string) {
	          return false;
	        }

	        this._string = value;
	        this._value = 1;
	      } else if (_get__default["default"](_getPrototypeOf__default["default"](AnimatedString.prototype), "setValue", this).call(this, value)) {
	        this._string = null;
	      } else {
	        return false;
	      }

	      return true;
	    }
	  }, {
	    key: "reset",
	    value: function reset(goal) {
	      if (goal) {
	        this._toString = shared.createInterpolator({
	          output: [this.getValue(), goal]
	        });
	      }

	      this._value = 0;

	      _get__default["default"](_getPrototypeOf__default["default"](AnimatedString.prototype), "reset", this).call(this);
	    }
	  }], [{
	    key: "create",
	    value: function create(value) {
	      return new AnimatedString(value);
	    }
	  }]);

	  return AnimatedString;
	}(AnimatedValue);

	var TreeContext = {
	  dependencies: null
	};

	var AnimatedObject = /*#__PURE__*/function (_Animated2) {
	  _inherits__default["default"](AnimatedObject, _Animated2);

	  var _super3 = _createSuper$2(AnimatedObject);

	  function AnimatedObject(source) {
	    var _this3;

	    _classCallCheck__default["default"](this, AnimatedObject);

	    _this3 = _super3.call(this);
	    _this3.source = source;

	    _this3.setValue(source);

	    return _this3;
	  }

	  _createClass__default["default"](AnimatedObject, [{
	    key: "getValue",
	    value: function getValue(animated) {
	      var values = {};
	      shared.eachProp(this.source, function (source, key) {
	        if (isAnimated(source)) {
	          values[key] = source.getValue(animated);
	        } else if (shared.hasFluidValue(source)) {
	          values[key] = shared.getFluidValue(source);
	        } else if (!animated) {
	          values[key] = source;
	        }
	      });
	      return values;
	    }
	  }, {
	    key: "setValue",
	    value: function setValue(source) {
	      this.source = source;
	      this.payload = this._makePayload(source);
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      if (this.payload) {
	        shared.each(this.payload, function (node) {
	          return node.reset();
	        });
	      }
	    }
	  }, {
	    key: "_makePayload",
	    value: function _makePayload(source) {
	      if (source) {
	        var payload = new _Set__default["default"]();
	        shared.eachProp(source, this._addToPayload, payload);
	        return _Array$from__default["default"](payload);
	      }
	    }
	  }, {
	    key: "_addToPayload",
	    value: function _addToPayload(source) {
	      var _this4 = this;

	      if (TreeContext.dependencies && shared.hasFluidValue(source)) {
	        TreeContext.dependencies.add(source);
	      }

	      var payload = getPayload(source);

	      if (payload) {
	        shared.each(payload, function (node) {
	          return _this4.add(node);
	        });
	      }
	    }
	  }]);

	  return AnimatedObject;
	}(Animated);

	var AnimatedArray = /*#__PURE__*/function (_AnimatedObject) {
	  _inherits__default["default"](AnimatedArray, _AnimatedObject);

	  var _super4 = _createSuper$2(AnimatedArray);

	  function AnimatedArray(source) {
	    _classCallCheck__default["default"](this, AnimatedArray);

	    return _super4.call(this, source);
	  }

	  _createClass__default["default"](AnimatedArray, [{
	    key: "getValue",
	    value: function getValue() {
	      var _context;

	      return _mapInstanceProperty__default["default"](_context = this.source).call(_context, function (node) {
	        return node.getValue();
	      });
	    }
	  }, {
	    key: "setValue",
	    value: function setValue(source) {
	      var payload = this.getPayload();

	      if (source.length == payload.length) {
	        return _mapInstanceProperty__default["default"](payload).call(payload, function (node, i) {
	          return node.setValue(source[i]);
	        }).some(Boolean);
	      }

	      _get__default["default"](_getPrototypeOf__default["default"](AnimatedArray.prototype), "setValue", this).call(this, _mapInstanceProperty__default["default"](source).call(source, makeAnimated));

	      return true;
	    }
	  }], [{
	    key: "create",
	    value: function create(source) {
	      return new AnimatedArray(source);
	    }
	  }]);

	  return AnimatedArray;
	}(AnimatedObject);

	function makeAnimated(value) {
	  var nodeType = shared.isAnimatedString(value) ? AnimatedString : AnimatedValue;
	  return nodeType.create(value);
	}

	function getAnimatedType(value) {
	  var parentNode = getAnimated(value);
	  return parentNode ? parentNode.constructor : shared.is.arr(value) ? AnimatedArray : shared.isAnimatedString(value) ? AnimatedString : AnimatedValue;
	}

	function _extends() {
	  _extends = _Object$assign__default["default"] || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	var withAnimated = function withAnimated(Component, host) {
	  var hasInstance = !shared.is.fun(Component) || Component.prototype && Component.prototype.isReactComponent;
	  return React.forwardRef(function (givenProps, givenRef) {
	    var instanceRef = React.useRef(null);
	    var ref = hasInstance && React.useCallback(function (value) {
	      instanceRef.current = updateRef(givenRef, value);
	    }, [givenRef]);

	    var _getAnimatedState = getAnimatedState(givenProps, host),
	        _getAnimatedState2 = _slicedToArray__default["default"](_getAnimatedState, 2),
	        props = _getAnimatedState2[0],
	        deps = _getAnimatedState2[1];

	    var forceUpdate = shared.useForceUpdate();

	    var callback = function callback() {
	      var instance = instanceRef.current;

	      if (hasInstance && !instance) {
	        return;
	      }

	      var didUpdate = instance ? host.applyAnimatedValues(instance, props.getValue(true)) : false;

	      if (didUpdate === false) {
	        forceUpdate();
	      }
	    };

	    var observer = new PropsObserver(callback, deps);
	    var observerRef = React.useRef();
	    shared.useLayoutEffect(function () {
	      var lastObserver = observerRef.current;
	      observerRef.current = observer;
	      shared.each(deps, function (dep) {
	        return shared.addFluidObserver(dep, observer);
	      });

	      if (lastObserver) {
	        shared.each(lastObserver.deps, function (dep) {
	          return shared.removeFluidObserver(dep, lastObserver);
	        });
	        shared.raf.cancel(lastObserver.update);
	      }
	    });
	    React.useEffect(callback, []);
	    shared.useOnce(function () {
	      return function () {
	        var observer = observerRef.current;
	        shared.each(observer.deps, function (dep) {
	          return shared.removeFluidObserver(dep, observer);
	        });
	      };
	    });
	    var usedProps = host.getComponentProps(props.getValue());
	    return React__namespace.createElement(Component, _extends({}, usedProps, {
	      ref: ref
	    }));
	  });
	};

	var PropsObserver = /*#__PURE__*/function () {
	  function PropsObserver(update, deps) {
	    _classCallCheck__default["default"](this, PropsObserver);

	    this.update = update;
	    this.deps = deps;
	  }

	  _createClass__default["default"](PropsObserver, [{
	    key: "eventObserved",
	    value: function eventObserved(event) {
	      if (event.type == 'change') {
	        shared.raf.write(this.update);
	      }
	    }
	  }]);

	  return PropsObserver;
	}();

	function getAnimatedState(props, host) {
	  var dependencies = new _Set__default["default"]();
	  TreeContext.dependencies = dependencies;
	  if (props.style) props = _extends({}, props, {
	    style: host.createAnimatedStyle(props.style)
	  });
	  props = new AnimatedObject(props);
	  TreeContext.dependencies = null;
	  return [props, dependencies];
	}

	function updateRef(ref, value) {
	  if (ref) {
	    if (shared.is.fun(ref)) ref(value);else ref.current = value;
	  }

	  return value;
	}

	var cacheKey = _Symbol$for__default["default"]('AnimatedComponent');

	var createHost = function createHost(components) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$applyAnimatedVal = _ref.applyAnimatedValues,
	      _applyAnimatedValues = _ref$applyAnimatedVal === void 0 ? function () {
	    return false;
	  } : _ref$applyAnimatedVal,
	      _ref$createAnimatedSt = _ref.createAnimatedStyle,
	      _createAnimatedStyle = _ref$createAnimatedSt === void 0 ? function (style) {
	    return new AnimatedObject(style);
	  } : _ref$createAnimatedSt,
	      _ref$getComponentProp = _ref.getComponentProps,
	      _getComponentProps = _ref$getComponentProp === void 0 ? function (props) {
	    return props;
	  } : _ref$getComponentProp;

	  var hostConfig = {
	    applyAnimatedValues: _applyAnimatedValues,
	    createAnimatedStyle: _createAnimatedStyle,
	    getComponentProps: _getComponentProps
	  };

	  var animated = function animated(Component) {
	    var displayName = getDisplayName(Component) || 'Anonymous';

	    if (shared.is.str(Component)) {
	      Component = animated[Component] || (animated[Component] = withAnimated(Component, hostConfig));
	    } else {
	      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
	    }

	    Component.displayName = "Animated(".concat(displayName, ")");
	    return Component;
	  };

	  shared.eachProp(components, function (Component, key) {
	    if (shared.is.arr(components)) {
	      key = getDisplayName(Component);
	    }

	    animated[key] = animated(Component);
	  });
	  return {
	    animated: animated
	  };
	};

	var getDisplayName = function getDisplayName(arg) {
	  return shared.is.str(arg) ? arg : arg && shared.is.str(arg.displayName) ? arg.displayName : shared.is.fun(arg) && arg.name || null;
	};

	reactSpringAnimated_cjs_prod.Animated = Animated;
	reactSpringAnimated_cjs_prod.AnimatedArray = AnimatedArray;
	reactSpringAnimated_cjs_prod.AnimatedObject = AnimatedObject;
	reactSpringAnimated_cjs_prod.AnimatedString = AnimatedString;
	reactSpringAnimated_cjs_prod.AnimatedValue = AnimatedValue;
	reactSpringAnimated_cjs_prod.createHost = createHost;
	reactSpringAnimated_cjs_prod.getAnimated = getAnimated;
	reactSpringAnimated_cjs_prod.getAnimatedType = getAnimatedType;
	reactSpringAnimated_cjs_prod.getPayload = getPayload;
	reactSpringAnimated_cjs_prod.isAnimated = isAnimated;
	reactSpringAnimated_cjs_prod.setAnimated = setAnimated;

	var animated = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$3 = /*@__PURE__*/getAugmentedNamespace(animated);

	var interpolation = /*#__PURE__*/Object.freeze({
		__proto__: null
	});

	var require$$4 = /*@__PURE__*/getAugmentedNamespace(interpolation);

	function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = _Reflect$construct__default["default"](Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

	function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !_Reflect$construct__default["default"]) return false; if (_Reflect$construct__default["default"].sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct__default["default"](Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof _Symbol__default["default"] !== "undefined" && _getIteratorMethod__default["default"](o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray(o, minLen) { var _context18; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _sliceInstanceProperty__default["default"](_context18 = Object.prototype.toString.call(o)).call(_context18, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from__default["default"](o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	(function (exports) {

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });
	  var shared = reactSpringShared_cjs_prod;
	  var React = require$$1__default["default"];
	  var animated$1 = reactSpringAnimated_cjs_prod;
	  var animated = require$$3;
	  var interpolation = require$$4;

	  function _interopNamespace(e) {
	    if (e && e.__esModule) return e;
	    var n = Object.create(null);

	    if (e) {
	      _Object$keys__default["default"](e).forEach(function (k) {
	        if (k !== 'default') {
	          var d = _Object$getOwnPropertyDescriptor__default["default"](e, k);

	          Object.defineProperty(n, k, d.get ? d : {
	            enumerable: true,
	            get: function get() {
	              return e[k];
	            }
	          });
	        }
	      });
	    }

	    n['default'] = e;
	    return _Object$freeze__default["default"](n);
	  }

	  var React__namespace = /*#__PURE__*/_interopNamespace(React);

	  function _extends() {
	    _extends = _Object$assign__default["default"] || function (target) {
	      for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }

	      return target;
	    };

	    return _extends.apply(this, arguments);
	  }

	  function callProp(value) {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return shared.is.fun(value) ? value.apply(void 0, args) : value;
	  }

	  var matchProp = function matchProp(value, key) {
	    var _context;

	    return value === true || !!(key && value && (shared.is.fun(value) ? value(key) : _includesInstanceProperty__default["default"](_context = shared.toArray(value)).call(_context, key)));
	  };

	  var resolveProp = function resolveProp(prop, key) {
	    return shared.is.obj(prop) ? key && prop[key] : prop;
	  };

	  var getDefaultProp = function getDefaultProp(props, key) {
	    return props.default === true ? props[key] : props.default ? props.default[key] : undefined;
	  };

	  var noopTransform = function noopTransform(value) {
	    return value;
	  };

	  var getDefaultProps = function getDefaultProps(props) {
	    var transform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noopTransform;
	    var keys = DEFAULT_PROPS;

	    if (props.default && props.default !== true) {
	      props = props.default;
	      keys = _Object$keys__default["default"](props);
	    }

	    var defaults = {};

	    var _iterator = _createForOfIteratorHelper(keys),
	        _step;

	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var key = _step.value;
	        var value = transform(props[key], key);

	        if (!shared.is.und(value)) {
	          defaults[key] = value;
	        }
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }

	    return defaults;
	  };

	  var DEFAULT_PROPS = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'];
	  var RESERVED_PROPS = {
	    config: 1,
	    from: 1,
	    to: 1,
	    ref: 1,
	    loop: 1,
	    reset: 1,
	    pause: 1,
	    cancel: 1,
	    reverse: 1,
	    immediate: 1,
	    default: 1,
	    delay: 1,
	    onProps: 1,
	    onStart: 1,
	    onChange: 1,
	    onPause: 1,
	    onResume: 1,
	    onRest: 1,
	    onResolve: 1,
	    items: 1,
	    trail: 1,
	    sort: 1,
	    expires: 1,
	    initial: 1,
	    enter: 1,
	    update: 1,
	    leave: 1,
	    children: 1,
	    onDestroyed: 1,
	    keys: 1,
	    callId: 1,
	    parentId: 1
	  };

	  function getForwardProps(props) {
	    var forward = {};
	    var count = 0;
	    shared.eachProp(props, function (value, prop) {
	      if (!RESERVED_PROPS[prop]) {
	        forward[prop] = value;
	        count++;
	      }
	    });

	    if (count) {
	      return forward;
	    }
	  }

	  function inferTo(props) {
	    var to = getForwardProps(props);

	    if (to) {
	      var out = {
	        to: to
	      };
	      shared.eachProp(props, function (val, key) {
	        return key in to || (out[key] = val);
	      });
	      return out;
	    }

	    return _extends({}, props);
	  }

	  function computeGoal(value) {
	    value = shared.getFluidValue(value);
	    return shared.is.arr(value) ? _mapInstanceProperty__default["default"](value).call(value, computeGoal) : shared.isAnimatedString(value) ? shared.Globals.createStringInterpolator({
	      range: [0, 1],
	      output: [value, value]
	    })(1) : value;
	  }

	  function hasProps(props) {
	    for (var _ in props) {
	      return true;
	    }

	    return false;
	  }

	  function isAsyncTo(to) {
	    return shared.is.fun(to) || shared.is.arr(to) && shared.is.obj(to[0]);
	  }

	  function detachRefs(ctrl, ref) {
	    var _ctrl$ref;

	    (_ctrl$ref = ctrl.ref) == null ? void 0 : _ctrl$ref.delete(ctrl);
	    ref == null ? void 0 : ref.delete(ctrl);
	  }

	  function replaceRef(ctrl, ref) {
	    if (ref && ctrl.ref !== ref) {
	      var _ctrl$ref2;

	      (_ctrl$ref2 = ctrl.ref) == null ? void 0 : _ctrl$ref2.delete(ctrl);
	      ref.add(ctrl);
	      ctrl.ref = ref;
	    }
	  }

	  function useChain(refs, timeSteps) {
	    var timeFrame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
	    shared.useLayoutEffect(function () {
	      if (timeSteps) {
	        var prevDelay = 0;
	        shared.each(refs, function (ref, i) {
	          var controllers = ref.current;

	          if (controllers.length) {
	            var delay = timeFrame * timeSteps[i];
	            if (isNaN(delay)) delay = prevDelay;else prevDelay = delay;
	            shared.each(controllers, function (ctrl) {
	              shared.each(ctrl.queue, function (props) {
	                var memoizedDelayProp = props.delay;

	                props.delay = function (key) {
	                  return delay + callProp(memoizedDelayProp || 0, key);
	                };
	              });
	              ctrl.start();
	            });
	          }
	        });
	      } else {
	        var p = _Promise__default["default"].resolve();

	        shared.each(refs, function (ref) {
	          var controllers = ref.current;

	          if (controllers.length) {
	            var queues = _mapInstanceProperty__default["default"](controllers).call(controllers, function (ctrl) {
	              var q = ctrl.queue;
	              ctrl.queue = [];
	              return q;
	            });

	            p = p.then(function () {
	              shared.each(controllers, function (ctrl, i) {
	                return shared.each(queues[i] || [], function (update) {
	                  return ctrl.queue.push(update);
	                });
	              });
	              return _Promise__default["default"].all(ref.start());
	            });
	          }
	        });
	      }
	    });
	  }

	  var config = {
	    default: {
	      tension: 170,
	      friction: 26
	    },
	    gentle: {
	      tension: 120,
	      friction: 14
	    },
	    wobbly: {
	      tension: 180,
	      friction: 12
	    },
	    stiff: {
	      tension: 210,
	      friction: 20
	    },
	    slow: {
	      tension: 280,
	      friction: 60
	    },
	    molasses: {
	      tension: 280,
	      friction: 120
	    }
	  };

	  var linear = function linear(t) {
	    return t;
	  };

	  var defaults = _extends({}, config.default, {
	    mass: 1,
	    damping: 1,
	    easing: linear,
	    clamp: false
	  });

	  var AnimationConfig = /*#__PURE__*/_createClass__default["default"](function AnimationConfig() {
	    _classCallCheck__default["default"](this, AnimationConfig);

	    this.tension = void 0;
	    this.friction = void 0;
	    this.frequency = void 0;
	    this.damping = void 0;
	    this.mass = void 0;
	    this.velocity = 0;
	    this.restVelocity = void 0;
	    this.precision = void 0;
	    this.progress = void 0;
	    this.duration = void 0;
	    this.easing = void 0;
	    this.clamp = void 0;
	    this.bounce = void 0;
	    this.decay = void 0;
	    this.round = void 0;

	    _Object$assign__default["default"](this, defaults);
	  });

	  function mergeConfig(config, newConfig, defaultConfig) {
	    if (defaultConfig) {
	      defaultConfig = _extends({}, defaultConfig);
	      sanitizeConfig(defaultConfig, newConfig);
	      newConfig = _extends({}, defaultConfig, newConfig);
	    }

	    sanitizeConfig(config, newConfig);

	    _Object$assign__default["default"](config, newConfig);

	    for (var key in defaults) {
	      if (config[key] == null) {
	        config[key] = defaults[key];
	      }
	    }

	    var mass = config.mass,
	        frequency = config.frequency,
	        damping = config.damping;

	    if (!shared.is.und(frequency)) {
	      if (frequency < 0.01) frequency = 0.01;
	      if (damping < 0) damping = 0;
	      config.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
	      config.friction = 4 * Math.PI * damping * mass / frequency;
	    }

	    return config;
	  }

	  function sanitizeConfig(config, props) {
	    if (!shared.is.und(props.decay)) {
	      config.duration = undefined;
	    } else {
	      var isTensionConfig = !shared.is.und(props.tension) || !shared.is.und(props.friction);

	      if (isTensionConfig || !shared.is.und(props.frequency) || !shared.is.und(props.damping) || !shared.is.und(props.mass)) {
	        config.duration = undefined;
	        config.decay = undefined;
	      }

	      if (isTensionConfig) {
	        config.frequency = undefined;
	      }
	    }
	  }

	  var emptyArray = [];

	  var Animation = /*#__PURE__*/_createClass__default["default"](function Animation() {
	    _classCallCheck__default["default"](this, Animation);

	    this.changed = false;
	    this.values = emptyArray;
	    this.toValues = null;
	    this.fromValues = emptyArray;
	    this.to = void 0;
	    this.from = void 0;
	    this.config = new AnimationConfig();
	    this.immediate = false;
	  });

	  function scheduleProps(callId, _ref2) {
	    var key = _ref2.key,
	        props = _ref2.props,
	        defaultProps = _ref2.defaultProps,
	        state = _ref2.state,
	        actions = _ref2.actions;
	    return new _Promise__default["default"](function (resolve, reject) {
	      var _props$cancel;

	      var delay;
	      var timeout;
	      var cancel = matchProp((_props$cancel = props.cancel) != null ? _props$cancel : defaultProps == null ? void 0 : defaultProps.cancel, key);

	      if (cancel) {
	        onStart();
	      } else {
	        if (!shared.is.und(props.pause)) {
	          state.paused = matchProp(props.pause, key);
	        }

	        var pause = defaultProps == null ? void 0 : defaultProps.pause;

	        if (pause !== true) {
	          pause = state.paused || matchProp(pause, key);
	        }

	        delay = callProp(props.delay || 0, key);

	        if (pause) {
	          state.resumeQueue.add(onResume);
	          actions.pause();
	        } else {
	          actions.resume();
	          onResume();
	        }
	      }

	      function onPause() {
	        state.resumeQueue.add(onResume);
	        state.timeouts.delete(timeout);
	        timeout.cancel();
	        delay = timeout.time - shared.raf.now();
	      }

	      function onResume() {
	        if (delay > 0 && !shared.Globals.skipAnimation) {
	          timeout = shared.raf.setTimeout(onStart, delay);
	          state.pauseQueue.add(onPause);
	          state.timeouts.add(timeout);
	        } else {
	          onStart();
	        }
	      }

	      function onStart() {
	        state.pauseQueue.delete(onPause);
	        state.timeouts.delete(timeout);

	        if (callId <= (state.cancelId || 0)) {
	          cancel = true;
	        }

	        try {
	          actions.start(_extends({}, props, {
	            callId: callId,
	            cancel: cancel
	          }), resolve);
	        } catch (err) {
	          reject(err);
	        }
	      }
	    });
	  }

	  var getCombinedResult = function getCombinedResult(target, results) {
	    return results.length == 1 ? results[0] : results.some(function (result) {
	      return result.cancelled;
	    }) ? getCancelledResult(target.get()) : results.every(function (result) {
	      return result.noop;
	    }) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every(function (result) {
	      return result.finished;
	    }));
	  };

	  var getNoopResult = function getNoopResult(value) {
	    return {
	      value: value,
	      noop: true,
	      finished: true,
	      cancelled: false
	    };
	  };

	  var getFinishedResult = function getFinishedResult(value, finished) {
	    var cancelled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	    return {
	      value: value,
	      finished: finished,
	      cancelled: cancelled
	    };
	  };

	  var getCancelledResult = function getCancelledResult(value) {
	    return {
	      value: value,
	      cancelled: true,
	      finished: false
	    };
	  };

	  function runAsync(to, props, state, target) {
	    var callId = props.callId,
	        parentId = props.parentId,
	        onRest = props.onRest;
	    var prevTo = state.asyncTo,
	        prevPromise = state.promise;

	    if (!parentId && to === prevTo && !props.reset) {
	      return prevPromise;
	    }

	    return state.promise = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3() {
	      var defaultProps, preventBail, bail, bailPromise, bailIfEnded, animate, result, animating;
	      return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context4) {
	        while (1) {
	          switch (_context4.prev = _context4.next) {
	            case 0:
	              state.asyncId = callId;
	              state.asyncTo = to;
	              defaultProps = getDefaultProps(props, function (value, key) {
	                return key === 'onRest' ? undefined : value;
	              });
	              bailPromise = new _Promise__default["default"](function (resolve, reject) {
	                return preventBail = resolve, bail = reject;
	              });

	              bailIfEnded = function bailIfEnded(bailSignal) {
	                var bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);

	                if (bailResult) {
	                  bailSignal.result = bailResult;
	                  bail(bailSignal);
	                  throw bailSignal;
	                }
	              };

	              animate = function animate(arg1, arg2) {
	                var bailSignal = new BailSignal();
	                var skipAnimationSignal = new SkipAniamtionSignal();
	                return _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
	                  var props, result;
	                  return _regeneratorRuntime__default["default"].wrap(function _callee$(_context2) {
	                    while (1) {
	                      switch (_context2.prev = _context2.next) {
	                        case 0:
	                          if (!shared.Globals.skipAnimation) {
	                            _context2.next = 5;
	                            break;
	                          }

	                          stopAsync(state);
	                          skipAnimationSignal.result = getFinishedResult(target, false);
	                          bail(skipAnimationSignal);
	                          throw skipAnimationSignal;

	                        case 5:
	                          bailIfEnded(bailSignal);
	                          props = shared.is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
	                            to: arg1
	                          });
	                          props.parentId = callId;
	                          shared.eachProp(defaultProps, function (value, key) {
	                            if (shared.is.und(props[key])) {
	                              props[key] = value;
	                            }
	                          });
	                          _context2.next = 11;
	                          return target.start(props);

	                        case 11:
	                          result = _context2.sent;
	                          bailIfEnded(bailSignal);

	                          if (!state.paused) {
	                            _context2.next = 16;
	                            break;
	                          }

	                          _context2.next = 16;
	                          return new _Promise__default["default"](function (resume) {
	                            state.resumeQueue.add(resume);
	                          });

	                        case 16:
	                          return _context2.abrupt("return", result);

	                        case 17:
	                        case "end":
	                          return _context2.stop();
	                      }
	                    }
	                  }, _callee);
	                }))();
	              };

	              if (!shared.Globals.skipAnimation) {
	                _context4.next = 9;
	                break;
	              }

	              stopAsync(state);
	              return _context4.abrupt("return", getFinishedResult(target, false));

	            case 9:
	              _context4.prev = 9;

	              if (shared.is.arr(to)) {
	                animating = function () {
	                  var _ref5 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(queue) {
	                    var _iterator2, _step2, _props;

	                    return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context3) {
	                      while (1) {
	                        switch (_context3.prev = _context3.next) {
	                          case 0:
	                            _iterator2 = _createForOfIteratorHelper(queue);
	                            _context3.prev = 1;

	                            _iterator2.s();

	                          case 3:
	                            if ((_step2 = _iterator2.n()).done) {
	                              _context3.next = 9;
	                              break;
	                            }

	                            _props = _step2.value;
	                            _context3.next = 7;
	                            return animate(_props);

	                          case 7:
	                            _context3.next = 3;
	                            break;

	                          case 9:
	                            _context3.next = 14;
	                            break;

	                          case 11:
	                            _context3.prev = 11;
	                            _context3.t0 = _context3["catch"](1);

	                            _iterator2.e(_context3.t0);

	                          case 14:
	                            _context3.prev = 14;

	                            _iterator2.f();

	                            return _context3.finish(14);

	                          case 17:
	                          case "end":
	                            return _context3.stop();
	                        }
	                      }
	                    }, _callee2, null, [[1, 11, 14, 17]]);
	                  }));

	                  return function (_x) {
	                    return _ref5.apply(this, arguments);
	                  };
	                }()(to);
	              } else {
	                animating = _Promise__default["default"].resolve(to(animate, target.stop.bind(target)));
	              }

	              _context4.next = 13;
	              return _Promise__default["default"].all([animating.then(preventBail), bailPromise]);

	            case 13:
	              result = getFinishedResult(target.get(), true, false);
	              _context4.next = 27;
	              break;

	            case 16:
	              _context4.prev = 16;
	              _context4.t0 = _context4["catch"](9);

	              if (!(_context4.t0 instanceof BailSignal)) {
	                _context4.next = 22;
	                break;
	              }

	              result = _context4.t0.result;
	              _context4.next = 27;
	              break;

	            case 22:
	              if (!(_context4.t0 instanceof SkipAniamtionSignal)) {
	                _context4.next = 26;
	                break;
	              }

	              result = _context4.t0.result;
	              _context4.next = 27;
	              break;

	            case 26:
	              throw _context4.t0;

	            case 27:
	              _context4.prev = 27;

	              if (callId == state.asyncId) {
	                state.asyncId = parentId;
	                state.asyncTo = parentId ? prevTo : undefined;
	                state.promise = parentId ? prevPromise : undefined;
	              }

	              return _context4.finish(27);

	            case 30:
	              if (shared.is.fun(onRest)) {
	                shared.raf.batchedUpdates(function () {
	                  onRest(result, target, target.item);
	                });
	              }

	              return _context4.abrupt("return", result);

	            case 32:
	            case "end":
	              return _context4.stop();
	          }
	        }
	      }, _callee3, null, [[9, 16, 27, 30]]);
	    }))();
	  }

	  function stopAsync(state, cancelId) {
	    shared.flush(state.timeouts, function (t) {
	      return t.cancel();
	    });
	    state.pauseQueue.clear();
	    state.resumeQueue.clear();
	    state.asyncId = state.asyncTo = state.promise = undefined;
	    if (cancelId) state.cancelId = cancelId;
	  }

	  var BailSignal = /*#__PURE__*/function (_Error) {
	    _inherits__default["default"](BailSignal, _Error);

	    var _super = _createSuper$1(BailSignal);

	    function BailSignal() {
	      var _this;

	      _classCallCheck__default["default"](this, BailSignal);

	      _this = _super.call(this, 'An async animation has been interrupted. You see this error because you ' + 'forgot to use `await` or `.catch(...)` on its returned promise.');
	      _this.result = void 0;
	      return _this;
	    }

	    return _createClass__default["default"](BailSignal);
	  }( /*#__PURE__*/_wrapNativeSuper__default["default"](Error));

	  var SkipAniamtionSignal = /*#__PURE__*/function (_Error2) {
	    _inherits__default["default"](SkipAniamtionSignal, _Error2);

	    var _super2 = _createSuper$1(SkipAniamtionSignal);

	    function SkipAniamtionSignal() {
	      var _this2;

	      _classCallCheck__default["default"](this, SkipAniamtionSignal);

	      _this2 = _super2.call(this, 'SkipAnimationSignal');
	      _this2.result = void 0;
	      return _this2;
	    }

	    return _createClass__default["default"](SkipAniamtionSignal);
	  }( /*#__PURE__*/_wrapNativeSuper__default["default"](Error));

	  var isFrameValue = function isFrameValue(value) {
	    return value instanceof FrameValue;
	  };

	  var nextId$1 = 1;

	  var FrameValue = /*#__PURE__*/function (_shared$FluidValue) {
	    _inherits__default["default"](FrameValue, _shared$FluidValue);

	    var _super3 = _createSuper$1(FrameValue);

	    function FrameValue() {
	      var _context5;

	      var _this3;

	      _classCallCheck__default["default"](this, FrameValue);

	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      _this3 = _super3.call.apply(_super3, _concatInstanceProperty__default["default"](_context5 = [this]).call(_context5, args));
	      _this3.id = nextId$1++;
	      _this3.key = void 0;
	      _this3._priority = 0;
	      return _this3;
	    }

	    _createClass__default["default"](FrameValue, [{
	      key: "priority",
	      get: function get() {
	        return this._priority;
	      },
	      set: function set(priority) {
	        if (this._priority != priority) {
	          this._priority = priority;

	          this._onPriorityChange(priority);
	        }
	      }
	    }, {
	      key: "get",
	      value: function get() {
	        var node = animated$1.getAnimated(this);
	        return node && node.getValue();
	      }
	    }, {
	      key: "to",
	      value: function to() {
	        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	          args[_key3] = arguments[_key3];
	        }

	        return shared.Globals.to(this, args);
	      }
	    }, {
	      key: "interpolate",
	      value: function interpolate() {
	        shared.deprecateInterpolate();

	        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	          args[_key4] = arguments[_key4];
	        }

	        return shared.Globals.to(this, args);
	      }
	    }, {
	      key: "toJSON",
	      value: function toJSON() {
	        return this.get();
	      }
	    }, {
	      key: "observerAdded",
	      value: function observerAdded(count) {
	        if (count == 1) this._attach();
	      }
	    }, {
	      key: "observerRemoved",
	      value: function observerRemoved(count) {
	        if (count == 0) this._detach();
	      }
	    }, {
	      key: "_attach",
	      value: function _attach() {}
	    }, {
	      key: "_detach",
	      value: function _detach() {}
	    }, {
	      key: "_onChange",
	      value: function _onChange(value) {
	        var idle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	        shared.callFluidObservers(this, {
	          type: 'change',
	          parent: this,
	          value: value,
	          idle: idle
	        });
	      }
	    }, {
	      key: "_onPriorityChange",
	      value: function _onPriorityChange(priority) {
	        if (!this.idle) {
	          var _context6;

	          _sortInstanceProperty__default["default"](_context6 = shared.frameLoop).call(_context6, this);
	        }

	        shared.callFluidObservers(this, {
	          type: 'priority',
	          parent: this,
	          priority: priority
	        });
	      }
	    }]);

	    return FrameValue;
	  }(shared.FluidValue);

	  var $P = _Symbol$for__default["default"]('SpringPhase');

	  var HAS_ANIMATED = 1;
	  var IS_ANIMATING = 2;
	  var IS_PAUSED = 4;

	  var hasAnimated = function hasAnimated(target) {
	    return (target[$P] & HAS_ANIMATED) > 0;
	  };

	  var isAnimating = function isAnimating(target) {
	    return (target[$P] & IS_ANIMATING) > 0;
	  };

	  var isPaused = function isPaused(target) {
	    return (target[$P] & IS_PAUSED) > 0;
	  };

	  var setActiveBit = function setActiveBit(target, active) {
	    return active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
	  };

	  var setPausedBit = function setPausedBit(target, paused) {
	    return paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;
	  };

	  var SpringValue = /*#__PURE__*/function (_FrameValue) {
	    _inherits__default["default"](SpringValue, _FrameValue);

	    var _super4 = _createSuper$1(SpringValue);

	    function SpringValue(arg1, arg2) {
	      var _this4;

	      _classCallCheck__default["default"](this, SpringValue);

	      _this4 = _super4.call(this);
	      _this4.key = void 0;
	      _this4.animation = new Animation();
	      _this4.queue = void 0;
	      _this4.defaultProps = {};
	      _this4._state = {
	        paused: false,
	        pauseQueue: new _Set__default["default"](),
	        resumeQueue: new _Set__default["default"](),
	        timeouts: new _Set__default["default"]()
	      };
	      _this4._pendingCalls = new _Set__default["default"]();
	      _this4._lastCallId = 0;
	      _this4._lastToId = 0;
	      _this4._memoizedDuration = 0;

	      if (!shared.is.und(arg1) || !shared.is.und(arg2)) {
	        var props = shared.is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
	          from: arg1
	        });

	        if (shared.is.und(props.default)) {
	          props.default = true;
	        }

	        _this4.start(props);
	      }

	      return _this4;
	    }

	    _createClass__default["default"](SpringValue, [{
	      key: "idle",
	      get: function get() {
	        return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
	      }
	    }, {
	      key: "goal",
	      get: function get() {
	        return shared.getFluidValue(this.animation.to);
	      }
	    }, {
	      key: "velocity",
	      get: function get() {
	        var _context7;

	        var node = animated$1.getAnimated(this);
	        return node instanceof animated$1.AnimatedValue ? node.lastVelocity || 0 : _mapInstanceProperty__default["default"](_context7 = node.getPayload()).call(_context7, function (node) {
	          return node.lastVelocity || 0;
	        });
	      }
	    }, {
	      key: "hasAnimated",
	      get: function get() {
	        return hasAnimated(this);
	      }
	    }, {
	      key: "isAnimating",
	      get: function get() {
	        return isAnimating(this);
	      }
	    }, {
	      key: "isPaused",
	      get: function get() {
	        return isPaused(this);
	      }
	    }, {
	      key: "advance",
	      value: function advance(dt) {
	        var _this5 = this;

	        var idle = true;
	        var changed = false;
	        var anim = this.animation;
	        var config = anim.config,
	            toValues = anim.toValues;
	        var payload = animated$1.getPayload(anim.to);

	        if (!payload && shared.hasFluidValue(anim.to)) {
	          toValues = shared.toArray(shared.getFluidValue(anim.to));
	        }

	        _valuesInstanceProperty__default["default"](anim).forEach(function (node, i) {
	          if (node.done) return;
	          var to = node.constructor == animated$1.AnimatedString ? 1 : payload ? payload[i].lastPosition : toValues[i];
	          var finished = anim.immediate;
	          var position = to;

	          if (!finished) {
	            position = node.lastPosition;

	            if (config.tension <= 0) {
	              node.done = true;
	              return;
	            }

	            var elapsed = node.elapsedTime += dt;
	            var from = anim.fromValues[i];
	            var v0 = node.v0 != null ? node.v0 : node.v0 = shared.is.arr(config.velocity) ? config.velocity[i] : config.velocity;
	            var velocity;

	            if (!shared.is.und(config.duration)) {
	              var p = 1;

	              if (config.duration > 0) {
	                if (_this5._memoizedDuration !== config.duration) {
	                  _this5._memoizedDuration = config.duration;

	                  if (node.durationProgress > 0) {
	                    node.elapsedTime = config.duration * node.durationProgress;
	                    elapsed = node.elapsedTime += dt;
	                  }
	                }

	                p = (config.progress || 0) + elapsed / _this5._memoizedDuration;
	                p = p > 1 ? 1 : p < 0 ? 0 : p;
	                node.durationProgress = p;
	              }

	              position = from + config.easing(p) * (to - from);
	              velocity = (position - node.lastPosition) / dt;
	              finished = p == 1;
	            } else if (config.decay) {
	              var decay = config.decay === true ? 0.998 : config.decay;
	              var e = Math.exp(-(1 - decay) * elapsed);
	              position = from + v0 / (1 - decay) * (1 - e);
	              finished = Math.abs(node.lastPosition - position) < 0.1;
	              velocity = v0 * e;
	            } else {
	              velocity = node.lastVelocity == null ? v0 : node.lastVelocity;
	              var precision = config.precision || (from == to ? 0.005 : Math.min(1, Math.abs(to - from) * 0.001));
	              var restVelocity = config.restVelocity || precision / 10;
	              var bounceFactor = config.clamp ? 0 : config.bounce;
	              var canBounce = !shared.is.und(bounceFactor);
	              var isGrowing = from == to ? node.v0 > 0 : from < to;
	              var isMoving;
	              var isBouncing = false;
	              var step = 1;
	              var numSteps = Math.ceil(dt / step);

	              for (var n = 0; n < numSteps; ++n) {
	                isMoving = Math.abs(velocity) > restVelocity;

	                if (!isMoving) {
	                  finished = Math.abs(to - position) <= precision;

	                  if (finished) {
	                    break;
	                  }
	                }

	                if (canBounce) {
	                  isBouncing = position == to || position > to == isGrowing;

	                  if (isBouncing) {
	                    velocity = -velocity * bounceFactor;
	                    position = to;
	                  }
	                }

	                var springForce = -config.tension * 0.000001 * (position - to);
	                var dampingForce = -config.friction * 0.001 * velocity;
	                var acceleration = (springForce + dampingForce) / config.mass;
	                velocity = velocity + acceleration * step;
	                position = position + velocity * step;
	              }
	            }

	            node.lastVelocity = velocity;

	            if (_Number$isNaN__default["default"](position)) {
	              console.warn("Got NaN while animating:", _this5);
	              finished = true;
	            }
	          }

	          if (payload && !payload[i].done) {
	            finished = false;
	          }

	          if (finished) {
	            node.done = true;
	          } else {
	            idle = false;
	          }

	          if (node.setValue(position, config.round)) {
	            changed = true;
	          }
	        });

	        var node = animated$1.getAnimated(this);
	        var currVal = node.getValue();

	        if (idle) {
	          var finalVal = shared.getFluidValue(anim.to);

	          if ((currVal !== finalVal || changed) && !config.decay) {
	            node.setValue(finalVal);

	            this._onChange(finalVal);
	          } else if (changed && config.decay) {
	            this._onChange(currVal);
	          }

	          this._stop();
	        } else if (changed) {
	          this._onChange(currVal);
	        }
	      }
	    }, {
	      key: "set",
	      value: function set(value) {
	        var _this6 = this;

	        shared.raf.batchedUpdates(function () {
	          _this6._stop();

	          _this6._focus(value);

	          _this6._set(value);
	        });
	        return this;
	      }
	    }, {
	      key: "pause",
	      value: function pause() {
	        this._update({
	          pause: true
	        });
	      }
	    }, {
	      key: "resume",
	      value: function resume() {
	        this._update({
	          pause: false
	        });
	      }
	    }, {
	      key: "finish",
	      value: function finish() {
	        var _this7 = this;

	        if (isAnimating(this)) {
	          var _this$animation = this.animation,
	              _to = _this$animation.to,
	              _config = _this$animation.config;
	          shared.raf.batchedUpdates(function () {
	            _this7._onStart();

	            if (!_config.decay) {
	              _this7._set(_to, false);
	            }

	            _this7._stop();
	          });
	        }

	        return this;
	      }
	    }, {
	      key: "update",
	      value: function update(props) {
	        var queue = this.queue || (this.queue = []);
	        queue.push(props);
	        return this;
	      }
	    }, {
	      key: "start",
	      value: function start(to, arg2) {
	        var _this8 = this;

	        var queue;

	        if (!shared.is.und(to)) {
	          queue = [shared.is.obj(to) ? to : _extends({}, arg2, {
	            to: to
	          })];
	        } else {
	          queue = this.queue || [];
	          this.queue = [];
	        }

	        return _Promise__default["default"].all(_mapInstanceProperty__default["default"](queue).call(queue, function (props) {
	          return _this8._update(props);
	        })).then(function (results) {
	          return getCombinedResult(_this8, results);
	        });
	      }
	    }, {
	      key: "stop",
	      value: function stop(cancel) {
	        var _this9 = this;

	        var to = this.animation.to;

	        this._focus(this.get());

	        stopAsync(this._state, cancel && this._lastCallId);
	        shared.raf.batchedUpdates(function () {
	          return _this9._stop(to, cancel);
	        });
	        return this;
	      }
	    }, {
	      key: "reset",
	      value: function reset() {
	        this._update({
	          reset: true
	        });
	      }
	    }, {
	      key: "eventObserved",
	      value: function eventObserved(event) {
	        if (event.type == 'change') {
	          this._start();
	        } else if (event.type == 'priority') {
	          this.priority = event.priority + 1;
	        }
	      }
	    }, {
	      key: "_prepareNode",
	      value: function _prepareNode(props) {
	        var key = this.key || '';
	        var to = props.to,
	            from = props.from;
	        to = shared.is.obj(to) ? to[key] : to;

	        if (to == null || isAsyncTo(to)) {
	          to = undefined;
	        }

	        from = shared.is.obj(from) ? from[key] : from;

	        if (from == null) {
	          from = undefined;
	        }

	        var range = {
	          to: to,
	          from: from
	        };

	        if (!hasAnimated(this)) {
	          if (_reverseInstanceProperty__default["default"](props)) {
	            var _ref6 = [from, to];
	            to = _ref6[0];
	            from = _ref6[1];
	          }

	          from = shared.getFluidValue(from);

	          if (!shared.is.und(from)) {
	            this._set(from);
	          } else if (!animated$1.getAnimated(this)) {
	            this._set(to);
	          }
	        }

	        return range;
	      }
	    }, {
	      key: "_update",
	      value: function _update(_ref, isLoop) {
	        var _this10 = this;

	        var props = _extends({}, _ref);

	        var key = this.key,
	            defaultProps = this.defaultProps;
	        if (props.default) _Object$assign__default["default"](defaultProps, getDefaultProps(props, function (value, prop) {
	          return /^on/.test(prop) ? resolveProp(value, key) : value;
	        }));
	        mergeActiveFn(this, props, 'onProps');
	        sendEvent(this, 'onProps', props, this);

	        var range = this._prepareNode(props);

	        if (_Object$isFrozen__default["default"](this)) {
	          throw Error('Cannot animate a `SpringValue` object that is frozen. ' + 'Did you forget to pass your component to `animated(...)` before animating its props?');
	        }

	        var state = this._state;
	        return scheduleProps(++this._lastCallId, {
	          key: key,
	          props: props,
	          defaultProps: defaultProps,
	          state: state,
	          actions: {
	            pause: function pause() {
	              if (!isPaused(_this10)) {
	                setPausedBit(_this10, true);
	                shared.flushCalls(state.pauseQueue);
	                sendEvent(_this10, 'onPause', getFinishedResult(_this10, checkFinished(_this10, _this10.animation.to)), _this10);
	              }
	            },
	            resume: function resume() {
	              if (isPaused(_this10)) {
	                setPausedBit(_this10, false);

	                if (isAnimating(_this10)) {
	                  _this10._resume();
	                }

	                shared.flushCalls(state.resumeQueue);
	                sendEvent(_this10, 'onResume', getFinishedResult(_this10, checkFinished(_this10, _this10.animation.to)), _this10);
	              }
	            },
	            start: this._merge.bind(this, range)
	          }
	        }).then(function (result) {
	          if (props.loop && result.finished && !(isLoop && result.noop)) {
	            var nextProps = createLoopUpdate(props);

	            if (nextProps) {
	              return _this10._update(nextProps, true);
	            }
	          }

	          return result;
	        });
	      }
	    }, {
	      key: "_merge",
	      value: function _merge(range, props, resolve) {
	        var _this11 = this;

	        if (props.cancel) {
	          this.stop(true);
	          return resolve(getCancelledResult(this));
	        }

	        var hasToProp = !shared.is.und(range.to);
	        var hasFromProp = !shared.is.und(range.from);

	        if (hasToProp || hasFromProp) {
	          if (props.callId > this._lastToId) {
	            this._lastToId = props.callId;
	          } else {
	            return resolve(getCancelledResult(this));
	          }
	        }

	        var key = this.key,
	            defaultProps = this.defaultProps,
	            anim = this.animation;
	        var prevTo = anim.to,
	            prevFrom = anim.from;
	        var _range$to = range.to,
	            to = _range$to === void 0 ? prevTo : _range$to,
	            _range$from = range.from,
	            from = _range$from === void 0 ? prevFrom : _range$from;

	        if (hasFromProp && !hasToProp && (!props.default || shared.is.und(to))) {
	          to = from;
	        }

	        if (_reverseInstanceProperty__default["default"](props)) {
	          var _ref7 = [from, to];
	          to = _ref7[0];
	          from = _ref7[1];
	        }

	        var hasFromChanged = !shared.isEqual(from, prevFrom);

	        if (hasFromChanged) {
	          anim.from = from;
	        }

	        from = shared.getFluidValue(from);
	        var hasToChanged = !shared.isEqual(to, prevTo);

	        if (hasToChanged) {
	          this._focus(to);
	        }

	        var hasAsyncTo = isAsyncTo(props.to);
	        var config = anim.config;
	        var decay = config.decay,
	            velocity = config.velocity;

	        if (hasToProp || hasFromProp) {
	          config.velocity = 0;
	        }

	        if (props.config && !hasAsyncTo) {
	          mergeConfig(config, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
	        }

	        var node = animated$1.getAnimated(this);

	        if (!node || shared.is.und(to)) {
	          return resolve(getFinishedResult(this, true));
	        }

	        var reset = shared.is.und(props.reset) ? hasFromProp && !props.default : !shared.is.und(from) && matchProp(props.reset, key);
	        var value = reset ? from : this.get();
	        var goal = computeGoal(to);
	        var isAnimatable = shared.is.num(goal) || shared.is.arr(goal) || shared.isAnimatedString(goal);
	        var immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));

	        if (hasToChanged) {
	          var nodeType = animated$1.getAnimatedType(to);

	          if (nodeType !== node.constructor) {
	            var _context8;

	            if (immediate) {
	              node = this._set(goal);
	            } else throw Error(_concatInstanceProperty__default["default"](_context8 = "Cannot animate between ".concat(node.constructor.name, " and ")).call(_context8, nodeType.name, ", as the \"to\" prop suggests"));
	          }
	        }

	        var goalType = node.constructor;
	        var started = shared.hasFluidValue(to);
	        var finished = false;

	        if (!started) {
	          var hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;

	          if (hasToChanged || hasValueChanged) {
	            finished = shared.isEqual(computeGoal(value), goal);
	            started = !finished;
	          }

	          if (!shared.isEqual(anim.immediate, immediate) && !immediate || !shared.isEqual(config.decay, decay) || !shared.isEqual(config.velocity, velocity)) {
	            started = true;
	          }
	        }

	        if (finished && isAnimating(this)) {
	          if (anim.changed && !reset) {
	            started = true;
	          } else if (!started) {
	            this._stop(prevTo);
	          }
	        }

	        if (!hasAsyncTo) {
	          if (started || shared.hasFluidValue(prevTo)) {
	            anim.values = node.getPayload();
	            anim.toValues = shared.hasFluidValue(to) ? null : goalType == animated$1.AnimatedString ? [1] : shared.toArray(goal);
	          }

	          if (anim.immediate != immediate) {
	            anim.immediate = immediate;

	            if (!immediate && !reset) {
	              this._set(prevTo);
	            }
	          }

	          if (started) {
	            var onRest = anim.onRest;
	            shared.each(ACTIVE_EVENTS, function (type) {
	              return mergeActiveFn(_this11, props, type);
	            });
	            var result = getFinishedResult(this, checkFinished(this, prevTo));
	            shared.flushCalls(this._pendingCalls, result);

	            this._pendingCalls.add(resolve);

	            if (anim.changed) shared.raf.batchedUpdates(function () {
	              anim.changed = !reset;
	              onRest == null ? void 0 : onRest(result, _this11);

	              if (reset) {
	                callProp(defaultProps.onRest, result);
	              } else {
	                anim.onStart == null ? void 0 : anim.onStart(result, _this11);
	              }
	            });
	          }
	        }

	        if (reset) {
	          this._set(value);
	        }

	        if (hasAsyncTo) {
	          resolve(runAsync(props.to, props, this._state, this));
	        } else if (started) {
	          this._start();
	        } else if (isAnimating(this) && !hasToChanged) {
	          this._pendingCalls.add(resolve);
	        } else {
	          resolve(getNoopResult(value));
	        }
	      }
	    }, {
	      key: "_focus",
	      value: function _focus(value) {
	        var anim = this.animation;

	        if (value !== anim.to) {
	          if (shared.getFluidObservers(this)) {
	            this._detach();
	          }

	          anim.to = value;

	          if (shared.getFluidObservers(this)) {
	            this._attach();
	          }
	        }
	      }
	    }, {
	      key: "_attach",
	      value: function _attach() {
	        var priority = 0;
	        var to = this.animation.to;

	        if (shared.hasFluidValue(to)) {
	          shared.addFluidObserver(to, this);

	          if (isFrameValue(to)) {
	            priority = to.priority + 1;
	          }
	        }

	        this.priority = priority;
	      }
	    }, {
	      key: "_detach",
	      value: function _detach() {
	        var to = this.animation.to;

	        if (shared.hasFluidValue(to)) {
	          shared.removeFluidObserver(to, this);
	        }
	      }
	    }, {
	      key: "_set",
	      value: function _set(arg) {
	        var _this12 = this;

	        var idle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	        var value = shared.getFluidValue(arg);

	        if (!shared.is.und(value)) {
	          var oldNode = animated$1.getAnimated(this);

	          if (!oldNode || !shared.isEqual(value, oldNode.getValue())) {
	            var nodeType = animated$1.getAnimatedType(value);

	            if (!oldNode || oldNode.constructor != nodeType) {
	              animated$1.setAnimated(this, nodeType.create(value));
	            } else {
	              oldNode.setValue(value);
	            }

	            if (oldNode) {
	              shared.raf.batchedUpdates(function () {
	                _this12._onChange(value, idle);
	              });
	            }
	          }
	        }

	        return animated$1.getAnimated(this);
	      }
	    }, {
	      key: "_onStart",
	      value: function _onStart() {
	        var anim = this.animation;

	        if (!anim.changed) {
	          anim.changed = true;
	          sendEvent(this, 'onStart', getFinishedResult(this, checkFinished(this, anim.to)), this);
	        }
	      }
	    }, {
	      key: "_onChange",
	      value: function _onChange(value, idle) {
	        if (!idle) {
	          this._onStart();

	          callProp(this.animation.onChange, value, this);
	        }

	        callProp(this.defaultProps.onChange, value, this);

	        _get__default["default"](_getPrototypeOf__default["default"](SpringValue.prototype), "_onChange", this).call(this, value, idle);
	      }
	    }, {
	      key: "_start",
	      value: function _start() {
	        var anim = this.animation;
	        animated$1.getAnimated(this).reset(shared.getFluidValue(anim.to));

	        if (!anim.immediate) {
	          var _context9;

	          anim.fromValues = _mapInstanceProperty__default["default"](_context9 = _valuesInstanceProperty__default["default"](anim)).call(_context9, function (node) {
	            return node.lastPosition;
	          });
	        }

	        if (!isAnimating(this)) {
	          setActiveBit(this, true);

	          if (!isPaused(this)) {
	            this._resume();
	          }
	        }
	      }
	    }, {
	      key: "_resume",
	      value: function _resume() {
	        if (shared.Globals.skipAnimation) {
	          this.finish();
	        } else {
	          shared.frameLoop.start(this);
	        }
	      }
	    }, {
	      key: "_stop",
	      value: function _stop(goal, cancel) {
	        if (isAnimating(this)) {
	          setActiveBit(this, false);
	          var anim = this.animation;
	          shared.each(_valuesInstanceProperty__default["default"](anim), function (node) {
	            node.done = true;
	          });

	          if (anim.toValues) {
	            anim.onChange = anim.onPause = anim.onResume = undefined;
	          }

	          shared.callFluidObservers(this, {
	            type: 'idle',
	            parent: this
	          });
	          var result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal != null ? goal : anim.to));
	          shared.flushCalls(this._pendingCalls, result);

	          if (anim.changed) {
	            anim.changed = false;
	            sendEvent(this, 'onRest', result, this);
	          }
	        }
	      }
	    }]);

	    return SpringValue;
	  }(FrameValue);

	  function checkFinished(target, to) {
	    var goal = computeGoal(to);
	    var value = computeGoal(target.get());
	    return shared.isEqual(value, goal);
	  }

	  function createLoopUpdate(props) {
	    var loop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : props.loop;
	    var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : props.to;
	    var loopRet = callProp(loop);

	    if (loopRet) {
	      var overrides = loopRet !== true && inferTo(loopRet);

	      var reverse = _reverseInstanceProperty__default["default"](overrides || props);

	      var reset = !overrides || overrides.reset;
	      return createUpdate(_extends({}, props, {
	        loop: loop,
	        default: false,
	        pause: undefined,
	        to: !reverse || isAsyncTo(to) ? to : undefined,
	        from: reset ? props.from : undefined,
	        reset: reset
	      }, overrides));
	    }
	  }

	  function createUpdate(props) {
	    var _props2 = props = inferTo(props),
	        to = _props2.to,
	        from = _props2.from;

	    var keys = new _Set__default["default"]();
	    if (shared.is.obj(to)) findDefined(to, keys);
	    if (shared.is.obj(from)) findDefined(from, keys);
	    props.keys = keys.size ? _Array$from__default["default"](keys) : null;
	    return props;
	  }

	  function declareUpdate(props) {
	    var update = createUpdate(props);

	    if (shared.is.und(update.default)) {
	      update.default = getDefaultProps(update);
	    }

	    return update;
	  }

	  function findDefined(values, keys) {
	    shared.eachProp(values, function (value, key) {
	      return value != null && keys.add(key);
	    });
	  }

	  var ACTIVE_EVENTS = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];

	  function mergeActiveFn(target, props, type) {
	    target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : undefined;
	  }

	  function sendEvent(target, type) {
	    var _target$animation$typ2, _context10, _target$defaultProps$2, _context11;

	    var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;

	    for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
	      args[_key5 - 2] = arguments[_key5];
	    }

	    (_target$animation$typ = (_target$animation = target.animation)[type]) == null ? void 0 : (_target$animation$typ2 = _target$animation$typ).call.apply(_target$animation$typ2, _concatInstanceProperty__default["default"](_context10 = [_target$animation]).call(_context10, args));
	    (_target$defaultProps$ = (_target$defaultProps = target.defaultProps)[type]) == null ? void 0 : (_target$defaultProps$2 = _target$defaultProps$).call.apply(_target$defaultProps$2, _concatInstanceProperty__default["default"](_context11 = [_target$defaultProps]).call(_context11, args));
	  }

	  var BATCHED_EVENTS = ['onStart', 'onChange', 'onRest'];
	  var nextId = 1;

	  var Controller = /*#__PURE__*/function () {
	    function Controller(props, flush) {
	      _classCallCheck__default["default"](this, Controller);

	      this.id = nextId++;
	      this.springs = {};
	      this.queue = [];
	      this.ref = void 0;
	      this._flush = void 0;
	      this._initialProps = void 0;
	      this._lastAsyncId = 0;
	      this._active = new _Set__default["default"]();
	      this._changed = new _Set__default["default"]();
	      this._started = false;
	      this._item = void 0;
	      this._state = {
	        paused: false,
	        pauseQueue: new _Set__default["default"](),
	        resumeQueue: new _Set__default["default"](),
	        timeouts: new _Set__default["default"]()
	      };
	      this._events = {
	        onStart: new _Map__default["default"](),
	        onChange: new _Map__default["default"](),
	        onRest: new _Map__default["default"]()
	      };
	      this._onFrame = this._onFrame.bind(this);

	      if (flush) {
	        this._flush = flush;
	      }

	      if (props) {
	        this.start(_extends({
	          default: true
	        }, props));
	      }
	    }

	    _createClass__default["default"](Controller, [{
	      key: "idle",
	      get: function get() {
	        return !this._state.asyncTo && _Object$values__default["default"](this.springs).every(function (spring) {
	          return spring.idle;
	        });
	      }
	    }, {
	      key: "item",
	      get: function get() {
	        return this._item;
	      },
	      set: function set(item) {
	        this._item = item;
	      }
	    }, {
	      key: "get",
	      value: function get() {
	        var values = {};
	        this.each(function (spring, key) {
	          return values[key] = spring.get();
	        });
	        return values;
	      }
	    }, {
	      key: "set",
	      value: function set(values) {
	        for (var key in values) {
	          var value = values[key];

	          if (!shared.is.und(value)) {
	            this.springs[key].set(value);
	          }
	        }
	      }
	    }, {
	      key: "update",
	      value: function update(props) {
	        if (props) {
	          this.queue.push(createUpdate(props));
	        }

	        return this;
	      }
	    }, {
	      key: "start",
	      value: function start(props) {
	        var queue = this.queue;

	        if (props) {
	          var _context12;

	          queue = _mapInstanceProperty__default["default"](_context12 = shared.toArray(props)).call(_context12, createUpdate);
	        } else {
	          this.queue = [];
	        }

	        if (this._flush) {
	          return this._flush(this, queue);
	        }

	        prepareKeys(this, queue);
	        return flushUpdateQueue(this, queue);
	      }
	    }, {
	      key: "stop",
	      value: function stop(arg, keys) {
	        if (arg !== !!arg) {
	          keys = arg;
	        }

	        if (keys) {
	          var springs = this.springs;
	          shared.each(shared.toArray(keys), function (key) {
	            return springs[key].stop(!!arg);
	          });
	        } else {
	          stopAsync(this._state, this._lastAsyncId);
	          this.each(function (spring) {
	            return spring.stop(!!arg);
	          });
	        }

	        return this;
	      }
	    }, {
	      key: "pause",
	      value: function pause(keys) {
	        if (shared.is.und(keys)) {
	          this.start({
	            pause: true
	          });
	        } else {
	          var springs = this.springs;
	          shared.each(shared.toArray(keys), function (key) {
	            return springs[key].pause();
	          });
	        }

	        return this;
	      }
	    }, {
	      key: "resume",
	      value: function resume(keys) {
	        if (shared.is.und(keys)) {
	          this.start({
	            pause: false
	          });
	        } else {
	          var springs = this.springs;
	          shared.each(shared.toArray(keys), function (key) {
	            return springs[key].resume();
	          });
	        }

	        return this;
	      }
	    }, {
	      key: "each",
	      value: function each(iterator) {
	        shared.eachProp(this.springs, iterator);
	      }
	    }, {
	      key: "_onFrame",
	      value: function _onFrame() {
	        var _this13 = this;

	        var _this$_events = this._events,
	            onStart = _this$_events.onStart,
	            onChange = _this$_events.onChange,
	            onRest = _this$_events.onRest;
	        var active = this._active.size > 0;
	        var changed = this._changed.size > 0;

	        if (active && !this._started || changed && !this._started) {
	          this._started = true;
	          shared.flush(onStart, function (_ref8) {
	            var _ref9 = _slicedToArray__default["default"](_ref8, 2),
	                onStart = _ref9[0],
	                result = _ref9[1];

	            result.value = _this13.get();
	            onStart(result, _this13, _this13._item);
	          });
	        }

	        var idle = !active && this._started;
	        var values = changed || idle && onRest.size ? this.get() : null;

	        if (changed && onChange.size) {
	          shared.flush(onChange, function (_ref10) {
	            var _ref11 = _slicedToArray__default["default"](_ref10, 2),
	                onChange = _ref11[0],
	                result = _ref11[1];

	            result.value = values;
	            onChange(result, _this13, _this13._item);
	          });
	        }

	        if (idle) {
	          this._started = false;
	          shared.flush(onRest, function (_ref12) {
	            var _ref13 = _slicedToArray__default["default"](_ref12, 2),
	                onRest = _ref13[0],
	                result = _ref13[1];

	            result.value = values;
	            onRest(result, _this13, _this13._item);
	          });
	        }
	      }
	    }, {
	      key: "eventObserved",
	      value: function eventObserved(event) {
	        if (event.type == 'change') {
	          this._changed.add(event.parent);

	          if (!event.idle) {
	            this._active.add(event.parent);
	          }
	        } else if (event.type == 'idle') {
	          this._active.delete(event.parent);
	        } else return;

	        shared.raf.onFrame(this._onFrame);
	      }
	    }]);

	    return Controller;
	  }();

	  function flushUpdateQueue(ctrl, queue) {
	    return _Promise__default["default"].all(_mapInstanceProperty__default["default"](queue).call(queue, function (props) {
	      return flushUpdate(ctrl, props);
	    })).then(function (results) {
	      return getCombinedResult(ctrl, results);
	    });
	  }

	  function flushUpdate(_x2, _x3, _x4) {
	    return _flushUpdate.apply(this, arguments);
	  }

	  function _flushUpdate() {
	    _flushUpdate = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee4(ctrl, props, isLoop) {
	      var _context16;

	      var keys, to, from, loop, onRest, onResolve, defaults, asyncTo, state, promises, cancel, result, nextProps;
	      return _regeneratorRuntime__default["default"].wrap(function _callee4$(_context17) {
	        while (1) {
	          switch (_context17.prev = _context17.next) {
	            case 0:
	              keys = _keysInstanceProperty__default["default"](props), to = props.to, from = props.from, loop = props.loop, onRest = props.onRest, onResolve = props.onResolve;
	              defaults = shared.is.obj(props.default) && props.default;

	              if (loop) {
	                props.loop = false;
	              }

	              if (to === false) props.to = null;
	              if (from === false) props.from = null;
	              asyncTo = shared.is.arr(to) || shared.is.fun(to) ? to : undefined;

	              if (asyncTo) {
	                props.to = undefined;
	                props.onRest = undefined;

	                if (defaults) {
	                  defaults.onRest = undefined;
	                }
	              } else {
	                shared.each(BATCHED_EVENTS, function (key) {
	                  var handler = props[key];

	                  if (shared.is.fun(handler)) {
	                    var queue = ctrl['_events'][key];

	                    props[key] = function (_ref20) {
	                      var finished = _ref20.finished,
	                          cancelled = _ref20.cancelled;
	                      var result = queue.get(handler);

	                      if (result) {
	                        if (!finished) result.finished = false;
	                        if (cancelled) result.cancelled = true;
	                      } else {
	                        queue.set(handler, {
	                          value: null,
	                          finished: finished || false,
	                          cancelled: cancelled || false
	                        });
	                      }
	                    };

	                    if (defaults) {
	                      defaults[key] = props[key];
	                    }
	                  }
	                });
	              }

	              state = ctrl['_state'];

	              if (props.pause === !state.paused) {
	                state.paused = props.pause;
	                shared.flushCalls(props.pause ? state.pauseQueue : state.resumeQueue);
	              } else if (state.paused) {
	                props.pause = true;
	              }

	              promises = _mapInstanceProperty__default["default"](_context16 = keys || _Object$keys__default["default"](ctrl.springs)).call(_context16, function (key) {
	                return ctrl.springs[key].start(props);
	              });
	              cancel = props.cancel === true || getDefaultProp(props, 'cancel') === true;

	              if (asyncTo || cancel && state.asyncId) {
	                promises.push(scheduleProps(++ctrl['_lastAsyncId'], {
	                  props: props,
	                  state: state,
	                  actions: {
	                    pause: shared.noop,
	                    resume: shared.noop,
	                    start: function start(props, resolve) {
	                      if (cancel) {
	                        stopAsync(state, ctrl['_lastAsyncId']);
	                        resolve(getCancelledResult(ctrl));
	                      } else {
	                        props.onRest = onRest;
	                        resolve(runAsync(asyncTo, props, state, ctrl));
	                      }
	                    }
	                  }
	                }));
	              }

	              if (!state.paused) {
	                _context17.next = 15;
	                break;
	              }

	              _context17.next = 15;
	              return new _Promise__default["default"](function (resume) {
	                state.resumeQueue.add(resume);
	              });

	            case 15:
	              _context17.t0 = getCombinedResult;
	              _context17.t1 = ctrl;
	              _context17.next = 19;
	              return _Promise__default["default"].all(promises);

	            case 19:
	              _context17.t2 = _context17.sent;
	              result = (0, _context17.t0)(_context17.t1, _context17.t2);

	              if (!(loop && result.finished && !(isLoop && result.noop))) {
	                _context17.next = 26;
	                break;
	              }

	              nextProps = createLoopUpdate(props, loop, to);

	              if (!nextProps) {
	                _context17.next = 26;
	                break;
	              }

	              prepareKeys(ctrl, [nextProps]);
	              return _context17.abrupt("return", flushUpdate(ctrl, nextProps, true));

	            case 26:
	              if (onResolve) {
	                shared.raf.batchedUpdates(function () {
	                  return onResolve(result, ctrl, ctrl.item);
	                });
	              }

	              return _context17.abrupt("return", result);

	            case 28:
	            case "end":
	              return _context17.stop();
	          }
	        }
	      }, _callee4);
	    }));
	    return _flushUpdate.apply(this, arguments);
	  }

	  function getSprings(ctrl, props) {
	    var springs = _extends({}, ctrl.springs);

	    if (props) {
	      shared.each(shared.toArray(props), function (props) {
	        if (shared.is.und(_keysInstanceProperty__default["default"](props))) {
	          props = createUpdate(props);
	        }

	        if (!shared.is.obj(props.to)) {
	          props = _extends({}, props, {
	            to: undefined
	          });
	        }

	        prepareSprings(springs, props, function (key) {
	          return createSpring(key);
	        });
	      });
	    }

	    setSprings(ctrl, springs);
	    return springs;
	  }

	  function setSprings(ctrl, springs) {
	    shared.eachProp(springs, function (spring, key) {
	      if (!ctrl.springs[key]) {
	        ctrl.springs[key] = spring;
	        shared.addFluidObserver(spring, ctrl);
	      }
	    });
	  }

	  function createSpring(key, observer) {
	    var spring = new SpringValue();
	    spring.key = key;

	    if (observer) {
	      shared.addFluidObserver(spring, observer);
	    }

	    return spring;
	  }

	  function prepareSprings(springs, props, create) {
	    if (_keysInstanceProperty__default["default"](props)) {
	      shared.each(_keysInstanceProperty__default["default"](props), function (key) {
	        var spring = springs[key] || (springs[key] = create(key));
	        spring['_prepareNode'](props);
	      });
	    }
	  }

	  function prepareKeys(ctrl, queue) {
	    shared.each(queue, function (props) {
	      prepareSprings(ctrl.springs, props, function (key) {
	        return createSpring(key, ctrl);
	      });
	    });
	  }

	  function _objectWithoutPropertiesLoose(source, excluded) {
	    if (source == null) return {};
	    var target = {};

	    var sourceKeys = _Object$keys__default["default"](source);

	    var key, i;

	    for (i = 0; i < sourceKeys.length; i++) {
	      key = sourceKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      target[key] = source[key];
	    }

	    return target;
	  }

	  var _excluded$3 = ["children"];

	  var SpringContext = function SpringContext(_ref) {
	    var children = _ref.children,
	        props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

	    var inherited = React.useContext(ctx);
	    var pause = props.pause || !!inherited.pause,
	        immediate = props.immediate || !!inherited.immediate;
	    props = shared.useMemoOne(function () {
	      return {
	        pause: pause,
	        immediate: immediate
	      };
	    }, [pause, immediate]);
	    var Provider = ctx.Provider;
	    return React__namespace.createElement(Provider, {
	      value: props
	    }, children);
	  };

	  var ctx = makeContext(SpringContext, {});
	  SpringContext.Provider = ctx.Provider;
	  SpringContext.Consumer = ctx.Consumer;

	  function makeContext(target, init) {
	    _Object$assign__default["default"](target, React__namespace.createContext(init));

	    target.Provider._context = target;
	    target.Consumer._context = target;
	    return target;
	  }

	  var SpringRef = function SpringRef() {
	    var current = [];

	    var SpringRef = function SpringRef(props) {
	      shared.deprecateDirectCall();
	      var results = [];
	      shared.each(current, function (ctrl, i) {
	        if (shared.is.und(props)) {
	          results.push(ctrl.start());
	        } else {
	          var _update2 = _getProps(props, ctrl, i);

	          if (_update2) {
	            results.push(ctrl.start(_update2));
	          }
	        }
	      });
	      return results;
	    };

	    SpringRef.current = current;

	    SpringRef.add = function (ctrl) {
	      if (!_includesInstanceProperty__default["default"](current).call(current, ctrl)) {
	        current.push(ctrl);
	      }
	    };

	    SpringRef.delete = function (ctrl) {
	      var i = current.indexOf(ctrl);
	      if (~i) _spliceInstanceProperty__default["default"](current).call(current, i, 1);
	    };

	    SpringRef.pause = function () {
	      var _arguments = arguments;
	      shared.each(current, function (ctrl) {
	        return ctrl.pause.apply(ctrl, _toConsumableArray__default["default"](_arguments));
	      });
	      return this;
	    };

	    SpringRef.resume = function () {
	      var _arguments2 = arguments;
	      shared.each(current, function (ctrl) {
	        return ctrl.resume.apply(ctrl, _toConsumableArray__default["default"](_arguments2));
	      });
	      return this;
	    };

	    SpringRef.set = function (values) {
	      shared.each(current, function (ctrl) {
	        return ctrl.set(values);
	      });
	    };

	    SpringRef.start = function (props) {
	      var _this14 = this;

	      var results = [];
	      shared.each(current, function (ctrl, i) {
	        if (shared.is.und(props)) {
	          results.push(ctrl.start());
	        } else {
	          var _update3 = _this14._getProps(props, ctrl, i);

	          if (_update3) {
	            results.push(ctrl.start(_update3));
	          }
	        }
	      });
	      return results;
	    };

	    SpringRef.stop = function () {
	      var _arguments3 = arguments;
	      shared.each(current, function (ctrl) {
	        return ctrl.stop.apply(ctrl, _toConsumableArray__default["default"](_arguments3));
	      });
	      return this;
	    };

	    SpringRef.update = function (props) {
	      var _this15 = this;

	      shared.each(current, function (ctrl, i) {
	        return ctrl.update(_this15._getProps(props, ctrl, i));
	      });
	      return this;
	    };

	    var _getProps = function _getProps(arg, ctrl, index) {
	      return shared.is.fun(arg) ? arg(index, ctrl) : arg;
	    };

	    SpringRef._getProps = _getProps;
	    return SpringRef;
	  };

	  function useSprings(length, props, deps) {
	    var _arguments4 = arguments,
	        _context14;

	    var propsFn = shared.is.fun(props) && props;
	    if (propsFn && !deps) deps = [];
	    var ref = React.useMemo(function () {
	      return propsFn || _arguments4.length == 3 ? SpringRef() : void 0;
	    }, []);
	    var layoutId = React.useRef(0);
	    var forceUpdate = shared.useForceUpdate();
	    var state = React.useMemo(function () {
	      return {
	        ctrls: [],
	        queue: [],
	        flush: function flush(ctrl, updates) {
	          var springs = getSprings(ctrl, updates);
	          var canFlushSync = layoutId.current > 0 && !state.queue.length && !_Object$keys__default["default"](springs).some(function (key) {
	            return !ctrl.springs[key];
	          });
	          return canFlushSync ? flushUpdateQueue(ctrl, updates) : new _Promise__default["default"](function (resolve) {
	            setSprings(ctrl, springs);
	            state.queue.push(function () {
	              resolve(flushUpdateQueue(ctrl, updates));
	            });
	            forceUpdate();
	          });
	        }
	      };
	    }, []);
	    var ctrls = React.useRef(_toConsumableArray__default["default"](state.ctrls));
	    var updates = [];
	    var prevLength = shared.usePrev(length) || 0;
	    React.useMemo(function () {
	      var _context13;

	      shared.each(_sliceInstanceProperty__default["default"](_context13 = ctrls.current).call(_context13, length, prevLength), function (ctrl) {
	        detachRefs(ctrl, ref);
	        ctrl.stop(true);
	      });
	      ctrls.current.length = length;
	      declareUpdates(prevLength, length);
	    }, [length]);
	    React.useMemo(function () {
	      declareUpdates(0, Math.min(prevLength, length));
	    }, deps);

	    function declareUpdates(startIndex, endIndex) {
	      for (var i = startIndex; i < endIndex; i++) {
	        var ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));

	        var _update4 = propsFn ? propsFn(i, ctrl) : props[i];

	        if (_update4) {
	          updates[i] = declareUpdate(_update4);
	        }
	      }
	    }

	    var springs = _mapInstanceProperty__default["default"](_context14 = ctrls.current).call(_context14, function (ctrl, i) {
	      return getSprings(ctrl, updates[i]);
	    });

	    var context = React.useContext(SpringContext);
	    var prevContext = shared.usePrev(context);
	    var hasContext = context !== prevContext && hasProps(context);
	    shared.useLayoutEffect(function () {
	      layoutId.current++;
	      state.ctrls = ctrls.current;
	      var queue = state.queue;

	      if (queue.length) {
	        state.queue = [];
	        shared.each(queue, function (cb) {
	          return cb();
	        });
	      }

	      shared.each(ctrls.current, function (ctrl, i) {
	        ref == null ? void 0 : ref.add(ctrl);

	        if (hasContext) {
	          ctrl.start({
	            default: context
	          });
	        }

	        var update = updates[i];

	        if (update) {
	          replaceRef(ctrl, update.ref);

	          if (ctrl.ref) {
	            ctrl.queue.push(update);
	          } else {
	            ctrl.start(update);
	          }
	        }
	      });
	    });
	    shared.useOnce(function () {
	      return function () {
	        shared.each(state.ctrls, function (ctrl) {
	          return ctrl.stop(true);
	        });
	      };
	    });

	    var values = _mapInstanceProperty__default["default"](springs).call(springs, function (x) {
	      return _extends({}, x);
	    });

	    return ref ? [values, ref] : values;
	  }

	  function useSpring(props, deps) {
	    var isFn = shared.is.fun(props);

	    var _useSprings = useSprings(1, isFn ? props : [props], isFn ? deps || [] : deps),
	        _useSprings2 = _slicedToArray__default["default"](_useSprings, 2),
	        _useSprings2$ = _slicedToArray__default["default"](_useSprings2[0], 1),
	        values = _useSprings2$[0],
	        ref = _useSprings2[1];

	    return isFn || arguments.length == 2 ? [values, ref] : values;
	  }

	  var initSpringRef = function initSpringRef() {
	    return SpringRef();
	  };

	  var useSpringRef = function useSpringRef() {
	    return React.useState(initSpringRef)[0];
	  };

	  function useTrail(length, propsArg, deps) {
	    var propsFn = shared.is.fun(propsArg) && propsArg;
	    if (propsFn && !deps) deps = [];
	    var reverse = true;
	    var result = useSprings(length, function (i, ctrl) {
	      var props = propsFn ? propsFn(i, ctrl) : propsArg;
	      reverse = reverse && _reverseInstanceProperty__default["default"](props);
	      return props;
	    }, deps || [{}]);
	    var ref = result[1];
	    shared.useLayoutEffect(function () {
	      shared.each(ref.current, function (ctrl, i) {
	        var parent = ref.current[i + (reverse ? 1 : -1)];
	        if (parent) ctrl.start({
	          to: parent.springs
	        });
	      });
	    }, deps);

	    if (propsFn || arguments.length == 3) {
	      ref['_getProps'] = function (propsArg, ctrl, i) {
	        var props = shared.is.fun(propsArg) ? propsArg(i, ctrl) : propsArg;

	        if (props) {
	          var parent = ref.current[i + (_reverseInstanceProperty__default["default"](props) ? 1 : -1)];
	          if (parent) props.to = parent.springs;
	          return props;
	        }
	      };

	      return result;
	    }

	    return result[0];
	  }

	  var TransitionPhase;

	  (function (TransitionPhase) {
	    TransitionPhase["MOUNT"] = "mount";
	    TransitionPhase["ENTER"] = "enter";
	    TransitionPhase["UPDATE"] = "update";
	    TransitionPhase["LEAVE"] = "leave";
	  })(TransitionPhase || (TransitionPhase = {}));

	  function useTransition(data, props, deps) {
	    var _arguments5 = arguments;
	    var propsFn = shared.is.fun(props) && props;

	    var _ref14 = propsFn ? propsFn() : props,
	        reset = _ref14.reset,
	        sort = _sortInstanceProperty__default["default"](_ref14),
	        _ref14$trail = _ref14.trail,
	        trail = _ref14$trail === void 0 ? 0 : _ref14$trail,
	        _ref14$expires = _ref14.expires,
	        expires = _ref14$expires === void 0 ? true : _ref14$expires,
	        onDestroyed = _ref14.onDestroyed,
	        propsRef = _ref14.ref,
	        propsConfig = _ref14.config;

	    var ref = React.useMemo(function () {
	      return propsFn || _arguments5.length == 3 ? SpringRef() : void 0;
	    }, []);
	    var items = shared.toArray(data);
	    var transitions = [];
	    var usedTransitions = React.useRef(null);
	    var prevTransitions = reset ? null : usedTransitions.current;
	    shared.useLayoutEffect(function () {
	      usedTransitions.current = transitions;
	    });
	    shared.useOnce(function () {
	      return function () {
	        return shared.each(usedTransitions.current, function (t) {
	          if (t.expired) {
	            clearTimeout(t.expirationId);
	          }

	          detachRefs(t.ctrl, ref);
	          t.ctrl.stop(true);
	        });
	      };
	    });
	    var keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
	    var expired = reset && usedTransitions.current || [];
	    shared.useLayoutEffect(function () {
	      return shared.each(expired, function (_ref15) {
	        var ctrl = _ref15.ctrl,
	            item = _ref15.item,
	            key = _ref15.key;
	        detachRefs(ctrl, ref);
	        callProp(onDestroyed, item, key);
	      });
	    });
	    var reused = [];
	    if (prevTransitions) shared.each(prevTransitions, function (t, i) {
	      if (t.expired) {
	        clearTimeout(t.expirationId);
	        expired.push(t);
	      } else {
	        i = reused[i] = keys.indexOf(t.key);
	        if (~i) transitions[i] = t;
	      }
	    });
	    shared.each(items, function (item, i) {
	      if (!transitions[i]) {
	        transitions[i] = {
	          key: keys[i],
	          item: item,
	          phase: TransitionPhase.MOUNT,
	          ctrl: new Controller()
	        };
	        transitions[i].ctrl.item = item;
	      }
	    });

	    if (reused.length) {
	      var i = -1;

	      var _ref16 = propsFn ? propsFn() : props,
	          leave = _ref16.leave;

	      shared.each(reused, function (keyIndex, prevIndex) {
	        var t = prevTransitions[prevIndex];

	        if (~keyIndex) {
	          i = transitions.indexOf(t);
	          transitions[i] = _extends({}, t, {
	            item: items[keyIndex]
	          });
	        } else if (leave) {
	          _spliceInstanceProperty__default["default"](transitions).call(transitions, ++i, 0, t);
	        }
	      });
	    }

	    if (shared.is.fun(sort)) {
	      _sortInstanceProperty__default["default"](transitions).call(transitions, function (a, b) {
	        return sort(a.item, b.item);
	      });
	    }

	    var delay = -trail;
	    var forceUpdate = shared.useForceUpdate();
	    var defaultProps = getDefaultProps(props);
	    var changes = new _Map__default["default"]();
	    shared.each(transitions, function (t, i) {
	      var key = t.key;
	      var prevPhase = t.phase;
	      var p = propsFn ? propsFn() : props;
	      var to;
	      var phase;
	      var propsDelay = callProp(p.delay || 0, key);

	      if (prevPhase == TransitionPhase.MOUNT) {
	        to = p.enter;
	        phase = TransitionPhase.ENTER;
	      } else {
	        var isLeave = keys.indexOf(key) < 0;

	        if (prevPhase != TransitionPhase.LEAVE) {
	          if (isLeave) {
	            to = p.leave;
	            phase = TransitionPhase.LEAVE;
	          } else if (to = p.update) {
	            phase = TransitionPhase.UPDATE;
	          } else return;
	        } else if (!isLeave) {
	          to = p.enter;
	          phase = TransitionPhase.ENTER;
	        } else return;
	      }

	      to = callProp(to, t.item, i);
	      to = shared.is.obj(to) ? inferTo(to) : {
	        to: to
	      };

	      if (!to.config) {
	        var _config2 = propsConfig || defaultProps.config;

	        to.config = callProp(_config2, t.item, i, phase);
	      }

	      delay += trail;

	      var payload = _extends({}, defaultProps, {
	        delay: propsDelay + delay,
	        ref: propsRef,
	        immediate: p.immediate,
	        reset: false
	      }, to);

	      if (phase == TransitionPhase.ENTER && shared.is.und(payload.from)) {
	        var _p = propsFn ? propsFn() : props;

	        var from = shared.is.und(_p.initial) || prevTransitions ? _p.from : _p.initial;
	        payload.from = callProp(from, t.item, i);
	      }

	      var onResolve = payload.onResolve;

	      payload.onResolve = function (result) {
	        callProp(onResolve, result);
	        var transitions = usedTransitions.current;

	        var t = _findInstanceProperty__default["default"](transitions).call(transitions, function (t) {
	          return t.key === key;
	        });

	        if (!t) return;

	        if (result.cancelled && t.phase != TransitionPhase.UPDATE) {
	          return;
	        }

	        if (t.ctrl.idle) {
	          var idle = transitions.every(function (t) {
	            return t.ctrl.idle;
	          });

	          if (t.phase == TransitionPhase.LEAVE) {
	            var expiry = callProp(expires, t.item);

	            if (expiry !== false) {
	              var expiryMs = expiry === true ? 0 : expiry;
	              t.expired = true;

	              if (!idle && expiryMs > 0) {
	                if (expiryMs <= 0x7fffffff) t.expirationId = setTimeout(forceUpdate, expiryMs);
	                return;
	              }
	            }
	          }

	          if (idle && transitions.some(function (t) {
	            return t.expired;
	          })) {
	            forceUpdate();
	          }
	        }
	      };

	      var springs = getSprings(t.ctrl, payload);
	      changes.set(t, {
	        phase: phase,
	        springs: springs,
	        payload: payload
	      });
	    });
	    var context = React.useContext(SpringContext);
	    var prevContext = shared.usePrev(context);
	    var hasContext = context !== prevContext && hasProps(context);
	    shared.useLayoutEffect(function () {
	      if (hasContext) shared.each(transitions, function (t) {
	        t.ctrl.start({
	          default: context
	        });
	      });
	    }, [context]);
	    shared.useLayoutEffect(function () {
	      shared.each(changes, function (_ref17, t) {
	        var phase = _ref17.phase,
	            payload = _ref17.payload;
	        var ctrl = t.ctrl;
	        t.phase = phase;
	        ref == null ? void 0 : ref.add(ctrl);

	        if (hasContext && phase == TransitionPhase.ENTER) {
	          ctrl.start({
	            default: context
	          });
	        }

	        if (payload) {
	          replaceRef(ctrl, payload.ref);

	          if (ctrl.ref) {
	            ctrl.update(payload);
	          } else {
	            ctrl.start(payload);
	          }
	        }
	      });
	    }, reset ? void 0 : deps);

	    var renderTransitions = function renderTransitions(render) {
	      return React__namespace.createElement(React__namespace.Fragment, null, _mapInstanceProperty__default["default"](transitions).call(transitions, function (t, i) {
	        var _ref18 = changes.get(t) || t.ctrl,
	            springs = _ref18.springs;

	        var elem = render(_extends({}, springs), t.item, t, i);
	        return elem && elem.type ? React__namespace.createElement(elem.type, _extends({}, elem.props, {
	          key: shared.is.str(t.key) || shared.is.num(t.key) ? t.key : t.ctrl.id,
	          ref: elem.ref
	        })) : elem;
	      }));
	    };

	    return ref ? [renderTransitions, ref] : renderTransitions;
	  }

	  var nextKey = 1;

	  function getKeys(items, _ref19, prevTransitions) {
	    var key = _ref19.key,
	        _ref19$keys = _keysInstanceProperty__default["default"](_ref19),
	        keys = _ref19$keys === void 0 ? key : _ref19$keys;

	    if (keys === null) {
	      var reused = new _Set__default["default"]();
	      return _mapInstanceProperty__default["default"](items).call(items, function (item) {
	        var t = prevTransitions && _findInstanceProperty__default["default"](prevTransitions).call(prevTransitions, function (t) {
	          return t.item === item && t.phase !== TransitionPhase.LEAVE && !reused.has(t);
	        });

	        if (t) {
	          reused.add(t);
	          return t.key;
	        }

	        return nextKey++;
	      });
	    }

	    return shared.is.und(keys) ? items : shared.is.fun(keys) ? _mapInstanceProperty__default["default"](items).call(items, keys) : shared.toArray(keys);
	  }

	  var _excluded$2 = ["children"];

	  function Spring(_ref) {
	    var children = _ref.children,
	        props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

	    return children(useSpring(props));
	  }

	  var _excluded$1 = ["items", "children"];

	  function Trail(_ref) {
	    var items = _ref.items,
	        children = _ref.children,
	        props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

	    var trails = useTrail(items.length, props);
	    return _mapInstanceProperty__default["default"](items).call(items, function (item, index) {
	      var result = children(item, index);
	      return shared.is.fun(result) ? result(trails[index]) : result;
	    });
	  }

	  var _excluded = ["items", "children"];

	  function Transition(_ref) {
	    var items = _ref.items,
	        children = _ref.children,
	        props = _objectWithoutPropertiesLoose(_ref, _excluded);

	    return useTransition(items, props)(children);
	  }

	  var Interpolation = /*#__PURE__*/function (_FrameValue2) {
	    _inherits__default["default"](Interpolation, _FrameValue2);

	    var _super5 = _createSuper$1(Interpolation);

	    function Interpolation(source, args) {
	      var _this16;

	      _classCallCheck__default["default"](this, Interpolation);

	      _this16 = _super5.call(this);
	      _this16.key = void 0;
	      _this16.idle = true;
	      _this16.calc = void 0;
	      _this16._active = new _Set__default["default"]();
	      _this16.source = source;
	      _this16.calc = shared.createInterpolator.apply(shared, _toConsumableArray__default["default"](args));

	      var value = _this16._get();

	      var nodeType = animated$1.getAnimatedType(value);
	      animated$1.setAnimated(_assertThisInitialized__default["default"](_this16), nodeType.create(value));
	      return _this16;
	    }

	    _createClass__default["default"](Interpolation, [{
	      key: "advance",
	      value: function advance(_dt) {
	        var value = this._get();

	        var oldValue = this.get();

	        if (!shared.isEqual(value, oldValue)) {
	          animated$1.getAnimated(this).setValue(value);

	          this._onChange(value, this.idle);
	        }

	        if (!this.idle && checkIdle(this._active)) {
	          becomeIdle(this);
	        }
	      }
	    }, {
	      key: "_get",
	      value: function _get() {
	        var _context15;

	        var inputs = shared.is.arr(this.source) ? _mapInstanceProperty__default["default"](_context15 = this.source).call(_context15, shared.getFluidValue) : shared.toArray(shared.getFluidValue(this.source));
	        return this.calc.apply(this, _toConsumableArray__default["default"](inputs));
	      }
	    }, {
	      key: "_start",
	      value: function _start() {
	        var _this17 = this;

	        if (this.idle && !checkIdle(this._active)) {
	          this.idle = false;
	          shared.each(animated$1.getPayload(this), function (node) {
	            node.done = false;
	          });

	          if (shared.Globals.skipAnimation) {
	            shared.raf.batchedUpdates(function () {
	              return _this17.advance();
	            });
	            becomeIdle(this);
	          } else {
	            shared.frameLoop.start(this);
	          }
	        }
	      }
	    }, {
	      key: "_attach",
	      value: function _attach() {
	        var _this18 = this;

	        var priority = 1;
	        shared.each(shared.toArray(this.source), function (source) {
	          if (shared.hasFluidValue(source)) {
	            shared.addFluidObserver(source, _this18);
	          }

	          if (isFrameValue(source)) {
	            if (!source.idle) {
	              _this18._active.add(source);
	            }

	            priority = Math.max(priority, source.priority + 1);
	          }
	        });
	        this.priority = priority;

	        this._start();
	      }
	    }, {
	      key: "_detach",
	      value: function _detach() {
	        var _this19 = this;

	        shared.each(shared.toArray(this.source), function (source) {
	          if (shared.hasFluidValue(source)) {
	            shared.removeFluidObserver(source, _this19);
	          }
	        });

	        this._active.clear();

	        becomeIdle(this);
	      }
	    }, {
	      key: "eventObserved",
	      value: function eventObserved(event) {
	        if (event.type == 'change') {
	          if (event.idle) {
	            this.advance();
	          } else {
	            this._active.add(event.parent);

	            this._start();
	          }
	        } else if (event.type == 'idle') {
	          this._active.delete(event.parent);
	        } else if (event.type == 'priority') {
	          this.priority = shared.toArray(this.source).reduce(function (highest, parent) {
	            return Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1);
	          }, 0);
	        }
	      }
	    }]);

	    return Interpolation;
	  }(FrameValue);

	  function isIdle(source) {
	    return source.idle !== false;
	  }

	  function checkIdle(active) {
	    return !active.size || _Array$from__default["default"](active).every(isIdle);
	  }

	  function becomeIdle(self) {
	    if (!self.idle) {
	      self.idle = true;
	      shared.each(animated$1.getPayload(self), function (node) {
	        node.done = true;
	      });
	      shared.callFluidObservers(self, {
	        type: 'idle',
	        parent: self
	      });
	    }
	  }

	  var to = function to(source) {
	    for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
	      args[_key6 - 1] = arguments[_key6];
	    }

	    return new Interpolation(source, args);
	  };

	  var interpolate = function interpolate(source) {
	    for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
	      args[_key7 - 1] = arguments[_key7];
	    }

	    return shared.deprecateInterpolate(), new Interpolation(source, args);
	  };

	  shared.Globals.assign({
	    createStringInterpolator: shared.createStringInterpolator,
	    to: function to(source, args) {
	      return new Interpolation(source, args);
	    }
	  });
	  var update = shared.frameLoop.advance;
	  Object.defineProperty(exports, 'Globals', {
	    enumerable: true,
	    get: function get() {
	      return shared.Globals;
	    }
	  });
	  Object.defineProperty(exports, 'createInterpolator', {
	    enumerable: true,
	    get: function get() {
	      return shared.createInterpolator;
	    }
	  });
	  exports.BailSignal = BailSignal;
	  exports.Controller = Controller;
	  exports.FrameValue = FrameValue;
	  exports.Interpolation = Interpolation;
	  exports.Spring = Spring;
	  exports.SpringContext = SpringContext;
	  exports.SpringRef = SpringRef;
	  exports.SpringValue = SpringValue;
	  exports.Trail = Trail;
	  exports.Transition = Transition;
	  exports.config = config;
	  exports.inferTo = inferTo;
	  exports.interpolate = interpolate;
	  exports.to = to;
	  exports.update = update;
	  exports.useChain = useChain;
	  exports.useSpring = useSpring;
	  exports.useSpringRef = useSpringRef;
	  exports.useSprings = useSprings;
	  exports.useTrail = useTrail;
	  exports.useTransition = useTransition;

	  _Object$keys__default["default"](animated).forEach(function (k) {
	    if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
	      enumerable: true,
	      get: function get() {
	        return animated[k];
	      }
	    });
	  });

	  _Object$keys__default["default"](interpolation).forEach(function (k) {
	    if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
	      enumerable: true,
	      get: function get() {
	        return interpolation[k];
	      }
	    });
	  });
	})(reactSpringCore_cjs_prod);

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = _Reflect$construct__default["default"](Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct__default["default"]) return false; if (_Reflect$construct__default["default"].sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct__default["default"](Boolean, [], function () {})); return true; } catch (e) { return false; } }

	(function (exports) {

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });
	  var core = reactSpringCore_cjs_prod;
	  var reactDom = require$$1__default$1["default"];
	  var shared = reactSpringShared_cjs_prod;
	  var animated$1 = reactSpringAnimated_cjs_prod;

	  function _objectWithoutPropertiesLoose(source, excluded) {
	    if (source == null) return {};
	    var target = {};

	    var sourceKeys = _Object$keys__default["default"](source);

	    var key, i;

	    for (i = 0; i < sourceKeys.length; i++) {
	      key = sourceKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      target[key] = source[key];
	    }

	    return target;
	  }

	  var _excluded$2 = ["style", "children", "scrollTop", "scrollLeft"];
	  var isCustomPropRE = /^--/;

	  function dangerousStyleValue(name, value) {
	    var _context;

	    if (value == null || typeof value === 'boolean' || value === '') return '';
	    if (typeof value === 'number' && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px';
	    return _trimInstanceProperty__default["default"](_context = '' + value).call(_context);
	  }

	  var attributeCache = {};

	  function applyAnimatedValues(instance, props) {
	    var _context2;

	    if (!instance.nodeType || !instance.setAttribute) {
	      return false;
	    }

	    var isFilterElement = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';

	    var _ref = props,
	        style = _ref.style,
	        children = _ref.children,
	        scrollTop = _ref.scrollTop,
	        scrollLeft = _ref.scrollLeft,
	        attributes = _objectWithoutPropertiesLoose(_ref, _excluded$2);

	    var values = _Object$values__default["default"](attributes);

	    var names = _mapInstanceProperty__default["default"](_context2 = _Object$keys__default["default"](attributes)).call(_context2, function (name) {
	      return isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, function (n) {
	        return '-' + n.toLowerCase();
	      }));
	    });

	    if (children !== void 0) {
	      instance.textContent = children;
	    }

	    for (var name in style) {
	      if (style.hasOwnProperty(name)) {
	        var value = dangerousStyleValue(name, style[name]);

	        if (isCustomPropRE.test(name)) {
	          instance.style.setProperty(name, value);
	        } else {
	          instance.style[name] = value;
	        }
	      }
	    }

	    names.forEach(function (name, i) {
	      instance.setAttribute(name, values[i]);
	    });

	    if (scrollTop !== void 0) {
	      instance.scrollTop = scrollTop;
	    }

	    if (scrollLeft !== void 0) {
	      instance.scrollLeft = scrollLeft;
	    }
	  }

	  var isUnitlessNumber = {
	    animationIterationCount: true,
	    borderImageOutset: true,
	    borderImageSlice: true,
	    borderImageWidth: true,
	    boxFlex: true,
	    boxFlexGroup: true,
	    boxOrdinalGroup: true,
	    columnCount: true,
	    columns: true,
	    flex: true,
	    flexGrow: true,
	    flexPositive: true,
	    flexShrink: true,
	    flexNegative: true,
	    flexOrder: true,
	    gridRow: true,
	    gridRowEnd: true,
	    gridRowSpan: true,
	    gridRowStart: true,
	    gridColumn: true,
	    gridColumnEnd: true,
	    gridColumnSpan: true,
	    gridColumnStart: true,
	    fontWeight: true,
	    lineClamp: true,
	    lineHeight: true,
	    opacity: true,
	    order: true,
	    orphans: true,
	    tabSize: true,
	    widows: true,
	    zIndex: true,
	    zoom: true,
	    fillOpacity: true,
	    floodOpacity: true,
	    stopOpacity: true,
	    strokeDasharray: true,
	    strokeDashoffset: true,
	    strokeMiterlimit: true,
	    strokeOpacity: true,
	    strokeWidth: true
	  };

	  var prefixKey = function prefixKey(prefix, key) {
	    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	  };

	  var prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
	  isUnitlessNumber = _Object$keys__default["default"](isUnitlessNumber).reduce(function (acc, prop) {
	    prefixes.forEach(function (prefix) {
	      return acc[prefixKey(prefix, prop)] = acc[prop];
	    });
	    return acc;
	  }, isUnitlessNumber);
	  var _excluded$1 = ["x", "y", "z"];
	  var domTransforms = /^(matrix|translate|scale|rotate|skew)/;
	  var pxTransforms = /^(translate)/;
	  var degTransforms = /^(rotate|skew)/;

	  var addUnit = function addUnit(value, unit) {
	    return shared.is.num(value) && value !== 0 ? value + unit : value;
	  };

	  var isValueIdentity = function isValueIdentity(value, id) {
	    return shared.is.arr(value) ? value.every(function (v) {
	      return isValueIdentity(v, id);
	    }) : shared.is.num(value) ? value === id : parseFloat(value) === id;
	  };

	  var AnimatedStyle = /*#__PURE__*/function (_animated$1$AnimatedO) {
	    _inherits__default["default"](AnimatedStyle, _animated$1$AnimatedO);

	    var _super = _createSuper(AnimatedStyle);

	    function AnimatedStyle(_ref) {
	      _classCallCheck__default["default"](this, AnimatedStyle);

	      var x = _ref.x,
	          y = _ref.y,
	          z = _ref.z,
	          style = _objectWithoutPropertiesLoose(_ref, _excluded$1);

	      var inputs = [];
	      var transforms = [];

	      if (x || y || z) {
	        inputs.push([x || 0, y || 0, z || 0]);
	        transforms.push(function (xyz) {
	          return ["translate3d(".concat(_mapInstanceProperty__default["default"](xyz).call(xyz, function (v) {
	            return addUnit(v, 'px');
	          }).join(','), ")"), isValueIdentity(xyz, 0)];
	        });
	      }

	      shared.eachProp(style, function (value, key) {
	        if (key === 'transform') {
	          inputs.push([value || '']);
	          transforms.push(function (transform) {
	            return [transform, transform === ''];
	          });
	        } else if (domTransforms.test(key)) {
	          delete style[key];
	          if (shared.is.und(value)) return;
	          var unit = pxTransforms.test(key) ? 'px' : degTransforms.test(key) ? 'deg' : '';
	          inputs.push(shared.toArray(value));
	          transforms.push(key === 'rotate3d' ? function (_ref2) {
	            var _context3, _context4, _context5;

	            var _ref3 = _slicedToArray__default["default"](_ref2, 4),
	                x = _ref3[0],
	                y = _ref3[1],
	                z = _ref3[2],
	                deg = _ref3[3];

	            return [_concatInstanceProperty__default["default"](_context3 = _concatInstanceProperty__default["default"](_context4 = _concatInstanceProperty__default["default"](_context5 = "rotate3d(".concat(x, ",")).call(_context5, y, ",")).call(_context4, z, ",")).call(_context3, addUnit(deg, unit), ")"), isValueIdentity(deg, 0)];
	          } : function (input) {
	            var _context6;

	            return [_concatInstanceProperty__default["default"](_context6 = "".concat(key, "(")).call(_context6, _mapInstanceProperty__default["default"](input).call(input, function (v) {
	              return addUnit(v, unit);
	            }).join(','), ")"), isValueIdentity(input, _startsWithInstanceProperty__default["default"](key).call(key, 'scale') ? 1 : 0)];
	          });
	        }
	      });

	      if (inputs.length) {
	        style.transform = new FluidTransform(inputs, transforms);
	      }

	      return _super.call(this, style);
	    }

	    return _createClass__default["default"](AnimatedStyle);
	  }(animated$1.AnimatedObject);

	  var FluidTransform = /*#__PURE__*/function (_shared$FluidValue) {
	    _inherits__default["default"](FluidTransform, _shared$FluidValue);

	    var _super2 = _createSuper(FluidTransform);

	    function FluidTransform(inputs, transforms) {
	      var _this;

	      _classCallCheck__default["default"](this, FluidTransform);

	      _this = _super2.call(this);
	      _this._value = null;
	      _this.inputs = inputs;
	      _this.transforms = transforms;
	      return _this;
	    }

	    _createClass__default["default"](FluidTransform, [{
	      key: "get",
	      value: function get() {
	        return this._value || (this._value = this._get());
	      }
	    }, {
	      key: "_get",
	      value: function _get() {
	        var _this2 = this;

	        var transform = '';
	        var identity = true;
	        shared.each(this.inputs, function (input, i) {
	          var arg1 = shared.getFluidValue(input[0]);

	          var _this2$transforms$i = _this2.transforms[i](shared.is.arr(arg1) ? arg1 : _mapInstanceProperty__default["default"](input).call(input, shared.getFluidValue)),
	              _this2$transforms$i2 = _slicedToArray__default["default"](_this2$transforms$i, 2),
	              t = _this2$transforms$i2[0],
	              id = _this2$transforms$i2[1];

	          transform += ' ' + t;
	          identity = identity && id;
	        });
	        return identity ? 'none' : transform;
	      }
	    }, {
	      key: "observerAdded",
	      value: function observerAdded(count) {
	        var _this3 = this;

	        if (count == 1) shared.each(this.inputs, function (input) {
	          return shared.each(input, function (value) {
	            return shared.hasFluidValue(value) && shared.addFluidObserver(value, _this3);
	          });
	        });
	      }
	    }, {
	      key: "observerRemoved",
	      value: function observerRemoved(count) {
	        var _this4 = this;

	        if (count == 0) shared.each(this.inputs, function (input) {
	          return shared.each(input, function (value) {
	            return shared.hasFluidValue(value) && shared.removeFluidObserver(value, _this4);
	          });
	        });
	      }
	    }, {
	      key: "eventObserved",
	      value: function eventObserved(event) {
	        if (event.type == 'change') {
	          this._value = null;
	        }

	        shared.callFluidObservers(this, event);
	      }
	    }]);

	    return FluidTransform;
	  }(shared.FluidValue);

	  var primitives = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
	  var _excluded = ["scrollTop", "scrollLeft"];
	  core.Globals.assign({
	    batchedUpdates: reactDom.unstable_batchedUpdates,
	    createStringInterpolator: shared.createStringInterpolator,
	    colors: shared.colors
	  });
	  var host = animated$1.createHost(primitives, {
	    applyAnimatedValues: applyAnimatedValues,
	    createAnimatedStyle: function createAnimatedStyle(style) {
	      return new AnimatedStyle(style);
	    },
	    getComponentProps: function getComponentProps(_ref) {
	      var props = _objectWithoutPropertiesLoose(_ref, _excluded);

	      return props;
	    }
	  });
	  var animated = host.animated;
	  exports.a = animated;
	  exports.animated = animated;

	  _Object$keys__default["default"](core).forEach(function (k) {
	    if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
	      enumerable: true,
	      get: function get() {
	        return core[k];
	      }
	    });
	  });
	})(reactSpringWeb_cjs_prod);

	exports.animated = reactSpringWeb_cjs_prod.animated;
	exports.useSpring = reactSpringWeb_cjs_prod.useSpring;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
