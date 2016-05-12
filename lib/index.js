/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Tom/Repositories/react-animated-menu-test/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Tom/Repositories/react-animated-menu-test/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _index = __webpack_require__(3);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// This is a mockup of Framework 3.0 layout for demonstrating and developing
	// menu animations.  Currently only Notification and User Menu are in the appbar
	// as drop downs.

	// TODO - Confirm accessibility

	var Animenu = function (_React$Component) {
	  _inherits(Animenu, _React$Component);

	  function Animenu(props) {
	    _classCallCheck(this, Animenu);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Animenu).call(this, props));

	    _this.state = { visibleList1: false, visibleList2: false };

	    _this.handleClickMenu1 = _this.handleClickMenu1.bind(_this);
	    _this.handleClickMenu2 = _this.handleClickMenu2.bind(_this);
	    return _this;
	  }

	  _createClass(Animenu, [{
	    key: 'handleClickMenu1',
	    value: function handleClickMenu1() {
	      console.log('Menu1 Button Clicked');
	      this.setState(_extends({}, this.state, { visibleList1: !this.state.visibleList1 }));
	    }
	  }, {
	    key: 'handleClickMenu2',
	    value: function handleClickMenu2() {
	      console.log('Menu2 Button Clicked');
	      this.setState(_extends({}, this.state, { visibleList2: !this.state.visibleList2 }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = { width: "100%", backgroundColor: "gray", position: 'relative', zIndex: '4', flex: "0 0 40px", display: 'flex', justifyContent: 'space-between' };

	      return _react2.default.createElement(
	        'div',
	        { style: { display: "flex", flexDirection: "column" } },
	        _react2.default.createElement(
	          'div',
	          { className: 'appbar', style: style },
	          _react2.default.createElement(_index2.default, { cbClickUserMenuIcon: this.handleClickMenu1,
	            userName: 'Notification',
	            visibleList: this.state.visibleList1
	          }),
	          _react2.default.createElement(_index2.default, { cbClickUserMenuIcon: this.handleClickMenu2,
	            userName: 'John Doe',
	            visibleList: this.state.visibleList2
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'appview2Wrapper', style: { display: 'flex' } },
	          _react2.default.createElement('div', { className: 'navbar', style: { flex: '0 0 50px', backgroundColor: 'lightseagreen' },
	            onClick: function onClick() {
	              console.log('nav bar clicked!!');
	            }
	          }),
	          _react2.default.createElement('div', { style: { backgroundColor: "aqua", flex: "1 1 95%" } })
	        )
	      );
	    }
	  }]);

	  return Animenu;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Animenu, null), document.getElementById('app'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Tom/Repositories/react-animated-menu-test/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Tom/Repositories/react-animated-menu-test/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Tom/Repositories/react-animated-menu-test/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserMenu = function (_React$Component) {
	  _inherits(UserMenu, _React$Component);

	  function UserMenu(props) {
	    _classCallCheck(this, UserMenu);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UserMenu).call(this, props));
	  }

	  _createClass(UserMenu, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      // userMenu(avatar & caret) style
	      var userMenuStyle = {
	        display: 'flex',
	        alignItems: 'flex-end',
	        marginRight: '18px',
	        cursor: 'pointer',
	        zIndex: '2',
	        padding: '11px',
	        backgroundColor: 'transparent',
	        width: '272px'
	      };
	      var avatarWhiteIconStyle = {
	        height: '24px',
	        width: '24px',
	        display: 'flex',
	        marginTop: '1px'
	      };
	      // styles shoebox-darkblue (avatar) icon
	      var avatarBlueIconStyle = {
	        height: '24px',
	        width: '24px',
	        display: 'flex',
	        marginTop: '1px',
	        padding: '2px',
	        borderRadius: '3px',
	        backgroundColor: '#fff'
	      };
	      // styles caret-up-white icon
	      var caretUpIconStyle = {
	        height: '8px',
	        width: '10px',
	        display: 'flex',
	        paddingLeft: '8px',
	        paddingBottom: '9px'
	      };
	      // styles caret-down-white icon
	      var caretDownIconStyle = {
	        height: '8px',
	        width: '10px',
	        display: 'flex',
	        paddingLeft: '8px',
	        paddingBottom: '9px'
	      };
	      // styles menu list dropdown, sets transition to/from off page
	      var menuListStyle = {
	        position: 'absolute',
	        maxHeight: '100vh', //
	        width: '272px',
	        //left: '0',
	        overflow: 'hidden',
	        opacity: '1',
	        zIndex: '1',
	        visibility: 'visible',
	        backgroundColor: '#ffffff',
	        transition: 'max-height .6s ease-in, opacity .4s ease-in'
	      };

	      var listStyle = this.props.visibleList ? _extends({}, menuListStyle) : _extends({}, menuListStyle, { maxHeight: '0',
	        opacity: '0',
	        visibility: 'hidden',
	        transition: 'max-height .6s ease-out, opacity .4s ease-out' });

	      return _react2.default.createElement(
	        'div',
	        { style: { display: 'flex', flexDirection: "column", position: "relative", zIndex: '2' } },
	        _react2.default.createElement(
	          'div',
	          { style: userMenuStyle },
	          _react2.default.createElement(
	            'span',
	            { onClick: function onClick() {
	                return _this2.props.cbClickUserMenuIcon();
	              } },
	            'Click to Test Menu Animation'
	          )
	        ),
	        _react2.default.createElement(_index2.default, { listStyle: listStyle, visibleList: this.props.visibleList, cbClickLogin: this.props.cbClickLogin, customLinks: this.props.customLinks, cbClickLogout: this.props.cbClickLogout, userName: this.props.userName, userstate: this.props.userstate })
	      );
	    }
	  }]);

	  return UserMenu;
	}(_react2.default.Component);

	exports.default = UserMenu;


	UserMenu.propTypes = {
	  cbClickAddUserItem: _react2.default.PropTypes.func,
	  cbClickLogin: _react2.default.PropTypes.func,
	  cbClickLogout: _react2.default.PropTypes.func,
	  cbClickUserMenuIcon: _react2.default.PropTypes.func,
	  customLinks: _react2.default.PropTypes.array,
	  menuItems: _react2.default.PropTypes.array,
	  userName: _react2.default.PropTypes.string,
	  userstate: _react2.default.PropTypes.object,
	  visibleList: _react2.default.PropTypes.bool
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Tom/Repositories/react-animated-menu-test/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Tom/Repositories/react-animated-menu-test/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Tom/Repositories/react-animated-menu-test/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserMenuList = function (_React$Component) {
	  _inherits(UserMenuList, _React$Component);

	  function UserMenuList(props) {
	    _classCallCheck(this, UserMenuList);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserMenuList).call(this, props));

	    _this.state = {
	      visibleList: false
	    };
	    return _this;
	  }

	  _createClass(UserMenuList, [{
	    key: 'render',
	    value: function render() {
	      //styles dropdown tray placement under appbar
	      var dropdownTrayStyle = {
	        position: 'absolute'
	        //marginTop: '5px'
	      };
	      //styles usermenulist text & placement
	      var listItemsStyle = {
	        display: 'flex',
	        flexDirection: 'column',
	        color: '#444444'
	      };
	      //styles 'username' list item
	      var userNameStyle = {
	        fontSize: '20px',
	        fontWeight: '700',
	        padding: '6px 40px 4px'
	      };
	      //styles 'viewprofile' list item
	      var viewProfileItemStyle = {
	        textDecoration: 'none',
	        fontSize: '14px',
	        padding: '4px 40px 6px'
	      };
	      //styles divider lines
	      var dividerStyle = {
	        display: 'flex',
	        justifyContent: 'center',
	        paddingTop: '1px',
	        margin: '0px 0px 0px',
	        borderBottom: '1px solid #e1e8ed'
	      };
	      //styles 'settings link' list item
	      var settingsItemStyle = {
	        textDecoration: 'none',
	        color: '#444444',
	        padding: '0px 40px 4px',
	        marginTop: '6px',

	        ':hover': {
	          color: '#ffffff'
	        }
	      };
	      //styles 'logout' list item
	      var logoutItemStyle = {
	        textDecoration: 'none',
	        color: '#444444',
	        padding: '6px 40px 10px',

	        ':hover': {
	          color: '#ffffff'
	        }
	      };

	      return _react2.default.createElement(
	        'div',
	        { key: 'menu', className: 'dropdownTray', style: dropdownTrayStyle },
	        _react2.default.createElement(
	          'div',
	          { className: 'dropdownList', style: this.props.listStyle },
	          _react2.default.createElement(
	            'div',
	            { className: 'listItems', style: listItemsStyle },
	            _react2.default.createElement(
	              'div',
	              { style: userNameStyle },
	              this.props.userName
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: viewProfileItemStyle },
	              'View Profile'
	            ),
	            _react2.default.createElement('input', { placeholder: 'Type something', onFocus: function onFocus() {
	                console.log('Input has focus!!!!');
	              } }),
	            _react2.default.createElement(
	              'div',
	              { style: settingsItemStyle },
	              'Settings'
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: settingsItemStyle },
	              'Stuff'
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: settingsItemStyle },
	              'Other Stuff'
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: logoutItemStyle, cbClickLogout: this.props.cbClickLogout },
	              'Log out'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return UserMenuList;
	}(_react2.default.Component);

	exports.default = UserMenuList;


	UserMenuList.propTypes = {
	  cbClickLogin: _react2.default.PropTypes.func,
	  cbClickLogout: _react2.default.PropTypes.func,
	  customLinks: _react2.default.PropTypes.array,
	  listStyle: _react2.default.PropTypes.object,
	  userName: _react2.default.PropTypes.string,
	  userstate: _react2.default.PropTypes.object,
	  visibleList: _react2.default.PropTypes.bool
	};

	exports.default = UserMenuList;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Tom/Repositories/react-animated-menu-test/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }
/******/ ]);