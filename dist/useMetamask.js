"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _store = require("./store");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var chains = function chains(chainId) {
  if (!!Number(chainId) && chainId.length > 9) {
    return "local";
  }

  switch (chainId) {
    case "1":
      return "mainnet";

    case "3":
      return "ropsten";

    case "4":
      return "rinkeby";

    case "5":
      return "goerli";

    case "42":
      return "kovan";

    default:
      return "unknown";
  }
};

var useMetamask = function useMetamask() {
  var state = (0, _react.useContext)(_store.MetaStateContext);
  var dispatch = (0, _react.useContext)(_store.MetaDispatchContext);

  var _isMounted = (0, _react.useRef)(true);

  var _isConnectCalled = (0, _react.useRef)(false);

  var _useState = (0, _react.useState)(window.ethereum),
      _useState2 = _slicedToArray(_useState, 1),
      provider = _useState2[0];

  (0, _react.useEffect)(function () {
    return function () {
      _isMounted.current = false;
    };
  }, []);

  var connect = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Web3Interface) {
      var settings,
          _web3,
          _args = arguments;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              settings = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

              if (provider) {
                _context.next = 3;
                break;
              }

              throw Error("Metamask is not available.");

            case 3:
              if (Web3Interface) {
                _context.next = 5;
                break;
              }

              throw Error("Web3 Provider is required. You can use either ethers.js or web3.js.");

            case 5:
              if (_isMounted.current) {
                _context.next = 7;
                break;
              }

              throw Error("Component is not mounted.");

            case 7:
              if (!_isConnectCalled.current) {
                _context.next = 9;
                break;
              }

              throw Error("Connect method already called.");

            case 9:
              _isConnectCalled.current = true;
              _context.prev = 10;
              _web3 = _construct(Web3Interface, _toConsumableArray(Object.keys(settings).length ? [provider, settings] : [provider]));
              dispatch({
                type: "SET_WEB3",
                payload: _web3
              });
              _context.next = 15;
              return getAccounts({
                requestPermission: true
              });

            case 15:
              _context.next = 17;
              return getChain();

            case 17:
              window.ethereum.on("accountsChanged", function (accounts) {
                if (!accounts.length) dispatch({
                  type: "SET_CONNECTED",
                  payload: false
                });
                dispatch({
                  type: "SET_ACCOUNT",
                  payload: accounts
                });
              });
              window.ethereum.on("chainChanged", function (chainId) {
                var _chainId = parseInt(chainId, 16).toString();

                var _chainInfo = {
                  id: _chainId,
                  name: chains(_chainId)
                };
                dispatch({
                  type: "SET_CHAIN",
                  payload: _chainInfo
                });
              });
              _context.next = 25;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](10);
              _isConnectCalled.current = false;
              throw _context.t0;

            case 25:
              _isConnectCalled.current = false;

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[10, 21]]);
    }));

    return function connect(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getAccounts = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _ref3,
          requestPermission,
          accounts,
          _args2 = arguments;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref3 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {
                requestPermission: false
              }, requestPermission = _ref3.requestPermission;

              if (provider) {
                _context2.next = 4;
                break;
              }

              console.warn("Metamask is not available.");
              return _context2.abrupt("return");

            case 4:
              _context2.prev = 4;
              _context2.next = 7;
              return provider.request({
                method: requestPermission ? "eth_requestAccounts" : "eth_accounts",
                params: []
              });

            case 7:
              accounts = _context2.sent;

              if (accounts.length) {
                dispatch({
                  type: "SET_CONNECTED",
                  payload: true
                });
                dispatch({
                  type: "SET_ACCOUNT",
                  payload: accounts
                });
              }

              return _context2.abrupt("return", accounts);

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](4);
              throw Error(_context2.t0);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 12]]);
    }));

    return function getAccounts() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getChain = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var chainId, _chainInfo;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (provider) {
                _context3.next = 3;
                break;
              }

              console.warn("Metamask is not available.");
              return _context3.abrupt("return");

            case 3:
              _context3.prev = 3;
              _context3.next = 6;
              return provider.request({
                method: "net_version",
                params: []
              });

            case 6:
              chainId = _context3.sent;
              _chainInfo = {
                id: chainId,
                name: chains(chainId)
              };
              dispatch({
                type: "SET_CHAIN",
                payload: _chainInfo
              });
              return _context3.abrupt("return", _chainInfo);

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](3);
              throw Error(_context3.t0);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 12]]);
    }));

    return function getChain() {
      return _ref4.apply(this, arguments);
    };
  }();

  return {
    connect: connect,
    getAccounts: getAccounts,
    getChain: getChain,
    metaState: _objectSpread(_objectSpread({}, state), {}, {
      isAvailable: !!provider
    })
  };
};

var _default = useMetamask;
exports["default"] = _default;