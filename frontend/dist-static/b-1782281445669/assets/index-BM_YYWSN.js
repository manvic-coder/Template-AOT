var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var REACT_ELEMENT_TYPE$2 = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE$2 = Symbol.for("react.fragment");
function jsxProd(type, config3, maybeKey) {
  var key = null;
  void 0 !== maybeKey && (key = "" + maybeKey);
  void 0 !== config3.key && (key = "" + config3.key);
  if ("key" in config3) {
    maybeKey = {};
    for (var propName in config3)
      "key" !== propName && (maybeKey[propName] = config3[propName]);
  } else maybeKey = config3;
  config3 = maybeKey.ref;
  return {
    $$typeof: REACT_ELEMENT_TYPE$2,
    type,
    key,
    ref: void 0 !== config3 ? config3 : null,
    props: maybeKey
  };
}
reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE$2;
reactJsxRuntime_production.jsx = jsxProd;
reactJsxRuntime_production.jsxs = jsxProd;
{
  jsxRuntime.exports = reactJsxRuntime_production;
}
var jsxRuntimeExports = jsxRuntime.exports;
var react = { exports: {} };
var react_production = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var REACT_ELEMENT_TYPE$1 = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE$2 = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE$1 = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE$1 = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE$1 = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE$1 = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE$1 = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE$1 = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE$1 = Symbol.for("react.suspense"), REACT_MEMO_TYPE$1 = Symbol.for("react.memo"), REACT_LAZY_TYPE$1 = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE$1 = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL$1 = Symbol.iterator;
function getIteratorFn$1(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable = MAYBE_ITERATOR_SYMBOL$1 && maybeIterable[MAYBE_ITERATOR_SYMBOL$1] || maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
var ReactNoopUpdateQueue = {
  isMounted: function() {
    return false;
  },
  enqueueForceUpdate: function() {
  },
  enqueueReplaceState: function() {
  },
  enqueueSetState: function() {
  }
}, assign$1 = Object.assign, emptyObject = {};
function Component(props, context3, updater) {
  this.props = props;
  this.context = context3;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
Component.prototype.isReactComponent = {};
Component.prototype.setState = function(partialState, callback) {
  if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, partialState, callback, "setState");
};
Component.prototype.forceUpdate = function(callback) {
  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
};
function ComponentDummy() {
}
ComponentDummy.prototype = Component.prototype;
function PureComponent(props, context3, updater) {
  this.props = props;
  this.context = context3;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
assign$1(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;
var isArrayImpl$1 = Array.isArray;
function noop$3() {
}
var ReactSharedInternals$2 = { H: null, A: null, T: null, S: null }, hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function ReactElement(type, key, props) {
  var refProp = props.ref;
  return {
    $$typeof: REACT_ELEMENT_TYPE$1,
    type,
    key,
    ref: void 0 !== refProp ? refProp : null,
    props
  };
}
function cloneAndReplaceKey(oldElement, newKey) {
  return ReactElement(oldElement.type, newKey, oldElement.props);
}
function isValidElement(object) {
  return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE$1;
}
function escape(key) {
  var escaperLookup = { "=": "=0", ":": "=2" };
  return "$" + key.replace(/[=:]/g, function(match) {
    return escaperLookup[match];
  });
}
var userProvidedKeyEscapeRegex = /\/+/g;
function getElementKey(element, index2) {
  return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index2.toString(36);
}
function resolveThenable(thenable) {
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw thenable.reason;
    default:
      switch ("string" === typeof thenable.status ? thenable.then(noop$3, noop$3) : (thenable.status = "pending", thenable.then(
        function(fulfilledValue) {
          "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
        },
        function(error) {
          "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
        }
      )), thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
      }
  }
  throw thenable;
}
function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;
  if ("undefined" === type || "boolean" === type) children = null;
  var invokeCallback = false;
  if (null === children) invokeCallback = true;
  else
    switch (type) {
      case "bigint":
      case "string":
      case "number":
        invokeCallback = true;
        break;
      case "object":
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE$1:
          case REACT_PORTAL_TYPE$2:
            invokeCallback = true;
            break;
          case REACT_LAZY_TYPE$1:
            return invokeCallback = children._init, mapIntoArray(
              invokeCallback(children._payload),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
        }
    }
  if (invokeCallback)
    return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl$1(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
      return c;
    })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(
      callback,
      escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(
        userProvidedKeyEscapeRegex,
        "$&/"
      ) + "/") + invokeCallback
    )), array.push(callback)), 1;
  invokeCallback = 0;
  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
  if (isArrayImpl$1(children))
    for (var i = 0; i < children.length; i++)
      nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
        nameSoFar,
        array,
        escapedPrefix,
        type,
        callback
      );
  else if (i = getIteratorFn$1(children), "function" === typeof i)
    for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
      nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
        nameSoFar,
        array,
        escapedPrefix,
        type,
        callback
      );
  else if ("object" === type) {
    if ("function" === typeof children.then)
      return mapIntoArray(
        resolveThenable(children),
        array,
        escapedPrefix,
        nameSoFar,
        callback
      );
    array = String(children);
    throw Error(
      "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
    );
  }
  return invokeCallback;
}
function mapChildren(children, func, context3) {
  if (null == children) return children;
  var result = [], count = 0;
  mapIntoArray(children, result, "", "", function(child) {
    return func.call(context3, child, count++);
  });
  return result;
}
function lazyInitializer(payload) {
  if (-1 === payload._status) {
    var ctor = payload._result;
    ctor = ctor();
    ctor.then(
      function(moduleObject) {
        if (0 === payload._status || -1 === payload._status)
          payload._status = 1, payload._result = moduleObject;
      },
      function(error) {
        if (0 === payload._status || -1 === payload._status)
          payload._status = 2, payload._result = error;
      }
    );
    -1 === payload._status && (payload._status = 0, payload._result = ctor);
  }
  if (1 === payload._status) return payload._result.default;
  throw payload._result;
}
var reportGlobalError$1 = "function" === typeof reportError ? reportError : function(error) {
  if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
    var event = new window.ErrorEvent("error", {
      bubbles: true,
      cancelable: true,
      message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
      error
    });
    if (!window.dispatchEvent(event)) return;
  } else if ("object" === typeof process && "function" === typeof process.emit) {
    process.emit("uncaughtException", error);
    return;
  }
  console.error(error);
}, Children = {
  map: mapChildren,
  forEach: function(children, forEachFunc, forEachContext) {
    mapChildren(
      children,
      function() {
        forEachFunc.apply(this, arguments);
      },
      forEachContext
    );
  },
  count: function(children) {
    var n = 0;
    mapChildren(children, function() {
      n++;
    });
    return n;
  },
  toArray: function(children) {
    return mapChildren(children, function(child) {
      return child;
    }) || [];
  },
  only: function(children) {
    if (!isValidElement(children))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return children;
  }
};
react_production.Activity = REACT_ACTIVITY_TYPE$1;
react_production.Children = Children;
react_production.Component = Component;
react_production.Fragment = REACT_FRAGMENT_TYPE$1;
react_production.Profiler = REACT_PROFILER_TYPE$1;
react_production.PureComponent = PureComponent;
react_production.StrictMode = REACT_STRICT_MODE_TYPE$1;
react_production.Suspense = REACT_SUSPENSE_TYPE$1;
react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals$2;
react_production.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function(size) {
    return ReactSharedInternals$2.H.useMemoCache(size);
  }
};
react_production.cache = function(fn) {
  return function() {
    return fn.apply(null, arguments);
  };
};
react_production.cacheSignal = function() {
  return null;
};
react_production.cloneElement = function(element, config3, children) {
  if (null === element || void 0 === element)
    throw Error(
      "The argument must be a React element, but you passed " + element + "."
    );
  var props = assign$1({}, element.props), key = element.key;
  if (null != config3)
    for (propName in void 0 !== config3.key && (key = "" + config3.key), config3)
      !hasOwnProperty$1.call(config3, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config3.ref || (props[propName] = config3[propName]);
  var propName = arguments.length - 2;
  if (1 === propName) props.children = children;
  else if (1 < propName) {
    for (var childArray = Array(propName), i = 0; i < propName; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  return ReactElement(element.type, key, props);
};
react_production.createContext = function(defaultValue) {
  defaultValue = {
    $$typeof: REACT_CONTEXT_TYPE$1,
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  defaultValue.Provider = defaultValue;
  defaultValue.Consumer = {
    $$typeof: REACT_CONSUMER_TYPE$1,
    _context: defaultValue
  };
  return defaultValue;
};
react_production.createElement = function(type, config3, children) {
  var propName, props = {}, key = null;
  if (null != config3)
    for (propName in void 0 !== config3.key && (key = "" + config3.key), config3)
      hasOwnProperty$1.call(config3, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config3[propName]);
  var childrenLength = arguments.length - 2;
  if (1 === childrenLength) props.children = children;
  else if (1 < childrenLength) {
    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  if (type && type.defaultProps)
    for (propName in childrenLength = type.defaultProps, childrenLength)
      void 0 === props[propName] && (props[propName] = childrenLength[propName]);
  return ReactElement(type, key, props);
};
react_production.createRef = function() {
  return { current: null };
};
react_production.forwardRef = function(render3) {
  return { $$typeof: REACT_FORWARD_REF_TYPE$1, render: render3 };
};
react_production.isValidElement = isValidElement;
react_production.lazy = function(ctor) {
  return {
    $$typeof: REACT_LAZY_TYPE$1,
    _payload: { _status: -1, _result: ctor },
    _init: lazyInitializer
  };
};
react_production.memo = function(type, compare) {
  return {
    $$typeof: REACT_MEMO_TYPE$1,
    type,
    compare: void 0 === compare ? null : compare
  };
};
react_production.startTransition = function(scope) {
  var prevTransition = ReactSharedInternals$2.T, currentTransition = {};
  ReactSharedInternals$2.T = currentTransition;
  try {
    var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals$2.S;
    null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
    "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop$3, reportGlobalError$1);
  } catch (error) {
    reportGlobalError$1(error);
  } finally {
    null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals$2.T = prevTransition;
  }
};
react_production.unstable_useCacheRefresh = function() {
  return ReactSharedInternals$2.H.useCacheRefresh();
};
react_production.use = function(usable) {
  return ReactSharedInternals$2.H.use(usable);
};
react_production.useActionState = function(action, initialState, permalink) {
  return ReactSharedInternals$2.H.useActionState(action, initialState, permalink);
};
react_production.useCallback = function(callback, deps) {
  return ReactSharedInternals$2.H.useCallback(callback, deps);
};
react_production.useContext = function(Context2) {
  return ReactSharedInternals$2.H.useContext(Context2);
};
react_production.useDebugValue = function() {
};
react_production.useDeferredValue = function(value, initialValue) {
  return ReactSharedInternals$2.H.useDeferredValue(value, initialValue);
};
react_production.useEffect = function(create, deps) {
  return ReactSharedInternals$2.H.useEffect(create, deps);
};
react_production.useEffectEvent = function(callback) {
  return ReactSharedInternals$2.H.useEffectEvent(callback);
};
react_production.useId = function() {
  return ReactSharedInternals$2.H.useId();
};
react_production.useImperativeHandle = function(ref2, create, deps) {
  return ReactSharedInternals$2.H.useImperativeHandle(ref2, create, deps);
};
react_production.useInsertionEffect = function(create, deps) {
  return ReactSharedInternals$2.H.useInsertionEffect(create, deps);
};
react_production.useLayoutEffect = function(create, deps) {
  return ReactSharedInternals$2.H.useLayoutEffect(create, deps);
};
react_production.useMemo = function(create, deps) {
  return ReactSharedInternals$2.H.useMemo(create, deps);
};
react_production.useOptimistic = function(passthrough, reducer) {
  return ReactSharedInternals$2.H.useOptimistic(passthrough, reducer);
};
react_production.useReducer = function(reducer, initialArg, init4) {
  return ReactSharedInternals$2.H.useReducer(reducer, initialArg, init4);
};
react_production.useRef = function(initialValue) {
  return ReactSharedInternals$2.H.useRef(initialValue);
};
react_production.useState = function(initialState) {
  return ReactSharedInternals$2.H.useState(initialState);
};
react_production.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
  return ReactSharedInternals$2.H.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
};
react_production.useTransition = function() {
  return ReactSharedInternals$2.H.useTransition();
};
react_production.version = "19.2.7";
{
  react.exports = react_production;
}
var reactExports = react.exports;
const React$2 = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
var client = { exports: {} };
var reactDomClient_production = {};
var scheduler = { exports: {} };
var scheduler_production = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function push2(heap, node) {
    var index2 = heap.length;
    heap.push(node);
    a: for (; 0 < index2; ) {
      var parentIndex = index2 - 1 >>> 1, parent = heap[parentIndex];
      if (0 < compare(parent, node))
        heap[parentIndex] = node, heap[index2] = parent, index2 = parentIndex;
      else break a;
    }
  }
  function peek(heap) {
    return 0 === heap.length ? null : heap[0];
  }
  function pop2(heap) {
    if (0 === heap.length) return null;
    var first = heap[0], last = heap.pop();
    if (last !== first) {
      heap[0] = last;
      a: for (var index2 = 0, length = heap.length, halfLength = length >>> 1; index2 < halfLength; ) {
        var leftIndex = 2 * (index2 + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
        if (0 > compare(left, last))
          rightIndex < length && 0 > compare(right, left) ? (heap[index2] = right, heap[rightIndex] = last, index2 = rightIndex) : (heap[index2] = left, heap[leftIndex] = last, index2 = leftIndex);
        else if (rightIndex < length && 0 > compare(right, last))
          heap[index2] = right, heap[rightIndex] = last, index2 = rightIndex;
        else break a;
      }
    }
    return first;
  }
  function compare(a, b) {
    var diff = a.sortIndex - b.sortIndex;
    return 0 !== diff ? diff : a.id - b.id;
  }
  exports.unstable_now = void 0;
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var localPerformance = performance;
    exports.unstable_now = function() {
      return localPerformance.now();
    };
  } else {
    var localDate = Date, initialTime = localDate.now();
    exports.unstable_now = function() {
      return localDate.now() - initialTime;
    };
  }
  var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = false, isHostCallbackScheduled = false, isHostTimeoutScheduled = false, needsPaint = false, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
  function advanceTimers(currentTime) {
    for (var timer = peek(timerQueue); null !== timer; ) {
      if (null === timer.callback) pop2(timerQueue);
      else if (timer.startTime <= currentTime)
        pop2(timerQueue), timer.sortIndex = timer.expirationTime, push2(taskQueue, timer);
      else break;
      timer = peek(timerQueue);
    }
  }
  function handleTimeout(currentTime) {
    isHostTimeoutScheduled = false;
    advanceTimers(currentTime);
    if (!isHostCallbackScheduled)
      if (null !== peek(taskQueue))
        isHostCallbackScheduled = true, isMessageLoopRunning || (isMessageLoopRunning = true, schedulePerformWorkUntilDeadline());
      else {
        var firstTimer = peek(timerQueue);
        null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
      }
  }
  var isMessageLoopRunning = false, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
  function shouldYieldToHost() {
    return needsPaint ? true : exports.unstable_now() - startTime < frameInterval ? false : true;
  }
  function performWorkUntilDeadline() {
    needsPaint = false;
    if (isMessageLoopRunning) {
      var currentTime = exports.unstable_now();
      startTime = currentTime;
      var hasMoreWork = true;
      try {
        a: {
          isHostCallbackScheduled = false;
          isHostTimeoutScheduled && (isHostTimeoutScheduled = false, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
          isPerformingWork = true;
          var previousPriorityLevel = currentPriorityLevel;
          try {
            b: {
              advanceTimers(currentTime);
              for (currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost()); ) {
                var callback = currentTask.callback;
                if ("function" === typeof callback) {
                  currentTask.callback = null;
                  currentPriorityLevel = currentTask.priorityLevel;
                  var continuationCallback = callback(
                    currentTask.expirationTime <= currentTime
                  );
                  currentTime = exports.unstable_now();
                  if ("function" === typeof continuationCallback) {
                    currentTask.callback = continuationCallback;
                    advanceTimers(currentTime);
                    hasMoreWork = true;
                    break b;
                  }
                  currentTask === peek(taskQueue) && pop2(taskQueue);
                  advanceTimers(currentTime);
                } else pop2(taskQueue);
                currentTask = peek(taskQueue);
              }
              if (null !== currentTask) hasMoreWork = true;
              else {
                var firstTimer = peek(timerQueue);
                null !== firstTimer && requestHostTimeout(
                  handleTimeout,
                  firstTimer.startTime - currentTime
                );
                hasMoreWork = false;
              }
            }
            break a;
          } finally {
            currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = false;
          }
          hasMoreWork = void 0;
        }
      } finally {
        hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = false;
      }
    }
  }
  var schedulePerformWorkUntilDeadline;
  if ("function" === typeof localSetImmediate)
    schedulePerformWorkUntilDeadline = function() {
      localSetImmediate(performWorkUntilDeadline);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var channel = new MessageChannel(), port = channel.port2;
    channel.port1.onmessage = performWorkUntilDeadline;
    schedulePerformWorkUntilDeadline = function() {
      port.postMessage(null);
    };
  } else
    schedulePerformWorkUntilDeadline = function() {
      localSetTimeout(performWorkUntilDeadline, 0);
    };
  function requestHostTimeout(callback, ms) {
    taskTimeoutID = localSetTimeout(function() {
      callback(exports.unstable_now());
    }, ms);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(task) {
    task.callback = null;
  };
  exports.unstable_forceFrameRate = function(fps) {
    0 > fps || 125 < fps ? console.error(
      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
    ) : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return currentPriorityLevel;
  };
  exports.unstable_next = function(eventHandler) {
    switch (currentPriorityLevel) {
      case 1:
      case 2:
      case 3:
        var priorityLevel = 3;
        break;
      default:
        priorityLevel = currentPriorityLevel;
    }
    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = priorityLevel;
    try {
      return eventHandler();
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  };
  exports.unstable_requestPaint = function() {
    needsPaint = true;
  };
  exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
    switch (priorityLevel) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        priorityLevel = 3;
    }
    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = priorityLevel;
    try {
      return eventHandler();
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  };
  exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
    var currentTime = exports.unstable_now();
    "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
    switch (priorityLevel) {
      case 1:
        var timeout = -1;
        break;
      case 2:
        timeout = 250;
        break;
      case 5:
        timeout = 1073741823;
        break;
      case 4:
        timeout = 1e4;
        break;
      default:
        timeout = 5e3;
    }
    timeout = options + timeout;
    priorityLevel = {
      id: taskIdCounter++,
      callback,
      priorityLevel,
      startTime: options,
      expirationTime: timeout,
      sortIndex: -1
    };
    options > currentTime ? (priorityLevel.sortIndex = options, push2(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = true, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push2(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = true, isMessageLoopRunning || (isMessageLoopRunning = true, schedulePerformWorkUntilDeadline())));
    return priorityLevel;
  };
  exports.unstable_shouldYield = shouldYieldToHost;
  exports.unstable_wrapCallback = function(callback) {
    var parentPriorityLevel = currentPriorityLevel;
    return function() {
      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = parentPriorityLevel;
      try {
        return callback.apply(this, arguments);
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    };
  };
})(scheduler_production);
{
  scheduler.exports = scheduler_production;
}
var schedulerExports = scheduler.exports;
var reactDom = { exports: {} };
var reactDom_production = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var React$1 = reactExports;
function formatProdErrorMessage$1(code) {
  var url = "https://react.dev/errors/" + code;
  if (1 < arguments.length) {
    url += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var i = 2; i < arguments.length; i++)
      url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function noop$2() {
}
var Internals = {
  d: {
    f: noop$2,
    r: function() {
      throw Error(formatProdErrorMessage$1(522));
    },
    D: noop$2,
    C: noop$2,
    L: noop$2,
    m: noop$2,
    X: noop$2,
    S: noop$2,
    M: noop$2
  },
  p: 0,
  findDOMNode: null
}, REACT_PORTAL_TYPE$1 = Symbol.for("react.portal");
function createPortal$1(children, containerInfo, implementation) {
  var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: REACT_PORTAL_TYPE$1,
    key: null == key ? null : "" + key,
    children,
    containerInfo,
    implementation
  };
}
var ReactSharedInternals$1 = React$1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function getCrossOriginStringAs(as, input) {
  if ("font" === as) return "";
  if ("string" === typeof input)
    return "use-credentials" === input ? input : "";
}
reactDom_production.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
reactDom_production.createPortal = function(children, container) {
  var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType)
    throw Error(formatProdErrorMessage$1(299));
  return createPortal$1(children, container, null, key);
};
reactDom_production.flushSync = function(fn) {
  var previousTransition = ReactSharedInternals$1.T, previousUpdatePriority = Internals.p;
  try {
    if (ReactSharedInternals$1.T = null, Internals.p = 2, fn) return fn();
  } finally {
    ReactSharedInternals$1.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
  }
};
reactDom_production.preconnect = function(href, options) {
  "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
};
reactDom_production.prefetchDNS = function(href) {
  "string" === typeof href && Internals.d.D(href);
};
reactDom_production.preinit = function(href, options) {
  if ("string" === typeof href && options && "string" === typeof options.as) {
    var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
    "style" === as ? Internals.d.S(
      href,
      "string" === typeof options.precedence ? options.precedence : void 0,
      {
        crossOrigin,
        integrity,
        fetchPriority
      }
    ) : "script" === as && Internals.d.X(href, {
      crossOrigin,
      integrity,
      fetchPriority,
      nonce: "string" === typeof options.nonce ? options.nonce : void 0
    });
  }
};
reactDom_production.preinitModule = function(href, options) {
  if ("string" === typeof href)
    if ("object" === typeof options && null !== options) {
      if (null == options.as || "script" === options.as) {
        var crossOrigin = getCrossOriginStringAs(
          options.as,
          options.crossOrigin
        );
        Internals.d.M(href, {
          crossOrigin,
          integrity: "string" === typeof options.integrity ? options.integrity : void 0,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0
        });
      }
    } else null == options && Internals.d.M(href);
};
reactDom_production.preload = function(href, options) {
  if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
    var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
    Internals.d.L(href, as, {
      crossOrigin,
      integrity: "string" === typeof options.integrity ? options.integrity : void 0,
      nonce: "string" === typeof options.nonce ? options.nonce : void 0,
      type: "string" === typeof options.type ? options.type : void 0,
      fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
      referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
      imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
      imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
      media: "string" === typeof options.media ? options.media : void 0
    });
  }
};
reactDom_production.preloadModule = function(href, options) {
  if ("string" === typeof href)
    if (options) {
      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
      Internals.d.m(href, {
        as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
        crossOrigin,
        integrity: "string" === typeof options.integrity ? options.integrity : void 0
      });
    } else Internals.d.m(href);
};
reactDom_production.requestFormReset = function(form) {
  Internals.d.r(form);
};
reactDom_production.unstable_batchedUpdates = function(fn, a) {
  return fn(a);
};
reactDom_production.useFormState = function(action, initialState, permalink) {
  return ReactSharedInternals$1.H.useFormState(action, initialState, permalink);
};
reactDom_production.useFormStatus = function() {
  return ReactSharedInternals$1.H.useHostTransitionStatus();
};
reactDom_production.version = "19.2.7";
function checkDCE$1() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE$1);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE$1();
  reactDom.exports = reactDom_production;
}
var reactDomExports = reactDom.exports;
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Scheduler = schedulerExports, React = reactExports, ReactDOM$1 = reactDomExports;
function formatProdErrorMessage(code) {
  var url = "https://react.dev/errors/" + code;
  if (1 < arguments.length) {
    url += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var i = 2; i < arguments.length; i++)
      url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function isValidContainer(node) {
  return !(!node || 1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType);
}
function getNearestMountedFiber(fiber) {
  var node = fiber, nearestMounted = fiber;
  if (fiber.alternate) for (; node.return; ) node = node.return;
  else {
    fiber = node;
    do
      node = fiber, 0 !== (node.flags & 4098) && (nearestMounted = node.return), fiber = node.return;
    while (fiber);
  }
  return 3 === node.tag ? nearestMounted : null;
}
function getSuspenseInstanceFromFiber(fiber) {
  if (13 === fiber.tag) {
    var suspenseState = fiber.memoizedState;
    null === suspenseState && (fiber = fiber.alternate, null !== fiber && (suspenseState = fiber.memoizedState));
    if (null !== suspenseState) return suspenseState.dehydrated;
  }
  return null;
}
function getActivityInstanceFromFiber(fiber) {
  if (31 === fiber.tag) {
    var activityState = fiber.memoizedState;
    null === activityState && (fiber = fiber.alternate, null !== fiber && (activityState = fiber.memoizedState));
    if (null !== activityState) return activityState.dehydrated;
  }
  return null;
}
function assertIsMounted(fiber) {
  if (getNearestMountedFiber(fiber) !== fiber)
    throw Error(formatProdErrorMessage(188));
}
function findCurrentFiberUsingSlowPath(fiber) {
  var alternate = fiber.alternate;
  if (!alternate) {
    alternate = getNearestMountedFiber(fiber);
    if (null === alternate) throw Error(formatProdErrorMessage(188));
    return alternate !== fiber ? null : fiber;
  }
  for (var a = fiber, b = alternate; ; ) {
    var parentA = a.return;
    if (null === parentA) break;
    var parentB = parentA.alternate;
    if (null === parentB) {
      b = parentA.return;
      if (null !== b) {
        a = b;
        continue;
      }
      break;
    }
    if (parentA.child === parentB.child) {
      for (parentB = parentA.child; parentB; ) {
        if (parentB === a) return assertIsMounted(parentA), fiber;
        if (parentB === b) return assertIsMounted(parentA), alternate;
        parentB = parentB.sibling;
      }
      throw Error(formatProdErrorMessage(188));
    }
    if (a.return !== b.return) a = parentA, b = parentB;
    else {
      for (var didFindChild = false, child$0 = parentA.child; child$0; ) {
        if (child$0 === a) {
          didFindChild = true;
          a = parentA;
          b = parentB;
          break;
        }
        if (child$0 === b) {
          didFindChild = true;
          b = parentA;
          a = parentB;
          break;
        }
        child$0 = child$0.sibling;
      }
      if (!didFindChild) {
        for (child$0 = parentB.child; child$0; ) {
          if (child$0 === a) {
            didFindChild = true;
            a = parentB;
            b = parentA;
            break;
          }
          if (child$0 === b) {
            didFindChild = true;
            b = parentB;
            a = parentA;
            break;
          }
          child$0 = child$0.sibling;
        }
        if (!didFindChild) throw Error(formatProdErrorMessage(189));
      }
    }
    if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
  }
  if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
  return a.stateNode.current === a ? fiber : alternate;
}
function findCurrentHostFiberImpl(node) {
  var tag = node.tag;
  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
  for (node = node.child; null !== node; ) {
    tag = findCurrentHostFiberImpl(node);
    if (null !== tag) return tag;
    node = node.sibling;
  }
  return null;
}
var assign = Object.assign, REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy");
var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
function getComponentNameFromType(type) {
  if (null == type) return null;
  if ("function" === typeof type)
    return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
  if ("string" === typeof type) return type;
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return "Fragment";
    case REACT_PROFILER_TYPE:
      return "Profiler";
    case REACT_STRICT_MODE_TYPE:
      return "StrictMode";
    case REACT_SUSPENSE_TYPE:
      return "Suspense";
    case REACT_SUSPENSE_LIST_TYPE:
      return "SuspenseList";
    case REACT_ACTIVITY_TYPE:
      return "Activity";
  }
  if ("object" === typeof type)
    switch (type.$$typeof) {
      case REACT_PORTAL_TYPE:
        return "Portal";
      case REACT_CONTEXT_TYPE:
        return type.displayName || "Context";
      case REACT_CONSUMER_TYPE:
        return (type._context.displayName || "Context") + ".Consumer";
      case REACT_FORWARD_REF_TYPE:
        var innerType = type.render;
        type = type.displayName;
        type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
        return type;
      case REACT_MEMO_TYPE:
        return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
      case REACT_LAZY_TYPE:
        innerType = type._payload;
        type = type._init;
        try {
          return getComponentNameFromType(type(innerType));
        } catch (x) {
        }
    }
  return null;
}
var isArrayImpl = Array.isArray, ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ReactDOMSharedInternals = ReactDOM$1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, sharedNotPendingObject = {
  pending: false,
  data: null,
  method: null,
  action: null
}, valueStack = [], index = -1;
function createCursor(defaultValue) {
  return { current: defaultValue };
}
function pop(cursor) {
  0 > index || (cursor.current = valueStack[index], valueStack[index] = null, index--);
}
function push(cursor, value) {
  index++;
  valueStack[index] = cursor.current;
  cursor.current = value;
}
var contextStackCursor = createCursor(null), contextFiberStackCursor = createCursor(null), rootInstanceStackCursor = createCursor(null), hostTransitionProviderCursor = createCursor(null);
function pushHostContainer(fiber, nextRootInstance) {
  push(rootInstanceStackCursor, nextRootInstance);
  push(contextFiberStackCursor, fiber);
  push(contextStackCursor, null);
  switch (nextRootInstance.nodeType) {
    case 9:
    case 11:
      fiber = (fiber = nextRootInstance.documentElement) ? (fiber = fiber.namespaceURI) ? getOwnHostContext(fiber) : 0 : 0;
      break;
    default:
      if (fiber = nextRootInstance.tagName, nextRootInstance = nextRootInstance.namespaceURI)
        nextRootInstance = getOwnHostContext(nextRootInstance), fiber = getChildHostContextProd(nextRootInstance, fiber);
      else
        switch (fiber) {
          case "svg":
            fiber = 1;
            break;
          case "math":
            fiber = 2;
            break;
          default:
            fiber = 0;
        }
  }
  pop(contextStackCursor);
  push(contextStackCursor, fiber);
}
function popHostContainer() {
  pop(contextStackCursor);
  pop(contextFiberStackCursor);
  pop(rootInstanceStackCursor);
}
function pushHostContext(fiber) {
  null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
  var context3 = contextStackCursor.current;
  var JSCompiler_inline_result = getChildHostContextProd(context3, fiber.type);
  context3 !== JSCompiler_inline_result && (push(contextFiberStackCursor, fiber), push(contextStackCursor, JSCompiler_inline_result));
}
function popHostContext(fiber) {
  contextFiberStackCursor.current === fiber && (pop(contextStackCursor), pop(contextFiberStackCursor));
  hostTransitionProviderCursor.current === fiber && (pop(hostTransitionProviderCursor), HostTransitionContext._currentValue = sharedNotPendingObject);
}
var prefix, suffix;
function describeBuiltInComponentFrame(name) {
  if (void 0 === prefix)
    try {
      throw Error();
    } catch (x) {
      var match = x.stack.trim().match(/\n( *(at )?)/);
      prefix = match && match[1] || "";
      suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
  return "\n" + prefix + name + suffix;
}
var reentry = false;
function describeNativeComponentFrame(fn, construct) {
  if (!fn || reentry) return "";
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var RunInRootFrame = {
      DetermineComponentFrameRoot: function() {
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if ("object" === typeof Reflect && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                var control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x$1) {
                control = x$1;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x$2) {
              control = x$2;
            }
            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
            });
          }
        } catch (sample) {
          if (sample && control && "string" === typeof sample.stack)
            return [sample.stack, control.stack];
        }
        return [null, null];
      }
    };
    RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var namePropDescriptor = Object.getOwnPropertyDescriptor(
      RunInRootFrame.DetermineComponentFrameRoot,
      "name"
    );
    namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
      RunInRootFrame.DetermineComponentFrameRoot,
      "name",
      { value: "DetermineComponentFrameRoot" }
    );
    var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
    if (sampleStack && controlStack) {
      var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
      for (namePropDescriptor = RunInRootFrame = 0; RunInRootFrame < sampleLines.length && !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot"); )
        RunInRootFrame++;
      for (; namePropDescriptor < controlLines.length && !controlLines[namePropDescriptor].includes(
        "DetermineComponentFrameRoot"
      ); )
        namePropDescriptor++;
      if (RunInRootFrame === sampleLines.length || namePropDescriptor === controlLines.length)
        for (RunInRootFrame = sampleLines.length - 1, namePropDescriptor = controlLines.length - 1; 1 <= RunInRootFrame && 0 <= namePropDescriptor && sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]; )
          namePropDescriptor--;
      for (; 1 <= RunInRootFrame && 0 <= namePropDescriptor; RunInRootFrame--, namePropDescriptor--)
        if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
          if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
            do
              if (RunInRootFrame--, namePropDescriptor--, 0 > namePropDescriptor || sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
                var frame = "\n" + sampleLines[RunInRootFrame].replace(" at new ", " at ");
                fn.displayName && frame.includes("<anonymous>") && (frame = frame.replace("<anonymous>", fn.displayName));
                return frame;
              }
            while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
          }
          break;
        }
    }
  } finally {
    reentry = false, Error.prepareStackTrace = previousPrepareStackTrace;
  }
  return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(previousPrepareStackTrace) : "";
}
function describeFiber(fiber, childFiber) {
  switch (fiber.tag) {
    case 26:
    case 27:
    case 5:
      return describeBuiltInComponentFrame(fiber.type);
    case 16:
      return describeBuiltInComponentFrame("Lazy");
    case 13:
      return fiber.child !== childFiber && null !== childFiber ? describeBuiltInComponentFrame("Suspense Fallback") : describeBuiltInComponentFrame("Suspense");
    case 19:
      return describeBuiltInComponentFrame("SuspenseList");
    case 0:
    case 15:
      return describeNativeComponentFrame(fiber.type, false);
    case 11:
      return describeNativeComponentFrame(fiber.type.render, false);
    case 1:
      return describeNativeComponentFrame(fiber.type, true);
    case 31:
      return describeBuiltInComponentFrame("Activity");
    default:
      return "";
  }
}
function getStackByFiberInDevAndProd(workInProgress2) {
  try {
    var info = "", previous = null;
    do
      info += describeFiber(workInProgress2, previous), previous = workInProgress2, workInProgress2 = workInProgress2.return;
    while (workInProgress2);
    return info;
  } catch (x) {
    return "\nError generating stack: " + x.message + "\n" + x.stack;
  }
}
var hasOwnProperty = Object.prototype.hasOwnProperty, scheduleCallback$3 = Scheduler.unstable_scheduleCallback, cancelCallback$1 = Scheduler.unstable_cancelCallback, shouldYield = Scheduler.unstable_shouldYield, requestPaint = Scheduler.unstable_requestPaint, now = Scheduler.unstable_now, getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel, ImmediatePriority = Scheduler.unstable_ImmediatePriority, UserBlockingPriority = Scheduler.unstable_UserBlockingPriority, NormalPriority$1 = Scheduler.unstable_NormalPriority, LowPriority = Scheduler.unstable_LowPriority, IdlePriority = Scheduler.unstable_IdlePriority, log$1 = Scheduler.log, unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue, rendererID = null, injectedHook = null;
function setIsStrictModeForDevtools(newIsStrictMode) {
  "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
  if (injectedHook && "function" === typeof injectedHook.setStrictMode)
    try {
      injectedHook.setStrictMode(rendererID, newIsStrictMode);
    } catch (err) {
    }
}
var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback, log = Math.log, LN2 = Math.LN2;
function clz32Fallback(x) {
  x >>>= 0;
  return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
}
var nextTransitionUpdateLane = 256, nextTransitionDeferredLane = 262144, nextRetryLane = 4194304;
function getHighestPriorityLanes(lanes) {
  var pendingSyncLanes = lanes & 42;
  if (0 !== pendingSyncLanes) return pendingSyncLanes;
  switch (lanes & -lanes) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
      return 128;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
      return lanes & 261888;
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return lanes & 3932160;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return lanes & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return lanes;
  }
}
function getNextLanes(root2, wipLanes, rootHasPendingCommit) {
  var pendingLanes = root2.pendingLanes;
  if (0 === pendingLanes) return 0;
  var nextLanes = 0, suspendedLanes = root2.suspendedLanes, pingedLanes = root2.pingedLanes;
  root2 = root2.warmLanes;
  var nonIdlePendingLanes = pendingLanes & 134217727;
  0 !== nonIdlePendingLanes ? (pendingLanes = nonIdlePendingLanes & ~suspendedLanes, 0 !== pendingLanes ? nextLanes = getHighestPriorityLanes(pendingLanes) : (pingedLanes &= nonIdlePendingLanes, 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = nonIdlePendingLanes & ~root2, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))))) : (nonIdlePendingLanes = pendingLanes & ~suspendedLanes, 0 !== nonIdlePendingLanes ? nextLanes = getHighestPriorityLanes(nonIdlePendingLanes) : 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = pendingLanes & ~root2, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
  return 0 === nextLanes ? 0 : 0 !== wipLanes && wipLanes !== nextLanes && 0 === (wipLanes & suspendedLanes) && (suspendedLanes = nextLanes & -nextLanes, rootHasPendingCommit = wipLanes & -wipLanes, suspendedLanes >= rootHasPendingCommit || 32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)) ? wipLanes : nextLanes;
}
function checkIfRootIsPrerendering(root2, renderLanes2) {
  return 0 === (root2.pendingLanes & ~(root2.suspendedLanes & ~root2.pingedLanes) & renderLanes2);
}
function computeExpirationTime(lane, currentTime) {
  switch (lane) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
      return currentTime + 250;
    case 16:
    case 32:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return currentTime + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function claimNextRetryLane() {
  var lane = nextRetryLane;
  nextRetryLane <<= 1;
  0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
  return lane;
}
function createLaneMap(initial) {
  for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
  return laneMap;
}
function markRootUpdated$1(root2, updateLane) {
  root2.pendingLanes |= updateLane;
  268435456 !== updateLane && (root2.suspendedLanes = 0, root2.pingedLanes = 0, root2.warmLanes = 0);
}
function markRootFinished(root2, finishedLanes, remainingLanes, spawnedLane, updatedLanes, suspendedRetryLanes) {
  var previouslyPendingLanes = root2.pendingLanes;
  root2.pendingLanes = remainingLanes;
  root2.suspendedLanes = 0;
  root2.pingedLanes = 0;
  root2.warmLanes = 0;
  root2.expiredLanes &= remainingLanes;
  root2.entangledLanes &= remainingLanes;
  root2.errorRecoveryDisabledLanes &= remainingLanes;
  root2.shellSuspendCounter = 0;
  var entanglements = root2.entanglements, expirationTimes = root2.expirationTimes, hiddenUpdates = root2.hiddenUpdates;
  for (remainingLanes = previouslyPendingLanes & ~remainingLanes; 0 < remainingLanes; ) {
    var index$7 = 31 - clz32(remainingLanes), lane = 1 << index$7;
    entanglements[index$7] = 0;
    expirationTimes[index$7] = -1;
    var hiddenUpdatesForLane = hiddenUpdates[index$7];
    if (null !== hiddenUpdatesForLane)
      for (hiddenUpdates[index$7] = null, index$7 = 0; index$7 < hiddenUpdatesForLane.length; index$7++) {
        var update = hiddenUpdatesForLane[index$7];
        null !== update && (update.lane &= -536870913);
      }
    remainingLanes &= ~lane;
  }
  0 !== spawnedLane && markSpawnedDeferredLane(root2, spawnedLane, 0);
  0 !== suspendedRetryLanes && 0 === updatedLanes && 0 !== root2.tag && (root2.suspendedLanes |= suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
}
function markSpawnedDeferredLane(root2, spawnedLane, entangledLanes) {
  root2.pendingLanes |= spawnedLane;
  root2.suspendedLanes &= ~spawnedLane;
  var spawnedLaneIndex = 31 - clz32(spawnedLane);
  root2.entangledLanes |= spawnedLane;
  root2.entanglements[spawnedLaneIndex] = root2.entanglements[spawnedLaneIndex] | 1073741824 | entangledLanes & 261930;
}
function markRootEntangled(root2, entangledLanes) {
  var rootEntangledLanes = root2.entangledLanes |= entangledLanes;
  for (root2 = root2.entanglements; rootEntangledLanes; ) {
    var index$8 = 31 - clz32(rootEntangledLanes), lane = 1 << index$8;
    lane & entangledLanes | root2[index$8] & entangledLanes && (root2[index$8] |= entangledLanes);
    rootEntangledLanes &= ~lane;
  }
}
function getBumpedLaneForHydration(root2, renderLanes2) {
  var renderLane = renderLanes2 & -renderLanes2;
  renderLane = 0 !== (renderLane & 42) ? 1 : getBumpedLaneForHydrationByLane(renderLane);
  return 0 !== (renderLane & (root2.suspendedLanes | renderLanes2)) ? 0 : renderLane;
}
function getBumpedLaneForHydrationByLane(lane) {
  switch (lane) {
    case 2:
      lane = 1;
      break;
    case 8:
      lane = 4;
      break;
    case 32:
      lane = 16;
      break;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      lane = 128;
      break;
    case 268435456:
      lane = 134217728;
      break;
    default:
      lane = 0;
  }
  return lane;
}
function lanesToEventPriority(lanes) {
  lanes &= -lanes;
  return 2 < lanes ? 8 < lanes ? 0 !== (lanes & 134217727) ? 32 : 268435456 : 8 : 2;
}
function resolveUpdatePriority() {
  var updatePriority = ReactDOMSharedInternals.p;
  if (0 !== updatePriority) return updatePriority;
  updatePriority = window.event;
  return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
}
function runWithPriority(priority, fn) {
  var previousPriority = ReactDOMSharedInternals.p;
  try {
    return ReactDOMSharedInternals.p = priority, fn();
  } finally {
    ReactDOMSharedInternals.p = previousPriority;
  }
}
var randomKey = Math.random().toString(36).slice(2), internalInstanceKey = "__reactFiber$" + randomKey, internalPropsKey = "__reactProps$" + randomKey, internalContainerInstanceKey = "__reactContainer$" + randomKey, internalEventHandlersKey = "__reactEvents$" + randomKey, internalEventHandlerListenersKey = "__reactListeners$" + randomKey, internalEventHandlesSetKey = "__reactHandles$" + randomKey, internalRootNodeResourcesKey = "__reactResources$" + randomKey, internalHoistableMarker = "__reactMarker$" + randomKey;
function detachDeletedInstance(node) {
  delete node[internalInstanceKey];
  delete node[internalPropsKey];
  delete node[internalEventHandlersKey];
  delete node[internalEventHandlerListenersKey];
  delete node[internalEventHandlesSetKey];
}
function getClosestInstanceFromNode(targetNode) {
  var targetInst = targetNode[internalInstanceKey];
  if (targetInst) return targetInst;
  for (var parentNode = targetNode.parentNode; parentNode; ) {
    if (targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey]) {
      parentNode = targetInst.alternate;
      if (null !== targetInst.child || null !== parentNode && null !== parentNode.child)
        for (targetNode = getParentHydrationBoundary(targetNode); null !== targetNode; ) {
          if (parentNode = targetNode[internalInstanceKey]) return parentNode;
          targetNode = getParentHydrationBoundary(targetNode);
        }
      return targetInst;
    }
    targetNode = parentNode;
    parentNode = targetNode.parentNode;
  }
  return null;
}
function getInstanceFromNode(node) {
  if (node = node[internalInstanceKey] || node[internalContainerInstanceKey]) {
    var tag = node.tag;
    if (5 === tag || 6 === tag || 13 === tag || 31 === tag || 26 === tag || 27 === tag || 3 === tag)
      return node;
  }
  return null;
}
function getNodeFromInstance(inst) {
  var tag = inst.tag;
  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
  throw Error(formatProdErrorMessage(33));
}
function getResourcesFromRoot(root2) {
  var resources = root2[internalRootNodeResourcesKey];
  resources || (resources = root2[internalRootNodeResourcesKey] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() });
  return resources;
}
function markNodeAsHoistable(node) {
  node[internalHoistableMarker] = true;
}
var allNativeEvents = /* @__PURE__ */ new Set(), registrationNameDependencies = {};
function registerTwoPhaseEvent(registrationName, dependencies) {
  registerDirectEvent(registrationName, dependencies);
  registerDirectEvent(registrationName + "Capture", dependencies);
}
function registerDirectEvent(registrationName, dependencies) {
  registrationNameDependencies[registrationName] = dependencies;
  for (registrationName = 0; registrationName < dependencies.length; registrationName++)
    allNativeEvents.add(dependencies[registrationName]);
}
var VALID_ATTRIBUTE_NAME_REGEX = RegExp(
  "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
), illegalAttributeNameCache = {}, validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
    return true;
  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
    return validatedAttributeNameCache[attributeName] = true;
  illegalAttributeNameCache[attributeName] = true;
  return false;
}
function setValueForAttribute(node, name, value) {
  if (isAttributeNameSafe(name))
    if (null === value) node.removeAttribute(name);
    else {
      switch (typeof value) {
        case "undefined":
        case "function":
        case "symbol":
          node.removeAttribute(name);
          return;
        case "boolean":
          var prefix$10 = name.toLowerCase().slice(0, 5);
          if ("data-" !== prefix$10 && "aria-" !== prefix$10) {
            node.removeAttribute(name);
            return;
          }
      }
      node.setAttribute(name, "" + value);
    }
}
function setValueForKnownAttribute(node, name, value) {
  if (null === value) node.removeAttribute(name);
  else {
    switch (typeof value) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        node.removeAttribute(name);
        return;
    }
    node.setAttribute(name, "" + value);
  }
}
function setValueForNamespacedAttribute(node, namespace, name, value) {
  if (null === value) node.removeAttribute(name);
  else {
    switch (typeof value) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        node.removeAttribute(name);
        return;
    }
    node.setAttributeNS(namespace, name, "" + value);
  }
}
function getToStringValue(value) {
  switch (typeof value) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return value;
    case "object":
      return value;
    default:
      return "";
  }
}
function isCheckable(elem) {
  var type = elem.type;
  return (elem = elem.nodeName) && "input" === elem.toLowerCase() && ("checkbox" === type || "radio" === type);
}
function trackValueOnNode(node, valueField, currentValue) {
  var descriptor = Object.getOwnPropertyDescriptor(
    node.constructor.prototype,
    valueField
  );
  if (!node.hasOwnProperty(valueField) && "undefined" !== typeof descriptor && "function" === typeof descriptor.get && "function" === typeof descriptor.set) {
    var get = descriptor.get, set = descriptor.set;
    Object.defineProperty(node, valueField, {
      configurable: true,
      get: function() {
        return get.call(this);
      },
      set: function(value) {
        currentValue = "" + value;
        set.call(this, value);
      }
    });
    Object.defineProperty(node, valueField, {
      enumerable: descriptor.enumerable
    });
    return {
      getValue: function() {
        return currentValue;
      },
      setValue: function(value) {
        currentValue = "" + value;
      },
      stopTracking: function() {
        node._valueTracker = null;
        delete node[valueField];
      }
    };
  }
}
function track(node) {
  if (!node._valueTracker) {
    var valueField = isCheckable(node) ? "checked" : "value";
    node._valueTracker = trackValueOnNode(
      node,
      valueField,
      "" + node[valueField]
    );
  }
}
function updateValueIfChanged(node) {
  if (!node) return false;
  var tracker = node._valueTracker;
  if (!tracker) return true;
  var lastValue = tracker.getValue();
  var value = "";
  node && (value = isCheckable(node) ? node.checked ? "true" : "false" : node.value);
  node = value;
  return node !== lastValue ? (tracker.setValue(node), true) : false;
}
function getActiveElement(doc) {
  doc = doc || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof doc) return null;
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
  return value.replace(
    escapeSelectorAttributeValueInsideDoubleQuotesRegex,
    function(ch) {
      return "\\" + ch.charCodeAt(0).toString(16) + " ";
    }
  );
}
function updateInput(element, value, defaultValue, lastDefaultValue, checked, defaultChecked, type, name) {
  element.name = "";
  null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type ? element.type = type : element.removeAttribute("type");
  if (null != value)
    if ("number" === type) {
      if (0 === value && "" === element.value || element.value != value)
        element.value = "" + getToStringValue(value);
    } else
      element.value !== "" + getToStringValue(value) && (element.value = "" + getToStringValue(value));
  else
    "submit" !== type && "reset" !== type || element.removeAttribute("value");
  null != value ? setDefaultValue(element, type, getToStringValue(value)) : null != defaultValue ? setDefaultValue(element, type, getToStringValue(defaultValue)) : null != lastDefaultValue && element.removeAttribute("value");
  null == checked && null != defaultChecked && (element.defaultChecked = !!defaultChecked);
  null != checked && (element.checked = checked && "function" !== typeof checked && "symbol" !== typeof checked);
  null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name ? element.name = "" + getToStringValue(name) : element.removeAttribute("name");
}
function initInput(element, value, defaultValue, checked, defaultChecked, type, name, isHydrating2) {
  null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type && (element.type = type);
  if (null != value || null != defaultValue) {
    if (!("submit" !== type && "reset" !== type || void 0 !== value && null !== value)) {
      track(element);
      return;
    }
    defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
    value = null != value ? "" + getToStringValue(value) : defaultValue;
    isHydrating2 || value === element.value || (element.value = value);
    element.defaultValue = value;
  }
  checked = null != checked ? checked : defaultChecked;
  checked = "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
  element.checked = isHydrating2 ? element.checked : !!checked;
  element.defaultChecked = !!checked;
  null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name && (element.name = name);
  track(element);
}
function setDefaultValue(node, type, value) {
  "number" === type && getActiveElement(node.ownerDocument) === node || node.defaultValue === "" + value || (node.defaultValue = "" + value);
}
function updateOptions(node, multiple, propValue, setDefaultSelected) {
  node = node.options;
  if (multiple) {
    multiple = {};
    for (var i = 0; i < propValue.length; i++)
      multiple["$" + propValue[i]] = true;
    for (propValue = 0; propValue < node.length; propValue++)
      i = multiple.hasOwnProperty("$" + node[propValue].value), node[propValue].selected !== i && (node[propValue].selected = i), i && setDefaultSelected && (node[propValue].defaultSelected = true);
  } else {
    propValue = "" + getToStringValue(propValue);
    multiple = null;
    for (i = 0; i < node.length; i++) {
      if (node[i].value === propValue) {
        node[i].selected = true;
        setDefaultSelected && (node[i].defaultSelected = true);
        return;
      }
      null !== multiple || node[i].disabled || (multiple = node[i]);
    }
    null !== multiple && (multiple.selected = true);
  }
}
function updateTextarea(element, value, defaultValue) {
  if (null != value && (value = "" + getToStringValue(value), value !== element.value && (element.value = value), null == defaultValue)) {
    element.defaultValue !== value && (element.defaultValue = value);
    return;
  }
  element.defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
}
function initTextarea(element, value, defaultValue, children) {
  if (null == value) {
    if (null != children) {
      if (null != defaultValue) throw Error(formatProdErrorMessage(92));
      if (isArrayImpl(children)) {
        if (1 < children.length) throw Error(formatProdErrorMessage(93));
        children = children[0];
      }
      defaultValue = children;
    }
    null == defaultValue && (defaultValue = "");
    value = defaultValue;
  }
  defaultValue = getToStringValue(value);
  element.defaultValue = defaultValue;
  children = element.textContent;
  children === defaultValue && "" !== children && null !== children && (element.value = children);
  track(element);
}
function setTextContent(node, text) {
  if (text) {
    var firstChild = node.firstChild;
    if (firstChild && firstChild === node.lastChild && 3 === firstChild.nodeType) {
      firstChild.nodeValue = text;
      return;
    }
  }
  node.textContent = text;
}
var unitlessNumbers = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
);
function setValueForStyle(style2, styleName, value) {
  var isCustomProperty = 0 === styleName.indexOf("--");
  null == value || "boolean" === typeof value || "" === value ? isCustomProperty ? style2.setProperty(styleName, "") : "float" === styleName ? style2.cssFloat = "" : style2[styleName] = "" : isCustomProperty ? style2.setProperty(styleName, value) : "number" !== typeof value || 0 === value || unitlessNumbers.has(styleName) ? "float" === styleName ? style2.cssFloat = value : style2[styleName] = ("" + value).trim() : style2[styleName] = value + "px";
}
function setValueForStyles(node, styles, prevStyles) {
  if (null != styles && "object" !== typeof styles)
    throw Error(formatProdErrorMessage(62));
  node = node.style;
  if (null != prevStyles) {
    for (var styleName in prevStyles)
      !prevStyles.hasOwnProperty(styleName) || null != styles && styles.hasOwnProperty(styleName) || (0 === styleName.indexOf("--") ? node.setProperty(styleName, "") : "float" === styleName ? node.cssFloat = "" : node[styleName] = "");
    for (var styleName$16 in styles)
      styleName = styles[styleName$16], styles.hasOwnProperty(styleName$16) && prevStyles[styleName$16] !== styleName && setValueForStyle(node, styleName$16, styleName);
  } else
    for (var styleName$17 in styles)
      styles.hasOwnProperty(styleName$17) && setValueForStyle(node, styleName$17, styles[styleName$17]);
}
function isCustomElement(tagName) {
  if (-1 === tagName.indexOf("-")) return false;
  switch (tagName) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var aliases = /* @__PURE__ */ new Map([
  ["acceptCharset", "accept-charset"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
  ["crossOrigin", "crossorigin"],
  ["accentHeight", "accent-height"],
  ["alignmentBaseline", "alignment-baseline"],
  ["arabicForm", "arabic-form"],
  ["baselineShift", "baseline-shift"],
  ["capHeight", "cap-height"],
  ["clipPath", "clip-path"],
  ["clipRule", "clip-rule"],
  ["colorInterpolation", "color-interpolation"],
  ["colorInterpolationFilters", "color-interpolation-filters"],
  ["colorProfile", "color-profile"],
  ["colorRendering", "color-rendering"],
  ["dominantBaseline", "dominant-baseline"],
  ["enableBackground", "enable-background"],
  ["fillOpacity", "fill-opacity"],
  ["fillRule", "fill-rule"],
  ["floodColor", "flood-color"],
  ["floodOpacity", "flood-opacity"],
  ["fontFamily", "font-family"],
  ["fontSize", "font-size"],
  ["fontSizeAdjust", "font-size-adjust"],
  ["fontStretch", "font-stretch"],
  ["fontStyle", "font-style"],
  ["fontVariant", "font-variant"],
  ["fontWeight", "font-weight"],
  ["glyphName", "glyph-name"],
  ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
  ["glyphOrientationVertical", "glyph-orientation-vertical"],
  ["horizAdvX", "horiz-adv-x"],
  ["horizOriginX", "horiz-origin-x"],
  ["imageRendering", "image-rendering"],
  ["letterSpacing", "letter-spacing"],
  ["lightingColor", "lighting-color"],
  ["markerEnd", "marker-end"],
  ["markerMid", "marker-mid"],
  ["markerStart", "marker-start"],
  ["overlinePosition", "overline-position"],
  ["overlineThickness", "overline-thickness"],
  ["paintOrder", "paint-order"],
  ["panose-1", "panose-1"],
  ["pointerEvents", "pointer-events"],
  ["renderingIntent", "rendering-intent"],
  ["shapeRendering", "shape-rendering"],
  ["stopColor", "stop-color"],
  ["stopOpacity", "stop-opacity"],
  ["strikethroughPosition", "strikethrough-position"],
  ["strikethroughThickness", "strikethrough-thickness"],
  ["strokeDasharray", "stroke-dasharray"],
  ["strokeDashoffset", "stroke-dashoffset"],
  ["strokeLinecap", "stroke-linecap"],
  ["strokeLinejoin", "stroke-linejoin"],
  ["strokeMiterlimit", "stroke-miterlimit"],
  ["strokeOpacity", "stroke-opacity"],
  ["strokeWidth", "stroke-width"],
  ["textAnchor", "text-anchor"],
  ["textDecoration", "text-decoration"],
  ["textRendering", "text-rendering"],
  ["transformOrigin", "transform-origin"],
  ["underlinePosition", "underline-position"],
  ["underlineThickness", "underline-thickness"],
  ["unicodeBidi", "unicode-bidi"],
  ["unicodeRange", "unicode-range"],
  ["unitsPerEm", "units-per-em"],
  ["vAlphabetic", "v-alphabetic"],
  ["vHanging", "v-hanging"],
  ["vIdeographic", "v-ideographic"],
  ["vMathematical", "v-mathematical"],
  ["vectorEffect", "vector-effect"],
  ["vertAdvY", "vert-adv-y"],
  ["vertOriginX", "vert-origin-x"],
  ["vertOriginY", "vert-origin-y"],
  ["wordSpacing", "word-spacing"],
  ["writingMode", "writing-mode"],
  ["xmlnsXlink", "xmlns:xlink"],
  ["xHeight", "x-height"]
]), isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function sanitizeURL(url) {
  return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
}
function noop$1() {
}
var currentReplayingEvent = null;
function getEventTarget(nativeEvent) {
  nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
  nativeEvent.correspondingUseElement && (nativeEvent = nativeEvent.correspondingUseElement);
  return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
}
var restoreTarget = null, restoreQueue = null;
function restoreStateOfTarget(target) {
  var internalInstance = getInstanceFromNode(target);
  if (internalInstance && (target = internalInstance.stateNode)) {
    var props = target[internalPropsKey] || null;
    a: switch (target = internalInstance.stateNode, internalInstance.type) {
      case "input":
        updateInput(
          target,
          props.value,
          props.defaultValue,
          props.defaultValue,
          props.checked,
          props.defaultChecked,
          props.type,
          props.name
        );
        internalInstance = props.name;
        if ("radio" === props.type && null != internalInstance) {
          for (props = target; props.parentNode; ) props = props.parentNode;
          props = props.querySelectorAll(
            'input[name="' + escapeSelectorAttributeValueInsideDoubleQuotes(
              "" + internalInstance
            ) + '"][type="radio"]'
          );
          for (internalInstance = 0; internalInstance < props.length; internalInstance++) {
            var otherNode = props[internalInstance];
            if (otherNode !== target && otherNode.form === target.form) {
              var otherProps = otherNode[internalPropsKey] || null;
              if (!otherProps) throw Error(formatProdErrorMessage(90));
              updateInput(
                otherNode,
                otherProps.value,
                otherProps.defaultValue,
                otherProps.defaultValue,
                otherProps.checked,
                otherProps.defaultChecked,
                otherProps.type,
                otherProps.name
              );
            }
          }
          for (internalInstance = 0; internalInstance < props.length; internalInstance++)
            otherNode = props[internalInstance], otherNode.form === target.form && updateValueIfChanged(otherNode);
        }
        break a;
      case "textarea":
        updateTextarea(target, props.value, props.defaultValue);
        break a;
      case "select":
        internalInstance = props.value, null != internalInstance && updateOptions(target, !!props.multiple, internalInstance, false);
    }
  }
}
var isInsideEventHandler = false;
function batchedUpdates$1(fn, a, b) {
  if (isInsideEventHandler) return fn(a, b);
  isInsideEventHandler = true;
  try {
    var JSCompiler_inline_result = fn(a);
    return JSCompiler_inline_result;
  } finally {
    if (isInsideEventHandler = false, null !== restoreTarget || null !== restoreQueue) {
      if (flushSyncWork$1(), restoreTarget && (a = restoreTarget, fn = restoreQueue, restoreQueue = restoreTarget = null, restoreStateOfTarget(a), fn))
        for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
    }
  }
}
function getListener(inst, registrationName) {
  var stateNode = inst.stateNode;
  if (null === stateNode) return null;
  var props = stateNode[internalPropsKey] || null;
  if (null === props) return null;
  stateNode = props[registrationName];
  a: switch (registrationName) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (props = !props.disabled) || (inst = inst.type, props = !("button" === inst || "input" === inst || "select" === inst || "textarea" === inst));
      inst = !props;
      break a;
    default:
      inst = false;
  }
  if (inst) return null;
  if (stateNode && "function" !== typeof stateNode)
    throw Error(
      formatProdErrorMessage(231, registrationName, typeof stateNode)
    );
  return stateNode;
}
var canUseDOM = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), passiveBrowserEventsSupported = false;
if (canUseDOM)
  try {
    var options = {};
    Object.defineProperty(options, "passive", {
      get: function() {
        passiveBrowserEventsSupported = true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (e) {
    passiveBrowserEventsSupported = false;
  }
var root = null, startText = null, fallbackText = null;
function getData() {
  if (fallbackText) return fallbackText;
  var start, startValue = startText, startLength = startValue.length, end, endValue = "value" in root ? root.value : root.textContent, endLength = endValue.length;
  for (start = 0; start < startLength && startValue[start] === endValue[start]; start++) ;
  var minEnd = startLength - start;
  for (end = 1; end <= minEnd && startValue[startLength - end] === endValue[endLength - end]; end++) ;
  return fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0);
}
function getEventCharCode(nativeEvent) {
  var keyCode = nativeEvent.keyCode;
  "charCode" in nativeEvent ? (nativeEvent = nativeEvent.charCode, 0 === nativeEvent && 13 === keyCode && (nativeEvent = 13)) : nativeEvent = keyCode;
  10 === nativeEvent && (nativeEvent = 13);
  return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
}
function functionThatReturnsTrue() {
  return true;
}
function functionThatReturnsFalse() {
  return false;
}
function createSyntheticEvent(Interface) {
  function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
    this._reactName = reactName;
    this._targetInst = targetInst;
    this.type = reactEventType;
    this.nativeEvent = nativeEvent;
    this.target = nativeEventTarget;
    this.currentTarget = null;
    for (var propName in Interface)
      Interface.hasOwnProperty(propName) && (reactName = Interface[propName], this[propName] = reactName ? reactName(nativeEvent) : nativeEvent[propName]);
    this.isDefaultPrevented = (null != nativeEvent.defaultPrevented ? nativeEvent.defaultPrevented : false === nativeEvent.returnValue) ? functionThatReturnsTrue : functionThatReturnsFalse;
    this.isPropagationStopped = functionThatReturnsFalse;
    return this;
  }
  assign(SyntheticBaseEvent.prototype, {
    preventDefault: function() {
      this.defaultPrevented = true;
      var event = this.nativeEvent;
      event && (event.preventDefault ? event.preventDefault() : "unknown" !== typeof event.returnValue && (event.returnValue = false), this.isDefaultPrevented = functionThatReturnsTrue);
    },
    stopPropagation: function() {
      var event = this.nativeEvent;
      event && (event.stopPropagation ? event.stopPropagation() : "unknown" !== typeof event.cancelBubble && (event.cancelBubble = true), this.isPropagationStopped = functionThatReturnsTrue);
    },
    persist: function() {
    },
    isPersistent: functionThatReturnsTrue
  });
  return SyntheticBaseEvent;
}
var EventInterface = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function(event) {
    return event.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0
}, SyntheticEvent = createSyntheticEvent(EventInterface), UIEventInterface = assign({}, EventInterface, { view: 0, detail: 0 }), SyntheticUIEvent = createSyntheticEvent(UIEventInterface), lastMovementX, lastMovementY, lastMouseEvent, MouseEventInterface = assign({}, UIEventInterface, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: getEventModifierState,
  button: 0,
  buttons: 0,
  relatedTarget: function(event) {
    return void 0 === event.relatedTarget ? event.fromElement === event.srcElement ? event.toElement : event.fromElement : event.relatedTarget;
  },
  movementX: function(event) {
    if ("movementX" in event) return event.movementX;
    event !== lastMouseEvent && (lastMouseEvent && "mousemove" === event.type ? (lastMovementX = event.screenX - lastMouseEvent.screenX, lastMovementY = event.screenY - lastMouseEvent.screenY) : lastMovementY = lastMovementX = 0, lastMouseEvent = event);
    return lastMovementX;
  },
  movementY: function(event) {
    return "movementY" in event ? event.movementY : lastMovementY;
  }
}), SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface), DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 }), SyntheticDragEvent = createSyntheticEvent(DragEventInterface), FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 }), SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface), AnimationEventInterface = assign({}, EventInterface, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface), ClipboardEventInterface = assign({}, EventInterface, {
  clipboardData: function(event) {
    return "clipboardData" in event ? event.clipboardData : window.clipboardData;
  }
}), SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface), CompositionEventInterface = assign({}, EventInterface, { data: 0 }), SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface), normalizeKey = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, translateToKey = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, modifierKeyToProp = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function modifierStateGetter(keyArg) {
  var nativeEvent = this.nativeEvent;
  return nativeEvent.getModifierState ? nativeEvent.getModifierState(keyArg) : (keyArg = modifierKeyToProp[keyArg]) ? !!nativeEvent[keyArg] : false;
}
function getEventModifierState() {
  return modifierStateGetter;
}
var KeyboardEventInterface = assign({}, UIEventInterface, {
  key: function(nativeEvent) {
    if (nativeEvent.key) {
      var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
      if ("Unidentified" !== key) return key;
    }
    return "keypress" === nativeEvent.type ? (nativeEvent = getEventCharCode(nativeEvent), 13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent)) : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type ? translateToKey[nativeEvent.keyCode] || "Unidentified" : "";
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: getEventModifierState,
  charCode: function(event) {
    return "keypress" === event.type ? getEventCharCode(event) : 0;
  },
  keyCode: function(event) {
    return "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
  },
  which: function(event) {
    return "keypress" === event.type ? getEventCharCode(event) : "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
  }
}), SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface), PointerEventInterface = assign({}, MouseEventInterface, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
}), SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface), TouchEventInterface = assign({}, UIEventInterface, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: getEventModifierState
}), SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface), TransitionEventInterface = assign({}, EventInterface, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface), WheelEventInterface = assign({}, MouseEventInterface, {
  deltaX: function(event) {
    return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
  },
  deltaY: function(event) {
    return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface), ToggleEventInterface = assign({}, EventInterface, {
  newState: 0,
  oldState: 0
}), SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface), END_KEYCODES = [9, 13, 27, 32], canUseCompositionEvent = canUseDOM && "CompositionEvent" in window, documentMode = null;
canUseDOM && "documentMode" in document && (documentMode = document.documentMode);
var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode, useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && 8 < documentMode && 11 >= documentMode), SPACEBAR_CHAR = String.fromCharCode(32), hasSpaceKeypress = false;
function isFallbackCompositionEnd(domEventName, nativeEvent) {
  switch (domEventName) {
    case "keyup":
      return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
    case "keydown":
      return 229 !== nativeEvent.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function getDataFromCustomEvent(nativeEvent) {
  nativeEvent = nativeEvent.detail;
  return "object" === typeof nativeEvent && "data" in nativeEvent ? nativeEvent.data : null;
}
var isComposing = false;
function getNativeBeforeInputChars(domEventName, nativeEvent) {
  switch (domEventName) {
    case "compositionend":
      return getDataFromCustomEvent(nativeEvent);
    case "keypress":
      if (32 !== nativeEvent.which) return null;
      hasSpaceKeypress = true;
      return SPACEBAR_CHAR;
    case "textInput":
      return domEventName = nativeEvent.data, domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName;
    default:
      return null;
  }
}
function getFallbackBeforeInputChars(domEventName, nativeEvent) {
  if (isComposing)
    return "compositionend" === domEventName || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent) ? (domEventName = getData(), fallbackText = startText = root = null, isComposing = false, domEventName) : null;
  switch (domEventName) {
    case "paste":
      return null;
    case "keypress":
      if (!(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) || nativeEvent.ctrlKey && nativeEvent.altKey) {
        if (nativeEvent.char && 1 < nativeEvent.char.length)
          return nativeEvent.char;
        if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
      }
      return null;
    case "compositionend":
      return useFallbackCompositionData && "ko" !== nativeEvent.locale ? null : nativeEvent.data;
    default:
      return null;
  }
}
var supportedInputTypes = {
  color: true,
  date: true,
  datetime: true,
  "datetime-local": true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true
};
function isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return "input" === nodeName ? !!supportedInputTypes[elem.type] : "textarea" === nodeName ? true : false;
}
function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
  restoreTarget ? restoreQueue ? restoreQueue.push(target) : restoreQueue = [target] : restoreTarget = target;
  inst = accumulateTwoPhaseListeners(inst, "onChange");
  0 < inst.length && (nativeEvent = new SyntheticEvent(
    "onChange",
    "change",
    null,
    nativeEvent,
    target
  ), dispatchQueue.push({ event: nativeEvent, listeners: inst }));
}
var activeElement$1 = null, activeElementInst$1 = null;
function runEventInBatch(dispatchQueue) {
  processDispatchQueue(dispatchQueue, 0);
}
function getInstIfValueChanged(targetInst) {
  var targetNode = getNodeFromInstance(targetInst);
  if (updateValueIfChanged(targetNode)) return targetInst;
}
function getTargetInstForChangeEvent(domEventName, targetInst) {
  if ("change" === domEventName) return targetInst;
}
var isInputEventSupported = false;
if (canUseDOM) {
  var JSCompiler_inline_result$jscomp$286;
  if (canUseDOM) {
    var isSupported$jscomp$inline_427 = "oninput" in document;
    if (!isSupported$jscomp$inline_427) {
      var element$jscomp$inline_428 = document.createElement("div");
      element$jscomp$inline_428.setAttribute("oninput", "return;");
      isSupported$jscomp$inline_427 = "function" === typeof element$jscomp$inline_428.oninput;
    }
    JSCompiler_inline_result$jscomp$286 = isSupported$jscomp$inline_427;
  } else JSCompiler_inline_result$jscomp$286 = false;
  isInputEventSupported = JSCompiler_inline_result$jscomp$286 && (!document.documentMode || 9 < document.documentMode);
}
function stopWatchingForValueChange() {
  activeElement$1 && (activeElement$1.detachEvent("onpropertychange", handlePropertyChange), activeElementInst$1 = activeElement$1 = null);
}
function handlePropertyChange(nativeEvent) {
  if ("value" === nativeEvent.propertyName && getInstIfValueChanged(activeElementInst$1)) {
    var dispatchQueue = [];
    createAndAccumulateChangeEvent(
      dispatchQueue,
      activeElementInst$1,
      nativeEvent,
      getEventTarget(nativeEvent)
    );
    batchedUpdates$1(runEventInBatch, dispatchQueue);
  }
}
function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
  "focusin" === domEventName ? (stopWatchingForValueChange(), activeElement$1 = target, activeElementInst$1 = targetInst, activeElement$1.attachEvent("onpropertychange", handlePropertyChange)) : "focusout" === domEventName && stopWatchingForValueChange();
}
function getTargetInstForInputEventPolyfill(domEventName) {
  if ("selectionchange" === domEventName || "keyup" === domEventName || "keydown" === domEventName)
    return getInstIfValueChanged(activeElementInst$1);
}
function getTargetInstForClickEvent(domEventName, targetInst) {
  if ("click" === domEventName) return getInstIfValueChanged(targetInst);
}
function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
  if ("input" === domEventName || "change" === domEventName)
    return getInstIfValueChanged(targetInst);
}
function is(x, y) {
  return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
}
var objectIs = "function" === typeof Object.is ? Object.is : is;
function shallowEqual(objA, objB) {
  if (objectIs(objA, objB)) return true;
  if ("object" !== typeof objA || null === objA || "object" !== typeof objB || null === objB)
    return false;
  var keysA = Object.keys(objA), keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;
  for (keysB = 0; keysB < keysA.length; keysB++) {
    var currentKey = keysA[keysB];
    if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey]))
      return false;
  }
  return true;
}
function getLeafNode(node) {
  for (; node && node.firstChild; ) node = node.firstChild;
  return node;
}
function getNodeForCharacterOffset(root2, offset) {
  var node = getLeafNode(root2);
  root2 = 0;
  for (var nodeEnd; node; ) {
    if (3 === node.nodeType) {
      nodeEnd = root2 + node.textContent.length;
      if (root2 <= offset && nodeEnd >= offset)
        return { node, offset: offset - root2 };
      root2 = nodeEnd;
    }
    a: {
      for (; node; ) {
        if (node.nextSibling) {
          node = node.nextSibling;
          break a;
        }
        node = node.parentNode;
      }
      node = void 0;
    }
    node = getLeafNode(node);
  }
}
function containsNode(outerNode, innerNode) {
  return outerNode && innerNode ? outerNode === innerNode ? true : outerNode && 3 === outerNode.nodeType ? false : innerNode && 3 === innerNode.nodeType ? containsNode(outerNode, innerNode.parentNode) : "contains" in outerNode ? outerNode.contains(innerNode) : outerNode.compareDocumentPosition ? !!(outerNode.compareDocumentPosition(innerNode) & 16) : false : false;
}
function getActiveElementDeep(containerInfo) {
  containerInfo = null != containerInfo && null != containerInfo.ownerDocument && null != containerInfo.ownerDocument.defaultView ? containerInfo.ownerDocument.defaultView : window;
  for (var element = getActiveElement(containerInfo.document); element instanceof containerInfo.HTMLIFrameElement; ) {
    try {
      var JSCompiler_inline_result = "string" === typeof element.contentWindow.location.href;
    } catch (err) {
      JSCompiler_inline_result = false;
    }
    if (JSCompiler_inline_result) containerInfo = element.contentWindow;
    else break;
    element = getActiveElement(containerInfo.document);
  }
  return element;
}
function hasSelectionCapabilities(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return nodeName && ("input" === nodeName && ("text" === elem.type || "search" === elem.type || "tel" === elem.type || "url" === elem.type || "password" === elem.type) || "textarea" === nodeName || "true" === elem.contentEditable);
}
var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && 11 >= document.documentMode, activeElement = null, activeElementInst = null, lastSelection = null, mouseDown = false;
function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
  var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : 9 === nativeEventTarget.nodeType ? nativeEventTarget : nativeEventTarget.ownerDocument;
  mouseDown || null == activeElement || activeElement !== getActiveElement(doc) || (doc = activeElement, "selectionStart" in doc && hasSelectionCapabilities(doc) ? doc = { start: doc.selectionStart, end: doc.selectionEnd } : (doc = (doc.ownerDocument && doc.ownerDocument.defaultView || window).getSelection(), doc = {
    anchorNode: doc.anchorNode,
    anchorOffset: doc.anchorOffset,
    focusNode: doc.focusNode,
    focusOffset: doc.focusOffset
  }), lastSelection && shallowEqual(lastSelection, doc) || (lastSelection = doc, doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect"), 0 < doc.length && (nativeEvent = new SyntheticEvent(
    "onSelect",
    "select",
    null,
    nativeEvent,
    nativeEventTarget
  ), dispatchQueue.push({ event: nativeEvent, listeners: doc }), nativeEvent.target = activeElement)));
}
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit" + styleProp] = "webkit" + eventName;
  prefixes["Moz" + styleProp] = "moz" + eventName;
  return prefixes;
}
var vendorPrefixes = {
  animationend: makePrefixMap("Animation", "AnimationEnd"),
  animationiteration: makePrefixMap("Animation", "AnimationIteration"),
  animationstart: makePrefixMap("Animation", "AnimationStart"),
  transitionrun: makePrefixMap("Transition", "TransitionRun"),
  transitionstart: makePrefixMap("Transition", "TransitionStart"),
  transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
  transitionend: makePrefixMap("Transition", "TransitionEnd")
}, prefixedEventNames = {}, style = {};
canUseDOM && (style = document.createElement("div").style, "AnimationEvent" in window || (delete vendorPrefixes.animationend.animation, delete vendorPrefixes.animationiteration.animation, delete vendorPrefixes.animationstart.animation), "TransitionEvent" in window || delete vendorPrefixes.transitionend.transition);
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
  if (!vendorPrefixes[eventName]) return eventName;
  var prefixMap = vendorPrefixes[eventName], styleProp;
  for (styleProp in prefixMap)
    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
      return prefixedEventNames[eventName] = prefixMap[styleProp];
  return eventName;
}
var ANIMATION_END = getVendorPrefixedEventName("animationend"), ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"), ANIMATION_START = getVendorPrefixedEventName("animationstart"), TRANSITION_RUN = getVendorPrefixedEventName("transitionrun"), TRANSITION_START = getVendorPrefixedEventName("transitionstart"), TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel"), TRANSITION_END = getVendorPrefixedEventName("transitionend"), topLevelEventsToReactNames = /* @__PURE__ */ new Map(), simpleEventPluginEvents = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
  " "
);
simpleEventPluginEvents.push("scrollEnd");
function registerSimpleEvent(domEventName, reactName) {
  topLevelEventsToReactNames.set(domEventName, reactName);
  registerTwoPhaseEvent(reactName, [domEventName]);
}
var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
  if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
    var event = new window.ErrorEvent("error", {
      bubbles: true,
      cancelable: true,
      message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
      error
    });
    if (!window.dispatchEvent(event)) return;
  } else if ("object" === typeof process && "function" === typeof process.emit) {
    process.emit("uncaughtException", error);
    return;
  }
  console.error(error);
}, concurrentQueues = [], concurrentQueuesIndex = 0, concurrentlyUpdatedLanes = 0;
function finishQueueingConcurrentUpdates() {
  for (var endIndex = concurrentQueuesIndex, i = concurrentlyUpdatedLanes = concurrentQueuesIndex = 0; i < endIndex; ) {
    var fiber = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var queue = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var update = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var lane = concurrentQueues[i];
    concurrentQueues[i++] = null;
    if (null !== queue && null !== update) {
      var pending = queue.pending;
      null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
      queue.pending = update;
    }
    0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
  }
}
function enqueueUpdate$1(fiber, queue, update, lane) {
  concurrentQueues[concurrentQueuesIndex++] = fiber;
  concurrentQueues[concurrentQueuesIndex++] = queue;
  concurrentQueues[concurrentQueuesIndex++] = update;
  concurrentQueues[concurrentQueuesIndex++] = lane;
  concurrentlyUpdatedLanes |= lane;
  fiber.lanes |= lane;
  fiber = fiber.alternate;
  null !== fiber && (fiber.lanes |= lane);
}
function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
  enqueueUpdate$1(fiber, queue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function enqueueConcurrentRenderForLane(fiber, lane) {
  enqueueUpdate$1(fiber, null, null, lane);
  return getRootForUpdatedFiber(fiber);
}
function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
  sourceFiber.lanes |= lane;
  var alternate = sourceFiber.alternate;
  null !== alternate && (alternate.lanes |= lane);
  for (var isHidden = false, parent = sourceFiber.return; null !== parent; )
    parent.childLanes |= lane, alternate = parent.alternate, null !== alternate && (alternate.childLanes |= lane), 22 === parent.tag && (sourceFiber = parent.stateNode, null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = true)), sourceFiber = parent, parent = parent.return;
  return 3 === sourceFiber.tag ? (parent = sourceFiber.stateNode, isHidden && null !== update && (isHidden = 31 - clz32(lane), sourceFiber = parent.hiddenUpdates, alternate = sourceFiber[isHidden], null === alternate ? sourceFiber[isHidden] = [update] : alternate.push(update), update.lane = lane | 536870912), parent) : null;
}
function getRootForUpdatedFiber(sourceFiber) {
  if (50 < nestedUpdateCount)
    throw nestedUpdateCount = 0, rootWithNestedUpdates = null, Error(formatProdErrorMessage(185));
  for (var parent = sourceFiber.return; null !== parent; )
    sourceFiber = parent, parent = sourceFiber.return;
  return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
}
var emptyContextObject = {};
function FiberNode(tag, pendingProps, key, mode) {
  this.tag = tag;
  this.key = key;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.refCleanup = this.ref = null;
  this.pendingProps = pendingProps;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = mode;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function createFiberImplClass(tag, pendingProps, key, mode) {
  return new FiberNode(tag, pendingProps, key, mode);
}
function shouldConstruct(Component2) {
  Component2 = Component2.prototype;
  return !(!Component2 || !Component2.isReactComponent);
}
function createWorkInProgress(current, pendingProps) {
  var workInProgress2 = current.alternate;
  null === workInProgress2 ? (workInProgress2 = createFiberImplClass(
    current.tag,
    pendingProps,
    current.key,
    current.mode
  ), workInProgress2.elementType = current.elementType, workInProgress2.type = current.type, workInProgress2.stateNode = current.stateNode, workInProgress2.alternate = current, current.alternate = workInProgress2) : (workInProgress2.pendingProps = pendingProps, workInProgress2.type = current.type, workInProgress2.flags = 0, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null);
  workInProgress2.flags = current.flags & 65011712;
  workInProgress2.childLanes = current.childLanes;
  workInProgress2.lanes = current.lanes;
  workInProgress2.child = current.child;
  workInProgress2.memoizedProps = current.memoizedProps;
  workInProgress2.memoizedState = current.memoizedState;
  workInProgress2.updateQueue = current.updateQueue;
  pendingProps = current.dependencies;
  workInProgress2.dependencies = null === pendingProps ? null : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
  workInProgress2.sibling = current.sibling;
  workInProgress2.index = current.index;
  workInProgress2.ref = current.ref;
  workInProgress2.refCleanup = current.refCleanup;
  return workInProgress2;
}
function resetWorkInProgress(workInProgress2, renderLanes2) {
  workInProgress2.flags &= 65011714;
  var current = workInProgress2.alternate;
  null === current ? (workInProgress2.childLanes = 0, workInProgress2.lanes = renderLanes2, workInProgress2.child = null, workInProgress2.subtreeFlags = 0, workInProgress2.memoizedProps = null, workInProgress2.memoizedState = null, workInProgress2.updateQueue = null, workInProgress2.dependencies = null, workInProgress2.stateNode = null) : (workInProgress2.childLanes = current.childLanes, workInProgress2.lanes = current.lanes, workInProgress2.child = current.child, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null, workInProgress2.memoizedProps = current.memoizedProps, workInProgress2.memoizedState = current.memoizedState, workInProgress2.updateQueue = current.updateQueue, workInProgress2.type = current.type, renderLanes2 = current.dependencies, workInProgress2.dependencies = null === renderLanes2 ? null : {
    lanes: renderLanes2.lanes,
    firstContext: renderLanes2.firstContext
  });
  return workInProgress2;
}
function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
  var fiberTag = 0;
  owner = type;
  if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
  else if ("string" === typeof type)
    fiberTag = isHostHoistableType(
      type,
      pendingProps,
      contextStackCursor.current
    ) ? 26 : "html" === type || "head" === type || "body" === type ? 27 : 5;
  else
    a: switch (type) {
      case REACT_ACTIVITY_TYPE:
        return type = createFiberImplClass(31, pendingProps, key, mode), type.elementType = REACT_ACTIVITY_TYPE, type.lanes = lanes, type;
      case REACT_FRAGMENT_TYPE:
        return createFiberFromFragment(pendingProps.children, mode, lanes, key);
      case REACT_STRICT_MODE_TYPE:
        fiberTag = 8;
        mode |= 24;
        break;
      case REACT_PROFILER_TYPE:
        return type = createFiberImplClass(12, pendingProps, key, mode | 2), type.elementType = REACT_PROFILER_TYPE, type.lanes = lanes, type;
      case REACT_SUSPENSE_TYPE:
        return type = createFiberImplClass(13, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_TYPE, type.lanes = lanes, type;
      case REACT_SUSPENSE_LIST_TYPE:
        return type = createFiberImplClass(19, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_LIST_TYPE, type.lanes = lanes, type;
      default:
        if ("object" === typeof type && null !== type)
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              fiberTag = 10;
              break a;
            case REACT_CONSUMER_TYPE:
              fiberTag = 9;
              break a;
            case REACT_FORWARD_REF_TYPE:
              fiberTag = 11;
              break a;
            case REACT_MEMO_TYPE:
              fiberTag = 14;
              break a;
            case REACT_LAZY_TYPE:
              fiberTag = 16;
              owner = null;
              break a;
          }
        fiberTag = 29;
        pendingProps = Error(
          formatProdErrorMessage(130, null === type ? "null" : typeof type, "")
        );
        owner = null;
    }
  key = createFiberImplClass(fiberTag, pendingProps, key, mode);
  key.elementType = type;
  key.type = owner;
  key.lanes = lanes;
  return key;
}
function createFiberFromFragment(elements, mode, lanes, key) {
  elements = createFiberImplClass(7, elements, key, mode);
  elements.lanes = lanes;
  return elements;
}
function createFiberFromText(content, mode, lanes) {
  content = createFiberImplClass(6, content, null, mode);
  content.lanes = lanes;
  return content;
}
function createFiberFromDehydratedFragment(dehydratedNode) {
  var fiber = createFiberImplClass(18, null, null, 0);
  fiber.stateNode = dehydratedNode;
  return fiber;
}
function createFiberFromPortal(portal, mode, lanes) {
  mode = createFiberImplClass(
    4,
    null !== portal.children ? portal.children : [],
    portal.key,
    mode
  );
  mode.lanes = lanes;
  mode.stateNode = {
    containerInfo: portal.containerInfo,
    pendingChildren: null,
    implementation: portal.implementation
  };
  return mode;
}
var CapturedStacks = /* @__PURE__ */ new WeakMap();
function createCapturedValueAtFiber(value, source) {
  if ("object" === typeof value && null !== value) {
    var existing = CapturedStacks.get(value);
    if (void 0 !== existing) return existing;
    source = {
      value,
      source,
      stack: getStackByFiberInDevAndProd(source)
    };
    CapturedStacks.set(value, source);
    return source;
  }
  return {
    value,
    source,
    stack: getStackByFiberInDevAndProd(source)
  };
}
var forkStack = [], forkStackIndex = 0, treeForkProvider = null, treeForkCount = 0, idStack = [], idStackIndex = 0, treeContextProvider = null, treeContextId = 1, treeContextOverflow = "";
function pushTreeFork(workInProgress2, totalChildren) {
  forkStack[forkStackIndex++] = treeForkCount;
  forkStack[forkStackIndex++] = treeForkProvider;
  treeForkProvider = workInProgress2;
  treeForkCount = totalChildren;
}
function pushTreeId(workInProgress2, totalChildren, index2) {
  idStack[idStackIndex++] = treeContextId;
  idStack[idStackIndex++] = treeContextOverflow;
  idStack[idStackIndex++] = treeContextProvider;
  treeContextProvider = workInProgress2;
  var baseIdWithLeadingBit = treeContextId;
  workInProgress2 = treeContextOverflow;
  var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
  baseIdWithLeadingBit &= ~(1 << baseLength);
  index2 += 1;
  var length = 32 - clz32(totalChildren) + baseLength;
  if (30 < length) {
    var numberOfOverflowBits = baseLength - baseLength % 5;
    length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
    baseIdWithLeadingBit >>= numberOfOverflowBits;
    baseLength -= numberOfOverflowBits;
    treeContextId = 1 << 32 - clz32(totalChildren) + baseLength | index2 << baseLength | baseIdWithLeadingBit;
    treeContextOverflow = length + workInProgress2;
  } else
    treeContextId = 1 << length | index2 << baseLength | baseIdWithLeadingBit, treeContextOverflow = workInProgress2;
}
function pushMaterializedTreeId(workInProgress2) {
  null !== workInProgress2.return && (pushTreeFork(workInProgress2, 1), pushTreeId(workInProgress2, 1, 0));
}
function popTreeContext(workInProgress2) {
  for (; workInProgress2 === treeForkProvider; )
    treeForkProvider = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null, treeForkCount = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null;
  for (; workInProgress2 === treeContextProvider; )
    treeContextProvider = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextOverflow = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextId = idStack[--idStackIndex], idStack[idStackIndex] = null;
}
function restoreSuspendedTreeContext(workInProgress2, suspendedContext) {
  idStack[idStackIndex++] = treeContextId;
  idStack[idStackIndex++] = treeContextOverflow;
  idStack[idStackIndex++] = treeContextProvider;
  treeContextId = suspendedContext.id;
  treeContextOverflow = suspendedContext.overflow;
  treeContextProvider = workInProgress2;
}
var hydrationParentFiber = null, nextHydratableInstance = null, isHydrating = false, hydrationErrors = null, rootOrSingletonContext = false, HydrationMismatchException = Error(formatProdErrorMessage(519));
function throwOnHydrationMismatch(fiber) {
  var error = Error(
    formatProdErrorMessage(
      418,
      1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML",
      ""
    )
  );
  queueHydrationError(createCapturedValueAtFiber(error, fiber));
  throw HydrationMismatchException;
}
function prepareToHydrateHostInstance(fiber) {
  var instance = fiber.stateNode, type = fiber.type, props = fiber.memoizedProps;
  instance[internalInstanceKey] = fiber;
  instance[internalPropsKey] = props;
  switch (type) {
    case "dialog":
      listenToNonDelegatedEvent("cancel", instance);
      listenToNonDelegatedEvent("close", instance);
      break;
    case "iframe":
    case "object":
    case "embed":
      listenToNonDelegatedEvent("load", instance);
      break;
    case "video":
    case "audio":
      for (type = 0; type < mediaEventTypes.length; type++)
        listenToNonDelegatedEvent(mediaEventTypes[type], instance);
      break;
    case "source":
      listenToNonDelegatedEvent("error", instance);
      break;
    case "img":
    case "image":
    case "link":
      listenToNonDelegatedEvent("error", instance);
      listenToNonDelegatedEvent("load", instance);
      break;
    case "details":
      listenToNonDelegatedEvent("toggle", instance);
      break;
    case "input":
      listenToNonDelegatedEvent("invalid", instance);
      initInput(
        instance,
        props.value,
        props.defaultValue,
        props.checked,
        props.defaultChecked,
        props.type,
        props.name,
        true
      );
      break;
    case "select":
      listenToNonDelegatedEvent("invalid", instance);
      break;
    case "textarea":
      listenToNonDelegatedEvent("invalid", instance), initTextarea(instance, props.value, props.defaultValue, props.children);
  }
  type = props.children;
  "string" !== typeof type && "number" !== typeof type && "bigint" !== typeof type || instance.textContent === "" + type || true === props.suppressHydrationWarning || checkForUnmatchedText(instance.textContent, type) ? (null != props.popover && (listenToNonDelegatedEvent("beforetoggle", instance), listenToNonDelegatedEvent("toggle", instance)), null != props.onScroll && listenToNonDelegatedEvent("scroll", instance), null != props.onScrollEnd && listenToNonDelegatedEvent("scrollend", instance), null != props.onClick && (instance.onclick = noop$1), instance = true) : instance = false;
  instance || throwOnHydrationMismatch(fiber, true);
}
function popToNextHostParent(fiber) {
  for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
    switch (hydrationParentFiber.tag) {
      case 5:
      case 31:
      case 13:
        rootOrSingletonContext = false;
        return;
      case 27:
      case 3:
        rootOrSingletonContext = true;
        return;
      default:
        hydrationParentFiber = hydrationParentFiber.return;
    }
}
function popHydrationState(fiber) {
  if (fiber !== hydrationParentFiber) return false;
  if (!isHydrating) return popToNextHostParent(fiber), isHydrating = true, false;
  var tag = fiber.tag, JSCompiler_temp;
  if (JSCompiler_temp = 3 !== tag && 27 !== tag) {
    if (JSCompiler_temp = 5 === tag)
      JSCompiler_temp = fiber.type, JSCompiler_temp = !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) || shouldSetTextContent(fiber.type, fiber.memoizedProps);
    JSCompiler_temp = !JSCompiler_temp;
  }
  JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
  popToNextHostParent(fiber);
  if (13 === tag) {
    fiber = fiber.memoizedState;
    fiber = null !== fiber ? fiber.dehydrated : null;
    if (!fiber) throw Error(formatProdErrorMessage(317));
    nextHydratableInstance = getNextHydratableInstanceAfterHydrationBoundary(fiber);
  } else if (31 === tag) {
    fiber = fiber.memoizedState;
    fiber = null !== fiber ? fiber.dehydrated : null;
    if (!fiber) throw Error(formatProdErrorMessage(317));
    nextHydratableInstance = getNextHydratableInstanceAfterHydrationBoundary(fiber);
  } else
    27 === tag ? (tag = nextHydratableInstance, isSingletonScope(fiber.type) ? (fiber = previousHydratableOnEnteringScopedSingleton, previousHydratableOnEnteringScopedSingleton = null, nextHydratableInstance = fiber) : nextHydratableInstance = tag) : nextHydratableInstance = hydrationParentFiber ? getNextHydratable(fiber.stateNode.nextSibling) : null;
  return true;
}
function resetHydrationState() {
  nextHydratableInstance = hydrationParentFiber = null;
  isHydrating = false;
}
function upgradeHydrationErrorsToRecoverable() {
  var queuedErrors = hydrationErrors;
  null !== queuedErrors && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = queuedErrors : workInProgressRootRecoverableErrors.push.apply(
    workInProgressRootRecoverableErrors,
    queuedErrors
  ), hydrationErrors = null);
  return queuedErrors;
}
function queueHydrationError(error) {
  null === hydrationErrors ? hydrationErrors = [error] : hydrationErrors.push(error);
}
var valueCursor = createCursor(null), currentlyRenderingFiber$1 = null, lastContextDependency = null;
function pushProvider(providerFiber, context3, nextValue) {
  push(valueCursor, context3._currentValue);
  context3._currentValue = nextValue;
}
function popProvider(context3) {
  context3._currentValue = valueCursor.current;
  pop(valueCursor);
}
function scheduleContextWorkOnParentPath(parent, renderLanes2, propagationRoot) {
  for (; null !== parent; ) {
    var alternate = parent.alternate;
    (parent.childLanes & renderLanes2) !== renderLanes2 ? (parent.childLanes |= renderLanes2, null !== alternate && (alternate.childLanes |= renderLanes2)) : null !== alternate && (alternate.childLanes & renderLanes2) !== renderLanes2 && (alternate.childLanes |= renderLanes2);
    if (parent === propagationRoot) break;
    parent = parent.return;
  }
}
function propagateContextChanges(workInProgress2, contexts, renderLanes2, forcePropagateEntireTree) {
  var fiber = workInProgress2.child;
  null !== fiber && (fiber.return = workInProgress2);
  for (; null !== fiber; ) {
    var list = fiber.dependencies;
    if (null !== list) {
      var nextFiber = fiber.child;
      list = list.firstContext;
      a: for (; null !== list; ) {
        var dependency = list;
        list = fiber;
        for (var i = 0; i < contexts.length; i++)
          if (dependency.context === contexts[i]) {
            list.lanes |= renderLanes2;
            dependency = list.alternate;
            null !== dependency && (dependency.lanes |= renderLanes2);
            scheduleContextWorkOnParentPath(
              list.return,
              renderLanes2,
              workInProgress2
            );
            forcePropagateEntireTree || (nextFiber = null);
            break a;
          }
        list = dependency.next;
      }
    } else if (18 === fiber.tag) {
      nextFiber = fiber.return;
      if (null === nextFiber) throw Error(formatProdErrorMessage(341));
      nextFiber.lanes |= renderLanes2;
      list = nextFiber.alternate;
      null !== list && (list.lanes |= renderLanes2);
      scheduleContextWorkOnParentPath(nextFiber, renderLanes2, workInProgress2);
      nextFiber = null;
    } else nextFiber = fiber.child;
    if (null !== nextFiber) nextFiber.return = fiber;
    else
      for (nextFiber = fiber; null !== nextFiber; ) {
        if (nextFiber === workInProgress2) {
          nextFiber = null;
          break;
        }
        fiber = nextFiber.sibling;
        if (null !== fiber) {
          fiber.return = nextFiber.return;
          nextFiber = fiber;
          break;
        }
        nextFiber = nextFiber.return;
      }
    fiber = nextFiber;
  }
}
function propagateParentContextChanges(current, workInProgress2, renderLanes2, forcePropagateEntireTree) {
  current = null;
  for (var parent = workInProgress2, isInsidePropagationBailout = false; null !== parent; ) {
    if (!isInsidePropagationBailout) {
      if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = true;
      else if (0 !== (parent.flags & 262144)) break;
    }
    if (10 === parent.tag) {
      var currentParent = parent.alternate;
      if (null === currentParent) throw Error(formatProdErrorMessage(387));
      currentParent = currentParent.memoizedProps;
      if (null !== currentParent) {
        var context3 = parent.type;
        objectIs(parent.pendingProps.value, currentParent.value) || (null !== current ? current.push(context3) : current = [context3]);
      }
    } else if (parent === hostTransitionProviderCursor.current) {
      currentParent = parent.alternate;
      if (null === currentParent) throw Error(formatProdErrorMessage(387));
      currentParent.memoizedState.memoizedState !== parent.memoizedState.memoizedState && (null !== current ? current.push(HostTransitionContext) : current = [HostTransitionContext]);
    }
    parent = parent.return;
  }
  null !== current && propagateContextChanges(
    workInProgress2,
    current,
    renderLanes2,
    forcePropagateEntireTree
  );
  workInProgress2.flags |= 262144;
}
function checkIfContextChanged(currentDependencies) {
  for (currentDependencies = currentDependencies.firstContext; null !== currentDependencies; ) {
    if (!objectIs(
      currentDependencies.context._currentValue,
      currentDependencies.memoizedValue
    ))
      return true;
    currentDependencies = currentDependencies.next;
  }
  return false;
}
function prepareToReadContext(workInProgress2) {
  currentlyRenderingFiber$1 = workInProgress2;
  lastContextDependency = null;
  workInProgress2 = workInProgress2.dependencies;
  null !== workInProgress2 && (workInProgress2.firstContext = null);
}
function readContext(context3) {
  return readContextForConsumer(currentlyRenderingFiber$1, context3);
}
function readContextDuringReconciliation(consumer, context3) {
  null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
  return readContextForConsumer(consumer, context3);
}
function readContextForConsumer(consumer, context3) {
  var value = context3._currentValue;
  context3 = { context: context3, memoizedValue: value, next: null };
  if (null === lastContextDependency) {
    if (null === consumer) throw Error(formatProdErrorMessage(308));
    lastContextDependency = context3;
    consumer.dependencies = { lanes: 0, firstContext: context3 };
    consumer.flags |= 524288;
  } else lastContextDependency = lastContextDependency.next = context3;
  return value;
}
var AbortControllerLocal = "undefined" !== typeof AbortController ? AbortController : function() {
  var listeners = [], signal = this.signal = {
    aborted: false,
    addEventListener: function(type, listener) {
      listeners.push(listener);
    }
  };
  this.abort = function() {
    signal.aborted = true;
    listeners.forEach(function(listener) {
      return listener();
    });
  };
}, scheduleCallback$2 = Scheduler.unstable_scheduleCallback, NormalPriority = Scheduler.unstable_NormalPriority, CacheContext = {
  $$typeof: REACT_CONTEXT_TYPE,
  Consumer: null,
  Provider: null,
  _currentValue: null,
  _currentValue2: null,
  _threadCount: 0
};
function createCache() {
  return {
    controller: new AbortControllerLocal(),
    data: /* @__PURE__ */ new Map(),
    refCount: 0
  };
}
function releaseCache(cache) {
  cache.refCount--;
  0 === cache.refCount && scheduleCallback$2(NormalPriority, function() {
    cache.controller.abort();
  });
}
var currentEntangledListeners = null, currentEntangledPendingCount = 0, currentEntangledLane = 0, currentEntangledActionThenable = null;
function entangleAsyncAction(transition, thenable) {
  if (null === currentEntangledListeners) {
    var entangledListeners = currentEntangledListeners = [];
    currentEntangledPendingCount = 0;
    currentEntangledLane = requestTransitionLane();
    currentEntangledActionThenable = {
      status: "pending",
      value: void 0,
      then: function(resolve) {
        entangledListeners.push(resolve);
      }
    };
  }
  currentEntangledPendingCount++;
  thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
  return thenable;
}
function pingEngtangledActionScope() {
  if (0 === --currentEntangledPendingCount && null !== currentEntangledListeners) {
    null !== currentEntangledActionThenable && (currentEntangledActionThenable.status = "fulfilled");
    var listeners = currentEntangledListeners;
    currentEntangledListeners = null;
    currentEntangledLane = 0;
    currentEntangledActionThenable = null;
    for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
  }
}
function chainThenableValue(thenable, result) {
  var listeners = [], thenableWithOverride = {
    status: "pending",
    value: null,
    reason: null,
    then: function(resolve) {
      listeners.push(resolve);
    }
  };
  thenable.then(
    function() {
      thenableWithOverride.status = "fulfilled";
      thenableWithOverride.value = result;
      for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
    },
    function(error) {
      thenableWithOverride.status = "rejected";
      thenableWithOverride.reason = error;
      for (error = 0; error < listeners.length; error++)
        (0, listeners[error])(void 0);
    }
  );
  return thenableWithOverride;
}
var prevOnStartTransitionFinish = ReactSharedInternals.S;
ReactSharedInternals.S = function(transition, returnValue) {
  globalMostRecentTransitionTime = now();
  "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && entangleAsyncAction(transition, returnValue);
  null !== prevOnStartTransitionFinish && prevOnStartTransitionFinish(transition, returnValue);
};
var resumedCache = createCursor(null);
function peekCacheFromPool() {
  var cacheResumedFromPreviousRender = resumedCache.current;
  return null !== cacheResumedFromPreviousRender ? cacheResumedFromPreviousRender : workInProgressRoot.pooledCache;
}
function pushTransition(offscreenWorkInProgress, prevCachePool) {
  null === prevCachePool ? push(resumedCache, resumedCache.current) : push(resumedCache, prevCachePool.pool);
}
function getSuspendedCache() {
  var cacheFromPool = peekCacheFromPool();
  return null === cacheFromPool ? null : { parent: CacheContext._currentValue, pool: cacheFromPool };
}
var SuspenseException = Error(formatProdErrorMessage(460)), SuspenseyCommitException = Error(formatProdErrorMessage(474)), SuspenseActionException = Error(formatProdErrorMessage(542)), noopSuspenseyCommitThenable = { then: function() {
} };
function isThenableResolved(thenable) {
  thenable = thenable.status;
  return "fulfilled" === thenable || "rejected" === thenable;
}
function trackUsedThenable(thenableState2, thenable, index2) {
  index2 = thenableState2[index2];
  void 0 === index2 ? thenableState2.push(thenable) : index2 !== thenable && (thenable.then(noop$1, noop$1), thenable = index2);
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw thenableState2 = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState2), thenableState2;
    default:
      if ("string" === typeof thenable.status) thenable.then(noop$1, noop$1);
      else {
        thenableState2 = workInProgressRoot;
        if (null !== thenableState2 && 100 < thenableState2.shellSuspendCounter)
          throw Error(formatProdErrorMessage(482));
        thenableState2 = thenable;
        thenableState2.status = "pending";
        thenableState2.then(
          function(fulfilledValue) {
            if ("pending" === thenable.status) {
              var fulfilledThenable = thenable;
              fulfilledThenable.status = "fulfilled";
              fulfilledThenable.value = fulfilledValue;
            }
          },
          function(error) {
            if ("pending" === thenable.status) {
              var rejectedThenable = thenable;
              rejectedThenable.status = "rejected";
              rejectedThenable.reason = error;
            }
          }
        );
      }
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenableState2 = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState2), thenableState2;
      }
      suspendedThenable = thenable;
      throw SuspenseException;
  }
}
function resolveLazy(lazyType) {
  try {
    var init4 = lazyType._init;
    return init4(lazyType._payload);
  } catch (x) {
    if (null !== x && "object" === typeof x && "function" === typeof x.then)
      throw suspendedThenable = x, SuspenseException;
    throw x;
  }
}
var suspendedThenable = null;
function getSuspendedThenable() {
  if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
  var thenable = suspendedThenable;
  suspendedThenable = null;
  return thenable;
}
function checkIfUseWrappedInAsyncCatch(rejectedReason) {
  if (rejectedReason === SuspenseException || rejectedReason === SuspenseActionException)
    throw Error(formatProdErrorMessage(483));
}
var thenableState$1 = null, thenableIndexCounter$1 = 0;
function unwrapThenable(thenable) {
  var index2 = thenableIndexCounter$1;
  thenableIndexCounter$1 += 1;
  null === thenableState$1 && (thenableState$1 = []);
  return trackUsedThenable(thenableState$1, thenable, index2);
}
function coerceRef(workInProgress2, element) {
  element = element.props.ref;
  workInProgress2.ref = void 0 !== element ? element : null;
}
function throwOnInvalidObjectTypeImpl(returnFiber, newChild) {
  if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
    throw Error(formatProdErrorMessage(525));
  returnFiber = Object.prototype.toString.call(newChild);
  throw Error(
    formatProdErrorMessage(
      31,
      "[object Object]" === returnFiber ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : returnFiber
    )
  );
}
function createChildReconciler(shouldTrackSideEffects) {
  function deleteChild(returnFiber, childToDelete) {
    if (shouldTrackSideEffects) {
      var deletions = returnFiber.deletions;
      null === deletions ? (returnFiber.deletions = [childToDelete], returnFiber.flags |= 16) : deletions.push(childToDelete);
    }
  }
  function deleteRemainingChildren(returnFiber, currentFirstChild) {
    if (!shouldTrackSideEffects) return null;
    for (; null !== currentFirstChild; )
      deleteChild(returnFiber, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
    return null;
  }
  function mapRemainingChildren(currentFirstChild) {
    for (var existingChildren = /* @__PURE__ */ new Map(); null !== currentFirstChild; )
      null !== currentFirstChild.key ? existingChildren.set(currentFirstChild.key, currentFirstChild) : existingChildren.set(currentFirstChild.index, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
    return existingChildren;
  }
  function useFiber(fiber, pendingProps) {
    fiber = createWorkInProgress(fiber, pendingProps);
    fiber.index = 0;
    fiber.sibling = null;
    return fiber;
  }
  function placeChild(newFiber, lastPlacedIndex, newIndex) {
    newFiber.index = newIndex;
    if (!shouldTrackSideEffects)
      return newFiber.flags |= 1048576, lastPlacedIndex;
    newIndex = newFiber.alternate;
    if (null !== newIndex)
      return newIndex = newIndex.index, newIndex < lastPlacedIndex ? (newFiber.flags |= 67108866, lastPlacedIndex) : newIndex;
    newFiber.flags |= 67108866;
    return lastPlacedIndex;
  }
  function placeSingleChild(newFiber) {
    shouldTrackSideEffects && null === newFiber.alternate && (newFiber.flags |= 67108866);
    return newFiber;
  }
  function updateTextNode(returnFiber, current, textContent, lanes) {
    if (null === current || 6 !== current.tag)
      return current = createFiberFromText(textContent, returnFiber.mode, lanes), current.return = returnFiber, current;
    current = useFiber(current, textContent);
    current.return = returnFiber;
    return current;
  }
  function updateElement(returnFiber, current, element, lanes) {
    var elementType = element.type;
    if (elementType === REACT_FRAGMENT_TYPE)
      return updateFragment(
        returnFiber,
        current,
        element.props.children,
        lanes,
        element.key
      );
    if (null !== current && (current.elementType === elementType || "object" === typeof elementType && null !== elementType && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === current.type))
      return current = useFiber(current, element.props), coerceRef(current, element), current.return = returnFiber, current;
    current = createFiberFromTypeAndProps(
      element.type,
      element.key,
      element.props,
      null,
      returnFiber.mode,
      lanes
    );
    coerceRef(current, element);
    current.return = returnFiber;
    return current;
  }
  function updatePortal(returnFiber, current, portal, lanes) {
    if (null === current || 4 !== current.tag || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation)
      return current = createFiberFromPortal(portal, returnFiber.mode, lanes), current.return = returnFiber, current;
    current = useFiber(current, portal.children || []);
    current.return = returnFiber;
    return current;
  }
  function updateFragment(returnFiber, current, fragment, lanes, key) {
    if (null === current || 7 !== current.tag)
      return current = createFiberFromFragment(
        fragment,
        returnFiber.mode,
        lanes,
        key
      ), current.return = returnFiber, current;
    current = useFiber(current, fragment);
    current.return = returnFiber;
    return current;
  }
  function createChild(returnFiber, newChild, lanes) {
    if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
      return newChild = createFiberFromText(
        "" + newChild,
        returnFiber.mode,
        lanes
      ), newChild.return = returnFiber, newChild;
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return lanes = createFiberFromTypeAndProps(
            newChild.type,
            newChild.key,
            newChild.props,
            null,
            returnFiber.mode,
            lanes
          ), coerceRef(lanes, newChild), lanes.return = returnFiber, lanes;
        case REACT_PORTAL_TYPE:
          return newChild = createFiberFromPortal(
            newChild,
            returnFiber.mode,
            lanes
          ), newChild.return = returnFiber, newChild;
        case REACT_LAZY_TYPE:
          return newChild = resolveLazy(newChild), createChild(returnFiber, newChild, lanes);
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return newChild = createFiberFromFragment(
          newChild,
          returnFiber.mode,
          lanes,
          null
        ), newChild.return = returnFiber, newChild;
      if ("function" === typeof newChild.then)
        return createChild(returnFiber, unwrapThenable(newChild), lanes);
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return createChild(
          returnFiber,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
    }
    return null;
  }
  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
    var key = null !== oldFiber ? oldFiber.key : null;
    if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
      return null !== key ? null : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return newChild.key === key ? updateElement(returnFiber, oldFiber, newChild, lanes) : null;
        case REACT_PORTAL_TYPE:
          return newChild.key === key ? updatePortal(returnFiber, oldFiber, newChild, lanes) : null;
        case REACT_LAZY_TYPE:
          return newChild = resolveLazy(newChild), updateSlot(returnFiber, oldFiber, newChild, lanes);
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return null !== key ? null : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
      if ("function" === typeof newChild.then)
        return updateSlot(
          returnFiber,
          oldFiber,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return updateSlot(
          returnFiber,
          oldFiber,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
    }
    return null;
  }
  function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
    if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
      return existingChildren = existingChildren.get(newIdx) || null, updateTextNode(returnFiber, existingChildren, "" + newChild, lanes);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return existingChildren = existingChildren.get(
            null === newChild.key ? newIdx : newChild.key
          ) || null, updateElement(returnFiber, existingChildren, newChild, lanes);
        case REACT_PORTAL_TYPE:
          return existingChildren = existingChildren.get(
            null === newChild.key ? newIdx : newChild.key
          ) || null, updatePortal(returnFiber, existingChildren, newChild, lanes);
        case REACT_LAZY_TYPE:
          return newChild = resolveLazy(newChild), updateFromMap(
            existingChildren,
            returnFiber,
            newIdx,
            newChild,
            lanes
          );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return existingChildren = existingChildren.get(newIdx) || null, updateFragment(returnFiber, existingChildren, newChild, lanes, null);
      if ("function" === typeof newChild.then)
        return updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
    }
    return null;
  }
  function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
    for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null; null !== oldFiber && newIdx < newChildren.length; newIdx++) {
      oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
      var newFiber = updateSlot(
        returnFiber,
        oldFiber,
        newChildren[newIdx],
        lanes
      );
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (newIdx === newChildren.length)
      return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
    if (null === oldFiber) {
      for (; newIdx < newChildren.length; newIdx++)
        oldFiber = createChild(returnFiber, newChildren[newIdx], lanes), null !== oldFiber && (currentFirstChild = placeChild(
          oldFiber,
          currentFirstChild,
          newIdx
        ), null === previousNewFiber ? resultingFirstChild = oldFiber : previousNewFiber.sibling = oldFiber, previousNewFiber = oldFiber);
      isHydrating && pushTreeFork(returnFiber, newIdx);
      return resultingFirstChild;
    }
    for (oldFiber = mapRemainingChildren(oldFiber); newIdx < newChildren.length; newIdx++)
      nextOldFiber = updateFromMap(
        oldFiber,
        returnFiber,
        newIdx,
        newChildren[newIdx],
        lanes
      ), null !== nextOldFiber && (shouldTrackSideEffects && null !== nextOldFiber.alternate && oldFiber.delete(
        null === nextOldFiber.key ? newIdx : nextOldFiber.key
      ), currentFirstChild = placeChild(
        nextOldFiber,
        currentFirstChild,
        newIdx
      ), null === previousNewFiber ? resultingFirstChild = nextOldFiber : previousNewFiber.sibling = nextOldFiber, previousNewFiber = nextOldFiber);
    shouldTrackSideEffects && oldFiber.forEach(function(child) {
      return deleteChild(returnFiber, child);
    });
    isHydrating && pushTreeFork(returnFiber, newIdx);
    return resultingFirstChild;
  }
  function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildren, lanes) {
    if (null == newChildren) throw Error(formatProdErrorMessage(151));
    for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null, step = newChildren.next(); null !== oldFiber && !step.done; newIdx++, step = newChildren.next()) {
      oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
      var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (step.done)
      return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
    if (null === oldFiber) {
      for (; !step.done; newIdx++, step = newChildren.next())
        step = createChild(returnFiber, step.value, lanes), null !== step && (currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
      isHydrating && pushTreeFork(returnFiber, newIdx);
      return resultingFirstChild;
    }
    for (oldFiber = mapRemainingChildren(oldFiber); !step.done; newIdx++, step = newChildren.next())
      step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes), null !== step && (shouldTrackSideEffects && null !== step.alternate && oldFiber.delete(null === step.key ? newIdx : step.key), currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
    shouldTrackSideEffects && oldFiber.forEach(function(child) {
      return deleteChild(returnFiber, child);
    });
    isHydrating && pushTreeFork(returnFiber, newIdx);
    return resultingFirstChild;
  }
  function reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes) {
    "object" === typeof newChild && null !== newChild && newChild.type === REACT_FRAGMENT_TYPE && null === newChild.key && (newChild = newChild.props.children);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          a: {
            for (var key = newChild.key; null !== currentFirstChild; ) {
              if (currentFirstChild.key === key) {
                key = newChild.type;
                if (key === REACT_FRAGMENT_TYPE) {
                  if (7 === currentFirstChild.tag) {
                    deleteRemainingChildren(
                      returnFiber,
                      currentFirstChild.sibling
                    );
                    lanes = useFiber(
                      currentFirstChild,
                      newChild.props.children
                    );
                    lanes.return = returnFiber;
                    returnFiber = lanes;
                    break a;
                  }
                } else if (currentFirstChild.elementType === key || "object" === typeof key && null !== key && key.$$typeof === REACT_LAZY_TYPE && resolveLazy(key) === currentFirstChild.type) {
                  deleteRemainingChildren(
                    returnFiber,
                    currentFirstChild.sibling
                  );
                  lanes = useFiber(currentFirstChild, newChild.props);
                  coerceRef(lanes, newChild);
                  lanes.return = returnFiber;
                  returnFiber = lanes;
                  break a;
                }
                deleteRemainingChildren(returnFiber, currentFirstChild);
                break;
              } else deleteChild(returnFiber, currentFirstChild);
              currentFirstChild = currentFirstChild.sibling;
            }
            newChild.type === REACT_FRAGMENT_TYPE ? (lanes = createFiberFromFragment(
              newChild.props.children,
              returnFiber.mode,
              lanes,
              newChild.key
            ), lanes.return = returnFiber, returnFiber = lanes) : (lanes = createFiberFromTypeAndProps(
              newChild.type,
              newChild.key,
              newChild.props,
              null,
              returnFiber.mode,
              lanes
            ), coerceRef(lanes, newChild), lanes.return = returnFiber, returnFiber = lanes);
          }
          return placeSingleChild(returnFiber);
        case REACT_PORTAL_TYPE:
          a: {
            for (key = newChild.key; null !== currentFirstChild; ) {
              if (currentFirstChild.key === key)
                if (4 === currentFirstChild.tag && currentFirstChild.stateNode.containerInfo === newChild.containerInfo && currentFirstChild.stateNode.implementation === newChild.implementation) {
                  deleteRemainingChildren(
                    returnFiber,
                    currentFirstChild.sibling
                  );
                  lanes = useFiber(currentFirstChild, newChild.children || []);
                  lanes.return = returnFiber;
                  returnFiber = lanes;
                  break a;
                } else {
                  deleteRemainingChildren(returnFiber, currentFirstChild);
                  break;
                }
              else deleteChild(returnFiber, currentFirstChild);
              currentFirstChild = currentFirstChild.sibling;
            }
            lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
            lanes.return = returnFiber;
            returnFiber = lanes;
          }
          return placeSingleChild(returnFiber);
        case REACT_LAZY_TYPE:
          return newChild = resolveLazy(newChild), reconcileChildFibersImpl(
            returnFiber,
            currentFirstChild,
            newChild,
            lanes
          );
      }
      if (isArrayImpl(newChild))
        return reconcileChildrenArray(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      if (getIteratorFn(newChild)) {
        key = getIteratorFn(newChild);
        if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
        newChild = key.call(newChild);
        return reconcileChildrenIterator(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      }
      if ("function" === typeof newChild.then)
        return reconcileChildFibersImpl(
          returnFiber,
          currentFirstChild,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return reconcileChildFibersImpl(
          returnFiber,
          currentFirstChild,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
    }
    return "string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild ? (newChild = "" + newChild, null !== currentFirstChild && 6 === currentFirstChild.tag ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling), lanes = useFiber(currentFirstChild, newChild), lanes.return = returnFiber, returnFiber = lanes) : (deleteRemainingChildren(returnFiber, currentFirstChild), lanes = createFiberFromText(newChild, returnFiber.mode, lanes), lanes.return = returnFiber, returnFiber = lanes), placeSingleChild(returnFiber)) : deleteRemainingChildren(returnFiber, currentFirstChild);
  }
  return function(returnFiber, currentFirstChild, newChild, lanes) {
    try {
      thenableIndexCounter$1 = 0;
      var firstChildFiber = reconcileChildFibersImpl(
        returnFiber,
        currentFirstChild,
        newChild,
        lanes
      );
      thenableState$1 = null;
      return firstChildFiber;
    } catch (x) {
      if (x === SuspenseException || x === SuspenseActionException) throw x;
      var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
      fiber.lanes = lanes;
      fiber.return = returnFiber;
      return fiber;
    } finally {
    }
  };
}
var reconcileChildFibers = createChildReconciler(true), mountChildFibers = createChildReconciler(false), hasForceUpdate = false;
function initializeUpdateQueue(fiber) {
  fiber.updateQueue = {
    baseState: fiber.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null
  };
}
function cloneUpdateQueue(current, workInProgress2) {
  current = current.updateQueue;
  workInProgress2.updateQueue === current && (workInProgress2.updateQueue = {
    baseState: current.baseState,
    firstBaseUpdate: current.firstBaseUpdate,
    lastBaseUpdate: current.lastBaseUpdate,
    shared: current.shared,
    callbacks: null
  });
}
function createUpdate(lane) {
  return { lane, tag: 0, payload: null, callback: null, next: null };
}
function enqueueUpdate(fiber, update, lane) {
  var updateQueue = fiber.updateQueue;
  if (null === updateQueue) return null;
  updateQueue = updateQueue.shared;
  if (0 !== (executionContext & 2)) {
    var pending = updateQueue.pending;
    null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
    updateQueue.pending = update;
    update = getRootForUpdatedFiber(fiber);
    markUpdateLaneFromFiberToRoot(fiber, null, lane);
    return update;
  }
  enqueueUpdate$1(fiber, updateQueue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function entangleTransitions(root2, fiber, lane) {
  fiber = fiber.updateQueue;
  if (null !== fiber && (fiber = fiber.shared, 0 !== (lane & 4194048))) {
    var queueLanes = fiber.lanes;
    queueLanes &= root2.pendingLanes;
    lane |= queueLanes;
    fiber.lanes = lane;
    markRootEntangled(root2, lane);
  }
}
function enqueueCapturedUpdate(workInProgress2, capturedUpdate) {
  var queue = workInProgress2.updateQueue, current = workInProgress2.alternate;
  if (null !== current && (current = current.updateQueue, queue === current)) {
    var newFirst = null, newLast = null;
    queue = queue.firstBaseUpdate;
    if (null !== queue) {
      do {
        var clone = {
          lane: queue.lane,
          tag: queue.tag,
          payload: queue.payload,
          callback: null,
          next: null
        };
        null === newLast ? newFirst = newLast = clone : newLast = newLast.next = clone;
        queue = queue.next;
      } while (null !== queue);
      null === newLast ? newFirst = newLast = capturedUpdate : newLast = newLast.next = capturedUpdate;
    } else newFirst = newLast = capturedUpdate;
    queue = {
      baseState: current.baseState,
      firstBaseUpdate: newFirst,
      lastBaseUpdate: newLast,
      shared: current.shared,
      callbacks: current.callbacks
    };
    workInProgress2.updateQueue = queue;
    return;
  }
  workInProgress2 = queue.lastBaseUpdate;
  null === workInProgress2 ? queue.firstBaseUpdate = capturedUpdate : workInProgress2.next = capturedUpdate;
  queue.lastBaseUpdate = capturedUpdate;
}
var didReadFromEntangledAsyncAction = false;
function suspendIfUpdateReadFromEntangledAsyncAction() {
  if (didReadFromEntangledAsyncAction) {
    var entangledActionThenable = currentEntangledActionThenable;
    if (null !== entangledActionThenable) throw entangledActionThenable;
  }
}
function processUpdateQueue(workInProgress$jscomp$0, props, instance$jscomp$0, renderLanes2) {
  didReadFromEntangledAsyncAction = false;
  var queue = workInProgress$jscomp$0.updateQueue;
  hasForceUpdate = false;
  var firstBaseUpdate = queue.firstBaseUpdate, lastBaseUpdate = queue.lastBaseUpdate, pendingQueue = queue.shared.pending;
  if (null !== pendingQueue) {
    queue.shared.pending = null;
    var lastPendingUpdate = pendingQueue, firstPendingUpdate = lastPendingUpdate.next;
    lastPendingUpdate.next = null;
    null === lastBaseUpdate ? firstBaseUpdate = firstPendingUpdate : lastBaseUpdate.next = firstPendingUpdate;
    lastBaseUpdate = lastPendingUpdate;
    var current = workInProgress$jscomp$0.alternate;
    null !== current && (current = current.updateQueue, pendingQueue = current.lastBaseUpdate, pendingQueue !== lastBaseUpdate && (null === pendingQueue ? current.firstBaseUpdate = firstPendingUpdate : pendingQueue.next = firstPendingUpdate, current.lastBaseUpdate = lastPendingUpdate));
  }
  if (null !== firstBaseUpdate) {
    var newState = queue.baseState;
    lastBaseUpdate = 0;
    current = firstPendingUpdate = lastPendingUpdate = null;
    pendingQueue = firstBaseUpdate;
    do {
      var updateLane = pendingQueue.lane & -536870913, isHiddenUpdate = updateLane !== pendingQueue.lane;
      if (isHiddenUpdate ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes2 & updateLane) === updateLane) {
        0 !== updateLane && updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction = true);
        null !== current && (current = current.next = {
          lane: 0,
          tag: pendingQueue.tag,
          payload: pendingQueue.payload,
          callback: null,
          next: null
        });
        a: {
          var workInProgress2 = workInProgress$jscomp$0, update = pendingQueue;
          updateLane = props;
          var instance = instance$jscomp$0;
          switch (update.tag) {
            case 1:
              workInProgress2 = update.payload;
              if ("function" === typeof workInProgress2) {
                newState = workInProgress2.call(instance, newState, updateLane);
                break a;
              }
              newState = workInProgress2;
              break a;
            case 3:
              workInProgress2.flags = workInProgress2.flags & -65537 | 128;
            case 0:
              workInProgress2 = update.payload;
              updateLane = "function" === typeof workInProgress2 ? workInProgress2.call(instance, newState, updateLane) : workInProgress2;
              if (null === updateLane || void 0 === updateLane) break a;
              newState = assign({}, newState, updateLane);
              break a;
            case 2:
              hasForceUpdate = true;
          }
        }
        updateLane = pendingQueue.callback;
        null !== updateLane && (workInProgress$jscomp$0.flags |= 64, isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192), isHiddenUpdate = queue.callbacks, null === isHiddenUpdate ? queue.callbacks = [updateLane] : isHiddenUpdate.push(updateLane));
      } else
        isHiddenUpdate = {
          lane: updateLane,
          tag: pendingQueue.tag,
          payload: pendingQueue.payload,
          callback: pendingQueue.callback,
          next: null
        }, null === current ? (firstPendingUpdate = current = isHiddenUpdate, lastPendingUpdate = newState) : current = current.next = isHiddenUpdate, lastBaseUpdate |= updateLane;
      pendingQueue = pendingQueue.next;
      if (null === pendingQueue)
        if (pendingQueue = queue.shared.pending, null === pendingQueue)
          break;
        else
          isHiddenUpdate = pendingQueue, pendingQueue = isHiddenUpdate.next, isHiddenUpdate.next = null, queue.lastBaseUpdate = isHiddenUpdate, queue.shared.pending = null;
    } while (1);
    null === current && (lastPendingUpdate = newState);
    queue.baseState = lastPendingUpdate;
    queue.firstBaseUpdate = firstPendingUpdate;
    queue.lastBaseUpdate = current;
    null === firstBaseUpdate && (queue.shared.lanes = 0);
    workInProgressRootSkippedLanes |= lastBaseUpdate;
    workInProgress$jscomp$0.lanes = lastBaseUpdate;
    workInProgress$jscomp$0.memoizedState = newState;
  }
}
function callCallback(callback, context3) {
  if ("function" !== typeof callback)
    throw Error(formatProdErrorMessage(191, callback));
  callback.call(context3);
}
function commitCallbacks(updateQueue, context3) {
  var callbacks = updateQueue.callbacks;
  if (null !== callbacks)
    for (updateQueue.callbacks = null, updateQueue = 0; updateQueue < callbacks.length; updateQueue++)
      callCallback(callbacks[updateQueue], context3);
}
var currentTreeHiddenStackCursor = createCursor(null), prevEntangledRenderLanesCursor = createCursor(0);
function pushHiddenContext(fiber, context3) {
  fiber = entangledRenderLanes;
  push(prevEntangledRenderLanesCursor, fiber);
  push(currentTreeHiddenStackCursor, context3);
  entangledRenderLanes = fiber | context3.baseLanes;
}
function reuseHiddenContextOnStack() {
  push(prevEntangledRenderLanesCursor, entangledRenderLanes);
  push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
}
function popHiddenContext() {
  entangledRenderLanes = prevEntangledRenderLanesCursor.current;
  pop(currentTreeHiddenStackCursor);
  pop(prevEntangledRenderLanesCursor);
}
var suspenseHandlerStackCursor = createCursor(null), shellBoundary = null;
function pushPrimaryTreeSuspenseHandler(handler) {
  var current = handler.alternate;
  push(suspenseStackCursor, suspenseStackCursor.current & 1);
  push(suspenseHandlerStackCursor, handler);
  null === shellBoundary && (null === current || null !== currentTreeHiddenStackCursor.current ? shellBoundary = handler : null !== current.memoizedState && (shellBoundary = handler));
}
function pushDehydratedActivitySuspenseHandler(fiber) {
  push(suspenseStackCursor, suspenseStackCursor.current);
  push(suspenseHandlerStackCursor, fiber);
  null === shellBoundary && (shellBoundary = fiber);
}
function pushOffscreenSuspenseHandler(fiber) {
  22 === fiber.tag ? (push(suspenseStackCursor, suspenseStackCursor.current), push(suspenseHandlerStackCursor, fiber), null === shellBoundary && (shellBoundary = fiber)) : reuseSuspenseHandlerOnStack();
}
function reuseSuspenseHandlerOnStack() {
  push(suspenseStackCursor, suspenseStackCursor.current);
  push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
}
function popSuspenseHandler(fiber) {
  pop(suspenseHandlerStackCursor);
  shellBoundary === fiber && (shellBoundary = null);
  pop(suspenseStackCursor);
}
var suspenseStackCursor = createCursor(0);
function findFirstSuspended(row) {
  for (var node = row; null !== node; ) {
    if (13 === node.tag) {
      var state = node.memoizedState;
      if (null !== state && (state = state.dehydrated, null === state || isSuspenseInstancePending(state) || isSuspenseInstanceFallback(state)))
        return node;
    } else if (19 === node.tag && ("forwards" === node.memoizedProps.revealOrder || "backwards" === node.memoizedProps.revealOrder || "unstable_legacy-backwards" === node.memoizedProps.revealOrder || "together" === node.memoizedProps.revealOrder)) {
      if (0 !== (node.flags & 128)) return node;
    } else if (null !== node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === row) break;
    for (; null === node.sibling; ) {
      if (null === node.return || node.return === row) return null;
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  return null;
}
var renderLanes = 0, currentlyRenderingFiber = null, currentHook = null, workInProgressHook = null, didScheduleRenderPhaseUpdate = false, didScheduleRenderPhaseUpdateDuringThisPass = false, shouldDoubleInvokeUserFnsInHooksDEV = false, localIdCounter = 0, thenableIndexCounter = 0, thenableState = null, globalClientIdCounter = 0;
function throwInvalidHookError() {
  throw Error(formatProdErrorMessage(321));
}
function areHookInputsEqual(nextDeps, prevDeps) {
  if (null === prevDeps) return false;
  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
    if (!objectIs(nextDeps[i], prevDeps[i])) return false;
  return true;
}
function renderWithHooks(current, workInProgress2, Component2, props, secondArg, nextRenderLanes) {
  renderLanes = nextRenderLanes;
  currentlyRenderingFiber = workInProgress2;
  workInProgress2.memoizedState = null;
  workInProgress2.updateQueue = null;
  workInProgress2.lanes = 0;
  ReactSharedInternals.H = null === current || null === current.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate;
  shouldDoubleInvokeUserFnsInHooksDEV = false;
  nextRenderLanes = Component2(props, secondArg);
  shouldDoubleInvokeUserFnsInHooksDEV = false;
  didScheduleRenderPhaseUpdateDuringThisPass && (nextRenderLanes = renderWithHooksAgain(
    workInProgress2,
    Component2,
    props,
    secondArg
  ));
  finishRenderingHooks(current);
  return nextRenderLanes;
}
function finishRenderingHooks(current) {
  ReactSharedInternals.H = ContextOnlyDispatcher;
  var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber = null;
  didScheduleRenderPhaseUpdate = false;
  thenableIndexCounter = 0;
  thenableState = null;
  if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
  null === current || didReceiveUpdate || (current = current.dependencies, null !== current && checkIfContextChanged(current) && (didReceiveUpdate = true));
}
function renderWithHooksAgain(workInProgress2, Component2, props, secondArg) {
  currentlyRenderingFiber = workInProgress2;
  var numberOfReRenders = 0;
  do {
    didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
    thenableIndexCounter = 0;
    didScheduleRenderPhaseUpdateDuringThisPass = false;
    if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
    numberOfReRenders += 1;
    workInProgressHook = currentHook = null;
    if (null != workInProgress2.updateQueue) {
      var children = workInProgress2.updateQueue;
      children.lastEffect = null;
      children.events = null;
      children.stores = null;
      null != children.memoCache && (children.memoCache.index = 0);
    }
    ReactSharedInternals.H = HooksDispatcherOnRerender;
    children = Component2(props, secondArg);
  } while (didScheduleRenderPhaseUpdateDuringThisPass);
  return children;
}
function TransitionAwareHostComponent() {
  var dispatcher = ReactSharedInternals.H, maybeThenable = dispatcher.useState()[0];
  maybeThenable = "function" === typeof maybeThenable.then ? useThenable(maybeThenable) : maybeThenable;
  dispatcher = dispatcher.useState()[0];
  (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher && (currentlyRenderingFiber.flags |= 1024);
  return maybeThenable;
}
function checkDidRenderIdHook() {
  var didRenderIdHook = 0 !== localIdCounter;
  localIdCounter = 0;
  return didRenderIdHook;
}
function bailoutHooks(current, workInProgress2, lanes) {
  workInProgress2.updateQueue = current.updateQueue;
  workInProgress2.flags &= -2053;
  current.lanes &= ~lanes;
}
function resetHooksOnUnwind(workInProgress2) {
  if (didScheduleRenderPhaseUpdate) {
    for (workInProgress2 = workInProgress2.memoizedState; null !== workInProgress2; ) {
      var queue = workInProgress2.queue;
      null !== queue && (queue.pending = null);
      workInProgress2 = workInProgress2.next;
    }
    didScheduleRenderPhaseUpdate = false;
  }
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber = null;
  didScheduleRenderPhaseUpdateDuringThisPass = false;
  thenableIndexCounter = localIdCounter = 0;
  thenableState = null;
}
function mountWorkInProgressHook() {
  var hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = hook : workInProgressHook = workInProgressHook.next = hook;
  return workInProgressHook;
}
function updateWorkInProgressHook() {
  if (null === currentHook) {
    var nextCurrentHook = currentlyRenderingFiber.alternate;
    nextCurrentHook = null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
  } else nextCurrentHook = currentHook.next;
  var nextWorkInProgressHook = null === workInProgressHook ? currentlyRenderingFiber.memoizedState : workInProgressHook.next;
  if (null !== nextWorkInProgressHook)
    workInProgressHook = nextWorkInProgressHook, currentHook = nextCurrentHook;
  else {
    if (null === nextCurrentHook) {
      if (null === currentlyRenderingFiber.alternate)
        throw Error(formatProdErrorMessage(467));
      throw Error(formatProdErrorMessage(310));
    }
    currentHook = nextCurrentHook;
    nextCurrentHook = {
      memoizedState: currentHook.memoizedState,
      baseState: currentHook.baseState,
      baseQueue: currentHook.baseQueue,
      queue: currentHook.queue,
      next: null
    };
    null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = nextCurrentHook : workInProgressHook = workInProgressHook.next = nextCurrentHook;
  }
  return workInProgressHook;
}
function createFunctionComponentUpdateQueue() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function useThenable(thenable) {
  var index2 = thenableIndexCounter;
  thenableIndexCounter += 1;
  null === thenableState && (thenableState = []);
  thenable = trackUsedThenable(thenableState, thenable, index2);
  index2 = currentlyRenderingFiber;
  null === (null === workInProgressHook ? index2.memoizedState : workInProgressHook.next) && (index2 = index2.alternate, ReactSharedInternals.H = null === index2 || null === index2.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate);
  return thenable;
}
function use(usable) {
  if (null !== usable && "object" === typeof usable) {
    if ("function" === typeof usable.then) return useThenable(usable);
    if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
  }
  throw Error(formatProdErrorMessage(438, String(usable)));
}
function useMemoCache(size) {
  var memoCache = null, updateQueue = currentlyRenderingFiber.updateQueue;
  null !== updateQueue && (memoCache = updateQueue.memoCache);
  if (null == memoCache) {
    var current = currentlyRenderingFiber.alternate;
    null !== current && (current = current.updateQueue, null !== current && (current = current.memoCache, null != current && (memoCache = {
      data: current.data.map(function(array) {
        return array.slice();
      }),
      index: 0
    })));
  }
  null == memoCache && (memoCache = { data: [], index: 0 });
  null === updateQueue && (updateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = updateQueue);
  updateQueue.memoCache = memoCache;
  updateQueue = memoCache.data[memoCache.index];
  if (void 0 === updateQueue)
    for (updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0; current < size; current++)
      updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
  memoCache.index++;
  return updateQueue;
}
function basicStateReducer(state, action) {
  return "function" === typeof action ? action(state) : action;
}
function updateReducer(reducer) {
  var hook = updateWorkInProgressHook();
  return updateReducerImpl(hook, currentHook, reducer);
}
function updateReducerImpl(hook, current, reducer) {
  var queue = hook.queue;
  if (null === queue) throw Error(formatProdErrorMessage(311));
  queue.lastRenderedReducer = reducer;
  var baseQueue = hook.baseQueue, pendingQueue = queue.pending;
  if (null !== pendingQueue) {
    if (null !== baseQueue) {
      var baseFirst = baseQueue.next;
      baseQueue.next = pendingQueue.next;
      pendingQueue.next = baseFirst;
    }
    current.baseQueue = baseQueue = pendingQueue;
    queue.pending = null;
  }
  pendingQueue = hook.baseState;
  if (null === baseQueue) hook.memoizedState = pendingQueue;
  else {
    current = baseQueue.next;
    var newBaseQueueFirst = baseFirst = null, newBaseQueueLast = null, update = current, didReadFromEntangledAsyncAction$60 = false;
    do {
      var updateLane = update.lane & -536870913;
      if (updateLane !== update.lane ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
        var revertLane = update.revertLane;
        if (0 === revertLane)
          null !== newBaseQueueLast && (newBaseQueueLast = newBaseQueueLast.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: update.action,
            hasEagerState: update.hasEagerState,
            eagerState: update.eagerState,
            next: null
          }), updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction$60 = true);
        else if ((renderLanes & revertLane) === revertLane) {
          update = update.next;
          revertLane === currentEntangledLane && (didReadFromEntangledAsyncAction$60 = true);
          continue;
        } else
          updateLane = {
            lane: 0,
            revertLane: update.revertLane,
            gesture: null,
            action: update.action,
            hasEagerState: update.hasEagerState,
            eagerState: update.eagerState,
            next: null
          }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = updateLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = updateLane, currentlyRenderingFiber.lanes |= revertLane, workInProgressRootSkippedLanes |= revertLane;
        updateLane = update.action;
        shouldDoubleInvokeUserFnsInHooksDEV && reducer(pendingQueue, updateLane);
        pendingQueue = update.hasEagerState ? update.eagerState : reducer(pendingQueue, updateLane);
      } else
        revertLane = {
          lane: updateLane,
          revertLane: update.revertLane,
          gesture: update.gesture,
          action: update.action,
          hasEagerState: update.hasEagerState,
          eagerState: update.eagerState,
          next: null
        }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = revertLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = revertLane, currentlyRenderingFiber.lanes |= updateLane, workInProgressRootSkippedLanes |= updateLane;
      update = update.next;
    } while (null !== update && update !== current);
    null === newBaseQueueLast ? baseFirst = pendingQueue : newBaseQueueLast.next = newBaseQueueFirst;
    if (!objectIs(pendingQueue, hook.memoizedState) && (didReceiveUpdate = true, didReadFromEntangledAsyncAction$60 && (reducer = currentEntangledActionThenable, null !== reducer)))
      throw reducer;
    hook.memoizedState = pendingQueue;
    hook.baseState = baseFirst;
    hook.baseQueue = newBaseQueueLast;
    queue.lastRenderedState = pendingQueue;
  }
  null === baseQueue && (queue.lanes = 0);
  return [hook.memoizedState, queue.dispatch];
}
function rerenderReducer(reducer) {
  var hook = updateWorkInProgressHook(), queue = hook.queue;
  if (null === queue) throw Error(formatProdErrorMessage(311));
  queue.lastRenderedReducer = reducer;
  var dispatch = queue.dispatch, lastRenderPhaseUpdate = queue.pending, newState = hook.memoizedState;
  if (null !== lastRenderPhaseUpdate) {
    queue.pending = null;
    var update = lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
    do
      newState = reducer(newState, update.action), update = update.next;
    while (update !== lastRenderPhaseUpdate);
    objectIs(newState, hook.memoizedState) || (didReceiveUpdate = true);
    hook.memoizedState = newState;
    null === hook.baseQueue && (hook.baseState = newState);
    queue.lastRenderedState = newState;
  }
  return [newState, dispatch];
}
function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var fiber = currentlyRenderingFiber, hook = updateWorkInProgressHook(), isHydrating$jscomp$0 = isHydrating;
  if (isHydrating$jscomp$0) {
    if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
    getServerSnapshot = getServerSnapshot();
  } else getServerSnapshot = getSnapshot();
  var snapshotChanged = !objectIs(
    (currentHook || hook).memoizedState,
    getServerSnapshot
  );
  snapshotChanged && (hook.memoizedState = getServerSnapshot, didReceiveUpdate = true);
  hook = hook.queue;
  updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [
    subscribe
  ]);
  if (hook.getSnapshot !== getSnapshot || snapshotChanged || null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1) {
    fiber.flags |= 2048;
    pushSimpleEffect(
      9,
      { destroy: void 0 },
      updateStoreInstance.bind(
        null,
        fiber,
        hook,
        getServerSnapshot,
        getSnapshot
      ),
      null
    );
    if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
    isHydrating$jscomp$0 || 0 !== (renderLanes & 127) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
  }
  return getServerSnapshot;
}
function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
  fiber.flags |= 16384;
  fiber = { getSnapshot, value: renderedSnapshot };
  getSnapshot = currentlyRenderingFiber.updateQueue;
  null === getSnapshot ? (getSnapshot = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = getSnapshot, getSnapshot.stores = [fiber]) : (renderedSnapshot = getSnapshot.stores, null === renderedSnapshot ? getSnapshot.stores = [fiber] : renderedSnapshot.push(fiber));
}
function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
  inst.value = nextSnapshot;
  inst.getSnapshot = getSnapshot;
  checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
}
function subscribeToStore(fiber, inst, subscribe) {
  return subscribe(function() {
    checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
  });
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return true;
  }
}
function forceStoreRerender(fiber) {
  var root2 = enqueueConcurrentRenderForLane(fiber, 2);
  null !== root2 && scheduleUpdateOnFiber(root2, fiber, 2);
}
function mountStateImpl(initialState) {
  var hook = mountWorkInProgressHook();
  if ("function" === typeof initialState) {
    var initialStateInitializer = initialState;
    initialState = initialStateInitializer();
    if (shouldDoubleInvokeUserFnsInHooksDEV) {
      setIsStrictModeForDevtools(true);
      try {
        initialStateInitializer();
      } finally {
        setIsStrictModeForDevtools(false);
      }
    }
  }
  hook.memoizedState = hook.baseState = initialState;
  hook.queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: initialState
  };
  return hook;
}
function updateOptimisticImpl(hook, current, passthrough, reducer) {
  hook.baseState = passthrough;
  return updateReducerImpl(
    hook,
    currentHook,
    "function" === typeof reducer ? reducer : basicStateReducer
  );
}
function dispatchActionState(fiber, actionQueue, setPendingState, setState, payload) {
  if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
  fiber = actionQueue.action;
  if (null !== fiber) {
    var actionNode = {
      payload,
      action: fiber,
      next: null,
      isTransition: true,
      status: "pending",
      value: null,
      reason: null,
      listeners: [],
      then: function(listener) {
        actionNode.listeners.push(listener);
      }
    };
    null !== ReactSharedInternals.T ? setPendingState(true) : actionNode.isTransition = false;
    setState(actionNode);
    setPendingState = actionQueue.pending;
    null === setPendingState ? (actionNode.next = actionQueue.pending = actionNode, runActionStateAction(actionQueue, actionNode)) : (actionNode.next = setPendingState.next, actionQueue.pending = setPendingState.next = actionNode);
  }
}
function runActionStateAction(actionQueue, node) {
  var action = node.action, payload = node.payload, prevState = actionQueue.state;
  if (node.isTransition) {
    var prevTransition = ReactSharedInternals.T, currentTransition = {};
    ReactSharedInternals.T = currentTransition;
    try {
      var returnValue = action(prevState, payload), onStartTransitionFinish = ReactSharedInternals.S;
      null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
      handleActionReturnValue(actionQueue, node, returnValue);
    } catch (error) {
      onActionError(actionQueue, node, error);
    } finally {
      null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
    }
  } else
    try {
      prevTransition = action(prevState, payload), handleActionReturnValue(actionQueue, node, prevTransition);
    } catch (error$66) {
      onActionError(actionQueue, node, error$66);
    }
}
function handleActionReturnValue(actionQueue, node, returnValue) {
  null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then ? returnValue.then(
    function(nextState) {
      onActionSuccess(actionQueue, node, nextState);
    },
    function(error) {
      return onActionError(actionQueue, node, error);
    }
  ) : onActionSuccess(actionQueue, node, returnValue);
}
function onActionSuccess(actionQueue, actionNode, nextState) {
  actionNode.status = "fulfilled";
  actionNode.value = nextState;
  notifyActionListeners(actionNode);
  actionQueue.state = nextState;
  actionNode = actionQueue.pending;
  null !== actionNode && (nextState = actionNode.next, nextState === actionNode ? actionQueue.pending = null : (nextState = nextState.next, actionNode.next = nextState, runActionStateAction(actionQueue, nextState)));
}
function onActionError(actionQueue, actionNode, error) {
  var last = actionQueue.pending;
  actionQueue.pending = null;
  if (null !== last) {
    last = last.next;
    do
      actionNode.status = "rejected", actionNode.reason = error, notifyActionListeners(actionNode), actionNode = actionNode.next;
    while (actionNode !== last);
  }
  actionQueue.action = null;
}
function notifyActionListeners(actionNode) {
  actionNode = actionNode.listeners;
  for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
}
function actionStateReducer(oldState, newState) {
  return newState;
}
function mountActionState(action, initialStateProp) {
  if (isHydrating) {
    var ssrFormState = workInProgressRoot.formState;
    if (null !== ssrFormState) {
      a: {
        var JSCompiler_inline_result = currentlyRenderingFiber;
        if (isHydrating) {
          if (nextHydratableInstance) {
            b: {
              var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
              for (var inRootOrSingleton = rootOrSingletonContext; 8 !== JSCompiler_inline_result$jscomp$0.nodeType; ) {
                if (!inRootOrSingleton) {
                  JSCompiler_inline_result$jscomp$0 = null;
                  break b;
                }
                JSCompiler_inline_result$jscomp$0 = getNextHydratable(
                  JSCompiler_inline_result$jscomp$0.nextSibling
                );
                if (null === JSCompiler_inline_result$jscomp$0) {
                  JSCompiler_inline_result$jscomp$0 = null;
                  break b;
                }
              }
              inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
              JSCompiler_inline_result$jscomp$0 = "F!" === inRootOrSingleton || "F" === inRootOrSingleton ? JSCompiler_inline_result$jscomp$0 : null;
            }
            if (JSCompiler_inline_result$jscomp$0) {
              nextHydratableInstance = getNextHydratable(
                JSCompiler_inline_result$jscomp$0.nextSibling
              );
              JSCompiler_inline_result = "F!" === JSCompiler_inline_result$jscomp$0.data;
              break a;
            }
          }
          throwOnHydrationMismatch(JSCompiler_inline_result);
        }
        JSCompiler_inline_result = false;
      }
      JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
    }
  }
  ssrFormState = mountWorkInProgressHook();
  ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
  JSCompiler_inline_result = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: actionStateReducer,
    lastRenderedState: initialStateProp
  };
  ssrFormState.queue = JSCompiler_inline_result;
  ssrFormState = dispatchSetState.bind(
    null,
    currentlyRenderingFiber,
    JSCompiler_inline_result
  );
  JSCompiler_inline_result.dispatch = ssrFormState;
  JSCompiler_inline_result = mountStateImpl(false);
  inRootOrSingleton = dispatchOptimisticSetState.bind(
    null,
    currentlyRenderingFiber,
    false,
    JSCompiler_inline_result.queue
  );
  JSCompiler_inline_result = mountWorkInProgressHook();
  JSCompiler_inline_result$jscomp$0 = {
    state: initialStateProp,
    dispatch: null,
    action,
    pending: null
  };
  JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
  ssrFormState = dispatchActionState.bind(
    null,
    currentlyRenderingFiber,
    JSCompiler_inline_result$jscomp$0,
    inRootOrSingleton,
    ssrFormState
  );
  JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
  JSCompiler_inline_result.memoizedState = action;
  return [initialStateProp, ssrFormState, false];
}
function updateActionState(action) {
  var stateHook = updateWorkInProgressHook();
  return updateActionStateImpl(stateHook, currentHook, action);
}
function updateActionStateImpl(stateHook, currentStateHook, action) {
  currentStateHook = updateReducerImpl(
    stateHook,
    currentStateHook,
    actionStateReducer
  )[0];
  stateHook = updateReducer(basicStateReducer)[0];
  if ("object" === typeof currentStateHook && null !== currentStateHook && "function" === typeof currentStateHook.then)
    try {
      var state = useThenable(currentStateHook);
    } catch (x) {
      if (x === SuspenseException) throw SuspenseActionException;
      throw x;
    }
  else state = currentStateHook;
  currentStateHook = updateWorkInProgressHook();
  var actionQueue = currentStateHook.queue, dispatch = actionQueue.dispatch;
  action !== currentStateHook.memoizedState && (currentlyRenderingFiber.flags |= 2048, pushSimpleEffect(
    9,
    { destroy: void 0 },
    actionStateActionEffect.bind(null, actionQueue, action),
    null
  ));
  return [state, dispatch, stateHook];
}
function actionStateActionEffect(actionQueue, action) {
  actionQueue.action = action;
}
function rerenderActionState(action) {
  var stateHook = updateWorkInProgressHook(), currentStateHook = currentHook;
  if (null !== currentStateHook)
    return updateActionStateImpl(stateHook, currentStateHook, action);
  updateWorkInProgressHook();
  stateHook = stateHook.memoizedState;
  currentStateHook = updateWorkInProgressHook();
  var dispatch = currentStateHook.queue.dispatch;
  currentStateHook.memoizedState = action;
  return [stateHook, dispatch, false];
}
function pushSimpleEffect(tag, inst, create, deps) {
  tag = { tag, create, deps, inst, next: null };
  inst = currentlyRenderingFiber.updateQueue;
  null === inst && (inst = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = inst);
  create = inst.lastEffect;
  null === create ? inst.lastEffect = tag.next = tag : (deps = create.next, create.next = tag, tag.next = deps, inst.lastEffect = tag);
  return tag;
}
function updateRef() {
  return updateWorkInProgressHook().memoizedState;
}
function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
  var hook = mountWorkInProgressHook();
  currentlyRenderingFiber.flags |= fiberFlags;
  hook.memoizedState = pushSimpleEffect(
    1 | hookFlags,
    { destroy: void 0 },
    create,
    void 0 === deps ? null : deps
  );
}
function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var inst = hook.memoizedState.inst;
  null !== currentHook && null !== deps && areHookInputsEqual(deps, currentHook.memoizedState.deps) ? hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps) : (currentlyRenderingFiber.flags |= fiberFlags, hook.memoizedState = pushSimpleEffect(
    1 | hookFlags,
    inst,
    create,
    deps
  ));
}
function mountEffect(create, deps) {
  mountEffectImpl(8390656, 8, create, deps);
}
function updateEffect(create, deps) {
  updateEffectImpl(2048, 8, create, deps);
}
function useEffectEventImpl(payload) {
  currentlyRenderingFiber.flags |= 4;
  var componentUpdateQueue = currentlyRenderingFiber.updateQueue;
  if (null === componentUpdateQueue)
    componentUpdateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = componentUpdateQueue, componentUpdateQueue.events = [payload];
  else {
    var events = componentUpdateQueue.events;
    null === events ? componentUpdateQueue.events = [payload] : events.push(payload);
  }
}
function updateEvent(callback) {
  var ref2 = updateWorkInProgressHook().memoizedState;
  useEffectEventImpl({ ref: ref2, nextImpl: callback });
  return function() {
    if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
    return ref2.impl.apply(void 0, arguments);
  };
}
function updateInsertionEffect(create, deps) {
  return updateEffectImpl(4, 2, create, deps);
}
function updateLayoutEffect(create, deps) {
  return updateEffectImpl(4, 4, create, deps);
}
function imperativeHandleEffect(create, ref2) {
  if ("function" === typeof ref2) {
    create = create();
    var refCleanup = ref2(create);
    return function() {
      "function" === typeof refCleanup ? refCleanup() : ref2(null);
    };
  }
  if (null !== ref2 && void 0 !== ref2)
    return create = create(), ref2.current = create, function() {
      ref2.current = null;
    };
}
function updateImperativeHandle(ref2, create, deps) {
  deps = null !== deps && void 0 !== deps ? deps.concat([ref2]) : null;
  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref2), deps);
}
function mountDebugValue() {
}
function updateCallback(callback, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
    return prevState[0];
  hook.memoizedState = [callback, deps];
  return callback;
}
function updateMemo(nextCreate, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
    return prevState[0];
  prevState = nextCreate();
  if (shouldDoubleInvokeUserFnsInHooksDEV) {
    setIsStrictModeForDevtools(true);
    try {
      nextCreate();
    } finally {
      setIsStrictModeForDevtools(false);
    }
  }
  hook.memoizedState = [prevState, deps];
  return prevState;
}
function mountDeferredValueImpl(hook, value, initialValue) {
  if (void 0 === initialValue || 0 !== (renderLanes & 1073741824) && 0 === (workInProgressRootRenderLanes & 261930))
    return hook.memoizedState = value;
  hook.memoizedState = initialValue;
  hook = requestDeferredLane();
  currentlyRenderingFiber.lanes |= hook;
  workInProgressRootSkippedLanes |= hook;
  return initialValue;
}
function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
  if (objectIs(value, prevValue)) return value;
  if (null !== currentTreeHiddenStackCursor.current)
    return hook = mountDeferredValueImpl(hook, value, initialValue), objectIs(hook, prevValue) || (didReceiveUpdate = true), hook;
  if (0 === (renderLanes & 42) || 0 !== (renderLanes & 1073741824) && 0 === (workInProgressRootRenderLanes & 261930))
    return didReceiveUpdate = true, hook.memoizedState = value;
  hook = requestDeferredLane();
  currentlyRenderingFiber.lanes |= hook;
  workInProgressRootSkippedLanes |= hook;
  return prevValue;
}
function startTransition(fiber, queue, pendingState, finishedState, callback) {
  var previousPriority = ReactDOMSharedInternals.p;
  ReactDOMSharedInternals.p = 0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
  var prevTransition = ReactSharedInternals.T, currentTransition = {};
  ReactSharedInternals.T = currentTransition;
  dispatchOptimisticSetState(fiber, false, queue, pendingState);
  try {
    var returnValue = callback(), onStartTransitionFinish = ReactSharedInternals.S;
    null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
    if (null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then) {
      var thenableForFinishedState = chainThenableValue(
        returnValue,
        finishedState
      );
      dispatchSetStateInternal(
        fiber,
        queue,
        thenableForFinishedState,
        requestUpdateLane(fiber)
      );
    } else
      dispatchSetStateInternal(
        fiber,
        queue,
        finishedState,
        requestUpdateLane(fiber)
      );
  } catch (error) {
    dispatchSetStateInternal(
      fiber,
      queue,
      { then: function() {
      }, status: "rejected", reason: error },
      requestUpdateLane()
    );
  } finally {
    ReactDOMSharedInternals.p = previousPriority, null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
  }
}
function noop() {
}
function startHostTransition(formFiber, pendingState, action, formData) {
  if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
  var queue = ensureFormComponentIsStateful(formFiber).queue;
  startTransition(
    formFiber,
    queue,
    pendingState,
    sharedNotPendingObject,
    null === action ? noop : function() {
      requestFormReset$1(formFiber);
      return action(formData);
    }
  );
}
function ensureFormComponentIsStateful(formFiber) {
  var existingStateHook = formFiber.memoizedState;
  if (null !== existingStateHook) return existingStateHook;
  existingStateHook = {
    memoizedState: sharedNotPendingObject,
    baseState: sharedNotPendingObject,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: sharedNotPendingObject
    },
    next: null
  };
  var initialResetState = {};
  existingStateHook.next = {
    memoizedState: initialResetState,
    baseState: initialResetState,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: initialResetState
    },
    next: null
  };
  formFiber.memoizedState = existingStateHook;
  formFiber = formFiber.alternate;
  null !== formFiber && (formFiber.memoizedState = existingStateHook);
  return existingStateHook;
}
function requestFormReset$1(formFiber) {
  var stateHook = ensureFormComponentIsStateful(formFiber);
  null === stateHook.next && (stateHook = formFiber.alternate.memoizedState);
  dispatchSetStateInternal(
    formFiber,
    stateHook.next.queue,
    {},
    requestUpdateLane()
  );
}
function useHostTransitionStatus() {
  return readContext(HostTransitionContext);
}
function updateId() {
  return updateWorkInProgressHook().memoizedState;
}
function updateRefresh() {
  return updateWorkInProgressHook().memoizedState;
}
function refreshCache(fiber) {
  for (var provider = fiber.return; null !== provider; ) {
    switch (provider.tag) {
      case 24:
      case 3:
        var lane = requestUpdateLane();
        fiber = createUpdate(lane);
        var root$69 = enqueueUpdate(provider, fiber, lane);
        null !== root$69 && (scheduleUpdateOnFiber(root$69, provider, lane), entangleTransitions(root$69, provider, lane));
        provider = { cache: createCache() };
        fiber.payload = provider;
        return;
    }
    provider = provider.return;
  }
}
function dispatchReducerAction(fiber, queue, action) {
  var lane = requestUpdateLane();
  action = {
    lane,
    revertLane: 0,
    gesture: null,
    action,
    hasEagerState: false,
    eagerState: null,
    next: null
  };
  isRenderPhaseUpdate(fiber) ? enqueueRenderPhaseUpdate(queue, action) : (action = enqueueConcurrentHookUpdate(fiber, queue, action, lane), null !== action && (scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane)));
}
function dispatchSetState(fiber, queue, action) {
  var lane = requestUpdateLane();
  dispatchSetStateInternal(fiber, queue, action, lane);
}
function dispatchSetStateInternal(fiber, queue, action, lane) {
  var update = {
    lane,
    revertLane: 0,
    gesture: null,
    action,
    hasEagerState: false,
    eagerState: null,
    next: null
  };
  if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
  else {
    var alternate = fiber.alternate;
    if (0 === fiber.lanes && (null === alternate || 0 === alternate.lanes) && (alternate = queue.lastRenderedReducer, null !== alternate))
      try {
        var currentState = queue.lastRenderedState, eagerState = alternate(currentState, action);
        update.hasEagerState = true;
        update.eagerState = eagerState;
        if (objectIs(eagerState, currentState))
          return enqueueUpdate$1(fiber, queue, update, 0), null === workInProgressRoot && finishQueueingConcurrentUpdates(), false;
      } catch (error) {
      } finally {
      }
    action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
    if (null !== action)
      return scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane), true;
  }
  return false;
}
function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
  action = {
    lane: 2,
    revertLane: requestTransitionLane(),
    gesture: null,
    action,
    hasEagerState: false,
    eagerState: null,
    next: null
  };
  if (isRenderPhaseUpdate(fiber)) {
    if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
  } else
    throwIfDuringRender = enqueueConcurrentHookUpdate(
      fiber,
      queue,
      action,
      2
    ), null !== throwIfDuringRender && scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
}
function isRenderPhaseUpdate(fiber) {
  var alternate = fiber.alternate;
  return fiber === currentlyRenderingFiber || null !== alternate && alternate === currentlyRenderingFiber;
}
function enqueueRenderPhaseUpdate(queue, update) {
  didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
  var pending = queue.pending;
  null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
  queue.pending = update;
}
function entangleTransitionUpdate(root2, queue, lane) {
  if (0 !== (lane & 4194048)) {
    var queueLanes = queue.lanes;
    queueLanes &= root2.pendingLanes;
    lane |= queueLanes;
    queue.lanes = lane;
    markRootEntangled(root2, lane);
  }
}
var ContextOnlyDispatcher = {
  readContext,
  use,
  useCallback: throwInvalidHookError,
  useContext: throwInvalidHookError,
  useEffect: throwInvalidHookError,
  useImperativeHandle: throwInvalidHookError,
  useLayoutEffect: throwInvalidHookError,
  useInsertionEffect: throwInvalidHookError,
  useMemo: throwInvalidHookError,
  useReducer: throwInvalidHookError,
  useRef: throwInvalidHookError,
  useState: throwInvalidHookError,
  useDebugValue: throwInvalidHookError,
  useDeferredValue: throwInvalidHookError,
  useTransition: throwInvalidHookError,
  useSyncExternalStore: throwInvalidHookError,
  useId: throwInvalidHookError,
  useHostTransitionStatus: throwInvalidHookError,
  useFormState: throwInvalidHookError,
  useActionState: throwInvalidHookError,
  useOptimistic: throwInvalidHookError,
  useMemoCache: throwInvalidHookError,
  useCacheRefresh: throwInvalidHookError
};
ContextOnlyDispatcher.useEffectEvent = throwInvalidHookError;
var HooksDispatcherOnMount = {
  readContext,
  use,
  useCallback: function(callback, deps) {
    mountWorkInProgressHook().memoizedState = [
      callback,
      void 0 === deps ? null : deps
    ];
    return callback;
  },
  useContext: readContext,
  useEffect: mountEffect,
  useImperativeHandle: function(ref2, create, deps) {
    deps = null !== deps && void 0 !== deps ? deps.concat([ref2]) : null;
    mountEffectImpl(
      4194308,
      4,
      imperativeHandleEffect.bind(null, create, ref2),
      deps
    );
  },
  useLayoutEffect: function(create, deps) {
    return mountEffectImpl(4194308, 4, create, deps);
  },
  useInsertionEffect: function(create, deps) {
    mountEffectImpl(4, 2, create, deps);
  },
  useMemo: function(nextCreate, deps) {
    var hook = mountWorkInProgressHook();
    deps = void 0 === deps ? null : deps;
    var nextValue = nextCreate();
    if (shouldDoubleInvokeUserFnsInHooksDEV) {
      setIsStrictModeForDevtools(true);
      try {
        nextCreate();
      } finally {
        setIsStrictModeForDevtools(false);
      }
    }
    hook.memoizedState = [nextValue, deps];
    return nextValue;
  },
  useReducer: function(reducer, initialArg, init4) {
    var hook = mountWorkInProgressHook();
    if (void 0 !== init4) {
      var initialState = init4(initialArg);
      if (shouldDoubleInvokeUserFnsInHooksDEV) {
        setIsStrictModeForDevtools(true);
        try {
          init4(initialArg);
        } finally {
          setIsStrictModeForDevtools(false);
        }
      }
    } else initialState = initialArg;
    hook.memoizedState = hook.baseState = initialState;
    reducer = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: reducer,
      lastRenderedState: initialState
    };
    hook.queue = reducer;
    reducer = reducer.dispatch = dispatchReducerAction.bind(
      null,
      currentlyRenderingFiber,
      reducer
    );
    return [hook.memoizedState, reducer];
  },
  useRef: function(initialValue) {
    var hook = mountWorkInProgressHook();
    initialValue = { current: initialValue };
    return hook.memoizedState = initialValue;
  },
  useState: function(initialState) {
    initialState = mountStateImpl(initialState);
    var queue = initialState.queue, dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
    queue.dispatch = dispatch;
    return [initialState.memoizedState, dispatch];
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function(value, initialValue) {
    var hook = mountWorkInProgressHook();
    return mountDeferredValueImpl(hook, value, initialValue);
  },
  useTransition: function() {
    var stateHook = mountStateImpl(false);
    stateHook = startTransition.bind(
      null,
      currentlyRenderingFiber,
      stateHook.queue,
      true,
      false
    );
    mountWorkInProgressHook().memoizedState = stateHook;
    return [false, stateHook];
  },
  useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
    var fiber = currentlyRenderingFiber, hook = mountWorkInProgressHook();
    if (isHydrating) {
      if (void 0 === getServerSnapshot)
        throw Error(formatProdErrorMessage(407));
      getServerSnapshot = getServerSnapshot();
    } else {
      getServerSnapshot = getSnapshot();
      if (null === workInProgressRoot)
        throw Error(formatProdErrorMessage(349));
      0 !== (workInProgressRootRenderLanes & 127) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
    }
    hook.memoizedState = getServerSnapshot;
    var inst = { value: getServerSnapshot, getSnapshot };
    hook.queue = inst;
    mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
      subscribe
    ]);
    fiber.flags |= 2048;
    pushSimpleEffect(
      9,
      { destroy: void 0 },
      updateStoreInstance.bind(
        null,
        fiber,
        inst,
        getServerSnapshot,
        getSnapshot
      ),
      null
    );
    return getServerSnapshot;
  },
  useId: function() {
    var hook = mountWorkInProgressHook(), identifierPrefix = workInProgressRoot.identifierPrefix;
    if (isHydrating) {
      var JSCompiler_inline_result = treeContextOverflow;
      var idWithLeadingBit = treeContextId;
      JSCompiler_inline_result = (idWithLeadingBit & ~(1 << 32 - clz32(idWithLeadingBit) - 1)).toString(32) + JSCompiler_inline_result;
      identifierPrefix = "_" + identifierPrefix + "R_" + JSCompiler_inline_result;
      JSCompiler_inline_result = localIdCounter++;
      0 < JSCompiler_inline_result && (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
      identifierPrefix += "_";
    } else
      JSCompiler_inline_result = globalClientIdCounter++, identifierPrefix = "_" + identifierPrefix + "r_" + JSCompiler_inline_result.toString(32) + "_";
    return hook.memoizedState = identifierPrefix;
  },
  useHostTransitionStatus,
  useFormState: mountActionState,
  useActionState: mountActionState,
  useOptimistic: function(passthrough) {
    var hook = mountWorkInProgressHook();
    hook.memoizedState = hook.baseState = passthrough;
    var queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null
    };
    hook.queue = queue;
    hook = dispatchOptimisticSetState.bind(
      null,
      currentlyRenderingFiber,
      true,
      queue
    );
    queue.dispatch = hook;
    return [passthrough, hook];
  },
  useMemoCache,
  useCacheRefresh: function() {
    return mountWorkInProgressHook().memoizedState = refreshCache.bind(
      null,
      currentlyRenderingFiber
    );
  },
  useEffectEvent: function(callback) {
    var hook = mountWorkInProgressHook(), ref2 = { impl: callback };
    hook.memoizedState = ref2;
    return function() {
      if (0 !== (executionContext & 2))
        throw Error(formatProdErrorMessage(440));
      return ref2.impl.apply(void 0, arguments);
    };
  }
}, HooksDispatcherOnUpdate = {
  readContext,
  use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: updateReducer,
  useRef: updateRef,
  useState: function() {
    return updateReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function(value, initialValue) {
    var hook = updateWorkInProgressHook();
    return updateDeferredValueImpl(
      hook,
      currentHook.memoizedState,
      value,
      initialValue
    );
  },
  useTransition: function() {
    var booleanOrThenable = updateReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
    return [
      "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
      start
    ];
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId,
  useHostTransitionStatus,
  useFormState: updateActionState,
  useActionState: updateActionState,
  useOptimistic: function(passthrough, reducer) {
    var hook = updateWorkInProgressHook();
    return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
  },
  useMemoCache,
  useCacheRefresh: updateRefresh
};
HooksDispatcherOnUpdate.useEffectEvent = updateEvent;
var HooksDispatcherOnRerender = {
  readContext,
  use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: rerenderReducer,
  useRef: updateRef,
  useState: function() {
    return rerenderReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function(value, initialValue) {
    var hook = updateWorkInProgressHook();
    return null === currentHook ? mountDeferredValueImpl(hook, value, initialValue) : updateDeferredValueImpl(
      hook,
      currentHook.memoizedState,
      value,
      initialValue
    );
  },
  useTransition: function() {
    var booleanOrThenable = rerenderReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
    return [
      "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
      start
    ];
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId,
  useHostTransitionStatus,
  useFormState: rerenderActionState,
  useActionState: rerenderActionState,
  useOptimistic: function(passthrough, reducer) {
    var hook = updateWorkInProgressHook();
    if (null !== currentHook)
      return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
    hook.baseState = passthrough;
    return [passthrough, hook.queue.dispatch];
  },
  useMemoCache,
  useCacheRefresh: updateRefresh
};
HooksDispatcherOnRerender.useEffectEvent = updateEvent;
function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
  ctor = workInProgress2.memoizedState;
  getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
  getDerivedStateFromProps = null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps ? ctor : assign({}, ctor, getDerivedStateFromProps);
  workInProgress2.memoizedState = getDerivedStateFromProps;
  0 === workInProgress2.lanes && (workInProgress2.updateQueue.baseState = getDerivedStateFromProps);
}
var classComponentUpdater = {
  enqueueSetState: function(inst, payload, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(), update = createUpdate(lane);
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
  },
  enqueueReplaceState: function(inst, payload, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(), update = createUpdate(lane);
    update.tag = 1;
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
  },
  enqueueForceUpdate: function(inst, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(), update = createUpdate(lane);
    update.tag = 2;
    void 0 !== callback && null !== callback && (update.callback = callback);
    callback = enqueueUpdate(inst, update, lane);
    null !== callback && (scheduleUpdateOnFiber(callback, inst, lane), entangleTransitions(callback, inst, lane));
  }
};
function checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) {
  workInProgress2 = workInProgress2.stateNode;
  return "function" === typeof workInProgress2.shouldComponentUpdate ? workInProgress2.shouldComponentUpdate(newProps, newState, nextContext) : ctor.prototype && ctor.prototype.isPureReactComponent ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState) : true;
}
function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
  workInProgress2 = instance.state;
  "function" === typeof instance.componentWillReceiveProps && instance.componentWillReceiveProps(newProps, nextContext);
  "function" === typeof instance.UNSAFE_componentWillReceiveProps && instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
  instance.state !== workInProgress2 && classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
}
function resolveClassComponentProps(Component2, baseProps) {
  var newProps = baseProps;
  if ("ref" in baseProps) {
    newProps = {};
    for (var propName in baseProps)
      "ref" !== propName && (newProps[propName] = baseProps[propName]);
  }
  if (Component2 = Component2.defaultProps) {
    newProps === baseProps && (newProps = assign({}, newProps));
    for (var propName$73 in Component2)
      void 0 === newProps[propName$73] && (newProps[propName$73] = Component2[propName$73]);
  }
  return newProps;
}
function defaultOnUncaughtError(error) {
  reportGlobalError(error);
}
function defaultOnCaughtError(error) {
  console.error(error);
}
function defaultOnRecoverableError(error) {
  reportGlobalError(error);
}
function logUncaughtError(root2, errorInfo) {
  try {
    var onUncaughtError = root2.onUncaughtError;
    onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
  } catch (e$74) {
    setTimeout(function() {
      throw e$74;
    });
  }
}
function logCaughtError(root2, boundary, errorInfo) {
  try {
    var onCaughtError = root2.onCaughtError;
    onCaughtError(errorInfo.value, {
      componentStack: errorInfo.stack,
      errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
    });
  } catch (e$75) {
    setTimeout(function() {
      throw e$75;
    });
  }
}
function createRootErrorUpdate(root2, errorInfo, lane) {
  lane = createUpdate(lane);
  lane.tag = 3;
  lane.payload = { element: null };
  lane.callback = function() {
    logUncaughtError(root2, errorInfo);
  };
  return lane;
}
function createClassErrorUpdate(lane) {
  lane = createUpdate(lane);
  lane.tag = 3;
  return lane;
}
function initializeClassErrorUpdate(update, root2, fiber, errorInfo) {
  var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
  if ("function" === typeof getDerivedStateFromError) {
    var error = errorInfo.value;
    update.payload = function() {
      return getDerivedStateFromError(error);
    };
    update.callback = function() {
      logCaughtError(root2, fiber, errorInfo);
    };
  }
  var inst = fiber.stateNode;
  null !== inst && "function" === typeof inst.componentDidCatch && (update.callback = function() {
    logCaughtError(root2, fiber, errorInfo);
    "function" !== typeof getDerivedStateFromError && (null === legacyErrorBoundariesThatAlreadyFailed ? legacyErrorBoundariesThatAlreadyFailed = /* @__PURE__ */ new Set([this]) : legacyErrorBoundariesThatAlreadyFailed.add(this));
    var stack = errorInfo.stack;
    this.componentDidCatch(errorInfo.value, {
      componentStack: null !== stack ? stack : ""
    });
  });
}
function throwException(root2, returnFiber, sourceFiber, value, rootRenderLanes) {
  sourceFiber.flags |= 32768;
  if (null !== value && "object" === typeof value && "function" === typeof value.then) {
    returnFiber = sourceFiber.alternate;
    null !== returnFiber && propagateParentContextChanges(
      returnFiber,
      sourceFiber,
      rootRenderLanes,
      true
    );
    sourceFiber = suspenseHandlerStackCursor.current;
    if (null !== sourceFiber) {
      switch (sourceFiber.tag) {
        case 31:
        case 13:
          return null === shellBoundary ? renderDidSuspendDelayIfPossible() : null === sourceFiber.alternate && 0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 3), sourceFiber.flags &= -257, sourceFiber.flags |= 65536, sourceFiber.lanes = rootRenderLanes, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? sourceFiber.updateQueue = /* @__PURE__ */ new Set([value]) : returnFiber.add(value), attachPingListener(root2, value, rootRenderLanes)), false;
        case 22:
          return sourceFiber.flags |= 65536, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? (returnFiber = {
            transitions: null,
            markerInstances: null,
            retryQueue: /* @__PURE__ */ new Set([value])
          }, sourceFiber.updateQueue = returnFiber) : (sourceFiber = returnFiber.retryQueue, null === sourceFiber ? returnFiber.retryQueue = /* @__PURE__ */ new Set([value]) : sourceFiber.add(value)), attachPingListener(root2, value, rootRenderLanes)), false;
      }
      throw Error(formatProdErrorMessage(435, sourceFiber.tag));
    }
    attachPingListener(root2, value, rootRenderLanes);
    renderDidSuspendDelayIfPossible();
    return false;
  }
  if (isHydrating)
    return returnFiber = suspenseHandlerStackCursor.current, null !== returnFiber ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256), returnFiber.flags |= 65536, returnFiber.lanes = rootRenderLanes, value !== HydrationMismatchException && (root2 = Error(formatProdErrorMessage(422), { cause: value }), queueHydrationError(createCapturedValueAtFiber(root2, sourceFiber)))) : (value !== HydrationMismatchException && (returnFiber = Error(formatProdErrorMessage(423), {
      cause: value
    }), queueHydrationError(
      createCapturedValueAtFiber(returnFiber, sourceFiber)
    )), root2 = root2.current.alternate, root2.flags |= 65536, rootRenderLanes &= -rootRenderLanes, root2.lanes |= rootRenderLanes, value = createCapturedValueAtFiber(value, sourceFiber), rootRenderLanes = createRootErrorUpdate(
      root2.stateNode,
      value,
      rootRenderLanes
    ), enqueueCapturedUpdate(root2, rootRenderLanes), 4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2)), false;
  var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
  wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
  null === workInProgressRootConcurrentErrors ? workInProgressRootConcurrentErrors = [wrapperError] : workInProgressRootConcurrentErrors.push(wrapperError);
  4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
  if (null === returnFiber) return true;
  value = createCapturedValueAtFiber(value, sourceFiber);
  sourceFiber = returnFiber;
  do {
    switch (sourceFiber.tag) {
      case 3:
        return sourceFiber.flags |= 65536, root2 = rootRenderLanes & -rootRenderLanes, sourceFiber.lanes |= root2, root2 = createRootErrorUpdate(sourceFiber.stateNode, value, root2), enqueueCapturedUpdate(sourceFiber, root2), false;
      case 1:
        if (returnFiber = sourceFiber.type, wrapperError = sourceFiber.stateNode, 0 === (sourceFiber.flags & 128) && ("function" === typeof returnFiber.getDerivedStateFromError || null !== wrapperError && "function" === typeof wrapperError.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError))))
          return sourceFiber.flags |= 65536, rootRenderLanes &= -rootRenderLanes, sourceFiber.lanes |= rootRenderLanes, rootRenderLanes = createClassErrorUpdate(rootRenderLanes), initializeClassErrorUpdate(
            rootRenderLanes,
            root2,
            sourceFiber,
            value
          ), enqueueCapturedUpdate(sourceFiber, rootRenderLanes), false;
    }
    sourceFiber = sourceFiber.return;
  } while (null !== sourceFiber);
  return false;
}
var SelectiveHydrationException = Error(formatProdErrorMessage(461)), didReceiveUpdate = false;
function reconcileChildren(current, workInProgress2, nextChildren, renderLanes2) {
  workInProgress2.child = null === current ? mountChildFibers(workInProgress2, null, nextChildren, renderLanes2) : reconcileChildFibers(
    workInProgress2,
    current.child,
    nextChildren,
    renderLanes2
  );
}
function updateForwardRef(current, workInProgress2, Component2, nextProps, renderLanes2) {
  Component2 = Component2.render;
  var ref2 = workInProgress2.ref;
  if ("ref" in nextProps) {
    var propsWithoutRef = {};
    for (var key in nextProps)
      "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
  } else propsWithoutRef = nextProps;
  prepareToReadContext(workInProgress2);
  nextProps = renderWithHooks(
    current,
    workInProgress2,
    Component2,
    propsWithoutRef,
    ref2,
    renderLanes2
  );
  key = checkDidRenderIdHook();
  if (null !== current && !didReceiveUpdate)
    return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
  isHydrating && key && pushMaterializedTreeId(workInProgress2);
  workInProgress2.flags |= 1;
  reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
  return workInProgress2.child;
}
function updateMemoComponent(current, workInProgress2, Component2, nextProps, renderLanes2) {
  if (null === current) {
    var type = Component2.type;
    if ("function" === typeof type && !shouldConstruct(type) && void 0 === type.defaultProps && null === Component2.compare)
      return workInProgress2.tag = 15, workInProgress2.type = type, updateSimpleMemoComponent(
        current,
        workInProgress2,
        type,
        nextProps,
        renderLanes2
      );
    current = createFiberFromTypeAndProps(
      Component2.type,
      null,
      nextProps,
      workInProgress2,
      workInProgress2.mode,
      renderLanes2
    );
    current.ref = workInProgress2.ref;
    current.return = workInProgress2;
    return workInProgress2.child = current;
  }
  type = current.child;
  if (!checkScheduledUpdateOrContext(current, renderLanes2)) {
    var prevProps = type.memoizedProps;
    Component2 = Component2.compare;
    Component2 = null !== Component2 ? Component2 : shallowEqual;
    if (Component2(prevProps, nextProps) && current.ref === workInProgress2.ref)
      return bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
  }
  workInProgress2.flags |= 1;
  current = createWorkInProgress(type, nextProps);
  current.ref = workInProgress2.ref;
  current.return = workInProgress2;
  return workInProgress2.child = current;
}
function updateSimpleMemoComponent(current, workInProgress2, Component2, nextProps, renderLanes2) {
  if (null !== current) {
    var prevProps = current.memoizedProps;
    if (shallowEqual(prevProps, nextProps) && current.ref === workInProgress2.ref)
      if (didReceiveUpdate = false, workInProgress2.pendingProps = nextProps = prevProps, checkScheduledUpdateOrContext(current, renderLanes2))
        0 !== (current.flags & 131072) && (didReceiveUpdate = true);
      else
        return workInProgress2.lanes = current.lanes, bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
  }
  return updateFunctionComponent(
    current,
    workInProgress2,
    Component2,
    nextProps,
    renderLanes2
  );
}
function updateOffscreenComponent(current, workInProgress2, renderLanes2, nextProps) {
  var nextChildren = nextProps.children, prevState = null !== current ? current.memoizedState : null;
  null === current && null === workInProgress2.stateNode && (workInProgress2.stateNode = {
    _visibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null
  });
  if ("hidden" === nextProps.mode) {
    if (0 !== (workInProgress2.flags & 128)) {
      prevState = null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2;
      if (null !== current) {
        nextProps = workInProgress2.child = current.child;
        for (nextChildren = 0; null !== nextProps; )
          nextChildren = nextChildren | nextProps.lanes | nextProps.childLanes, nextProps = nextProps.sibling;
        nextProps = nextChildren & ~prevState;
      } else nextProps = 0, workInProgress2.child = null;
      return deferHiddenOffscreenComponent(
        current,
        workInProgress2,
        prevState,
        renderLanes2,
        nextProps
      );
    }
    if (0 !== (renderLanes2 & 536870912))
      workInProgress2.memoizedState = { baseLanes: 0, cachePool: null }, null !== current && pushTransition(
        workInProgress2,
        null !== prevState ? prevState.cachePool : null
      ), null !== prevState ? pushHiddenContext(workInProgress2, prevState) : reuseHiddenContextOnStack(), pushOffscreenSuspenseHandler(workInProgress2);
    else
      return nextProps = workInProgress2.lanes = 536870912, deferHiddenOffscreenComponent(
        current,
        workInProgress2,
        null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2,
        renderLanes2,
        nextProps
      );
  } else
    null !== prevState ? (pushTransition(workInProgress2, prevState.cachePool), pushHiddenContext(workInProgress2, prevState), reuseSuspenseHandlerOnStack(), workInProgress2.memoizedState = null) : (null !== current && pushTransition(workInProgress2, null), reuseHiddenContextOnStack(), reuseSuspenseHandlerOnStack());
  reconcileChildren(current, workInProgress2, nextChildren, renderLanes2);
  return workInProgress2.child;
}
function bailoutOffscreenComponent(current, workInProgress2) {
  null !== current && 22 === current.tag || null !== workInProgress2.stateNode || (workInProgress2.stateNode = {
    _visibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null
  });
  return workInProgress2.sibling;
}
function deferHiddenOffscreenComponent(current, workInProgress2, nextBaseLanes, renderLanes2, remainingChildLanes) {
  var JSCompiler_inline_result = peekCacheFromPool();
  JSCompiler_inline_result = null === JSCompiler_inline_result ? null : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
  workInProgress2.memoizedState = {
    baseLanes: nextBaseLanes,
    cachePool: JSCompiler_inline_result
  };
  null !== current && pushTransition(workInProgress2, null);
  reuseHiddenContextOnStack();
  pushOffscreenSuspenseHandler(workInProgress2);
  null !== current && propagateParentContextChanges(current, workInProgress2, renderLanes2, true);
  workInProgress2.childLanes = remainingChildLanes;
  return null;
}
function mountActivityChildren(workInProgress2, nextProps) {
  nextProps = mountWorkInProgressOffscreenFiber(
    { mode: nextProps.mode, children: nextProps.children },
    workInProgress2.mode
  );
  nextProps.ref = workInProgress2.ref;
  workInProgress2.child = nextProps;
  nextProps.return = workInProgress2;
  return nextProps;
}
function retryActivityComponentWithoutHydrating(current, workInProgress2, renderLanes2) {
  reconcileChildFibers(workInProgress2, current.child, null, renderLanes2);
  current = mountActivityChildren(workInProgress2, workInProgress2.pendingProps);
  current.flags |= 2;
  popSuspenseHandler(workInProgress2);
  workInProgress2.memoizedState = null;
  return current;
}
function updateActivityComponent(current, workInProgress2, renderLanes2) {
  var nextProps = workInProgress2.pendingProps, didSuspend = 0 !== (workInProgress2.flags & 128);
  workInProgress2.flags &= -129;
  if (null === current) {
    if (isHydrating) {
      if ("hidden" === nextProps.mode)
        return current = mountActivityChildren(workInProgress2, nextProps), workInProgress2.lanes = 536870912, bailoutOffscreenComponent(null, current);
      pushDehydratedActivitySuspenseHandler(workInProgress2);
      (current = nextHydratableInstance) ? (current = canHydrateHydrationBoundary(
        current,
        rootOrSingletonContext
      ), current = null !== current && "&" === current.data ? current : null, null !== current && (workInProgress2.memoizedState = {
        dehydrated: current,
        treeContext: null !== treeContextProvider ? { id: treeContextId, overflow: treeContextOverflow } : null,
        retryLane: 536870912,
        hydrationErrors: null
      }, renderLanes2 = createFiberFromDehydratedFragment(current), renderLanes2.return = workInProgress2, workInProgress2.child = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null)) : current = null;
      if (null === current) throw throwOnHydrationMismatch(workInProgress2);
      workInProgress2.lanes = 536870912;
      return null;
    }
    return mountActivityChildren(workInProgress2, nextProps);
  }
  var prevState = current.memoizedState;
  if (null !== prevState) {
    var dehydrated = prevState.dehydrated;
    pushDehydratedActivitySuspenseHandler(workInProgress2);
    if (didSuspend)
      if (workInProgress2.flags & 256)
        workInProgress2.flags &= -257, workInProgress2 = retryActivityComponentWithoutHydrating(
          current,
          workInProgress2,
          renderLanes2
        );
      else if (null !== workInProgress2.memoizedState)
        workInProgress2.child = current.child, workInProgress2.flags |= 128, workInProgress2 = null;
      else throw Error(formatProdErrorMessage(558));
    else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress2, renderLanes2, false), didSuspend = 0 !== (renderLanes2 & current.childLanes), didReceiveUpdate || didSuspend) {
      nextProps = workInProgressRoot;
      if (null !== nextProps && (dehydrated = getBumpedLaneForHydration(nextProps, renderLanes2), 0 !== dehydrated && dehydrated !== prevState.retryLane))
        throw prevState.retryLane = dehydrated, enqueueConcurrentRenderForLane(current, dehydrated), scheduleUpdateOnFiber(nextProps, current, dehydrated), SelectiveHydrationException;
      renderDidSuspendDelayIfPossible();
      workInProgress2 = retryActivityComponentWithoutHydrating(
        current,
        workInProgress2,
        renderLanes2
      );
    } else
      current = prevState.treeContext, nextHydratableInstance = getNextHydratable(dehydrated.nextSibling), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, rootOrSingletonContext = false, null !== current && restoreSuspendedTreeContext(workInProgress2, current), workInProgress2 = mountActivityChildren(workInProgress2, nextProps), workInProgress2.flags |= 4096;
    return workInProgress2;
  }
  current = createWorkInProgress(current.child, {
    mode: nextProps.mode,
    children: nextProps.children
  });
  current.ref = workInProgress2.ref;
  workInProgress2.child = current;
  current.return = workInProgress2;
  return current;
}
function markRef(current, workInProgress2) {
  var ref2 = workInProgress2.ref;
  if (null === ref2)
    null !== current && null !== current.ref && (workInProgress2.flags |= 4194816);
  else {
    if ("function" !== typeof ref2 && "object" !== typeof ref2)
      throw Error(formatProdErrorMessage(284));
    if (null === current || current.ref !== ref2)
      workInProgress2.flags |= 4194816;
  }
}
function updateFunctionComponent(current, workInProgress2, Component2, nextProps, renderLanes2) {
  prepareToReadContext(workInProgress2);
  Component2 = renderWithHooks(
    current,
    workInProgress2,
    Component2,
    nextProps,
    void 0,
    renderLanes2
  );
  nextProps = checkDidRenderIdHook();
  if (null !== current && !didReceiveUpdate)
    return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
  isHydrating && nextProps && pushMaterializedTreeId(workInProgress2);
  workInProgress2.flags |= 1;
  reconcileChildren(current, workInProgress2, Component2, renderLanes2);
  return workInProgress2.child;
}
function replayFunctionComponent(current, workInProgress2, nextProps, Component2, secondArg, renderLanes2) {
  prepareToReadContext(workInProgress2);
  workInProgress2.updateQueue = null;
  nextProps = renderWithHooksAgain(
    workInProgress2,
    Component2,
    nextProps,
    secondArg
  );
  finishRenderingHooks(current);
  Component2 = checkDidRenderIdHook();
  if (null !== current && !didReceiveUpdate)
    return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
  isHydrating && Component2 && pushMaterializedTreeId(workInProgress2);
  workInProgress2.flags |= 1;
  reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
  return workInProgress2.child;
}
function updateClassComponent(current, workInProgress2, Component2, nextProps, renderLanes2) {
  prepareToReadContext(workInProgress2);
  if (null === workInProgress2.stateNode) {
    var context3 = emptyContextObject, contextType = Component2.contextType;
    "object" === typeof contextType && null !== contextType && (context3 = readContext(contextType));
    context3 = new Component2(nextProps, context3);
    workInProgress2.memoizedState = null !== context3.state && void 0 !== context3.state ? context3.state : null;
    context3.updater = classComponentUpdater;
    workInProgress2.stateNode = context3;
    context3._reactInternals = workInProgress2;
    context3 = workInProgress2.stateNode;
    context3.props = nextProps;
    context3.state = workInProgress2.memoizedState;
    context3.refs = {};
    initializeUpdateQueue(workInProgress2);
    contextType = Component2.contextType;
    context3.context = "object" === typeof contextType && null !== contextType ? readContext(contextType) : emptyContextObject;
    context3.state = workInProgress2.memoizedState;
    contextType = Component2.getDerivedStateFromProps;
    "function" === typeof contextType && (applyDerivedStateFromProps(
      workInProgress2,
      Component2,
      contextType,
      nextProps
    ), context3.state = workInProgress2.memoizedState);
    "function" === typeof Component2.getDerivedStateFromProps || "function" === typeof context3.getSnapshotBeforeUpdate || "function" !== typeof context3.UNSAFE_componentWillMount && "function" !== typeof context3.componentWillMount || (contextType = context3.state, "function" === typeof context3.componentWillMount && context3.componentWillMount(), "function" === typeof context3.UNSAFE_componentWillMount && context3.UNSAFE_componentWillMount(), contextType !== context3.state && classComponentUpdater.enqueueReplaceState(context3, context3.state, null), processUpdateQueue(workInProgress2, nextProps, context3, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction(), context3.state = workInProgress2.memoizedState);
    "function" === typeof context3.componentDidMount && (workInProgress2.flags |= 4194308);
    nextProps = true;
  } else if (null === current) {
    context3 = workInProgress2.stateNode;
    var unresolvedOldProps = workInProgress2.memoizedProps, oldProps = resolveClassComponentProps(Component2, unresolvedOldProps);
    context3.props = oldProps;
    var oldContext = context3.context, contextType$jscomp$0 = Component2.contextType;
    contextType = emptyContextObject;
    "object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 && (contextType = readContext(contextType$jscomp$0));
    var getDerivedStateFromProps = Component2.getDerivedStateFromProps;
    contextType$jscomp$0 = "function" === typeof getDerivedStateFromProps || "function" === typeof context3.getSnapshotBeforeUpdate;
    unresolvedOldProps = workInProgress2.pendingProps !== unresolvedOldProps;
    contextType$jscomp$0 || "function" !== typeof context3.UNSAFE_componentWillReceiveProps && "function" !== typeof context3.componentWillReceiveProps || (unresolvedOldProps || oldContext !== contextType) && callComponentWillReceiveProps(
      workInProgress2,
      context3,
      nextProps,
      contextType
    );
    hasForceUpdate = false;
    var oldState = workInProgress2.memoizedState;
    context3.state = oldState;
    processUpdateQueue(workInProgress2, nextProps, context3, renderLanes2);
    suspendIfUpdateReadFromEntangledAsyncAction();
    oldContext = workInProgress2.memoizedState;
    unresolvedOldProps || oldState !== oldContext || hasForceUpdate ? ("function" === typeof getDerivedStateFromProps && (applyDerivedStateFromProps(
      workInProgress2,
      Component2,
      getDerivedStateFromProps,
      nextProps
    ), oldContext = workInProgress2.memoizedState), (oldProps = hasForceUpdate || checkShouldComponentUpdate(
      workInProgress2,
      Component2,
      oldProps,
      nextProps,
      oldState,
      oldContext,
      contextType
    )) ? (contextType$jscomp$0 || "function" !== typeof context3.UNSAFE_componentWillMount && "function" !== typeof context3.componentWillMount || ("function" === typeof context3.componentWillMount && context3.componentWillMount(), "function" === typeof context3.UNSAFE_componentWillMount && context3.UNSAFE_componentWillMount()), "function" === typeof context3.componentDidMount && (workInProgress2.flags |= 4194308)) : ("function" === typeof context3.componentDidMount && (workInProgress2.flags |= 4194308), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = oldContext), context3.props = nextProps, context3.state = oldContext, context3.context = contextType, nextProps = oldProps) : ("function" === typeof context3.componentDidMount && (workInProgress2.flags |= 4194308), nextProps = false);
  } else {
    context3 = workInProgress2.stateNode;
    cloneUpdateQueue(current, workInProgress2);
    contextType = workInProgress2.memoizedProps;
    contextType$jscomp$0 = resolveClassComponentProps(Component2, contextType);
    context3.props = contextType$jscomp$0;
    getDerivedStateFromProps = workInProgress2.pendingProps;
    oldState = context3.context;
    oldContext = Component2.contextType;
    oldProps = emptyContextObject;
    "object" === typeof oldContext && null !== oldContext && (oldProps = readContext(oldContext));
    unresolvedOldProps = Component2.getDerivedStateFromProps;
    (oldContext = "function" === typeof unresolvedOldProps || "function" === typeof context3.getSnapshotBeforeUpdate) || "function" !== typeof context3.UNSAFE_componentWillReceiveProps && "function" !== typeof context3.componentWillReceiveProps || (contextType !== getDerivedStateFromProps || oldState !== oldProps) && callComponentWillReceiveProps(
      workInProgress2,
      context3,
      nextProps,
      oldProps
    );
    hasForceUpdate = false;
    oldState = workInProgress2.memoizedState;
    context3.state = oldState;
    processUpdateQueue(workInProgress2, nextProps, context3, renderLanes2);
    suspendIfUpdateReadFromEntangledAsyncAction();
    var newState = workInProgress2.memoizedState;
    contextType !== getDerivedStateFromProps || oldState !== newState || hasForceUpdate || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies) ? ("function" === typeof unresolvedOldProps && (applyDerivedStateFromProps(
      workInProgress2,
      Component2,
      unresolvedOldProps,
      nextProps
    ), newState = workInProgress2.memoizedState), (contextType$jscomp$0 = hasForceUpdate || checkShouldComponentUpdate(
      workInProgress2,
      Component2,
      contextType$jscomp$0,
      nextProps,
      oldState,
      newState,
      oldProps
    ) || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies)) ? (oldContext || "function" !== typeof context3.UNSAFE_componentWillUpdate && "function" !== typeof context3.componentWillUpdate || ("function" === typeof context3.componentWillUpdate && context3.componentWillUpdate(nextProps, newState, oldProps), "function" === typeof context3.UNSAFE_componentWillUpdate && context3.UNSAFE_componentWillUpdate(
      nextProps,
      newState,
      oldProps
    )), "function" === typeof context3.componentDidUpdate && (workInProgress2.flags |= 4), "function" === typeof context3.getSnapshotBeforeUpdate && (workInProgress2.flags |= 1024)) : ("function" !== typeof context3.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof context3.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 1024), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = newState), context3.props = nextProps, context3.state = newState, context3.context = oldProps, nextProps = contextType$jscomp$0) : ("function" !== typeof context3.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof context3.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 1024), nextProps = false);
  }
  context3 = nextProps;
  markRef(current, workInProgress2);
  nextProps = 0 !== (workInProgress2.flags & 128);
  context3 || nextProps ? (context3 = workInProgress2.stateNode, Component2 = nextProps && "function" !== typeof Component2.getDerivedStateFromError ? null : context3.render(), workInProgress2.flags |= 1, null !== current && nextProps ? (workInProgress2.child = reconcileChildFibers(
    workInProgress2,
    current.child,
    null,
    renderLanes2
  ), workInProgress2.child = reconcileChildFibers(
    workInProgress2,
    null,
    Component2,
    renderLanes2
  )) : reconcileChildren(current, workInProgress2, Component2, renderLanes2), workInProgress2.memoizedState = context3.state, current = workInProgress2.child) : current = bailoutOnAlreadyFinishedWork(
    current,
    workInProgress2,
    renderLanes2
  );
  return current;
}
function mountHostRootWithoutHydrating(current, workInProgress2, nextChildren, renderLanes2) {
  resetHydrationState();
  workInProgress2.flags |= 256;
  reconcileChildren(current, workInProgress2, nextChildren, renderLanes2);
  return workInProgress2.child;
}
var SUSPENDED_MARKER = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
  hydrationErrors: null
};
function mountSuspenseOffscreenState(renderLanes2) {
  return { baseLanes: renderLanes2, cachePool: getSuspendedCache() };
}
function getRemainingWorkInPrimaryTree(current, primaryTreeDidDefer, renderLanes2) {
  current = null !== current ? current.childLanes & ~renderLanes2 : 0;
  primaryTreeDidDefer && (current |= workInProgressDeferredLane);
  return current;
}
function updateSuspenseComponent(current, workInProgress2, renderLanes2) {
  var nextProps = workInProgress2.pendingProps, showFallback = false, didSuspend = 0 !== (workInProgress2.flags & 128), JSCompiler_temp;
  (JSCompiler_temp = didSuspend) || (JSCompiler_temp = null !== current && null === current.memoizedState ? false : 0 !== (suspenseStackCursor.current & 2));
  JSCompiler_temp && (showFallback = true, workInProgress2.flags &= -129);
  JSCompiler_temp = 0 !== (workInProgress2.flags & 32);
  workInProgress2.flags &= -33;
  if (null === current) {
    if (isHydrating) {
      showFallback ? pushPrimaryTreeSuspenseHandler(workInProgress2) : reuseSuspenseHandlerOnStack();
      (current = nextHydratableInstance) ? (current = canHydrateHydrationBoundary(
        current,
        rootOrSingletonContext
      ), current = null !== current && "&" !== current.data ? current : null, null !== current && (workInProgress2.memoizedState = {
        dehydrated: current,
        treeContext: null !== treeContextProvider ? { id: treeContextId, overflow: treeContextOverflow } : null,
        retryLane: 536870912,
        hydrationErrors: null
      }, renderLanes2 = createFiberFromDehydratedFragment(current), renderLanes2.return = workInProgress2, workInProgress2.child = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null)) : current = null;
      if (null === current) throw throwOnHydrationMismatch(workInProgress2);
      isSuspenseInstanceFallback(current) ? workInProgress2.lanes = 32 : workInProgress2.lanes = 536870912;
      return null;
    }
    var nextPrimaryChildren = nextProps.children;
    nextProps = nextProps.fallback;
    if (showFallback)
      return reuseSuspenseHandlerOnStack(), showFallback = workInProgress2.mode, nextPrimaryChildren = mountWorkInProgressOffscreenFiber(
        { mode: "hidden", children: nextPrimaryChildren },
        showFallback
      ), nextProps = createFiberFromFragment(
        nextProps,
        showFallback,
        renderLanes2,
        null
      ), nextPrimaryChildren.return = workInProgress2, nextProps.return = workInProgress2, nextPrimaryChildren.sibling = nextProps, workInProgress2.child = nextPrimaryChildren, nextProps = workInProgress2.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes2), nextProps.childLanes = getRemainingWorkInPrimaryTree(
        current,
        JSCompiler_temp,
        renderLanes2
      ), workInProgress2.memoizedState = SUSPENDED_MARKER, bailoutOffscreenComponent(null, nextProps);
    pushPrimaryTreeSuspenseHandler(workInProgress2);
    return mountSuspensePrimaryChildren(workInProgress2, nextPrimaryChildren);
  }
  var prevState = current.memoizedState;
  if (null !== prevState && (nextPrimaryChildren = prevState.dehydrated, null !== nextPrimaryChildren)) {
    if (didSuspend)
      workInProgress2.flags & 256 ? (pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags &= -257, workInProgress2 = retrySuspenseComponentWithoutHydrating(
        current,
        workInProgress2,
        renderLanes2
      )) : null !== workInProgress2.memoizedState ? (reuseSuspenseHandlerOnStack(), workInProgress2.child = current.child, workInProgress2.flags |= 128, workInProgress2 = null) : (reuseSuspenseHandlerOnStack(), nextPrimaryChildren = nextProps.fallback, showFallback = workInProgress2.mode, nextProps = mountWorkInProgressOffscreenFiber(
        { mode: "visible", children: nextProps.children },
        showFallback
      ), nextPrimaryChildren = createFiberFromFragment(
        nextPrimaryChildren,
        showFallback,
        renderLanes2,
        null
      ), nextPrimaryChildren.flags |= 2, nextProps.return = workInProgress2, nextPrimaryChildren.return = workInProgress2, nextProps.sibling = nextPrimaryChildren, workInProgress2.child = nextProps, reconcileChildFibers(
        workInProgress2,
        current.child,
        null,
        renderLanes2
      ), nextProps = workInProgress2.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes2), nextProps.childLanes = getRemainingWorkInPrimaryTree(
        current,
        JSCompiler_temp,
        renderLanes2
      ), workInProgress2.memoizedState = SUSPENDED_MARKER, workInProgress2 = bailoutOffscreenComponent(null, nextProps));
    else if (pushPrimaryTreeSuspenseHandler(workInProgress2), isSuspenseInstanceFallback(nextPrimaryChildren)) {
      JSCompiler_temp = nextPrimaryChildren.nextSibling && nextPrimaryChildren.nextSibling.dataset;
      if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
      JSCompiler_temp = digest;
      nextProps = Error(formatProdErrorMessage(419));
      nextProps.stack = "";
      nextProps.digest = JSCompiler_temp;
      queueHydrationError({ value: nextProps, source: null, stack: null });
      workInProgress2 = retrySuspenseComponentWithoutHydrating(
        current,
        workInProgress2,
        renderLanes2
      );
    } else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress2, renderLanes2, false), JSCompiler_temp = 0 !== (renderLanes2 & current.childLanes), didReceiveUpdate || JSCompiler_temp) {
      JSCompiler_temp = workInProgressRoot;
      if (null !== JSCompiler_temp && (nextProps = getBumpedLaneForHydration(JSCompiler_temp, renderLanes2), 0 !== nextProps && nextProps !== prevState.retryLane))
        throw prevState.retryLane = nextProps, enqueueConcurrentRenderForLane(current, nextProps), scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps), SelectiveHydrationException;
      isSuspenseInstancePending(nextPrimaryChildren) || renderDidSuspendDelayIfPossible();
      workInProgress2 = retrySuspenseComponentWithoutHydrating(
        current,
        workInProgress2,
        renderLanes2
      );
    } else
      isSuspenseInstancePending(nextPrimaryChildren) ? (workInProgress2.flags |= 192, workInProgress2.child = current.child, workInProgress2 = null) : (current = prevState.treeContext, nextHydratableInstance = getNextHydratable(
        nextPrimaryChildren.nextSibling
      ), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, rootOrSingletonContext = false, null !== current && restoreSuspendedTreeContext(workInProgress2, current), workInProgress2 = mountSuspensePrimaryChildren(
        workInProgress2,
        nextProps.children
      ), workInProgress2.flags |= 4096);
    return workInProgress2;
  }
  if (showFallback)
    return reuseSuspenseHandlerOnStack(), nextPrimaryChildren = nextProps.fallback, showFallback = workInProgress2.mode, prevState = current.child, digest = prevState.sibling, nextProps = createWorkInProgress(prevState, {
      mode: "hidden",
      children: nextProps.children
    }), nextProps.subtreeFlags = prevState.subtreeFlags & 65011712, null !== digest ? nextPrimaryChildren = createWorkInProgress(
      digest,
      nextPrimaryChildren
    ) : (nextPrimaryChildren = createFiberFromFragment(
      nextPrimaryChildren,
      showFallback,
      renderLanes2,
      null
    ), nextPrimaryChildren.flags |= 2), nextPrimaryChildren.return = workInProgress2, nextProps.return = workInProgress2, nextProps.sibling = nextPrimaryChildren, workInProgress2.child = nextProps, bailoutOffscreenComponent(null, nextProps), nextProps = workInProgress2.child, nextPrimaryChildren = current.child.memoizedState, null === nextPrimaryChildren ? nextPrimaryChildren = mountSuspenseOffscreenState(renderLanes2) : (showFallback = nextPrimaryChildren.cachePool, null !== showFallback ? (prevState = CacheContext._currentValue, showFallback = showFallback.parent !== prevState ? { parent: prevState, pool: prevState } : showFallback) : showFallback = getSuspendedCache(), nextPrimaryChildren = {
      baseLanes: nextPrimaryChildren.baseLanes | renderLanes2,
      cachePool: showFallback
    }), nextProps.memoizedState = nextPrimaryChildren, nextProps.childLanes = getRemainingWorkInPrimaryTree(
      current,
      JSCompiler_temp,
      renderLanes2
    ), workInProgress2.memoizedState = SUSPENDED_MARKER, bailoutOffscreenComponent(current.child, nextProps);
  pushPrimaryTreeSuspenseHandler(workInProgress2);
  renderLanes2 = current.child;
  current = renderLanes2.sibling;
  renderLanes2 = createWorkInProgress(renderLanes2, {
    mode: "visible",
    children: nextProps.children
  });
  renderLanes2.return = workInProgress2;
  renderLanes2.sibling = null;
  null !== current && (JSCompiler_temp = workInProgress2.deletions, null === JSCompiler_temp ? (workInProgress2.deletions = [current], workInProgress2.flags |= 16) : JSCompiler_temp.push(current));
  workInProgress2.child = renderLanes2;
  workInProgress2.memoizedState = null;
  return renderLanes2;
}
function mountSuspensePrimaryChildren(workInProgress2, primaryChildren) {
  primaryChildren = mountWorkInProgressOffscreenFiber(
    { mode: "visible", children: primaryChildren },
    workInProgress2.mode
  );
  primaryChildren.return = workInProgress2;
  return workInProgress2.child = primaryChildren;
}
function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
  offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
  offscreenProps.lanes = 0;
  return offscreenProps;
}
function retrySuspenseComponentWithoutHydrating(current, workInProgress2, renderLanes2) {
  reconcileChildFibers(workInProgress2, current.child, null, renderLanes2);
  current = mountSuspensePrimaryChildren(
    workInProgress2,
    workInProgress2.pendingProps.children
  );
  current.flags |= 2;
  workInProgress2.memoizedState = null;
  return current;
}
function scheduleSuspenseWorkOnFiber(fiber, renderLanes2, propagationRoot) {
  fiber.lanes |= renderLanes2;
  var alternate = fiber.alternate;
  null !== alternate && (alternate.lanes |= renderLanes2);
  scheduleContextWorkOnParentPath(fiber.return, renderLanes2, propagationRoot);
}
function initSuspenseListRenderState(workInProgress2, isBackwards, tail, lastContentRow, tailMode, treeForkCount2) {
  var renderState = workInProgress2.memoizedState;
  null === renderState ? workInProgress2.memoizedState = {
    isBackwards,
    rendering: null,
    renderingStartTime: 0,
    last: lastContentRow,
    tail,
    tailMode,
    treeForkCount: treeForkCount2
  } : (renderState.isBackwards = isBackwards, renderState.rendering = null, renderState.renderingStartTime = 0, renderState.last = lastContentRow, renderState.tail = tail, renderState.tailMode = tailMode, renderState.treeForkCount = treeForkCount2);
}
function updateSuspenseListComponent(current, workInProgress2, renderLanes2) {
  var nextProps = workInProgress2.pendingProps, revealOrder = nextProps.revealOrder, tailMode = nextProps.tail;
  nextProps = nextProps.children;
  var suspenseContext = suspenseStackCursor.current, shouldForceFallback = 0 !== (suspenseContext & 2);
  shouldForceFallback ? (suspenseContext = suspenseContext & 1 | 2, workInProgress2.flags |= 128) : suspenseContext &= 1;
  push(suspenseStackCursor, suspenseContext);
  reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
  nextProps = isHydrating ? treeForkCount : 0;
  if (!shouldForceFallback && null !== current && 0 !== (current.flags & 128))
    a: for (current = workInProgress2.child; null !== current; ) {
      if (13 === current.tag)
        null !== current.memoizedState && scheduleSuspenseWorkOnFiber(current, renderLanes2, workInProgress2);
      else if (19 === current.tag)
        scheduleSuspenseWorkOnFiber(current, renderLanes2, workInProgress2);
      else if (null !== current.child) {
        current.child.return = current;
        current = current.child;
        continue;
      }
      if (current === workInProgress2) break a;
      for (; null === current.sibling; ) {
        if (null === current.return || current.return === workInProgress2)
          break a;
        current = current.return;
      }
      current.sibling.return = current.return;
      current = current.sibling;
    }
  switch (revealOrder) {
    case "forwards":
      renderLanes2 = workInProgress2.child;
      for (revealOrder = null; null !== renderLanes2; )
        current = renderLanes2.alternate, null !== current && null === findFirstSuspended(current) && (revealOrder = renderLanes2), renderLanes2 = renderLanes2.sibling;
      renderLanes2 = revealOrder;
      null === renderLanes2 ? (revealOrder = workInProgress2.child, workInProgress2.child = null) : (revealOrder = renderLanes2.sibling, renderLanes2.sibling = null);
      initSuspenseListRenderState(
        workInProgress2,
        false,
        revealOrder,
        renderLanes2,
        tailMode,
        nextProps
      );
      break;
    case "backwards":
    case "unstable_legacy-backwards":
      renderLanes2 = null;
      revealOrder = workInProgress2.child;
      for (workInProgress2.child = null; null !== revealOrder; ) {
        current = revealOrder.alternate;
        if (null !== current && null === findFirstSuspended(current)) {
          workInProgress2.child = revealOrder;
          break;
        }
        current = revealOrder.sibling;
        revealOrder.sibling = renderLanes2;
        renderLanes2 = revealOrder;
        revealOrder = current;
      }
      initSuspenseListRenderState(
        workInProgress2,
        true,
        renderLanes2,
        null,
        tailMode,
        nextProps
      );
      break;
    case "together":
      initSuspenseListRenderState(
        workInProgress2,
        false,
        null,
        null,
        void 0,
        nextProps
      );
      break;
    default:
      workInProgress2.memoizedState = null;
  }
  return workInProgress2.child;
}
function bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2) {
  null !== current && (workInProgress2.dependencies = current.dependencies);
  workInProgressRootSkippedLanes |= workInProgress2.lanes;
  if (0 === (renderLanes2 & workInProgress2.childLanes))
    if (null !== current) {
      if (propagateParentContextChanges(
        current,
        workInProgress2,
        renderLanes2,
        false
      ), 0 === (renderLanes2 & workInProgress2.childLanes))
        return null;
    } else return null;
  if (null !== current && workInProgress2.child !== current.child)
    throw Error(formatProdErrorMessage(153));
  if (null !== workInProgress2.child) {
    current = workInProgress2.child;
    renderLanes2 = createWorkInProgress(current, current.pendingProps);
    workInProgress2.child = renderLanes2;
    for (renderLanes2.return = workInProgress2; null !== current.sibling; )
      current = current.sibling, renderLanes2 = renderLanes2.sibling = createWorkInProgress(current, current.pendingProps), renderLanes2.return = workInProgress2;
    renderLanes2.sibling = null;
  }
  return workInProgress2.child;
}
function checkScheduledUpdateOrContext(current, renderLanes2) {
  if (0 !== (current.lanes & renderLanes2)) return true;
  current = current.dependencies;
  return null !== current && checkIfContextChanged(current) ? true : false;
}
function attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress2, renderLanes2) {
  switch (workInProgress2.tag) {
    case 3:
      pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
      pushProvider(workInProgress2, CacheContext, current.memoizedState.cache);
      resetHydrationState();
      break;
    case 27:
    case 5:
      pushHostContext(workInProgress2);
      break;
    case 4:
      pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
      break;
    case 10:
      pushProvider(
        workInProgress2,
        workInProgress2.type,
        workInProgress2.memoizedProps.value
      );
      break;
    case 31:
      if (null !== workInProgress2.memoizedState)
        return workInProgress2.flags |= 128, pushDehydratedActivitySuspenseHandler(workInProgress2), null;
      break;
    case 13:
      var state$102 = workInProgress2.memoizedState;
      if (null !== state$102) {
        if (null !== state$102.dehydrated)
          return pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags |= 128, null;
        if (0 !== (renderLanes2 & workInProgress2.child.childLanes))
          return updateSuspenseComponent(current, workInProgress2, renderLanes2);
        pushPrimaryTreeSuspenseHandler(workInProgress2);
        current = bailoutOnAlreadyFinishedWork(
          current,
          workInProgress2,
          renderLanes2
        );
        return null !== current ? current.sibling : null;
      }
      pushPrimaryTreeSuspenseHandler(workInProgress2);
      break;
    case 19:
      var didSuspendBefore = 0 !== (current.flags & 128);
      state$102 = 0 !== (renderLanes2 & workInProgress2.childLanes);
      state$102 || (propagateParentContextChanges(
        current,
        workInProgress2,
        renderLanes2,
        false
      ), state$102 = 0 !== (renderLanes2 & workInProgress2.childLanes));
      if (didSuspendBefore) {
        if (state$102)
          return updateSuspenseListComponent(
            current,
            workInProgress2,
            renderLanes2
          );
        workInProgress2.flags |= 128;
      }
      didSuspendBefore = workInProgress2.memoizedState;
      null !== didSuspendBefore && (didSuspendBefore.rendering = null, didSuspendBefore.tail = null, didSuspendBefore.lastEffect = null);
      push(suspenseStackCursor, suspenseStackCursor.current);
      if (state$102) break;
      else return null;
    case 22:
      return workInProgress2.lanes = 0, updateOffscreenComponent(
        current,
        workInProgress2,
        renderLanes2,
        workInProgress2.pendingProps
      );
    case 24:
      pushProvider(workInProgress2, CacheContext, current.memoizedState.cache);
  }
  return bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
}
function beginWork(current, workInProgress2, renderLanes2) {
  if (null !== current)
    if (current.memoizedProps !== workInProgress2.pendingProps)
      didReceiveUpdate = true;
    else {
      if (!checkScheduledUpdateOrContext(current, renderLanes2) && 0 === (workInProgress2.flags & 128))
        return didReceiveUpdate = false, attemptEarlyBailoutIfNoScheduledUpdate(
          current,
          workInProgress2,
          renderLanes2
        );
      didReceiveUpdate = 0 !== (current.flags & 131072) ? true : false;
    }
  else
    didReceiveUpdate = false, isHydrating && 0 !== (workInProgress2.flags & 1048576) && pushTreeId(workInProgress2, treeForkCount, workInProgress2.index);
  workInProgress2.lanes = 0;
  switch (workInProgress2.tag) {
    case 16:
      a: {
        var props = workInProgress2.pendingProps;
        current = resolveLazy(workInProgress2.elementType);
        workInProgress2.type = current;
        if ("function" === typeof current)
          shouldConstruct(current) ? (props = resolveClassComponentProps(current, props), workInProgress2.tag = 1, workInProgress2 = updateClassComponent(
            null,
            workInProgress2,
            current,
            props,
            renderLanes2
          )) : (workInProgress2.tag = 0, workInProgress2 = updateFunctionComponent(
            null,
            workInProgress2,
            current,
            props,
            renderLanes2
          ));
        else {
          if (void 0 !== current && null !== current) {
            var $$typeof = current.$$typeof;
            if ($$typeof === REACT_FORWARD_REF_TYPE) {
              workInProgress2.tag = 11;
              workInProgress2 = updateForwardRef(
                null,
                workInProgress2,
                current,
                props,
                renderLanes2
              );
              break a;
            } else if ($$typeof === REACT_MEMO_TYPE) {
              workInProgress2.tag = 14;
              workInProgress2 = updateMemoComponent(
                null,
                workInProgress2,
                current,
                props,
                renderLanes2
              );
              break a;
            }
          }
          workInProgress2 = getComponentNameFromType(current) || current;
          throw Error(formatProdErrorMessage(306, workInProgress2, ""));
        }
      }
      return workInProgress2;
    case 0:
      return updateFunctionComponent(
        current,
        workInProgress2,
        workInProgress2.type,
        workInProgress2.pendingProps,
        renderLanes2
      );
    case 1:
      return props = workInProgress2.type, $$typeof = resolveClassComponentProps(
        props,
        workInProgress2.pendingProps
      ), updateClassComponent(
        current,
        workInProgress2,
        props,
        $$typeof,
        renderLanes2
      );
    case 3:
      a: {
        pushHostContainer(
          workInProgress2,
          workInProgress2.stateNode.containerInfo
        );
        if (null === current) throw Error(formatProdErrorMessage(387));
        props = workInProgress2.pendingProps;
        var prevState = workInProgress2.memoizedState;
        $$typeof = prevState.element;
        cloneUpdateQueue(current, workInProgress2);
        processUpdateQueue(workInProgress2, props, null, renderLanes2);
        var nextState = workInProgress2.memoizedState;
        props = nextState.cache;
        pushProvider(workInProgress2, CacheContext, props);
        props !== prevState.cache && propagateContextChanges(
          workInProgress2,
          [CacheContext],
          renderLanes2,
          true
        );
        suspendIfUpdateReadFromEntangledAsyncAction();
        props = nextState.element;
        if (prevState.isDehydrated)
          if (prevState = {
            element: props,
            isDehydrated: false,
            cache: nextState.cache
          }, workInProgress2.updateQueue.baseState = prevState, workInProgress2.memoizedState = prevState, workInProgress2.flags & 256) {
            workInProgress2 = mountHostRootWithoutHydrating(
              current,
              workInProgress2,
              props,
              renderLanes2
            );
            break a;
          } else if (props !== $$typeof) {
            $$typeof = createCapturedValueAtFiber(
              Error(formatProdErrorMessage(424)),
              workInProgress2
            );
            queueHydrationError($$typeof);
            workInProgress2 = mountHostRootWithoutHydrating(
              current,
              workInProgress2,
              props,
              renderLanes2
            );
            break a;
          } else {
            current = workInProgress2.stateNode.containerInfo;
            switch (current.nodeType) {
              case 9:
                current = current.body;
                break;
              default:
                current = "HTML" === current.nodeName ? current.ownerDocument.body : current;
            }
            nextHydratableInstance = getNextHydratable(current.firstChild);
            hydrationParentFiber = workInProgress2;
            isHydrating = true;
            hydrationErrors = null;
            rootOrSingletonContext = true;
            renderLanes2 = mountChildFibers(
              workInProgress2,
              null,
              props,
              renderLanes2
            );
            for (workInProgress2.child = renderLanes2; renderLanes2; )
              renderLanes2.flags = renderLanes2.flags & -3 | 4096, renderLanes2 = renderLanes2.sibling;
          }
        else {
          resetHydrationState();
          if (props === $$typeof) {
            workInProgress2 = bailoutOnAlreadyFinishedWork(
              current,
              workInProgress2,
              renderLanes2
            );
            break a;
          }
          reconcileChildren(current, workInProgress2, props, renderLanes2);
        }
        workInProgress2 = workInProgress2.child;
      }
      return workInProgress2;
    case 26:
      return markRef(current, workInProgress2), null === current ? (renderLanes2 = getResource(
        workInProgress2.type,
        null,
        workInProgress2.pendingProps,
        null
      )) ? workInProgress2.memoizedState = renderLanes2 : isHydrating || (renderLanes2 = workInProgress2.type, current = workInProgress2.pendingProps, props = getOwnerDocumentFromRootContainer(
        rootInstanceStackCursor.current
      ).createElement(renderLanes2), props[internalInstanceKey] = workInProgress2, props[internalPropsKey] = current, setInitialProperties(props, renderLanes2, current), markNodeAsHoistable(props), workInProgress2.stateNode = props) : workInProgress2.memoizedState = getResource(
        workInProgress2.type,
        current.memoizedProps,
        workInProgress2.pendingProps,
        current.memoizedState
      ), null;
    case 27:
      return pushHostContext(workInProgress2), null === current && isHydrating && (props = workInProgress2.stateNode = resolveSingletonInstance(
        workInProgress2.type,
        workInProgress2.pendingProps,
        rootInstanceStackCursor.current
      ), hydrationParentFiber = workInProgress2, rootOrSingletonContext = true, $$typeof = nextHydratableInstance, isSingletonScope(workInProgress2.type) ? (previousHydratableOnEnteringScopedSingleton = $$typeof, nextHydratableInstance = getNextHydratable(props.firstChild)) : nextHydratableInstance = $$typeof), reconcileChildren(
        current,
        workInProgress2,
        workInProgress2.pendingProps.children,
        renderLanes2
      ), markRef(current, workInProgress2), null === current && (workInProgress2.flags |= 4194304), workInProgress2.child;
    case 5:
      if (null === current && isHydrating) {
        if ($$typeof = props = nextHydratableInstance)
          props = canHydrateInstance(
            props,
            workInProgress2.type,
            workInProgress2.pendingProps,
            rootOrSingletonContext
          ), null !== props ? (workInProgress2.stateNode = props, hydrationParentFiber = workInProgress2, nextHydratableInstance = getNextHydratable(props.firstChild), rootOrSingletonContext = false, $$typeof = true) : $$typeof = false;
        $$typeof || throwOnHydrationMismatch(workInProgress2);
      }
      pushHostContext(workInProgress2);
      $$typeof = workInProgress2.type;
      prevState = workInProgress2.pendingProps;
      nextState = null !== current ? current.memoizedProps : null;
      props = prevState.children;
      shouldSetTextContent($$typeof, prevState) ? props = null : null !== nextState && shouldSetTextContent($$typeof, nextState) && (workInProgress2.flags |= 32);
      null !== workInProgress2.memoizedState && ($$typeof = renderWithHooks(
        current,
        workInProgress2,
        TransitionAwareHostComponent,
        null,
        null,
        renderLanes2
      ), HostTransitionContext._currentValue = $$typeof);
      markRef(current, workInProgress2);
      reconcileChildren(current, workInProgress2, props, renderLanes2);
      return workInProgress2.child;
    case 6:
      if (null === current && isHydrating) {
        if (current = renderLanes2 = nextHydratableInstance)
          renderLanes2 = canHydrateTextInstance(
            renderLanes2,
            workInProgress2.pendingProps,
            rootOrSingletonContext
          ), null !== renderLanes2 ? (workInProgress2.stateNode = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null, current = true) : current = false;
        current || throwOnHydrationMismatch(workInProgress2);
      }
      return null;
    case 13:
      return updateSuspenseComponent(current, workInProgress2, renderLanes2);
    case 4:
      return pushHostContainer(
        workInProgress2,
        workInProgress2.stateNode.containerInfo
      ), props = workInProgress2.pendingProps, null === current ? workInProgress2.child = reconcileChildFibers(
        workInProgress2,
        null,
        props,
        renderLanes2
      ) : reconcileChildren(current, workInProgress2, props, renderLanes2), workInProgress2.child;
    case 11:
      return updateForwardRef(
        current,
        workInProgress2,
        workInProgress2.type,
        workInProgress2.pendingProps,
        renderLanes2
      );
    case 7:
      return reconcileChildren(
        current,
        workInProgress2,
        workInProgress2.pendingProps,
        renderLanes2
      ), workInProgress2.child;
    case 8:
      return reconcileChildren(
        current,
        workInProgress2,
        workInProgress2.pendingProps.children,
        renderLanes2
      ), workInProgress2.child;
    case 12:
      return reconcileChildren(
        current,
        workInProgress2,
        workInProgress2.pendingProps.children,
        renderLanes2
      ), workInProgress2.child;
    case 10:
      return props = workInProgress2.pendingProps, pushProvider(workInProgress2, workInProgress2.type, props.value), reconcileChildren(current, workInProgress2, props.children, renderLanes2), workInProgress2.child;
    case 9:
      return $$typeof = workInProgress2.type._context, props = workInProgress2.pendingProps.children, prepareToReadContext(workInProgress2), $$typeof = readContext($$typeof), props = props($$typeof), workInProgress2.flags |= 1, reconcileChildren(current, workInProgress2, props, renderLanes2), workInProgress2.child;
    case 14:
      return updateMemoComponent(
        current,
        workInProgress2,
        workInProgress2.type,
        workInProgress2.pendingProps,
        renderLanes2
      );
    case 15:
      return updateSimpleMemoComponent(
        current,
        workInProgress2,
        workInProgress2.type,
        workInProgress2.pendingProps,
        renderLanes2
      );
    case 19:
      return updateSuspenseListComponent(current, workInProgress2, renderLanes2);
    case 31:
      return updateActivityComponent(current, workInProgress2, renderLanes2);
    case 22:
      return updateOffscreenComponent(
        current,
        workInProgress2,
        renderLanes2,
        workInProgress2.pendingProps
      );
    case 24:
      return prepareToReadContext(workInProgress2), props = readContext(CacheContext), null === current ? ($$typeof = peekCacheFromPool(), null === $$typeof && ($$typeof = workInProgressRoot, prevState = createCache(), $$typeof.pooledCache = prevState, prevState.refCount++, null !== prevState && ($$typeof.pooledCacheLanes |= renderLanes2), $$typeof = prevState), workInProgress2.memoizedState = { parent: props, cache: $$typeof }, initializeUpdateQueue(workInProgress2), pushProvider(workInProgress2, CacheContext, $$typeof)) : (0 !== (current.lanes & renderLanes2) && (cloneUpdateQueue(current, workInProgress2), processUpdateQueue(workInProgress2, null, null, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction()), $$typeof = current.memoizedState, prevState = workInProgress2.memoizedState, $$typeof.parent !== props ? ($$typeof = { parent: props, cache: props }, workInProgress2.memoizedState = $$typeof, 0 === workInProgress2.lanes && (workInProgress2.memoizedState = workInProgress2.updateQueue.baseState = $$typeof), pushProvider(workInProgress2, CacheContext, props)) : (props = prevState.cache, pushProvider(workInProgress2, CacheContext, props), props !== $$typeof.cache && propagateContextChanges(
        workInProgress2,
        [CacheContext],
        renderLanes2,
        true
      ))), reconcileChildren(
        current,
        workInProgress2,
        workInProgress2.pendingProps.children,
        renderLanes2
      ), workInProgress2.child;
    case 29:
      throw workInProgress2.pendingProps;
  }
  throw Error(formatProdErrorMessage(156, workInProgress2.tag));
}
function markUpdate(workInProgress2) {
  workInProgress2.flags |= 4;
}
function preloadInstanceAndSuspendIfNeeded(workInProgress2, type, oldProps, newProps, renderLanes2) {
  if (type = 0 !== (workInProgress2.mode & 32)) type = false;
  if (type) {
    if (workInProgress2.flags |= 16777216, (renderLanes2 & 335544128) === renderLanes2)
      if (workInProgress2.stateNode.complete) workInProgress2.flags |= 8192;
      else if (shouldRemainOnPreviousScreen()) workInProgress2.flags |= 8192;
      else
        throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
  } else workInProgress2.flags &= -16777217;
}
function preloadResourceAndSuspendIfNeeded(workInProgress2, resource) {
  if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
    workInProgress2.flags &= -16777217;
  else if (workInProgress2.flags |= 16777216, !preloadResource(resource))
    if (shouldRemainOnPreviousScreen()) workInProgress2.flags |= 8192;
    else
      throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
}
function scheduleRetryEffect(workInProgress2, retryQueue) {
  null !== retryQueue && (workInProgress2.flags |= 4);
  workInProgress2.flags & 16384 && (retryQueue = 22 !== workInProgress2.tag ? claimNextRetryLane() : 536870912, workInProgress2.lanes |= retryQueue, workInProgressSuspendedRetryLanes |= retryQueue);
}
function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
  if (!isHydrating)
    switch (renderState.tailMode) {
      case "hidden":
        hasRenderedATailFallback = renderState.tail;
        for (var lastTailNode = null; null !== hasRenderedATailFallback; )
          null !== hasRenderedATailFallback.alternate && (lastTailNode = hasRenderedATailFallback), hasRenderedATailFallback = hasRenderedATailFallback.sibling;
        null === lastTailNode ? renderState.tail = null : lastTailNode.sibling = null;
        break;
      case "collapsed":
        lastTailNode = renderState.tail;
        for (var lastTailNode$106 = null; null !== lastTailNode; )
          null !== lastTailNode.alternate && (lastTailNode$106 = lastTailNode), lastTailNode = lastTailNode.sibling;
        null === lastTailNode$106 ? hasRenderedATailFallback || null === renderState.tail ? renderState.tail = null : renderState.tail.sibling = null : lastTailNode$106.sibling = null;
    }
}
function bubbleProperties(completedWork) {
  var didBailout = null !== completedWork.alternate && completedWork.alternate.child === completedWork.child, newChildLanes = 0, subtreeFlags = 0;
  if (didBailout)
    for (var child$107 = completedWork.child; null !== child$107; )
      newChildLanes |= child$107.lanes | child$107.childLanes, subtreeFlags |= child$107.subtreeFlags & 65011712, subtreeFlags |= child$107.flags & 65011712, child$107.return = completedWork, child$107 = child$107.sibling;
  else
    for (child$107 = completedWork.child; null !== child$107; )
      newChildLanes |= child$107.lanes | child$107.childLanes, subtreeFlags |= child$107.subtreeFlags, subtreeFlags |= child$107.flags, child$107.return = completedWork, child$107 = child$107.sibling;
  completedWork.subtreeFlags |= subtreeFlags;
  completedWork.childLanes = newChildLanes;
  return didBailout;
}
function completeWork(current, workInProgress2, renderLanes2) {
  var newProps = workInProgress2.pendingProps;
  popTreeContext(workInProgress2);
  switch (workInProgress2.tag) {
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return bubbleProperties(workInProgress2), null;
    case 1:
      return bubbleProperties(workInProgress2), null;
    case 3:
      renderLanes2 = workInProgress2.stateNode;
      newProps = null;
      null !== current && (newProps = current.memoizedState.cache);
      workInProgress2.memoizedState.cache !== newProps && (workInProgress2.flags |= 2048);
      popProvider(CacheContext);
      popHostContainer();
      renderLanes2.pendingContext && (renderLanes2.context = renderLanes2.pendingContext, renderLanes2.pendingContext = null);
      if (null === current || null === current.child)
        popHydrationState(workInProgress2) ? markUpdate(workInProgress2) : null === current || current.memoizedState.isDehydrated && 0 === (workInProgress2.flags & 256) || (workInProgress2.flags |= 1024, upgradeHydrationErrorsToRecoverable());
      bubbleProperties(workInProgress2);
      return null;
    case 26:
      var type = workInProgress2.type, nextResource = workInProgress2.memoizedState;
      null === current ? (markUpdate(workInProgress2), null !== nextResource ? (bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(workInProgress2, nextResource)) : (bubbleProperties(workInProgress2), preloadInstanceAndSuspendIfNeeded(
        workInProgress2,
        type,
        null,
        newProps,
        renderLanes2
      ))) : nextResource ? nextResource !== current.memoizedState ? (markUpdate(workInProgress2), bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(workInProgress2, nextResource)) : (bubbleProperties(workInProgress2), workInProgress2.flags &= -16777217) : (current = current.memoizedProps, current !== newProps && markUpdate(workInProgress2), bubbleProperties(workInProgress2), preloadInstanceAndSuspendIfNeeded(
        workInProgress2,
        type,
        current,
        newProps,
        renderLanes2
      ));
      return null;
    case 27:
      popHostContext(workInProgress2);
      renderLanes2 = rootInstanceStackCursor.current;
      type = workInProgress2.type;
      if (null !== current && null != workInProgress2.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress2);
      else {
        if (!newProps) {
          if (null === workInProgress2.stateNode)
            throw Error(formatProdErrorMessage(166));
          bubbleProperties(workInProgress2);
          return null;
        }
        current = contextStackCursor.current;
        popHydrationState(workInProgress2) ? prepareToHydrateHostInstance(workInProgress2) : (current = resolveSingletonInstance(type, newProps, renderLanes2), workInProgress2.stateNode = current, markUpdate(workInProgress2));
      }
      bubbleProperties(workInProgress2);
      return null;
    case 5:
      popHostContext(workInProgress2);
      type = workInProgress2.type;
      if (null !== current && null != workInProgress2.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress2);
      else {
        if (!newProps) {
          if (null === workInProgress2.stateNode)
            throw Error(formatProdErrorMessage(166));
          bubbleProperties(workInProgress2);
          return null;
        }
        nextResource = contextStackCursor.current;
        if (popHydrationState(workInProgress2))
          prepareToHydrateHostInstance(workInProgress2);
        else {
          var ownerDocument = getOwnerDocumentFromRootContainer(
            rootInstanceStackCursor.current
          );
          switch (nextResource) {
            case 1:
              nextResource = ownerDocument.createElementNS(
                "http://www.w3.org/2000/svg",
                type
              );
              break;
            case 2:
              nextResource = ownerDocument.createElementNS(
                "http://www.w3.org/1998/Math/MathML",
                type
              );
              break;
            default:
              switch (type) {
                case "svg":
                  nextResource = ownerDocument.createElementNS(
                    "http://www.w3.org/2000/svg",
                    type
                  );
                  break;
                case "math":
                  nextResource = ownerDocument.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    type
                  );
                  break;
                case "script":
                  nextResource = ownerDocument.createElement("div");
                  nextResource.innerHTML = "<script><\/script>";
                  nextResource = nextResource.removeChild(
                    nextResource.firstChild
                  );
                  break;
                case "select":
                  nextResource = "string" === typeof newProps.is ? ownerDocument.createElement("select", {
                    is: newProps.is
                  }) : ownerDocument.createElement("select");
                  newProps.multiple ? nextResource.multiple = true : newProps.size && (nextResource.size = newProps.size);
                  break;
                default:
                  nextResource = "string" === typeof newProps.is ? ownerDocument.createElement(type, { is: newProps.is }) : ownerDocument.createElement(type);
              }
          }
          nextResource[internalInstanceKey] = workInProgress2;
          nextResource[internalPropsKey] = newProps;
          a: for (ownerDocument = workInProgress2.child; null !== ownerDocument; ) {
            if (5 === ownerDocument.tag || 6 === ownerDocument.tag)
              nextResource.appendChild(ownerDocument.stateNode);
            else if (4 !== ownerDocument.tag && 27 !== ownerDocument.tag && null !== ownerDocument.child) {
              ownerDocument.child.return = ownerDocument;
              ownerDocument = ownerDocument.child;
              continue;
            }
            if (ownerDocument === workInProgress2) break a;
            for (; null === ownerDocument.sibling; ) {
              if (null === ownerDocument.return || ownerDocument.return === workInProgress2)
                break a;
              ownerDocument = ownerDocument.return;
            }
            ownerDocument.sibling.return = ownerDocument.return;
            ownerDocument = ownerDocument.sibling;
          }
          workInProgress2.stateNode = nextResource;
          a: switch (setInitialProperties(nextResource, type, newProps), type) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              newProps = !!newProps.autoFocus;
              break a;
            case "img":
              newProps = true;
              break a;
            default:
              newProps = false;
          }
          newProps && markUpdate(workInProgress2);
        }
      }
      bubbleProperties(workInProgress2);
      preloadInstanceAndSuspendIfNeeded(
        workInProgress2,
        workInProgress2.type,
        null === current ? null : current.memoizedProps,
        workInProgress2.pendingProps,
        renderLanes2
      );
      return null;
    case 6:
      if (current && null != workInProgress2.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress2);
      else {
        if ("string" !== typeof newProps && null === workInProgress2.stateNode)
          throw Error(formatProdErrorMessage(166));
        current = rootInstanceStackCursor.current;
        if (popHydrationState(workInProgress2)) {
          current = workInProgress2.stateNode;
          renderLanes2 = workInProgress2.memoizedProps;
          newProps = null;
          type = hydrationParentFiber;
          if (null !== type)
            switch (type.tag) {
              case 27:
              case 5:
                newProps = type.memoizedProps;
            }
          current[internalInstanceKey] = workInProgress2;
          current = current.nodeValue === renderLanes2 || null !== newProps && true === newProps.suppressHydrationWarning || checkForUnmatchedText(current.nodeValue, renderLanes2) ? true : false;
          current || throwOnHydrationMismatch(workInProgress2, true);
        } else
          current = getOwnerDocumentFromRootContainer(current).createTextNode(
            newProps
          ), current[internalInstanceKey] = workInProgress2, workInProgress2.stateNode = current;
      }
      bubbleProperties(workInProgress2);
      return null;
    case 31:
      renderLanes2 = workInProgress2.memoizedState;
      if (null === current || null !== current.memoizedState) {
        newProps = popHydrationState(workInProgress2);
        if (null !== renderLanes2) {
          if (null === current) {
            if (!newProps) throw Error(formatProdErrorMessage(318));
            current = workInProgress2.memoizedState;
            current = null !== current ? current.dehydrated : null;
            if (!current) throw Error(formatProdErrorMessage(557));
            current[internalInstanceKey] = workInProgress2;
          } else
            resetHydrationState(), 0 === (workInProgress2.flags & 128) && (workInProgress2.memoizedState = null), workInProgress2.flags |= 4;
          bubbleProperties(workInProgress2);
          current = false;
        } else
          renderLanes2 = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = renderLanes2), current = true;
        if (!current) {
          if (workInProgress2.flags & 256)
            return popSuspenseHandler(workInProgress2), workInProgress2;
          popSuspenseHandler(workInProgress2);
          return null;
        }
        if (0 !== (workInProgress2.flags & 128))
          throw Error(formatProdErrorMessage(558));
      }
      bubbleProperties(workInProgress2);
      return null;
    case 13:
      newProps = workInProgress2.memoizedState;
      if (null === current || null !== current.memoizedState && null !== current.memoizedState.dehydrated) {
        type = popHydrationState(workInProgress2);
        if (null !== newProps && null !== newProps.dehydrated) {
          if (null === current) {
            if (!type) throw Error(formatProdErrorMessage(318));
            type = workInProgress2.memoizedState;
            type = null !== type ? type.dehydrated : null;
            if (!type) throw Error(formatProdErrorMessage(317));
            type[internalInstanceKey] = workInProgress2;
          } else
            resetHydrationState(), 0 === (workInProgress2.flags & 128) && (workInProgress2.memoizedState = null), workInProgress2.flags |= 4;
          bubbleProperties(workInProgress2);
          type = false;
        } else
          type = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = type), type = true;
        if (!type) {
          if (workInProgress2.flags & 256)
            return popSuspenseHandler(workInProgress2), workInProgress2;
          popSuspenseHandler(workInProgress2);
          return null;
        }
      }
      popSuspenseHandler(workInProgress2);
      if (0 !== (workInProgress2.flags & 128))
        return workInProgress2.lanes = renderLanes2, workInProgress2;
      renderLanes2 = null !== newProps;
      current = null !== current && null !== current.memoizedState;
      renderLanes2 && (newProps = workInProgress2.child, type = null, null !== newProps.alternate && null !== newProps.alternate.memoizedState && null !== newProps.alternate.memoizedState.cachePool && (type = newProps.alternate.memoizedState.cachePool.pool), nextResource = null, null !== newProps.memoizedState && null !== newProps.memoizedState.cachePool && (nextResource = newProps.memoizedState.cachePool.pool), nextResource !== type && (newProps.flags |= 2048));
      renderLanes2 !== current && renderLanes2 && (workInProgress2.child.flags |= 8192);
      scheduleRetryEffect(workInProgress2, workInProgress2.updateQueue);
      bubbleProperties(workInProgress2);
      return null;
    case 4:
      return popHostContainer(), null === current && listenToAllSupportedEvents(workInProgress2.stateNode.containerInfo), bubbleProperties(workInProgress2), null;
    case 10:
      return popProvider(workInProgress2.type), bubbleProperties(workInProgress2), null;
    case 19:
      pop(suspenseStackCursor);
      newProps = workInProgress2.memoizedState;
      if (null === newProps) return bubbleProperties(workInProgress2), null;
      type = 0 !== (workInProgress2.flags & 128);
      nextResource = newProps.rendering;
      if (null === nextResource)
        if (type) cutOffTailIfNeeded(newProps, false);
        else {
          if (0 !== workInProgressRootExitStatus || null !== current && 0 !== (current.flags & 128))
            for (current = workInProgress2.child; null !== current; ) {
              nextResource = findFirstSuspended(current);
              if (null !== nextResource) {
                workInProgress2.flags |= 128;
                cutOffTailIfNeeded(newProps, false);
                current = nextResource.updateQueue;
                workInProgress2.updateQueue = current;
                scheduleRetryEffect(workInProgress2, current);
                workInProgress2.subtreeFlags = 0;
                current = renderLanes2;
                for (renderLanes2 = workInProgress2.child; null !== renderLanes2; )
                  resetWorkInProgress(renderLanes2, current), renderLanes2 = renderLanes2.sibling;
                push(
                  suspenseStackCursor,
                  suspenseStackCursor.current & 1 | 2
                );
                isHydrating && pushTreeFork(workInProgress2, newProps.treeForkCount);
                return workInProgress2.child;
              }
              current = current.sibling;
            }
          null !== newProps.tail && now() > workInProgressRootRenderTargetTime && (workInProgress2.flags |= 128, type = true, cutOffTailIfNeeded(newProps, false), workInProgress2.lanes = 4194304);
        }
      else {
        if (!type)
          if (current = findFirstSuspended(nextResource), null !== current) {
            if (workInProgress2.flags |= 128, type = true, current = current.updateQueue, workInProgress2.updateQueue = current, scheduleRetryEffect(workInProgress2, current), cutOffTailIfNeeded(newProps, true), null === newProps.tail && "hidden" === newProps.tailMode && !nextResource.alternate && !isHydrating)
              return bubbleProperties(workInProgress2), null;
          } else
            2 * now() - newProps.renderingStartTime > workInProgressRootRenderTargetTime && 536870912 !== renderLanes2 && (workInProgress2.flags |= 128, type = true, cutOffTailIfNeeded(newProps, false), workInProgress2.lanes = 4194304);
        newProps.isBackwards ? (nextResource.sibling = workInProgress2.child, workInProgress2.child = nextResource) : (current = newProps.last, null !== current ? current.sibling = nextResource : workInProgress2.child = nextResource, newProps.last = nextResource);
      }
      if (null !== newProps.tail)
        return current = newProps.tail, newProps.rendering = current, newProps.tail = current.sibling, newProps.renderingStartTime = now(), current.sibling = null, renderLanes2 = suspenseStackCursor.current, push(
          suspenseStackCursor,
          type ? renderLanes2 & 1 | 2 : renderLanes2 & 1
        ), isHydrating && pushTreeFork(workInProgress2, newProps.treeForkCount), current;
      bubbleProperties(workInProgress2);
      return null;
    case 22:
    case 23:
      return popSuspenseHandler(workInProgress2), popHiddenContext(), newProps = null !== workInProgress2.memoizedState, null !== current ? null !== current.memoizedState !== newProps && (workInProgress2.flags |= 8192) : newProps && (workInProgress2.flags |= 8192), newProps ? 0 !== (renderLanes2 & 536870912) && 0 === (workInProgress2.flags & 128) && (bubbleProperties(workInProgress2), workInProgress2.subtreeFlags & 6 && (workInProgress2.flags |= 8192)) : bubbleProperties(workInProgress2), renderLanes2 = workInProgress2.updateQueue, null !== renderLanes2 && scheduleRetryEffect(workInProgress2, renderLanes2.retryQueue), renderLanes2 = null, null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (renderLanes2 = current.memoizedState.cachePool.pool), newProps = null, null !== workInProgress2.memoizedState && null !== workInProgress2.memoizedState.cachePool && (newProps = workInProgress2.memoizedState.cachePool.pool), newProps !== renderLanes2 && (workInProgress2.flags |= 2048), null !== current && pop(resumedCache), null;
    case 24:
      return renderLanes2 = null, null !== current && (renderLanes2 = current.memoizedState.cache), workInProgress2.memoizedState.cache !== renderLanes2 && (workInProgress2.flags |= 2048), popProvider(CacheContext), bubbleProperties(workInProgress2), null;
    case 25:
      return null;
    case 30:
      return null;
  }
  throw Error(formatProdErrorMessage(156, workInProgress2.tag));
}
function unwindWork(current, workInProgress2) {
  popTreeContext(workInProgress2);
  switch (workInProgress2.tag) {
    case 1:
      return current = workInProgress2.flags, current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
    case 3:
      return popProvider(CacheContext), popHostContainer(), current = workInProgress2.flags, 0 !== (current & 65536) && 0 === (current & 128) ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
    case 26:
    case 27:
    case 5:
      return popHostContext(workInProgress2), null;
    case 31:
      if (null !== workInProgress2.memoizedState) {
        popSuspenseHandler(workInProgress2);
        if (null === workInProgress2.alternate)
          throw Error(formatProdErrorMessage(340));
        resetHydrationState();
      }
      current = workInProgress2.flags;
      return current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
    case 13:
      popSuspenseHandler(workInProgress2);
      current = workInProgress2.memoizedState;
      if (null !== current && null !== current.dehydrated) {
        if (null === workInProgress2.alternate)
          throw Error(formatProdErrorMessage(340));
        resetHydrationState();
      }
      current = workInProgress2.flags;
      return current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
    case 19:
      return pop(suspenseStackCursor), null;
    case 4:
      return popHostContainer(), null;
    case 10:
      return popProvider(workInProgress2.type), null;
    case 22:
    case 23:
      return popSuspenseHandler(workInProgress2), popHiddenContext(), null !== current && pop(resumedCache), current = workInProgress2.flags, current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
    case 24:
      return popProvider(CacheContext), null;
    case 25:
      return null;
    default:
      return null;
  }
}
function unwindInterruptedWork(current, interruptedWork) {
  popTreeContext(interruptedWork);
  switch (interruptedWork.tag) {
    case 3:
      popProvider(CacheContext);
      popHostContainer();
      break;
    case 26:
    case 27:
    case 5:
      popHostContext(interruptedWork);
      break;
    case 4:
      popHostContainer();
      break;
    case 31:
      null !== interruptedWork.memoizedState && popSuspenseHandler(interruptedWork);
      break;
    case 13:
      popSuspenseHandler(interruptedWork);
      break;
    case 19:
      pop(suspenseStackCursor);
      break;
    case 10:
      popProvider(interruptedWork.type);
      break;
    case 22:
    case 23:
      popSuspenseHandler(interruptedWork);
      popHiddenContext();
      null !== current && pop(resumedCache);
      break;
    case 24:
      popProvider(CacheContext);
  }
}
function commitHookEffectListMount(flags, finishedWork) {
  try {
    var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
    if (null !== lastEffect) {
      var firstEffect = lastEffect.next;
      updateQueue = firstEffect;
      do {
        if ((updateQueue.tag & flags) === flags) {
          lastEffect = void 0;
          var create = updateQueue.create, inst = updateQueue.inst;
          lastEffect = create();
          inst.destroy = lastEffect;
        }
        updateQueue = updateQueue.next;
      } while (updateQueue !== firstEffect);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor$jscomp$0) {
  try {
    var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
    if (null !== lastEffect) {
      var firstEffect = lastEffect.next;
      updateQueue = firstEffect;
      do {
        if ((updateQueue.tag & flags) === flags) {
          var inst = updateQueue.inst, destroy = inst.destroy;
          if (void 0 !== destroy) {
            inst.destroy = void 0;
            lastEffect = finishedWork;
            var nearestMountedAncestor = nearestMountedAncestor$jscomp$0, destroy_ = destroy;
            try {
              destroy_();
            } catch (error) {
              captureCommitPhaseError(
                lastEffect,
                nearestMountedAncestor,
                error
              );
            }
          }
        }
        updateQueue = updateQueue.next;
      } while (updateQueue !== firstEffect);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitClassCallbacks(finishedWork) {
  var updateQueue = finishedWork.updateQueue;
  if (null !== updateQueue) {
    var instance = finishedWork.stateNode;
    try {
      commitCallbacks(updateQueue, instance);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
  }
}
function safelyCallComponentWillUnmount(current, nearestMountedAncestor, instance) {
  instance.props = resolveClassComponentProps(
    current.type,
    current.memoizedProps
  );
  instance.state = current.memoizedState;
  try {
    instance.componentWillUnmount();
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
function safelyAttachRef(current, nearestMountedAncestor) {
  try {
    var ref2 = current.ref;
    if (null !== ref2) {
      switch (current.tag) {
        case 26:
        case 27:
        case 5:
          var instanceToUse = current.stateNode;
          break;
        case 30:
          instanceToUse = current.stateNode;
          break;
        default:
          instanceToUse = current.stateNode;
      }
      "function" === typeof ref2 ? current.refCleanup = ref2(instanceToUse) : ref2.current = instanceToUse;
    }
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
function safelyDetachRef(current, nearestMountedAncestor) {
  var ref2 = current.ref, refCleanup = current.refCleanup;
  if (null !== ref2)
    if ("function" === typeof refCleanup)
      try {
        refCleanup();
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      } finally {
        current.refCleanup = null, current = current.alternate, null != current && (current.refCleanup = null);
      }
    else if ("function" === typeof ref2)
      try {
        ref2(null);
      } catch (error$140) {
        captureCommitPhaseError(current, nearestMountedAncestor, error$140);
      }
    else ref2.current = null;
}
function commitHostMount(finishedWork) {
  var type = finishedWork.type, props = finishedWork.memoizedProps, instance = finishedWork.stateNode;
  try {
    a: switch (type) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        props.autoFocus && instance.focus();
        break a;
      case "img":
        props.src ? instance.src = props.src : props.srcSet && (instance.srcset = props.srcSet);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitHostUpdate(finishedWork, newProps, oldProps) {
  try {
    var domElement = finishedWork.stateNode;
    updateProperties(domElement, finishedWork.type, oldProps, newProps);
    domElement[internalPropsKey] = newProps;
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function isHostParent(fiber) {
  return 5 === fiber.tag || 3 === fiber.tag || 26 === fiber.tag || 27 === fiber.tag && isSingletonScope(fiber.type) || 4 === fiber.tag;
}
function getHostSibling(fiber) {
  a: for (; ; ) {
    for (; null === fiber.sibling; ) {
      if (null === fiber.return || isHostParent(fiber.return)) return null;
      fiber = fiber.return;
    }
    fiber.sibling.return = fiber.return;
    for (fiber = fiber.sibling; 5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag; ) {
      if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
      if (fiber.flags & 2) continue a;
      if (null === fiber.child || 4 === fiber.tag) continue a;
      else fiber.child.return = fiber, fiber = fiber.child;
    }
    if (!(fiber.flags & 2)) return fiber.stateNode;
  }
}
function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
  var tag = node.tag;
  if (5 === tag || 6 === tag)
    node = node.stateNode, before ? (9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent).insertBefore(node, before) : (before = 9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent, before.appendChild(node), parent = parent._reactRootContainer, null !== parent && void 0 !== parent || null !== before.onclick || (before.onclick = noop$1));
  else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode, before = null), node = node.child, null !== node))
    for (insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling; null !== node; )
      insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling;
}
function insertOrAppendPlacementNode(node, before, parent) {
  var tag = node.tag;
  if (5 === tag || 6 === tag)
    node = node.stateNode, before ? parent.insertBefore(node, before) : parent.appendChild(node);
  else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode), node = node.child, null !== node))
    for (insertOrAppendPlacementNode(node, before, parent), node = node.sibling; null !== node; )
      insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
}
function commitHostSingletonAcquisition(finishedWork) {
  var singleton = finishedWork.stateNode, props = finishedWork.memoizedProps;
  try {
    for (var type = finishedWork.type, attributes = singleton.attributes; attributes.length; )
      singleton.removeAttributeNode(attributes[0]);
    setInitialProperties(singleton, type, props);
    singleton[internalInstanceKey] = finishedWork;
    singleton[internalPropsKey] = props;
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
var offscreenSubtreeIsHidden = false, offscreenSubtreeWasHidden = false, needsFormReset = false, PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set, nextEffect = null;
function commitBeforeMutationEffects(root2, firstChild) {
  root2 = root2.containerInfo;
  eventsEnabled = _enabled$1;
  root2 = getActiveElementDeep(root2);
  if (hasSelectionCapabilities(root2)) {
    if ("selectionStart" in root2)
      var JSCompiler_temp = {
        start: root2.selectionStart,
        end: root2.selectionEnd
      };
    else
      a: {
        JSCompiler_temp = (JSCompiler_temp = root2.ownerDocument) && JSCompiler_temp.defaultView || window;
        var selection = JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
        if (selection && 0 !== selection.rangeCount) {
          JSCompiler_temp = selection.anchorNode;
          var anchorOffset = selection.anchorOffset, focusNode = selection.focusNode;
          selection = selection.focusOffset;
          try {
            JSCompiler_temp.nodeType, focusNode.nodeType;
          } catch (e$20) {
            JSCompiler_temp = null;
            break a;
          }
          var length = 0, start = -1, end = -1, indexWithinAnchor = 0, indexWithinFocus = 0, node = root2, parentNode = null;
          b: for (; ; ) {
            for (var next; ; ) {
              node !== JSCompiler_temp || 0 !== anchorOffset && 3 !== node.nodeType || (start = length + anchorOffset);
              node !== focusNode || 0 !== selection && 3 !== node.nodeType || (end = length + selection);
              3 === node.nodeType && (length += node.nodeValue.length);
              if (null === (next = node.firstChild)) break;
              parentNode = node;
              node = next;
            }
            for (; ; ) {
              if (node === root2) break b;
              parentNode === JSCompiler_temp && ++indexWithinAnchor === anchorOffset && (start = length);
              parentNode === focusNode && ++indexWithinFocus === selection && (end = length);
              if (null !== (next = node.nextSibling)) break;
              node = parentNode;
              parentNode = node.parentNode;
            }
            node = next;
          }
          JSCompiler_temp = -1 === start || -1 === end ? null : { start, end };
        } else JSCompiler_temp = null;
      }
    JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
  } else JSCompiler_temp = null;
  selectionInformation = { focusedElem: root2, selectionRange: JSCompiler_temp };
  _enabled$1 = false;
  for (nextEffect = firstChild; null !== nextEffect; )
    if (firstChild = nextEffect, root2 = firstChild.child, 0 !== (firstChild.subtreeFlags & 1028) && null !== root2)
      root2.return = firstChild, nextEffect = root2;
    else
      for (; null !== nextEffect; ) {
        firstChild = nextEffect;
        focusNode = firstChild.alternate;
        root2 = firstChild.flags;
        switch (firstChild.tag) {
          case 0:
            if (0 !== (root2 & 4) && (root2 = firstChild.updateQueue, root2 = null !== root2 ? root2.events : null, null !== root2))
              for (JSCompiler_temp = 0; JSCompiler_temp < root2.length; JSCompiler_temp++)
                anchorOffset = root2[JSCompiler_temp], anchorOffset.ref.impl = anchorOffset.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (0 !== (root2 & 1024) && null !== focusNode) {
              root2 = void 0;
              JSCompiler_temp = firstChild;
              anchorOffset = focusNode.memoizedProps;
              focusNode = focusNode.memoizedState;
              selection = JSCompiler_temp.stateNode;
              try {
                var resolvedPrevProps = resolveClassComponentProps(
                  JSCompiler_temp.type,
                  anchorOffset
                );
                root2 = selection.getSnapshotBeforeUpdate(
                  resolvedPrevProps,
                  focusNode
                );
                selection.__reactInternalSnapshotBeforeUpdate = root2;
              } catch (error) {
                captureCommitPhaseError(
                  JSCompiler_temp,
                  JSCompiler_temp.return,
                  error
                );
              }
            }
            break;
          case 3:
            if (0 !== (root2 & 1024)) {
              if (root2 = firstChild.stateNode.containerInfo, JSCompiler_temp = root2.nodeType, 9 === JSCompiler_temp)
                clearContainerSparingly(root2);
              else if (1 === JSCompiler_temp)
                switch (root2.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    clearContainerSparingly(root2);
                    break;
                  default:
                    root2.textContent = "";
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (0 !== (root2 & 1024)) throw Error(formatProdErrorMessage(163));
        }
        root2 = firstChild.sibling;
        if (null !== root2) {
          root2.return = firstChild.return;
          nextEffect = root2;
          break;
        }
        nextEffect = firstChild.return;
      }
}
function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
  var flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitHookEffectListMount(5, finishedWork);
      break;
    case 1:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      if (flags & 4)
        if (finishedRoot = finishedWork.stateNode, null === current)
          try {
            finishedRoot.componentDidMount();
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
        else {
          var prevProps = resolveClassComponentProps(
            finishedWork.type,
            current.memoizedProps
          );
          current = current.memoizedState;
          try {
            finishedRoot.componentDidUpdate(
              prevProps,
              current,
              finishedRoot.__reactInternalSnapshotBeforeUpdate
            );
          } catch (error$139) {
            captureCommitPhaseError(
              finishedWork,
              finishedWork.return,
              error$139
            );
          }
        }
      flags & 64 && commitClassCallbacks(finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 3:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      if (flags & 64 && (finishedRoot = finishedWork.updateQueue, null !== finishedRoot)) {
        current = null;
        if (null !== finishedWork.child)
          switch (finishedWork.child.tag) {
            case 27:
            case 5:
              current = finishedWork.child.stateNode;
              break;
            case 1:
              current = finishedWork.child.stateNode;
          }
        try {
          commitCallbacks(finishedRoot, current);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      break;
    case 27:
      null === current && flags & 4 && commitHostSingletonAcquisition(finishedWork);
    case 26:
    case 5:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      null === current && flags & 4 && commitHostMount(finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 12:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      break;
    case 31:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
      break;
    case 13:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
      flags & 64 && (finishedRoot = finishedWork.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot && (finishedWork = retryDehydratedSuspenseBoundary.bind(
        null,
        finishedWork
      ), registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
      break;
    case 22:
      flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
      if (!flags) {
        current = null !== current && null !== current.memoizedState || offscreenSubtreeWasHidden;
        prevProps = offscreenSubtreeIsHidden;
        var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
        offscreenSubtreeIsHidden = flags;
        (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden ? recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          0 !== (finishedWork.subtreeFlags & 8772)
        ) : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
        offscreenSubtreeIsHidden = prevProps;
        offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
      }
      break;
    case 30:
      break;
    default:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
  }
}
function detachFiberAfterEffects(fiber) {
  var alternate = fiber.alternate;
  null !== alternate && (fiber.alternate = null, detachFiberAfterEffects(alternate));
  fiber.child = null;
  fiber.deletions = null;
  fiber.sibling = null;
  5 === fiber.tag && (alternate = fiber.stateNode, null !== alternate && detachDeletedInstance(alternate));
  fiber.stateNode = null;
  fiber.return = null;
  fiber.dependencies = null;
  fiber.memoizedProps = null;
  fiber.memoizedState = null;
  fiber.pendingProps = null;
  fiber.stateNode = null;
  fiber.updateQueue = null;
}
var hostParent = null, hostParentIsContainer = false;
function recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, parent) {
  for (parent = parent.child; null !== parent; )
    commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent), parent = parent.sibling;
}
function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
  if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
    try {
      injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
    } catch (err) {
    }
  switch (deletedFiber.tag) {
    case 26:
      offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      deletedFiber.memoizedState ? deletedFiber.memoizedState.count-- : deletedFiber.stateNode && (deletedFiber = deletedFiber.stateNode, deletedFiber.parentNode.removeChild(deletedFiber));
      break;
    case 27:
      offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
      var prevHostParent = hostParent, prevHostParentIsContainer = hostParentIsContainer;
      isSingletonScope(deletedFiber.type) && (hostParent = deletedFiber.stateNode, hostParentIsContainer = false);
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      releaseSingletonInstance(deletedFiber.stateNode);
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      break;
    case 5:
      offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
    case 6:
      prevHostParent = hostParent;
      prevHostParentIsContainer = hostParentIsContainer;
      hostParent = null;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      if (null !== hostParent)
        if (hostParentIsContainer)
          try {
            (9 === hostParent.nodeType ? hostParent.body : "HTML" === hostParent.nodeName ? hostParent.ownerDocument.body : hostParent).removeChild(deletedFiber.stateNode);
          } catch (error) {
            captureCommitPhaseError(
              deletedFiber,
              nearestMountedAncestor,
              error
            );
          }
        else
          try {
            hostParent.removeChild(deletedFiber.stateNode);
          } catch (error) {
            captureCommitPhaseError(
              deletedFiber,
              nearestMountedAncestor,
              error
            );
          }
      break;
    case 18:
      null !== hostParent && (hostParentIsContainer ? (finishedRoot = hostParent, clearHydrationBoundary(
        9 === finishedRoot.nodeType ? finishedRoot.body : "HTML" === finishedRoot.nodeName ? finishedRoot.ownerDocument.body : finishedRoot,
        deletedFiber.stateNode
      ), retryIfBlockedOn(finishedRoot)) : clearHydrationBoundary(hostParent, deletedFiber.stateNode));
      break;
    case 4:
      prevHostParent = hostParent;
      prevHostParentIsContainer = hostParentIsContainer;
      hostParent = deletedFiber.stateNode.containerInfo;
      hostParentIsContainer = true;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
      offscreenSubtreeWasHidden || commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 1:
      offscreenSubtreeWasHidden || (safelyDetachRef(deletedFiber, nearestMountedAncestor), prevHostParent = deletedFiber.stateNode, "function" === typeof prevHostParent.componentWillUnmount && safelyCallComponentWillUnmount(
        deletedFiber,
        nearestMountedAncestor,
        prevHostParent
      ));
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 21:
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 22:
      offscreenSubtreeWasHidden = (prevHostParent = offscreenSubtreeWasHidden) || null !== deletedFiber.memoizedState;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      offscreenSubtreeWasHidden = prevHostParent;
      break;
    default:
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
  }
}
function commitActivityHydrationCallbacks(finishedRoot, finishedWork) {
  if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot))) {
    finishedRoot = finishedRoot.dehydrated;
    try {
      retryIfBlockedOn(finishedRoot);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
  }
}
function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
  if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot))))
    try {
      retryIfBlockedOn(finishedRoot);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
}
function getRetryCache(finishedWork) {
  switch (finishedWork.tag) {
    case 31:
    case 13:
    case 19:
      var retryCache = finishedWork.stateNode;
      null === retryCache && (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
      return retryCache;
    case 22:
      return finishedWork = finishedWork.stateNode, retryCache = finishedWork._retryCache, null === retryCache && (retryCache = finishedWork._retryCache = new PossiblyWeakSet()), retryCache;
    default:
      throw Error(formatProdErrorMessage(435, finishedWork.tag));
  }
}
function attachSuspenseRetryListeners(finishedWork, wakeables) {
  var retryCache = getRetryCache(finishedWork);
  wakeables.forEach(function(wakeable) {
    if (!retryCache.has(wakeable)) {
      retryCache.add(wakeable);
      var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
      wakeable.then(retry, retry);
    }
  });
}
function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
  var deletions = parentFiber.deletions;
  if (null !== deletions)
    for (var i = 0; i < deletions.length; i++) {
      var childToDelete = deletions[i], root2 = root$jscomp$0, returnFiber = parentFiber, parent = returnFiber;
      a: for (; null !== parent; ) {
        switch (parent.tag) {
          case 27:
            if (isSingletonScope(parent.type)) {
              hostParent = parent.stateNode;
              hostParentIsContainer = false;
              break a;
            }
            break;
          case 5:
            hostParent = parent.stateNode;
            hostParentIsContainer = false;
            break a;
          case 3:
          case 4:
            hostParent = parent.stateNode.containerInfo;
            hostParentIsContainer = true;
            break a;
        }
        parent = parent.return;
      }
      if (null === hostParent) throw Error(formatProdErrorMessage(160));
      commitDeletionEffectsOnFiber(root2, returnFiber, childToDelete);
      hostParent = null;
      hostParentIsContainer = false;
      root2 = childToDelete.alternate;
      null !== root2 && (root2.return = null);
      childToDelete.return = null;
    }
  if (parentFiber.subtreeFlags & 13886)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitMutationEffectsOnFiber(parentFiber, root$jscomp$0), parentFiber = parentFiber.sibling;
}
var currentHoistableRoot = null;
function commitMutationEffectsOnFiber(finishedWork, root2) {
  var current = finishedWork.alternate, flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      recursivelyTraverseMutationEffects(root2, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 4 && (commitHookEffectListUnmount(3, finishedWork, finishedWork.return), commitHookEffectListMount(3, finishedWork), commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
      break;
    case 1:
      recursivelyTraverseMutationEffects(root2, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
      flags & 64 && offscreenSubtreeIsHidden && (finishedWork = finishedWork.updateQueue, null !== finishedWork && (flags = finishedWork.callbacks, null !== flags && (current = finishedWork.shared.hiddenCallbacks, finishedWork.shared.hiddenCallbacks = null === current ? flags : current.concat(flags))));
      break;
    case 26:
      var hoistableRoot = currentHoistableRoot;
      recursivelyTraverseMutationEffects(root2, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
      if (flags & 4) {
        var currentResource = null !== current ? current.memoizedState : null;
        flags = finishedWork.memoizedState;
        if (null === current)
          if (null === flags)
            if (null === finishedWork.stateNode) {
              a: {
                flags = finishedWork.type;
                current = finishedWork.memoizedProps;
                hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
                b: switch (flags) {
                  case "title":
                    currentResource = hoistableRoot.getElementsByTagName("title")[0];
                    if (!currentResource || currentResource[internalHoistableMarker] || currentResource[internalInstanceKey] || "http://www.w3.org/2000/svg" === currentResource.namespaceURI || currentResource.hasAttribute("itemprop"))
                      currentResource = hoistableRoot.createElement(flags), hoistableRoot.head.insertBefore(
                        currentResource,
                        hoistableRoot.querySelector("head > title")
                      );
                    setInitialProperties(currentResource, flags, current);
                    currentResource[internalInstanceKey] = finishedWork;
                    markNodeAsHoistable(currentResource);
                    flags = currentResource;
                    break a;
                  case "link":
                    var maybeNodes = getHydratableHoistableCache(
                      "link",
                      "href",
                      hoistableRoot
                    ).get(flags + (current.href || ""));
                    if (maybeNodes) {
                      for (var i = 0; i < maybeNodes.length; i++)
                        if (currentResource = maybeNodes[i], currentResource.getAttribute("href") === (null == current.href || "" === current.href ? null : current.href) && currentResource.getAttribute("rel") === (null == current.rel ? null : current.rel) && currentResource.getAttribute("title") === (null == current.title ? null : current.title) && currentResource.getAttribute("crossorigin") === (null == current.crossOrigin ? null : current.crossOrigin)) {
                          maybeNodes.splice(i, 1);
                          break b;
                        }
                    }
                    currentResource = hoistableRoot.createElement(flags);
                    setInitialProperties(currentResource, flags, current);
                    hoistableRoot.head.appendChild(currentResource);
                    break;
                  case "meta":
                    if (maybeNodes = getHydratableHoistableCache(
                      "meta",
                      "content",
                      hoistableRoot
                    ).get(flags + (current.content || ""))) {
                      for (i = 0; i < maybeNodes.length; i++)
                        if (currentResource = maybeNodes[i], currentResource.getAttribute("content") === (null == current.content ? null : "" + current.content) && currentResource.getAttribute("name") === (null == current.name ? null : current.name) && currentResource.getAttribute("property") === (null == current.property ? null : current.property) && currentResource.getAttribute("http-equiv") === (null == current.httpEquiv ? null : current.httpEquiv) && currentResource.getAttribute("charset") === (null == current.charSet ? null : current.charSet)) {
                          maybeNodes.splice(i, 1);
                          break b;
                        }
                    }
                    currentResource = hoistableRoot.createElement(flags);
                    setInitialProperties(currentResource, flags, current);
                    hoistableRoot.head.appendChild(currentResource);
                    break;
                  default:
                    throw Error(formatProdErrorMessage(468, flags));
                }
                currentResource[internalInstanceKey] = finishedWork;
                markNodeAsHoistable(currentResource);
                flags = currentResource;
              }
              finishedWork.stateNode = flags;
            } else
              mountHoistable(
                hoistableRoot,
                finishedWork.type,
                finishedWork.stateNode
              );
          else
            finishedWork.stateNode = acquireResource(
              hoistableRoot,
              flags,
              finishedWork.memoizedProps
            );
        else
          currentResource !== flags ? (null === currentResource ? null !== current.stateNode && (current = current.stateNode, current.parentNode.removeChild(current)) : currentResource.count--, null === flags ? mountHoistable(
            hoistableRoot,
            finishedWork.type,
            finishedWork.stateNode
          ) : acquireResource(
            hoistableRoot,
            flags,
            finishedWork.memoizedProps
          )) : null === flags && null !== finishedWork.stateNode && commitHostUpdate(
            finishedWork,
            finishedWork.memoizedProps,
            current.memoizedProps
          );
      }
      break;
    case 27:
      recursivelyTraverseMutationEffects(root2, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
      null !== current && flags & 4 && commitHostUpdate(
        finishedWork,
        finishedWork.memoizedProps,
        current.memoizedProps
      );
      break;
    case 5:
      recursivelyTraverseMutationEffects(root2, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
      if (finishedWork.flags & 32) {
        hoistableRoot = finishedWork.stateNode;
        try {
          setTextContent(hoistableRoot, "");
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      flags & 4 && null != finishedWork.stateNode && (hoistableRoot = finishedWork.memoizedProps, commitHostUpdate(
        finishedWork,
        hoistableRoot,
        null !== current ? current.memoizedProps : hoistableRoot
      ));
      flags & 1024 && (needsFormReset = true);
      break;
    case 6:
      recursivelyTraverseMutationEffects(root2, finishedWork);
      commitReconciliationEffects(finishedWork);
      if (flags & 4) {
        if (null === finishedWork.stateNode)
          throw Error(formatProdErrorMessage(162));
        flags = finishedWork.memoizedProps;
        current = finishedWork.stateNode;
        try {
          current.nodeValue = flags;
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      break;
    case 3:
      tagCaches = null;
      hoistableRoot = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(root2.containerInfo);
      recursivelyTraverseMutationEffects(root2, finishedWork);
      currentHoistableRoot = hoistableRoot;
      commitReconciliationEffects(finishedWork);
      if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
        try {
          retryIfBlockedOn(root2.containerInfo);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      needsFormReset && (needsFormReset = false, recursivelyResetForms(finishedWork));
      break;
    case 4:
      flags = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(
        finishedWork.stateNode.containerInfo
      );
      recursivelyTraverseMutationEffects(root2, finishedWork);
      commitReconciliationEffects(finishedWork);
      currentHoistableRoot = flags;
      break;
    case 12:
      recursivelyTraverseMutationEffects(root2, finishedWork);
      commitReconciliationEffects(finishedWork);
      break;
    case 31:
      recursivelyTraverseMutationEffects(root2, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
      break;
    case 13:
      recursivelyTraverseMutationEffects(root2, finishedWork);
      commitReconciliationEffects(finishedWork);
      finishedWork.child.flags & 8192 && null !== finishedWork.memoizedState !== (null !== current && null !== current.memoizedState) && (globalMostRecentFallbackTime = now());
      flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
      break;
    case 22:
      hoistableRoot = null !== finishedWork.memoizedState;
      var wasHidden = null !== current && null !== current.memoizedState, prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden, prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
      recursivelyTraverseMutationEffects(root2, finishedWork);
      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
      commitReconciliationEffects(finishedWork);
      if (flags & 8192)
        a: for (root2 = finishedWork.stateNode, root2._visibility = hoistableRoot ? root2._visibility & -2 : root2._visibility | 1, hoistableRoot && (null === current || wasHidden || offscreenSubtreeIsHidden || offscreenSubtreeWasHidden || recursivelyTraverseDisappearLayoutEffects(finishedWork)), current = null, root2 = finishedWork; ; ) {
          if (5 === root2.tag || 26 === root2.tag) {
            if (null === current) {
              wasHidden = current = root2;
              try {
                if (currentResource = wasHidden.stateNode, hoistableRoot)
                  maybeNodes = currentResource.style, "function" === typeof maybeNodes.setProperty ? maybeNodes.setProperty("display", "none", "important") : maybeNodes.display = "none";
                else {
                  i = wasHidden.stateNode;
                  var styleProp = wasHidden.memoizedProps.style, display = void 0 !== styleProp && null !== styleProp && styleProp.hasOwnProperty("display") ? styleProp.display : null;
                  i.style.display = null == display || "boolean" === typeof display ? "" : ("" + display).trim();
                }
              } catch (error) {
                captureCommitPhaseError(wasHidden, wasHidden.return, error);
              }
            }
          } else if (6 === root2.tag) {
            if (null === current) {
              wasHidden = root2;
              try {
                wasHidden.stateNode.nodeValue = hoistableRoot ? "" : wasHidden.memoizedProps;
              } catch (error) {
                captureCommitPhaseError(wasHidden, wasHidden.return, error);
              }
            }
          } else if (18 === root2.tag) {
            if (null === current) {
              wasHidden = root2;
              try {
                var instance = wasHidden.stateNode;
                hoistableRoot ? hideOrUnhideDehydratedBoundary(instance, true) : hideOrUnhideDehydratedBoundary(wasHidden.stateNode, false);
              } catch (error) {
                captureCommitPhaseError(wasHidden, wasHidden.return, error);
              }
            }
          } else if ((22 !== root2.tag && 23 !== root2.tag || null === root2.memoizedState || root2 === finishedWork) && null !== root2.child) {
            root2.child.return = root2;
            root2 = root2.child;
            continue;
          }
          if (root2 === finishedWork) break a;
          for (; null === root2.sibling; ) {
            if (null === root2.return || root2.return === finishedWork) break a;
            current === root2 && (current = null);
            root2 = root2.return;
          }
          current === root2 && (current = null);
          root2.sibling.return = root2.return;
          root2 = root2.sibling;
        }
      flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (current = flags.retryQueue, null !== current && (flags.retryQueue = null, attachSuspenseRetryListeners(finishedWork, current))));
      break;
    case 19:
      recursivelyTraverseMutationEffects(root2, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
      break;
    case 30:
      break;
    case 21:
      break;
    default:
      recursivelyTraverseMutationEffects(root2, finishedWork), commitReconciliationEffects(finishedWork);
  }
}
function commitReconciliationEffects(finishedWork) {
  var flags = finishedWork.flags;
  if (flags & 2) {
    try {
      for (var hostParentFiber, parentFiber = finishedWork.return; null !== parentFiber; ) {
        if (isHostParent(parentFiber)) {
          hostParentFiber = parentFiber;
          break;
        }
        parentFiber = parentFiber.return;
      }
      if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
      switch (hostParentFiber.tag) {
        case 27:
          var parent = hostParentFiber.stateNode, before = getHostSibling(finishedWork);
          insertOrAppendPlacementNode(finishedWork, before, parent);
          break;
        case 5:
          var parent$141 = hostParentFiber.stateNode;
          hostParentFiber.flags & 32 && (setTextContent(parent$141, ""), hostParentFiber.flags &= -33);
          var before$142 = getHostSibling(finishedWork);
          insertOrAppendPlacementNode(finishedWork, before$142, parent$141);
          break;
        case 3:
        case 4:
          var parent$143 = hostParentFiber.stateNode.containerInfo, before$144 = getHostSibling(finishedWork);
          insertOrAppendPlacementNodeIntoContainer(
            finishedWork,
            before$144,
            parent$143
          );
          break;
        default:
          throw Error(formatProdErrorMessage(161));
      }
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
    finishedWork.flags &= -3;
  }
  flags & 4096 && (finishedWork.flags &= -4097);
}
function recursivelyResetForms(parentFiber) {
  if (parentFiber.subtreeFlags & 1024)
    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
      var fiber = parentFiber;
      recursivelyResetForms(fiber);
      5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
      parentFiber = parentFiber.sibling;
    }
}
function recursivelyTraverseLayoutEffects(root2, parentFiber) {
  if (parentFiber.subtreeFlags & 8772)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitLayoutEffectOnFiber(root2, parentFiber.alternate, parentFiber), parentFiber = parentFiber.sibling;
}
function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedWork = parentFiber;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 1:
        safelyDetachRef(finishedWork, finishedWork.return);
        var instance = finishedWork.stateNode;
        "function" === typeof instance.componentWillUnmount && safelyCallComponentWillUnmount(
          finishedWork,
          finishedWork.return,
          instance
        );
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 27:
        releaseSingletonInstance(finishedWork.stateNode);
      case 26:
      case 5:
        safelyDetachRef(finishedWork, finishedWork.return);
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 22:
        null === finishedWork.memoizedState && recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 30:
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      default:
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
    }
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseReappearLayoutEffects(finishedRoot$jscomp$0, parentFiber, includeWorkInProgressEffects) {
  includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var current = parentFiber.alternate, finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 15:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        commitHookEffectListMount(4, finishedWork);
        break;
      case 1:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        current = finishedWork;
        finishedRoot = current.stateNode;
        if ("function" === typeof finishedRoot.componentDidMount)
          try {
            finishedRoot.componentDidMount();
          } catch (error) {
            captureCommitPhaseError(current, current.return, error);
          }
        current = finishedWork;
        finishedRoot = current.updateQueue;
        if (null !== finishedRoot) {
          var instance = current.stateNode;
          try {
            var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
            if (null !== hiddenCallbacks)
              for (finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0; finishedRoot < hiddenCallbacks.length; finishedRoot++)
                callCallback(hiddenCallbacks[finishedRoot], instance);
          } catch (error) {
            captureCommitPhaseError(current, current.return, error);
          }
        }
        includeWorkInProgressEffects && flags & 64 && commitClassCallbacks(finishedWork);
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 27:
        commitHostSingletonAcquisition(finishedWork);
      case 26:
      case 5:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects && null === current && flags & 4 && commitHostMount(finishedWork);
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 12:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        break;
      case 31:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects && flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
        break;
      case 13:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects && flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
        break;
      case 22:
        null === finishedWork.memoizedState && recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 30:
        break;
      default:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
    }
    parentFiber = parentFiber.sibling;
  }
}
function commitOffscreenPassiveMountEffects(current, finishedWork) {
  var previousCache = null;
  null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (previousCache = current.memoizedState.cachePool.pool);
  current = null;
  null !== finishedWork.memoizedState && null !== finishedWork.memoizedState.cachePool && (current = finishedWork.memoizedState.cachePool.pool);
  current !== previousCache && (null != current && current.refCount++, null != previousCache && releaseCache(previousCache));
}
function commitCachePassiveMountEffect(current, finishedWork) {
  current = null;
  null !== finishedWork.alternate && (current = finishedWork.alternate.memoizedState.cache);
  finishedWork = finishedWork.memoizedState.cache;
  finishedWork !== current && (finishedWork.refCount++, null != current && releaseCache(current));
}
function recursivelyTraversePassiveMountEffects(root2, parentFiber, committedLanes, committedTransitions) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveMountOnFiber(
        root2,
        parentFiber,
        committedLanes,
        committedTransitions
      ), parentFiber = parentFiber.sibling;
}
function commitPassiveMountOnFiber(finishedRoot, finishedWork, committedLanes, committedTransitions) {
  var flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 && commitHookEffectListMount(9, finishedWork);
      break;
    case 1:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      break;
    case 3:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 && (finishedRoot = null, null !== finishedWork.alternate && (finishedRoot = finishedWork.alternate.memoizedState.cache), finishedWork = finishedWork.memoizedState.cache, finishedWork !== finishedRoot && (finishedWork.refCount++, null != finishedRoot && releaseCache(finishedRoot)));
      break;
    case 12:
      if (flags & 2048) {
        recursivelyTraversePassiveMountEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions
        );
        finishedRoot = finishedWork.stateNode;
        try {
          var _finishedWork$memoize2 = finishedWork.memoizedProps, id = _finishedWork$memoize2.id, onPostCommit = _finishedWork$memoize2.onPostCommit;
          "function" === typeof onPostCommit && onPostCommit(
            id,
            null === finishedWork.alternate ? "mount" : "update",
            finishedRoot.passiveEffectDuration,
            -0
          );
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      } else
        recursivelyTraversePassiveMountEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions
        );
      break;
    case 31:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      break;
    case 13:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      break;
    case 23:
      break;
    case 22:
      _finishedWork$memoize2 = finishedWork.stateNode;
      id = finishedWork.alternate;
      null !== finishedWork.memoizedState ? _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      ) : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork) : _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      ) : (_finishedWork$memoize2._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions,
        0 !== (finishedWork.subtreeFlags & 10256) || false
      ));
      flags & 2048 && commitOffscreenPassiveMountEffects(id, finishedWork);
      break;
    case 24:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
      break;
    default:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
  }
}
function recursivelyTraverseReconnectPassiveEffects(finishedRoot$jscomp$0, parentFiber, committedLanes$jscomp$0, committedTransitions$jscomp$0, includeWorkInProgressEffects) {
  includeWorkInProgressEffects = includeWorkInProgressEffects && (0 !== (parentFiber.subtreeFlags & 10256) || false);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, committedLanes = committedLanes$jscomp$0, committedTransitions = committedTransitions$jscomp$0, flags = finishedWork.flags;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 15:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        commitHookEffectListMount(8, finishedWork);
        break;
      case 23:
        break;
      case 22:
        var instance = finishedWork.stateNode;
        null !== finishedWork.memoizedState ? instance._visibility & 2 ? recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        ) : recursivelyTraverseAtomicPassiveEffects(
          finishedRoot,
          finishedWork
        ) : (instance._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        ));
        includeWorkInProgressEffects && flags & 2048 && commitOffscreenPassiveMountEffects(
          finishedWork.alternate,
          finishedWork
        );
        break;
      case 24:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects && flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
        break;
      default:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
    }
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseAtomicPassiveEffects(finishedRoot$jscomp$0, parentFiber) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
      var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 22:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          flags & 2048 && commitOffscreenPassiveMountEffects(
            finishedWork.alternate,
            finishedWork
          );
          break;
        case 24:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
          break;
        default:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
      }
      parentFiber = parentFiber.sibling;
    }
}
var suspenseyCommitFlag = 8192;
function recursivelyAccumulateSuspenseyCommit(parentFiber, committedLanes, suspendedState) {
  if (parentFiber.subtreeFlags & suspenseyCommitFlag)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      accumulateSuspenseyCommitOnFiber(
        parentFiber,
        committedLanes,
        suspendedState
      ), parentFiber = parentFiber.sibling;
}
function accumulateSuspenseyCommitOnFiber(fiber, committedLanes, suspendedState) {
  switch (fiber.tag) {
    case 26:
      recursivelyAccumulateSuspenseyCommit(
        fiber,
        committedLanes,
        suspendedState
      );
      fiber.flags & suspenseyCommitFlag && null !== fiber.memoizedState && suspendResource(
        suspendedState,
        currentHoistableRoot,
        fiber.memoizedState,
        fiber.memoizedProps
      );
      break;
    case 5:
      recursivelyAccumulateSuspenseyCommit(
        fiber,
        committedLanes,
        suspendedState
      );
      break;
    case 3:
    case 4:
      var previousHoistableRoot = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
      recursivelyAccumulateSuspenseyCommit(
        fiber,
        committedLanes,
        suspendedState
      );
      currentHoistableRoot = previousHoistableRoot;
      break;
    case 22:
      null === fiber.memoizedState && (previousHoistableRoot = fiber.alternate, null !== previousHoistableRoot && null !== previousHoistableRoot.memoizedState ? (previousHoistableRoot = suspenseyCommitFlag, suspenseyCommitFlag = 16777216, recursivelyAccumulateSuspenseyCommit(
        fiber,
        committedLanes,
        suspendedState
      ), suspenseyCommitFlag = previousHoistableRoot) : recursivelyAccumulateSuspenseyCommit(
        fiber,
        committedLanes,
        suspendedState
      ));
      break;
    default:
      recursivelyAccumulateSuspenseyCommit(
        fiber,
        committedLanes,
        suspendedState
      );
  }
}
function detachAlternateSiblings(parentFiber) {
  var previousFiber = parentFiber.alternate;
  if (null !== previousFiber && (parentFiber = previousFiber.child, null !== parentFiber)) {
    previousFiber.child = null;
    do
      previousFiber = parentFiber.sibling, parentFiber.sibling = null, parentFiber = previousFiber;
    while (null !== parentFiber);
  }
}
function recursivelyTraversePassiveUnmountEffects(parentFiber) {
  var deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
      }
    detachAlternateSiblings(parentFiber);
  }
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveUnmountOnFiber(parentFiber), parentFiber = parentFiber.sibling;
}
function commitPassiveUnmountOnFiber(finishedWork) {
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      finishedWork.flags & 2048 && commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
      break;
    case 3:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    case 12:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    case 22:
      var instance = finishedWork.stateNode;
      null !== finishedWork.memoizedState && instance._visibility & 2 && (null === finishedWork.return || 13 !== finishedWork.return.tag) ? (instance._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(finishedWork)) : recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    default:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
  }
}
function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
  var deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
      }
    detachAlternateSiblings(parentFiber);
  }
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    deletions = parentFiber;
    switch (deletions.tag) {
      case 0:
      case 11:
      case 15:
        commitHookEffectListUnmount(8, deletions, deletions.return);
        recursivelyTraverseDisconnectPassiveEffects(deletions);
        break;
      case 22:
        i = deletions.stateNode;
        i._visibility & 2 && (i._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(deletions));
        break;
      default:
        recursivelyTraverseDisconnectPassiveEffects(deletions);
    }
    parentFiber = parentFiber.sibling;
  }
}
function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
  for (; null !== nextEffect; ) {
    var fiber = nextEffect;
    switch (fiber.tag) {
      case 0:
      case 11:
      case 15:
        commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
        break;
      case 23:
      case 22:
        if (null !== fiber.memoizedState && null !== fiber.memoizedState.cachePool) {
          var cache = fiber.memoizedState.cachePool.pool;
          null != cache && cache.refCount++;
        }
        break;
      case 24:
        releaseCache(fiber.memoizedState.cache);
    }
    cache = fiber.child;
    if (null !== cache) cache.return = fiber, nextEffect = cache;
    else
      a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
        cache = nextEffect;
        var sibling = cache.sibling, returnFiber = cache.return;
        detachFiberAfterEffects(cache);
        if (cache === fiber) {
          nextEffect = null;
          break a;
        }
        if (null !== sibling) {
          sibling.return = returnFiber;
          nextEffect = sibling;
          break a;
        }
        nextEffect = returnFiber;
      }
  }
}
var DefaultAsyncDispatcher = {
  getCacheForType: function(resourceType) {
    var cache = readContext(CacheContext), cacheForType = cache.data.get(resourceType);
    void 0 === cacheForType && (cacheForType = resourceType(), cache.data.set(resourceType, cacheForType));
    return cacheForType;
  },
  cacheSignal: function() {
    return readContext(CacheContext).controller.signal;
  }
}, PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map, executionContext = 0, workInProgressRoot = null, workInProgress = null, workInProgressRootRenderLanes = 0, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, workInProgressRootDidSkipSuspendedSiblings = false, workInProgressRootIsPrerendering = false, workInProgressRootDidAttachPingListener = false, entangledRenderLanes = 0, workInProgressRootExitStatus = 0, workInProgressRootSkippedLanes = 0, workInProgressRootInterleavedUpdatedLanes = 0, workInProgressRootPingedLanes = 0, workInProgressDeferredLane = 0, workInProgressSuspendedRetryLanes = 0, workInProgressRootConcurrentErrors = null, workInProgressRootRecoverableErrors = null, workInProgressRootDidIncludeRecursiveRenderUpdate = false, globalMostRecentFallbackTime = 0, globalMostRecentTransitionTime = 0, workInProgressRootRenderTargetTime = Infinity, workInProgressTransitions = null, legacyErrorBoundariesThatAlreadyFailed = null, pendingEffectsStatus = 0, pendingEffectsRoot = null, pendingFinishedWork = null, pendingEffectsLanes = 0, pendingEffectsRemainingLanes = 0, pendingPassiveTransitions = null, pendingRecoverableErrors = null, nestedUpdateCount = 0, rootWithNestedUpdates = null;
function requestUpdateLane() {
  return 0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes ? workInProgressRootRenderLanes & -workInProgressRootRenderLanes : null !== ReactSharedInternals.T ? requestTransitionLane() : resolveUpdatePriority();
}
function requestDeferredLane() {
  if (0 === workInProgressDeferredLane)
    if (0 === (workInProgressRootRenderLanes & 536870912) || isHydrating) {
      var lane = nextTransitionDeferredLane;
      nextTransitionDeferredLane <<= 1;
      0 === (nextTransitionDeferredLane & 3932160) && (nextTransitionDeferredLane = 262144);
      workInProgressDeferredLane = lane;
    } else workInProgressDeferredLane = 536870912;
  lane = suspenseHandlerStackCursor.current;
  null !== lane && (lane.flags |= 32);
  return workInProgressDeferredLane;
}
function scheduleUpdateOnFiber(root2, fiber, lane) {
  if (root2 === workInProgressRoot && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root2.cancelPendingCommit)
    prepareFreshStack(root2, 0), markRootSuspended(
      root2,
      workInProgressRootRenderLanes,
      workInProgressDeferredLane,
      false
    );
  markRootUpdated$1(root2, lane);
  if (0 === (executionContext & 2) || root2 !== workInProgressRoot)
    root2 === workInProgressRoot && (0 === (executionContext & 2) && (workInProgressRootInterleavedUpdatedLanes |= lane), 4 === workInProgressRootExitStatus && markRootSuspended(
      root2,
      workInProgressRootRenderLanes,
      workInProgressDeferredLane,
      false
    )), ensureRootIsScheduled(root2);
}
function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
  var shouldTimeSlice = !forceSync && 0 === (lanes & 127) && 0 === (lanes & root$jscomp$0.expiredLanes) || checkIfRootIsPrerendering(root$jscomp$0, lanes), exitStatus = shouldTimeSlice ? renderRootConcurrent(root$jscomp$0, lanes) : renderRootSync(root$jscomp$0, lanes, true), renderWasConcurrent = shouldTimeSlice;
  do {
    if (0 === exitStatus) {
      workInProgressRootIsPrerendering && !shouldTimeSlice && markRootSuspended(root$jscomp$0, lanes, 0, false);
      break;
    } else {
      forceSync = root$jscomp$0.current.alternate;
      if (renderWasConcurrent && !isRenderConsistentWithExternalStores(forceSync)) {
        exitStatus = renderRootSync(root$jscomp$0, lanes, false);
        renderWasConcurrent = false;
        continue;
      }
      if (2 === exitStatus) {
        renderWasConcurrent = lanes;
        if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
          var JSCompiler_inline_result = 0;
        else
          JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913, JSCompiler_inline_result = 0 !== JSCompiler_inline_result ? JSCompiler_inline_result : JSCompiler_inline_result & 536870912 ? 536870912 : 0;
        if (0 !== JSCompiler_inline_result) {
          lanes = JSCompiler_inline_result;
          a: {
            var root2 = root$jscomp$0;
            exitStatus = workInProgressRootConcurrentErrors;
            var wasRootDehydrated = root2.current.memoizedState.isDehydrated;
            wasRootDehydrated && (prepareFreshStack(root2, JSCompiler_inline_result).flags |= 256);
            JSCompiler_inline_result = renderRootSync(
              root2,
              JSCompiler_inline_result,
              false
            );
            if (2 !== JSCompiler_inline_result) {
              if (workInProgressRootDidAttachPingListener && !wasRootDehydrated) {
                root2.errorRecoveryDisabledLanes |= renderWasConcurrent;
                workInProgressRootInterleavedUpdatedLanes |= renderWasConcurrent;
                exitStatus = 4;
                break a;
              }
              renderWasConcurrent = workInProgressRootRecoverableErrors;
              workInProgressRootRecoverableErrors = exitStatus;
              null !== renderWasConcurrent && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = renderWasConcurrent : workInProgressRootRecoverableErrors.push.apply(
                workInProgressRootRecoverableErrors,
                renderWasConcurrent
              ));
            }
            exitStatus = JSCompiler_inline_result;
          }
          renderWasConcurrent = false;
          if (2 !== exitStatus) continue;
        }
      }
      if (1 === exitStatus) {
        prepareFreshStack(root$jscomp$0, 0);
        markRootSuspended(root$jscomp$0, lanes, 0, true);
        break;
      }
      a: {
        shouldTimeSlice = root$jscomp$0;
        renderWasConcurrent = exitStatus;
        switch (renderWasConcurrent) {
          case 0:
          case 1:
            throw Error(formatProdErrorMessage(345));
          case 4:
            if ((lanes & 4194048) !== lanes) break;
          case 6:
            markRootSuspended(
              shouldTimeSlice,
              lanes,
              workInProgressDeferredLane,
              !workInProgressRootDidSkipSuspendedSiblings
            );
            break a;
          case 2:
            workInProgressRootRecoverableErrors = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(formatProdErrorMessage(329));
        }
        if ((lanes & 62914560) === lanes && (exitStatus = globalMostRecentFallbackTime + 300 - now(), 10 < exitStatus)) {
          markRootSuspended(
            shouldTimeSlice,
            lanes,
            workInProgressDeferredLane,
            !workInProgressRootDidSkipSuspendedSiblings
          );
          if (0 !== getNextLanes(shouldTimeSlice, 0, true)) break a;
          pendingEffectsLanes = lanes;
          shouldTimeSlice.timeoutHandle = scheduleTimeout(
            commitRootWhenReady.bind(
              null,
              shouldTimeSlice,
              forceSync,
              workInProgressRootRecoverableErrors,
              workInProgressTransitions,
              workInProgressRootDidIncludeRecursiveRenderUpdate,
              lanes,
              workInProgressDeferredLane,
              workInProgressRootInterleavedUpdatedLanes,
              workInProgressSuspendedRetryLanes,
              workInProgressRootDidSkipSuspendedSiblings,
              renderWasConcurrent,
              "Throttled",
              -0,
              0
            ),
            exitStatus
          );
          break a;
        }
        commitRootWhenReady(
          shouldTimeSlice,
          forceSync,
          workInProgressRootRecoverableErrors,
          workInProgressTransitions,
          workInProgressRootDidIncludeRecursiveRenderUpdate,
          lanes,
          workInProgressDeferredLane,
          workInProgressRootInterleavedUpdatedLanes,
          workInProgressSuspendedRetryLanes,
          workInProgressRootDidSkipSuspendedSiblings,
          renderWasConcurrent,
          null,
          -0,
          0
        );
      }
    }
    break;
  } while (1);
  ensureRootIsScheduled(root$jscomp$0);
}
function commitRootWhenReady(root2, finishedWork, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, lanes, spawnedLane, updatedLanes, suspendedRetryLanes, didSkipSuspendedSiblings, exitStatus, suspendedCommitReason, completedRenderStartTime, completedRenderEndTime) {
  root2.timeoutHandle = -1;
  suspendedCommitReason = finishedWork.subtreeFlags;
  if (suspendedCommitReason & 8192 || 16785408 === (suspendedCommitReason & 16785408)) {
    suspendedCommitReason = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: true,
      waitingForViewTransition: false,
      unsuspend: noop$1
    };
    accumulateSuspenseyCommitOnFiber(
      finishedWork,
      lanes,
      suspendedCommitReason
    );
    var timeoutOffset = (lanes & 62914560) === lanes ? globalMostRecentFallbackTime - now() : (lanes & 4194048) === lanes ? globalMostRecentTransitionTime - now() : 0;
    timeoutOffset = waitForCommitToBeReady(
      suspendedCommitReason,
      timeoutOffset
    );
    if (null !== timeoutOffset) {
      pendingEffectsLanes = lanes;
      root2.cancelPendingCommit = timeoutOffset(
        commitRoot.bind(
          null,
          root2,
          finishedWork,
          lanes,
          recoverableErrors,
          transitions,
          didIncludeRenderPhaseUpdate,
          spawnedLane,
          updatedLanes,
          suspendedRetryLanes,
          exitStatus,
          suspendedCommitReason,
          null,
          completedRenderStartTime,
          completedRenderEndTime
        )
      );
      markRootSuspended(root2, lanes, spawnedLane, !didSkipSuspendedSiblings);
      return;
    }
  }
  commitRoot(
    root2,
    finishedWork,
    lanes,
    recoverableErrors,
    transitions,
    didIncludeRenderPhaseUpdate,
    spawnedLane,
    updatedLanes,
    suspendedRetryLanes
  );
}
function isRenderConsistentWithExternalStores(finishedWork) {
  for (var node = finishedWork; ; ) {
    var tag = node.tag;
    if ((0 === tag || 11 === tag || 15 === tag) && node.flags & 16384 && (tag = node.updateQueue, null !== tag && (tag = tag.stores, null !== tag)))
      for (var i = 0; i < tag.length; i++) {
        var check = tag[i], getSnapshot = check.getSnapshot;
        check = check.value;
        try {
          if (!objectIs(getSnapshot(), check)) return false;
        } catch (error) {
          return false;
        }
      }
    tag = node.child;
    if (node.subtreeFlags & 16384 && null !== tag)
      tag.return = node, node = tag;
    else {
      if (node === finishedWork) break;
      for (; null === node.sibling; ) {
        if (null === node.return || node.return === finishedWork) return true;
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  }
  return true;
}
function markRootSuspended(root2, suspendedLanes, spawnedLane, didAttemptEntireTree) {
  suspendedLanes &= ~workInProgressRootPingedLanes;
  suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
  root2.suspendedLanes |= suspendedLanes;
  root2.pingedLanes &= ~suspendedLanes;
  didAttemptEntireTree && (root2.warmLanes |= suspendedLanes);
  didAttemptEntireTree = root2.expirationTimes;
  for (var lanes = suspendedLanes; 0 < lanes; ) {
    var index$6 = 31 - clz32(lanes), lane = 1 << index$6;
    didAttemptEntireTree[index$6] = -1;
    lanes &= ~lane;
  }
  0 !== spawnedLane && markSpawnedDeferredLane(root2, spawnedLane, suspendedLanes);
}
function flushSyncWork$1() {
  return 0 === (executionContext & 6) ? (flushSyncWorkAcrossRoots_impl(0), false) : true;
}
function resetWorkInProgressStack() {
  if (null !== workInProgress) {
    if (0 === workInProgressSuspendedReason)
      var interruptedWork = workInProgress.return;
    else
      interruptedWork = workInProgress, lastContextDependency = currentlyRenderingFiber$1 = null, resetHooksOnUnwind(interruptedWork), thenableState$1 = null, thenableIndexCounter$1 = 0, interruptedWork = workInProgress;
    for (; null !== interruptedWork; )
      unwindInterruptedWork(interruptedWork.alternate, interruptedWork), interruptedWork = interruptedWork.return;
    workInProgress = null;
  }
}
function prepareFreshStack(root2, lanes) {
  var timeoutHandle = root2.timeoutHandle;
  -1 !== timeoutHandle && (root2.timeoutHandle = -1, cancelTimeout(timeoutHandle));
  timeoutHandle = root2.cancelPendingCommit;
  null !== timeoutHandle && (root2.cancelPendingCommit = null, timeoutHandle());
  pendingEffectsLanes = 0;
  resetWorkInProgressStack();
  workInProgressRoot = root2;
  workInProgress = timeoutHandle = createWorkInProgress(root2.current, null);
  workInProgressRootRenderLanes = lanes;
  workInProgressSuspendedReason = 0;
  workInProgressThrownValue = null;
  workInProgressRootDidSkipSuspendedSiblings = false;
  workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root2, lanes);
  workInProgressRootDidAttachPingListener = false;
  workInProgressSuspendedRetryLanes = workInProgressDeferredLane = workInProgressRootPingedLanes = workInProgressRootInterleavedUpdatedLanes = workInProgressRootSkippedLanes = workInProgressRootExitStatus = 0;
  workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors = null;
  workInProgressRootDidIncludeRecursiveRenderUpdate = false;
  0 !== (lanes & 8) && (lanes |= lanes & 32);
  var allEntangledLanes = root2.entangledLanes;
  if (0 !== allEntangledLanes)
    for (root2 = root2.entanglements, allEntangledLanes &= lanes; 0 < allEntangledLanes; ) {
      var index$4 = 31 - clz32(allEntangledLanes), lane = 1 << index$4;
      lanes |= root2[index$4];
      allEntangledLanes &= ~lane;
    }
  entangledRenderLanes = lanes;
  finishQueueingConcurrentUpdates();
  return timeoutHandle;
}
function handleThrow(root2, thrownValue) {
  currentlyRenderingFiber = null;
  ReactSharedInternals.H = ContextOnlyDispatcher;
  thrownValue === SuspenseException || thrownValue === SuspenseActionException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 3) : thrownValue === SuspenseyCommitException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 4) : workInProgressSuspendedReason = thrownValue === SelectiveHydrationException ? 8 : null !== thrownValue && "object" === typeof thrownValue && "function" === typeof thrownValue.then ? 6 : 1;
  workInProgressThrownValue = thrownValue;
  null === workInProgress && (workInProgressRootExitStatus = 1, logUncaughtError(
    root2,
    createCapturedValueAtFiber(thrownValue, root2.current)
  ));
}
function shouldRemainOnPreviousScreen() {
  var handler = suspenseHandlerStackCursor.current;
  return null === handler ? true : (workInProgressRootRenderLanes & 4194048) === workInProgressRootRenderLanes ? null === shellBoundary ? true : false : (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes || 0 !== (workInProgressRootRenderLanes & 536870912) ? handler === shellBoundary : false;
}
function pushDispatcher() {
  var prevDispatcher = ReactSharedInternals.H;
  ReactSharedInternals.H = ContextOnlyDispatcher;
  return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
}
function pushAsyncDispatcher() {
  var prevAsyncDispatcher = ReactSharedInternals.A;
  ReactSharedInternals.A = DefaultAsyncDispatcher;
  return prevAsyncDispatcher;
}
function renderDidSuspendDelayIfPossible() {
  workInProgressRootExitStatus = 4;
  workInProgressRootDidSkipSuspendedSiblings || (workInProgressRootRenderLanes & 4194048) !== workInProgressRootRenderLanes && null !== suspenseHandlerStackCursor.current || (workInProgressRootIsPrerendering = true);
  0 === (workInProgressRootSkippedLanes & 134217727) && 0 === (workInProgressRootInterleavedUpdatedLanes & 134217727) || null === workInProgressRoot || markRootSuspended(
    workInProgressRoot,
    workInProgressRootRenderLanes,
    workInProgressDeferredLane,
    false
  );
}
function renderRootSync(root2, lanes, shouldYieldForPrerendering) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
  if (workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes)
    workInProgressTransitions = null, prepareFreshStack(root2, lanes);
  lanes = false;
  var exitStatus = workInProgressRootExitStatus;
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
        var unitOfWork = workInProgress, thrownValue = workInProgressThrownValue;
        switch (workInProgressSuspendedReason) {
          case 8:
            resetWorkInProgressStack();
            exitStatus = 6;
            break a;
          case 3:
          case 2:
          case 9:
          case 6:
            null === suspenseHandlerStackCursor.current && (lanes = true);
            var reason = workInProgressSuspendedReason;
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, reason);
            if (shouldYieldForPrerendering && workInProgressRootIsPrerendering) {
              exitStatus = 0;
              break a;
            }
            break;
          default:
            reason = workInProgressSuspendedReason, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, reason);
        }
      }
      workLoopSync();
      exitStatus = workInProgressRootExitStatus;
      break;
    } catch (thrownValue$165) {
      handleThrow(root2, thrownValue$165);
    }
  while (1);
  lanes && root2.shellSuspendCounter++;
  lastContextDependency = currentlyRenderingFiber$1 = null;
  executionContext = prevExecutionContext;
  ReactSharedInternals.H = prevDispatcher;
  ReactSharedInternals.A = prevAsyncDispatcher;
  null === workInProgress && (workInProgressRoot = null, workInProgressRootRenderLanes = 0, finishQueueingConcurrentUpdates());
  return exitStatus;
}
function workLoopSync() {
  for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
}
function renderRootConcurrent(root2, lanes) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
  workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes ? (workInProgressTransitions = null, workInProgressRootRenderTargetTime = now() + 500, prepareFreshStack(root2, lanes)) : workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
    root2,
    lanes
  );
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
        lanes = workInProgress;
        var thrownValue = workInProgressThrownValue;
        b: switch (workInProgressSuspendedReason) {
          case 1:
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root2, lanes, thrownValue, 1);
            break;
          case 2:
          case 9:
            if (isThenableResolved(thrownValue)) {
              workInProgressSuspendedReason = 0;
              workInProgressThrownValue = null;
              replaySuspendedUnitOfWork(lanes);
              break;
            }
            lanes = function() {
              2 !== workInProgressSuspendedReason && 9 !== workInProgressSuspendedReason || workInProgressRoot !== root2 || (workInProgressSuspendedReason = 7);
              ensureRootIsScheduled(root2);
            };
            thrownValue.then(lanes, lanes);
            break a;
          case 3:
            workInProgressSuspendedReason = 7;
            break a;
          case 4:
            workInProgressSuspendedReason = 5;
            break a;
          case 7:
            isThenableResolved(thrownValue) ? (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, replaySuspendedUnitOfWork(lanes)) : (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root2, lanes, thrownValue, 7));
            break;
          case 5:
            var resource = null;
            switch (workInProgress.tag) {
              case 26:
                resource = workInProgress.memoizedState;
              case 5:
              case 27:
                var hostFiber = workInProgress;
                if (resource ? preloadResource(resource) : hostFiber.stateNode.complete) {
                  workInProgressSuspendedReason = 0;
                  workInProgressThrownValue = null;
                  var sibling = hostFiber.sibling;
                  if (null !== sibling) workInProgress = sibling;
                  else {
                    var returnFiber = hostFiber.return;
                    null !== returnFiber ? (workInProgress = returnFiber, completeUnitOfWork(returnFiber)) : workInProgress = null;
                  }
                  break b;
                }
            }
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root2, lanes, thrownValue, 5);
            break;
          case 6:
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root2, lanes, thrownValue, 6);
            break;
          case 8:
            resetWorkInProgressStack();
            workInProgressRootExitStatus = 6;
            break a;
          default:
            throw Error(formatProdErrorMessage(462));
        }
      }
      workLoopConcurrentByScheduler();
      break;
    } catch (thrownValue$167) {
      handleThrow(root2, thrownValue$167);
    }
  while (1);
  lastContextDependency = currentlyRenderingFiber$1 = null;
  ReactSharedInternals.H = prevDispatcher;
  ReactSharedInternals.A = prevAsyncDispatcher;
  executionContext = prevExecutionContext;
  if (null !== workInProgress) return 0;
  workInProgressRoot = null;
  workInProgressRootRenderLanes = 0;
  finishQueueingConcurrentUpdates();
  return workInProgressRootExitStatus;
}
function workLoopConcurrentByScheduler() {
  for (; null !== workInProgress && !shouldYield(); )
    performUnitOfWork(workInProgress);
}
function performUnitOfWork(unitOfWork) {
  var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
}
function replaySuspendedUnitOfWork(unitOfWork) {
  var next = unitOfWork;
  var current = next.alternate;
  switch (next.tag) {
    case 15:
    case 0:
      next = replayFunctionComponent(
        current,
        next,
        next.pendingProps,
        next.type,
        void 0,
        workInProgressRootRenderLanes
      );
      break;
    case 11:
      next = replayFunctionComponent(
        current,
        next,
        next.pendingProps,
        next.type.render,
        next.ref,
        workInProgressRootRenderLanes
      );
      break;
    case 5:
      resetHooksOnUnwind(next);
    default:
      unwindInterruptedWork(current, next), next = workInProgress = resetWorkInProgress(next, entangledRenderLanes), next = beginWork(current, next, entangledRenderLanes);
  }
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
}
function throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, suspendedReason) {
  lastContextDependency = currentlyRenderingFiber$1 = null;
  resetHooksOnUnwind(unitOfWork);
  thenableState$1 = null;
  thenableIndexCounter$1 = 0;
  var returnFiber = unitOfWork.return;
  try {
    if (throwException(
      root2,
      returnFiber,
      unitOfWork,
      thrownValue,
      workInProgressRootRenderLanes
    )) {
      workInProgressRootExitStatus = 1;
      logUncaughtError(
        root2,
        createCapturedValueAtFiber(thrownValue, root2.current)
      );
      workInProgress = null;
      return;
    }
  } catch (error) {
    if (null !== returnFiber) throw workInProgress = returnFiber, error;
    workInProgressRootExitStatus = 1;
    logUncaughtError(
      root2,
      createCapturedValueAtFiber(thrownValue, root2.current)
    );
    workInProgress = null;
    return;
  }
  if (unitOfWork.flags & 32768) {
    if (isHydrating || 1 === suspendedReason) root2 = true;
    else if (workInProgressRootIsPrerendering || 0 !== (workInProgressRootRenderLanes & 536870912))
      root2 = false;
    else if (workInProgressRootDidSkipSuspendedSiblings = root2 = true, 2 === suspendedReason || 9 === suspendedReason || 3 === suspendedReason || 6 === suspendedReason)
      suspendedReason = suspenseHandlerStackCursor.current, null !== suspendedReason && 13 === suspendedReason.tag && (suspendedReason.flags |= 16384);
    unwindUnitOfWork(unitOfWork, root2);
  } else completeUnitOfWork(unitOfWork);
}
function completeUnitOfWork(unitOfWork) {
  var completedWork = unitOfWork;
  do {
    if (0 !== (completedWork.flags & 32768)) {
      unwindUnitOfWork(
        completedWork,
        workInProgressRootDidSkipSuspendedSiblings
      );
      return;
    }
    unitOfWork = completedWork.return;
    var next = completeWork(
      completedWork.alternate,
      completedWork,
      entangledRenderLanes
    );
    if (null !== next) {
      workInProgress = next;
      return;
    }
    completedWork = completedWork.sibling;
    if (null !== completedWork) {
      workInProgress = completedWork;
      return;
    }
    workInProgress = completedWork = unitOfWork;
  } while (null !== completedWork);
  0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
}
function unwindUnitOfWork(unitOfWork, skipSiblings) {
  do {
    var next = unwindWork(unitOfWork.alternate, unitOfWork);
    if (null !== next) {
      next.flags &= 32767;
      workInProgress = next;
      return;
    }
    next = unitOfWork.return;
    null !== next && (next.flags |= 32768, next.subtreeFlags = 0, next.deletions = null);
    if (!skipSiblings && (unitOfWork = unitOfWork.sibling, null !== unitOfWork)) {
      workInProgress = unitOfWork;
      return;
    }
    workInProgress = unitOfWork = next;
  } while (null !== unitOfWork);
  workInProgressRootExitStatus = 6;
  workInProgress = null;
}
function commitRoot(root2, finishedWork, lanes, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes) {
  root2.cancelPendingCommit = null;
  do
    flushPendingEffects();
  while (0 !== pendingEffectsStatus);
  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
  if (null !== finishedWork) {
    if (finishedWork === root2.current) throw Error(formatProdErrorMessage(177));
    didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
    didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
    markRootFinished(
      root2,
      lanes,
      didIncludeRenderPhaseUpdate,
      spawnedLane,
      updatedLanes,
      suspendedRetryLanes
    );
    root2 === workInProgressRoot && (workInProgress = workInProgressRoot = null, workInProgressRootRenderLanes = 0);
    pendingFinishedWork = finishedWork;
    pendingEffectsRoot = root2;
    pendingEffectsLanes = lanes;
    pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
    pendingPassiveTransitions = transitions;
    pendingRecoverableErrors = recoverableErrors;
    0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? (root2.callbackNode = null, root2.callbackPriority = 0, scheduleCallback$1(NormalPriority$1, function() {
      flushPassiveEffects();
      return null;
    })) : (root2.callbackNode = null, root2.callbackPriority = 0);
    recoverableErrors = 0 !== (finishedWork.flags & 13878);
    if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
      recoverableErrors = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      transitions = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      spawnedLane = executionContext;
      executionContext |= 4;
      try {
        commitBeforeMutationEffects(root2, finishedWork, lanes);
      } finally {
        executionContext = spawnedLane, ReactDOMSharedInternals.p = transitions, ReactSharedInternals.T = recoverableErrors;
      }
    }
    pendingEffectsStatus = 1;
    flushMutationEffects();
    flushLayoutEffects();
    flushSpawnedWork();
  }
}
function flushMutationEffects() {
  if (1 === pendingEffectsStatus) {
    pendingEffectsStatus = 0;
    var root2 = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
    if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
      rootMutationHasEffect = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      var prevExecutionContext = executionContext;
      executionContext |= 4;
      try {
        commitMutationEffectsOnFiber(finishedWork, root2);
        var priorSelectionInformation = selectionInformation, curFocusedElem = getActiveElementDeep(root2.containerInfo), priorFocusedElem = priorSelectionInformation.focusedElem, priorSelectionRange = priorSelectionInformation.selectionRange;
        if (curFocusedElem !== priorFocusedElem && priorFocusedElem && priorFocusedElem.ownerDocument && containsNode(
          priorFocusedElem.ownerDocument.documentElement,
          priorFocusedElem
        )) {
          if (null !== priorSelectionRange && hasSelectionCapabilities(priorFocusedElem)) {
            var start = priorSelectionRange.start, end = priorSelectionRange.end;
            void 0 === end && (end = start);
            if ("selectionStart" in priorFocusedElem)
              priorFocusedElem.selectionStart = start, priorFocusedElem.selectionEnd = Math.min(
                end,
                priorFocusedElem.value.length
              );
            else {
              var doc = priorFocusedElem.ownerDocument || document, win = doc && doc.defaultView || window;
              if (win.getSelection) {
                var selection = win.getSelection(), length = priorFocusedElem.textContent.length, start$jscomp$0 = Math.min(priorSelectionRange.start, length), end$jscomp$0 = void 0 === priorSelectionRange.end ? start$jscomp$0 : Math.min(priorSelectionRange.end, length);
                !selection.extend && start$jscomp$0 > end$jscomp$0 && (curFocusedElem = end$jscomp$0, end$jscomp$0 = start$jscomp$0, start$jscomp$0 = curFocusedElem);
                var startMarker = getNodeForCharacterOffset(
                  priorFocusedElem,
                  start$jscomp$0
                ), endMarker = getNodeForCharacterOffset(
                  priorFocusedElem,
                  end$jscomp$0
                );
                if (startMarker && endMarker && (1 !== selection.rangeCount || selection.anchorNode !== startMarker.node || selection.anchorOffset !== startMarker.offset || selection.focusNode !== endMarker.node || selection.focusOffset !== endMarker.offset)) {
                  var range = doc.createRange();
                  range.setStart(startMarker.node, startMarker.offset);
                  selection.removeAllRanges();
                  start$jscomp$0 > end$jscomp$0 ? (selection.addRange(range), selection.extend(endMarker.node, endMarker.offset)) : (range.setEnd(endMarker.node, endMarker.offset), selection.addRange(range));
                }
              }
            }
          }
          doc = [];
          for (selection = priorFocusedElem; selection = selection.parentNode; )
            1 === selection.nodeType && doc.push({
              element: selection,
              left: selection.scrollLeft,
              top: selection.scrollTop
            });
          "function" === typeof priorFocusedElem.focus && priorFocusedElem.focus();
          for (priorFocusedElem = 0; priorFocusedElem < doc.length; priorFocusedElem++) {
            var info = doc[priorFocusedElem];
            info.element.scrollLeft = info.left;
            info.element.scrollTop = info.top;
          }
        }
        _enabled$1 = !!eventsEnabled;
        selectionInformation = eventsEnabled = null;
      } finally {
        executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootMutationHasEffect;
      }
    }
    root2.current = finishedWork;
    pendingEffectsStatus = 2;
  }
}
function flushLayoutEffects() {
  if (2 === pendingEffectsStatus) {
    pendingEffectsStatus = 0;
    var root2 = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
    if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
      rootHasLayoutEffect = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      var prevExecutionContext = executionContext;
      executionContext |= 4;
      try {
        commitLayoutEffectOnFiber(root2, finishedWork.alternate, finishedWork);
      } finally {
        executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootHasLayoutEffect;
      }
    }
    pendingEffectsStatus = 3;
  }
}
function flushSpawnedWork() {
  if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
    pendingEffectsStatus = 0;
    requestPaint();
    var root2 = pendingEffectsRoot, finishedWork = pendingFinishedWork, lanes = pendingEffectsLanes, recoverableErrors = pendingRecoverableErrors;
    0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? pendingEffectsStatus = 5 : (pendingEffectsStatus = 0, pendingFinishedWork = pendingEffectsRoot = null, releaseRootPooledCache(root2, root2.pendingLanes));
    var remainingLanes = root2.pendingLanes;
    0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
    lanesToEventPriority(lanes);
    finishedWork = finishedWork.stateNode;
    if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
      try {
        injectedHook.onCommitFiberRoot(
          rendererID,
          finishedWork,
          void 0,
          128 === (finishedWork.current.flags & 128)
        );
      } catch (err) {
      }
    if (null !== recoverableErrors) {
      finishedWork = ReactSharedInternals.T;
      remainingLanes = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      ReactSharedInternals.T = null;
      try {
        for (var onRecoverableError = root2.onRecoverableError, i = 0; i < recoverableErrors.length; i++) {
          var recoverableError = recoverableErrors[i];
          onRecoverableError(recoverableError.value, {
            componentStack: recoverableError.stack
          });
        }
      } finally {
        ReactSharedInternals.T = finishedWork, ReactDOMSharedInternals.p = remainingLanes;
      }
    }
    0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
    ensureRootIsScheduled(root2);
    remainingLanes = root2.pendingLanes;
    0 !== (lanes & 261930) && 0 !== (remainingLanes & 42) ? root2 === rootWithNestedUpdates ? nestedUpdateCount++ : (nestedUpdateCount = 0, rootWithNestedUpdates = root2) : nestedUpdateCount = 0;
    flushSyncWorkAcrossRoots_impl(0);
  }
}
function releaseRootPooledCache(root2, remainingLanes) {
  0 === (root2.pooledCacheLanes &= remainingLanes) && (remainingLanes = root2.pooledCache, null != remainingLanes && (root2.pooledCache = null, releaseCache(remainingLanes)));
}
function flushPendingEffects() {
  flushMutationEffects();
  flushLayoutEffects();
  flushSpawnedWork();
  return flushPassiveEffects();
}
function flushPassiveEffects() {
  if (5 !== pendingEffectsStatus) return false;
  var root2 = pendingEffectsRoot, remainingLanes = pendingEffectsRemainingLanes;
  pendingEffectsRemainingLanes = 0;
  var renderPriority = lanesToEventPriority(pendingEffectsLanes), prevTransition = ReactSharedInternals.T, previousPriority = ReactDOMSharedInternals.p;
  try {
    ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
    ReactSharedInternals.T = null;
    renderPriority = pendingPassiveTransitions;
    pendingPassiveTransitions = null;
    var root$jscomp$0 = pendingEffectsRoot, lanes = pendingEffectsLanes;
    pendingEffectsStatus = 0;
    pendingFinishedWork = pendingEffectsRoot = null;
    pendingEffectsLanes = 0;
    if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
    var prevExecutionContext = executionContext;
    executionContext |= 4;
    commitPassiveUnmountOnFiber(root$jscomp$0.current);
    commitPassiveMountOnFiber(
      root$jscomp$0,
      root$jscomp$0.current,
      lanes,
      renderPriority
    );
    executionContext = prevExecutionContext;
    flushSyncWorkAcrossRoots_impl(0, false);
    if (injectedHook && "function" === typeof injectedHook.onPostCommitFiberRoot)
      try {
        injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
      } catch (err) {
      }
    return true;
  } finally {
    ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition, releaseRootPooledCache(root2, remainingLanes);
  }
}
function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
  sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
  sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
  rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
  null !== rootFiber && (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
}
function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
  if (3 === sourceFiber.tag)
    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
  else
    for (; null !== nearestMountedAncestor; ) {
      if (3 === nearestMountedAncestor.tag) {
        captureCommitPhaseErrorOnRoot(
          nearestMountedAncestor,
          sourceFiber,
          error
        );
        break;
      } else if (1 === nearestMountedAncestor.tag) {
        var instance = nearestMountedAncestor.stateNode;
        if ("function" === typeof nearestMountedAncestor.type.getDerivedStateFromError || "function" === typeof instance.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(instance))) {
          sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
          error = createClassErrorUpdate(2);
          instance = enqueueUpdate(nearestMountedAncestor, error, 2);
          null !== instance && (initializeClassErrorUpdate(
            error,
            instance,
            nearestMountedAncestor,
            sourceFiber
          ), markRootUpdated$1(instance, 2), ensureRootIsScheduled(instance));
          break;
        }
      }
      nearestMountedAncestor = nearestMountedAncestor.return;
    }
}
function attachPingListener(root2, wakeable, lanes) {
  var pingCache = root2.pingCache;
  if (null === pingCache) {
    pingCache = root2.pingCache = new PossiblyWeakMap();
    var threadIDs = /* @__PURE__ */ new Set();
    pingCache.set(wakeable, threadIDs);
  } else
    threadIDs = pingCache.get(wakeable), void 0 === threadIDs && (threadIDs = /* @__PURE__ */ new Set(), pingCache.set(wakeable, threadIDs));
  threadIDs.has(lanes) || (workInProgressRootDidAttachPingListener = true, threadIDs.add(lanes), root2 = pingSuspendedRoot.bind(null, root2, wakeable, lanes), wakeable.then(root2, root2));
}
function pingSuspendedRoot(root2, wakeable, pingedLanes) {
  var pingCache = root2.pingCache;
  null !== pingCache && pingCache.delete(wakeable);
  root2.pingedLanes |= root2.suspendedLanes & pingedLanes;
  root2.warmLanes &= ~pingedLanes;
  workInProgressRoot === root2 && (workInProgressRootRenderLanes & pingedLanes) === pingedLanes && (4 === workInProgressRootExitStatus || 3 === workInProgressRootExitStatus && (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes && 300 > now() - globalMostRecentFallbackTime ? 0 === (executionContext & 2) && prepareFreshStack(root2, 0) : workInProgressRootPingedLanes |= pingedLanes, workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes && (workInProgressSuspendedRetryLanes = 0));
  ensureRootIsScheduled(root2);
}
function retryTimedOutBoundary(boundaryFiber, retryLane) {
  0 === retryLane && (retryLane = claimNextRetryLane());
  boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
  null !== boundaryFiber && (markRootUpdated$1(boundaryFiber, retryLane), ensureRootIsScheduled(boundaryFiber));
}
function retryDehydratedSuspenseBoundary(boundaryFiber) {
  var suspenseState = boundaryFiber.memoizedState, retryLane = 0;
  null !== suspenseState && (retryLane = suspenseState.retryLane);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function resolveRetryWakeable(boundaryFiber, wakeable) {
  var retryLane = 0;
  switch (boundaryFiber.tag) {
    case 31:
    case 13:
      var retryCache = boundaryFiber.stateNode;
      var suspenseState = boundaryFiber.memoizedState;
      null !== suspenseState && (retryLane = suspenseState.retryLane);
      break;
    case 19:
      retryCache = boundaryFiber.stateNode;
      break;
    case 22:
      retryCache = boundaryFiber.stateNode._retryCache;
      break;
    default:
      throw Error(formatProdErrorMessage(314));
  }
  null !== retryCache && retryCache.delete(wakeable);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function scheduleCallback$1(priorityLevel, callback) {
  return scheduleCallback$3(priorityLevel, callback);
}
var firstScheduledRoot = null, lastScheduledRoot = null, didScheduleMicrotask = false, mightHavePendingSyncWork = false, isFlushingWork = false, currentEventTransitionLane = 0;
function ensureRootIsScheduled(root2) {
  root2 !== lastScheduledRoot && null === root2.next && (null === lastScheduledRoot ? firstScheduledRoot = lastScheduledRoot = root2 : lastScheduledRoot = lastScheduledRoot.next = root2);
  mightHavePendingSyncWork = true;
  didScheduleMicrotask || (didScheduleMicrotask = true, scheduleImmediateRootScheduleTask());
}
function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
  if (!isFlushingWork && mightHavePendingSyncWork) {
    isFlushingWork = true;
    do {
      var didPerformSomeWork = false;
      for (var root$170 = firstScheduledRoot; null !== root$170; ) {
        if (0 !== syncTransitionLanes) {
          var pendingLanes = root$170.pendingLanes;
          if (0 === pendingLanes) var JSCompiler_inline_result = 0;
          else {
            var suspendedLanes = root$170.suspendedLanes, pingedLanes = root$170.pingedLanes;
            JSCompiler_inline_result = (1 << 31 - clz32(42 | syncTransitionLanes) + 1) - 1;
            JSCompiler_inline_result &= pendingLanes & ~(suspendedLanes & ~pingedLanes);
            JSCompiler_inline_result = JSCompiler_inline_result & 201326741 ? JSCompiler_inline_result & 201326741 | 1 : JSCompiler_inline_result ? JSCompiler_inline_result | 2 : 0;
          }
          0 !== JSCompiler_inline_result && (didPerformSomeWork = true, performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
        } else
          JSCompiler_inline_result = workInProgressRootRenderLanes, JSCompiler_inline_result = getNextLanes(
            root$170,
            root$170 === workInProgressRoot ? JSCompiler_inline_result : 0,
            null !== root$170.cancelPendingCommit || -1 !== root$170.timeoutHandle
          ), 0 === (JSCompiler_inline_result & 3) || checkIfRootIsPrerendering(root$170, JSCompiler_inline_result) || (didPerformSomeWork = true, performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
        root$170 = root$170.next;
      }
    } while (didPerformSomeWork);
    isFlushingWork = false;
  }
}
function processRootScheduleInImmediateTask() {
  processRootScheduleInMicrotask();
}
function processRootScheduleInMicrotask() {
  mightHavePendingSyncWork = didScheduleMicrotask = false;
  var syncTransitionLanes = 0;
  0 !== currentEventTransitionLane && shouldAttemptEagerTransition() && (syncTransitionLanes = currentEventTransitionLane);
  for (var currentTime = now(), prev = null, root2 = firstScheduledRoot; null !== root2; ) {
    var next = root2.next, nextLanes = scheduleTaskForRootDuringMicrotask(root2, currentTime);
    if (0 === nextLanes)
      root2.next = null, null === prev ? firstScheduledRoot = next : prev.next = next, null === next && (lastScheduledRoot = prev);
    else if (prev = root2, 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
      mightHavePendingSyncWork = true;
    root2 = next;
  }
  0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus || flushSyncWorkAcrossRoots_impl(syncTransitionLanes);
  0 !== currentEventTransitionLane && (currentEventTransitionLane = 0);
}
function scheduleTaskForRootDuringMicrotask(root2, currentTime) {
  for (var suspendedLanes = root2.suspendedLanes, pingedLanes = root2.pingedLanes, expirationTimes = root2.expirationTimes, lanes = root2.pendingLanes & -62914561; 0 < lanes; ) {
    var index$5 = 31 - clz32(lanes), lane = 1 << index$5, expirationTime = expirationTimes[index$5];
    if (-1 === expirationTime) {
      if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
        expirationTimes[index$5] = computeExpirationTime(lane, currentTime);
    } else expirationTime <= currentTime && (root2.expiredLanes |= lane);
    lanes &= ~lane;
  }
  currentTime = workInProgressRoot;
  suspendedLanes = workInProgressRootRenderLanes;
  suspendedLanes = getNextLanes(
    root2,
    root2 === currentTime ? suspendedLanes : 0,
    null !== root2.cancelPendingCommit || -1 !== root2.timeoutHandle
  );
  pingedLanes = root2.callbackNode;
  if (0 === suspendedLanes || root2 === currentTime && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root2.cancelPendingCommit)
    return null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes), root2.callbackNode = null, root2.callbackPriority = 0;
  if (0 === (suspendedLanes & 3) || checkIfRootIsPrerendering(root2, suspendedLanes)) {
    currentTime = suspendedLanes & -suspendedLanes;
    if (currentTime === root2.callbackPriority) return currentTime;
    null !== pingedLanes && cancelCallback$1(pingedLanes);
    switch (lanesToEventPriority(suspendedLanes)) {
      case 2:
      case 8:
        suspendedLanes = UserBlockingPriority;
        break;
      case 32:
        suspendedLanes = NormalPriority$1;
        break;
      case 268435456:
        suspendedLanes = IdlePriority;
        break;
      default:
        suspendedLanes = NormalPriority$1;
    }
    pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root2);
    suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
    root2.callbackPriority = currentTime;
    root2.callbackNode = suspendedLanes;
    return currentTime;
  }
  null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
  root2.callbackPriority = 2;
  root2.callbackNode = null;
  return 2;
}
function performWorkOnRootViaSchedulerTask(root2, didTimeout) {
  if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus)
    return root2.callbackNode = null, root2.callbackPriority = 0, null;
  var originalCallbackNode = root2.callbackNode;
  if (flushPendingEffects() && root2.callbackNode !== originalCallbackNode)
    return null;
  var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
  workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
    root2,
    root2 === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0,
    null !== root2.cancelPendingCommit || -1 !== root2.timeoutHandle
  );
  if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
  performWorkOnRoot(root2, workInProgressRootRenderLanes$jscomp$0, didTimeout);
  scheduleTaskForRootDuringMicrotask(root2, now());
  return null != root2.callbackNode && root2.callbackNode === originalCallbackNode ? performWorkOnRootViaSchedulerTask.bind(null, root2) : null;
}
function performSyncWorkOnRoot(root2, lanes) {
  if (flushPendingEffects()) return null;
  performWorkOnRoot(root2, lanes, true);
}
function scheduleImmediateRootScheduleTask() {
  scheduleMicrotask(function() {
    0 !== (executionContext & 6) ? scheduleCallback$3(
      ImmediatePriority,
      processRootScheduleInImmediateTask
    ) : processRootScheduleInMicrotask();
  });
}
function requestTransitionLane() {
  if (0 === currentEventTransitionLane) {
    var actionScopeLane = currentEntangledLane;
    0 === actionScopeLane && (actionScopeLane = nextTransitionUpdateLane, nextTransitionUpdateLane <<= 1, 0 === (nextTransitionUpdateLane & 261888) && (nextTransitionUpdateLane = 256));
    currentEventTransitionLane = actionScopeLane;
  }
  return currentEventTransitionLane;
}
function coerceFormActionProp(actionProp) {
  return null == actionProp || "symbol" === typeof actionProp || "boolean" === typeof actionProp ? null : "function" === typeof actionProp ? actionProp : sanitizeURL("" + actionProp);
}
function createFormDataWithSubmitter(form, submitter) {
  var temp = submitter.ownerDocument.createElement("input");
  temp.name = submitter.name;
  temp.value = submitter.value;
  form.id && temp.setAttribute("form", form.id);
  submitter.parentNode.insertBefore(temp, submitter);
  form = new FormData(form);
  temp.parentNode.removeChild(temp);
  return form;
}
function extractEvents$1(dispatchQueue, domEventName, maybeTargetInst, nativeEvent, nativeEventTarget) {
  if ("submit" === domEventName && maybeTargetInst && maybeTargetInst.stateNode === nativeEventTarget) {
    var action = coerceFormActionProp(
      (nativeEventTarget[internalPropsKey] || null).action
    ), submitter = nativeEvent.submitter;
    submitter && (domEventName = (domEventName = submitter[internalPropsKey] || null) ? coerceFormActionProp(domEventName.formAction) : submitter.getAttribute("formAction"), null !== domEventName && (action = domEventName, submitter = null));
    var event = new SyntheticEvent(
      "action",
      "action",
      null,
      nativeEvent,
      nativeEventTarget
    );
    dispatchQueue.push({
      event,
      listeners: [
        {
          instance: null,
          listener: function() {
            if (nativeEvent.defaultPrevented) {
              if (0 !== currentEventTransitionLane) {
                var formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget);
                startHostTransition(
                  maybeTargetInst,
                  {
                    pending: true,
                    data: formData,
                    method: nativeEventTarget.method,
                    action
                  },
                  null,
                  formData
                );
              }
            } else
              "function" === typeof action && (event.preventDefault(), formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget), startHostTransition(
                maybeTargetInst,
                {
                  pending: true,
                  data: formData,
                  method: nativeEventTarget.method,
                  action
                },
                action,
                formData
              ));
          },
          currentTarget: nativeEventTarget
        }
      ]
    });
  }
}
for (var i$jscomp$inline_1577 = 0; i$jscomp$inline_1577 < simpleEventPluginEvents.length; i$jscomp$inline_1577++) {
  var eventName$jscomp$inline_1578 = simpleEventPluginEvents[i$jscomp$inline_1577], domEventName$jscomp$inline_1579 = eventName$jscomp$inline_1578.toLowerCase(), capitalizedEvent$jscomp$inline_1580 = eventName$jscomp$inline_1578[0].toUpperCase() + eventName$jscomp$inline_1578.slice(1);
  registerSimpleEvent(
    domEventName$jscomp$inline_1579,
    "on" + capitalizedEvent$jscomp$inline_1580
  );
}
registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
registerSimpleEvent(ANIMATION_START, "onAnimationStart");
registerSimpleEvent("dblclick", "onDoubleClick");
registerSimpleEvent("focusin", "onFocus");
registerSimpleEvent("focusout", "onBlur");
registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
registerSimpleEvent(TRANSITION_START, "onTransitionStart");
registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
registerTwoPhaseEvent(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
registerTwoPhaseEvent(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
registerTwoPhaseEvent("onBeforeInput", [
  "compositionend",
  "keypress",
  "textInput",
  "paste"
]);
registerTwoPhaseEvent(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
registerTwoPhaseEvent(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
registerTwoPhaseEvent(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var mediaEventTypes = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
  " "
), nonDelegatedEvents = new Set(
  "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mediaEventTypes)
);
function processDispatchQueue(dispatchQueue, eventSystemFlags) {
  eventSystemFlags = 0 !== (eventSystemFlags & 4);
  for (var i = 0; i < dispatchQueue.length; i++) {
    var _dispatchQueue$i = dispatchQueue[i], event = _dispatchQueue$i.event;
    _dispatchQueue$i = _dispatchQueue$i.listeners;
    a: {
      var previousInstance = void 0;
      if (eventSystemFlags)
        for (var i$jscomp$0 = _dispatchQueue$i.length - 1; 0 <= i$jscomp$0; i$jscomp$0--) {
          var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0], instance = _dispatchListeners$i.instance, currentTarget = _dispatchListeners$i.currentTarget;
          _dispatchListeners$i = _dispatchListeners$i.listener;
          if (instance !== previousInstance && event.isPropagationStopped())
            break a;
          previousInstance = _dispatchListeners$i;
          event.currentTarget = currentTarget;
          try {
            previousInstance(event);
          } catch (error) {
            reportGlobalError(error);
          }
          event.currentTarget = null;
          previousInstance = instance;
        }
      else
        for (i$jscomp$0 = 0; i$jscomp$0 < _dispatchQueue$i.length; i$jscomp$0++) {
          _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
          instance = _dispatchListeners$i.instance;
          currentTarget = _dispatchListeners$i.currentTarget;
          _dispatchListeners$i = _dispatchListeners$i.listener;
          if (instance !== previousInstance && event.isPropagationStopped())
            break a;
          previousInstance = _dispatchListeners$i;
          event.currentTarget = currentTarget;
          try {
            previousInstance(event);
          } catch (error) {
            reportGlobalError(error);
          }
          event.currentTarget = null;
          previousInstance = instance;
        }
    }
  }
}
function listenToNonDelegatedEvent(domEventName, targetElement) {
  var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
  void 0 === JSCompiler_inline_result && (JSCompiler_inline_result = targetElement[internalEventHandlersKey] = /* @__PURE__ */ new Set());
  var listenerSetKey = domEventName + "__bubble";
  JSCompiler_inline_result.has(listenerSetKey) || (addTrappedEventListener(targetElement, domEventName, 2, false), JSCompiler_inline_result.add(listenerSetKey));
}
function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
  var eventSystemFlags = 0;
  isCapturePhaseListener && (eventSystemFlags |= 4);
  addTrappedEventListener(
    target,
    domEventName,
    eventSystemFlags,
    isCapturePhaseListener
  );
}
var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
function listenToAllSupportedEvents(rootContainerElement) {
  if (!rootContainerElement[listeningMarker]) {
    rootContainerElement[listeningMarker] = true;
    allNativeEvents.forEach(function(domEventName) {
      "selectionchange" !== domEventName && (nonDelegatedEvents.has(domEventName) || listenToNativeEvent(domEventName, false, rootContainerElement), listenToNativeEvent(domEventName, true, rootContainerElement));
    });
    var ownerDocument = 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
    null === ownerDocument || ownerDocument[listeningMarker] || (ownerDocument[listeningMarker] = true, listenToNativeEvent("selectionchange", false, ownerDocument));
  }
}
function addTrappedEventListener(targetContainer, domEventName, eventSystemFlags, isCapturePhaseListener) {
  switch (getEventPriority(domEventName)) {
    case 2:
      var listenerWrapper = dispatchDiscreteEvent;
      break;
    case 8:
      listenerWrapper = dispatchContinuousEvent;
      break;
    default:
      listenerWrapper = dispatchEvent;
  }
  eventSystemFlags = listenerWrapper.bind(
    null,
    domEventName,
    eventSystemFlags,
    targetContainer
  );
  listenerWrapper = void 0;
  !passiveBrowserEventsSupported || "touchstart" !== domEventName && "touchmove" !== domEventName && "wheel" !== domEventName || (listenerWrapper = true);
  isCapturePhaseListener ? void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
    capture: true,
    passive: listenerWrapper
  }) : targetContainer.addEventListener(domEventName, eventSystemFlags, true) : void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
    passive: listenerWrapper
  }) : targetContainer.addEventListener(domEventName, eventSystemFlags, false);
}
function dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst$jscomp$0, targetContainer) {
  var ancestorInst = targetInst$jscomp$0;
  if (0 === (eventSystemFlags & 1) && 0 === (eventSystemFlags & 2) && null !== targetInst$jscomp$0)
    a: for (; ; ) {
      if (null === targetInst$jscomp$0) return;
      var nodeTag = targetInst$jscomp$0.tag;
      if (3 === nodeTag || 4 === nodeTag) {
        var container = targetInst$jscomp$0.stateNode.containerInfo;
        if (container === targetContainer) break;
        if (4 === nodeTag)
          for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
            var grandTag = nodeTag.tag;
            if ((3 === grandTag || 4 === grandTag) && nodeTag.stateNode.containerInfo === targetContainer)
              return;
            nodeTag = nodeTag.return;
          }
        for (; null !== container; ) {
          nodeTag = getClosestInstanceFromNode(container);
          if (null === nodeTag) return;
          grandTag = nodeTag.tag;
          if (5 === grandTag || 6 === grandTag || 26 === grandTag || 27 === grandTag) {
            targetInst$jscomp$0 = ancestorInst = nodeTag;
            continue a;
          }
          container = container.parentNode;
        }
      }
      targetInst$jscomp$0 = targetInst$jscomp$0.return;
    }
  batchedUpdates$1(function() {
    var targetInst = ancestorInst, nativeEventTarget = getEventTarget(nativeEvent), dispatchQueue = [];
    a: {
      var reactName = topLevelEventsToReactNames.get(domEventName);
      if (void 0 !== reactName) {
        var SyntheticEventCtor = SyntheticEvent, reactEventType = domEventName;
        switch (domEventName) {
          case "keypress":
            if (0 === getEventCharCode(nativeEvent)) break a;
          case "keydown":
          case "keyup":
            SyntheticEventCtor = SyntheticKeyboardEvent;
            break;
          case "focusin":
            reactEventType = "focus";
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "focusout":
            reactEventType = "blur";
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "beforeblur":
          case "afterblur":
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "click":
            if (2 === nativeEvent.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            SyntheticEventCtor = SyntheticMouseEvent;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            SyntheticEventCtor = SyntheticDragEvent;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            SyntheticEventCtor = SyntheticTouchEvent;
            break;
          case ANIMATION_END:
          case ANIMATION_ITERATION:
          case ANIMATION_START:
            SyntheticEventCtor = SyntheticAnimationEvent;
            break;
          case TRANSITION_END:
            SyntheticEventCtor = SyntheticTransitionEvent;
            break;
          case "scroll":
          case "scrollend":
            SyntheticEventCtor = SyntheticUIEvent;
            break;
          case "wheel":
            SyntheticEventCtor = SyntheticWheelEvent;
            break;
          case "copy":
          case "cut":
          case "paste":
            SyntheticEventCtor = SyntheticClipboardEvent;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            SyntheticEventCtor = SyntheticPointerEvent;
            break;
          case "toggle":
          case "beforetoggle":
            SyntheticEventCtor = SyntheticToggleEvent;
        }
        var inCapturePhase = 0 !== (eventSystemFlags & 4), accumulateTargetOnly = !inCapturePhase && ("scroll" === domEventName || "scrollend" === domEventName), reactEventName = inCapturePhase ? null !== reactName ? reactName + "Capture" : null : reactName;
        inCapturePhase = [];
        for (var instance = targetInst, lastHostComponent; null !== instance; ) {
          var _instance = instance;
          lastHostComponent = _instance.stateNode;
          _instance = _instance.tag;
          5 !== _instance && 26 !== _instance && 27 !== _instance || null === lastHostComponent || null === reactEventName || (_instance = getListener(instance, reactEventName), null != _instance && inCapturePhase.push(
            createDispatchListener(instance, _instance, lastHostComponent)
          ));
          if (accumulateTargetOnly) break;
          instance = instance.return;
        }
        0 < inCapturePhase.length && (reactName = new SyntheticEventCtor(
          reactName,
          reactEventType,
          null,
          nativeEvent,
          nativeEventTarget
        ), dispatchQueue.push({ event: reactName, listeners: inCapturePhase }));
      }
    }
    if (0 === (eventSystemFlags & 7)) {
      a: {
        reactName = "mouseover" === domEventName || "pointerover" === domEventName;
        SyntheticEventCtor = "mouseout" === domEventName || "pointerout" === domEventName;
        if (reactName && nativeEvent !== currentReplayingEvent && (reactEventType = nativeEvent.relatedTarget || nativeEvent.fromElement) && (getClosestInstanceFromNode(reactEventType) || reactEventType[internalContainerInstanceKey]))
          break a;
        if (SyntheticEventCtor || reactName) {
          reactName = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget : (reactName = nativeEventTarget.ownerDocument) ? reactName.defaultView || reactName.parentWindow : window;
          if (SyntheticEventCtor) {
            if (reactEventType = nativeEvent.relatedTarget || nativeEvent.toElement, SyntheticEventCtor = targetInst, reactEventType = reactEventType ? getClosestInstanceFromNode(reactEventType) : null, null !== reactEventType && (accumulateTargetOnly = getNearestMountedFiber(reactEventType), inCapturePhase = reactEventType.tag, reactEventType !== accumulateTargetOnly || 5 !== inCapturePhase && 27 !== inCapturePhase && 6 !== inCapturePhase))
              reactEventType = null;
          } else SyntheticEventCtor = null, reactEventType = targetInst;
          if (SyntheticEventCtor !== reactEventType) {
            inCapturePhase = SyntheticMouseEvent;
            _instance = "onMouseLeave";
            reactEventName = "onMouseEnter";
            instance = "mouse";
            if ("pointerout" === domEventName || "pointerover" === domEventName)
              inCapturePhase = SyntheticPointerEvent, _instance = "onPointerLeave", reactEventName = "onPointerEnter", instance = "pointer";
            accumulateTargetOnly = null == SyntheticEventCtor ? reactName : getNodeFromInstance(SyntheticEventCtor);
            lastHostComponent = null == reactEventType ? reactName : getNodeFromInstance(reactEventType);
            reactName = new inCapturePhase(
              _instance,
              instance + "leave",
              SyntheticEventCtor,
              nativeEvent,
              nativeEventTarget
            );
            reactName.target = accumulateTargetOnly;
            reactName.relatedTarget = lastHostComponent;
            _instance = null;
            getClosestInstanceFromNode(nativeEventTarget) === targetInst && (inCapturePhase = new inCapturePhase(
              reactEventName,
              instance + "enter",
              reactEventType,
              nativeEvent,
              nativeEventTarget
            ), inCapturePhase.target = lastHostComponent, inCapturePhase.relatedTarget = accumulateTargetOnly, _instance = inCapturePhase);
            accumulateTargetOnly = _instance;
            if (SyntheticEventCtor && reactEventType)
              b: {
                inCapturePhase = getParent;
                reactEventName = SyntheticEventCtor;
                instance = reactEventType;
                lastHostComponent = 0;
                for (_instance = reactEventName; _instance; _instance = inCapturePhase(_instance))
                  lastHostComponent++;
                _instance = 0;
                for (var tempB = instance; tempB; tempB = inCapturePhase(tempB))
                  _instance++;
                for (; 0 < lastHostComponent - _instance; )
                  reactEventName = inCapturePhase(reactEventName), lastHostComponent--;
                for (; 0 < _instance - lastHostComponent; )
                  instance = inCapturePhase(instance), _instance--;
                for (; lastHostComponent--; ) {
                  if (reactEventName === instance || null !== instance && reactEventName === instance.alternate) {
                    inCapturePhase = reactEventName;
                    break b;
                  }
                  reactEventName = inCapturePhase(reactEventName);
                  instance = inCapturePhase(instance);
                }
                inCapturePhase = null;
              }
            else inCapturePhase = null;
            null !== SyntheticEventCtor && accumulateEnterLeaveListenersForEvent(
              dispatchQueue,
              reactName,
              SyntheticEventCtor,
              inCapturePhase,
              false
            );
            null !== reactEventType && null !== accumulateTargetOnly && accumulateEnterLeaveListenersForEvent(
              dispatchQueue,
              accumulateTargetOnly,
              reactEventType,
              inCapturePhase,
              true
            );
          }
        }
      }
      a: {
        reactName = targetInst ? getNodeFromInstance(targetInst) : window;
        SyntheticEventCtor = reactName.nodeName && reactName.nodeName.toLowerCase();
        if ("select" === SyntheticEventCtor || "input" === SyntheticEventCtor && "file" === reactName.type)
          var getTargetInstFunc = getTargetInstForChangeEvent;
        else if (isTextInputElement(reactName))
          if (isInputEventSupported)
            getTargetInstFunc = getTargetInstForInputOrChangeEvent;
          else {
            getTargetInstFunc = getTargetInstForInputEventPolyfill;
            var handleEventFunc = handleEventsForInputEventPolyfill;
          }
        else
          SyntheticEventCtor = reactName.nodeName, !SyntheticEventCtor || "input" !== SyntheticEventCtor.toLowerCase() || "checkbox" !== reactName.type && "radio" !== reactName.type ? targetInst && isCustomElement(targetInst.elementType) && (getTargetInstFunc = getTargetInstForChangeEvent) : getTargetInstFunc = getTargetInstForClickEvent;
        if (getTargetInstFunc && (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))) {
          createAndAccumulateChangeEvent(
            dispatchQueue,
            getTargetInstFunc,
            nativeEvent,
            nativeEventTarget
          );
          break a;
        }
        handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
        "focusout" === domEventName && targetInst && "number" === reactName.type && null != targetInst.memoizedProps.value && setDefaultValue(reactName, "number", reactName.value);
      }
      handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
      switch (domEventName) {
        case "focusin":
          if (isTextInputElement(handleEventFunc) || "true" === handleEventFunc.contentEditable)
            activeElement = handleEventFunc, activeElementInst = targetInst, lastSelection = null;
          break;
        case "focusout":
          lastSelection = activeElementInst = activeElement = null;
          break;
        case "mousedown":
          mouseDown = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          mouseDown = false;
          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
          break;
        case "selectionchange":
          if (skipSelectionChangeEvent) break;
        case "keydown":
        case "keyup":
          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
      }
      var fallbackData;
      if (canUseCompositionEvent)
        b: {
          switch (domEventName) {
            case "compositionstart":
              var eventType = "onCompositionStart";
              break b;
            case "compositionend":
              eventType = "onCompositionEnd";
              break b;
            case "compositionupdate":
              eventType = "onCompositionUpdate";
              break b;
          }
          eventType = void 0;
        }
      else
        isComposing ? isFallbackCompositionEnd(domEventName, nativeEvent) && (eventType = "onCompositionEnd") : "keydown" === domEventName && 229 === nativeEvent.keyCode && (eventType = "onCompositionStart");
      eventType && (useFallbackCompositionData && "ko" !== nativeEvent.locale && (isComposing || "onCompositionStart" !== eventType ? "onCompositionEnd" === eventType && isComposing && (fallbackData = getData()) : (root = nativeEventTarget, startText = "value" in root ? root.value : root.textContent, isComposing = true)), handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType), 0 < handleEventFunc.length && (eventType = new SyntheticCompositionEvent(
        eventType,
        domEventName,
        null,
        nativeEvent,
        nativeEventTarget
      ), dispatchQueue.push({ event: eventType, listeners: handleEventFunc }), fallbackData ? eventType.data = fallbackData : (fallbackData = getDataFromCustomEvent(nativeEvent), null !== fallbackData && (eventType.data = fallbackData))));
      if (fallbackData = canUseTextInputEvent ? getNativeBeforeInputChars(domEventName, nativeEvent) : getFallbackBeforeInputChars(domEventName, nativeEvent))
        eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput"), 0 < eventType.length && (handleEventFunc = new SyntheticCompositionEvent(
          "onBeforeInput",
          "beforeinput",
          null,
          nativeEvent,
          nativeEventTarget
        ), dispatchQueue.push({
          event: handleEventFunc,
          listeners: eventType
        }), handleEventFunc.data = fallbackData);
      extractEvents$1(
        dispatchQueue,
        domEventName,
        targetInst,
        nativeEvent,
        nativeEventTarget
      );
    }
    processDispatchQueue(dispatchQueue, eventSystemFlags);
  });
}
function createDispatchListener(instance, listener, currentTarget) {
  return {
    instance,
    listener,
    currentTarget
  };
}
function accumulateTwoPhaseListeners(targetFiber, reactName) {
  for (var captureName = reactName + "Capture", listeners = []; null !== targetFiber; ) {
    var _instance2 = targetFiber, stateNode = _instance2.stateNode;
    _instance2 = _instance2.tag;
    5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2 || null === stateNode || (_instance2 = getListener(targetFiber, captureName), null != _instance2 && listeners.unshift(
      createDispatchListener(targetFiber, _instance2, stateNode)
    ), _instance2 = getListener(targetFiber, reactName), null != _instance2 && listeners.push(
      createDispatchListener(targetFiber, _instance2, stateNode)
    ));
    if (3 === targetFiber.tag) return listeners;
    targetFiber = targetFiber.return;
  }
  return [];
}
function getParent(inst) {
  if (null === inst) return null;
  do
    inst = inst.return;
  while (inst && 5 !== inst.tag && 27 !== inst.tag);
  return inst ? inst : null;
}
function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common, inCapturePhase) {
  for (var registrationName = event._reactName, listeners = []; null !== target && target !== common; ) {
    var _instance3 = target, alternate = _instance3.alternate, stateNode = _instance3.stateNode;
    _instance3 = _instance3.tag;
    if (null !== alternate && alternate === common) break;
    5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3 || null === stateNode || (alternate = stateNode, inCapturePhase ? (stateNode = getListener(target, registrationName), null != stateNode && listeners.unshift(
      createDispatchListener(target, stateNode, alternate)
    )) : inCapturePhase || (stateNode = getListener(target, registrationName), null != stateNode && listeners.push(
      createDispatchListener(target, stateNode, alternate)
    )));
    target = target.return;
  }
  0 !== listeners.length && dispatchQueue.push({ event, listeners });
}
var NORMALIZE_NEWLINES_REGEX = /\r\n?/g, NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
function normalizeMarkupForTextOrAttribute(markup) {
  return ("string" === typeof markup ? markup : "" + markup).replace(NORMALIZE_NEWLINES_REGEX, "\n").replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
}
function checkForUnmatchedText(serverText, clientText) {
  clientText = normalizeMarkupForTextOrAttribute(clientText);
  return normalizeMarkupForTextOrAttribute(serverText) === clientText ? true : false;
}
function setProp(domElement, tag, key, value, props, prevValue) {
  switch (key) {
    case "children":
      "string" === typeof value ? "body" === tag || "textarea" === tag && "" === value || setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && "body" !== tag && setTextContent(domElement, "" + value);
      break;
    case "className":
      setValueForKnownAttribute(domElement, "class", value);
      break;
    case "tabIndex":
      setValueForKnownAttribute(domElement, "tabindex", value);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      setValueForKnownAttribute(domElement, key, value);
      break;
    case "style":
      setValueForStyles(domElement, value, prevValue);
      break;
    case "data":
      if ("object" !== tag) {
        setValueForKnownAttribute(domElement, "data", value);
        break;
      }
    case "src":
    case "href":
      if ("" === value && ("a" !== tag || "href" !== key)) {
        domElement.removeAttribute(key);
        break;
      }
      if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) {
        domElement.removeAttribute(key);
        break;
      }
      value = sanitizeURL("" + value);
      domElement.setAttribute(key, value);
      break;
    case "action":
    case "formAction":
      if ("function" === typeof value) {
        domElement.setAttribute(
          key,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        );
        break;
      } else
        "function" === typeof prevValue && ("formAction" === key ? ("input" !== tag && setProp(domElement, tag, "name", props.name, props, null), setProp(
          domElement,
          tag,
          "formEncType",
          props.formEncType,
          props,
          null
        ), setProp(
          domElement,
          tag,
          "formMethod",
          props.formMethod,
          props,
          null
        ), setProp(
          domElement,
          tag,
          "formTarget",
          props.formTarget,
          props,
          null
        )) : (setProp(domElement, tag, "encType", props.encType, props, null), setProp(domElement, tag, "method", props.method, props, null), setProp(domElement, tag, "target", props.target, props, null)));
      if (null == value || "symbol" === typeof value || "boolean" === typeof value) {
        domElement.removeAttribute(key);
        break;
      }
      value = sanitizeURL("" + value);
      domElement.setAttribute(key, value);
      break;
    case "onClick":
      null != value && (domElement.onclick = noop$1);
      break;
    case "onScroll":
      null != value && listenToNonDelegatedEvent("scroll", domElement);
      break;
    case "onScrollEnd":
      null != value && listenToNonDelegatedEvent("scrollend", domElement);
      break;
    case "dangerouslySetInnerHTML":
      if (null != value) {
        if ("object" !== typeof value || !("__html" in value))
          throw Error(formatProdErrorMessage(61));
        key = value.__html;
        if (null != key) {
          if (null != props.children) throw Error(formatProdErrorMessage(60));
          domElement.innerHTML = key;
        }
      }
      break;
    case "multiple":
      domElement.multiple = value && "function" !== typeof value && "symbol" !== typeof value;
      break;
    case "muted":
      domElement.muted = value && "function" !== typeof value && "symbol" !== typeof value;
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
      break;
    case "autoFocus":
      break;
    case "xlinkHref":
      if (null == value || "function" === typeof value || "boolean" === typeof value || "symbol" === typeof value) {
        domElement.removeAttribute("xlink:href");
        break;
      }
      key = sanitizeURL("" + value);
      domElement.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        key
      );
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "" + value) : domElement.removeAttribute(key);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "") : domElement.removeAttribute(key);
      break;
    case "capture":
    case "download":
      true === value ? domElement.setAttribute(key, "") : false !== value && null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      null != value && "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
      break;
    case "rowSpan":
    case "start":
      null == value || "function" === typeof value || "symbol" === typeof value || isNaN(value) ? domElement.removeAttribute(key) : domElement.setAttribute(key, value);
      break;
    case "popover":
      listenToNonDelegatedEvent("beforetoggle", domElement);
      listenToNonDelegatedEvent("toggle", domElement);
      setValueForAttribute(domElement, "popover", value);
      break;
    case "xlinkActuate":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:actuate",
        value
      );
      break;
    case "xlinkArcrole":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:arcrole",
        value
      );
      break;
    case "xlinkRole":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:role",
        value
      );
      break;
    case "xlinkShow":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:show",
        value
      );
      break;
    case "xlinkTitle":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:title",
        value
      );
      break;
    case "xlinkType":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:type",
        value
      );
      break;
    case "xmlBase":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:base",
        value
      );
      break;
    case "xmlLang":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:lang",
        value
      );
      break;
    case "xmlSpace":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:space",
        value
      );
      break;
    case "is":
      setValueForAttribute(domElement, "is", value);
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (!(2 < key.length) || "o" !== key[0] && "O" !== key[0] || "n" !== key[1] && "N" !== key[1])
        key = aliases.get(key) || key, setValueForAttribute(domElement, key, value);
  }
}
function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
  switch (key) {
    case "style":
      setValueForStyles(domElement, value, prevValue);
      break;
    case "dangerouslySetInnerHTML":
      if (null != value) {
        if ("object" !== typeof value || !("__html" in value))
          throw Error(formatProdErrorMessage(61));
        key = value.__html;
        if (null != key) {
          if (null != props.children) throw Error(formatProdErrorMessage(60));
          domElement.innerHTML = key;
        }
      }
      break;
    case "children":
      "string" === typeof value ? setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && setTextContent(domElement, "" + value);
      break;
    case "onScroll":
      null != value && listenToNonDelegatedEvent("scroll", domElement);
      break;
    case "onScrollEnd":
      null != value && listenToNonDelegatedEvent("scrollend", domElement);
      break;
    case "onClick":
      null != value && (domElement.onclick = noop$1);
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (!registrationNameDependencies.hasOwnProperty(key))
        a: {
          if ("o" === key[0] && "n" === key[1] && (props = key.endsWith("Capture"), tag = key.slice(2, props ? key.length - 7 : void 0), prevValue = domElement[internalPropsKey] || null, prevValue = null != prevValue ? prevValue[key] : null, "function" === typeof prevValue && domElement.removeEventListener(tag, prevValue, props), "function" === typeof value)) {
            "function" !== typeof prevValue && null !== prevValue && (key in domElement ? domElement[key] = null : domElement.hasAttribute(key) && domElement.removeAttribute(key));
            domElement.addEventListener(tag, value, props);
            break a;
          }
          key in domElement ? domElement[key] = value : true === value ? domElement.setAttribute(key, "") : setValueForAttribute(domElement, key, value);
        }
  }
}
function setInitialProperties(domElement, tag, props) {
  switch (tag) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "img":
      listenToNonDelegatedEvent("error", domElement);
      listenToNonDelegatedEvent("load", domElement);
      var hasSrc = false, hasSrcSet = false, propKey;
      for (propKey in props)
        if (props.hasOwnProperty(propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "src":
                hasSrc = true;
                break;
              case "srcSet":
                hasSrcSet = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(formatProdErrorMessage(137, tag));
              default:
                setProp(domElement, tag, propKey, propValue, props, null);
            }
        }
      hasSrcSet && setProp(domElement, tag, "srcSet", props.srcSet, props, null);
      hasSrc && setProp(domElement, tag, "src", props.src, props, null);
      return;
    case "input":
      listenToNonDelegatedEvent("invalid", domElement);
      var defaultValue = propKey = propValue = hasSrcSet = null, checked = null, defaultChecked = null;
      for (hasSrc in props)
        if (props.hasOwnProperty(hasSrc)) {
          var propValue$184 = props[hasSrc];
          if (null != propValue$184)
            switch (hasSrc) {
              case "name":
                hasSrcSet = propValue$184;
                break;
              case "type":
                propValue = propValue$184;
                break;
              case "checked":
                checked = propValue$184;
                break;
              case "defaultChecked":
                defaultChecked = propValue$184;
                break;
              case "value":
                propKey = propValue$184;
                break;
              case "defaultValue":
                defaultValue = propValue$184;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (null != propValue$184)
                  throw Error(formatProdErrorMessage(137, tag));
                break;
              default:
                setProp(domElement, tag, hasSrc, propValue$184, props, null);
            }
        }
      initInput(
        domElement,
        propKey,
        defaultValue,
        checked,
        defaultChecked,
        propValue,
        hasSrcSet,
        false
      );
      return;
    case "select":
      listenToNonDelegatedEvent("invalid", domElement);
      hasSrc = propValue = propKey = null;
      for (hasSrcSet in props)
        if (props.hasOwnProperty(hasSrcSet) && (defaultValue = props[hasSrcSet], null != defaultValue))
          switch (hasSrcSet) {
            case "value":
              propKey = defaultValue;
              break;
            case "defaultValue":
              propValue = defaultValue;
              break;
            case "multiple":
              hasSrc = defaultValue;
            default:
              setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
          }
      tag = propKey;
      props = propValue;
      domElement.multiple = !!hasSrc;
      null != tag ? updateOptions(domElement, !!hasSrc, tag, false) : null != props && updateOptions(domElement, !!hasSrc, props, true);
      return;
    case "textarea":
      listenToNonDelegatedEvent("invalid", domElement);
      propKey = hasSrcSet = hasSrc = null;
      for (propValue in props)
        if (props.hasOwnProperty(propValue) && (defaultValue = props[propValue], null != defaultValue))
          switch (propValue) {
            case "value":
              hasSrc = defaultValue;
              break;
            case "defaultValue":
              hasSrcSet = defaultValue;
              break;
            case "children":
              propKey = defaultValue;
              break;
            case "dangerouslySetInnerHTML":
              if (null != defaultValue) throw Error(formatProdErrorMessage(91));
              break;
            default:
              setProp(domElement, tag, propValue, defaultValue, props, null);
          }
      initTextarea(domElement, hasSrc, hasSrcSet, propKey);
      return;
    case "option":
      for (checked in props)
        if (props.hasOwnProperty(checked) && (hasSrc = props[checked], null != hasSrc))
          switch (checked) {
            case "selected":
              domElement.selected = hasSrc && "function" !== typeof hasSrc && "symbol" !== typeof hasSrc;
              break;
            default:
              setProp(domElement, tag, checked, hasSrc, props, null);
          }
      return;
    case "dialog":
      listenToNonDelegatedEvent("beforetoggle", domElement);
      listenToNonDelegatedEvent("toggle", domElement);
      listenToNonDelegatedEvent("cancel", domElement);
      listenToNonDelegatedEvent("close", domElement);
      break;
    case "iframe":
    case "object":
      listenToNonDelegatedEvent("load", domElement);
      break;
    case "video":
    case "audio":
      for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
        listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
      break;
    case "image":
      listenToNonDelegatedEvent("error", domElement);
      listenToNonDelegatedEvent("load", domElement);
      break;
    case "details":
      listenToNonDelegatedEvent("toggle", domElement);
      break;
    case "embed":
    case "source":
    case "link":
      listenToNonDelegatedEvent("error", domElement), listenToNonDelegatedEvent("load", domElement);
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
      for (defaultChecked in props)
        if (props.hasOwnProperty(defaultChecked) && (hasSrc = props[defaultChecked], null != hasSrc))
          switch (defaultChecked) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(formatProdErrorMessage(137, tag));
            default:
              setProp(domElement, tag, defaultChecked, hasSrc, props, null);
          }
      return;
    default:
      if (isCustomElement(tag)) {
        for (propValue$184 in props)
          props.hasOwnProperty(propValue$184) && (hasSrc = props[propValue$184], void 0 !== hasSrc && setPropOnCustomElement(
            domElement,
            tag,
            propValue$184,
            hasSrc,
            props,
            void 0
          ));
        return;
      }
  }
  for (defaultValue in props)
    props.hasOwnProperty(defaultValue) && (hasSrc = props[defaultValue], null != hasSrc && setProp(domElement, tag, defaultValue, hasSrc, props, null));
}
function updateProperties(domElement, tag, lastProps, nextProps) {
  switch (tag) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "input":
      var name = null, type = null, value = null, defaultValue = null, lastDefaultValue = null, checked = null, defaultChecked = null;
      for (propKey in lastProps) {
        var lastProp = lastProps[propKey];
        if (lastProps.hasOwnProperty(propKey) && null != lastProp)
          switch (propKey) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              lastDefaultValue = lastProp;
            default:
              nextProps.hasOwnProperty(propKey) || setProp(domElement, tag, propKey, null, nextProps, lastProp);
          }
      }
      for (var propKey$201 in nextProps) {
        var propKey = nextProps[propKey$201];
        lastProp = lastProps[propKey$201];
        if (nextProps.hasOwnProperty(propKey$201) && (null != propKey || null != lastProp))
          switch (propKey$201) {
            case "type":
              type = propKey;
              break;
            case "name":
              name = propKey;
              break;
            case "checked":
              checked = propKey;
              break;
            case "defaultChecked":
              defaultChecked = propKey;
              break;
            case "value":
              value = propKey;
              break;
            case "defaultValue":
              defaultValue = propKey;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (null != propKey)
                throw Error(formatProdErrorMessage(137, tag));
              break;
            default:
              propKey !== lastProp && setProp(
                domElement,
                tag,
                propKey$201,
                propKey,
                nextProps,
                lastProp
              );
          }
      }
      updateInput(
        domElement,
        value,
        defaultValue,
        lastDefaultValue,
        checked,
        defaultChecked,
        type,
        name
      );
      return;
    case "select":
      propKey = value = defaultValue = propKey$201 = null;
      for (type in lastProps)
        if (lastDefaultValue = lastProps[type], lastProps.hasOwnProperty(type) && null != lastDefaultValue)
          switch (type) {
            case "value":
              break;
            case "multiple":
              propKey = lastDefaultValue;
            default:
              nextProps.hasOwnProperty(type) || setProp(
                domElement,
                tag,
                type,
                null,
                nextProps,
                lastDefaultValue
              );
          }
      for (name in nextProps)
        if (type = nextProps[name], lastDefaultValue = lastProps[name], nextProps.hasOwnProperty(name) && (null != type || null != lastDefaultValue))
          switch (name) {
            case "value":
              propKey$201 = type;
              break;
            case "defaultValue":
              defaultValue = type;
              break;
            case "multiple":
              value = type;
            default:
              type !== lastDefaultValue && setProp(
                domElement,
                tag,
                name,
                type,
                nextProps,
                lastDefaultValue
              );
          }
      tag = defaultValue;
      lastProps = value;
      nextProps = propKey;
      null != propKey$201 ? updateOptions(domElement, !!lastProps, propKey$201, false) : !!nextProps !== !!lastProps && (null != tag ? updateOptions(domElement, !!lastProps, tag, true) : updateOptions(domElement, !!lastProps, lastProps ? [] : "", false));
      return;
    case "textarea":
      propKey = propKey$201 = null;
      for (defaultValue in lastProps)
        if (name = lastProps[defaultValue], lastProps.hasOwnProperty(defaultValue) && null != name && !nextProps.hasOwnProperty(defaultValue))
          switch (defaultValue) {
            case "value":
              break;
            case "children":
              break;
            default:
              setProp(domElement, tag, defaultValue, null, nextProps, name);
          }
      for (value in nextProps)
        if (name = nextProps[value], type = lastProps[value], nextProps.hasOwnProperty(value) && (null != name || null != type))
          switch (value) {
            case "value":
              propKey$201 = name;
              break;
            case "defaultValue":
              propKey = name;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (null != name) throw Error(formatProdErrorMessage(91));
              break;
            default:
              name !== type && setProp(domElement, tag, value, name, nextProps, type);
          }
      updateTextarea(domElement, propKey$201, propKey);
      return;
    case "option":
      for (var propKey$217 in lastProps)
        if (propKey$201 = lastProps[propKey$217], lastProps.hasOwnProperty(propKey$217) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$217))
          switch (propKey$217) {
            case "selected":
              domElement.selected = false;
              break;
            default:
              setProp(
                domElement,
                tag,
                propKey$217,
                null,
                nextProps,
                propKey$201
              );
          }
      for (lastDefaultValue in nextProps)
        if (propKey$201 = nextProps[lastDefaultValue], propKey = lastProps[lastDefaultValue], nextProps.hasOwnProperty(lastDefaultValue) && propKey$201 !== propKey && (null != propKey$201 || null != propKey))
          switch (lastDefaultValue) {
            case "selected":
              domElement.selected = propKey$201 && "function" !== typeof propKey$201 && "symbol" !== typeof propKey$201;
              break;
            default:
              setProp(
                domElement,
                tag,
                lastDefaultValue,
                propKey$201,
                nextProps,
                propKey
              );
          }
      return;
    case "img":
    case "link":
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
    case "menuitem":
      for (var propKey$222 in lastProps)
        propKey$201 = lastProps[propKey$222], lastProps.hasOwnProperty(propKey$222) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$222) && setProp(domElement, tag, propKey$222, null, nextProps, propKey$201);
      for (checked in nextProps)
        if (propKey$201 = nextProps[checked], propKey = lastProps[checked], nextProps.hasOwnProperty(checked) && propKey$201 !== propKey && (null != propKey$201 || null != propKey))
          switch (checked) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (null != propKey$201)
                throw Error(formatProdErrorMessage(137, tag));
              break;
            default:
              setProp(
                domElement,
                tag,
                checked,
                propKey$201,
                nextProps,
                propKey
              );
          }
      return;
    default:
      if (isCustomElement(tag)) {
        for (var propKey$227 in lastProps)
          propKey$201 = lastProps[propKey$227], lastProps.hasOwnProperty(propKey$227) && void 0 !== propKey$201 && !nextProps.hasOwnProperty(propKey$227) && setPropOnCustomElement(
            domElement,
            tag,
            propKey$227,
            void 0,
            nextProps,
            propKey$201
          );
        for (defaultChecked in nextProps)
          propKey$201 = nextProps[defaultChecked], propKey = lastProps[defaultChecked], !nextProps.hasOwnProperty(defaultChecked) || propKey$201 === propKey || void 0 === propKey$201 && void 0 === propKey || setPropOnCustomElement(
            domElement,
            tag,
            defaultChecked,
            propKey$201,
            nextProps,
            propKey
          );
        return;
      }
  }
  for (var propKey$232 in lastProps)
    propKey$201 = lastProps[propKey$232], lastProps.hasOwnProperty(propKey$232) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$232) && setProp(domElement, tag, propKey$232, null, nextProps, propKey$201);
  for (lastProp in nextProps)
    propKey$201 = nextProps[lastProp], propKey = lastProps[lastProp], !nextProps.hasOwnProperty(lastProp) || propKey$201 === propKey || null == propKey$201 && null == propKey || setProp(domElement, tag, lastProp, propKey$201, nextProps, propKey);
}
function isLikelyStaticResource(initiatorType) {
  switch (initiatorType) {
    case "css":
    case "script":
    case "font":
    case "img":
    case "image":
    case "input":
    case "link":
      return true;
    default:
      return false;
  }
}
function estimateBandwidth() {
  if ("function" === typeof performance.getEntriesByType) {
    for (var count = 0, bits = 0, resourceEntries = performance.getEntriesByType("resource"), i = 0; i < resourceEntries.length; i++) {
      var entry = resourceEntries[i], transferSize = entry.transferSize, initiatorType = entry.initiatorType, duration = entry.duration;
      if (transferSize && duration && isLikelyStaticResource(initiatorType)) {
        initiatorType = 0;
        duration = entry.responseEnd;
        for (i += 1; i < resourceEntries.length; i++) {
          var overlapEntry = resourceEntries[i], overlapStartTime = overlapEntry.startTime;
          if (overlapStartTime > duration) break;
          var overlapTransferSize = overlapEntry.transferSize, overlapInitiatorType = overlapEntry.initiatorType;
          overlapTransferSize && isLikelyStaticResource(overlapInitiatorType) && (overlapEntry = overlapEntry.responseEnd, initiatorType += overlapTransferSize * (overlapEntry < duration ? 1 : (duration - overlapStartTime) / (overlapEntry - overlapStartTime)));
        }
        --i;
        bits += 8 * (transferSize + initiatorType) / (entry.duration / 1e3);
        count++;
        if (10 < count) break;
      }
    }
    if (0 < count) return bits / count / 1e6;
  }
  return navigator.connection && (count = navigator.connection.downlink, "number" === typeof count) ? count : 5;
}
var eventsEnabled = null, selectionInformation = null;
function getOwnerDocumentFromRootContainer(rootContainerElement) {
  return 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
}
function getOwnHostContext(namespaceURI) {
  switch (namespaceURI) {
    case "http://www.w3.org/2000/svg":
      return 1;
    case "http://www.w3.org/1998/Math/MathML":
      return 2;
    default:
      return 0;
  }
}
function getChildHostContextProd(parentNamespace, type) {
  if (0 === parentNamespace)
    switch (type) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
  return 1 === parentNamespace && "foreignObject" === type ? 0 : parentNamespace;
}
function shouldSetTextContent(type, props) {
  return "textarea" === type || "noscript" === type || "string" === typeof props.children || "number" === typeof props.children || "bigint" === typeof props.children || "object" === typeof props.dangerouslySetInnerHTML && null !== props.dangerouslySetInnerHTML && null != props.dangerouslySetInnerHTML.__html;
}
var currentPopstateTransitionEvent = null;
function shouldAttemptEagerTransition() {
  var event = window.event;
  if (event && "popstate" === event.type) {
    if (event === currentPopstateTransitionEvent) return false;
    currentPopstateTransitionEvent = event;
    return true;
  }
  currentPopstateTransitionEvent = null;
  return false;
}
var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0, cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0, localPromise = "function" === typeof Promise ? Promise : void 0, scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof localPromise ? function(callback) {
  return localPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
} : scheduleTimeout;
function handleErrorInNextTick(error) {
  setTimeout(function() {
    throw error;
  });
}
function isSingletonScope(type) {
  return "head" === type;
}
function clearHydrationBoundary(parentInstance, hydrationInstance) {
  var node = hydrationInstance, depth = 0;
  do {
    var nextNode = node.nextSibling;
    parentInstance.removeChild(node);
    if (nextNode && 8 === nextNode.nodeType)
      if (node = nextNode.data, "/$" === node || "/&" === node) {
        if (0 === depth) {
          parentInstance.removeChild(nextNode);
          retryIfBlockedOn(hydrationInstance);
          return;
        }
        depth--;
      } else if ("$" === node || "$?" === node || "$~" === node || "$!" === node || "&" === node)
        depth++;
      else if ("html" === node)
        releaseSingletonInstance(parentInstance.ownerDocument.documentElement);
      else if ("head" === node) {
        node = parentInstance.ownerDocument.head;
        releaseSingletonInstance(node);
        for (var node$jscomp$0 = node.firstChild; node$jscomp$0; ) {
          var nextNode$jscomp$0 = node$jscomp$0.nextSibling, nodeName = node$jscomp$0.nodeName;
          node$jscomp$0[internalHoistableMarker] || "SCRIPT" === nodeName || "STYLE" === nodeName || "LINK" === nodeName && "stylesheet" === node$jscomp$0.rel.toLowerCase() || node.removeChild(node$jscomp$0);
          node$jscomp$0 = nextNode$jscomp$0;
        }
      } else
        "body" === node && releaseSingletonInstance(parentInstance.ownerDocument.body);
    node = nextNode;
  } while (node);
  retryIfBlockedOn(hydrationInstance);
}
function hideOrUnhideDehydratedBoundary(suspenseInstance, isHidden) {
  var node = suspenseInstance;
  suspenseInstance = 0;
  do {
    var nextNode = node.nextSibling;
    1 === node.nodeType ? isHidden ? (node._stashedDisplay = node.style.display, node.style.display = "none") : (node.style.display = node._stashedDisplay || "", "" === node.getAttribute("style") && node.removeAttribute("style")) : 3 === node.nodeType && (isHidden ? (node._stashedText = node.nodeValue, node.nodeValue = "") : node.nodeValue = node._stashedText || "");
    if (nextNode && 8 === nextNode.nodeType)
      if (node = nextNode.data, "/$" === node)
        if (0 === suspenseInstance) break;
        else suspenseInstance--;
      else
        "$" !== node && "$?" !== node && "$~" !== node && "$!" !== node || suspenseInstance++;
    node = nextNode;
  } while (node);
}
function clearContainerSparingly(container) {
  var nextNode = container.firstChild;
  nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
  for (; nextNode; ) {
    var node = nextNode;
    nextNode = nextNode.nextSibling;
    switch (node.nodeName) {
      case "HTML":
      case "HEAD":
      case "BODY":
        clearContainerSparingly(node);
        detachDeletedInstance(node);
        continue;
      case "SCRIPT":
      case "STYLE":
        continue;
      case "LINK":
        if ("stylesheet" === node.rel.toLowerCase()) continue;
    }
    container.removeChild(node);
  }
}
function canHydrateInstance(instance, type, props, inRootOrSingleton) {
  for (; 1 === instance.nodeType; ) {
    var anyProps = props;
    if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
      if (!inRootOrSingleton && ("INPUT" !== instance.nodeName || "hidden" !== instance.type))
        break;
    } else if (!inRootOrSingleton)
      if ("input" === type && "hidden" === instance.type) {
        var name = null == anyProps.name ? null : "" + anyProps.name;
        if ("hidden" === anyProps.type && instance.getAttribute("name") === name)
          return instance;
      } else return instance;
    else if (!instance[internalHoistableMarker])
      switch (type) {
        case "meta":
          if (!instance.hasAttribute("itemprop")) break;
          return instance;
        case "link":
          name = instance.getAttribute("rel");
          if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
            break;
          else if (name !== anyProps.rel || instance.getAttribute("href") !== (null == anyProps.href || "" === anyProps.href ? null : anyProps.href) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) || instance.getAttribute("title") !== (null == anyProps.title ? null : anyProps.title))
            break;
          return instance;
        case "style":
          if (instance.hasAttribute("data-precedence")) break;
          return instance;
        case "script":
          name = instance.getAttribute("src");
          if ((name !== (null == anyProps.src ? null : anyProps.src) || instance.getAttribute("type") !== (null == anyProps.type ? null : anyProps.type) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) && name && instance.hasAttribute("async") && !instance.hasAttribute("itemprop"))
            break;
          return instance;
        default:
          return instance;
      }
    instance = getNextHydratable(instance.nextSibling);
    if (null === instance) break;
  }
  return null;
}
function canHydrateTextInstance(instance, text, inRootOrSingleton) {
  if ("" === text) return null;
  for (; 3 !== instance.nodeType; ) {
    if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton)
      return null;
    instance = getNextHydratable(instance.nextSibling);
    if (null === instance) return null;
  }
  return instance;
}
function canHydrateHydrationBoundary(instance, inRootOrSingleton) {
  for (; 8 !== instance.nodeType; ) {
    if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton)
      return null;
    instance = getNextHydratable(instance.nextSibling);
    if (null === instance) return null;
  }
  return instance;
}
function isSuspenseInstancePending(instance) {
  return "$?" === instance.data || "$~" === instance.data;
}
function isSuspenseInstanceFallback(instance) {
  return "$!" === instance.data || "$?" === instance.data && "loading" !== instance.ownerDocument.readyState;
}
function registerSuspenseInstanceRetry(instance, callback) {
  var ownerDocument = instance.ownerDocument;
  if ("$~" === instance.data) instance._reactRetry = callback;
  else if ("$?" !== instance.data || "loading" !== ownerDocument.readyState)
    callback();
  else {
    var listener = function() {
      callback();
      ownerDocument.removeEventListener("DOMContentLoaded", listener);
    };
    ownerDocument.addEventListener("DOMContentLoaded", listener);
    instance._reactRetry = listener;
  }
}
function getNextHydratable(node) {
  for (; null != node; node = node.nextSibling) {
    var nodeType = node.nodeType;
    if (1 === nodeType || 3 === nodeType) break;
    if (8 === nodeType) {
      nodeType = node.data;
      if ("$" === nodeType || "$!" === nodeType || "$?" === nodeType || "$~" === nodeType || "&" === nodeType || "F!" === nodeType || "F" === nodeType)
        break;
      if ("/$" === nodeType || "/&" === nodeType) return null;
    }
  }
  return node;
}
var previousHydratableOnEnteringScopedSingleton = null;
function getNextHydratableInstanceAfterHydrationBoundary(hydrationInstance) {
  hydrationInstance = hydrationInstance.nextSibling;
  for (var depth = 0; hydrationInstance; ) {
    if (8 === hydrationInstance.nodeType) {
      var data = hydrationInstance.data;
      if ("/$" === data || "/&" === data) {
        if (0 === depth)
          return getNextHydratable(hydrationInstance.nextSibling);
        depth--;
      } else
        "$" !== data && "$!" !== data && "$?" !== data && "$~" !== data && "&" !== data || depth++;
    }
    hydrationInstance = hydrationInstance.nextSibling;
  }
  return null;
}
function getParentHydrationBoundary(targetInstance) {
  targetInstance = targetInstance.previousSibling;
  for (var depth = 0; targetInstance; ) {
    if (8 === targetInstance.nodeType) {
      var data = targetInstance.data;
      if ("$" === data || "$!" === data || "$?" === data || "$~" === data || "&" === data) {
        if (0 === depth) return targetInstance;
        depth--;
      } else "/$" !== data && "/&" !== data || depth++;
    }
    targetInstance = targetInstance.previousSibling;
  }
  return null;
}
function resolveSingletonInstance(type, props, rootContainerInstance) {
  props = getOwnerDocumentFromRootContainer(rootContainerInstance);
  switch (type) {
    case "html":
      type = props.documentElement;
      if (!type) throw Error(formatProdErrorMessage(452));
      return type;
    case "head":
      type = props.head;
      if (!type) throw Error(formatProdErrorMessage(453));
      return type;
    case "body":
      type = props.body;
      if (!type) throw Error(formatProdErrorMessage(454));
      return type;
    default:
      throw Error(formatProdErrorMessage(451));
  }
}
function releaseSingletonInstance(instance) {
  for (var attributes = instance.attributes; attributes.length; )
    instance.removeAttributeNode(attributes[0]);
  detachDeletedInstance(instance);
}
var preloadPropsMap = /* @__PURE__ */ new Map(), preconnectsSet = /* @__PURE__ */ new Set();
function getHoistableRoot(container) {
  return "function" === typeof container.getRootNode ? container.getRootNode() : 9 === container.nodeType ? container : container.ownerDocument;
}
var previousDispatcher = ReactDOMSharedInternals.d;
ReactDOMSharedInternals.d = {
  f: flushSyncWork,
  r: requestFormReset,
  D: prefetchDNS,
  C: preconnect,
  L: preload,
  m: preloadModule,
  X: preinitScript,
  S: preinitStyle,
  M: preinitModuleScript
};
function flushSyncWork() {
  var previousWasRendering = previousDispatcher.f(), wasRendering = flushSyncWork$1();
  return previousWasRendering || wasRendering;
}
function requestFormReset(form) {
  var formInst = getInstanceFromNode(form);
  null !== formInst && 5 === formInst.tag && "form" === formInst.type ? requestFormReset$1(formInst) : previousDispatcher.r(form);
}
var globalDocument = "undefined" === typeof document ? null : document;
function preconnectAs(rel, href, crossOrigin) {
  var ownerDocument = globalDocument;
  if (ownerDocument && "string" === typeof href && href) {
    var limitedEscapedHref = escapeSelectorAttributeValueInsideDoubleQuotes(href);
    limitedEscapedHref = 'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
    "string" === typeof crossOrigin && (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
    preconnectsSet.has(limitedEscapedHref) || (preconnectsSet.add(limitedEscapedHref), rel = { rel, crossOrigin, href }, null === ownerDocument.querySelector(limitedEscapedHref) && (href = ownerDocument.createElement("link"), setInitialProperties(href, "link", rel), markNodeAsHoistable(href), ownerDocument.head.appendChild(href)));
  }
}
function prefetchDNS(href) {
  previousDispatcher.D(href);
  preconnectAs("dns-prefetch", href, null);
}
function preconnect(href, crossOrigin) {
  previousDispatcher.C(href, crossOrigin);
  preconnectAs("preconnect", href, crossOrigin);
}
function preload(href, as, options) {
  previousDispatcher.L(href, as, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && href && as) {
    var preloadSelector = 'link[rel="preload"][as="' + escapeSelectorAttributeValueInsideDoubleQuotes(as) + '"]';
    "image" === as ? options && options.imageSrcSet ? (preloadSelector += '[imagesrcset="' + escapeSelectorAttributeValueInsideDoubleQuotes(
      options.imageSrcSet
    ) + '"]', "string" === typeof options.imageSizes && (preloadSelector += '[imagesizes="' + escapeSelectorAttributeValueInsideDoubleQuotes(
      options.imageSizes
    ) + '"]')) : preloadSelector += '[href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]' : preloadSelector += '[href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]';
    var key = preloadSelector;
    switch (as) {
      case "style":
        key = getStyleKey(href);
        break;
      case "script":
        key = getScriptKey(href);
    }
    preloadPropsMap.has(key) || (href = assign(
      {
        rel: "preload",
        href: "image" === as && options && options.imageSrcSet ? void 0 : href,
        as
      },
      options
    ), preloadPropsMap.set(key, href), null !== ownerDocument.querySelector(preloadSelector) || "style" === as && ownerDocument.querySelector(getStylesheetSelectorFromKey(key)) || "script" === as && ownerDocument.querySelector(getScriptSelectorFromKey(key)) || (as = ownerDocument.createElement("link"), setInitialProperties(as, "link", href), markNodeAsHoistable(as), ownerDocument.head.appendChild(as)));
  }
}
function preloadModule(href, options) {
  previousDispatcher.m(href, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && href) {
    var as = options && "string" === typeof options.as ? options.as : "script", preloadSelector = 'link[rel="modulepreload"][as="' + escapeSelectorAttributeValueInsideDoubleQuotes(as) + '"][href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]', key = preloadSelector;
    switch (as) {
      case "audioworklet":
      case "paintworklet":
      case "serviceworker":
      case "sharedworker":
      case "worker":
      case "script":
        key = getScriptKey(href);
    }
    if (!preloadPropsMap.has(key) && (href = assign({ rel: "modulepreload", href }, options), preloadPropsMap.set(key, href), null === ownerDocument.querySelector(preloadSelector))) {
      switch (as) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
            return;
      }
      as = ownerDocument.createElement("link");
      setInitialProperties(as, "link", href);
      markNodeAsHoistable(as);
      ownerDocument.head.appendChild(as);
    }
  }
}
function preinitStyle(href, precedence, options) {
  previousDispatcher.S(href, precedence, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && href) {
    var styles = getResourcesFromRoot(ownerDocument).hoistableStyles, key = getStyleKey(href);
    precedence = precedence || "default";
    var resource = styles.get(key);
    if (!resource) {
      var state = { loading: 0, preload: null };
      if (resource = ownerDocument.querySelector(
        getStylesheetSelectorFromKey(key)
      ))
        state.loading = 5;
      else {
        href = assign(
          { rel: "stylesheet", href, "data-precedence": precedence },
          options
        );
        (options = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(href, options);
        var link = resource = ownerDocument.createElement("link");
        markNodeAsHoistable(link);
        setInitialProperties(link, "link", href);
        link._p = new Promise(function(resolve, reject) {
          link.onload = resolve;
          link.onerror = reject;
        });
        link.addEventListener("load", function() {
          state.loading |= 1;
        });
        link.addEventListener("error", function() {
          state.loading |= 2;
        });
        state.loading |= 4;
        insertStylesheet(resource, precedence, ownerDocument);
      }
      resource = {
        type: "stylesheet",
        instance: resource,
        count: 1,
        state
      };
      styles.set(key, resource);
    }
  }
}
function preinitScript(src, options) {
  previousDispatcher.X(src, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && src) {
    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
    resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({ src, async: true }, options), (options = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
      type: "script",
      instance: resource,
      count: 1,
      state: null
    }, scripts.set(key, resource));
  }
}
function preinitModuleScript(src, options) {
  previousDispatcher.M(src, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && src) {
    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
    resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({ src, async: true, type: "module" }, options), (options = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
      type: "script",
      instance: resource,
      count: 1,
      state: null
    }, scripts.set(key, resource));
  }
}
function getResource(type, currentProps, pendingProps, currentResource) {
  var JSCompiler_inline_result = (JSCompiler_inline_result = rootInstanceStackCursor.current) ? getHoistableRoot(JSCompiler_inline_result) : null;
  if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
  switch (type) {
    case "meta":
    case "title":
      return null;
    case "style":
      return "string" === typeof pendingProps.precedence && "string" === typeof pendingProps.href ? (currentProps = getStyleKey(pendingProps.href), pendingProps = getResourcesFromRoot(
        JSCompiler_inline_result
      ).hoistableStyles, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
        type: "style",
        instance: null,
        count: 0,
        state: null
      }, pendingProps.set(currentProps, currentResource)), currentResource) : { type: "void", instance: null, count: 0, state: null };
    case "link":
      if ("stylesheet" === pendingProps.rel && "string" === typeof pendingProps.href && "string" === typeof pendingProps.precedence) {
        type = getStyleKey(pendingProps.href);
        var styles$243 = getResourcesFromRoot(
          JSCompiler_inline_result
        ).hoistableStyles, resource$244 = styles$243.get(type);
        resource$244 || (JSCompiler_inline_result = JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result, resource$244 = {
          type: "stylesheet",
          instance: null,
          count: 0,
          state: { loading: 0, preload: null }
        }, styles$243.set(type, resource$244), (styles$243 = JSCompiler_inline_result.querySelector(
          getStylesheetSelectorFromKey(type)
        )) && !styles$243._p && (resource$244.instance = styles$243, resource$244.state.loading = 5), preloadPropsMap.has(type) || (pendingProps = {
          rel: "preload",
          as: "style",
          href: pendingProps.href,
          crossOrigin: pendingProps.crossOrigin,
          integrity: pendingProps.integrity,
          media: pendingProps.media,
          hrefLang: pendingProps.hrefLang,
          referrerPolicy: pendingProps.referrerPolicy
        }, preloadPropsMap.set(type, pendingProps), styles$243 || preloadStylesheet(
          JSCompiler_inline_result,
          type,
          pendingProps,
          resource$244.state
        )));
        if (currentProps && null === currentResource)
          throw Error(formatProdErrorMessage(528, ""));
        return resource$244;
      }
      if (currentProps && null !== currentResource)
        throw Error(formatProdErrorMessage(529, ""));
      return null;
    case "script":
      return currentProps = pendingProps.async, pendingProps = pendingProps.src, "string" === typeof pendingProps && currentProps && "function" !== typeof currentProps && "symbol" !== typeof currentProps ? (currentProps = getScriptKey(pendingProps), pendingProps = getResourcesFromRoot(
        JSCompiler_inline_result
      ).hoistableScripts, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
        type: "script",
        instance: null,
        count: 0,
        state: null
      }, pendingProps.set(currentProps, currentResource)), currentResource) : { type: "void", instance: null, count: 0, state: null };
    default:
      throw Error(formatProdErrorMessage(444, type));
  }
}
function getStyleKey(href) {
  return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
}
function getStylesheetSelectorFromKey(key) {
  return 'link[rel="stylesheet"][' + key + "]";
}
function stylesheetPropsFromRawProps(rawProps) {
  return assign({}, rawProps, {
    "data-precedence": rawProps.precedence,
    precedence: null
  });
}
function preloadStylesheet(ownerDocument, key, preloadProps, state) {
  ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]") ? state.loading = 1 : (key = ownerDocument.createElement("link"), state.preload = key, key.addEventListener("load", function() {
    return state.loading |= 1;
  }), key.addEventListener("error", function() {
    return state.loading |= 2;
  }), setInitialProperties(key, "link", preloadProps), markNodeAsHoistable(key), ownerDocument.head.appendChild(key));
}
function getScriptKey(src) {
  return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
}
function getScriptSelectorFromKey(key) {
  return "script[async]" + key;
}
function acquireResource(hoistableRoot, resource, props) {
  resource.count++;
  if (null === resource.instance)
    switch (resource.type) {
      case "style":
        var instance = hoistableRoot.querySelector(
          'style[data-href~="' + escapeSelectorAttributeValueInsideDoubleQuotes(props.href) + '"]'
        );
        if (instance)
          return resource.instance = instance, markNodeAsHoistable(instance), instance;
        var styleProps = assign({}, props, {
          "data-href": props.href,
          "data-precedence": props.precedence,
          href: null,
          precedence: null
        });
        instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
          "style"
        );
        markNodeAsHoistable(instance);
        setInitialProperties(instance, "style", styleProps);
        insertStylesheet(instance, props.precedence, hoistableRoot);
        return resource.instance = instance;
      case "stylesheet":
        styleProps = getStyleKey(props.href);
        var instance$249 = hoistableRoot.querySelector(
          getStylesheetSelectorFromKey(styleProps)
        );
        if (instance$249)
          return resource.state.loading |= 4, resource.instance = instance$249, markNodeAsHoistable(instance$249), instance$249;
        instance = stylesheetPropsFromRawProps(props);
        (styleProps = preloadPropsMap.get(styleProps)) && adoptPreloadPropsForStylesheet(instance, styleProps);
        instance$249 = (hoistableRoot.ownerDocument || hoistableRoot).createElement("link");
        markNodeAsHoistable(instance$249);
        var linkInstance = instance$249;
        linkInstance._p = new Promise(function(resolve, reject) {
          linkInstance.onload = resolve;
          linkInstance.onerror = reject;
        });
        setInitialProperties(instance$249, "link", instance);
        resource.state.loading |= 4;
        insertStylesheet(instance$249, props.precedence, hoistableRoot);
        return resource.instance = instance$249;
      case "script":
        instance$249 = getScriptKey(props.src);
        if (styleProps = hoistableRoot.querySelector(
          getScriptSelectorFromKey(instance$249)
        ))
          return resource.instance = styleProps, markNodeAsHoistable(styleProps), styleProps;
        instance = props;
        if (styleProps = preloadPropsMap.get(instance$249))
          instance = assign({}, props), adoptPreloadPropsForScript(instance, styleProps);
        hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
        styleProps = hoistableRoot.createElement("script");
        markNodeAsHoistable(styleProps);
        setInitialProperties(styleProps, "link", instance);
        hoistableRoot.head.appendChild(styleProps);
        return resource.instance = styleProps;
      case "void":
        return null;
      default:
        throw Error(formatProdErrorMessage(443, resource.type));
    }
  else
    "stylesheet" === resource.type && 0 === (resource.state.loading & 4) && (instance = resource.instance, resource.state.loading |= 4, insertStylesheet(instance, props.precedence, hoistableRoot));
  return resource.instance;
}
function insertStylesheet(instance, precedence, root2) {
  for (var nodes = root2.querySelectorAll(
    'link[rel="stylesheet"][data-precedence],style[data-precedence]'
  ), last = nodes.length ? nodes[nodes.length - 1] : null, prior = last, i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node.dataset.precedence === precedence) prior = node;
    else if (prior !== last) break;
  }
  prior ? prior.parentNode.insertBefore(instance, prior.nextSibling) : (precedence = 9 === root2.nodeType ? root2.head : root2, precedence.insertBefore(instance, precedence.firstChild));
}
function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
  null == stylesheetProps.crossOrigin && (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
  null == stylesheetProps.referrerPolicy && (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
  null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
}
function adoptPreloadPropsForScript(scriptProps, preloadProps) {
  null == scriptProps.crossOrigin && (scriptProps.crossOrigin = preloadProps.crossOrigin);
  null == scriptProps.referrerPolicy && (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
  null == scriptProps.integrity && (scriptProps.integrity = preloadProps.integrity);
}
var tagCaches = null;
function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
  if (null === tagCaches) {
    var cache = /* @__PURE__ */ new Map();
    var caches = tagCaches = /* @__PURE__ */ new Map();
    caches.set(ownerDocument, cache);
  } else
    caches = tagCaches, cache = caches.get(ownerDocument), cache || (cache = /* @__PURE__ */ new Map(), caches.set(ownerDocument, cache));
  if (cache.has(type)) return cache;
  cache.set(type, null);
  ownerDocument = ownerDocument.getElementsByTagName(type);
  for (caches = 0; caches < ownerDocument.length; caches++) {
    var node = ownerDocument[caches];
    if (!(node[internalHoistableMarker] || node[internalInstanceKey] || "link" === type && "stylesheet" === node.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== node.namespaceURI) {
      var nodeKey = node.getAttribute(keyAttribute) || "";
      nodeKey = type + nodeKey;
      var existing = cache.get(nodeKey);
      existing ? existing.push(node) : cache.set(nodeKey, [node]);
    }
  }
  return cache;
}
function mountHoistable(hoistableRoot, type, instance) {
  hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
  hoistableRoot.head.insertBefore(
    instance,
    "title" === type ? hoistableRoot.querySelector("head > title") : null
  );
}
function isHostHoistableType(type, props, hostContext) {
  if (1 === hostContext || null != props.itemProp) return false;
  switch (type) {
    case "meta":
    case "title":
      return true;
    case "style":
      if ("string" !== typeof props.precedence || "string" !== typeof props.href || "" === props.href)
        break;
      return true;
    case "link":
      if ("string" !== typeof props.rel || "string" !== typeof props.href || "" === props.href || props.onLoad || props.onError)
        break;
      switch (props.rel) {
        case "stylesheet":
          return type = props.disabled, "string" === typeof props.precedence && null == type;
        default:
          return true;
      }
    case "script":
      if (props.async && "function" !== typeof props.async && "symbol" !== typeof props.async && !props.onLoad && !props.onError && props.src && "string" === typeof props.src)
        return true;
  }
  return false;
}
function preloadResource(resource) {
  return "stylesheet" === resource.type && 0 === (resource.state.loading & 3) ? false : true;
}
function suspendResource(state, hoistableRoot, resource, props) {
  if ("stylesheet" === resource.type && ("string" !== typeof props.media || false !== matchMedia(props.media).matches) && 0 === (resource.state.loading & 4)) {
    if (null === resource.instance) {
      var key = getStyleKey(props.href), instance = hoistableRoot.querySelector(
        getStylesheetSelectorFromKey(key)
      );
      if (instance) {
        hoistableRoot = instance._p;
        null !== hoistableRoot && "object" === typeof hoistableRoot && "function" === typeof hoistableRoot.then && (state.count++, state = onUnsuspend.bind(state), hoistableRoot.then(state, state));
        resource.state.loading |= 4;
        resource.instance = instance;
        markNodeAsHoistable(instance);
        return;
      }
      instance = hoistableRoot.ownerDocument || hoistableRoot;
      props = stylesheetPropsFromRawProps(props);
      (key = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(props, key);
      instance = instance.createElement("link");
      markNodeAsHoistable(instance);
      var linkInstance = instance;
      linkInstance._p = new Promise(function(resolve, reject) {
        linkInstance.onload = resolve;
        linkInstance.onerror = reject;
      });
      setInitialProperties(instance, "link", props);
      resource.instance = instance;
    }
    null === state.stylesheets && (state.stylesheets = /* @__PURE__ */ new Map());
    state.stylesheets.set(resource, hoistableRoot);
    (hoistableRoot = resource.state.preload) && 0 === (resource.state.loading & 3) && (state.count++, resource = onUnsuspend.bind(state), hoistableRoot.addEventListener("load", resource), hoistableRoot.addEventListener("error", resource));
  }
}
var estimatedBytesWithinLimit = 0;
function waitForCommitToBeReady(state, timeoutOffset) {
  state.stylesheets && 0 === state.count && insertSuspendedStylesheets(state, state.stylesheets);
  return 0 < state.count || 0 < state.imgCount ? function(commit) {
    var stylesheetTimer = setTimeout(function() {
      state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets);
      if (state.unsuspend) {
        var unsuspend = state.unsuspend;
        state.unsuspend = null;
        unsuspend();
      }
    }, 6e4 + timeoutOffset);
    0 < state.imgBytes && 0 === estimatedBytesWithinLimit && (estimatedBytesWithinLimit = 62500 * estimateBandwidth());
    var imgTimer = setTimeout(
      function() {
        state.waitingForImages = false;
        if (0 === state.count && (state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets), state.unsuspend)) {
          var unsuspend = state.unsuspend;
          state.unsuspend = null;
          unsuspend();
        }
      },
      (state.imgBytes > estimatedBytesWithinLimit ? 50 : 800) + timeoutOffset
    );
    state.unsuspend = commit;
    return function() {
      state.unsuspend = null;
      clearTimeout(stylesheetTimer);
      clearTimeout(imgTimer);
    };
  } : null;
}
function onUnsuspend() {
  this.count--;
  if (0 === this.count && (0 === this.imgCount || !this.waitingForImages)) {
    if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
    else if (this.unsuspend) {
      var unsuspend = this.unsuspend;
      this.unsuspend = null;
      unsuspend();
    }
  }
}
var precedencesByRoot = null;
function insertSuspendedStylesheets(state, resources) {
  state.stylesheets = null;
  null !== state.unsuspend && (state.count++, precedencesByRoot = /* @__PURE__ */ new Map(), resources.forEach(insertStylesheetIntoRoot, state), precedencesByRoot = null, onUnsuspend.call(state));
}
function insertStylesheetIntoRoot(root2, resource) {
  if (!(resource.state.loading & 4)) {
    var precedences = precedencesByRoot.get(root2);
    if (precedences) var last = precedences.get(null);
    else {
      precedences = /* @__PURE__ */ new Map();
      precedencesByRoot.set(root2, precedences);
      for (var nodes = root2.querySelectorAll(
        "link[data-precedence],style[data-precedence]"
      ), i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if ("LINK" === node.nodeName || "not all" !== node.getAttribute("media"))
          precedences.set(node.dataset.precedence, node), last = node;
      }
      last && precedences.set(null, last);
    }
    nodes = resource.instance;
    node = nodes.getAttribute("data-precedence");
    i = precedences.get(node) || last;
    i === last && precedences.set(null, nodes);
    precedences.set(node, nodes);
    this.count++;
    last = onUnsuspend.bind(this);
    nodes.addEventListener("load", last);
    nodes.addEventListener("error", last);
    i ? i.parentNode.insertBefore(nodes, i.nextSibling) : (root2 = 9 === root2.nodeType ? root2.head : root2, root2.insertBefore(nodes, root2.firstChild));
    resource.state.loading |= 4;
  }
}
var HostTransitionContext = {
  $$typeof: REACT_CONTEXT_TYPE,
  Provider: null,
  Consumer: null,
  _currentValue: sharedNotPendingObject,
  _currentValue2: sharedNotPendingObject,
  _threadCount: 0
};
function FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator, formState) {
  this.tag = 1;
  this.containerInfo = containerInfo;
  this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
  this.callbackPriority = 0;
  this.expirationTimes = createLaneMap(-1);
  this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = createLaneMap(0);
  this.hiddenUpdates = createLaneMap(null);
  this.identifierPrefix = identifierPrefix;
  this.onUncaughtError = onUncaughtError;
  this.onCaughtError = onCaughtError;
  this.onRecoverableError = onRecoverableError;
  this.pooledCache = null;
  this.pooledCacheLanes = 0;
  this.formState = formState;
  this.incompleteTransitions = /* @__PURE__ */ new Map();
}
function createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, identifierPrefix, formState, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator) {
  containerInfo = new FiberRootNode(
    containerInfo,
    tag,
    hydrate,
    identifierPrefix,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    onDefaultTransitionIndicator,
    formState
  );
  tag = 1;
  true === isStrictMode && (tag |= 24);
  isStrictMode = createFiberImplClass(3, null, null, tag);
  containerInfo.current = isStrictMode;
  isStrictMode.stateNode = containerInfo;
  tag = createCache();
  tag.refCount++;
  containerInfo.pooledCache = tag;
  tag.refCount++;
  isStrictMode.memoizedState = {
    element: initialChildren,
    isDehydrated: hydrate,
    cache: tag
  };
  initializeUpdateQueue(isStrictMode);
  return containerInfo;
}
function getContextForSubtree(parentComponent) {
  if (!parentComponent) return emptyContextObject;
  parentComponent = emptyContextObject;
  return parentComponent;
}
function updateContainerImpl(rootFiber, lane, element, container, parentComponent, callback) {
  parentComponent = getContextForSubtree(parentComponent);
  null === container.context ? container.context = parentComponent : container.pendingContext = parentComponent;
  container = createUpdate(lane);
  container.payload = { element };
  callback = void 0 === callback ? null : callback;
  null !== callback && (container.callback = callback);
  element = enqueueUpdate(rootFiber, container, lane);
  null !== element && (scheduleUpdateOnFiber(element, rootFiber, lane), entangleTransitions(element, rootFiber, lane));
}
function markRetryLaneImpl(fiber, retryLane) {
  fiber = fiber.memoizedState;
  if (null !== fiber && null !== fiber.dehydrated) {
    var a = fiber.retryLane;
    fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
  }
}
function markRetryLaneIfNotHydrated(fiber, retryLane) {
  markRetryLaneImpl(fiber, retryLane);
  (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
}
function attemptContinuousHydration(fiber) {
  if (13 === fiber.tag || 31 === fiber.tag) {
    var root2 = enqueueConcurrentRenderForLane(fiber, 67108864);
    null !== root2 && scheduleUpdateOnFiber(root2, fiber, 67108864);
    markRetryLaneIfNotHydrated(fiber, 67108864);
  }
}
function attemptHydrationAtCurrentPriority(fiber) {
  if (13 === fiber.tag || 31 === fiber.tag) {
    var lane = requestUpdateLane();
    lane = getBumpedLaneForHydrationByLane(lane);
    var root2 = enqueueConcurrentRenderForLane(fiber, lane);
    null !== root2 && scheduleUpdateOnFiber(root2, fiber, lane);
    markRetryLaneIfNotHydrated(fiber, lane);
  }
}
var _enabled$1 = true;
function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
  var prevTransition = ReactSharedInternals.T;
  ReactSharedInternals.T = null;
  var previousPriority = ReactDOMSharedInternals.p;
  try {
    ReactDOMSharedInternals.p = 2, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
  }
}
function dispatchContinuousEvent(domEventName, eventSystemFlags, container, nativeEvent) {
  var prevTransition = ReactSharedInternals.T;
  ReactSharedInternals.T = null;
  var previousPriority = ReactDOMSharedInternals.p;
  try {
    ReactDOMSharedInternals.p = 8, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
  }
}
function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
  if (_enabled$1) {
    var blockedOn = findInstanceBlockingEvent(nativeEvent);
    if (null === blockedOn)
      dispatchEventForPluginEventSystem(
        domEventName,
        eventSystemFlags,
        nativeEvent,
        return_targetInst,
        targetContainer
      ), clearIfContinuousEvent(domEventName, nativeEvent);
    else if (queueIfContinuousEvent(
      blockedOn,
      domEventName,
      eventSystemFlags,
      targetContainer,
      nativeEvent
    ))
      nativeEvent.stopPropagation();
    else if (clearIfContinuousEvent(domEventName, nativeEvent), eventSystemFlags & 4 && -1 < discreteReplayableEvents.indexOf(domEventName)) {
      for (; null !== blockedOn; ) {
        var fiber = getInstanceFromNode(blockedOn);
        if (null !== fiber)
          switch (fiber.tag) {
            case 3:
              fiber = fiber.stateNode;
              if (fiber.current.memoizedState.isDehydrated) {
                var lanes = getHighestPriorityLanes(fiber.pendingLanes);
                if (0 !== lanes) {
                  var root2 = fiber;
                  root2.pendingLanes |= 2;
                  for (root2.entangledLanes |= 2; lanes; ) {
                    var lane = 1 << 31 - clz32(lanes);
                    root2.entanglements[1] |= lane;
                    lanes &= ~lane;
                  }
                  ensureRootIsScheduled(fiber);
                  0 === (executionContext & 6) && (workInProgressRootRenderTargetTime = now() + 500, flushSyncWorkAcrossRoots_impl(0));
                }
              }
              break;
            case 31:
            case 13:
              root2 = enqueueConcurrentRenderForLane(fiber, 2), null !== root2 && scheduleUpdateOnFiber(root2, fiber, 2), flushSyncWork$1(), markRetryLaneIfNotHydrated(fiber, 2);
          }
        fiber = findInstanceBlockingEvent(nativeEvent);
        null === fiber && dispatchEventForPluginEventSystem(
          domEventName,
          eventSystemFlags,
          nativeEvent,
          return_targetInst,
          targetContainer
        );
        if (fiber === blockedOn) break;
        blockedOn = fiber;
      }
      null !== blockedOn && nativeEvent.stopPropagation();
    } else
      dispatchEventForPluginEventSystem(
        domEventName,
        eventSystemFlags,
        nativeEvent,
        null,
        targetContainer
      );
  }
}
function findInstanceBlockingEvent(nativeEvent) {
  nativeEvent = getEventTarget(nativeEvent);
  return findInstanceBlockingTarget(nativeEvent);
}
var return_targetInst = null;
function findInstanceBlockingTarget(targetNode) {
  return_targetInst = null;
  targetNode = getClosestInstanceFromNode(targetNode);
  if (null !== targetNode) {
    var nearestMounted = getNearestMountedFiber(targetNode);
    if (null === nearestMounted) targetNode = null;
    else {
      var tag = nearestMounted.tag;
      if (13 === tag) {
        targetNode = getSuspenseInstanceFromFiber(nearestMounted);
        if (null !== targetNode) return targetNode;
        targetNode = null;
      } else if (31 === tag) {
        targetNode = getActivityInstanceFromFiber(nearestMounted);
        if (null !== targetNode) return targetNode;
        targetNode = null;
      } else if (3 === tag) {
        if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
          return 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
        targetNode = null;
      } else nearestMounted !== targetNode && (targetNode = null);
    }
  }
  return_targetInst = targetNode;
  return null;
}
function getEventPriority(domEventName) {
  switch (domEventName) {
    case "beforetoggle":
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "toggle":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 2;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 8;
    case "message":
      switch (getCurrentPriorityLevel()) {
        case ImmediatePriority:
          return 2;
        case UserBlockingPriority:
          return 8;
        case NormalPriority$1:
        case LowPriority:
          return 32;
        case IdlePriority:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var hasScheduledReplayAttempt = false, queuedFocus = null, queuedDrag = null, queuedMouse = null, queuedPointers = /* @__PURE__ */ new Map(), queuedPointerCaptures = /* @__PURE__ */ new Map(), queuedExplicitHydrationTargets = [], discreteReplayableEvents = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
  " "
);
function clearIfContinuousEvent(domEventName, nativeEvent) {
  switch (domEventName) {
    case "focusin":
    case "focusout":
      queuedFocus = null;
      break;
    case "dragenter":
    case "dragleave":
      queuedDrag = null;
      break;
    case "mouseover":
    case "mouseout":
      queuedMouse = null;
      break;
    case "pointerover":
    case "pointerout":
      queuedPointers.delete(nativeEvent.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      queuedPointerCaptures.delete(nativeEvent.pointerId);
  }
}
function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
  if (null === existingQueuedEvent || existingQueuedEvent.nativeEvent !== nativeEvent)
    return existingQueuedEvent = {
      blockedOn,
      domEventName,
      eventSystemFlags,
      nativeEvent,
      targetContainers: [targetContainer]
    }, null !== blockedOn && (blockedOn = getInstanceFromNode(blockedOn), null !== blockedOn && attemptContinuousHydration(blockedOn)), existingQueuedEvent;
  existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
  blockedOn = existingQueuedEvent.targetContainers;
  null !== targetContainer && -1 === blockedOn.indexOf(targetContainer) && blockedOn.push(targetContainer);
  return existingQueuedEvent;
}
function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
  switch (domEventName) {
    case "focusin":
      return queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
        queuedFocus,
        blockedOn,
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      ), true;
    case "dragenter":
      return queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
        queuedDrag,
        blockedOn,
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      ), true;
    case "mouseover":
      return queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
        queuedMouse,
        blockedOn,
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      ), true;
    case "pointerover":
      var pointerId = nativeEvent.pointerId;
      queuedPointers.set(
        pointerId,
        accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedPointers.get(pointerId) || null,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )
      );
      return true;
    case "gotpointercapture":
      return pointerId = nativeEvent.pointerId, queuedPointerCaptures.set(
        pointerId,
        accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedPointerCaptures.get(pointerId) || null,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )
      ), true;
  }
  return false;
}
function attemptExplicitHydrationTarget(queuedTarget) {
  var targetInst = getClosestInstanceFromNode(queuedTarget.target);
  if (null !== targetInst) {
    var nearestMounted = getNearestMountedFiber(targetInst);
    if (null !== nearestMounted) {
      if (targetInst = nearestMounted.tag, 13 === targetInst) {
        if (targetInst = getSuspenseInstanceFromFiber(nearestMounted), null !== targetInst) {
          queuedTarget.blockedOn = targetInst;
          runWithPriority(queuedTarget.priority, function() {
            attemptHydrationAtCurrentPriority(nearestMounted);
          });
          return;
        }
      } else if (31 === targetInst) {
        if (targetInst = getActivityInstanceFromFiber(nearestMounted), null !== targetInst) {
          queuedTarget.blockedOn = targetInst;
          runWithPriority(queuedTarget.priority, function() {
            attemptHydrationAtCurrentPriority(nearestMounted);
          });
          return;
        }
      } else if (3 === targetInst && nearestMounted.stateNode.current.memoizedState.isDehydrated) {
        queuedTarget.blockedOn = 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
        return;
      }
    }
  }
  queuedTarget.blockedOn = null;
}
function attemptReplayContinuousQueuedEvent(queuedEvent) {
  if (null !== queuedEvent.blockedOn) return false;
  for (var targetContainers = queuedEvent.targetContainers; 0 < targetContainers.length; ) {
    var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
    if (null === nextBlockedOn) {
      nextBlockedOn = queuedEvent.nativeEvent;
      var nativeEventClone = new nextBlockedOn.constructor(
        nextBlockedOn.type,
        nextBlockedOn
      );
      currentReplayingEvent = nativeEventClone;
      nextBlockedOn.target.dispatchEvent(nativeEventClone);
      currentReplayingEvent = null;
    } else
      return targetContainers = getInstanceFromNode(nextBlockedOn), null !== targetContainers && attemptContinuousHydration(targetContainers), queuedEvent.blockedOn = nextBlockedOn, false;
    targetContainers.shift();
  }
  return true;
}
function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
  attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
}
function replayUnblockedEvents() {
  hasScheduledReplayAttempt = false;
  null !== queuedFocus && attemptReplayContinuousQueuedEvent(queuedFocus) && (queuedFocus = null);
  null !== queuedDrag && attemptReplayContinuousQueuedEvent(queuedDrag) && (queuedDrag = null);
  null !== queuedMouse && attemptReplayContinuousQueuedEvent(queuedMouse) && (queuedMouse = null);
  queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
  queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
}
function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
  queuedEvent.blockedOn === unblocked && (queuedEvent.blockedOn = null, hasScheduledReplayAttempt || (hasScheduledReplayAttempt = true, Scheduler.unstable_scheduleCallback(
    Scheduler.unstable_NormalPriority,
    replayUnblockedEvents
  )));
}
var lastScheduledReplayQueue = null;
function scheduleReplayQueueIfNeeded(formReplayingQueue) {
  lastScheduledReplayQueue !== formReplayingQueue && (lastScheduledReplayQueue = formReplayingQueue, Scheduler.unstable_scheduleCallback(
    Scheduler.unstable_NormalPriority,
    function() {
      lastScheduledReplayQueue === formReplayingQueue && (lastScheduledReplayQueue = null);
      for (var i = 0; i < formReplayingQueue.length; i += 3) {
        var form = formReplayingQueue[i], submitterOrAction = formReplayingQueue[i + 1], formData = formReplayingQueue[i + 2];
        if ("function" !== typeof submitterOrAction)
          if (null === findInstanceBlockingTarget(submitterOrAction || form))
            continue;
          else break;
        var formInst = getInstanceFromNode(form);
        null !== formInst && (formReplayingQueue.splice(i, 3), i -= 3, startHostTransition(
          formInst,
          {
            pending: true,
            data: formData,
            method: form.method,
            action: submitterOrAction
          },
          submitterOrAction,
          formData
        ));
      }
    }
  ));
}
function retryIfBlockedOn(unblocked) {
  function unblock(queuedEvent) {
    return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
  }
  null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
  null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
  null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
  queuedPointers.forEach(unblock);
  queuedPointerCaptures.forEach(unblock);
  for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
    var queuedTarget = queuedExplicitHydrationTargets[i];
    queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
  }
  for (; 0 < queuedExplicitHydrationTargets.length && (i = queuedExplicitHydrationTargets[0], null === i.blockedOn); )
    attemptExplicitHydrationTarget(i), null === i.blockedOn && queuedExplicitHydrationTargets.shift();
  i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
  if (null != i)
    for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
      var form = i[queuedTarget], submitterOrAction = i[queuedTarget + 1], formProps = form[internalPropsKey] || null;
      if ("function" === typeof submitterOrAction)
        formProps || scheduleReplayQueueIfNeeded(i);
      else if (formProps) {
        var action = null;
        if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
          if (form = submitterOrAction, formProps = submitterOrAction[internalPropsKey] || null)
            action = formProps.formAction;
          else {
            if (null !== findInstanceBlockingTarget(form)) continue;
          }
        else action = formProps.action;
        "function" === typeof action ? i[queuedTarget + 1] = action : (i.splice(queuedTarget, 3), queuedTarget -= 3);
        scheduleReplayQueueIfNeeded(i);
      }
    }
}
function defaultOnDefaultTransitionIndicator() {
  function handleNavigate(event) {
    event.canIntercept && "react-transition" === event.info && event.intercept({
      handler: function() {
        return new Promise(function(resolve) {
          return pendingResolve = resolve;
        });
      },
      focusReset: "manual",
      scroll: "manual"
    });
  }
  function handleNavigateComplete() {
    null !== pendingResolve && (pendingResolve(), pendingResolve = null);
    isCancelled || setTimeout(startFakeNavigation, 20);
  }
  function startFakeNavigation() {
    if (!isCancelled && !navigation.transition) {
      var currentEntry = navigation.currentEntry;
      currentEntry && null != currentEntry.url && navigation.navigate(currentEntry.url, {
        state: currentEntry.getState(),
        info: "react-transition",
        history: "replace"
      });
    }
  }
  if ("object" === typeof navigation) {
    var isCancelled = false, pendingResolve = null;
    navigation.addEventListener("navigate", handleNavigate);
    navigation.addEventListener("navigatesuccess", handleNavigateComplete);
    navigation.addEventListener("navigateerror", handleNavigateComplete);
    setTimeout(startFakeNavigation, 100);
    return function() {
      isCancelled = true;
      navigation.removeEventListener("navigate", handleNavigate);
      navigation.removeEventListener("navigatesuccess", handleNavigateComplete);
      navigation.removeEventListener("navigateerror", handleNavigateComplete);
      null !== pendingResolve && (pendingResolve(), pendingResolve = null);
    };
  }
}
function ReactDOMRoot(internalRoot) {
  this._internalRoot = internalRoot;
}
ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render = function(children) {
  var root2 = this._internalRoot;
  if (null === root2) throw Error(formatProdErrorMessage(409));
  var current = root2.current, lane = requestUpdateLane();
  updateContainerImpl(current, lane, children, root2, null, null);
};
ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount = function() {
  var root2 = this._internalRoot;
  if (null !== root2) {
    this._internalRoot = null;
    var container = root2.containerInfo;
    updateContainerImpl(root2.current, 2, null, root2, null, null);
    flushSyncWork$1();
    container[internalContainerInstanceKey] = null;
  }
};
function ReactDOMHydrationRoot(internalRoot) {
  this._internalRoot = internalRoot;
}
ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function(target) {
  if (target) {
    var updatePriority = resolveUpdatePriority();
    target = { blockedOn: null, target, priority: updatePriority };
    for (var i = 0; i < queuedExplicitHydrationTargets.length && 0 !== updatePriority && updatePriority < queuedExplicitHydrationTargets[i].priority; i++) ;
    queuedExplicitHydrationTargets.splice(i, 0, target);
    0 === i && attemptExplicitHydrationTarget(target);
  }
};
var isomorphicReactPackageVersion$jscomp$inline_1840 = React.version;
if ("19.2.7" !== isomorphicReactPackageVersion$jscomp$inline_1840)
  throw Error(
    formatProdErrorMessage(
      527,
      isomorphicReactPackageVersion$jscomp$inline_1840,
      "19.2.7"
    )
  );
ReactDOMSharedInternals.findDOMNode = function(componentOrElement) {
  var fiber = componentOrElement._reactInternals;
  if (void 0 === fiber) {
    if ("function" === typeof componentOrElement.render)
      throw Error(formatProdErrorMessage(188));
    componentOrElement = Object.keys(componentOrElement).join(",");
    throw Error(formatProdErrorMessage(268, componentOrElement));
  }
  componentOrElement = findCurrentFiberUsingSlowPath(fiber);
  componentOrElement = null !== componentOrElement ? findCurrentHostFiberImpl(componentOrElement) : null;
  componentOrElement = null === componentOrElement ? null : componentOrElement.stateNode;
  return componentOrElement;
};
var internals$jscomp$inline_2347 = {
  bundleType: 0,
  version: "19.2.7",
  rendererPackageName: "react-dom",
  currentDispatcherRef: ReactSharedInternals,
  reconcilerVersion: "19.2.7"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var hook$jscomp$inline_2348 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hook$jscomp$inline_2348.isDisabled && hook$jscomp$inline_2348.supportsFiber)
    try {
      rendererID = hook$jscomp$inline_2348.inject(
        internals$jscomp$inline_2347
      ), injectedHook = hook$jscomp$inline_2348;
    } catch (err) {
    }
}
reactDomClient_production.createRoot = function(container, options) {
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
  var isStrictMode = false, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError;
  null !== options && void 0 !== options && (true === options.unstable_strictMode && (isStrictMode = true), void 0 !== options.identifierPrefix && (identifierPrefix = options.identifierPrefix), void 0 !== options.onUncaughtError && (onUncaughtError = options.onUncaughtError), void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError), void 0 !== options.onRecoverableError && (onRecoverableError = options.onRecoverableError));
  options = createFiberRoot(
    container,
    1,
    false,
    null,
    null,
    isStrictMode,
    identifierPrefix,
    null,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    defaultOnDefaultTransitionIndicator
  );
  container[internalContainerInstanceKey] = options.current;
  listenToAllSupportedEvents(container);
  return new ReactDOMRoot(options);
};
reactDomClient_production.hydrateRoot = function(container, initialChildren, options) {
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
  var isStrictMode = false, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError, formState = null;
  null !== options && void 0 !== options && (true === options.unstable_strictMode && (isStrictMode = true), void 0 !== options.identifierPrefix && (identifierPrefix = options.identifierPrefix), void 0 !== options.onUncaughtError && (onUncaughtError = options.onUncaughtError), void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError), void 0 !== options.onRecoverableError && (onRecoverableError = options.onRecoverableError), void 0 !== options.formState && (formState = options.formState));
  initialChildren = createFiberRoot(
    container,
    1,
    true,
    initialChildren,
    null != options ? options : null,
    isStrictMode,
    identifierPrefix,
    formState,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    defaultOnDefaultTransitionIndicator
  );
  initialChildren.context = getContextForSubtree(null);
  options = initialChildren.current;
  isStrictMode = requestUpdateLane();
  isStrictMode = getBumpedLaneForHydrationByLane(isStrictMode);
  identifierPrefix = createUpdate(isStrictMode);
  identifierPrefix.callback = null;
  enqueueUpdate(options, identifierPrefix, isStrictMode);
  options = isStrictMode;
  initialChildren.current.lanes = options;
  markRootUpdated$1(initialChildren, options);
  ensureRootIsScheduled(initialChildren);
  container[internalContainerInstanceKey] = initialChildren.current;
  listenToAllSupportedEvents(container);
  return new ReactDOMHydrationRoot(initialChildren);
};
reactDomClient_production.version = "19.2.7";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  client.exports = reactDomClient_production;
}
var clientExports = client.exports;
const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(clientExports);
var version = "1.3.23";
function clamp$1(min, input, max) {
  return Math.max(min, Math.min(input, max));
}
function lerp(x, y, t) {
  return (1 - t) * x + t * y;
}
function damp(x, y, lambda, deltaTime) {
  return lerp(x, y, 1 - Math.exp(-lambda * deltaTime));
}
function modulo(n, d) {
  return (n % d + d) % d;
}
var Animate = class {
  constructor() {
    __publicField(this, "isRunning", false);
    __publicField(this, "value", 0);
    __publicField(this, "from", 0);
    __publicField(this, "to", 0);
    __publicField(this, "currentTime", 0);
    __publicField(this, "lerp");
    __publicField(this, "duration");
    __publicField(this, "easing");
    __publicField(this, "onUpdate");
  }
  /**
  * Advance the animation by the given delta time
  *
  * @param deltaTime - The time in seconds to advance the animation
  */
  advance(deltaTime) {
    var _a;
    if (!this.isRunning) return;
    let completed = false;
    if (this.duration && this.easing) {
      this.currentTime += deltaTime;
      const linearProgress = clamp$1(0, this.currentTime / this.duration, 1);
      completed = linearProgress >= 1;
      const easedProgress = completed ? 1 : this.easing(linearProgress);
      this.value = this.from + (this.to - this.from) * easedProgress;
    } else if (this.lerp) {
      this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
      if (Math.round(this.value) === Math.round(this.to)) {
        this.value = this.to;
        completed = true;
      }
    } else {
      this.value = this.to;
      completed = true;
    }
    if (completed) this.stop();
    (_a = this.onUpdate) == null ? void 0 : _a.call(this, this.value, completed);
  }
  /** Stop the animation */
  stop() {
    this.isRunning = false;
  }
  /**
  * Set up the animation from a starting value to an ending value
  * with optional parameters for lerping, duration, easing, and onUpdate callback
  *
  * @param from - The starting value
  * @param to - The ending value
  * @param options - Options for the animation
  */
  fromTo(from, to, { lerp: lerp2, duration, easing, onStart, onUpdate }) {
    this.from = this.value = from;
    this.to = to;
    this.lerp = lerp2;
    this.duration = duration;
    this.easing = easing;
    this.currentTime = 0;
    this.isRunning = true;
    onStart == null ? void 0 : onStart();
    this.onUpdate = onUpdate;
  }
};
function debounce(callback, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = void 0;
      callback.apply(this, args);
    }, delay);
  };
}
var Dimensions = class {
  constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}) {
    __publicField(this, "width", 0);
    __publicField(this, "height", 0);
    __publicField(this, "scrollHeight", 0);
    __publicField(this, "scrollWidth", 0);
    __publicField(this, "debouncedResize");
    __publicField(this, "wrapperResizeObserver");
    __publicField(this, "contentResizeObserver");
    __publicField(this, "resize", () => {
      this.onWrapperResize();
      this.onContentResize();
    });
    __publicField(this, "onWrapperResize", () => {
      if (this.wrapper instanceof Window) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      } else {
        this.width = this.wrapper.clientWidth;
        this.height = this.wrapper.clientHeight;
      }
    });
    __publicField(this, "onContentResize", () => {
      if (this.wrapper instanceof Window) {
        this.scrollHeight = this.content.scrollHeight;
        this.scrollWidth = this.content.scrollWidth;
      } else {
        this.scrollHeight = this.wrapper.scrollHeight;
        this.scrollWidth = this.wrapper.scrollWidth;
      }
    });
    this.wrapper = wrapper;
    this.content = content;
    if (autoResize) {
      this.debouncedResize = debounce(this.resize, debounceValue);
      if (this.wrapper instanceof Window) window.addEventListener("resize", this.debouncedResize);
      else {
        this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
        this.wrapperResizeObserver.observe(this.wrapper);
      }
      this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
      this.contentResizeObserver.observe(this.content);
    }
    this.resize();
  }
  destroy() {
    var _a, _b;
    (_a = this.wrapperResizeObserver) == null ? void 0 : _a.disconnect();
    (_b = this.contentResizeObserver) == null ? void 0 : _b.disconnect();
    if (this.wrapper === window && this.debouncedResize) window.removeEventListener("resize", this.debouncedResize);
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height
    };
  }
};
var Emitter = class {
  constructor() {
    __publicField(this, "events", {});
  }
  /**
  * Emit an event with the given data
  * @param event Event name
  * @param args Data to pass to the event handlers
  */
  emit(event, ...args) {
    var _a;
    const callbacks = this.events[event] || [];
    for (let i = 0, length = callbacks.length; i < length; i++) (_a = callbacks[i]) == null ? void 0 : _a.call(callbacks, ...args);
  }
  /**
  * Add a callback to the event
  * @param event Event name
  * @param cb Callback function
  * @returns Unsubscribe function
  */
  on(event, cb) {
    if (this.events[event]) this.events[event].push(cb);
    else this.events[event] = [cb];
    return () => {
      var _a;
      this.events[event] = (_a = this.events[event]) == null ? void 0 : _a.filter((i) => cb !== i);
    };
  }
  /**
  * Remove a callback from the event
  * @param event Event name
  * @param callback Callback function
  */
  off(event, callback) {
    var _a;
    this.events[event] = (_a = this.events[event]) == null ? void 0 : _a.filter((i) => callback !== i);
  }
  /**
  * Remove all event listeners and clean up
  */
  destroy() {
    this.events = {};
  }
};
const LINE_HEIGHT = 100 / 6;
const listenerOptions = { passive: false };
function getDeltaMultiplier(deltaMode, size) {
  if (deltaMode === 1) return LINE_HEIGHT;
  if (deltaMode === 2) return size;
  return 1;
}
var VirtualScroll = class {
  constructor(element, options = {
    wheelMultiplier: 1,
    touchMultiplier: 1
  }) {
    __publicField(this, "touchStart", {
      x: 0,
      y: 0
    });
    __publicField(this, "lastDelta", {
      x: 0,
      y: 0
    });
    __publicField(this, "window", {
      width: 0,
      height: 0
    });
    __publicField(this, "emitter", new Emitter());
    /**
    * Event handler for 'touchstart' event
    *
    * @param event Touch event
    */
    __publicField(this, "onTouchStart", (event) => {
      const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
      this.touchStart.x = clientX;
      this.touchStart.y = clientY;
      this.lastDelta = {
        x: 0,
        y: 0
      };
      this.emitter.emit("scroll", {
        deltaX: 0,
        deltaY: 0,
        event
      });
    });
    /** Event handler for 'touchmove' event */
    __publicField(this, "onTouchMove", (event) => {
      const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
      const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
      const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = clientX;
      this.touchStart.y = clientY;
      this.lastDelta = {
        x: deltaX,
        y: deltaY
      };
      this.emitter.emit("scroll", {
        deltaX,
        deltaY,
        event
      });
    });
    __publicField(this, "onTouchEnd", (event) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event
      });
    });
    /** Event handler for 'wheel' event */
    __publicField(this, "onWheel", (event) => {
      let { deltaX, deltaY, deltaMode } = event;
      const multiplierX = getDeltaMultiplier(deltaMode, this.window.width);
      const multiplierY = getDeltaMultiplier(deltaMode, this.window.height);
      deltaX *= multiplierX;
      deltaY *= multiplierY;
      deltaX *= this.options.wheelMultiplier;
      deltaY *= this.options.wheelMultiplier;
      this.emitter.emit("scroll", {
        deltaX,
        deltaY,
        event
      });
    });
    __publicField(this, "onWindowResize", () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    });
    this.element = element;
    this.options = options;
    window.addEventListener("resize", this.onWindowResize);
    this.onWindowResize();
    this.element.addEventListener("wheel", this.onWheel, listenerOptions);
    this.element.addEventListener("touchstart", this.onTouchStart, listenerOptions);
    this.element.addEventListener("touchmove", this.onTouchMove, listenerOptions);
    this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
  }
  /**
  * Add an event listener for the given event and callback
  *
  * @param event Event name
  * @param callback Callback function
  */
  on(event, callback) {
    return this.emitter.on(event, callback);
  }
  /** Remove all event listeners and clean up */
  destroy() {
    this.emitter.destroy();
    window.removeEventListener("resize", this.onWindowResize);
    this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
    this.element.removeEventListener("touchstart", this.onTouchStart, listenerOptions);
    this.element.removeEventListener("touchmove", this.onTouchMove, listenerOptions);
    this.element.removeEventListener("touchend", this.onTouchEnd, listenerOptions);
  }
};
const defaultEasing = (t) => Math.min(1, 1.001 - 2 ** (-10 * t));
var Lenis = class {
  constructor({ wrapper = window, content = document.documentElement, eventsTarget = wrapper, smoothWheel = true, syncTouch = false, syncTouchLerp = 0.075, touchInertiaExponent = 1.7, duration, easing, lerp: lerp2 = 0.1, infinite = false, orientation = "vertical", gestureOrientation = orientation === "horizontal" ? "both" : "vertical", touchMultiplier = 1, wheelMultiplier = 1, autoResize = true, prevent, virtualScroll, overscroll = true, autoRaf = false, anchors = false, autoToggle = false, allowNestedScroll = false, __experimental__naiveDimensions = false, naiveDimensions = __experimental__naiveDimensions, stopInertiaOnNavigate = false } = {}) {
    __publicField(this, "_isScrolling", false);
    __publicField(this, "_isStopped", false);
    __publicField(this, "_isLocked", false);
    __publicField(this, "_preventNextNativeScrollEvent", false);
    __publicField(this, "_resetVelocityTimeout", null);
    __publicField(this, "_rafId", null);
    /**
    * Whether or not the user is touching the screen
    */
    __publicField(this, "isTouching");
    /**
    * The time in ms since the lenis instance was created
    */
    __publicField(this, "time", 0);
    /**
    * User data that will be forwarded through the scroll event
    *
    * @example
    * lenis.scrollTo(100, {
    *   userData: {
    *     foo: 'bar'
    *   }
    * })
    */
    __publicField(this, "userData", {});
    /**
    * The last velocity of the scroll
    */
    __publicField(this, "lastVelocity", 0);
    /**
    * The current velocity of the scroll
    */
    __publicField(this, "velocity", 0);
    /**
    * The direction of the scroll
    */
    __publicField(this, "direction", 0);
    /**
    * The options passed to the lenis instance
    */
    __publicField(this, "options");
    /**
    * The target scroll value
    */
    __publicField(this, "targetScroll");
    /**
    * The animated scroll value
    */
    __publicField(this, "animatedScroll");
    __publicField(this, "animate", new Animate());
    __publicField(this, "emitter", new Emitter());
    __publicField(this, "dimensions");
    __publicField(this, "virtualScroll");
    __publicField(this, "onScrollEnd", (e) => {
      if (!(e instanceof CustomEvent)) {
        if (this.isScrolling === "smooth" || this.isScrolling === false) e.stopPropagation();
      }
    });
    __publicField(this, "dispatchScrollendEvent", () => {
      this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
        bubbles: this.options.wrapper === window,
        detail: { lenisScrollEnd: true }
      }));
    });
    __publicField(this, "onTransitionEnd", (event) => {
      var _a;
      if (((_a = event.propertyName) == null ? void 0 : _a.includes("overflow")) && event.target === this.rootElement) this.checkOverflow();
    });
    __publicField(this, "onClick", (event) => {
      const linkElementsUrls = event.composedPath().filter((node) => node instanceof HTMLAnchorElement && node.href).map((element) => new URL(element.href));
      const currentUrl = new URL(window.location.href);
      if (this.options.anchors) {
        const anchorElementUrl = linkElementsUrls.find((targetUrl) => currentUrl.host === targetUrl.host && currentUrl.pathname === targetUrl.pathname && targetUrl.hash);
        if (anchorElementUrl) {
          const options = typeof this.options.anchors === "object" && this.options.anchors ? this.options.anchors : void 0;
          const target = `#${anchorElementUrl.hash.split("#")[1]}`;
          this.scrollTo(target, options);
          return;
        }
      }
      if (this.options.stopInertiaOnNavigate) {
        if (linkElementsUrls.some((targetUrl) => currentUrl.host === targetUrl.host && currentUrl.pathname !== targetUrl.pathname)) {
          this.reset();
          return;
        }
      }
    });
    __publicField(this, "onPointerDown", (event) => {
      if (event.button === 1) this.reset();
    });
    __publicField(this, "onVirtualScroll", (data) => {
      if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false) return;
      const { deltaX, deltaY, event } = data;
      this.emitter.emit("virtual-scroll", {
        deltaX,
        deltaY,
        event
      });
      if (event.ctrlKey) return;
      if (event.lenisStopPropagation) return;
      const isTouch = event.type.includes("touch");
      const isWheel = event.type.includes("wheel");
      this.isTouching = event.type === "touchstart" || event.type === "touchmove";
      const isClickOrTap = deltaX === 0 && deltaY === 0;
      if (this.options.syncTouch && isTouch && event.type === "touchstart" && isClickOrTap && !this.isStopped && !this.isLocked) {
        this.reset();
        return;
      }
      const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
      if (isClickOrTap || isUnknownGesture) return;
      let composedPath = event.composedPath();
      composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
      const prevent = this.options.prevent;
      const gestureOrientation = Math.abs(deltaX) >= Math.abs(deltaY) ? "horizontal" : "vertical";
      if (composedPath.find((node) => {
        var _a, _b, _c, _d, _e;
        return node instanceof HTMLElement && (typeof prevent === "function" && (prevent == null ? void 0 : prevent(node)) || ((_a = node.hasAttribute) == null ? void 0 : _a.call(node, "data-lenis-prevent")) || gestureOrientation === "vertical" && ((_b = node.hasAttribute) == null ? void 0 : _b.call(node, "data-lenis-prevent-vertical")) || gestureOrientation === "horizontal" && ((_c = node.hasAttribute) == null ? void 0 : _c.call(node, "data-lenis-prevent-horizontal")) || isTouch && ((_d = node.hasAttribute) == null ? void 0 : _d.call(node, "data-lenis-prevent-touch")) || isWheel && ((_e = node.hasAttribute) == null ? void 0 : _e.call(node, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.hasNestedScroll(node, {
          deltaX,
          deltaY
        }));
      })) return;
      if (this.isStopped || this.isLocked) {
        if (event.cancelable) event.preventDefault();
        return;
      }
      if (!(this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel)) {
        this.isScrolling = "native";
        this.animate.stop();
        event.lenisStopPropagation = true;
        return;
      }
      let delta = deltaY;
      if (this.options.gestureOrientation === "both") delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
      else if (this.options.gestureOrientation === "horizontal") delta = deltaX;
      if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) event.lenisStopPropagation = true;
      if (event.cancelable) event.preventDefault();
      const isSyncTouch = isTouch && this.options.syncTouch;
      const hasTouchInertia = isTouch && event.type === "touchend";
      if (hasTouchInertia) delta = Math.sign(delta) * Math.abs(this.velocity) ** this.options.touchInertiaExponent;
      this.scrollTo(this.targetScroll + delta, {
        programmatic: false,
        ...isSyncTouch ? { lerp: hasTouchInertia ? this.options.syncTouchLerp : 1 } : {
          lerp: this.options.lerp,
          duration: this.options.duration,
          easing: this.options.easing
        }
      });
    });
    __publicField(this, "onNativeScroll", () => {
      if (this._resetVelocityTimeout !== null) {
        clearTimeout(this._resetVelocityTimeout);
        this._resetVelocityTimeout = null;
      }
      if (this._preventNextNativeScrollEvent) {
        this._preventNextNativeScrollEvent = false;
        return;
      }
      if (this.isScrolling === false || this.isScrolling === "native") {
        const lastScroll = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll;
        this.lastVelocity = this.velocity;
        this.velocity = this.animatedScroll - lastScroll;
        this.direction = Math.sign(this.animatedScroll - lastScroll);
        if (!this.isStopped) this.isScrolling = "native";
        this.emit();
        if (this.velocity !== 0) this._resetVelocityTimeout = setTimeout(() => {
          this.lastVelocity = this.velocity;
          this.velocity = 0;
          this.isScrolling = false;
          this.emit();
        }, 400);
      }
    });
    /**
    * RequestAnimationFrame for lenis
    *
    * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
    */
    __publicField(this, "raf", (time) => {
      const deltaTime = time - (this.time || time);
      this.time = time;
      this.animate.advance(deltaTime * 1e-3);
      if (this.options.autoRaf) this._rafId = requestAnimationFrame(this.raf);
    });
    window.lenisVersion = version;
    if (!window.lenis) window.lenis = {};
    window.lenis.version = version;
    if (orientation === "horizontal") window.lenis.horizontal = true;
    if (syncTouch === true) window.lenis.touch = true;
    if (!wrapper || wrapper === document.documentElement) wrapper = window;
    if (typeof duration === "number" && typeof easing !== "function") easing = defaultEasing;
    else if (typeof easing === "function" && typeof duration !== "number") duration = 1;
    this.options = {
      wrapper,
      content,
      eventsTarget,
      smoothWheel,
      syncTouch,
      syncTouchLerp,
      touchInertiaExponent,
      duration,
      easing,
      lerp: lerp2,
      infinite,
      gestureOrientation,
      orientation,
      touchMultiplier,
      wheelMultiplier,
      autoResize,
      prevent,
      virtualScroll,
      overscroll,
      autoRaf,
      anchors,
      autoToggle,
      allowNestedScroll,
      naiveDimensions,
      stopInertiaOnNavigate
    };
    this.dimensions = new Dimensions(wrapper, content, { autoResize });
    this.updateClassName();
    this.targetScroll = this.animatedScroll = this.actualScroll;
    this.options.wrapper.addEventListener("scroll", this.onNativeScroll);
    this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: true });
    if (this.options.anchors || this.options.stopInertiaOnNavigate) this.options.wrapper.addEventListener("click", this.onClick);
    this.options.wrapper.addEventListener("pointerdown", this.onPointerDown);
    this.virtualScroll = new VirtualScroll(eventsTarget, {
      touchMultiplier,
      wheelMultiplier
    });
    this.virtualScroll.on("scroll", this.onVirtualScroll);
    if (this.options.autoToggle) {
      this.checkOverflow();
      this.rootElement.addEventListener("transitionend", this.onTransitionEnd);
    }
    if (this.options.autoRaf) this._rafId = requestAnimationFrame(this.raf);
  }
  /**
  * Destroy the lenis instance, remove all event listeners and clean up the class name
  */
  destroy() {
    this.emitter.destroy();
    this.options.wrapper.removeEventListener("scroll", this.onNativeScroll);
    this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, { capture: true });
    this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown);
    if (this.options.anchors || this.options.stopInertiaOnNavigate) this.options.wrapper.removeEventListener("click", this.onClick);
    this.virtualScroll.destroy();
    this.dimensions.destroy();
    this.cleanUpClassName();
    if (this._rafId) cancelAnimationFrame(this._rafId);
  }
  on(event, callback) {
    return this.emitter.on(event, callback);
  }
  off(event, callback) {
    return this.emitter.off(event, callback);
  }
  get overflow() {
    const property = this.isHorizontal ? "overflow-x" : "overflow-y";
    return getComputedStyle(this.rootElement)[property];
  }
  checkOverflow() {
    if (["hidden", "clip"].includes(this.overflow)) this.internalStop();
    else this.internalStart();
  }
  setScroll(scroll) {
    if (this.isHorizontal) this.options.wrapper.scrollTo({
      left: scroll,
      behavior: "instant"
    });
    else this.options.wrapper.scrollTo({
      top: scroll,
      behavior: "instant"
    });
  }
  /**
  * Force lenis to recalculate the dimensions
  */
  resize() {
    this.dimensions.resize();
    this.animatedScroll = this.targetScroll = this.actualScroll;
    this.emit();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    this.isLocked = false;
    this.isScrolling = false;
    this.animatedScroll = this.targetScroll = this.actualScroll;
    this.lastVelocity = this.velocity = 0;
    this.animate.stop();
  }
  /**
  * Start lenis scroll after it has been stopped
  */
  start() {
    if (!this.isStopped) return;
    if (this.options.autoToggle) {
      this.rootElement.style.removeProperty("overflow");
      return;
    }
    this.internalStart();
  }
  internalStart() {
    if (!this.isStopped) return;
    this.reset();
    this.isStopped = false;
    this.emit();
  }
  /**
  * Stop lenis scroll
  */
  stop() {
    if (this.isStopped) return;
    if (this.options.autoToggle) {
      this.rootElement.style.setProperty("overflow", "clip");
      return;
    }
    this.internalStop();
  }
  internalStop() {
    if (this.isStopped) return;
    this.reset();
    this.isStopped = true;
    this.emit();
  }
  /**
  * Scroll to a target value
  *
  * @param target The target value to scroll to
  * @param options The options for the scroll
  *
  * @example
  * lenis.scrollTo(100, {
  *   offset: 100,
  *   duration: 1,
  *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
  *   lerp: 0.1,
  *   onStart: () => {
  *     console.log('onStart')
  *   },
  *   onComplete: () => {
  *     console.log('onComplete')
  *   },
  * })
  */
  scrollTo(_target, { offset = 0, immediate = false, lock = false, programmatic = true, lerp: lerp2 = programmatic ? this.options.lerp : void 0, duration = programmatic ? this.options.duration : void 0, easing = programmatic ? this.options.easing : void 0, onStart, onComplete, force = false, userData } = {}) {
    if ((this.isStopped || this.isLocked) && !force) return;
    let target = _target;
    let adjustedOffset = offset;
    if (typeof target === "string" && [
      "top",
      "left",
      "start",
      "#"
    ].includes(target)) target = 0;
    else if (typeof target === "string" && [
      "bottom",
      "right",
      "end"
    ].includes(target)) target = this.limit;
    else {
      let node = null;
      if (typeof target === "string") {
        node = document.querySelector(target);
        if (!node) if (target === "#top") target = 0;
        else console.warn("Lenis: Target not found", target);
      } else if (target instanceof HTMLElement && (target == null ? void 0 : target.nodeType)) node = target;
      if (node) {
        if (this.options.wrapper !== window) {
          const wrapperRect = this.rootElement.getBoundingClientRect();
          adjustedOffset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
        }
        const rect = node.getBoundingClientRect();
        const targetStyle = getComputedStyle(node);
        const scrollMargin = this.isHorizontal ? Number.parseFloat(targetStyle.scrollMarginLeft) : Number.parseFloat(targetStyle.scrollMarginTop);
        const containerStyle = getComputedStyle(this.rootElement);
        const scrollPadding = this.isHorizontal ? Number.parseFloat(containerStyle.scrollPaddingLeft) : Number.parseFloat(containerStyle.scrollPaddingTop);
        target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll - (Number.isNaN(scrollMargin) ? 0 : scrollMargin) - (Number.isNaN(scrollPadding) ? 0 : scrollPadding);
      }
    }
    if (typeof target !== "number") return;
    target += adjustedOffset;
    if (this.options.infinite) {
      if (programmatic) {
        this.targetScroll = this.animatedScroll = this.scroll;
        const distance = target - this.animatedScroll;
        if (distance > this.limit / 2) target -= this.limit;
        else if (distance < -this.limit / 2) target += this.limit;
      }
    } else target = clamp$1(0, target, this.limit);
    if (target === this.targetScroll) {
      onStart == null ? void 0 : onStart(this);
      onComplete == null ? void 0 : onComplete(this);
      return;
    }
    this.userData = userData ?? {};
    if (immediate) {
      this.animatedScroll = this.targetScroll = target;
      this.setScroll(this.scroll);
      this.reset();
      this.preventNextNativeScrollEvent();
      this.emit();
      onComplete == null ? void 0 : onComplete(this);
      this.userData = {};
      requestAnimationFrame(() => {
        this.dispatchScrollendEvent();
      });
      return;
    }
    if (!programmatic) this.targetScroll = target;
    if (typeof duration === "number" && typeof easing !== "function") easing = defaultEasing;
    else if (typeof easing === "function" && typeof duration !== "number") duration = 1;
    this.animate.fromTo(this.animatedScroll, target, {
      duration,
      easing,
      lerp: lerp2,
      onStart: () => {
        if (lock) this.isLocked = true;
        this.isScrolling = "smooth";
        onStart == null ? void 0 : onStart(this);
      },
      onUpdate: (value, completed) => {
        this.isScrolling = "smooth";
        this.lastVelocity = this.velocity;
        this.velocity = value - this.animatedScroll;
        this.direction = Math.sign(this.velocity);
        this.animatedScroll = value;
        this.setScroll(this.scroll);
        if (programmatic) this.targetScroll = value;
        if (!completed) this.emit();
        if (completed) {
          this.reset();
          this.emit();
          onComplete == null ? void 0 : onComplete(this);
          this.userData = {};
          requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          });
          this.preventNextNativeScrollEvent();
        }
      }
    });
  }
  preventNextNativeScrollEvent() {
    this._preventNextNativeScrollEvent = true;
    requestAnimationFrame(() => {
      this._preventNextNativeScrollEvent = false;
    });
  }
  hasNestedScroll(node, { deltaX, deltaY }) {
    const time = Date.now();
    if (!node._lenis) node._lenis = {};
    const cache = node._lenis;
    let hasOverflowX;
    let hasOverflowY;
    let isScrollableX;
    let isScrollableY;
    let hasOverscrollBehaviorX;
    let hasOverscrollBehaviorY;
    let scrollWidth;
    let scrollHeight;
    let clientWidth;
    let clientHeight;
    if (time - (cache.time ?? 0) > 2e3) {
      cache.time = Date.now();
      const computedStyle = window.getComputedStyle(node);
      cache.computedStyle = computedStyle;
      hasOverflowX = [
        "auto",
        "overlay",
        "scroll"
      ].includes(computedStyle.overflowX);
      hasOverflowY = [
        "auto",
        "overlay",
        "scroll"
      ].includes(computedStyle.overflowY);
      hasOverscrollBehaviorX = ["auto"].includes(computedStyle.overscrollBehaviorX);
      hasOverscrollBehaviorY = ["auto"].includes(computedStyle.overscrollBehaviorY);
      cache.hasOverflowX = hasOverflowX;
      cache.hasOverflowY = hasOverflowY;
      if (!(hasOverflowX || hasOverflowY)) return false;
      scrollWidth = node.scrollWidth;
      scrollHeight = node.scrollHeight;
      clientWidth = node.clientWidth;
      clientHeight = node.clientHeight;
      isScrollableX = scrollWidth > clientWidth;
      isScrollableY = scrollHeight > clientHeight;
      cache.isScrollableX = isScrollableX;
      cache.isScrollableY = isScrollableY;
      cache.scrollWidth = scrollWidth;
      cache.scrollHeight = scrollHeight;
      cache.clientWidth = clientWidth;
      cache.clientHeight = clientHeight;
      cache.hasOverscrollBehaviorX = hasOverscrollBehaviorX;
      cache.hasOverscrollBehaviorY = hasOverscrollBehaviorY;
    } else {
      isScrollableX = cache.isScrollableX;
      isScrollableY = cache.isScrollableY;
      hasOverflowX = cache.hasOverflowX;
      hasOverflowY = cache.hasOverflowY;
      scrollWidth = cache.scrollWidth;
      scrollHeight = cache.scrollHeight;
      clientWidth = cache.clientWidth;
      clientHeight = cache.clientHeight;
      hasOverscrollBehaviorX = cache.hasOverscrollBehaviorX;
      hasOverscrollBehaviorY = cache.hasOverscrollBehaviorY;
    }
    if (!(hasOverflowX && isScrollableX || hasOverflowY && isScrollableY)) return false;
    const orientation = Math.abs(deltaX) >= Math.abs(deltaY) ? "horizontal" : "vertical";
    let scroll;
    let maxScroll;
    let delta;
    let hasOverflow;
    let isScrollable;
    let hasOverscrollBehavior;
    if (orientation === "horizontal") {
      scroll = Math.round(node.scrollLeft);
      maxScroll = scrollWidth - clientWidth;
      delta = deltaX;
      hasOverflow = hasOverflowX;
      isScrollable = isScrollableX;
      hasOverscrollBehavior = hasOverscrollBehaviorX;
    } else if (orientation === "vertical") {
      scroll = Math.round(node.scrollTop);
      maxScroll = scrollHeight - clientHeight;
      delta = deltaY;
      hasOverflow = hasOverflowY;
      isScrollable = isScrollableY;
      hasOverscrollBehavior = hasOverscrollBehaviorY;
    } else return false;
    if (!hasOverscrollBehavior && (scroll >= maxScroll || scroll <= 0)) return true;
    return (delta > 0 ? scroll < maxScroll : scroll > 0) && hasOverflow && isScrollable;
  }
  /**
  * The root element on which lenis is instanced
  */
  get rootElement() {
    return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
  }
  /**
  * The limit which is the maximum scroll value
  */
  get limit() {
    if (this.options.naiveDimensions) {
      if (this.isHorizontal) return this.rootElement.scrollWidth - this.rootElement.clientWidth;
      return this.rootElement.scrollHeight - this.rootElement.clientHeight;
    }
    return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  /**
  * Whether or not the scroll is horizontal
  */
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  /**
  * The actual scroll value
  */
  get actualScroll() {
    const wrapper = this.options.wrapper;
    return this.isHorizontal ? wrapper.scrollX ?? wrapper.scrollLeft : wrapper.scrollY ?? wrapper.scrollTop;
  }
  /**
  * The current scroll value
  */
  get scroll() {
    return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
  }
  /**
  * The progress of the scroll relative to the limit
  */
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  /**
  * Current scroll state
  */
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(value) {
    if (this._isScrolling !== value) {
      this._isScrolling = value;
      this.updateClassName();
    }
  }
  /**
  * Check if lenis is stopped
  */
  get isStopped() {
    return this._isStopped;
  }
  set isStopped(value) {
    if (this._isStopped !== value) {
      this._isStopped = value;
      this.updateClassName();
    }
  }
  /**
  * Check if lenis is locked
  */
  get isLocked() {
    return this._isLocked;
  }
  set isLocked(value) {
    if (this._isLocked !== value) {
      this._isLocked = value;
      this.updateClassName();
    }
  }
  /**
  * Check if lenis is smooth scrolling
  */
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  /**
  * The class name applied to the wrapper element
  */
  get className() {
    let className = "lenis";
    if (this.options.autoToggle) className += " lenis-autoToggle";
    if (this.isStopped) className += " lenis-stopped";
    if (this.isLocked) className += " lenis-locked";
    if (this.isScrolling) className += " lenis-scrolling";
    if (this.isScrolling === "smooth") className += " lenis-smooth";
    return className;
  }
  updateClassName() {
    this.cleanUpClassName();
    this.className.split(" ").forEach((className) => {
      this.rootElement.classList.add(className);
    });
  }
  cleanUpClassName() {
    for (const className of Array.from(this.rootElement.classList)) if (className === "lenis" || className.startsWith("lenis-")) this.rootElement.classList.remove(className);
  }
};
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, _defaults$1 = {
  duration: 0.5,
  overwrite: false,
  delay: 0
}, _suppressOverwrites$1, _reverting$1, _context$2, _bigNum$1 = 1e8, _tinyNum = 1 / _bigNum$1, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString$1 = function _isString(value) {
  return typeof value === "string";
}, _isFunction$1 = function _isFunction(value) {
  return typeof value === "function";
}, _isNumber$1 = function _isNumber(value) {
  return typeof value === "number";
}, _isUndefined = function _isUndefined2(value) {
  return typeof value === "undefined";
}, _isObject$1 = function _isObject(value) {
  return typeof value === "object";
}, _isNotFalse = function _isNotFalse2(value) {
  return value !== false;
}, _windowExists$2 = function _windowExists() {
  return typeof window !== "undefined";
}, _isFuncOrString = function _isFuncOrString2(value) {
  return _isFunction$1(value) || _isString$1(value);
}, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
}, _isArray = Array.isArray, _randomExp = /random\([^)]+\)/g, _commaDelimExp = /,\s*/g, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win$3, _coreInitted$2, _doc$3, _globals = {}, _installScope = {}, _coreReady, _install = function _install2(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap$2;
}, _missingPlugin = function _missingPlugin2(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, _warn = function _warn2(message, suppress) {
  return !suppress && console.warn(message);
}, _addGlobal = function _addGlobal2(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
}, _emptyFunc = function _emptyFunc2() {
  return 0;
}, _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true,
  kill: false
}, _revertConfigNoKill = {
  suppressEvents: true,
  kill: false
}, _revertConfig = {
  suppressEvents: true
}, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness2(targets) {
  var target = targets[0], harnessPlugin, i;
  _isObject$1(target) || _isFunction$1(target) || (targets = [targets]);
  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    i = _harnessPlugins.length;
    while (i-- && !_harnessPlugins[i].targetTest(target)) {
    }
    harnessPlugin = _harnessPlugins[i];
  }
  i = targets.length;
  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }
  return targets;
}, _getCache = function _getCache2(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
}, _getProperty = function _getProperty2(target, property, v) {
  return (v = target[property]) && _isFunction$1(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
}, _forEachName = function _forEachName2(names, func) {
  return (names = names.split(",")).forEach(func) || names;
}, _round$1 = function _round(value) {
  return Math.round(value * 1e5) / 1e5 || 0;
}, _roundPrecise = function _roundPrecise2(value) {
  return Math.round(value * 1e7) / 1e7 || 0;
}, _parseRelative = function _parseRelative2(start, value) {
  var operator = value.charAt(0), end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
}, _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
  var l = toFind.length, i = 0;
  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
  }
  return i < l;
}, _lazyRender = function _lazyRender2() {
  var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
  _lazyLookup = {};
  _lazyTweens.length = 0;
  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
}, _isRevertWorthy = function _isRevertWorthy2(animation) {
  return !!(animation._initted || animation._startAt || animation.add);
}, _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
  _lazyTweens.length && !_reverting$1 && _lazyRender();
  animation.render(time, suppressEvents, !!(_reverting$1 && time < 0 && _isRevertWorthy(animation)));
  _lazyTweens.length && !_reverting$1 && _lazyRender();
}, _numericIfPossible = function _numericIfPossible2(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString$1(value) ? value.trim() : value;
}, _passThrough$1 = function _passThrough(p) {
  return p;
}, _setDefaults$1 = function _setDefaults(obj, defaults2) {
  for (var p in defaults2) {
    p in obj || (obj[p] = defaults2[p]);
  }
  return obj;
}, _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
  return function(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
    }
  };
}, _merge = function _merge2(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }
  return base;
}, _mergeDeep = function _mergeDeep2(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject$1(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }
  return base;
}, _copyExcluding = function _copyExcluding2(obj, excluding) {
  var copy = {}, p;
  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }
  return copy;
}, _inheritDefaults = function _inheritDefaults2(vars) {
  var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults$1;
  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }
  return vars;
}, _arraysMatch = function _arraysMatch2(a1, a2) {
  var i = a1.length, match = i === a2.length;
  while (match && i-- && a1[i] === a2[i]) {
  }
  return i < 0;
}, _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
  var prev = parent[lastProp], t;
  if (sortBy) {
    t = child[sortBy];
    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }
  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }
  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }
  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
}, _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }
  if (lastProp === void 0) {
    lastProp = "_last";
  }
  var prev = child._prev, next = child._next;
  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }
  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }
  child._next = child._prev = child.parent = null;
}, _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
  child._act = 0;
}, _uncache = function _uncache2(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    var a = animation;
    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }
  return animation;
}, _recacheAncestors = function _recacheAncestors2(animation) {
  var parent = animation.parent;
  while (parent && parent.parent) {
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }
  return animation;
}, _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting$1 ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
}, _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
}, _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, _animationCycle = function _animationCycle2(tTime, cycleDuration) {
  var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
  return tTime && whole === tTime ? whole - 1 : whole;
}, _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, _setEnd = function _setEnd2(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
}, _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
  var parent = animation._dp;
  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
    _setEnd(animation);
    parent._dirty || _uncache(parent, animation);
  }
  return animation;
}, _postAddChecks = function _postAddChecks2(timeline2, child) {
  var t;
  if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
    t = _parentToChildTotalTime(timeline2.rawTime(), child);
    if (!child._dur || _clamp$1(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  }
  if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
    if (timeline2._dur < timeline2.duration()) {
      t = timeline2;
      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime);
        t = t._dp;
      }
    }
    timeline2._zTime = -_tinyNum;
  }
}, _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber$1(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition$1(timeline2, position, child) : timeline2._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
  _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
  _isFromOrFromStart(child) || (timeline2._recent = child);
  skipChecks || _postAddChecks(timeline2, child);
  timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
  return timeline2;
}, _scrollTrigger = function _scrollTrigger2(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
}, _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
  _initTween(tween, time, tTime);
  if (!tween._initted) {
    return 1;
  }
  if (!force && tween._pt && !_reverting$1 && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);
    tween._lazy = [tTime, suppressEvents];
    return 1;
  }
}, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
}, _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
}, _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
  if (repeatDelay && tween._repeat) {
    tTime = _clamp$1(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }
  if (ratio !== prevRatio || _reverting$1 || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
      return;
    }
    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
    suppressEvents || (suppressEvents = totalTime && !prevIteration);
    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback$1(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback$1(tween, "onRepeat");
    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);
      if (!suppressEvents && !_reverting$1) {
        _callback$1(tween, ratio ? "onComplete" : "onReverseComplete", true);
        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
}, _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
  var child;
  if (time > prevTime) {
    child = animation._first;
    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }
      child = child._next;
    }
  } else {
    child = animation._last;
    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }
      child = child._prev;
    }
  }
}, _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
  animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
}, _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
}, _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
}, _parsePosition$1 = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum$1 ? recent.endTime(false) : animation._dur, i, offset, isPercent;
  if (_isString$1(position) && (isNaN(position) || position in labels)) {
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");
    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }
    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }
    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }
    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }
  return position == null ? clippedDuration : +position;
}, _createTweenType = function _createTweenType2(type, params, timeline2) {
  var isLegacy = _isNumber$1(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline2;
  if (type) {
    irVars = vars;
    parent = timeline2;
    while (parent && !("immediateRender" in irVars)) {
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }
    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
  }
  return new Tween(params[0], vars, params[varsIndex + 1]);
}, _conditionalReturn = function _conditionalReturn2(value, func) {
  return value || value === 0 ? func(value) : func;
}, _clamp$1 = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
}, getUnit = function getUnit2(value, v) {
  return !_isString$1(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
}, clamp = function clamp2(min, max, value) {
  return _conditionalReturn(value, function(v) {
    return _clamp$1(min, max, v);
  });
}, _slice = [].slice, _isArrayLike = function _isArrayLike2(value, nonEmpty) {
  return value && _isObject$1(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject$1(value[0])) && !value.nodeType && value !== _win$3;
}, _flatten = function _flatten2(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }
  return ar.forEach(function(value) {
    var _accumulator;
    return _isString$1(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
}, toArray = function toArray2(value, scope, leaveStrings) {
  return _context$2 && !scope && _context$2.selector ? _context$2.selector(value) : _isString$1(value) && !leaveStrings && (_coreInitted$2 || !_wake()) ? _slice.call((scope || _doc$3).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
}, selector = function selector2(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function(v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc$3.createElement("div") : value);
  };
}, shuffle = function shuffle2(a) {
  return a.sort(function() {
    return 0.5 - Math.random();
  });
}, distribute = function distribute2(v) {
  if (_isFunction$1(v)) {
    return v;
  }
  var vars = _isObject$1(v) ? v : {
    each: v
  }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
  if (_isString$1(from)) {
    ratioX = ratioY = {
      center: 0.5,
      edges: 0.5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }
  return function(i, target, a) {
    var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum$1])[1];
      if (!wrapAt) {
        max = -_bigNum$1;
        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
        }
        wrapAt < l && wrapAt--;
      }
      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
      originY = wrapAt === _bigNum$1 ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum$1;
      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }
      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0;
      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }
    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
  };
}, _roundModifier = function _roundModifier2(v) {
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
  return function(raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
    return (n - n % 1) / p + (_isNumber$1(raw) ? 0 : getUnit(raw));
  };
}, snap = function snap2(snapTo, value) {
  var isArray = _isArray(snapTo), radius, is2D;
  if (!isArray && _isObject$1(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum$1;
    if (snapTo.values) {
      snapTo = toArray(snapTo.values);
      if (is2D = !_isNumber$1(snapTo[0])) {
        radius *= radius;
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }
  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction$1(snapTo) ? function(raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function(raw) {
    var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum$1, closest = 0, i = snapTo.length, dx, dy;
    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }
      if (dx < min) {
        min = dx;
        closest = i;
      }
    }
    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber$1(raw) ? closest : closest + getUnit(raw);
  });
}, random = function random2(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
}, pipe = function pipe2() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }
  return function(value) {
    return functions.reduce(function(v, f) {
      return f(v);
    }, value);
  };
}, unitize = function unitize2(func, unit) {
  return function(value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
}, normalize = function normalize2(min, max, value) {
  return mapRange(min, max, 0, 1, value);
}, _wrapArray = function _wrapArray2(a, wrapper, value) {
  return _conditionalReturn(value, function(index2) {
    return a[~~wrapper(index2)];
  });
}, wrap = function wrap2(min, max, value) {
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
    return (range + (value2 - min) % range) % range + min;
  });
}, wrapYoyo = function wrapYoyo2(min, max, value) {
  var range = max - min, total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
    value2 = (total + (value2 - min) % total) % total || 0;
    return min + (value2 > range ? total - value2 : value2);
  });
}, _replaceRandom = function _replaceRandom2(s) {
  return s.replace(_randomExp, function(match) {
    var arIndex = match.indexOf("[") + 1, values = match.substring(arIndex || 7, arIndex ? match.indexOf("]") : match.length - 1).split(_commaDelimExp);
    return random(arIndex ? values : +values[0], arIndex ? 0 : +values[1], +values[2] || 1e-5);
  });
}, mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin, outRange = outMax - outMin;
  return _conditionalReturn(value, function(value2) {
    return outMin + ((value2 - inMin) / inRange * outRange || 0);
  });
}, interpolate = function interpolate2(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function(p2) {
    return (1 - p2) * start + p2 * end;
  };
  if (!func) {
    var isString = _isString$1(start), master = {}, p, i, interpolators, l, il;
    progress === true && (mutate = 1) && (progress = null);
    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;
      for (i = 1; i < l; i++) {
        interpolators.push(interpolate2(start[i - 1], start[i]));
      }
      l--;
      func = function func2(p2) {
        p2 *= l;
        var i2 = Math.min(il, ~~p2);
        return interpolators[i2](p2 - i2);
      };
      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }
    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }
      func = function func2(p2) {
        return _renderPropTweens(p2, master) || (isString ? start.p : start);
      };
    }
  }
  return _conditionalReturn(progress, func);
}, _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
  var labels = timeline2.labels, min = _bigNum$1, p, distance, label;
  for (p in labels) {
    distance = labels[p] - fromTime;
    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }
  return label;
}, _callback$1 = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars, callback = v[type], prevContext = _context$2, context3 = animation._ctx, params, scope, result;
  if (!callback) {
    return;
  }
  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender();
  context3 && (_context$2 = context3);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context$2 = prevContext;
  return result;
}, _interrupt = function _interrupt2(animation) {
  _removeFromParent(animation);
  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting$1);
  animation.progress() < 1 && _callback$1(animation, "onInterrupt");
  return animation;
}, _quickTween, _registerPluginQueue = [], _createPlugin = function _createPlugin2(config3) {
  if (!config3) return;
  config3 = !config3.name && config3["default"] || config3;
  if (_windowExists$2() || config3.headless) {
    var name = config3.name, isFunc = _isFunction$1(config3), Plugin = name && !isFunc && config3.init ? function() {
      this._props = [];
    } : config3, instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    }, statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };
    _wake();
    if (config3 !== Plugin) {
      if (_plugins[name]) {
        return;
      }
      _setDefaults$1(Plugin, _setDefaults$1(_copyExcluding(config3, instanceDefaults), statics));
      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
      _plugins[Plugin.prop = name] = Plugin;
      if (config3.targetTest) {
        _harnessPlugins.push(Plugin);
        _reservedProps[name] = 1;
      }
      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
    }
    _addGlobal(name, Plugin);
    config3.register && config3.register(gsap$2, Plugin, PropTween);
  } else {
    _registerPluginQueue.push(config3);
  }
}, _255 = 255, _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
}, _hue = function _hue2(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
}, splitColor = function splitColor2(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber$1(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
  if (!a) {
    if (v.substr(-1) === ",") {
      v = v.substr(0, v.length - 1);
    }
    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }
      if (v.length === 9) {
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }
      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);
      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1);
        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }
    a = a.map(Number);
  }
  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }
    a[0] = ~~(h + 0.5);
    a[1] = ~~(s * 100 + 0.5);
    a[2] = ~~(l * 100 + 0.5);
  }
  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
}, _colorOrderData = function _colorOrderData2(v) {
  var values = [], c = [], i = -1;
  v.split(_colorExp).forEach(function(v2) {
    var a = v2.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
}, _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
  var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
  if (!colors) {
    return s;
  }
  colors = colors.map(function(color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });
  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;
    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }
  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;
    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }
  return result + shell[l];
}, _colorExp = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }
  return new RegExp(s + ")", "gi");
}(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter2(a) {
  var combined = a.join(" "), toHSL;
  _colorExp.lastIndex = 0;
  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
    return true;
  }
}, _tickerActive, _ticker = function() {
  var _getTime2 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime2(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners2 = [], _id, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
    var elapsed = _getTime2() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
    (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;
    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1e3;
      _self.time = time = time / 1e3;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }
    manual || (_id = _req(_tick2));
    if (dispatch) {
      for (_i2 = 0; _i2 < _listeners2.length; _i2++) {
        _listeners2[_i2](time, _delta, frame, v);
      }
    }
  };
  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1e3 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted$2 && _windowExists$2()) {
          _win$3 = _coreInitted$2 = window;
          _doc$3 = _win$3.document || {};
          _globals.gsap = gsap$2;
          (_win$3.gsapVersions || (_win$3.gsapVersions = [])).push(gsap$2.version);
          _install(_installScope || _win$3.GreenSockGlobals || !_win$3.gsap && _win$3 || {});
          _registerPluginQueue.forEach(_createPlugin);
        }
        _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
        _id && _self.sleep();
        _req = _raf || function(f) {
          return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
        };
        _tickerActive = 1;
        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || Infinity;
      _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
    },
    fps: function fps(_fps) {
      _gap = 1e3 / (_fps || 240);
      _nextTime = _self.time * 1e3 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function(t, d, f, v) {
        callback(t, d, f, v);
        _self.remove(func);
      } : callback;
      _self.remove(callback);
      _listeners2[prioritize ? "unshift" : "push"](func);
      _wake();
      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners2.indexOf(callback)) && _listeners2.splice(i, 1) && _i2 >= i && _i2--;
    },
    _listeners: _listeners2
  };
  return _self;
}(), _wake = function _wake2() {
  return !_tickerActive && _ticker.wake();
}, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString2(value) {
  var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index2, val, parsedVal;
  for (; i < l; i++) {
    val = split[i];
    index2 = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index2);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index2 + 1).trim();
  }
  return obj;
}, _valueInParentheses = function _valueInParentheses2(value) {
  var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, _configEaseFromString = function _configEaseFromString2(name) {
  var split = (name + "").split("("), ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
}, _invertEase = function _invertEase2(ease) {
  return function(p) {
    return 1 - ease(1 - p);
  };
}, _parseEase = function _parseEase2(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction$1(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
}, _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut2(p) {
      return 1 - easeIn(1 - p);
    };
  }
  if (easeInOut === void 0) {
    easeInOut = function easeInOut2(p) {
      return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }
  var ease = {
    easeIn,
    easeOut,
    easeInOut
  }, lowercaseName;
  _forEachName(names, function(name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });
  return ease;
}, _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
  return function(p) {
    return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
  };
}, _configElastic = function _configElastic2(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);
  p2 = _2PI / p2;
  ease.config = function(amplitude2, period2) {
    return _configElastic2(type, amplitude2, period2);
  };
  return ease;
}, _configBack = function _configBack2(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }
  var easeOut = function easeOut2(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);
  ease.config = function(overshoot2) {
    return _configBack2(type, overshoot2);
  };
  return ease;
};
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
  var power = i < 5 ? i + 1 : i;
  _insertEase(name + ",Power" + (power - 1), i ? function(p) {
    return Math.pow(p, power);
  } : function(p) {
    return p;
  }, function(p) {
    return 1 - Math.pow(1 - p, power);
  }, function(p) {
    return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
  var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
  };
  _insertEase("Bounce", function(p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
  return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
});
_insertEase("Circ", function(p) {
  return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }
    var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
    return function(p) {
      return ((p2 * _clamp$1(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults$1.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
  return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache2(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /* @__PURE__ */ function() {
  function Animation2(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;
    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }
    this._ts = 1;
    _setDuration(this, +vars.duration, 1, 1);
    this.data = vars.data;
    if (_context$2) {
      this._ctx = _context$2;
      _context$2.data.push(this);
    }
    _tickerActive || _ticker.wake();
  }
  var _proto = Animation2.prototype;
  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }
    return this._delay;
  };
  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };
  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }
    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };
  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();
    if (!arguments.length) {
      return this._tTime;
    }
    var parent = this._dp;
    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);
      !parent._dp || parent.parent || _postAddChecks(parent, this);
      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }
        parent = parent.parent;
      }
      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }
    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !this._initted && this._dur && _totalTime || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      this._ts || (this._pTime = _totalTime);
      _lazySafeRender(this, _totalTime, suppressEvents);
    }
    return this;
  };
  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
  };
  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  };
  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  };
  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  };
  _proto.timeScale = function timeScale(value, suppressEvents) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts;
    }
    if (this._rts === value) {
      return this;
    }
    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
    this.totalTime(_clamp$1(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);
    _setEnd(this);
    return _recacheAncestors(this);
  };
  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }
    if (this._ps !== value) {
      this._ps = value;
      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
        this._ts = this._act = 0;
      } else {
        _wake();
        this._ts = this._rts;
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
      }
    }
    return this;
  };
  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = _roundPrecise(value);
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, this._start - this._delay);
      return this;
    }
    return this._start;
  };
  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };
  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp;
    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };
  _proto.revert = function revert(config3) {
    if (config3 === void 0) {
      config3 = _revertConfig;
    }
    var prevIsReverting = _reverting$1;
    _reverting$1 = config3;
    if (_isRevertWorthy(this)) {
      this.timeline && this.timeline.revert(config3);
      this.totalTime(-0.01, config3.suppressEvents);
    }
    this.data !== "nested" && config3.kill !== false && this.kill();
    _reverting$1 = prevIsReverting;
    return this;
  };
  _proto.globalTime = function globalTime(rawTime) {
    var animation = this, time = arguments.length ? rawTime : animation.rawTime();
    while (animation) {
      time = animation._start + time / (Math.abs(animation._ts) || 1);
      animation = animation._dp;
    }
    return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
  };
  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }
    return this._repeat === -2 ? Infinity : this._repeat;
  };
  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;
      _onUpdateTotalDuration(this);
      return time ? this.time(time) : this;
    }
    return this._rDelay;
  };
  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }
    return this._yoyo;
  };
  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition$1(this, position), _isNotFalse(suppressEvents));
  };
  _proto.restart = function restart(includeDelay, suppressEvents) {
    this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    this._dur || (this._zTime = -_tinyNum);
    return this;
  };
  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };
  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };
  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };
  _proto.resume = function resume() {
    return this.paused(false);
  };
  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
      return this;
    }
    return this._rts < 0;
  };
  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };
  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp, start = this._start, rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };
  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;
    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }
      return this;
    }
    return vars[type];
  };
  _proto.then = function then(onFulfilled) {
    var self = this, prevProm = self._prom;
    return new Promise(function(resolve) {
      var f = _isFunction$1(onFulfilled) ? onFulfilled : _passThrough$1, _resolve = function _resolve2() {
        var _then = self.then;
        self.then = null;
        prevProm && prevProm();
        _isFunction$1(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };
      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };
  _proto.kill = function kill() {
    _interrupt(this);
  };
  return Animation2;
}();
_setDefaults$1(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
var Timeline = /* @__PURE__ */ function(_Animation) {
  _inheritsLoose(Timeline2, _Animation);
  function Timeline2(vars, position) {
    var _this;
    if (vars === void 0) {
      vars = {};
    }
    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }
  var _proto2 = Timeline2.prototype;
  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);
    return this;
  };
  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);
    return this;
  };
  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);
    return this;
  };
  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition$1(this, position), 1);
    return this;
  };
  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  };
  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition$1(this, position));
    return this;
  };
  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };
  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };
  _proto2.render = function render3(totalTime, suppressEvents, force) {
    var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }
      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;
      if (crossingStart) {
        dur || (prevTime = this._zTime);
        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }
      if (this._repeat) {
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration);
        if (tTime === tDur) {
          iteration = this._repeat;
          time = dur;
        } else {
          prevIteration = _roundPrecise(tTime / cycleDuration);
          iteration = ~~prevIteration;
          if (iteration && iteration === prevIteration) {
            time = dur;
            iteration--;
          }
          time > dur && (time = dur);
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime;
          !suppressEvents && this.parent && _callback$1(this, "onRepeat");
          if (this.vars.repeatRefresh && !isYoyo) {
            this.invalidate()._lock = 1;
            prevIteration = iteration;
          }
          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            return this;
          }
          dur = this._dur;
          tDur = this._tDur;
          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -1e-4;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }
          this._lock = 0;
          if (!this._ts && !prevPaused) {
            return this;
          }
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }
      this._tTime = tTime;
      this._time = time;
      this._act = !!timeScale;
      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0;
      }
      if (!prevTime && tTime && dur && !suppressEvents && !prevIteration) {
        _callback$1(this, "onStart");
        if (this._tTime !== tTime) {
          return this;
        }
      }
      if (time >= prevTime && totalTime >= 0) {
        child = this._first;
        while (child) {
          next = child._next;
          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
            if (time !== this._time || !this._ts && !prevPaused) {
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum);
              break;
            }
          }
          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time;
        while (child) {
          next = child._prev;
          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting$1 && _isRevertWorthy(child));
            if (time !== this._time || !this._ts && !prevPaused) {
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
              break;
            }
          }
          child = next;
        }
      }
      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
        if (this._ts) {
          this._start = prevStart;
          _setEnd(this);
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._onUpdate && !suppressEvents && _callback$1(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
        if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
          if (!this._lock) {
            (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
            if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
              _callback$1(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
              this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
            }
          }
        }
      }
    }
    return this;
  };
  _proto2.add = function add(child, position) {
    var _this2 = this;
    _isNumber$1(position) || (position = _parsePosition$1(this, position, child));
    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function(obj) {
          return _this2.add(obj, position);
        });
        return this;
      }
      if (_isString$1(child)) {
        return this.addLabel(child, position);
      }
      if (_isFunction$1(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }
    return this !== child ? _addToTimeline(this, child, position) : this;
  };
  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }
    if (tweens === void 0) {
      tweens = true;
    }
    if (timelines === void 0) {
      timelines = true;
    }
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum$1;
    }
    var a = [], child = this._first;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }
      child = child._next;
    }
    return a;
  };
  _proto2.getById = function getById2(id) {
    var animations = this.getChildren(1, 1, 1), i = animations.length;
    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };
  _proto2.remove = function remove(child) {
    if (_isString$1(child)) {
      return this.removeLabel(child);
    }
    if (_isFunction$1(child)) {
      return this.killTweensOf(child);
    }
    child.parent === this && _removeLinkedListItem(this, child);
    if (child === this._recent) {
      this._recent = this._last;
    }
    return _uncache(this);
  };
  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }
    this._forcing = 1;
    if (!this._dp && this._ts) {
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }
    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
    this._forcing = 0;
    return this;
  };
  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition$1(this, position);
    return this;
  };
  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };
  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition$1(this, position));
  };
  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition$1(this, position);
    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }
      child = child._next;
    }
  };
  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }
    return this;
  };
  _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
    var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber$1(onlyActive), children;
    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }
      child = child._next;
    }
    return a;
  };
  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};
    var tl = this, endTime = _parsePosition$1(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults$1({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();
        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }
        _onStart && _onStart.apply(tween, onStartParams || []);
      }
    }, vars));
    return immediateRender ? tween.render(0) : tween;
  };
  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults$1({
      startAt: {
        time: _parsePosition$1(this, fromPosition)
      }
    }, vars));
  };
  _proto2.recent = function recent() {
    return this._recent;
  };
  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition$1(this, afterTime));
  };
  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition$1(this, beforeTime), 1);
  };
  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };
  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }
    var child = this._first, labels = this.labels, p;
    amount = _roundPrecise(amount);
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }
      child = child._next;
    }
    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }
    return _uncache(this);
  };
  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;
    while (child) {
      child.invalidate(soft);
      child = child._next;
    }
    return _Animation.prototype.invalidate.call(this, soft);
  };
  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }
    var child = this._first, next;
    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }
    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };
  _proto2.totalDuration = function totalDuration(value) {
    var max = 0, self = this, child = self._last, prevStart = _bigNum$1, prev, start, parent;
    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }
    if (self._dirty) {
      parent = self.parent;
      while (child) {
        prev = child._prev;
        child._dirty && child.totalDuration();
        start = child._start;
        if (start > prevStart && self._sort && child._ts && !self._lock) {
          self._lock = 1;
          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }
        if (start < 0 && child._ts) {
          max -= start;
          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += _roundPrecise(start / self._ts);
            self._time -= start;
            self._tTime -= start;
          }
          self.shiftChildren(-start, false, -Infinity);
          prevStart = 0;
        }
        child._end > max && child._ts && (max = child._end);
        child = prev;
      }
      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
      self._dirty = 0;
    }
    return self._tDur;
  };
  Timeline2.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
      _lastRenderedFrame = _ticker.frame;
    }
    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) {
        if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }
          child || _ticker.sleep();
        }
      }
    }
  };
  return Timeline2;
}(Animation);
_setDefaults$1(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index2 = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
  pt.b = start;
  pt.e = end;
  start += "";
  end += "";
  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }
  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop);
    start = a[0];
    end = a[1];
  }
  startNums = start.match(_complexStringNumExp) || [];
  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index2, result.index);
    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }
    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0;
      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index2 = _complexStringNumExp.lastIndex;
    }
  }
  pt.c = index2 < end.length ? end.substring(index2, end.length) : "";
  pt.fp = funcParam;
  if (_relExp.test(end) || hasRandom) {
    pt.e = 0;
  }
  this._pt = pt;
  return pt;
}, _addPropTween = function _addPropTween2(target, prop, start, end, index2, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction$1(end) && (end = end(index2 || 0, target, targets));
  var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction$1(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction$1(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction$1(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
  if (_isString$1(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
      if (pt || pt === 0) {
        end = pt;
      }
    }
  }
  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }
    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
}, _processVars = function _processVars2(vars, index2, target, targets, tween) {
  _isFunction$1(vars) && (vars = _parseFuncOrString(vars, tween, index2, target, targets));
  if (!_isObject$1(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString$1(vars) ? _parseFuncOrString(vars, tween, index2, target, targets) : vars;
  }
  var copy = {}, p;
  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index2, target, targets);
  }
  return copy;
}, _checkPlugin = function _checkPlugin2(property, vars, tween, index2, target, targets) {
  var plugin, pt, ptLookup, i;
  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index2, target, targets, tween), tween, index2, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
      i = plugin._props.length;
      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }
  return plugin;
}, _overwritingTween, _forceAllPropTweens, _initTween = function _initTween2(tween, time, tTime) {
  var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites$1, tl = tween.timeline, reverseEase = vars.easeReverse || yoyoEase, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index2, harnessVars, overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults$1.ease);
  tween._rEase = reverseEase && (_parseEase(reverseEase) || tween._ease);
  tween._from = !tl && !!vars.runBackwards;
  if (tween._from) tween.ratio = 1;
  if (!tl || keyframes && !vars.stagger) {
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop];
    cleanVars = _copyExcluding(vars, _reservedProps);
    if (prevStartAt) {
      prevStartAt._zTime < 0 && prevStartAt.progress(1);
      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
      prevStartAt._lazy = 0;
    }
    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults$1({
        data: "isStart",
        overwrite: false,
        parent,
        immediateRender: true,
        lazy: !prevStartAt && _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate && function() {
          return _callback$1(tween, "onUpdate");
        },
        stagger: 0
      }, startAt)));
      tween._startAt._dp = 0;
      tween._startAt._sat = tween;
      time < 0 && (_reverting$1 || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
      if (immediateRender) {
        if (dur && time <= 0 && tTime <= 0) {
          time && (tween._zTime = time);
          return;
        }
      }
    } else if (runBackwards && dur) {
      if (!prevStartAt) {
        time && (immediateRender = false);
        p = _setDefaults$1({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
          immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent
          //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars);
        _removeFromParent(tween._startAt = Tween.set(targets, p));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting$1 ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
        tween._zTime = time;
        if (!immediateRender) {
          _initTween2(tween._startAt, _tinyNum, _tinyNum);
        } else if (!time) {
          return;
        }
      }
    }
    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;
    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
      index2 = fullTargets === targets ? i : fullTargets.indexOf(target);
      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index2, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
        plugin._props.forEach(function(name) {
          ptLookup[name] = pt;
        });
        plugin.priority && (hasPriority = 1);
      }
      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index2, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index2, fullTargets, 0, vars.stringFilter);
          }
        }
      }
      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;
        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
        overwritten = !tween.parent;
        _overwritingTween = 0;
      }
      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }
    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween);
  }
  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten;
  keyframes && time <= 0 && tl.render(_bigNum$1, true, true);
}, _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;
    while (i--) {
      pt = lookup[i][property];
      if (pt && pt.d && pt.d._pt) {
        pt = pt.d._pt;
        while (pt && pt.p !== property && pt.fp !== property) {
          pt = pt._next;
        }
      }
      if (!pt) {
        _forceAllPropTweens = 1;
        tween.vars[property] = "+=0";
        _initTween(tween, time);
        _forceAllPropTweens = 0;
        return skipRecursion ? _warn(property + " not eligible for reset. Try splitting into individual properties") : 1;
      }
      ptCache.push(pt);
    }
  }
  i = ptCache.length;
  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT;
    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round$1(value) + getUnit(rootPT.e));
    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
  }
}, _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases2;
  if (!propertyAliases) {
    return vars;
  }
  copy = _merge({}, vars);
  for (p in propertyAliases) {
    if (p in copy) {
      aliases2 = propertyAliases[p].split(",");
      i = aliases2.length;
      while (i--) {
        copy[aliases2[i]] = copy[p];
      }
    }
  }
  return copy;
}, _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut", p, a;
  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []);
    obj.forEach(function(value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
}, _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
  return _isFunction$1(value) ? value.call(tween, i, target, targets) : _isString$1(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
}, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
  return _staggerPropsToSkip[name] = 1;
});
var Tween = /* @__PURE__ */ function(_Animation2) {
  _inheritsLoose(Tween2, _Animation2);
  function Tween2(targets, vars, position, skipInherit) {
    var _this3;
    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }
    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber$1(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = [];
    _this3._overwrite = overwrite;
    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      var easeReverse = vars.easeReverse || vars.yoyoEase;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults2 || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;
      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);
        if (_isObject$1(stagger)) {
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }
        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          easeReverse && (copy.easeReverse = easeReverse);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i];
          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
          if (!stagger && l === 1 && copy.delay) {
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }
          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }
        tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
      } else if (keyframes) {
        _inheritDefaults(_setDefaults$1(tl.vars.defaults, {
          ease: "none"
        }));
        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0, a, kf, v;
        if (_isArray(keyframes)) {
          keyframes.forEach(function(frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration();
        } else {
          copy = {};
          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }
          for (p in copy) {
            a = copy[p].sort(function(a2, b) {
              return a2.t - b.t;
            });
            time = 0;
            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }
          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          });
        }
      }
      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0;
    }
    if (overwrite === true && !_suppressOverwrites$1) {
      _overwritingTween = _assertThisInitialized(_this3);
      _globalTimeline.killTweensOf(parsedTargets);
      _overwritingTween = 0;
    }
    _addToTimeline(parent, _assertThisInitialized(_this3), position);
    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);
    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum;
      _this3.render(Math.max(0, -delay) || 0);
    }
    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }
  var _proto3 = Tween2.prototype;
  _proto3.render = function render3(totalTime, suppressEvents, force) {
    var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2;
    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
      time = tTime;
      timeline2 = this.timeline;
      if (this._repeat) {
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration);
        if (tTime === tDur) {
          iteration = this._repeat;
          time = dur;
        } else {
          prevIteration = _roundPrecise(tTime / cycleDuration);
          iteration = ~~prevIteration;
          if (iteration && iteration === prevIteration) {
            time = dur;
            iteration--;
          } else if (time > dur) {
            time = dur;
          }
        }
        isYoyo = this._yoyo && iteration & 1;
        if (isYoyo) time = dur - time;
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        if (time === prevTime && !force && this._initted && iteration === prevIteration) {
          this._tTime = tTime;
          return this;
        }
        if (iteration !== prevIteration) {
          if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
            this._lock = force = 1;
            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }
      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0;
          return this;
        }
        if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
          return this;
        }
        if (dur !== this._dur) {
          return this.render(totalTime, suppressEvents, force);
        }
      }
      if (this._rEase) {
        var inv = time < prevTime;
        if (inv !== this._inv) {
          var segDur = inv ? prevTime : dur - prevTime;
          this._inv = inv;
          if (this._from) this.ratio = 1 - this.ratio;
          this._invRatio = this.ratio;
          this._invTime = prevTime;
          this._invRecip = segDur ? (inv ? -1 : 1) / segDur : 0;
          this._invScale = inv ? -this.ratio : 1 - this.ratio;
          this._invEase = inv ? this._rEase : this._ease;
        }
        this.ratio = ratio = this._invRatio + this._invScale * this._invEase((time - this._invTime) * this._invRecip);
      } else {
        this.ratio = ratio = this._ease(time / dur);
      }
      if (this._from) this.ratio = ratio = 1 - ratio;
      this._tTime = tTime;
      this._time = time;
      if (!this._act && this._ts) {
        this._act = 1;
        this._lazy = 0;
      }
      if (!prevTime && tTime && !suppressEvents && !prevIteration) {
        _callback$1(this, "onStart");
        if (this._tTime !== tTime) {
          return this;
        }
      }
      pt = this._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
        _callback$1(this, "onUpdate");
      }
      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback$1(this, "onRepeat");
      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          _callback$1(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }
    return this;
  };
  _proto3.targets = function targets() {
    return this._targets;
  };
  _proto3.invalidate = function invalidate(soft) {
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };
  _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur);
    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
      return this.resetTo(property, value, start, startIsRelative, 1);
    }
    _alignPlayhead(this, 0);
    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };
  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }
    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting$1);
      return this;
    }
    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
      return this;
    }
    var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }
    overwrittenProps = this._op = this._op || [];
    if (vars !== "all") {
      if (_isString$1(vars)) {
        p = {};
        _forEachName(vars, function(name) {
          return p[name] = 1;
        });
        vars = p;
      }
      vars = _addAliasesToVars(parsedTargets, vars);
    }
    i = parsedTargets.length;
    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];
        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }
        for (p in props) {
          pt = curLookup && curLookup[p];
          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }
            delete curLookup[p];
          }
          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }
    this._initted && !this._pt && firstPT && _interrupt(this);
    return this;
  };
  Tween2.to = function to(targets, vars) {
    return new Tween2(targets, vars, arguments[2]);
  };
  Tween2.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };
  Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween2(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };
  Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };
  Tween2.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween2(targets, vars);
  };
  Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };
  return Tween2;
}(Animation);
_setDefaults$1(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
  Tween[name] = function() {
    var tl = new Timeline(), params = _slice.call(arguments, 0);
    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
var _setterPlain = function _setterPlain2(target, property, value) {
  return target[property] = value;
}, _setterFunc = function _setterFunc2(target, property, value) {
  return target[property](value);
}, _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
  return target[property](data.fp, value);
}, _setterAttribute = function _setterAttribute2(target, property, value) {
  return target.setAttribute(property, value);
}, _getSetter = function _getSetter2(target, property) {
  return _isFunction$1(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
}, _renderPlain = function _renderPlain2(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
}, _renderBoolean = function _renderBoolean2(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, _renderComplexString = function _renderComplexString2(ratio, data) {
  var pt = data._pt, s = "";
  if (!ratio && data.b) {
    s = data.b;
  } else if (ratio === 1 && data.e) {
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
      pt = pt._next;
    }
    s += data.c;
  }
  data.set(data.t, data.p, s, data);
}, _renderPropTweens = function _renderPropTweens2(ratio, data) {
  var pt = data._pt;
  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
}, _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
  var pt = this._pt, next;
  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
}, _killPropTweensOf = function _killPropTweensOf2(property) {
  var pt = this._pt, hasNonDependentRemaining, next;
  while (pt) {
    next = pt._next;
    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }
    pt = next;
  }
  return !hasNonDependentRemaining;
}, _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
  var pt = parent._pt, next, pt2, first, last;
  while (pt) {
    next = pt._next;
    pt2 = first;
    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }
    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }
    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }
    pt = next;
  }
  parent._pt = first;
};
var PropTween = /* @__PURE__ */ function() {
  function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;
    if (next) {
      next._prev = this;
    }
  }
  var _proto4 = PropTween2.prototype;
  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set;
    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target;
    this.tween = tween;
  };
  return PropTween2;
}();
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(name) {
  return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults$1,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [], _listeners$1 = {}, _emptyArray$1 = [], _lastMediaTime = 0, _contextID = 0, _dispatch$1 = function _dispatch(type) {
  return (_listeners$1[type] || _emptyArray$1).map(function(f) {
    return f();
  });
}, _onMediaChange = function _onMediaChange2() {
  var time = Date.now(), matches = [];
  if (time - _lastMediaTime > 2) {
    _dispatch$1("matchMediaInit");
    _media.forEach(function(c) {
      var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
      for (p in queries) {
        match = _win$3.matchMedia(queries[p]).matches;
        match && (anyMatch = 1);
        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }
      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });
    _dispatch$1("matchMediaRevert");
    matches.forEach(function(c) {
      return c.onMatch(c, function(func) {
        return c.add(null, func);
      });
    });
    _lastMediaTime = time;
    _dispatch$1("matchMedia");
  }
};
var Context = /* @__PURE__ */ function() {
  function Context2(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = [];
    this.isReverted = false;
    this.id = _contextID++;
    func && this.add(func);
  }
  var _proto5 = Context2.prototype;
  _proto5.add = function add(name, func, scope) {
    if (_isFunction$1(name)) {
      scope = func;
      func = name;
      name = _isFunction$1;
    }
    var self = this, f = function f2() {
      var prev = _context$2, prevSelector = self.selector, result;
      prev && prev !== self && prev.data.push(self);
      scope && (self.selector = selector(scope));
      _context$2 = self;
      result = func.apply(self, arguments);
      _isFunction$1(result) && self._r.push(result);
      _context$2 = prev;
      self.selector = prevSelector;
      self.isReverted = false;
      return result;
    };
    self.last = f;
    return name === _isFunction$1 ? f(self, function(func2) {
      return self.add(null, func2);
    }) : name ? self[name] = f : f;
  };
  _proto5.ignore = function ignore(func) {
    var prev = _context$2;
    _context$2 = null;
    func(this);
    _context$2 = prev;
  };
  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function(e) {
      return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };
  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };
  _proto5.kill = function kill(revert, matchMedia3) {
    var _this4 = this;
    if (revert) {
      (function() {
        var tweens = _this4.getTweens(), i2 = _this4.data.length, t;
        while (i2--) {
          t = _this4.data[i2];
          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function(tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        }
        tweens.map(function(t2) {
          return {
            g: t2._dur || t2._delay || t2._sat && !t2._sat.vars.immediateRender ? t2.globalTime(0) : -Infinity,
            t: t2
          };
        }).sort(function(a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function(o) {
          return o.t.revert(revert);
        });
        i2 = _this4.data.length;
        while (i2--) {
          t = _this4.data[i2];
          if (t instanceof Timeline) {
            if (t.data !== "nested") {
              t.scrollTrigger && t.scrollTrigger.revert();
              t.kill();
            }
          } else {
            !(t instanceof Tween) && t.revert && t.revert(revert);
          }
        }
        _this4._r.forEach(function(f) {
          return f(revert, _this4);
        });
        _this4.isReverted = true;
      })();
    } else {
      this.data.forEach(function(e) {
        return e.kill && e.kill();
      });
    }
    this.clear();
    if (matchMedia3) {
      var i = _media.length;
      while (i--) {
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  };
  _proto5.revert = function revert(config3) {
    this.kill(config3 || {});
  };
  return Context2;
}();
var MatchMedia = /* @__PURE__ */ function() {
  function MatchMedia2(scope) {
    this.contexts = [];
    this.scope = scope;
    _context$2 && _context$2.data.push(this);
  }
  var _proto6 = MatchMedia2.prototype;
  _proto6.add = function add(conditions, func, scope) {
    _isObject$1(conditions) || (conditions = {
      matches: conditions
    });
    var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
    _context$2 && !context3.selector && (context3.selector = _context$2.selector);
    this.contexts.push(context3);
    func = context3.add("onMatch", func);
    context3.queries = conditions;
    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win$3.matchMedia(conditions[p]);
        if (mq) {
          _media.indexOf(context3) < 0 && _media.push(context3);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }
    active && func(context3, function(f) {
      return context3.add(null, f);
    });
    return this;
  };
  _proto6.revert = function revert(config3) {
    this.kill(config3 || {});
  };
  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function(c) {
      return c.kill(revert, true);
    });
  };
  return MatchMedia2;
}();
var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    args.forEach(function(config3) {
      return _createPlugin(config3);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString$1(target) && (target = toArray(target)[0]);
    var getter = _getCache(target || {}).get, format = unit ? _passThrough$1 : _numericIfPossible;
    unit === "native" && (unit = "");
    return !target ? target : !property ? function(property2, unit2, uncache2) {
      return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);
    if (target.length > 1) {
      var setters = target.map(function(t) {
        return gsap$2.quickSetter(t, property, unit);
      }), l = setters.length;
      return function(value) {
        var i = l;
        while (i--) {
          setters[i](value);
        }
      };
    }
    target = target[0] || {};
    var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
      var p2 = new Plugin();
      _quickTween._pt = 0;
      p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p2.render(1, p2);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);
    return Plugin ? setter : function(value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _setDefaults22;
    var tween = gsap$2.to(target, _setDefaults$1((_setDefaults22 = {}, _setDefaults22[property] = "+=0.1", _setDefaults22.paused = true, _setDefaults22.stagger = 0, _setDefaults22), vars || {})), func = function func2(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };
    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults$1.ease));
    return _mergeDeep(_defaults$1, value || {});
  },
  config: function config2(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function(pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });
    _effects[name] = function(targets, vars, tl) {
      return effect(toArray(targets), _setDefaults$1(vars || {}, defaults2), tl);
    };
    if (extendTimeline) {
      Timeline.prototype[name] = function(targets, vars, position) {
        return this.add(_effects[name](targets, _isObject$1(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }
    var tl = new Timeline(vars), child, next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
    _globalTimeline.remove(tl);
    tl._dp = 0;
    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;
    while (child) {
      next = child._next;
      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }
      child = next;
    }
    _addToTimeline(_globalTimeline, tl, 0);
    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context$2;
  },
  matchMedia: function matchMedia2(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function(c) {
      var cond = c.conditions, found, p;
      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }
      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners$1[type] || (_listeners$1[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners$1[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap,
    wrapYoyo,
    distribute,
    random,
    snap,
    normalize,
    getUnit,
    clamp,
    splitColor,
    toArray,
    selector,
    mapRange,
    pipe,
    unitize,
    interpolate,
    shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween,
    globals: _addGlobal,
    Tween,
    Timeline,
    Animation,
    getCache: _getCache,
    _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting$1;
    },
    context: function context2(toAdd) {
      if (toAdd && _context$2) {
        _context$2.data.push(toAdd);
        toAdd._ctx = _context$2;
      }
      return _context$2;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites$1 = value;
    }
  }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
  return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
  duration: 0
});
var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
  var pt = plugin._pt;
  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }
  return pt;
}, _addModifiers = function _addModifiers2(tween, modifiers) {
  var targets = tween._targets, p, i, pt;
  for (p in modifiers) {
    i = targets.length;
    while (i--) {
      pt = tween._ptLookup[i][p];
      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          pt = _getPluginPropTween(pt, p);
        }
        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
}, _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
  return {
    name,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init4(target, vars, tween) {
      tween._onInit = function(tween2) {
        var temp, p;
        if (_isString$1(vars)) {
          temp = {};
          _forEachName(vars, function(name2) {
            return temp[name2] = 1;
          });
          vars = temp;
        }
        if (modifier) {
          temp = {};
          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }
          vars = temp;
        }
        _addModifiers(tween2, vars);
      };
    }
  };
};
var gsap$2 = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index2, targets) {
    var p, pt, v;
    this.tween = tween;
    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index2, targets, 0, 0, p);
      pt.op = p;
      pt.b = v;
      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;
    while (pt) {
      _reverting$1 ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  headless: 1,
  init: function init2(target, value) {
    var i = value.length;
    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
Tween.version = Timeline.version = gsap$2.version = "3.15.0";
_coreReady = 1;
_windowExists$2() && _wake();
_easeMap.Power0;
_easeMap.Power1;
_easeMap.Power2;
_easeMap.Power3;
_easeMap.Power4;
_easeMap.Linear;
_easeMap.Quad;
_easeMap.Cubic;
_easeMap.Quart;
_easeMap.Quint;
_easeMap.Strong;
_easeMap.Elastic;
_easeMap.Back;
_easeMap.SteppedEase;
_easeMap.Bounce;
_easeMap.Sine;
_easeMap.Expo;
_easeMap.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var _win$2, _doc$2, _docElement, _pluginInitted, _tempDiv, _recentSetterPlugin, _reverting, _windowExists$1 = function _windowExists2() {
  return typeof window !== "undefined";
}, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum = 1e8, _capsExp$1 = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, _renderCSSProp = function _renderCSSProp2(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
}, _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
}, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
}, _renderCSSPropWithBeginningAndEnd = function _renderCSSPropWithBeginningAndEnd2(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
}, _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
}, _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
  return target.style[property] = value;
}, _setterCSSProp = function _setterCSSProp2(target, property, value) {
  return target.style.setProperty(property, value);
}, _setterTransform = function _setterTransform2(target, property, value) {
  return target._gsap[property] = value;
}, _setterScale = function _setterScale2(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
}, _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
}, _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
}, _transformProp$1 = "transform", _transformOriginProp = _transformProp$1 + "Origin", _saveStyle = function _saveStyle2(property, isNotCSS) {
  var _this = this;
  var target = this.target, style2 = target.style, cache = target._gsap;
  if (property in _transformProps && style2) {
    this.tfm = this.tfm || {};
    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function(a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
      property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
    } else {
      return _propertyAliases.transform.split(",").forEach(function(p) {
        return _saveStyle2.call(_this, p, isNotCSS);
      });
    }
    if (this.props.indexOf(_transformProp$1) >= 0) {
      return;
    }
    if (cache.svg) {
      this.svgo = target.getAttribute("data-svg-origin");
      this.props.push(_transformOriginProp, isNotCSS, "");
    }
    property = _transformProp$1;
  }
  (style2 || isNotCSS) && this.props.push(property, isNotCSS, style2[property]);
}, _removeIndependentTransforms = function _removeIndependentTransforms2(style2) {
  if (style2.translate) {
    style2.removeProperty("translate");
    style2.removeProperty("scale");
    style2.removeProperty("rotate");
  }
}, _revertStyle = function _revertStyle2() {
  var props = this.props, target = this.target, style2 = target.style, cache = target._gsap, i, p;
  for (i = 0; i < props.length; i += 3) {
    if (!props[i + 1]) {
      props[i + 2] ? style2[props[i]] = props[i + 2] : style2.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp$1, "-$1").toLowerCase());
    } else if (props[i + 1] === 2) {
      target[props[i]](props[i + 2]);
    } else {
      target[props[i]] = props[i + 2];
    }
  }
  if (this.tfm) {
    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }
    if (cache.svg) {
      cache.renderTransform();
      target.setAttribute("data-svg-origin", this.svgo || "");
    }
    i = _reverting();
    if ((!i || !i.isStart) && !style2[_transformProp$1]) {
      _removeIndependentTransforms(style2);
      if (cache.zOrigin && style2[_transformOriginProp]) {
        style2[_transformOriginProp] += " " + cache.zOrigin + "px";
        cache.zOrigin = 0;
        cache.renderTransform();
      }
      cache.uncache = 1;
    }
  }
}, _getStyleSaver = function _getStyleSaver2(target, properties) {
  var saver = {
    target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  target._gsap || gsap$2.core.getCache(target);
  properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
    return saver.save(p);
  });
  return saver;
}, _supports3D, _createElement = function _createElement2(type, ns) {
  var e = _doc$2.createElementNS ? _doc$2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$2.createElement(type);
  return e && e.style ? e : _doc$2.createElement(type);
}, _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp$1, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
}, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
  var e = element || _tempDiv, s = e.style, i = 5;
  if (property in s && !preferPrefix) {
    return property;
  }
  property = property.charAt(0).toUpperCase() + property.substr(1);
  while (i-- && !(_prefixes[i] + property in s)) {
  }
  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
}, _initCore$1 = function _initCore() {
  if (_windowExists$1() && window.document) {
    _win$2 = window;
    _doc$2 = _win$2.document;
    _docElement = _doc$2.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _createElement("div");
    _transformProp$1 = _checkPropPrefix(_transformProp$1);
    _transformOriginProp = _transformProp$1 + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
    _supports3D = !!_checkPropPrefix("perspective");
    _reverting = gsap$2.core.reverting;
    _pluginInitted = 1;
  }
}, _getReparentedCloneBBox = function _getReparentedCloneBBox2(target) {
  var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
  clone.style.display = "block";
  svg.appendChild(clone);
  _docElement.appendChild(svg);
  try {
    bbox = clone.getBBox();
  } catch (e) {
  }
  svg.removeChild(clone);
  _docElement.removeChild(svg);
  return bbox;
}, _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
  var i = attributesArray.length;
  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
}, _getBBox = function _getBBox2(target) {
  var bounds, cloned;
  try {
    bounds = target.getBBox();
  } catch (error) {
    bounds = _getReparentedCloneBBox(target);
    cloned = 1;
  }
  bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
}, _isSVG = function _isSVG2(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
}, _removeProperty = function _removeProperty2(target, property) {
  if (property) {
    var style2 = target.style, first2Chars;
    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp$1;
    }
    if (style2.removeProperty) {
      first2Chars = property.substr(0, 2);
      if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
        property = "-" + property;
      }
      style2.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp$1, "-$1").toLowerCase());
    } else {
      style2.removeAttribute(property);
    }
  }
}, _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;
  plugin._props.push(property);
  return pt;
}, _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
}, _nonStandardLayouts = {
  grid: 1,
  flex: 1
}, _convertToUnit = function _convertToUnit2(target, property, value, unit) {
  var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style2 = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }
  curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);
  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return _round$1(toPercent ? curValue / px * amount : curValue / 100 * px);
  }
  style2[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }
  if (!parent || parent === _doc$2 || !parent.appendChild) {
    parent = _doc$2.body;
  }
  cache = parent._gsap;
  if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
    return _round$1(curValue / cache.width * amount);
  } else {
    if (toPercent && (property === "height" || property === "width")) {
      var v = target.style[property];
      target.style[property] = amount + unit;
      px = target[measureProperty];
      v ? target.style[property] = v : _removeProperty(target, property);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style2.position = _getComputedProperty(target, "position"));
      parent === target && (style2.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style2.position = "absolute";
    }
    if (horizontal && toPercent) {
      cache = _getCache(parent);
      cache.time = _ticker.time;
      cache.width = parent[measureProperty];
    }
  }
  return _round$1(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, _get = function _get2(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore$1();
  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];
    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }
  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];
    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
    }
  }
  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
}, _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
  if (!start || start === "none") {
    var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor");
    }
  }
  var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index2 = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
  pt.b = start;
  pt.e = end;
  start += "";
  end += "";
  if (end.substring(0, 6) === "var(--") {
    end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
  }
  if (end === "auto") {
    startValue = target.style[prop];
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
  }
  a = [start, end];
  _colorStringFilter(a);
  start = a[0];
  end = a[1];
  startValues = start.match(_numWithUnitExp) || [];
  endValues = end.match(_numWithUnitExp) || [];
  if (endValues.length) {
    while (result = _numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index2, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }
      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index2 = _numWithUnitExp.lastIndex - endUnit.length;
        if (!endUnit) {
          endUnit = endUnit || _config.units[prop] || startUnit;
          if (index2 === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }
        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        }
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }
    pt.c = index2 < end.length ? end.substring(index2, end.length) : "";
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }
  _relExp.test(end) && (pt.e = 0);
  this._pt = pt;
  return pt;
}, _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
  var split = value.split(" "), x = split[0], y = split[1] || "50%";
  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    value = x;
    x = y;
    y = value;
  }
  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
}, _renderClearProps = function _renderClearProps2(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t, style2 = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
    if (props === "all" || props === true) {
      style2.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;
      while (--i > -1) {
        prop = props[i];
        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp$1;
        }
        _removeProperty(target, prop);
      }
    }
    if (clearTransforms) {
      _removeProperty(target, _transformProp$1);
      if (cache) {
        cache.svg && target.removeAttribute("transform");
        style2.scale = style2.rotate = style2.translate = "none";
        _parseTransform(target, 1);
        cache.uncache = 1;
        _removeIndependentTransforms(style2);
      }
    }
  }
}, _specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;
      plugin._props.push(property);
      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, _identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function _isNullTransform2(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
  var matrixString = _getComputedProperty(target, _transformProp$1);
  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round$1);
}, _getMatrix = function _getMatrix2(target, force2D) {
  var cache = target._gsap || _getCache(target), style2 = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix;
    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    temp = style2.display;
    style2.display = "block";
    parent = target.parentNode;
    if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
      addedToDOM = 1;
      nextSibling = target.nextElementSibling;
      _docElement.appendChild(target);
    }
    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style2.display = temp : _removeProperty(target, "display");
    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }
  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
}, _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }
  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }
  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px";
  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }
  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, _parseTransform = function _parseTransform2(target, uncache) {
  var cache = target._gsap || new GSCache(target);
  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }
  var style2 = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));
  if (cs.translate) {
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style2[_transformProp$1] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp$1] !== "none" ? cs[_transformProp$1] : "");
    }
    style2.scale = style2.rotate = style2.translate = "none";
  }
  matrix = _getMatrix(target, cache.svg);
  if (cache.svg) {
    if (cache.uncache) {
      t2 = target.getBBox();
      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
      t1 = "";
    } else {
      t1 = !uncache && target.getAttribute("data-svg-origin");
    }
    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }
  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;
  if (matrix !== _identity2DMatrix) {
    a = matrix[0];
    b = matrix[1];
    c = matrix[2];
    d = matrix[3];
    x = a12 = matrix[4];
    y = a22 = matrix[5];
    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      }
    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      }
      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      }
      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }
      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }
      scaleX = _round$1(Math.sqrt(a * a + b * b + c * c));
      scaleY = _round$1(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }
    if (cache.svg) {
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp$1));
      t1 && target.setAttribute("transform", t1);
    }
  }
  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }
  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = _round$1(scaleX);
  cache.scaleY = _round$1(scaleY);
  cache.rotation = _round$1(rotation) + deg;
  cache.rotationX = _round$1(rotationX) + deg;
  cache.rotationY = _round$1(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;
  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
    style2[_transformOriginProp] = _firstTwoOnly(origin);
  }
  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
}, _firstTwoOnly = function _firstTwoOnly2(value) {
  return (value = value.split(" "))[0] + " " + value[1];
}, _addPxTranslate = function _addPxTranslate2(target, start, value) {
  var unit = getUnit(start);
  return _round$1(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
}, _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;
  _renderCSSTransforms(ratio, cache);
}, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
  var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }
  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }
  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }
  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }
  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }
  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }
  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }
  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }
  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }
  target.style[_transformProp$1] = transforms || "translate(0, 0)";
}, _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
  var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);
  if (skewY) {
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }
  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;
    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;
      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }
    a11 = _round$1(a11);
    a21 = _round$1(a21);
    a12 = _round$1(a12);
    a22 = _round$1(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }
  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }
  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = _round$1(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = _round$1(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }
  if (xPercent || yPercent) {
    temp = target.getBBox();
    tx = _round$1(tx + xPercent / 100 * temp.width);
    ty = _round$1(ty + yPercent / 100 * temp.height);
  }
  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp$1] = temp);
}, _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
  var cap = 360, isString = _isString$1(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
  if (isString) {
    direction = endValue.split("_")[1];
    if (direction === "short") {
      change %= cap;
      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }
    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }
  plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";
  plugin._props.push(property);
  return pt;
}, _assign = function _assign2(target, source) {
  for (var p in source) {
    target[p] = source[p];
  }
  return target;
}, _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
  var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style2 = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style2[_transformProp$1] = transforms;
    endCache = _parseTransform(target, 1);
    _removeProperty(target, _transformProp$1);
    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp$1];
    style2[_transformProp$1] = transforms;
    endCache = _parseTransform(target, 1);
    style2[_transformProp$1] = startValue;
  }
  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];
    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      startUnit = getUnit(startValue);
      endUnit = getUnit(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;
      plugin._props.push(p);
    }
  }
  _assign(endCache, startCache);
};
_forEachName("padding,margin,Width,Radius", function(name, index2) {
  var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index2 < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
    return index2 < 2 ? name + side : "border" + side + name;
  });
  _specialProps[index2 > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
    var a, vars;
    if (arguments.length < 4) {
      a = props.map(function(prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }
    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function(prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});
var CSSPlugin = {
  name: "css",
  register: _initCore$1,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init3(target, vars, tween, index2, targets) {
    var props = this._props, style2 = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps, finalTransformValue;
    _pluginInitted || _initCore$1();
    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;
    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }
      endValue = vars[p];
      if (_plugins[p] && _checkPlugin(p, vars, tween, index2, target, targets)) {
        continue;
      }
      type = typeof endValue;
      specialProp = _specialProps[p];
      if (type === "function") {
        endValue = endValue.call(tween, index2, target, targets);
        type = typeof endValue;
      }
      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = _replaceRandom(endValue);
      }
      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _colorExp.lastIndex = 0;
        if (!_colorExp.test(startValue)) {
          startUnit = getUnit(startValue);
          endUnit = getUnit(endValue);
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        }
        this.add(style2, "setProperty", startValue, endValue, index2, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style2[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index2, target, targets) : startAt[p];
          _isString$1(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
          getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
        } else {
          startValue = _get(target, p);
        }
        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);
        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              startNum = 0;
            }
            inlineProps.push("visibility", 0, style2.visibility);
            _addNonTweeningPT(this, style2, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }
          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }
        isTransformRelated = p in _transformProps;
        if (isTransformRelated) {
          this.styles.save(p);
          finalTransformValue = endValue;
          if (type === "string" && endValue.substring(0, 6) === "var(--") {
            endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
            if (endValue.substring(0, 5) === "calc(") {
              var origPerspective = target.style.perspective;
              target.style.perspective = endValue;
              endValue = _getComputedProperty(target, "perspective");
              origPerspective ? target.style.perspective = origPerspective : _removeProperty(target, "perspective");
            }
            endNum = parseFloat(endValue);
          }
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new PropTween(this._pt, style2, _transformProp$1, 0, 1, cache.renderTransform, cache, 0, -1);
            transformPropTween.dep = 1;
          }
          if (p === "scale") {
            this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style2[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue);
            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0;
              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
              _addNonTweeningPT(this, style2, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }
            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);
            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);
            continue;
          }
        } else if (!(p in style2)) {
          p = _checkPropPrefix(p) || p;
        }
        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style2) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0);
          endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new PropTween(this._pt, isTransformRelated ? cache : style2, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;
          if (isTransformRelated && finalTransformValue !== endValue) {
            this._pt.b = startValue;
            this._pt.e = finalTransformValue;
            this._pt.r = _renderCSSPropWithBeginningAndEnd;
          } else if (startUnit !== endUnit && endUnit !== "%") {
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style2)) {
          if (p in target) {
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index2, targets);
          } else if (p !== "parseTransform") {
            _missingPlugin(p, endValue);
            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }
        isTransformRelated || (p in style2 ? inlineProps.push(p, 0, style2[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }
    hasPriority && _sortPropTweensByPriority(this);
  },
  render: function render2(ratio, data) {
    if (data.tween._time || !_reverting()) {
      var pt = data._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
  },
  core: {
    _removeProperty,
    _getMatrix
  }
};
gsap$2.utils.checkPrefix = _checkPropPrefix;
gsap$2.core.getStyleSaver = _getStyleSaver;
(function(positionAndScale, rotation, others, aliases2) {
  var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
    _transformProps[name] = 1;
  });
  _forEachName(rotation, function(name) {
    _config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });
  _propertyAliases[all[13]] = positionAndScale + "," + rotation;
  _forEachName(aliases2, function(name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
  _config.units[name] = "px";
});
gsap$2.registerPlugin(CSSPlugin);
var gsapWithCSS = gsap$2.registerPlugin(CSSPlugin) || gsap$2;
gsapWithCSS.core.Tween;
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  return Constructor;
}
/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var gsap$1, _coreInitted$1, _win$1, _doc$1, _docEl$1, _body$1, _isTouch, _pointerType, ScrollTrigger$1, _root$1, _normalizer$1, _eventTypes, _context$1, _getGSAP$1 = function _getGSAP() {
  return gsap$1 || typeof window !== "undefined" && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1;
}, _startup$1 = 1, _observers = [], _scrollers = [], _proxies = [], _getTime$1 = Date.now, _bridge = function _bridge2(name, value) {
  return value;
}, _integrate = function _integrate2() {
  var core = ScrollTrigger$1.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
  scrollers.push.apply(scrollers, _scrollers);
  proxies.push.apply(proxies, _proxies);
  _scrollers = scrollers;
  _proxies = proxies;
  _bridge = function _bridge3(name, value) {
    return data[name](value);
  };
}, _getProxyProp = function _getProxyProp2(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
}, _isViewport$1 = function _isViewport(el) {
  return !!~_root$1.indexOf(el);
}, _addListener$1 = function _addListener(element, type, func, passive, capture) {
  return element.addEventListener(type, func, {
    passive: passive !== false,
    capture: !!capture
  });
}, _removeListener$1 = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
}, _scrollLeft = "scrollLeft", _scrollTop = "scrollTop", _onScroll$1 = function _onScroll() {
  return _normalizer$1 && _normalizer$1.isPressed || _scrollers.cache++;
}, _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
  var cachingFunc = function cachingFunc2(value) {
    if (value || value === 0) {
      _startup$1 && (_win$1.history.scrollRestoration = "manual");
      var isNormalizing = _normalizer$1 && _normalizer$1.isPressed;
      value = cachingFunc2.v = Math.round(value) || (_normalizer$1 && _normalizer$1.iOS ? 1 : 0);
      f(value);
      cachingFunc2.cacheID = _scrollers.cache;
      isNormalizing && _bridge("ss", value);
    } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
      cachingFunc2.cacheID = _scrollers.cache;
      cachingFunc2.v = f();
    }
    return cachingFunc2.v + cachingFunc2.offset;
  };
  cachingFunc.offset = 0;
  return f && cachingFunc;
}, _horizontal = {
  s: _scrollLeft,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _scrollCacheFunc(function(value) {
    return arguments.length ? _win$1.scrollTo(value, _vertical.sc()) : _win$1.pageXOffset || _doc$1[_scrollLeft] || _docEl$1[_scrollLeft] || _body$1[_scrollLeft] || 0;
  })
}, _vertical = {
  s: _scrollTop,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _horizontal,
  sc: _scrollCacheFunc(function(value) {
    return arguments.length ? _win$1.scrollTo(_horizontal.sc(), value) : _win$1.pageYOffset || _doc$1[_scrollTop] || _docEl$1[_scrollTop] || _body$1[_scrollTop] || 0;
  })
}, _getTarget = function _getTarget2(t, self) {
  return (self && self._ctx && self._ctx.selector || gsap$1.utils.toArray)(t)[0] || (typeof t === "string" && gsap$1.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
}, _isWithin = function _isWithin2(element, list) {
  var i = list.length;
  while (i--) {
    if (list[i] === element || list[i].contains(element)) {
      return true;
    }
  }
  return false;
}, _getScrollFunc = function _getScrollFunc2(element, _ref) {
  var s = _ref.s, sc = _ref.sc;
  _isViewport$1(element) && (element = _doc$1.scrollingElement || _docEl$1);
  var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
  !~i && (i = _scrollers.push(element) - 1);
  _scrollers[i + offset] || _addListener$1(element, "scroll", _onScroll$1);
  var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport$1(element) ? sc : _scrollCacheFunc(function(value) {
    return arguments.length ? element[s] = value : element[s];
  })));
  func.target = element;
  prev || (func.smooth = gsap$1.getProperty(element, "scrollBehavior") === "smooth");
  return func;
}, _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
  var v1 = value, v2 = value, t1 = _getTime$1(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
    var t = _getTime$1();
    if (force || t - t1 > min) {
      v2 = v1;
      v1 = value2;
      t2 = t1;
      t1 = t;
    } else if (useDelta) {
      v1 += value2;
    } else {
      v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
    }
  }, reset = function reset2() {
    v2 = v1 = useDelta ? 0 : v1;
    t2 = t1 = 0;
  }, getVelocity = function getVelocity2(latestValue) {
    var tOld = t2, vOld = v2, t = _getTime$1();
    (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
    return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
  };
  return {
    update,
    reset,
    getVelocity
  };
}, _getEvent = function _getEvent2(e, preventDefault) {
  preventDefault && !e._gsapAllow && e.cancelable !== false && e.preventDefault();
  return e.changedTouches ? e.changedTouches[0] : e;
}, _getAbsoluteMax = function _getAbsoluteMax2(a) {
  var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
  return Math.abs(max) >= Math.abs(min) ? max : min;
}, _setScrollTrigger = function _setScrollTrigger2() {
  ScrollTrigger$1 = gsap$1.core.globals().ScrollTrigger;
  ScrollTrigger$1 && ScrollTrigger$1.core && _integrate();
}, _initCore2 = function _initCore3(core) {
  gsap$1 = core || _getGSAP$1();
  if (!_coreInitted$1 && gsap$1 && typeof document !== "undefined" && document.body) {
    _win$1 = window;
    _doc$1 = document;
    _docEl$1 = _doc$1.documentElement;
    _body$1 = _doc$1.body;
    _root$1 = [_win$1, _doc$1, _docEl$1, _body$1];
    gsap$1.utils.clamp;
    _context$1 = gsap$1.core.context || function() {
    };
    _pointerType = "onpointerenter" in _body$1 ? "pointer" : "mouse";
    _isTouch = Observer.isTouch = _win$1.matchMedia && _win$1.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win$1 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
    _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl$1 ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl$1) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
    setTimeout(function() {
      return _startup$1 = 0;
    }, 500);
    _coreInitted$1 = 1;
  }
  ScrollTrigger$1 || _setScrollTrigger();
  return _coreInitted$1;
};
_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /* @__PURE__ */ function() {
  function Observer2(vars) {
    this.init(vars);
  }
  var _proto = Observer2.prototype;
  _proto.init = function init4(vars) {
    _coreInitted$1 || _initCore2(gsap$1) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger$1 || _setScrollTrigger();
    var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce2 = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl$1;
    this.vars = vars;
    ignore && (ignore = gsap$1.utils.toArray(ignore));
    tolerance = tolerance || 1e-9;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce2 = debounce2 !== false;
    lineHeight || (lineHeight = parseFloat(_win$1.getComputedStyle(_body$1).lineHeight) || 22);
    var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault && vars.passive !== false, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport$1(target), ownerDoc = target.ownerDocument || _doc$1, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
      return onClickTime = _getTime$1();
    }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
      return (self.event = e) && ignore && _isWithin(e.target, ignore) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
    }, onStopFunc = function onStopFunc2() {
      self._vx.reset();
      self._vy.reset();
      onStopDelayedCall.pause();
      onStop && onStop(self);
    }, update = function update2() {
      var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
      onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
      if (changedX) {
        onRight && self.deltaX > 0 && onRight(self);
        onLeft && self.deltaX < 0 && onLeft(self);
        onChangeX && onChangeX(self);
        onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
        prevDeltaX = self.deltaX;
        deltaX[0] = deltaX[1] = deltaX[2] = 0;
      }
      if (changedY) {
        onDown && self.deltaY > 0 && onDown(self);
        onUp && self.deltaY < 0 && onUp(self);
        onChangeY && onChangeY(self);
        onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
        prevDeltaY = self.deltaY;
        deltaY[0] = deltaY[1] = deltaY[2] = 0;
      }
      if (moved || dragged) {
        onMove && onMove(self);
        if (dragged) {
          onDragStart && dragged === 1 && onDragStart(self);
          onDrag && onDrag(self);
          dragged = 0;
        }
        moved = false;
      }
      locked && !(locked = false) && onLockAxis && onLockAxis(self);
      if (wheeled) {
        onWheel(self);
        wheeled = false;
      }
      id = 0;
    }, onDelta = function onDelta2(x, y, index2) {
      deltaX[index2] += x;
      deltaY[index2] += y;
      self._vx.update(x);
      self._vy.update(y);
      debounce2 ? id || (id = requestAnimationFrame(update)) : update();
    }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
      if (lockAxis && !axis) {
        self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
        locked = true;
      }
      if (axis !== "y") {
        deltaX[2] += x;
        self._vx.update(x, true);
      }
      if (axis !== "x") {
        deltaY[2] += y;
        self._vy.update(y, true);
      }
      debounce2 ? id || (id = requestAnimationFrame(update)) : update();
    }, _onDrag = function _onDrag2(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }
      e = _getEvent(e, preventDefault);
      var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
      self.x = x;
      self.y = y;
      if (isDragging || (dx || dy) && (Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum)) {
        dragged || (dragged = isDragging ? 2 : 1);
        isDragging || (self.isDragging = true);
        onTouchOrPointerDelta(dx, dy);
      }
    }, _onPress = self.onPress = function(e) {
      if (_ignoreCheck(e, 1) || e && e.button) {
        return;
      }
      self.axis = axis = null;
      onStopDelayedCall.pause();
      self.isPressed = true;
      e = _getEvent(e);
      prevDeltaX = prevDeltaY = 0;
      self.startX = self.x = e.clientX;
      self.startY = self.y = e.clientY;
      self._vx.reset();
      self._vy.reset();
      _addListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
      self.deltaX = self.deltaY = 0;
      onPress && onPress(self);
    }, _onRelease = self.onRelease = function(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }
      _removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
      var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging, isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e);
      if (!isDragNotClick && isTrackingDrag) {
        self._vx.reset();
        self._vy.reset();
        if (preventDefault && allowClicks) {
          gsap$1.delayedCall(0.08, function() {
            if (_getTime$1() - onClickTime > 300 && !e.defaultPrevented) {
              if (e.target.click) {
                e.target.click();
              } else if (ownerDoc.createEvent) {
                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, _win$1, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                e.target.dispatchEvent(syntheticEvent);
              }
            }
          });
        }
      }
      self.isDragging = self.isGesturing = self.isPressed = false;
      onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
      dragged && update();
      onDragEnd && wasDragging && onDragEnd(self);
      onRelease && onRelease(self, isDragNotClick);
    }, _onGestureStart = function _onGestureStart2(e) {
      return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
    }, _onGestureEnd = function _onGestureEnd2() {
      return (self.isGesturing = false) || onGestureEnd(self);
    }, onScroll = function onScroll2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      var x = scrollFuncX(), y = scrollFuncY();
      onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
      scrollX = x;
      scrollY = y;
      onStop && onStopDelayedCall.restart(true);
    }, _onWheel = function _onWheel2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      e = _getEvent(e, preventDefault);
      onWheel && (wheeled = true);
      var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win$1.innerHeight : 1) * wheelSpeed;
      onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
    }, _onMove = function _onMove2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
      self.x = x;
      self.y = y;
      moved = true;
      onStop && onStopDelayedCall.restart(true);
      (dx || dy) && onTouchOrPointerDelta(dx, dy);
    }, _onHover = function _onHover2(e) {
      self.event = e;
      onHover(self);
    }, _onHoverEnd = function _onHoverEnd2(e) {
      self.event = e;
      onHoverEnd(self);
    }, _onClick = function _onClick2(e) {
      return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
    };
    onStopDelayedCall = self._dc = gsap$1.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self.deltaX = self.deltaY = 0;
    self._vx = _getVelocityProp(0, 50, true);
    self._vy = _getVelocityProp(0, 50, true);
    self.scrollX = scrollFuncX;
    self.scrollY = scrollFuncY;
    self.isDragging = self.isGesturing = self.isPressed = false;
    _context$1(this);
    self.enable = function(e) {
      if (!self.isEnabled) {
        _addListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll$1);
        type.indexOf("scroll") >= 0 && _addListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
        type.indexOf("wheel") >= 0 && _addListener$1(target, "wheel", _onWheel, passive, capture);
        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener$1(target, _eventTypes[0], _onPress, passive, capture);
          _addListener$1(ownerDoc, _eventTypes[2], _onRelease);
          _addListener$1(ownerDoc, _eventTypes[3], _onRelease);
          allowClicks && _addListener$1(target, "click", clickCapture, true, true);
          onClick && _addListener$1(target, "click", _onClick);
          onGestureStart && _addListener$1(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener$1(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener$1(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener$1(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener$1(target, _pointerType + "move", _onMove);
        }
        self.isEnabled = true;
        self.isDragging = self.isGesturing = self.isPressed = moved = dragged = false;
        self._vx.reset();
        self._vy.reset();
        scrollX = scrollFuncX();
        scrollY = scrollFuncY();
        e && e.type && _onPress(e);
        onEnable && onEnable(self);
      }
      return self;
    };
    self.disable = function() {
      if (self.isEnabled) {
        _observers.filter(function(o) {
          return o !== self && _isViewport$1(o.target);
        }).length || _removeListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll$1);
        if (self.isPressed) {
          self._vx.reset();
          self._vy.reset();
          _removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        }
        _removeListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
        _removeListener$1(target, "wheel", _onWheel, capture);
        _removeListener$1(target, _eventTypes[0], _onPress, capture);
        _removeListener$1(ownerDoc, _eventTypes[2], _onRelease);
        _removeListener$1(ownerDoc, _eventTypes[3], _onRelease);
        _removeListener$1(target, "click", clickCapture, true);
        _removeListener$1(target, "click", _onClick);
        _removeListener$1(ownerDoc, "gesturestart", _onGestureStart);
        _removeListener$1(ownerDoc, "gestureend", _onGestureEnd);
        _removeListener$1(target, _pointerType + "enter", _onHover);
        _removeListener$1(target, _pointerType + "leave", _onHoverEnd);
        _removeListener$1(target, _pointerType + "move", _onMove);
        self.isEnabled = self.isPressed = self.isDragging = false;
        onDisable && onDisable(self);
      }
    };
    self.kill = self.revert = function() {
      self.disable();
      var i = _observers.indexOf(self);
      i >= 0 && _observers.splice(i, 1);
      _normalizer$1 === self && (_normalizer$1 = 0);
    };
    _observers.push(self);
    isNormalizer && _isViewport$1(target) && (_normalizer$1 = self);
    self.enable(event);
  };
  _createClass(Observer2, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);
  return Observer2;
}();
Observer.version = "3.15.0";
Observer.create = function(vars) {
  return new Observer(vars);
};
Observer.register = _initCore2;
Observer.getAll = function() {
  return _observers.slice();
};
Observer.getById = function(id) {
  return _observers.filter(function(o) {
    return o.vars.id === id;
  })[0];
};
_getGSAP$1() && gsap$1.registerPlugin(Observer);
/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var gsap, _coreInitted, _win, _doc, _docEl, _body, _root, _resizeDelay, _toArray, _clamp2, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites, _ignoreResize, _normalizer, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _context, _scrollRestoration, _div100vh, _100vh, _isReverted, _clampingMax, _limitCallbacks, _startup = 1, _getTime = Date.now, _time1 = _getTime(), _lastScrollTime = 0, _enabled = 0, _parseClamp = function _parseClamp2(value, type, self) {
  var clamp3 = _isString2(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
  self["_" + type + "Clamp"] = clamp3;
  return clamp3 ? value.substr(6, value.length - 7) : value;
}, _keepClamp = function _keepClamp2(value, clamp3) {
  return clamp3 && (!_isString2(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
}, _rafBugFix = function _rafBugFix2() {
  return _enabled && requestAnimationFrame(_rafBugFix2);
}, _pointerDownHandler = function _pointerDownHandler2() {
  return _pointerIsDown = 1;
}, _pointerUpHandler = function _pointerUpHandler2() {
  return _pointerIsDown = 0;
}, _passThrough2 = function _passThrough3(v) {
  return v;
}, _round2 = function _round3(value) {
  return Math.round(value * 1e5) / 1e5 || 0;
}, _windowExists3 = function _windowExists4() {
  return typeof window !== "undefined";
}, _getGSAP2 = function _getGSAP3() {
  return gsap || _windowExists3() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
}, _isViewport2 = function _isViewport3(e) {
  return !!~_root.indexOf(e);
}, _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
  return (dimensionProperty === "Height" ? _100vh : _win["inner" + dimensionProperty]) || _docEl["client" + dimensionProperty] || _body["client" + dimensionProperty];
}, _getBoundsFunc = function _getBoundsFunc2(element) {
  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport2(element) ? function() {
    _winOffsets.width = _win.innerWidth;
    _winOffsets.height = _100vh;
    return _winOffsets;
  } : function() {
    return _getBounds(element);
  });
}, _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
  var d = _ref.d, d2 = _ref.d2, a = _ref.a;
  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
    return a()[d];
  } : function() {
    return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
  };
}, _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
    return _winOffsets;
  };
}, _maxScroll = function _maxScroll2(element, _ref2) {
  var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
  return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport2(element) ? (_docEl[s] || _body[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
}, _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
}, _isString2 = function _isString3(value) {
  return typeof value === "string";
}, _isFunction2 = function _isFunction3(value) {
  return typeof value === "function";
}, _isNumber2 = function _isNumber3(value) {
  return typeof value === "number";
}, _isObject2 = function _isObject3(value) {
  return typeof value === "object";
}, _endAnimation = function _endAnimation2(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
}, _callback2 = function _callback3(self, func, extraParam) {
  if (self.enabled) {
    var result = self._ctx ? self._ctx.add(function() {
      return func(self, extraParam);
    }) : func(self, extraParam);
    result && result.totalTime && (self.callbackAnimation = result);
  }
}, _abs = Math.abs, _left = "left", _top = "top", _right = "right", _bottom = "bottom", _width = "width", _height = "height", _Right = "Right", _Left = "Left", _Top = "Top", _Bottom = "Bottom", _padding = "padding", _margin = "margin", _Width = "Width", _Height = "Height", _px = "px", _getComputedStyle = function _getComputedStyle2(element) {
  return _win.getComputedStyle(element.nodeType === Node.DOCUMENT_NODE ? element.scrollingElement : element);
}, _makePositionable = function _makePositionable2(element) {
  var position = _getComputedStyle(element).position;
  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
}, _setDefaults2 = function _setDefaults3(obj, defaults2) {
  for (var p in defaults2) {
    p in obj || (obj[p] = defaults2[p]);
  }
  return obj;
}, _getBounds = function _getBounds2(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1), bounds = element.getBoundingClientRect ? element.getBoundingClientRect() : element.scrollingElement.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
}, _getSize = function _getSize2(element, _ref3) {
  var d2 = _ref3.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
}, _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
  var a = [], labels = timeline2.labels, duration = timeline2.duration(), p;
  for (p in labels) {
    a.push(labels[p] / duration);
  }
  return a;
}, _getClosestLabel = function _getClosestLabel2(animation) {
  return function(value) {
    return gsap.utils.snap(_getLabelRatioArray(animation), value);
  };
}, _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
  var snap3 = gsap.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
    return a2 - b;
  });
  return a ? function(value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }
    var i;
    if (!direction) {
      return snap3(value);
    }
    if (direction > 0) {
      value -= threshold;
      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }
      return a[i - 1];
    } else {
      i = a.length;
      value += threshold;
      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }
    return a[0];
  } : function(value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }
    var snapped = snap3(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
}, _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
  return function(value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
  };
}, _multiListener = function _multiListener2(func, element, types, callback) {
  return types.split(",").forEach(function(type) {
    return func(element, type, callback);
  });
}, _addListener2 = function _addListener3(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
}, _removeListener2 = function _removeListener3(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
}, _wheelListener = function _wheelListener2(func, el, scrollFunc) {
  scrollFunc = scrollFunc && scrollFunc.wheelHandler;
  if (scrollFunc) {
    func(el, "wheel", scrollFunc);
    func(el, "touchmove", scrollFunc);
  }
}, _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, _defaults = {
  toggleActions: "play",
  anticipatePin: 0
}, _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, _offsetToPx = function _offsetToPx2(value, size) {
  if (_isString2(value)) {
    var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }
    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }
  return value;
}, _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
  var e = _doc.createElement("div"), useFixedPosition = _isViewport2(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body : container.tagName === "IFRAME" ? container.contentDocument.body : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];
  _positionMarker(e, 0, direction, isStart);
  return e;
}, _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  gsap.set(marker, vars);
}, _triggers = [], _ids = {}, _rafID, _sync = function _sync2() {
  return _getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
}, _onScroll2 = function _onScroll3() {
  if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) {
    _scrollers.cache++;
    if (_normalizer) {
      _rafID || (_rafID = requestAnimationFrame(_updateAll));
    } else {
      _updateAll();
    }
    _lastScrollTime || _dispatch2("scrollStart");
    _lastScrollTime = _getTime();
  }
}, _setBaseDimensions = function _setBaseDimensions2() {
  _baseScreenWidth = _win.innerWidth;
  _baseScreenHeight = _win.innerHeight;
}, _onResize = function _onResize2(force) {
  _scrollers.cache++;
  (force === true || !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * 0.25)) && _resizeDelay.restart(true);
}, _listeners = {}, _emptyArray = [], _softRefresh = function _softRefresh2() {
  return _removeListener2(ScrollTrigger, "scrollEnd", _softRefresh2) || _refreshAll(true);
}, _dispatch2 = function _dispatch3(type) {
  return _listeners[type] && _listeners[type].map(function(f) {
    return f();
  }) || _emptyArray;
}, _savedStyles = [], _revertRecorded = function _revertRecorded2(media) {
  for (var i = 0; i < _savedStyles.length; i += 5) {
    if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
      _savedStyles[i + 3].uncache = 1;
    }
  }
}, _recordScrollPositions = function _recordScrollPositions2() {
  return _scrollers.forEach(function(obj) {
    return _isFunction2(obj) && ++obj.cacheID && (obj.rec = obj());
  });
}, _revertAll = function _revertAll2(kill, media) {
  var trigger;
  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];
    if (trigger && (!media || trigger._ctx === media)) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.revert(true, true);
      }
    }
  }
  _isReverted = true;
  media && _revertRecorded(media);
  media || _dispatch2("revert");
}, _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
  _scrollers.cache++;
  (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
    return _isFunction2(obj) && obj.cacheID++ && (obj.rec = 0);
  });
  _isString2(scrollRestoration) && (_win.history.scrollRestoration = _scrollRestoration = scrollRestoration);
}, _refreshingAll, _refreshID = 0, _queueRefreshID, _queueRefreshAll = function _queueRefreshAll2() {
  if (_queueRefreshID !== _refreshID) {
    var id = _queueRefreshID = _refreshID;
    requestAnimationFrame(function() {
      return id === _refreshID && _refreshAll(true);
    });
  }
}, _refresh100vh = function _refresh100vh2() {
  _body.appendChild(_div100vh);
  _100vh = !_normalizer && _div100vh.offsetHeight || _win.innerHeight;
  _body.removeChild(_div100vh);
}, _hideAllMarkers = function _hideAllMarkers2(hide) {
  return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
    return el.style.display = hide ? "none" : "block";
  });
}, _refreshAll = function _refreshAll2(force, skipRevert) {
  _docEl = _doc.documentElement;
  _body = _doc.body;
  _root = [_win, _doc, _docEl, _body];
  if (_lastScrollTime && !force && !_isReverted) {
    _addListener2(ScrollTrigger, "scrollEnd", _softRefresh);
    return;
  }
  _refresh100vh();
  _refreshingAll = ScrollTrigger.isRefreshing = true;
  _isReverted || _recordScrollPositions();
  var refreshInits = _dispatch2("refreshInit");
  _sort && ScrollTrigger.sort();
  skipRevert || _revertAll();
  _scrollers.forEach(function(obj) {
    if (_isFunction2(obj)) {
      obj.smooth && (obj.target.style.scrollBehavior = "auto");
      obj(0);
    }
  });
  _triggers.slice(0).forEach(function(t) {
    return t.refresh();
  });
  _isReverted = false;
  _triggers.forEach(function(t) {
    if (t._subPinOffset && t.pin) {
      var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
      t.revert(true, 1);
      t.adjustPinSpacing(t.pin[prop] - original);
      t.refresh();
    }
  });
  _clampingMax = 1;
  _hideAllMarkers(true);
  _triggers.forEach(function(t) {
    var max = _maxScroll(t.scroller, t._dir), endClamp = t.vars.end === "max" || t._endClamp && t.end > max, startClamp = t._startClamp && t.start >= max;
    (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
  });
  _hideAllMarkers(false);
  _clampingMax = 0;
  refreshInits.forEach(function(result) {
    return result && result.render && result.render(-1);
  });
  _scrollers.forEach(function(obj) {
    if (_isFunction2(obj)) {
      obj.smooth && requestAnimationFrame(function() {
        return obj.target.style.scrollBehavior = "smooth";
      });
      obj.rec && obj(obj.rec);
    }
  });
  _clearScrollMemory(_scrollRestoration, 1);
  _resizeDelay.pause();
  _refreshID++;
  _refreshingAll = 2;
  _updateAll(2);
  _triggers.forEach(function(t) {
    return _isFunction2(t.vars.onRefresh) && t.vars.onRefresh(t);
  });
  _refreshingAll = ScrollTrigger.isRefreshing = false;
  _dispatch2("refresh");
}, _lastScroll = 0, _direction = 1, _primary, _updateAll = function _updateAll2(force) {
  if (force === 2 || !_refreshingAll && !_isReverted) {
    ScrollTrigger.isUpdating = true;
    _primary && _primary.update(0);
    var l = _triggers.length, time = _getTime(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
    _direction = _lastScroll > scroll ? -1 : 1;
    _refreshingAll || (_lastScroll = scroll);
    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;
        _dispatch2("scrollEnd");
      }
      _time2 = _time1;
      _time1 = time;
    }
    if (_direction < 0) {
      _i = l;
      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }
    ScrollTrigger.isUpdating = false;
  }
  _rafID = 0;
}, _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]), _swapPinOut = function _swapPinOut2(pin, spacer, state) {
  _setState(state);
  var cache = pin._gsap;
  if (cache.spacerIsNative) {
    _setState(cache.spacerState);
  } else if (pin._gsap.swappedIn) {
    var parent = spacer.parentNode;
    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }
  pin._gsap.swappedIn = false;
}, _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
  if (!pin._gsap.swappedIn) {
    var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }
    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = "auto";
    spacerStyle.flexBasis = cs.flexBasis || "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
    _setState(spacerState);
    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];
    if (pin.parentNode !== spacer) {
      pin.parentNode.insertBefore(spacer, pin);
      spacer.appendChild(pin);
    }
    pin._gsap.swappedIn = true;
  }
}, _capsExp = /([A-Z])/g, _setState = function _setState2(state) {
  if (state) {
    var style2 = state.t.style, l = state.length, i = 0, p, value;
    (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1;
    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];
      if (value) {
        style2[p] = value;
      } else if (style2[p]) {
        style2.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
}, _getState = function _getState2(element) {
  var l = _stateProps.length, style2 = element.style, state = [], i = 0;
  for (; i < l; i++) {
    state.push(_stateProps[i], style2[_stateProps[i]]);
  }
  state.t = element;
  return state;
}, _copyState = function _copyState2(state, override, omitOffsets) {
  var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }
  result.t = state.t;
  return result;
}, _winOffsets = {
  left: 0,
  top: 0
}, _parsePosition2 = function _parsePosition3(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
  _isFunction2(value) && (value = value(self));
  if (_isString2(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }
  var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
  containerAnimation && containerAnimation.seek(0);
  isNaN(value) || (value = +value);
  if (!_isNumber2(value)) {
    _isFunction2(trigger) && (trigger = trigger(self));
    var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
    element = _getTarget(trigger, self) || _body;
    bounds = _getBounds(element) || {};
    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }
    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset;
  } else {
    containerAnimation && (value = gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
    markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
  }
  if (clampZeroProp) {
    self[clampZeroProp] = value || -1e-3;
    value < 0 && (value = 0);
  }
  if (marker) {
    var position = value + scrollerSize, isStart = marker._isStart;
    p1 = "scroll" + direction.d2;
    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);
    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }
  if (containerAnimation && element) {
    p1 = _getBounds(element);
    containerAnimation.seek(scrollerMax);
    p2 = _getBounds(element);
    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
    value = value / containerAnimation._caScrollDist * scrollerMax;
  }
  containerAnimation && containerAnimation.seek(time);
  return containerAnimation ? value : Math.round(value);
}, _prefixExp = /(webkit|moz|length|cssText|inset)/i, _reparent = function _reparent2(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style2 = element.style, p, cs;
    if (parent === _body) {
      element._stOrig = style2.cssText;
      cs = _getComputedStyle(element);
      for (p in cs) {
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style2[p] === "string" && p !== "0") {
          style2[p] = cs[p];
        }
      }
      style2.top = top;
      style2.left = left;
    } else {
      style2.cssText = element._stOrig;
    }
    gsap.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
}, _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
  var last1 = initialValue, last2 = last1;
  return function(value) {
    var current = Math.round(getValueFunc());
    if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
      value = current;
      onInterrupt && onInterrupt();
    }
    last2 = last1;
    last1 = Math.round(value);
    return last1;
  };
}, _shiftMarker = function _shiftMarker2(marker, direction, value) {
  var vars = {};
  vars[direction.p] = "+=" + value;
  gsap.set(marker, vars);
}, _getTweenCreator = function _getTweenCreator2(scroller, direction) {
  var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
    initialValue = initialValue || getScroll();
    var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
      tween.kill();
      getTween2.tween = 0;
    });
    change2 = change1 && change2 || 0;
    change1 = change1 || scrollTo - initialValue;
    tween && tween.kill();
    vars[prop] = scrollTo;
    vars.inherit = false;
    vars.modifiers = modifiers;
    modifiers[prop] = function() {
      return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
    };
    vars.onUpdate = function() {
      _scrollers.cache++;
      getTween2.tween && _updateAll();
    };
    vars.onComplete = function() {
      getTween2.tween = 0;
      onComplete && onComplete.call(tween);
    };
    tween = getTween2.tween = gsap.to(scroller, vars);
    return tween;
  };
  scroller[prop] = getScroll;
  getScroll.wheelHandler = function() {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  };
  _addListener2(scroller, "wheel", getScroll.wheelHandler);
  ScrollTrigger.isTouch && _addListener2(scroller, "touchmove", getScroll.wheelHandler);
  return getTween;
};
var ScrollTrigger = /* @__PURE__ */ function() {
  function ScrollTrigger2(vars, animation) {
    _coreInitted || ScrollTrigger2.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
    _context(this);
    this.init(vars, animation);
  }
  var _proto = ScrollTrigger2.prototype;
  _proto.init = function init4(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true);
    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough2;
      return;
    }
    vars = _setDefaults2(_isString2(vars) || _isNumber2(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);
    var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win), scrollerCache = gsap.core.getCache(scroller), isViewport = _isViewport2(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
      return vars.onRefreshInit(self);
    }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
    self._startClamp = self._endClamp = false;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;
    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self);
    }
    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _vertical),
      left: _getTweenCreator(scroller, _horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
    self.scrubDuration = function(value) {
      scrubSmooth = _isNumber2(value) && value;
      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
          ease: "expo",
          totalProgress: "+=0",
          inherit: false,
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        });
      }
    };
    if (animation) {
      animation.vars.lazy = false;
      animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
      self.animation = animation.pause();
      animation.scrollTrigger = self;
      self.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }
    if (snap3) {
      if (!_isObject2(snap3) || snap3.push) {
        snap3 = {
          snapTo: snap3
        };
      }
      "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
        scrollBehavior: "auto"
      });
      _scrollers.forEach(function(o) {
        return _isFunction2(o) && o.target === (isViewport ? _doc.scrollingElement || _docEl : scroller) && (o.smooth = false);
      });
      snapFunc = _isFunction2(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st) {
        return _snapDirectional(snap3.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
      } : gsap.utils.snap(snap3.snapTo);
      snapDurClamp = snap3.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject2(snapDurClamp) ? _clamp2(snapDurClamp.min, snapDurClamp.max) : _clamp2(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
        var scroll = scrollFunc(), refreshedRecently = _getTime() - lastRefresh < 500, tween = tweenTo.tween;
        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime() - _time2) * 1e3 || 0, change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
          endValue = snapFunc(naturalEnd, self);
          _isNumber2(endValue) || (endValue = naturalEnd);
          endScroll = Math.max(0, Math.round(start + endValue * change));
          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              return;
            }
            if (snap3.inertia === false) {
              change1 = endValue - progress;
            }
            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap3.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _callback2(self, _onInterrupt);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();
                if (animation && !isToggle) {
                  scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                }
                snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _callback2(self, _onComplete);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && _callback2(self, onStart, tweenTo.tween);
          }
        } else if (self.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }
    id && (_ids[id] = self);
    trigger = self.trigger = _getTarget(trigger || pin !== true && pin);
    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self));
    pin = pin === true ? trigger : _getTarget(pin);
    _isString2(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });
    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
      self.pin = pin;
      pinCache = gsap.core.getCache(pin);
      if (!pinCache.spacer) {
        if (pinSpacer) {
          pinSpacer = _getTarget(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }
        pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }
      vars.force3D !== false && gsap.set(pin, {
        force3D: true
      });
      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap.getProperty(pin);
      pinSetter = gsap.quickSetter(pin, direction.a, _px);
      _swapPinIn(pin, spacer, cs);
      pinState = _getState(pin);
    }
    if (markers) {
      markerVars = _isObject2(markers) ? _setDefaults2(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];
      var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px));
      if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body : scroller);
        gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }
    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function() {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
      });
    }
    self.previous = function() {
      return _triggers[_triggers.indexOf(self) - 1];
    };
    self.next = function() {
      return _triggers[_triggers.indexOf(self) + 1];
    };
    self.revert = function(revert, temp) {
      if (!temp) {
        return self.kill(true);
      }
      var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
      if (r !== self.isReverted) {
        if (r) {
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.style.display = r ? "none" : "block";
        });
        if (r) {
          _refreshing = self;
          self.update(r);
        }
        if (pin && (!pinReparent || !self.isActive)) {
          if (r) {
            _swapPinOut(pin, spacer, pinOriginalState);
          } else {
            _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
          }
        }
        r || self.update(r);
        _refreshing = prevRefreshing;
        self.isReverted = r;
      }
    };
    self.refresh = function(soft, force, position, pinOffset) {
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }
      if (pin && soft && _lastScrollTime) {
        _addListener2(ScrollTrigger2, "scrollEnd", _softRefresh);
        return;
      }
      !_refreshingAll && onRefreshInit && onRefreshInit(self);
      _refreshing = self;
      if (tweenTo.tween && !position) {
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }
      scrubTween && scrubTween.pause();
      if (invalidateOnRefresh && animation) {
        animation.revert({
          kill: false
        }).invalidate();
        animation.getChildren ? animation.getChildren(true, true, false).forEach(function(t) {
          return t.vars.immediateRender && t.render(0, true, true);
        }) : animation.vars.immediateRender && animation.render(0, true, true);
      }
      self.isReverted || self.revert(true, true);
      self._subPinOffset = false;
      var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01 || !change, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject2(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject2(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
      if (markers && _isObject2(position)) {
        markerStartOffset = gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset = gsap.getProperty(markerEndTrigger, direction.p);
      }
      while (i-- > 0) {
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self);
        curPin = curTrigger.pin;
        if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger);
          curTrigger.revert(true, true);
        }
        if (curTrigger !== _triggers[i]) {
          triggerIndex--;
          i--;
        }
      }
      _isFunction2(parsedStart) && (parsedStart = parsedStart(self));
      parsedStart = _parseClamp(parsedStart, "start", self);
      start = _parsePosition2(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
      _isFunction2(parsedEnd) && (parsedEnd = parsedEnd(self));
      if (_isString2(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString2(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset2 = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString2(parsedStart) ? parsedStart : (containerAnimation ? gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
          parsedEndTrigger = trigger;
        }
      }
      parsedEnd = _parseClamp(parsedEnd, "end", self);
      end = Math.max(start, _parsePosition2(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -1e-3;
      offset2 = 0;
      i = triggerIndex;
      while (i--) {
        curTrigger = _triggers[i] || {};
        curPin = curTrigger.pin;
        if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
          cs2 = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
          if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
            offset2 += cs2 * (1 - curTrigger.progress);
          }
          curPin === pin && (otherPinOffset += cs2);
        }
      }
      start += offset2;
      end += offset2;
      self._startClamp && (self._startClamp += offset2);
      if (self._endClamp && !_refreshingAll) {
        self._endClamp = end || -1e-3;
        end = Math.min(end, _maxScroll(scroller, direction));
      }
      change = end - start || (start -= 0.01) && 1e-3;
      if (isFirstRefresh) {
        prevProgress = gsap.utils.clamp(0, 1, gsap.utils.normalize(start, end, prevScroll));
      }
      self._pinPush = otherPinOffset;
      if (markerStart && offset2) {
        cs2 = {};
        cs2[direction.a] = "+=" + offset2;
        pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
        gsap.set([markerStart, markerEnd], cs2);
      }
      if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
        cs2 = _getComputedStyle(pin);
        isVertical = direction === _vertical;
        scroll = scrollFunc();
        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
        if (!max && end > 1) {
          forcedOverflow = (isViewport ? _doc.scrollingElement || _docEl : scroller).style;
          forcedOverflow = {
            style: forcedOverflow,
            value: forcedOverflow["overflow" + direction.a.toUpperCase()]
          };
          if (isViewport && _getComputedStyle(_body)["overflow" + direction.a.toUpperCase()] !== "scroll") {
            forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
          }
        }
        _swapPinIn(pin, spacer, cs2);
        pinState = _getState(pin);
        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          if (i) {
            spacerState.push(direction.d, i + _px);
            spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
          }
          _setState(spacerState);
          if (pinnedContainer) {
            _triggers.forEach(function(t) {
              if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                t._subPinOffset = true;
              }
            });
          }
          useFixedPosition && scrollFunc(prevScroll);
        } else {
          i = _getSize(pin, direction);
          i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
        }
        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs2[_padding];
          override[_padding + _Top] = cs2[_padding + _Top];
          override[_padding + _Right] = cs2[_padding + _Right];
          override[_padding + _Bottom] = cs2[_padding + _Bottom];
          override[_padding + _Left] = cs2[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          _refreshingAll && scrollFunc(0);
        }
        if (animation) {
          initted = animation._initted;
          _suppressOverwrites(1);
          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          pinMoves = Math.abs(change - pinChange) > 1;
          useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
          animation.render(0, true, true);
          initted || animation.invalidate(true);
          animation.parent || animation.totalTime(animation.totalTime());
          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }
        forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
      } else if (trigger && scrollFunc() && !containerAnimation) {
        bounds = trigger.parentNode;
        while (bounds && bounds !== _body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }
          bounds = bounds.parentNode;
        }
      }
      revertedPins && revertedPins.forEach(function(t) {
        return t.revert(false, true);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
      if (!containerAnimation && !_refreshingAll) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }
      self.revert(false, true);
      lastRefresh = _getTime();
      if (snapDelayedCall) {
        lastSnap = -1;
        snapDelayedCall.restart(true);
      }
      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
      if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh || animation && !animation._initted) {
        animation && !isToggle && (animation._initted || prevProgress || animation.vars.immediateRender !== false) && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap.utils.normalize(start, end, 0) : prevProgress, true);
        self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
      }
      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      scrubTween && scrubTween.invalidate();
      if (!isNaN(markerStartOffset)) {
        markerStartOffset -= gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset -= gsap.getProperty(markerEndTrigger, direction.p);
        _shiftMarker(markerStartTrigger, direction, markerStartOffset);
        _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
        _shiftMarker(markerEndTrigger, direction, markerEndOffset);
        _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
      }
      isFirstRefresh && !_refreshingAll && self.update();
      if (onRefresh && !_refreshingAll && !executingOnRefresh) {
        executingOnRefresh = true;
        onRefresh(self);
        executingOnRefresh = false;
      }
    };
    self.getVelocity = function() {
      return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1e3 || 0;
    };
    self.endAnimation = function() {
      _endAnimation(self.callbackAnimation);
      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };
    self.labelToScroll = function(label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };
    self.getTrailing = function(name) {
      var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
      return (_isString2(name) ? a.filter(function(t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function(t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    };
    self.update = function(reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }
      var scroll = _refreshingAll === true ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;
        if (snap3) {
          snap22 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      }
      if (anticipatePin && pin && !_refreshing && !_startup && _lastScrollTime) {
        if (!clipped && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) {
          clipped = 1e-4;
        } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) {
          clipped = 0.9999;
        }
      }
      if (clipped !== prevProgress2 && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress2 && prevProgress2 < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress2;
        self.direction = clipped > prevProgress2 ? 1 : -1;
        self.progress = clipped;
        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }
        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction2(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
          return t.endAnimation();
        }));
        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
          }
        }
        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
          if (!useFixedPosition) {
            pinSetter(_round2(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true), _offset = scroll - start;
                _reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }
            _setState(isActive || isAtMax ? pinActiveState : pinState);
            pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }
        snap3 && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        });
        onUpdate && !isToggle && !reset && onUpdate(self);
        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }
            onUpdate && onUpdate(self);
          }
          if (toggled || !_limitCallbacks) {
            onToggle && toggled && _callback2(self, onToggle);
            callbacks[toggleState] && _callback2(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
            if (!toggled) {
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback2(self, callbacks[toggleState]);
            }
          }
          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber2(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);
            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      }
      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }
      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };
    self.enable = function(reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;
        _addListener2(scroller, "resize", _onResize);
        isViewport || _addListener2(scroller, "scroll", _onScroll2);
        onRefreshInit && _addListener2(ScrollTrigger2, "refreshInit", onRefreshInit);
        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }
        refresh !== false && self.refresh();
      }
    };
    self.getTween = function(snap4) {
      return snap4 && tweenTo ? tweenTo.tween : scrubTween;
    };
    self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
      if (containerAnimation) {
        var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
        newStart = st.start + _change * newStart / duration;
        newEnd = st.start + _change * newEnd / duration;
      }
      self.refresh(false, false, {
        start: _keepClamp(newStart, keepClamp && !!self._startClamp),
        end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
      }, pinOffset);
      self.update();
    };
    self.adjustPinSpacing = function(amount) {
      if (spacerState && amount) {
        var i = spacerState.indexOf(direction.d) + 1;
        spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
        spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
        _setState(spacerState);
      }
    };
    self.disable = function(reset, allowAnimation) {
      reset !== false && self.revert(true, true);
      if (self.enabled) {
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener2(ScrollTrigger2, "refreshInit", onRefreshInit);
        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }
        if (!isViewport) {
          var i = _triggers.length;
          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return;
            }
          }
          _removeListener2(scroller, "resize", _onResize);
          isViewport || _removeListener2(scroller, "scroll", _onScroll2);
        }
      }
    };
    self.kill = function(revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];
      var i = _triggers.indexOf(self);
      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--;
      i = 0;
      _triggers.forEach(function(t) {
        return t.scroller === self.scroller && (i = 1);
      });
      i || _refreshingAll || (self.scroll.rec = 0);
      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.revert({
          kill: false
        });
        allowAnimation || animation.kill();
      }
      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self && (_primary = 0);
      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;
        _triggers.forEach(function(t) {
          return t.pin === pin && i++;
        });
        i || (pinCache.spacer = 0);
      }
      vars.onKill && vars.onKill(self);
    };
    _triggers.push(self);
    self.enable(false, false);
    customRevertReturn && customRevertReturn(self);
    if (animation && animation.add && !change) {
      var updateFunc = self.update;
      self.update = function() {
        self.update = updateFunc;
        _scrollers.cache++;
        start || end || self.refresh();
      };
      gsap.delayedCall(0.01, self.update);
      change = 0.01;
      start = end = 0;
    } else {
      self.refresh();
    }
    pin && _queueRefreshAll();
  };
  ScrollTrigger2.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP2();
      _windowExists3() && window.document && ScrollTrigger2.enable();
      _coreInitted = _enabled;
    }
    return _coreInitted;
  };
  ScrollTrigger2.defaults = function defaults2(config3) {
    if (config3) {
      for (var p in config3) {
        _defaults[p] = config3[p];
      }
    }
    return _defaults;
  };
  ScrollTrigger2.disable = function disable(reset, kill) {
    _enabled = 0;
    _triggers.forEach(function(trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    });
    _removeListener2(_win, "wheel", _onScroll2);
    _removeListener2(_doc, "scroll", _onScroll2);
    clearInterval(_syncInterval);
    _removeListener2(_doc, "touchcancel", _passThrough2);
    _removeListener2(_body, "touchstart", _passThrough2);
    _multiListener(_removeListener2, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
    _multiListener(_removeListener2, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
    _resizeDelay.kill();
    _iterateAutoRefresh(_removeListener2);
    for (var i = 0; i < _scrollers.length; i += 3) {
      _wheelListener(_removeListener2, _scrollers[i], _scrollers[i + 1]);
      _wheelListener(_removeListener2, _scrollers[i], _scrollers[i + 2]);
    }
  };
  ScrollTrigger2.enable = function enable() {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;
    if (gsap) {
      _toArray = gsap.utils.toArray;
      _clamp2 = gsap.utils.clamp;
      _context = gsap.core.context || _passThrough2;
      _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough2;
      _scrollRestoration = _win.history.scrollRestoration || "auto";
      _lastScroll = _win.pageYOffset || 0;
      gsap.core.globals("ScrollTrigger", ScrollTrigger2);
      if (_body) {
        _enabled = 1;
        _div100vh = document.createElement("div");
        _div100vh.style.height = "100vh";
        _div100vh.style.position = "absolute";
        _refresh100vh();
        _rafBugFix();
        Observer.register(gsap);
        ScrollTrigger2.isTouch = Observer.isTouch;
        _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
        _ignoreMobileResize = Observer.isTouch === 1;
        _addListener2(_win, "wheel", _onScroll2);
        _root = [_win, _doc, _docEl, _body];
        if (gsap.matchMedia) {
          ScrollTrigger2.matchMedia = function(vars) {
            var mm = gsap.matchMedia(), p;
            for (p in vars) {
              mm.add(p, vars[p]);
            }
            return mm;
          };
          gsap.addEventListener("matchMediaInit", function() {
            _recordScrollPositions();
            _revertAll();
          });
          gsap.addEventListener("matchMediaRevert", function() {
            return _revertRecorded();
          });
          gsap.addEventListener("matchMedia", function() {
            _refreshAll(0, 1);
            _dispatch2("matchMedia");
          });
          gsap.matchMedia().add("(orientation: portrait)", function() {
            _setBaseDimensions();
            return _setBaseDimensions;
          });
        } else {
          console.warn("Requires GSAP 3.11.0 or later");
        }
        _setBaseDimensions();
        _addListener2(_doc, "scroll", _onScroll2);
        var bodyHasStyle = _body.hasAttribute("style"), bodyStyle = _body.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap.core.Animation.prototype, bounds, i;
        AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
          value: function value() {
            return this.time(-0.01, true);
          }
        });
        bodyStyle.borderTopStyle = "solid";
        bounds = _getBounds(_body);
        _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
        _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
        if (!bodyHasStyle) {
          _body.setAttribute("style", "");
          _body.removeAttribute("style");
        }
        _syncInterval = setInterval(_sync, 250);
        gsap.delayedCall(0.5, function() {
          return _startup = 0;
        });
        _addListener2(_doc, "touchcancel", _passThrough2);
        _addListener2(_body, "touchstart", _passThrough2);
        _multiListener(_addListener2, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
        _multiListener(_addListener2, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
        _transformProp = gsap.utils.checkPrefix("transform");
        _stateProps.push(_transformProp);
        _coreInitted = _getTime();
        _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [_doc, "visibilitychange", function() {
          var w = _win.innerWidth, h = _win.innerHeight;
          if (_doc.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", _refreshAll, _win, "resize", _onResize];
        _iterateAutoRefresh(_addListener2);
        _triggers.forEach(function(trigger) {
          return trigger.enable(0, 1);
        });
        for (i = 0; i < _scrollers.length; i += 3) {
          _wheelListener(_removeListener2, _scrollers[i], _scrollers[i + 1]);
          _wheelListener(_removeListener2, _scrollers[i], _scrollers[i + 2]);
        }
      } else if (_doc) {
        var onLoad = function onLoad2() {
          ScrollTrigger2.enable();
          _doc.removeEventListener("DOMContentLoaded", onLoad2);
        };
        _doc.addEventListener("DOMContentLoaded", onLoad);
      }
    }
  };
  ScrollTrigger2.config = function config3(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger2.isTouch === 1 && vars.ignoreMobileResize);
    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener2) || _iterateAutoRefresh(_addListener2, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };
  ScrollTrigger2.scrollerProxy = function scrollerProxy(target, vars) {
    var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport2(t);
    if (~i) {
      _scrollers.splice(i, isViewport ? 6 : 2);
    }
    if (vars) {
      isViewport ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
    }
  };
  ScrollTrigger2.clearMatchMedia = function clearMatchMedia(query) {
    _triggers.forEach(function(t) {
      return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
    });
  };
  ScrollTrigger2.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString2(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
  };
  ScrollTrigger2.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString2(element) && (element = _getTarget(element));
    var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
  };
  ScrollTrigger2.killAll = function killAll(allowListeners) {
    _triggers.slice(0).forEach(function(t) {
      return t.vars.id !== "ScrollSmoother" && t.kill();
    });
    if (allowListeners !== true) {
      var listeners = _listeners.killAll || [];
      _listeners = {};
      listeners.forEach(function(f) {
        return f();
      });
    }
  };
  return ScrollTrigger2;
}();
ScrollTrigger.version = "3.15.0";
ScrollTrigger.saveStyles = function(targets) {
  return targets ? _toArray(targets).forEach(function(target) {
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);
      i >= 0 && _savedStyles.splice(i, 5);
      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _context());
    }
  }) : _savedStyles;
};
ScrollTrigger.revert = function(soft, media) {
  return _revertAll(!soft, media);
};
ScrollTrigger.create = function(vars, animation) {
  return new ScrollTrigger(vars, animation);
};
ScrollTrigger.refresh = function(safe) {
  return safe ? _onResize(true) : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};
ScrollTrigger.update = function(force) {
  return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
};
ScrollTrigger.clearScrollMemory = _clearScrollMemory;
ScrollTrigger.maxScroll = function(element, horizontal) {
  return _maxScroll(element, horizontal ? _horizontal : _vertical);
};
ScrollTrigger.getScrollFunc = function(element, horizontal) {
  return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
};
ScrollTrigger.getById = function(id) {
  return _ids[id];
};
ScrollTrigger.getAll = function() {
  return _triggers.filter(function(t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
ScrollTrigger.isScrolling = function() {
  return !!_lastScrollTime;
};
ScrollTrigger.snapDirectional = _snapDirectional;
ScrollTrigger.addEventListener = function(type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};
ScrollTrigger.removeEventListener = function(type, callback) {
  var a = _listeners[type], i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};
ScrollTrigger.batch = function(targets, vars) {
  var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
    var elements = [], triggers = [], delay = gsap.delayedCall(interval, function() {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function(self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  }, p;
  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction2(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }
  if (_isFunction2(batchMax)) {
    batchMax = batchMax();
    _addListener2(ScrollTrigger, "refresh", function() {
      return batchMax = vars.batchMax();
    });
  }
  _toArray(targets).forEach(function(target) {
    var config3 = {};
    for (p in varsCopy) {
      config3[p] = varsCopy[p];
    }
    config3.trigger = target;
    result.push(ScrollTrigger.create(config3));
  });
  return result;
};
var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
  current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
  return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
}, _allowNativePanning = function _allowNativePanning2(target, direction) {
  if (direction === true) {
    target.style.removeProperty("touch-action");
  } else {
    target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
  }
  target === _docEl && _allowNativePanning2(_body, direction);
}, _overflow = {
  auto: 1,
  scroll: 1
}, _nestedScroll = function _nestedScroll2(_ref5) {
  var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
  var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap.core.getCache(node), time = _getTime(), cs;
  if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
    while (node && node !== _body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
      node = node.parentNode;
    }
    cache._isScroll = node && node !== target && !_isViewport2(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
    cache._isScrollT = time;
  }
  if (cache._isScroll || axis === "x") {
    event.stopPropagation();
    event._gsapAllow = true;
  }
}, _inputObserver = function _inputObserver2(target, type, inputs, nested) {
  return Observer.create({
    target,
    capture: true,
    debounce: false,
    lockAxis: true,
    type,
    onWheel: nested = nested && _nestedScroll,
    onPress: nested,
    onDrag: nested,
    onScroll: nested,
    onEnable: function onEnable() {
      return inputs && _addListener2(_doc, Observer.eventTypes[0], _captureInputs, false, true);
    },
    onDisable: function onDisable() {
      return _removeListener2(_doc, Observer.eventTypes[0], _captureInputs, true);
    }
  });
}, _inputExp = /(input|label|select|textarea)/i, _inputIsFocused, _captureInputs = function _captureInputs2(e) {
  var isInput = _inputExp.test(e.target.tagName);
  if (isInput || _inputIsFocused) {
    e._gsapAllow = true;
    _inputIsFocused = isInput;
  }
}, _getScrollNormalizer = function _getScrollNormalizer2(vars) {
  _isObject2(vars) || (vars = {});
  vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
  vars.type || (vars.type = "wheel,touch");
  vars.debounce = !!vars.debounce;
  vars.id = vars.id || "normalizer";
  var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = _getTarget(vars.target) || _docEl, smoother = gsap.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction2(momentum) ? function() {
    return momentum(self);
  } : function() {
    return momentum || 2.8;
  }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
    return skipTouchMove = false;
  }, scrollClampX = _passThrough2, scrollClampY = _passThrough2, updateClamps = function updateClamps2() {
    maxY = _maxScroll(target, _vertical);
    scrollClampY = _clamp2(_fixIOSBug ? 1 : 0, maxY);
    normalizeScrollX && (scrollClampX = _clamp2(0, _maxScroll(target, _horizontal)));
    lastRefreshID = _refreshID;
  }, removeContentOffset = function removeContentOffset2() {
    content._gsap.y = _round2(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
    content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
    scrollFuncY.offset = scrollFuncY.cacheID = 0;
  }, ignoreDrag = function ignoreDrag2() {
    if (skipTouchMove) {
      requestAnimationFrame(resumeTouchMove);
      var offset = _round2(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
      if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
        scrollFuncY.offset = scroll - scrollFuncY.v;
        var y = _round2((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
        content._gsap.y = y + "px";
        scrollFuncY.cacheID = _scrollers.cache;
        _updateAll();
      }
      return true;
    }
    scrollFuncY.offset && removeContentOffset();
    skipTouchMove = true;
  }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
    updateClamps();
    if (tween.isActive() && tween.vars.scrollY > maxY) {
      scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    }
  };
  content && gsap.set(content, {
    y: "+=0"
  });
  vars.ignoreCheck = function(e) {
    return _fixIOSBug && e.type === "touchmove" && ignoreDrag() || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
  };
  vars.onPress = function() {
    skipTouchMove = false;
    var prevScale = scale;
    scale = _round2((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
    tween.pause();
    prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
    startScrollX = scrollFuncX();
    startScrollY = scrollFuncY();
    updateClamps();
    lastRefreshID = _refreshID;
  };
  vars.onRelease = vars.onGestureStart = function(self2, wasDragging) {
    scrollFuncY.offset && removeContentOffset();
    if (!wasDragging) {
      onStopDelayedCall.restart(true);
    } else {
      _scrollers.cache++;
      var dur = resolveMomentumDuration(), currentScroll, endScroll;
      if (normalizeScrollX) {
        currentScroll = scrollFuncX();
        endScroll = currentScroll + dur * 0.05 * -self2.velocityX / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
        tween.vars.scrollX = scrollClampX(endScroll);
      }
      currentScroll = scrollFuncY();
      endScroll = currentScroll + dur * 0.05 * -self2.velocityY / 0.227;
      dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
      tween.vars.scrollY = scrollClampY(endScroll);
      tween.invalidate().duration(dur).play(0.01);
      if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
        gsap.to({}, {
          onUpdate: onResize,
          duration: dur
        });
      }
    }
    onRelease && onRelease(self2);
  };
  vars.onWheel = function() {
    tween._ts && tween.pause();
    if (_getTime() - wheelRefresh > 1e3) {
      lastRefreshID = 0;
      wheelRefresh = _getTime();
    }
  };
  vars.onChange = function(self2, dx, dy, xArray, yArray) {
    _refreshID !== lastRefreshID && updateClamps();
    dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self2.startX - self2.x) : scrollFuncX() + dx - xArray[1]));
    if (dy) {
      scrollFuncY.offset && removeContentOffset();
      var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self2.startY - self2.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
      isTouch && y !== yClamped && (startScrollY += yClamped - y);
      scrollFuncY(yClamped);
    }
    (dy || dx) && _updateAll();
  };
  vars.onEnable = function() {
    _allowNativePanning(target, normalizeScrollX ? false : "x");
    ScrollTrigger.addEventListener("refresh", onResize);
    _addListener2(_win, "resize", onResize);
    if (scrollFuncY.smooth) {
      scrollFuncY.target.style.scrollBehavior = "auto";
      scrollFuncY.smooth = scrollFuncX.smooth = false;
    }
    inputObserver.enable();
  };
  vars.onDisable = function() {
    _allowNativePanning(target, true);
    _removeListener2(_win, "resize", onResize);
    ScrollTrigger.removeEventListener("refresh", onResize);
    inputObserver.kill();
  };
  vars.lockAxis = vars.lockAxis !== false;
  self = new Observer(vars);
  self.iOS = _fixIOSBug;
  _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
  _fixIOSBug && gsap.ticker.add(_passThrough2);
  onStopDelayedCall = self._dc;
  tween = gsap.to(self, {
    ease: "power4",
    paused: true,
    inherit: false,
    scrollX: normalizeScrollX ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
        return tween.pause();
      })
    },
    onUpdate: _updateAll,
    onComplete: onStopDelayedCall.vars.onComplete
  });
  return self;
};
ScrollTrigger.sort = function(func) {
  if (_isFunction2(func)) {
    return _triggers.sort(func);
  }
  var scroll = _win.pageYOffset || 0;
  ScrollTrigger.getAll().forEach(function(t) {
    return t._sortY = t.trigger ? scroll + t.trigger.getBoundingClientRect().top : t.start + _win.innerHeight;
  });
  return _triggers.sort(func || function(a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + (a.vars.containerAnimation ? 1e6 : a._sortY) - ((b.vars.containerAnimation ? 1e6 : b._sortY) + (b.vars.refreshPriority || 0) * -1e6);
  });
};
ScrollTrigger.observe = function(vars) {
  return new Observer(vars);
};
ScrollTrigger.normalizeScroll = function(vars) {
  if (typeof vars === "undefined") {
    return _normalizer;
  }
  if (vars === true && _normalizer) {
    return _normalizer.enable();
  }
  if (vars === false) {
    _normalizer && _normalizer.kill();
    _normalizer = vars;
    return;
  }
  var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
  _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
  _isViewport2(normalizer.target) && (_normalizer = normalizer);
  return normalizer;
};
ScrollTrigger.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp,
  _inputObserver,
  _scrollers,
  _proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || _dispatch2("scrollStart");
      _lastScrollTime = _getTime();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
_getGSAP2() && gsap.registerPlugin(ScrollTrigger);
gsapWithCSS.registerPlugin(ScrollTrigger);
const Hero = () => {
  const sectionRef = reactExports.useRef(null);
  const stickyRef = reactExports.useRef(null);
  const videoRef = reactExports.useRef(null);
  const ch1TitleRef = reactExports.useRef(null);
  const ch1SubRef = reactExports.useRef(null);
  const ch2TitleRef = reactExports.useRef(null);
  const ch2SubRef = reactExports.useRef(null);
  const ch3TitleRef = reactExports.useRef(null);
  const ch3SubRef = reactExports.useRef(null);
  const overlayRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;
    video.pause();
    video.currentTime = 0;
    const setup = () => {
      const duration = video.duration;
      const scrollLen = Math.min(
        Math.max(duration * 150, window.innerHeight * 3),
        window.innerHeight * 8
      );
      section.style.height = `${scrollLen + window.innerHeight}px`;
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${scrollLen}`,
        scrub: true,
        onUpdate: (self) => {
          const t = Math.min(self.progress * duration, duration - 0.01);
          if (isFinite(t)) video.currentTime = t;
        }
      });
      const tl = gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollLen}`,
          scrub: true
        },
        defaults: { ease: "none" }
        // Changed to 'none' for linear, video-like sequence
      });
      tl.fromTo(
        ch1TitleRef.current,
        { opacity: 0, y: 60, filter: "blur(12px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.05 },
        0.02
      );
      tl.fromTo(
        ch1SubRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.05 },
        0.05
      );
      tl.to(
        [ch1TitleRef.current, ch1SubRef.current],
        { opacity: 0, y: -40, filter: "blur(8px)", duration: 0.08 },
        0.2
      );
      tl.fromTo(
        ch2TitleRef.current,
        { opacity: 0, letterSpacing: "0.5em", filter: "blur(18px)" },
        { opacity: 1, letterSpacing: "0.2em", filter: "blur(0px)", duration: 0.08 },
        0.3
      );
      tl.fromTo(
        ch2SubRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.08 },
        0.35
      );
      tl.to(
        [ch2TitleRef.current, ch2SubRef.current],
        { opacity: 0, y: -30, duration: 0.08 },
        0.55
      );
      tl.fromTo(
        overlayRef.current,
        { opacity: 0.55 },
        { opacity: 0.1, duration: 0.15 },
        0.6
      );
      tl.fromTo(
        ch3TitleRef.current,
        { opacity: 0, scale: 1.15, filter: "blur(14px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.1 },
        0.7
      );
      tl.fromTo(
        ch3SubRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.1 },
        0.75
      );
    };
    if (video.readyState >= 1) {
      setup();
    } else {
      video.addEventListener("loadedmetadata", setup, { once: true });
    }
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hero", ref: sectionRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero__sticky", ref: stickyRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        ref: videoRef,
        className: "hero__video",
        src: "/video/one.mp4",
        muted: true,
        playsInline: true,
        preload: "auto"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero__overlay", ref: overlayRef }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero__grain" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero__chapter hero__ch1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero__eyebrow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hero__rule" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hero__eyebrow-txt", children: "Year 845 · Wall Maria" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hero__rule" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "hero__ch1-title", ref: ch1TitleRef, children: [
        "Beyond the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Walls" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "lies the truth" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero__ch1-sub", ref: ch1SubRef, children: "Humanity's last refuge — three walls, one consuming dread." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero__chapter hero__ch2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero__ch2-title", ref: ch2TitleRef, children: "SHINGEKI NO KYOJIN" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero__ch2-sub", ref: ch2SubRef, children: "— The day the wall was breached —" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero__chapter hero__ch3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "hero__ch3-title", ref: ch3TitleRef, children: [
        "ATTACK",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ON TITAN" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero__ch3-sub", ref: ch3SubRef, children: "Dedicate your heart. Pledge your life." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero__scroll-hint", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}) })
  ] }) });
};
const LINKS = [
  { label: "Story", href: "#story" },
  { label: "Titans", href: "#titans" },
  { label: "Soldiers", href: "#soldiers" },
  { label: "Walls", href: "#walls" },
  { label: "Chronicle", href: "#chronicle" }
];
const Navbar = () => {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const [activeLink, setActiveLink] = reactExports.useState(null);
  const indicatorRef = reactExports.useRef(null);
  const linksRef = reactExports.useRef([]);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const moveIndicator = (i) => {
    const el = linksRef.current[i];
    const bar = indicatorRef.current;
    if (!el || !bar) return;
    const rect = el.getBoundingClientRect();
    const parentRect = el.closest(".navbar__links").getBoundingClientRect();
    bar.style.width = `${rect.width}px`;
    bar.style.transform = `translateX(${rect.left - parentRect.left}px)`;
    bar.style.opacity = "1";
  };
  const hideIndicator = () => {
    if (indicatorRef.current) indicatorRef.current.style.opacity = "0";
    setActiveLink(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: `navbar ${scrolled ? "navbar--scrolled" : ""} ${menuOpen ? "navbar--open" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "navbar__rule navbar__rule--left" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "navbar__logo", onClick: () => setMenuOpen(false), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "navbar__logo-wings", children: "⸸" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "navbar__logo-text", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "navbar__logo-main", children: "ATTACK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "navbar__logo-sub", children: "ON TITAN" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "navbar__logo-wings", children: "⸸" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "navbar__links", onMouseLeave: hideIndicator, children: [
        LINKS.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            ref: (el) => linksRef.current[i] = el,
            href: link.href,
            className: `navbar__link ${activeLink === i ? "navbar__link--active" : ""}`,
            onMouseEnter: () => {
              setActiveLink(i);
              moveIndicator(i);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "navbar__link-num", children: [
                "0",
                i + 1
              ] }),
              link.label
            ]
          }
        ) }, link.label)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "navbar__indicator", ref: indicatorRef })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#watch", className: "navbar__cta", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "navbar__cta-inner", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Watch Now" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 7h10M8 3l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "navbar__cta-bg" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "navbar__rule navbar__rule--right" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`,
          onClick: () => setMenuOpen((v) => !v),
          "aria-label": "Toggle menu",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `navbar__drawer ${menuOpen ? "navbar__drawer--open" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "navbar__drawer-inner", children: [
      LINKS.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: link.href,
          className: "navbar__drawer-link",
          style: { "--i": i },
          onClick: () => setMenuOpen(false),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "navbar__drawer-num", children: [
              "0",
              i + 1
            ] }),
            link.label
          ]
        },
        link.label
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#watch", className: "navbar__drawer-cta", onClick: () => setMenuOpen(false), children: "Watch Now" })
    ] }) })
  ] });
};
gsapWithCSS.registerPlugin(ScrollTrigger);
const TITANS = [
  {
    id: "human",
    name: "Human",
    height: "1.7 m",
    color: "#c4a450",
    desc: "Survey Corps soldier. The brave ones who dare to face the giants.",
    imgH: 10,
    imgW: 10.1,
    img: "/images/Human.png"
  },
  {
    id: "pure",
    name: "Pure Titan",
    height: "4 – 15 m",
    color: "#b0a090",
    desc: "Mindless and relentless. The most common threat beyond the walls.",
    imgH: 24.1,
    imgW: 17.2,
    img: "/images/PureTitan.png"
  },
  {
    id: "armored",
    name: "Armored Titan",
    height: "15 m",
    color: "#8c8c8c",
    desc: "Reiner Braun. Hardened plates make it nearly impenetrable.",
    imgH: 26.7,
    imgW: 15.5,
    img: "/images/ArmoredTitan.png"
  },
  {
    id: "female",
    name: "Female Titan",
    height: "14 m",
    color: "#c49090",
    desc: "Annie Leonhart. Agile, crystalline, and terrifyingly intelligent.",
    imgH: 40.5,
    imgW: 21.5,
    img: "/images/FemaleTitan.png"
  },
  {
    id: "beast",
    name: "Beast Titan",
    height: "17 m",
    color: "#7a8c6a",
    desc: "Zeke Yeager. Ape-like form with devastating projectile attacks.",
    imgH: 52.5,
    imgW: 31,
    img: "/images/BeastTitan.png"
  },
  {
    id: "colossal",
    name: "Colossal Titan",
    height: "60 m",
    color: "#c0522a",
    desc: "Bertholdt Hoover. The one who broke the gate. Steam Incarnate.",
    imgH: 80,
    imgW: 44.8,
    img: "/images/col.png"
  }
];
function TitanSize() {
  const sectionRef = reactExports.useRef(null);
  const stickyRef = reactExports.useRef(null);
  const titanRefs = reactExports.useRef([]);
  const labelRefs = reactExports.useRef([]);
  const lineRefs = reactExports.useRef([]);
  const headerRef = reactExports.useRef(null);
  const fogRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;
    const scrollLen = window.innerHeight * (TITANS.length + 1.5);
    section.style.height = `${scrollLen + window.innerHeight}px`;
    const tl = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${scrollLen}`,
        scrub: 1.2,
        pin: sticky,
        pinSpacing: false
      }
    });
    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.4 },
      0
    );
    TITANS.forEach((_, i) => {
      const el = titanRefs.current[i];
      const label = labelRefs.current[i];
      const line = lineRefs.current[i];
      if (!el) return;
      const start = 0.12 + i * 0.15;
      tl.fromTo(
        el,
        { yPercent: 110, opacity: 0, filter: "blur(4px)" },
        { yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 0.18, ease: "power3.out" },
        start
      );
      tl.fromTo(
        [label, line],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.1 },
        start + 0.14
      );
    });
    tl.fromTo(
      fogRef.current,
      { opacity: 0.9 },
      { opacity: 0.15, duration: 1 },
      0
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "ts-section", ref: sectionRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-sticky", ref: stickyRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ts-sky" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ts-ground" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ts-fog", ref: fogRef }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ts-header", ref: headerRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-header-rule" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ts-header-eyebrow", children: "Scale of Terror" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ts-header-title", children: "Titan Size Comparison" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-header-rule" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ts-stage", children: TITANS.map((titan, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "ts-titan-slot",
        style: { "--color": titan.color },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "ts-figure",
              ref: (el) => titanRefs.current[i] = el,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: titan.img,
                  alt: titan.name,
                  className: "ts-figure-img",
                  draggable: false,
                  style: {
                    height: `${titan.imgH}vh`,
                    width: `${titan.imgW}vh`
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "ts-measure-line",
              ref: (el) => lineRefs.current[i] = el,
              style: { height: `${titan.imgH}vh` }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "ts-label",
              ref: (el) => labelRefs.current[i] = el,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-label-height", children: titan.height }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-label-name", children: titan.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-label-desc", children: titan.desc })
              ]
            }
          )
        ]
      },
      titan.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ts-wall-line", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ts-wall-label", children: "Wall Maria · 50 m" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ts-grain" })
  ] }) });
}
function App() {
  reactExports.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TitanSize, {})
  ] });
}
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React$2.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
