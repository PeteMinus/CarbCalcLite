!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==typeof c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("2", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('3', ['2'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('2');
  module.exports = function (it) {
    return Object(defined(it));
  };
  return module.exports;
});
$__System.registerDynamic('4', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

  return module.exports;
});
$__System.registerDynamic('5', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('6', ['5'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('5');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});
$__System.registerDynamic('7', ['4', '8', '6'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('4'),
      core = $__require('8'),
      ctx = $__require('6'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports) continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
        var F = function (param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});
$__System.registerDynamic("9", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});
$__System.registerDynamic('a', ['7', '8', '9'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('7'),
        core = $__require('8'),
        fails = $__require('9');
    module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
            fn(1);
        }), 'Object', exp);
    };
    return module.exports;
});
$__System.registerDynamic('b', ['3', 'a'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toObject = $__require('3');
  $__require('a')('keys', function ($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});
$__System.registerDynamic('8', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

  return module.exports;
});
$__System.registerDynamic('c', ['b', '8'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('b');
  module.exports = $__require('8').Object.keys;
  return module.exports;
});
$__System.registerDynamic("d", ["c"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("c"), __esModule: true };
  return module.exports;
});
$__System.register('e', ['f'], function (_export) {
	'use strict';

	var _;

	return {
		setters: [function (_f) {
			_ = _f['default'];
		}],
		execute: function () {
			_export('default', (function () {

				var collection = [{ 'id': 1, 'name': 'Jajce - Kuhano', 'category': 'Druga živila', 'weight': 55, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 2, 'name': 'Jajce - Omleta', 'category': 'Druga živila', 'weight': 50, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 3, 'name': 'Jajce - Omleta s sirom', 'category': 'Druga živila', 'weight': 60, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 4, 'name': 'Jajce - Poširano', 'category': 'Druga živila', 'weight': 50, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 5, 'name': 'Jajce - Ocvrto', 'category': 'Druga živila', 'weight': 50, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 6, 'name': 'Jajce - Vmešano', 'category': 'Druga živila', 'weight': 60, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 7, 'name': 'Omaka  - Majoneza', 'category': 'Druga živila', 'weight': 15, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 8, 'name': 'Omaka  - Paradižnikova – ketchup', 'category': 'Druga živila', 'weight': 20, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 9, 'name': 'Omaka  - Sladki čili', 'category': 'Druga živila', 'weight': 20, 'unit': 'g', 'carbs': 12, 'calc_carbs': 12 }, { 'id': 10, 'name': 'Omaka  - Tatarska', 'category': 'Druga živila', 'weight': 20, 'unit': 'g', 'carbs': 19, 'calc_carbs': 19 }, { 'id': 11, 'name': 'Olje - Olivno', 'category': 'Druga živila', 'weight': 5, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 12, 'name': 'Olje - Repično', 'category': 'Druga živila', 'weight': 5, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 13, 'name': 'Olje - Sončnično', 'category': 'Druga živila', 'weight': 5, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 14, 'name': 'Ajdova kaša - Nekuhana', 'category': 'Žitarice', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 15, 'name': 'Ajdova kaša - Kuhana', 'category': 'Žitarice', 'weight': 85, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 16, 'name': 'Bulgur kuhan', 'category': 'Žitarice', 'weight': 75, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 17, 'name': 'Ječmen - Kuhan', 'category': 'Žitarice', 'weight': 85, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 18, 'name': 'Ječmen - Nekuhan', 'category': 'Žitarice', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 19, 'name': 'Ječmen - Zdrob', 'category': 'Žitarice', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 20, 'name': 'Pivo - Lahko', 'category': 'Alkoholne pijače', 'weight': 330, 'unit': 'ml', 'carbs': 4, 'calc_carbs': 4 }, { 'id': 21, 'name': 'Pivo - Navadno', 'category': 'Alkoholne pijače', 'weight': 330, 'unit': 'ml', 'carbs': 10, 'calc_carbs': 10 }, { 'id': 22, 'name': 'Pivo - Temno', 'category': 'Alkoholne pijače', 'weight': 330, 'unit': 'ml', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 23, 'name': 'Vino - Desertno sladko', 'category': 'Alkoholne pijače', 'weight': 125, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 24, 'name': 'Vino - Namizno belo', 'category': 'Alkoholne pijače', 'weight': 125, 'unit': 'ml', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 25, 'name': 'Vino - Namizno rdeče', 'category': 'Alkoholne pijače', 'weight': 125, 'unit': 'ml', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 26, 'name': 'Kamut  - Kuhan', 'category': 'Žitarice', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 27, 'name': 'Kamut  - Surov', 'category': 'Žitarice', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 28, 'name': 'Koruza - Kosmiči brez sladkorja (corn flakes)', 'category': 'Žitarice', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 29, 'name': 'Koruza - Zdrob – polenta kuhana', 'category': 'Žitarice', 'weight': 80, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 30, 'name': 'Koruza - Zdrob – polenta surova', 'category': 'Žitarice', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 31, 'name': 'Koruza - Koruzno zrno – pokovka (kokice)', 'category': 'Žitarice', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 32, 'name': 'Kus kus - Kuhan', 'category': 'Žitarice', 'weight': 70, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 33, 'name': 'Kvinoja - Kuhana', 'category': 'Žitarice', 'weight': 65, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 34, 'name': 'Müsli s sadjem', 'category': 'Žitarice', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 35, 'name': 'Vino - Šampanjec', 'category': 'Alkoholne pijače', 'weight': 125, 'unit': 'ml', 'carbs': 2, 'calc_carbs': 2 }, { 'id': 36, 'name': 'Liker - Kremni', 'category': 'Alkoholne pijače', 'weight': 50, 'unit': 'ml', 'carbs': 24, 'calc_carbs': 24 }, { 'id': 37, 'name': 'Liker - Irish cream', 'category': 'Alkoholne pijače', 'weight': 50, 'unit': 'ml', 'carbs': 12, 'calc_carbs': 12 }, { 'id': 38, 'name': 'Šeri – sherry', 'category': 'Alkoholne pijače', 'weight': 50, 'unit': 'ml', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 39, 'name': 'Žganje - Rum, vodka, viski', 'category': 'Alkoholne pijače', 'weight': 50, 'unit': 'ml', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 40, 'name': 'Žganje - Gin  – brinovec', 'category': 'Alkoholne pijače', 'weight': 25, 'unit': 'ml', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 41, 'name': 'Ovseni kosmiči', 'category': 'Žitarice', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 42, 'name': 'Proso - Kaša kuhana', 'category': 'Žitarice', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 43, 'name': 'Proso - Kaša surova', 'category': 'Žitarice', 'weight': 45, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 44, 'name': 'Pšenica - Kaša polnozrnata', 'category': 'Žitarice', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 45, 'name': 'Pšenica - Kosmiči polnozrnati', 'category': 'Žitarice', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 46, 'name': 'Pšenica - Moka tip 500', 'category': 'Žitarice', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 47, 'name': 'Pšenica - Otrobi', 'category': 'Žitarice', 'weight': 40, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 48, 'name': 'Pšenica - Otrobi – kosmiči', 'category': 'Žitarice', 'weight': 30, 'unit': 'g', 'carbs': 21, 'calc_carbs': 21 }, { 'id': 49, 'name': 'Pšenica - Škrob', 'category': 'Žitarice', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 50, 'name': 'Pšenica - Zdrob surov', 'category': 'Žitarice', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 51, 'name': 'Rž - Kosmiči', 'category': 'Žitarice', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 52, 'name': 'Rž - Moka tip 1150', 'category': 'Žitarice', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 53, 'name': 'Riž - Kroglice brez čokolade', 'category': 'Žitarice', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 54, 'name': 'Riž - Rjavi kuhan', 'category': 'Žitarice', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 55, 'name': 'Riž - Rjavi nekuhan', 'category': 'Žitarice', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 56, 'name': 'Riž - Moka', 'category': 'Žitarice', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 57, 'name': 'Riž - Napitek', 'category': 'Žitarice', 'weight': 120, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 58, 'name': 'Riž - Vaflji', 'category': 'Žitarice', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 59, 'name': 'Dunajski zrezek', 'category': 'Meso, mesne jedi in ribe', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 60, 'name': 'Hrenovka (1/2)', 'category': 'Meso, mesne jedi in ribe', 'weight': 60, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 61, 'name': 'Hrenovka v listnatem testu', 'category': 'Meso, mesne jedi in ribe', 'weight': 63, 'unit': 'g', 'carbs': 16, 'calc_carbs': 16 }, { 'id': 62, 'name': 'Krvavice', 'category': 'Meso, mesne jedi in ribe', 'weight': 75, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 63, 'name': 'Mesni kaneloni z bešamelom', 'category': 'Meso, mesne jedi in ribe', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 64, 'name': 'Mleto meso  - Goveje', 'category': 'Meso, mesne jedi in ribe', 'weight': 100, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 65, 'name': 'Lazanja - Klasična z bešamelom', 'category': 'Meso, mesne jedi in ribe', 'weight': 140, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 66, 'name': 'Lazanja - Z zelenjavo brez bešamela', 'category': 'Meso, mesne jedi in ribe', 'weight': 200, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 67, 'name': 'Musaka - S krompirjem in mesom', 'category': 'Meso, mesne jedi in ribe', 'weight': 330, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 68, 'name': 'Musaka - S krompirjem in špinačo', 'category': 'Meso, mesne jedi in ribe', 'weight': 160, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 69, 'name': 'Polnjena paprika', 'category': 'Meso, mesne jedi in ribe', 'weight': 70, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 70, 'name': 'Sarma', 'category': 'Meso, mesne jedi in ribe', 'weight': 65, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 71, 'name': 'Mehiška - Enchilada', 'category': 'Meso, mesne jedi in ribe', 'weight': 146, 'unit': 'g', 'carbs': 29, 'calc_carbs': 29 }, { 'id': 72, 'name': 'Mehiška - Fajita', 'category': 'Meso, mesne jedi in ribe', 'weight': 160, 'unit': 'g', 'carbs': 30, 'calc_carbs': 30 }, { 'id': 73, 'name': 'Riba', 'category': 'Meso, mesne jedi in ribe', 'weight': 150, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 74, 'name': 'Riba - Palčke', 'category': 'Meso, mesne jedi in ribe', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 75, 'name': 'Riba - Skuša dimljena', 'category': 'Meso, mesne jedi in ribe', 'weight': 45, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 76, 'name': 'Riba - Suši', 'category': 'Meso, mesne jedi in ribe', 'weight': 34, 'unit': 'g', 'carbs': 9, 'calc_carbs': 9 }, { 'id': 77, 'name': 'Salama - Posebna', 'category': 'Meso, mesne jedi in ribe', 'weight': 60, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 78, 'name': 'Salama - Piščančja prsa', 'category': 'Meso, mesne jedi in ribe', 'weight': 40, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 79, 'name': 'Salama - Puranja prsa', 'category': 'Meso, mesne jedi in ribe', 'weight': 40, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 80, 'name': 'Slanina  - Slanina', 'category': 'Meso, mesne jedi in ribe', 'weight': 6, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 81, 'name': 'Zrezek - Goveji', 'category': 'Meso, mesne jedi in ribe', 'weight': 100, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 82, 'name': 'Zrezek - Puranji', 'category': 'Meso, mesne jedi in ribe', 'weight': 100, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 83, 'name': 'Testenine - Bolognese', 'category': 'Testenine', 'weight': 110, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 84, 'name': 'Testenine - Carbonara', 'category': 'Testenine', 'weight': 80, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 85, 'name': 'Graham  - Kuhane', 'category': 'Testenine', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 86, 'name': 'Graham  - Nekuhane', 'category': 'Testenine', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 87, 'name': 'Jajčne - Kuhane', 'category': 'Testenine', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 88, 'name': 'Jajčne - Nekuhane', 'category': 'Testenine', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 89, 'name': 'Navadne - Kuhane', 'category': 'Testenine', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 90, 'name': 'Navadne - Nekuhane', 'category': 'Testenine', 'weight': 20, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 91, 'name': 'Polnozrnate - Kuhane', 'category': 'Testenine', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 92, 'name': 'Polnozrnate - Nekuhane', 'category': 'Testenine', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 93, 'name': 'Ravioli - Mesni kuhani', 'category': 'Testenine', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 94, 'name': 'Ravioli - S paradižnikovo omako', 'category': 'Testenine', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 95, 'name': 'Ravioli - Sirovi kuhani', 'category': 'Testenine', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 96, 'name': 'Rezanci, testenine za juho - Kuhane navadne', 'category': 'Testenine', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 97, 'name': 'Rezanci, testenine za juho - Nekuhane navadne', 'category': 'Testenine', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 98, 'name': 'Tortelini - Mesni kuhani', 'category': 'Testenine', 'weight': 50, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 99, 'name': 'Tortelini - S paradižnikovo omako', 'category': 'Testenine', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 100, 'name': 'Tortelini - Sirovi kuhani', 'category': 'Testenine', 'weight': 50, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 101, 'name': 'Solata - Ajdova kaša s tuno', 'category': 'Solate', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 102, 'name': 'Solata - Grška', 'category': 'Solate', 'weight': 220, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 103, 'name': 'Solata - Italijanska', 'category': 'Solate', 'weight': 190, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 104, 'name': 'Solata - Ješprenova s tuno in papriko', 'category': 'Solate', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 105, 'name': 'Solata - Mešana', 'category': 'Solate', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 106, 'name': 'Solata - Radič rdeči', 'category': 'Solate', 'weight': 200, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 107, 'name': 'Solata - Riževa s tuno in paradižnikom', 'category': 'Solate', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 108, 'name': 'Solata - Sveže kumare z jogurtom', 'category': 'Solate', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 109, 'name': 'Solata - Testeninska', 'category': 'Solate', 'weight': 80, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 110, 'name': 'Solata - Tzaziki grška omaka s kumarami', 'category': 'Solate', 'weight': 100, 'unit': 'g', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 111, 'name': 'Solata - Zelena (endivija)', 'category': 'Solate', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 112, 'name': 'Solata - Brokoli', 'category': 'Stročnice', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 113, 'name': 'Brstični ohrovt', 'category': 'Stročnice', 'weight': 160, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 114, 'name': 'Cvetača', 'category': 'Stročnice', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 115, 'name': 'Fižol - Stročji', 'category': 'Stročnice', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 116, 'name': 'Fižol - Stročji zamrznjen', 'category': 'Stročnice', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 117, 'name': 'Fižol - Zelen svež', 'category': 'Stročnice', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 118, 'name': 'Fižol - Zelen zamrznjen', 'category': 'Stročnice', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 119, 'name': 'Fižol - Zelen svež buranja', 'category': 'Stročnice', 'weight': 150, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 120, 'name': 'Fižol - Zrnje sušen', 'category': 'Stročnice', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 121, 'name': 'Grah - Svež', 'category': 'Stročnice', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 122, 'name': 'Grah - Konzerviran', 'category': 'Stročnice', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 123, 'name': 'Grah - Zamrznjen', 'category': 'Stročnice', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 124, 'name': 'Korenje', 'category': 'Stročnice', 'weight': 100, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 125, 'name': 'Koruza sladka konzervirana', 'category': 'Stročnice', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 126, 'name': 'Leča konzervirana', 'category': 'Stročnice', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 127, 'name': 'Paprika rumena', 'category': 'Stročnice', 'weight': 100, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 128, 'name': 'Paradižnik', 'category': 'Stročnice', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 129, 'name': 'Por', 'category': 'Stročnice', 'weight': 60, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 130, 'name': 'Rdeča pesa konzervirana', 'category': 'Stročnice', 'weight': 75, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 131, 'name': 'Soja - Kalčki', 'category': 'Stročnice', 'weight': 110, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 132, 'name': 'Soja - Kalčki konzervirani', 'category': 'Stročnice', 'weight': 140, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 133, 'name': 'Soja - Konzervirana', 'category': 'Stročnice', 'weight': 180, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 134, 'name': 'Soja - Omaka', 'category': 'Stročnice', 'weight': 50, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 135, 'name': 'Soja - Zrnje', 'category': 'Stročnice', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 136, 'name': 'Ananas - Svež', 'category': 'Sadje', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 137, 'name': 'Ananas - Konzerviran', 'category': 'Sadje', 'weight': 70, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 138, 'name': 'Avokado*', 'category': 'Sadje', 'weight': 140, 'unit': 'g', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 139, 'name': 'Banana', 'category': 'Sadje', 'weight': 70, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 140, 'name': 'Borovnice - Sveže', 'category': 'Sadje', 'weight': 200, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 141, 'name': 'Borovnice - Konzervirane', 'category': 'Sadje', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 142, 'name': 'Breskev - Sveža', 'category': 'Sadje', 'weight': 170, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 143, 'name': 'Breskev - Konzervirana', 'category': 'Sadje', 'weight': 80, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 144, 'name': 'Češnje sladke', 'category': 'Sadje', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 145, 'name': 'Črni ribez - Svež', 'category': 'Sadje', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 146, 'name': 'Črni ribez - Konzerviran', 'category': 'Sadje', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 147, 'name': 'Dateljni sušeni', 'category': 'Sadje', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 148, 'name': 'Fige - Sušene', 'category': 'Sadje', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 149, 'name': 'Fige - Sveže', 'category': 'Sadje', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 150, 'name': 'Granatno jabolko', 'category': 'Sadje', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 151, 'name': 'Grenivka', 'category': 'Sadje', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 152, 'name': 'Grozdje rdeče', 'category': 'Sadje', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 153, 'name': 'Hruška - Sveža', 'category': 'Sadje', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 154, 'name': 'Hruška - Konzervirana', 'category': 'Sadje', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 155, 'name': 'Jabolko - Sveže', 'category': 'Sadje', 'weight': 130, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 156, 'name': 'Jabolko - Olupljeno', 'category': 'Sadje', 'weight': 110, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 157, 'name': 'Jabolko - Sok', 'category': 'Sadje', 'weight': 125, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 158, 'name': 'Jagode - Sveže', 'category': 'Sadje', 'weight': 300, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 159, 'name': 'Jagode - Konzervirane', 'category': 'Sadje', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 160, 'name': 'Kaki', 'category': 'Sadje', 'weight': 90, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 161, 'name': 'Kivi', 'category': 'Sadje', 'weight': 140, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 162, 'name': 'Kutina', 'category': 'Sadje', 'weight': 200, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 163, 'name': 'Liči svež', 'category': 'Sadje', 'weight': 90, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 164, 'name': 'Kosmulje - Sveže', 'category': 'Sadje', 'weight': 170, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 165, 'name': 'Kosmulje - Konzervirane', 'category': 'Sadje', 'weight': 75, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 166, 'name': 'Limona', 'category': 'Sadje', 'weight': 60, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 167, 'name': 'Lubenica', 'category': 'Sadje', 'weight': 180, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 168, 'name': 'Maline - Sveže', 'category': 'Sadje', 'weight': 300, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 169, 'name': 'Maline - Konzervirane', 'category': 'Sadje', 'weight': 140, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 170, 'name': 'Mandarine - Sveže', 'category': 'Sadje', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 171, 'name': 'Mandarine - Konzervirane', 'category': 'Sadje', 'weight': 80, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 172, 'name': 'Mango', 'category': 'Sadje', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 173, 'name': 'Marelice - Sveže', 'category': 'Sadje', 'weight': 170, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 174, 'name': 'Marelice - Suhe', 'category': 'Sadje', 'weight': 80, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 175, 'name': 'Melona', 'category': 'Sadje', 'weight': 300, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 176, 'name': 'Nektarina', 'category': 'Sadje', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 177, 'name': 'Papaja', 'category': 'Sadje', 'weight': 180, 'unit': 'g', 'carbs': 10, 'calc_carbs': 10 }, { 'id': 178, 'name': 'Pasjonka', 'category': 'Sadje', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 179, 'name': 'Pomaranča', 'category': 'Sadje', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 180, 'name': 'Rabarbara', 'category': 'Sadje', 'weight': 400, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 181, 'name': 'Rdeči ribez - Konzerviran', 'category': 'Sadje', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 182, 'name': 'Rdeči ribez - Svež', 'category': 'Sadje', 'weight': 200, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 183, 'name': 'Ringlo', 'category': 'Sadje', 'weight': 105, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 184, 'name': 'Robidnice konzervirane', 'category': 'Sadje', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 185, 'name': 'Rozine', 'category': 'Sadje', 'weight': 22, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 186, 'name': 'Češplja', 'category': 'Sadje', 'weight': 140, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 187, 'name': 'Sliva - Konzervirana', 'category': 'Sadje', 'weight': 80, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 188, 'name': 'Smokve', 'category': 'Sadje', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 189, 'name': 'Višnje - Sveže', 'category': 'Sadje', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 190, 'name': 'Višnje - Konzervirane', 'category': 'Sadje', 'weight': 80, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 191, 'name': 'Fruktoza', 'category': 'Sladila', 'weight': 5, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 192, 'name': 'Javorjev sirup', 'category': 'Sladila', 'weight': 15, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 193, 'name': 'Med', 'category': 'Sladila', 'weight': 15, 'unit': 'g', 'carbs': 11, 'calc_carbs': 11 }, { 'id': 194, 'name': 'Sorbitol, saharin', 'category': 'Sladila', 'weight': 1, 'unit': 'g', 'carbs': 1, 'calc_carbs': 1 }, { 'id': 195, 'name': 'Stevia', 'category': 'Sladila', 'weight': 1, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 196, 'name': 'Sladkor - Kristalni', 'category': 'Sladila', 'weight': 5, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 197, 'name': 'Sladkor - Rjavi', 'category': 'Sladila', 'weight': 5, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 198, 'name': 'Artičoka konzervirana', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 300, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 199, 'name': 'Beluši - Sveži', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 250, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 200, 'name': 'Beluši - Konzervirani', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 320, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 201, 'name': 'Beluši - Zamrznjeni', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 210, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 202, 'name': 'Blitva', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 203, 'name': 'Sladkor - Za diabetike', 'category': 'Sladila', 'weight': 5, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 204, 'name': 'Brokoli', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 205, 'name': 'Brstični ohrovt', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 160, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 206, 'name': 'Bučke', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 250, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 207, 'name': 'Cvetača', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 208, 'name': 'Čebula', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 100, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 209, 'name': 'Čebula - Ocvrta – obročki', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 50, 'unit': 'g', 'carbs': 14, 'calc_carbs': 14 }, { 'id': 210, 'name': 'Čebula - Pražena', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 90, 'unit': 'g', 'carbs': 13, 'calc_carbs': 13 }, { 'id': 211, 'name': 'Čebula - Vložena', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 35, 'unit': 'g', 'carbs': 2, 'calc_carbs': 2 }, { 'id': 212, 'name': 'Česen', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 20, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 213, 'name': 'Čičerika', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 30, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 214, 'name': 'Čičerika  - Humus', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 90, 'unit': 'g', 'carbs': 10, 'calc_carbs': 10 }, { 'id': 215, 'name': 'Gobe - Lisičke', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 216, 'name': 'Gobe - Sušene', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 110, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 217, 'name': 'Gobe - Šampinjoni praženi', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 120, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 218, 'name': 'Hrenov namaz', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 26, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 219, 'name': 'Jajčevec – malancan svež', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 220, 'name': 'Janež – koromač', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 221, 'name': 'Krompir  - Golaž', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 50, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 222, 'name': 'Krompir  - Jam kuhan', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 120, 'unit': 'g', 'carbs': 40, 'calc_carbs': 40 }, { 'id': 223, 'name': 'Krompir  - Navaden pečen', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 120, 'unit': 'g', 'carbs': 27, 'calc_carbs': 27 }, { 'id': 224, 'name': 'Krompir  - Sladki pečen', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 120, 'unit': 'g', 'carbs': 34, 'calc_carbs': 34 }, { 'id': 225, 'name': 'Krompir  - Zloženka z zelenjavo', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 160, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 226, 'name': 'Koleraba', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 140, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 227, 'name': 'Korenje - Sveže', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 100, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 228, 'name': 'Korenje - Konzervirano', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 130, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 229, 'name': 'Korenje - Namaz z lečo', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 140, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 230, 'name': 'Korenje - Zamrznjeno', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 100, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 231, 'name': 'Koruza sladka', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 150, 'unit': 'g', 'carbs': 40, 'calc_carbs': 40 }, { 'id': 232, 'name': 'Kumare', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 260, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 233, 'name': 'Kumare v kisu', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 280, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 234, 'name': 'Leča', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 60, 'unit': 'g', 'carbs': 10, 'calc_carbs': 10 }, { 'id': 235, 'name': 'Olive zelene', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 40, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 236, 'name': 'Paprika - Rdeča', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 75, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 237, 'name': 'Paprika - Rdeča konzervirana', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 100, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 238, 'name': 'Paprika - Rumena sladka', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 100, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 239, 'name': 'Paprika - Zelena', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 170, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 240, 'name': 'Ohrovt', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 241, 'name': 'Ohrovt  - Kuhan', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 100, 'unit': 'g', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 242, 'name': 'Ohrovt  - S krompirjem', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 100, 'unit': 'g', 'carbs': 10, 'calc_carbs': 10 }, { 'id': 243, 'name': 'Paradižnik', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 244, 'name': 'Paradižnik - Češnjevec', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 80, 'unit': 'g', 'carbs': 2, 'calc_carbs': 2 }, { 'id': 245, 'name': 'Paradižnik - Mezga', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 40, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 246, 'name': 'Paradižnik - Omaka – ketchup', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 20, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 247, 'name': 'Paradižnik - Sušen, v olju', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 50, 'unit': 'g', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 248, 'name': 'Pastinak pečen', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 60, 'unit': 'g', 'carbs': 13, 'calc_carbs': 13 }, { 'id': 249, 'name': 'Peteršilj list', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 70, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 250, 'name': 'Por', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 60, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 251, 'name': 'Rdeča pesa konzervirana', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 75, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 252, 'name': 'Redkev - Bela', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 260, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 253, 'name': 'Redkev - Rdeča', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 220, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 254, 'name': 'Redkvica konzervirana', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 70, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 255, 'name': 'Spomladanski zavitki kitajski', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 90, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 256, 'name': 'Solata - Zelena endivija', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 300, 'unit': 'g', 'carbs': 1, 'calc_carbs': 1 }, { 'id': 257, 'name': 'Solata - Zelena ledenka', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 300, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 258, 'name': 'Solata - Zelena mehka', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 300, 'unit': 'g', 'carbs': 1, 'calc_carbs': 1 }, { 'id': 259, 'name': 'Solata - Zelena radič', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 300, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 260, 'name': 'Solata - Zelena vrtna', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 300, 'unit': 'g', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 261, 'name': 'Solata - Radič veronski', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 262, 'name': 'Špinača - Listi', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 100, 'unit': 'g', 'carbs': 1, 'calc_carbs': 1 }, { 'id': 263, 'name': 'Špinača - Zamrznjena', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 100, 'unit': 'g', 'carbs': 1, 'calc_carbs': 1 }, { 'id': 264, 'name': 'Špinača - Pire zamrznjena', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 100, 'unit': 'g', 'carbs': 1, 'calc_carbs': 1 }, { 'id': 265, 'name': 'Zelena', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 266, 'name': 'Zelje - Belo', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 120, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 267, 'name': 'Zelje - Kislo konzervirano', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 200, 'unit': 'g', 'carbs': 1, 'calc_carbs': 1 }, { 'id': 268, 'name': 'Zelje - Kitajsko', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 400, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 269, 'name': 'Zelje - Pomladansko konzervirano', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 200, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 270, 'name': 'Zelje - Rdeče', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 150, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 271, 'name': 'Zelje - Rdeče konzervirano', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 150, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 272, 'name': 'Zelje - Sladko s krompirjem', 'category': 'Zelenjava in zelenjavne jedi', 'weight': 100, 'unit': 'g', 'carbs': 10, 'calc_carbs': 10 }, { 'id': 273, 'name': 'Jogurt - Grški', 'category': 'Mleko in mlečni izdelki', 'weight': 85, 'unit': 'g', 'carbs': 4, 'calc_carbs': 4 }, { 'id': 274, 'name': 'Jogurt - Navadni delno posnet (1,6 %)', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 275, 'name': 'Jogurt - Navadni polnomastni (3,5 %)', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 276, 'name': 'Jogurt - Navadni posnet (0 %)', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 277, 'name': 'Jogurt - Sadni delno posnet (1,6 %)', 'category': 'Mleko in mlečni izdelki', 'weight': 200, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 278, 'name': 'Jogurt - Sadni polnomastni (3,5 %)', 'category': 'Mleko in mlečni izdelki', 'weight': 200, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 279, 'name': 'Jogurt - Sojin navadni', 'category': 'Mleko in mlečni izdelki', 'weight': 300, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 280, 'name': 'Jogurt - Sojin sadni', 'category': 'Mleko in mlečni izdelki', 'weight': 150, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 281, 'name': 'Kefir - Delno posnet (1,6 %)', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 282, 'name': 'Kefir - Polnomastni (3,5 %)', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 283, 'name': 'Kefir - Posnet (0 %)', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 284, 'name': 'Kefir - S sadjem', 'category': 'Mleko in mlečni izdelki', 'weight': 200, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 285, 'name': 'Kislo mleko - 20 % maščobe', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 286, 'name': 'Kislo mleko - 40 % maščobe', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 287, 'name': 'Maslo surovo', 'category': 'Mleko in mlečni izdelki', 'weight': 6, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 288, 'name': 'Mleko - Čokoladno', 'category': 'Mleko in mlečni izdelki', 'weight': 150, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 289, 'name': 'Mleko - Kozje', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 290, 'name': 'Mleko - Kravje delno posneto (1,6 %)', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 291, 'name': 'Mleko - Kravje polnomastno (3,5 %)', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 292, 'name': 'Mleko - Kravje posneto (0,5 %)', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 293, 'name': 'Mleko - Sojino', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 294, 'name': 'Pinjenec', 'category': 'Mleko in mlečni izdelki', 'weight': 400, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 295, 'name': 'Puding - Čokoladni v lončku', 'category': 'Mleko in mlečni izdelki', 'weight': 125, 'unit': 'ml', 'carbs': 31, 'calc_carbs': 31 }, { 'id': 296, 'name': 'Puding - Instant pripravljen po recepturi', 'category': 'Mleko in mlečni izdelki', 'weight': 125, 'unit': 'ml', 'carbs': 30, 'calc_carbs': 30 }, { 'id': 297, 'name': 'Puding - Vanilija v lončku', 'category': 'Mleko in mlečni izdelki', 'weight': 125, 'unit': 'ml', 'carbs': 26, 'calc_carbs': 26 }, { 'id': 298, 'name': 'Sir - Brie', 'category': 'Mleko in mlečni izdelki', 'weight': 25, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 299, 'name': 'Sir - Čedar', 'category': 'Mleko in mlečni izdelki', 'weight': 25, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 300, 'name': 'Sir - Edamec', 'category': 'Mleko in mlečni izdelki', 'weight': 25, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 301, 'name': 'Sir - Feta', 'category': 'Mleko in mlečni izdelki', 'weight': 30, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 302, 'name': 'Sir - Kozji', 'category': 'Mleko in mlečni izdelki', 'weight': 25, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 303, 'name': 'Sir - Leicester', 'category': 'Mleko in mlečni izdelki', 'weight': 50, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 304, 'name': 'Sir - Mozzarella', 'category': 'Mleko in mlečni izdelki', 'weight': 25, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 305, 'name': 'Sir - Namaz', 'category': 'Mleko in mlečni izdelki', 'weight': 20, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 306, 'name': 'Sir - Navadni (npr. ementalec)', 'category': 'Mleko in mlečni izdelki', 'weight': 25, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 307, 'name': 'Sir - Parmezan', 'category': 'Mleko in mlečni izdelki', 'weight': 10, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 308, 'name': 'Sir - Stilton', 'category': 'Mleko in mlečni izdelki', 'weight': 35, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 309, 'name': 'Sir - Topljeni', 'category': 'Mleko in mlečni izdelki', 'weight': 35, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 310, 'name': 'Sir - Za toast', 'category': 'Mleko in mlečni izdelki', 'weight': 20, 'unit': 'g', 'carbs': 1, 'calc_carbs': 1 }, { 'id': 311, 'name': 'Sirotka - Sirotka', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 312, 'name': 'Skuta - Pusta', 'category': 'Mleko in mlečni izdelki', 'weight': 50, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 313, 'name': 'Skuta - S smetano', 'category': 'Mleko in mlečni izdelki', 'weight': 200, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 314, 'name': 'Sladoled - Na palčki – lučka', 'category': 'Mleko in mlečni izdelki', 'weight': 89, 'unit': 'g', 'carbs': 26, 'calc_carbs': 26 }, { 'id': 315, 'name': 'Sladoled - Mlečni diabetični', 'category': 'Mleko in mlečni izdelki', 'weight': 100, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 316, 'name': 'Sladoled - Mlečni navadni', 'category': 'Mleko in mlečni izdelki', 'weight': 100, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 317, 'name': 'Sladoled - Sorbet', 'category': 'Mleko in mlečni izdelki', 'weight': 50, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 318, 'name': 'Kisla smetana', 'category': 'Mleko in mlečni izdelki', 'weight': 25, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 319, 'name': 'Smetana - Sladka s 30 % maščobe', 'category': 'Mleko in mlečni izdelki', 'weight': 500, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 320, 'name': 'Smetana - Sladka s 40 % maščobe', 'category': 'Mleko in mlečni izdelki', 'weight': 500, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 321, 'name': 'Smetana - Za kavo z 10 % maščobe', 'category': 'Mleko in mlečni izdelki', 'weight': 350, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 322, 'name': 'Žitna kava z mlekom', 'category': 'Mleko in mlečni izdelki', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 323, 'name': 'Riž - Delno poliran kuhan', 'category': 'Riž', 'weight': 80, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 324, 'name': 'Riž - Kitajski kuhan zlepljen', 'category': 'Riž', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 325, 'name': 'Riž - Kroglice brez čokolade', 'category': 'Riž', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 326, 'name': 'Riž - Napitek', 'category': 'Riž', 'weight': 120, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 327, 'name': 'Riž - Narastek brez sladkorja', 'category': 'Riž', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 328, 'name': 'Riž - Mlečni brez sladkorja', 'category': 'Riž', 'weight': 100, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 329, 'name': 'Riž - Moka', 'category': 'Riž', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 330, 'name': 'Riž - Neoluščen kuhan', 'category': 'Riž', 'weight': 45, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 331, 'name': 'Riž - Parboiled kuhan', 'category': 'Riž', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 332, 'name': 'Rižota - Paella', 'category': 'Riž', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 333, 'name': 'Rižota - S svinjino', 'category': 'Riž', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 334, 'name': 'Rižota - Z morskimi sadeži', 'category': 'Riž', 'weight': 75, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 335, 'name': 'Rižota - Zelenjavna', 'category': 'Riž', 'weight': 75, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 336, 'name': 'Kruh - Ajdov', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 337, 'name': 'Kruh - Ciabatta – čabata', 'category': 'Kruh', 'weight': 97, 'unit': 'g', 'carbs': 50, 'calc_carbs': 50 }, { 'id': 338, 'name': 'Kruh - Beli', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 339, 'name': 'Kruh - Česnov', 'category': 'Kruh', 'weight': 22, 'unit': 'g', 'carbs': 10, 'calc_carbs': 10 }, { 'id': 340, 'name': 'Kruh - Francoska štruca', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 341, 'name': 'Kruh - Koruzni', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 342, 'name': 'Kruh - Makovka', 'category': 'Kruh', 'weight': 54, 'unit': 'g', 'carbs': 26, 'calc_carbs': 26 }, { 'id': 343, 'name': 'Kruh - Pirin', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 344, 'name': 'Kruh - Polnozrnati', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 345, 'name': 'Kruh - Pšenični beli', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 346, 'name': 'Kruh - Pšenični črni', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 347, 'name': 'Kruh - Pšenični polbeli', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 348, 'name': 'Kruh - Pšenični polnozrnat', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 349, 'name': 'Kruh - Pumpernickel', 'category': 'Kruh', 'weight': 40, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 350, 'name': 'Kruh - Rženi', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 351, 'name': 'Kruh - Toast polnozrnati', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 352, 'name': 'Kruh - Žemlja bela', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 353, 'name': 'Kruh - Žemlja polnozrnata', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 354, 'name': 'Kruh - Brez glutena', 'category': 'Kruh', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 355, 'name': 'Kruhov cmok  - Kruhov cmok', 'category': 'Kruh', 'weight': 70, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 356, 'name': 'Tortilja - Koruzna', 'category': 'Kruh', 'weight': 50, 'unit': 'g', 'carbs': 25, 'calc_carbs': 25 }, { 'id': 357, 'name': 'Tortilja - Pšenična', 'category': 'Kruh', 'weight': 50, 'unit': 'g', 'carbs': 25, 'calc_carbs': 25 }, { 'id': 358, 'name': 'Ostalo - Crispy kruhki', 'category': 'Kruh', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 359, 'name': 'Ostalo - Kruhove drobtine', 'category': 'Kruh', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 360, 'name': 'Ostalo - Palčke grissini', 'category': 'Kruh', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 361, 'name': 'Ostalo - Palčke slane', 'category': 'Kruh', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 362, 'name': 'Ostalo - Pizza', 'category': 'Kruh', 'weight': 35, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 363, 'name': 'Ostalo - Prepečenec', 'category': 'Kruh', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 364, 'name': 'Ostalo - Presta lužena', 'category': 'Kruh', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 365, 'name': 'Ostalo - Presta slana', 'category': 'Kruh', 'weight': 50, 'unit': 'g', 'carbs': 35, 'calc_carbs': 35 }, { 'id': 366, 'name': 'Ostalo - Zlate kroglice – croutons', 'category': 'Kruh', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 367, 'name': 'Baklava', 'category': 'Sladice in sladka peciva', 'weight': 20, 'unit': 'g', 'carbs': 9, 'calc_carbs': 9 }, { 'id': 368, 'name': 'Biskvit - Masleni', 'category': 'Sladice in sladka peciva', 'weight': 80, 'unit': 'g', 'carbs': 50, 'calc_carbs': 50 }, { 'id': 369, 'name': 'Biskvit - S sadjem z manj maščobe', 'category': 'Sladice in sladka peciva', 'weight': 80, 'unit': 'g', 'carbs': 25, 'calc_carbs': 25 }, { 'id': 370, 'name': 'Biskvit - S sadjem z veliko maščobe', 'category': 'Sladice in sladka peciva', 'weight': 80, 'unit': 'g', 'carbs': 25, 'calc_carbs': 25 }, { 'id': 371, 'name': 'Biskvit - S skuto', 'category': 'Sladice in sladka peciva', 'weight': 80, 'unit': 'g', 'carbs': 25, 'calc_carbs': 25 }, { 'id': 372, 'name': 'Biskvit - Testo navadno (osnovno)', 'category': 'Sladice in sladka peciva', 'weight': 80, 'unit': 'g', 'carbs': 60, 'calc_carbs': 60 }, { 'id': 373, 'name': 'Brioš', 'category': 'Sladice in sladka peciva', 'weight': 18, 'unit': 'g', 'carbs': 10, 'calc_carbs': 10 }, { 'id': 374, 'name': 'Brownie', 'category': 'Sladice in sladka peciva', 'weight': 82, 'unit': 'g', 'carbs': 43, 'calc_carbs': 43 }, { 'id': 375, 'name': 'Buhtelj', 'category': 'Sladice in sladka peciva', 'weight': 80, 'unit': 'g', 'carbs': 40, 'calc_carbs': 40 }, { 'id': 376, 'name': 'Ekler s čokolado', 'category': 'Sladice in sladka peciva', 'weight': 56, 'unit': 'g', 'carbs': 21, 'calc_carbs': 21 }, { 'id': 377, 'name': 'Francoski rogljiček – croissant', 'category': 'Sladice in sladka peciva', 'weight': 51, 'unit': 'g', 'carbs': 22, 'calc_carbs': 22 }, { 'id': 378, 'name': 'Ingverjevo pecivo', 'category': 'Sladice in sladka peciva', 'weight': 56, 'unit': 'g', 'carbs': 35, 'calc_carbs': 35 }, { 'id': 379, 'name': 'Keksi - Brez sladkorja', 'category': 'Sladice in sladka peciva', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 380, 'name': 'Keksi - Masleni', 'category': 'Sladice in sladka peciva', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 381, 'name': 'Krof', 'category': 'Sladice in sladka peciva', 'weight': 80, 'unit': 'g', 'carbs': 35, 'calc_carbs': 35 }, { 'id': 382, 'name': 'Kvašen kolač z arašidi', 'category': 'Sladice in sladka peciva', 'weight': 80, 'unit': 'g', 'carbs': 35, 'calc_carbs': 35 }, { 'id': 383, 'name': 'Mousse – čokoladna pena', 'category': 'Sladice in sladka peciva', 'weight': 50, 'unit': 'g', 'carbs': 10, 'calc_carbs': 10 }, { 'id': 384, 'name': 'Muffin - Borovničev', 'category': 'Sladice in sladka peciva', 'weight': 25, 'unit': 'g', 'carbs': 12, 'calc_carbs': 12 }, { 'id': 385, 'name': 'Muffin - Čokoladni', 'category': 'Sladice in sladka peciva', 'weight': 28, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 386, 'name': 'Osje gnezdo', 'category': 'Sladice in sladka peciva', 'weight': 95, 'unit': 'g', 'carbs': 44, 'calc_carbs': 44 }, { 'id': 387, 'name': 'Panna cotta', 'category': 'Sladice in sladka peciva', 'weight': 145, 'unit': 'g', 'carbs': 25, 'calc_carbs': 25 }, { 'id': 388, 'name': 'Palačinke', 'category': 'Sladice in sladka peciva', 'weight': 62, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 389, 'name': 'Piškot - Čajni', 'category': 'Sladice in sladka peciva', 'weight': 7, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 390, 'name': 'Piškot - Figova rolica', 'category': 'Sladice in sladka peciva', 'weight': 21, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 391, 'name': 'Piškot - Ingverjev', 'category': 'Sladice in sladka peciva', 'weight': 10, 'unit': 'g', 'carbs': 8, 'calc_carbs': 8 }, { 'id': 392, 'name': 'Piškot - Linški', 'category': 'Sladice in sladka peciva', 'weight': 18, 'unit': 'g', 'carbs': 13, 'calc_carbs': 13 }, { 'id': 393, 'name': 'Piškot - Napolitanka', 'category': 'Sladice in sladka peciva', 'weight': 9, 'unit': 'g', 'carbs': 6, 'calc_carbs': 6 }, { 'id': 394, 'name': 'Piškot - Ovseni', 'category': 'Sladice in sladka peciva', 'weight': 16, 'unit': 'g', 'carbs': 10, 'calc_carbs': 10 }, { 'id': 395, 'name': 'Piškot - Polnozrnati s čokolado', 'category': 'Sladice in sladka peciva', 'weight': 19, 'unit': 'g', 'carbs': 12, 'calc_carbs': 12 }, { 'id': 396, 'name': 'Piškot - S koščki čokolade', 'category': 'Sladice in sladka peciva', 'weight': 10, 'unit': 'g', 'carbs': 7, 'calc_carbs': 7 }, { 'id': 397, 'name': 'Piškot - Z vanilijevo kremo', 'category': 'Sladice in sladka peciva', 'weight': 12, 'unit': 'g', 'carbs': 8, 'calc_carbs': 8 }, { 'id': 398, 'name': 'Pita - Jabolčna', 'category': 'Sladice in sladka peciva', 'weight': 80, 'unit': 'g', 'carbs': 20, 'calc_carbs': 20 }, { 'id': 399, 'name': 'Pita - S skuto (iz listnatega testa)', 'category': 'Sladice in sladka peciva', 'weight': 80, 'unit': 'g', 'carbs': 30, 'calc_carbs': 30 }, { 'id': 400, 'name': 'Pita - Z dodatki (malo maščobe)', 'category': 'Sladice in sladka peciva', 'weight': 80, 'unit': 'g', 'carbs': 40, 'calc_carbs': 40 }, { 'id': 401, 'name': 'Potica orehova - Potica orehova', 'category': 'Sladice in sladka peciva', 'weight': 90, 'unit': 'g', 'carbs': 30, 'calc_carbs': 30 }, { 'id': 402, 'name': 'Profiterole', 'category': 'Sladice in sladka peciva', 'weight': 40, 'unit': 'g', 'carbs': 10, 'calc_carbs': 10 }, { 'id': 403, 'name': 'Rolada z jagodnim nadevom', 'category': 'Sladice in sladka peciva', 'weight': 35, 'unit': 'g', 'carbs': 12, 'calc_carbs': 12 }, { 'id': 404, 'name': 'Sadna solata s smetano', 'category': 'Sladice in sladka peciva', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 405, 'name': 'Sladoled - Kornet – vafelj za diabetike', 'category': 'Sladice in sladka peciva', 'weight': 50, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 406, 'name': 'Sladoled - Sorbet limonin', 'category': 'Sladice in sladka peciva', 'weight': 45, 'unit': 'g', 'carbs': 11, 'calc_carbs': 11 }, { 'id': 407, 'name': 'Sladoled - Vanilija', 'category': 'Sladice in sladka peciva', 'weight': 40, 'unit': 'g', 'carbs': 8, 'calc_carbs': 8 }, { 'id': 408, 'name': 'Španski vetrc', 'category': 'Sladice in sladka peciva', 'weight': 5, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 409, 'name': 'Tiramisu', 'category': 'Sladice in sladka peciva', 'weight': 45, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 410, 'name': 'Torta - Čokoladna', 'category': 'Sladice in sladka peciva', 'weight': 40, 'unit': 'g', 'carbs': 20, 'calc_carbs': 20 }, { 'id': 411, 'name': 'Torta - Korenčkova', 'category': 'Sladice in sladka peciva', 'weight': 53, 'unit': 'g', 'carbs': 20, 'calc_carbs': 20 }, { 'id': 412, 'name': 'Torta - Kremna rezina – kremšnita', 'category': 'Sladice in sladka peciva', 'weight': 80, 'unit': 'g', 'carbs': 25, 'calc_carbs': 25 }, { 'id': 413, 'name': 'Torta - S smetano in višnjami – črni gozdiček', 'category': 'Sladice in sladka peciva', 'weight': 68, 'unit': 'g', 'carbs': 25, 'calc_carbs': 25 }, { 'id': 414, 'name': 'Torta - Sacher', 'category': 'Sladice in sladka peciva', 'weight': 80, 'unit': 'g', 'carbs': 40, 'calc_carbs': 40 }, { 'id': 415, 'name': 'Torta - Sadna', 'category': 'Sladice in sladka peciva', 'weight': 80, 'unit': 'g', 'carbs': 20, 'calc_carbs': 20 }, { 'id': 416, 'name': 'Torta - Skutina', 'category': 'Sladice in sladka peciva', 'weight': 50, 'unit': 'g', 'carbs': 18, 'calc_carbs': 18 }, { 'id': 417, 'name': 'Zavitek - Jabolčni', 'category': 'Sladice in sladka peciva', 'weight': 90, 'unit': 'g', 'carbs': 28, 'calc_carbs': 28 }, { 'id': 418, 'name': 'Zavitek - S čokolado – navihanček', 'category': 'Sladice in sladka peciva', 'weight': 64, 'unit': 'g', 'carbs': 27, 'calc_carbs': 27 }, { 'id': 419, 'name': 'Arašidi - Slani', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 420, 'name': 'Arašidi - Sveži', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 2, 'calc_carbs': 2 }, { 'id': 421, 'name': 'Arašidi - Obliti s čokolado', 'category': 'Lupinasto sadje – oreščki', 'weight': 40, 'unit': 'g', 'carbs': 20, 'calc_carbs': 20 }, { 'id': 422, 'name': 'Arašidi - Praženi', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 423, 'name': 'Brazilski oreščki - Praženi', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 1, 'calc_carbs': 1 }, { 'id': 424, 'name': 'Brazilski oreščki - Sveži', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 1, 'calc_carbs': 1 }, { 'id': 425, 'name': 'Indijski oreščki slani', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 6, 'calc_carbs': 6 }, { 'id': 426, 'name': 'Kokos - Nariban', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 2, 'calc_carbs': 2 }, { 'id': 427, 'name': 'Kokos - Svež', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 1, 'calc_carbs': 1 }, { 'id': 428, 'name': 'Kostanj pečen', 'category': 'Lupinasto sadje – oreščki', 'weight': 45, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 429, 'name': 'Laneno seme sveže', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 430, 'name': 'Lešniki', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 431, 'name': 'Lešniki - Praženi', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 1, 'calc_carbs': 1 }, { 'id': 432, 'name': 'Lešniki - Obliti s čokolado', 'category': 'Lupinasto sadje – oreščki', 'weight': 40, 'unit': 'g', 'carbs': 20, 'calc_carbs': 20 }, { 'id': 433, 'name': 'Mandlji praženi - Mandlji praženi', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 2, 'calc_carbs': 2 }, { 'id': 434, 'name': 'Orehi - Praženi', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 2, 'calc_carbs': 2 }, { 'id': 435, 'name': 'Orehi - Sveži', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 436, 'name': 'Pistacija slana', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 4, 'calc_carbs': 4 }, { 'id': 437, 'name': 'Sončnična semena', 'category': 'Lupinasto sadje – oreščki', 'weight': 25, 'unit': 'g', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 438, 'name': 'Suho sadje z oreščki', 'category': 'Lupinasto sadje – oreščki', 'weight': 33, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 439, 'name': 'Čokolada - After eight', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 8, 'unit': 'g', 'carbs': 6, 'calc_carbs': 6 }, { 'id': 440, 'name': 'Čokolada - Bela', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 441, 'name': 'Čokolada - Kit kat', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 53, 'unit': 'g', 'carbs': 33, 'calc_carbs': 33 }, { 'id': 442, 'name': 'Čokolada - Mars', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 66, 'unit': 'g', 'carbs': 47, 'calc_carbs': 47 }, { 'id': 443, 'name': 'Čokolada - Mlečna', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 28, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 444, 'name': 'Čokolada - Mlečna s kavo', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 445, 'name': 'Čokolada - Mlečna s krispiji', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 446, 'name': 'Čokolada - Mlečna s celimi lešniki', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 447, 'name': 'Čokolada - Mlečna z rezanimi lešniki', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 448, 'name': 'Čokolada - Mlečna za diabetike', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 449, 'name': 'Čokolada - Praline polnjene', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 30, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 450, 'name': 'Čokolada - Smarties', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 7, 'unit': 'g', 'carbs': 5, 'calc_carbs': 5 }, { 'id': 451, 'name': 'Čokolada - Snickers', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 59, 'unit': 'g', 'carbs': 35, 'calc_carbs': 35 }, { 'id': 452, 'name': 'Čokolada - Temna s 70 % kakava', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 25, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 453, 'name': 'Čokolada - Toffifee', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 20, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 454, 'name': 'Čokolada - Twix', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 62, 'unit': 'g', 'carbs': 40, 'calc_carbs': 40 }, { 'id': 455, 'name': 'Kakav - V prahu brez maščobe', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 15, 'unit': 'g', 'carbs': 2, 'calc_carbs': 2 }, { 'id': 456, 'name': 'Kakav - V prahu klasični grenki', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 15, 'unit': 'g', 'carbs': 2, 'calc_carbs': 2 }, { 'id': 457, 'name': 'Bomboni - Karamelni', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 32, 'unit': 'g', 'carbs': 25, 'calc_carbs': 25 }, { 'id': 458, 'name': 'Bomboni - Sadni (trdi)', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 35, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 459, 'name': 'Sladoled - Mlečni', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 125, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 460, 'name': 'Marmelada - Dietna', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 20, 'unit': 'g', 'carbs': 13, 'calc_carbs': 13 }, { 'id': 461, 'name': 'Marmelada - Džem', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 20, 'unit': 'g', 'carbs': 13, 'calc_carbs': 13 }, { 'id': 462, 'name': 'Marmelada - Pomarančna', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 20, 'unit': 'g', 'carbs': 13, 'calc_carbs': 13 }, { 'id': 463, 'name': 'Marcipan', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 15, 'unit': 'g', 'carbs': 11, 'calc_carbs': 11 }, { 'id': 464, 'name': 'Sladkorni preliv s fruktozo za diabetike', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 15, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 465, 'name': 'Želatina', 'category': 'Čokolada, sladkarije, sladoled', 'weight': 35, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 466, 'name': 'Foccacia', 'category': 'Hitra prehrana', 'weight': 110, 'unit': 'g', 'carbs': 42, 'calc_carbs': 42 }, { 'id': 467, 'name': 'Mcdonald’s - Chicken mcnuggets 6', 'category': 'Hitra prehrana', 'weight': 104, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 468, 'name': 'Mcdonald’s - Chicken mcnuggets 9', 'category': 'Hitra prehrana', 'weight': 156, 'unit': 'g', 'carbs': 25, 'calc_carbs': 25 }, { 'id': 469, 'name': 'Mcdonald’s - Chicken mcnuggets 20', 'category': 'Hitra prehrana', 'weight': 347, 'unit': 'g', 'carbs': 50, 'calc_carbs': 50 }, { 'id': 470, 'name': 'Mcdonald’s - Hamburger', 'category': 'Hitra prehrana', 'weight': 105, 'unit': 'g', 'carbs': 30, 'calc_carbs': 30 }, { 'id': 471, 'name': 'Mcdonald’s - Hamburger big mac', 'category': 'Hitra prehrana', 'weight': 215, 'unit': 'g', 'carbs': 43, 'calc_carbs': 43 }, { 'id': 472, 'name': 'Mcdonald’s - Hamburger fish mac', 'category': 'Hitra prehrana', 'weight': 144, 'unit': 'g', 'carbs': 40, 'calc_carbs': 40 }, { 'id': 473, 'name': 'Mcdonald’s - Hamburger mcchicken', 'category': 'Hitra prehrana', 'weight': 160, 'unit': 'g', 'carbs': 40, 'calc_carbs': 40 }, { 'id': 474, 'name': 'Mcdonald’s - Hamburger royal s sirom', 'category': 'Hitra prehrana', 'weight': 210, 'unit': 'g', 'carbs': 45, 'calc_carbs': 45 }, { 'id': 475, 'name': 'Mcdonald’s - Jabolčna pita', 'category': 'Hitra prehrana', 'weight': 80, 'unit': 'g', 'carbs': 25, 'calc_carbs': 25 }, { 'id': 476, 'name': 'Mcdonald’s - Pečen krompirček – pomfri mali', 'category': 'Hitra prehrana', 'weight': 100, 'unit': 'g', 'carbs': 28, 'calc_carbs': 28 }, { 'id': 477, 'name': 'Mcdonald’s - Sladoled mcsundae s karamelo', 'category': 'Hitra prehrana', 'weight': 218, 'unit': 'g', 'carbs': 65, 'calc_carbs': 65 }, { 'id': 478, 'name': 'Mcdonald’s - Solata mehiška', 'category': 'Hitra prehrana', 'weight': 170, 'unit': 'g', 'carbs': 30, 'calc_carbs': 30 }, { 'id': 479, 'name': 'Mcdonald’s - Solata vrtna', 'category': 'Hitra prehrana', 'weight': 170, 'unit': 'g', 'carbs': 2, 'calc_carbs': 2 }, { 'id': 480, 'name': 'Mcdonald’s - Mlečni shake s čokolado', 'category': 'Hitra prehrana', 'weight': 500, 'unit': 'g', 'carbs': 90, 'calc_carbs': 90 }, { 'id': 481, 'name': 'Mcdonald’s - Mlečni shake z jagodo', 'category': 'Hitra prehrana', 'weight': 250, 'unit': 'g', 'carbs': 40, 'calc_carbs': 40 }, { 'id': 482, 'name': 'Mcdonald’s - Mlečni shake z vanilijo', 'category': 'Hitra prehrana', 'weight': 500, 'unit': 'g', 'carbs': 90, 'calc_carbs': 90 }, { 'id': 483, 'name': 'Pizza', 'category': 'Hitra prehrana', 'weight': 250, 'unit': 'g', 'carbs': 100, 'calc_carbs': 100 }, { 'id': 484, 'name': 'Toast s sirom in šunko', 'category': 'Hitra prehrana', 'weight': 100, 'unit': 'g', 'carbs': 30, 'calc_carbs': 30 }, { 'id': 485, 'name': 'Juha - Belušna kremna', 'category': 'Juhe', 'weight': 200, 'unit': 'ml', 'carbs': 6, 'calc_carbs': 6 }, { 'id': 486, 'name': 'Juha - Bučkina kremna', 'category': 'Juhe', 'weight': 200, 'unit': 'ml', 'carbs': 2, 'calc_carbs': 2 }, { 'id': 487, 'name': 'Juha - Čebulna', 'category': 'Juhe', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 488, 'name': 'Juha - Fižolova z ribano kašo', 'category': 'Juhe', 'weight': 250, 'unit': 'ml', 'carbs': 25, 'calc_carbs': 25 }, { 'id': 489, 'name': 'Juha - Gobova', 'category': 'Juhe', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 490, 'name': 'Juha - Golaževa s cmoki', 'category': 'Juhe', 'weight': 140, 'unit': 'g', 'carbs': 20, 'calc_carbs': 20 }, { 'id': 491, 'name': 'Juha - S cmoki (3)', 'category': 'Juhe', 'weight': 200, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 492, 'name': 'Juha - Z rezanci', 'category': 'Juhe', 'weight': 200, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 493, 'name': 'Juha - Z ribano kašo', 'category': 'Juhe', 'weight': 200, 'unit': 'ml', 'carbs': 10, 'calc_carbs': 10 }, { 'id': 494, 'name': 'Juha - Grahova', 'category': 'Juhe', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 495, 'name': 'Jota', 'category': 'Juhe', 'weight': 250, 'unit': 'ml', 'carbs': 25, 'calc_carbs': 25 }, { 'id': 496, 'name': 'Juha - Kokošja z rezanci', 'category': 'Juhe', 'weight': 250, 'unit': 'ml', 'carbs': 8, 'calc_carbs': 8 }, { 'id': 497, 'name': 'Juha - Krompirjeva', 'category': 'Juhe', 'weight': 200, 'unit': 'ml', 'carbs': 20, 'calc_carbs': 20 }, { 'id': 498, 'name': 'Mineštra “italiana”', 'category': 'Juhe', 'weight': 200, 'unit': 'ml', 'carbs': 25, 'calc_carbs': 25 }, { 'id': 499, 'name': 'Juha - Paradižnikova', 'category': 'Juhe', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 500, 'name': 'Piščančja obara z zelenjava', 'category': 'Juhe', 'weight': 300, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 501, 'name': 'Juha - Porova z zdrobom', 'category': 'Juhe', 'weight': 250, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 502, 'name': 'Juha - Prežganka', 'category': 'Juhe', 'weight': 200, 'unit': 'ml', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 503, 'name': 'Ričet', 'category': 'Juhe', 'weight': 250, 'unit': 'ml', 'carbs': 35, 'calc_carbs': 35 }, { 'id': 504, 'name': 'Telečja obara z žličniki', 'category': 'Juhe', 'weight': 200, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 505, 'name': 'Juha - Zdrobova', 'category': 'Juhe', 'weight': 200, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 506, 'name': 'Juha - Brez stročnic', 'category': 'Juhe', 'weight': 200, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 507, 'name': 'Juha - S krompirjem', 'category': 'Juhe', 'weight': 200, 'unit': 'ml', 'carbs': 20, 'calc_carbs': 20 }, { 'id': 508, 'name': 'Juha - S stročnicami', 'category': 'Juhe', 'weight': 200, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 509, 'name': 'Juha - Z rižem', 'category': 'Juhe', 'weight': 200, 'unit': 'ml', 'carbs': 14, 'calc_carbs': 14 }, { 'id': 510, 'name': 'Ajda - Kaša kuhana na vodi', 'category': 'Jedi iz žitaric', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 511, 'name': 'Ajda - Štruklji z orehi', 'category': 'Jedi iz žitaric', 'weight': 45, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 512, 'name': 'Ajda - Žganci', 'category': 'Jedi iz žitaric', 'weight': 90, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 513, 'name': 'Cmoki  - Kruhovi', 'category': 'Jedi iz žitaric', 'weight': 70, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 514, 'name': 'Cmoki  - Zdrobovi', 'category': 'Jedi iz žitaric', 'weight': 210, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 515, 'name': 'Mlečni močnik - Koruzni', 'category': 'Jedi iz žitaric', 'weight': 150, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 516, 'name': 'Mlečni močnik - Pšenični', 'category': 'Jedi iz žitaric', 'weight': 150, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 517, 'name': 'Carski praženec', 'category': 'Jedi iz žitaric', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 518, 'name': 'Ječmenova kaša z gobami', 'category': 'Jedi iz žitaric', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 519, 'name': 'Mlečni riž brez sladkorja', 'category': 'Jedi iz žitaric', 'weight': 100, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 520, 'name': 'Mlečni zdrob brez sladkorja', 'category': 'Jedi iz žitaric', 'weight': 100, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 521, 'name': 'Polenta z mlekom brez sladkorja', 'category': 'Jedi iz žitaric', 'weight': 100, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 522, 'name': 'Svaljki skutni – njoki', 'category': 'Jedi iz žitaric', 'weight': 55, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 523, 'name': 'Štruklji skutni slani', 'category': 'Jedi iz žitaric', 'weight': 150, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 524, 'name': 'Cmoki s sadjem', 'category': 'Krompir', 'weight': 90, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 525, 'name': 'Čips', 'category': 'Krompir', 'weight': 90, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 526, 'name': 'Krompir - Kuhan neolupljen', 'category': 'Krompir', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 527, 'name': 'Manioka/kassava', 'category': 'Krompir', 'weight': 60, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 528, 'name': 'Krompir - Ocvrt (pomfri)', 'category': 'Krompir', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 529, 'name': 'Krompir - Olupljen svež', 'category': 'Krompir', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 530, 'name': 'Krompir - Palačinke', 'category': 'Krompir', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 531, 'name': 'Krompir - Pečen', 'category': 'Krompir', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 532, 'name': 'Krompir - Pire', 'category': 'Krompir', 'weight': 130, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 533, 'name': 'Krompir - Polpeti', 'category': 'Krompir', 'weight': 90, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 534, 'name': 'Krompir - Pražen', 'category': 'Krompir', 'weight': 130, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 535, 'name': 'Krompir - Solata z majonezo', 'category': 'Krompir', 'weight': 120, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 536, 'name': 'Krompir - Surov olupljen', 'category': 'Krompir', 'weight': 100, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 537, 'name': 'Krompir - Svaljki kuhani', 'category': 'Krompir', 'weight': 90, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 538, 'name': 'Krompir - Svaljki ocvrti', 'category': 'Krompir', 'weight': 90, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 539, 'name': 'Krompir - Sladki', 'category': 'Krompir', 'weight': 55, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 540, 'name': 'Topinambur', 'category': 'Krompir', 'weight': 300, 'unit': 'g', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 541, 'name': 'Sok  - Ananasov (juice)', 'category': 'Brezalkoholne pijače', 'weight': 100, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 542, 'name': 'Sok  - Ananasov (nektar)', 'category': 'Brezalkoholne pijače', 'weight': 100, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 543, 'name': 'Sok  - Brusnični', 'category': 'Brezalkoholne pijače', 'weight': 100, 'unit': 'ml', 'carbs': 14, 'calc_carbs': 14 }, { 'id': 544, 'name': 'Sok  - Grenivka', 'category': 'Brezalkoholne pijače', 'weight': 100, 'unit': 'ml', 'carbs': 8, 'calc_carbs': 8 }, { 'id': 545, 'name': 'Sok  - Jabolčni', 'category': 'Brezalkoholne pijače', 'weight': 100, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 546, 'name': 'Sok  - Kisla češnja', 'category': 'Brezalkoholne pijače', 'weight': 100, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 547, 'name': 'Sok  - Paradižnikov', 'category': 'Brezalkoholne pijače', 'weight': 100, 'unit': 'ml', 'carbs': 3, 'calc_carbs': 3 }, { 'id': 548, 'name': 'Sok  - Pasijonka', 'category': 'Brezalkoholne pijače', 'weight': 100, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 549, 'name': 'Sok  - Pomarančni (sveže iztisnjen)', 'category': 'Brezalkoholne pijače', 'weight': 170, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 550, 'name': 'Sok  - Pomarančni (nektar, juice)', 'category': 'Brezalkoholne pijače', 'weight': 100, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 551, 'name': 'Sok  - Pomaranča-jabolko (naravni)', 'category': 'Brezalkoholne pijače', 'weight': 200, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 552, 'name': 'Sok  - Smuti z jagodo in banano – smoothie', 'category': 'Brezalkoholne pijače', 'weight': 100, 'unit': 'ml', 'carbs': 13, 'calc_carbs': 13 }, { 'id': 553, 'name': 'Ledeni čaj, fruc, sola', 'category': 'Brezalkoholne pijače', 'weight': 150, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 554, 'name': 'Limonada s sladkorjem', 'category': 'Brezalkoholne pijače', 'weight': 80, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 555, 'name': 'Cola, pepsi, sprite', 'category': 'Brezalkoholne pijače', 'weight': 150, 'unit': 'ml', 'carbs': 15, 'calc_carbs': 15 }, { 'id': 556, 'name': 'Lahka (cola light)', 'category': 'Brezalkoholne pijače', 'weight': 100, 'unit': 'ml', 'carbs': 0, 'calc_carbs': 0 }, { 'id': 557, 'name': 'Energijska pijača', 'category': 'Brezalkoholne pijače', 'weight': 125, 'unit': 'ml', 'carbs': 13, 'calc_carbs': 13 }, { 'id': 558, 'name': 'Vroča čokolada', 'category': 'Brezalkoholne pijače', 'weight': 200, 'unit': 'ml', 'carbs': 11, 'calc_carbs': 11 }];

				var count = 0;

				return {
					getAll: function getAll() {
						return _.sortBy(collection, 'name');
					},
					getCategories: function getCategories() {
						return _.uniq(_.pluck(collection, 'category'));
					}
				};
			})());
		}
	};
});
$__System.register("10", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("default", "<div class=\"list\">\n\n    <aside class=\"list-options\">\n        <div class=\"filter\">\n            <div class=\"filter-query\">\n                <input type=\"search\" placeholder=\"Poišči živilo...\" v-model='searchQuery' debounce=\"500\">\n            </div>\n            <div class=\"filter-category\">\n                <select name=\"filterCategory\" v-model=\"searchCategory\">\n                    <option v-bind:value=null>Vse kategorije</option>\n                    <!-- <option value=\"favs\">Priljubljene</option> -->   \n                    <option v-for=\"category in categories\" v-bind:value=\"category\">{{category}}</option>\n                </select>\n            </div>\n        </div>\n    </aside>\n\n    <transition-group class=\"list-main\" name=\"list-trans\" tag=\"ul\">\n        \n        <li v-for=\"product in filteredData\" :key=\"product.id\" class=\"list-item\">\n            <section>\n                <div class=\"list-item-data\">\n                    {{ product.name }} \n                    <span>{{ product.weight }}{{ product.unit }}</span>\n                </div>\n            </section>\n            <section>\n                <div class=\"list-item-actions\">\n                    <div>{{ product.carbs }} ({{ product.unit }})</div>\n                    <button class=\"btn small default addtobasket\" v-on:click=\"addToBasket(product)\" v-bind:disabled=\"isInBasket(product)\">+ Dodaj</button>\n                </div>\n            </section>\n        </li>\n        \n    </transition-group> \n</div>\n\n");
    }
  };
});
$__System.register('11', ['10', '12', '13', 'd', 'e', 'f'], function (_export) {
  var template, Basket, Vue, _Object$keys, Carbs, _, carbsAll, categoriesAll, ListComponent;

  return {
    setters: [function (_4) {
      template = _4['default'];
    }, function (_3) {
      Basket = _3['default'];
    }, function (_2) {
      Vue = _2['default'];
    }, function (_d) {
      _Object$keys = _d['default'];
    }, function (_e) {
      Carbs = _e['default'];
    }, function (_f) {
      _ = _f['default'];
    }],
    execute: function () {
      'use strict';

      carbsAll = Carbs.getAll();
      categoriesAll = Carbs.getCategories();
      ListComponent = Vue.extend({
        template: template,
        replace: true,
        data: function data() {
          return {
            carbs: carbsAll,
            categories: categoriesAll,
            searchCategory: null,
            searchQuery: ''
          };
        },
        computed: {
          filteredData: function filteredData() {
            var data = this.carbs;
            var filterKey = this.searchQuery.toLowerCase();

            if (filterKey) {
              data = data.filter(function (row) {
                return _Object$keys(row).some(function (key) {
                  return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
                });
              });
            }

            if (this.searchCategory !== null) {
              data = _.where(data, { category: this.searchCategory });
            };

            return data;
          }
        },
        methods: {
          addToBasket: function addToBasket(item) {
            Basket.addToBasket(item);
          },
          emptyBasket: function emptyBasket() {
            Basket.emptyBasket();
          },
          selectFilterCategory: function selectFilterCategory(category) {
            this.searchCategory = category;
          },
          isInBasket: function isInBasket(category) {
            return Basket.isInBasket(category);
          }
        }
      });

      _export('default', ListComponent);
    }
  };
});
$__System.registerDynamic('14', [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    // shim for using process in browser
    var process = module.exports = {};

    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    })();
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
    return module.exports;
});
$__System.registerDynamic("15", ["14"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("14");
  return module.exports;
});
$__System.registerDynamic('16', ['15'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__System._nodeRequire ? process : $__require('15');
  return module.exports;
});
$__System.registerDynamic("17", ["16"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("16");
  return module.exports;
});
$__System.registerDynamic('13', ['17'], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var define,
      global = this || self,
      GLOBAL = global;
  (function (process) {
    (function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.Vue = factory();
    })(this, function () {
      'use strict';

      function _toString(val) {
        return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val);
      }
      function toNumber(val) {
        var n = parseFloat(val, 10);
        return n || n === 0 ? n : val;
      }
      function makeMap(str, expectsLowerCase) {
        var map = Object.create(null);
        var list = str.split(',');
        for (var i = 0; i < list.length; i++) {
          map[list[i]] = true;
        }
        return expectsLowerCase ? function (val) {
          return map[val.toLowerCase()];
        } : function (val) {
          return map[val];
        };
      }
      var isBuiltInTag = makeMap('slot,component', true);
      function remove$1(arr, item) {
        if (arr.length) {
          var index = arr.indexOf(item);
          if (index > -1) {
            return arr.splice(index, 1);
          }
        }
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
      }
      function isPrimitive(value) {
        return typeof value === 'string' || typeof value === 'number';
      }
      function cached(fn) {
        var cache = Object.create(null);
        return function cachedFn(str) {
          var hit = cache[str];
          return hit || (cache[str] = fn(str));
        };
      }
      var camelizeRE = /-(\w)/g;
      var camelize = cached(function (str) {
        return str.replace(camelizeRE, function (_, c) {
          return c ? c.toUpperCase() : '';
        });
      });
      var capitalize = cached(function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      });
      var hyphenateRE = /([^-])([A-Z])/g;
      var hyphenate = cached(function (str) {
        return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
      });
      function bind$1(fn, ctx) {
        function boundFn(a) {
          var l = arguments.length;
          return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
        }
        boundFn._length = fn.length;
        return boundFn;
      }
      function toArray(list, start) {
        start = start || 0;
        var i = list.length - start;
        var ret = new Array(i);
        while (i--) {
          ret[i] = list[i + start];
        }
        return ret;
      }
      function extend(to, _from) {
        for (var key in _from) {
          to[key] = _from[key];
        }
        return to;
      }
      function isObject(obj) {
        return obj !== null && typeof obj === 'object';
      }
      var toString = Object.prototype.toString;
      var OBJECT_STRING = '[object Object]';
      function isPlainObject(obj) {
        return toString.call(obj) === OBJECT_STRING;
      }
      function toObject(arr) {
        var res = {};
        for (var i = 0; i < arr.length; i++) {
          if (arr[i]) {
            extend(res, arr[i]);
          }
        }
        return res;
      }
      function noop() {}
      var no = function () {
        return false;
      };
      function genStaticKeys(modules) {
        return modules.reduce(function (keys, m) {
          return keys.concat(m.staticKeys || []);
        }, []).join(',');
      }
      function looseEqual(a, b) {
        return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
      }
      function looseIndexOf(arr, val) {
        for (var i = 0; i < arr.length; i++) {
          if (looseEqual(arr[i], val)) {
            return i;
          }
        }
        return -1;
      }
      var config = {
        optionMergeStrategies: Object.create(null),
        silent: false,
        devtools: "development" !== 'production',
        errorHandler: null,
        ignoredElements: null,
        keyCodes: Object.create(null),
        isReservedTag: no,
        isUnknownElement: no,
        getTagNamespace: noop,
        mustUseProp: no,
        _assetTypes: ['component', 'directive', 'filter'],
        _lifecycleHooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated'],
        _maxUpdateCount: 100,
        _isServer: "client" === 'server'
      };
      function isReserved(str) {
        var c = (str + '').charCodeAt(0);
        return c === 0x24 || c === 0x5F;
      }
      function def(obj, key, val, enumerable) {
        Object.defineProperty(obj, key, {
          value: val,
          enumerable: !!enumerable,
          writable: true,
          configurable: true
        });
      }
      var bailRE = /[^\w.$]/;
      function parsePath(path) {
        if (bailRE.test(path)) {
          return;
        } else {
          var segments = path.split('.');
          return function (obj) {
            for (var i = 0; i < segments.length; i++) {
              if (!obj) {
                return;
              }
              obj = obj[segments[i]];
            }
            return obj;
          };
        }
      }
      var hasProto = '__proto__' in {};
      var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
      var UA = inBrowser && window.navigator.userAgent.toLowerCase();
      var isIE = UA && /msie|trident/.test(UA);
      var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
      var isEdge = UA && UA.indexOf('edge/') > 0;
      var isAndroid = UA && UA.indexOf('android') > 0;
      var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
      var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
      function isNative(Ctor) {
        return (/native code/.test(Ctor.toString())
        );
      }
      var nextTick = function () {
        var callbacks = [];
        var pending = false;
        var timerFunc;
        function nextTickHandler() {
          pending = false;
          var copies = callbacks.slice(0);
          callbacks.length = 0;
          for (var i = 0; i < copies.length; i++) {
            copies[i]();
          }
        }
        if (typeof Promise !== 'undefined' && isNative(Promise)) {
          var p = Promise.resolve();
          timerFunc = function () {
            p.then(nextTickHandler);
            if (isIOS) {
              setTimeout(noop);
            }
          };
        } else if (typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || MutationObserver.toString() === '[object MutationObserverConstructor]')) {
          var counter = 1;
          var observer = new MutationObserver(nextTickHandler);
          var textNode = document.createTextNode(String(counter));
          observer.observe(textNode, { characterData: true });
          timerFunc = function () {
            counter = (counter + 1) % 2;
            textNode.data = String(counter);
          };
        } else {
          timerFunc = function () {
            setTimeout(nextTickHandler, 0);
          };
        }
        return function queueNextTick(cb, ctx) {
          var func = ctx ? function () {
            cb.call(ctx);
          } : cb;
          callbacks.push(func);
          if (!pending) {
            pending = true;
            timerFunc();
          }
        };
      }();
      var _Set;
      if (typeof Set !== 'undefined' && isNative(Set)) {
        _Set = Set;
      } else {
        _Set = function () {
          function Set() {
            this.set = Object.create(null);
          }
          Set.prototype.has = function has(key) {
            return this.set[key] !== undefined;
          };
          Set.prototype.add = function add(key) {
            this.set[key] = 1;
          };
          Set.prototype.clear = function clear() {
            this.set = Object.create(null);
          };
          return Set;
        }();
      }
      var hasProxy;
      var proxyHandlers;
      var initProxy;
      {
        var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require');
        hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);
        proxyHandlers = { has: function has(target, key) {
            var has = key in target;
            var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
            if (!has && !isAllowed) {
              warn("Property or method \"" + key + "\" is not defined on the instance but " + "referenced during render. Make sure to declare reactive data " + "properties in the data option.", target);
            }
            return has || !isAllowed;
          } };
        initProxy = function initProxy(vm) {
          if (hasProxy) {
            vm._renderProxy = new Proxy(vm, proxyHandlers);
          } else {
            vm._renderProxy = vm;
          }
        };
      }
      var uid$2 = 0;
      var Dep = function Dep() {
        this.id = uid$2++;
        this.subs = [];
      };
      Dep.prototype.addSub = function addSub(sub) {
        this.subs.push(sub);
      };
      Dep.prototype.removeSub = function removeSub(sub) {
        remove$1(this.subs, sub);
      };
      Dep.prototype.depend = function depend() {
        if (Dep.target) {
          Dep.target.addDep(this);
        }
      };
      Dep.prototype.notify = function notify() {
        var subs = this.subs.slice();
        for (var i = 0, l = subs.length; i < l; i++) {
          subs[i].update();
        }
      };
      Dep.target = null;
      var targetStack = [];
      function pushTarget(_target) {
        if (Dep.target) {
          targetStack.push(Dep.target);
        }
        Dep.target = _target;
      }
      function popTarget() {
        Dep.target = targetStack.pop();
      }
      var queue = [];
      var has$1 = {};
      var circular = {};
      var waiting = false;
      var flushing = false;
      var index = 0;
      function resetSchedulerState() {
        queue.length = 0;
        has$1 = {};
        {
          circular = {};
        }
        waiting = flushing = false;
      }
      function flushSchedulerQueue() {
        flushing = true;
        queue.sort(function (a, b) {
          return a.id - b.id;
        });
        for (index = 0; index < queue.length; index++) {
          var watcher = queue[index];
          var id = watcher.id;
          has$1[id] = null;
          watcher.run();
          if ("development" !== 'production' && has$1[id] != null) {
            circular[id] = (circular[id] || 0) + 1;
            if (circular[id] > config._maxUpdateCount) {
              warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
              break;
            }
          }
        }
        if (devtools && config.devtools) {
          devtools.emit('flush');
        }
        resetSchedulerState();
      }
      function queueWatcher(watcher) {
        var id = watcher.id;
        if (has$1[id] == null) {
          has$1[id] = true;
          if (!flushing) {
            queue.push(watcher);
          } else {
            var i = queue.length - 1;
            while (i >= 0 && queue[i].id > watcher.id) {
              i--;
            }
            queue.splice(Math.max(i, index) + 1, 0, watcher);
          }
          if (!waiting) {
            waiting = true;
            nextTick(flushSchedulerQueue);
          }
        }
      }
      var uid$1 = 0;
      var Watcher = function Watcher(vm, expOrFn, cb, options) {
        if (options === void 0) options = {};
        this.vm = vm;
        vm._watchers.push(this);
        this.deep = !!options.deep;
        this.user = !!options.user;
        this.lazy = !!options.lazy;
        this.sync = !!options.sync;
        this.expression = expOrFn.toString();
        this.cb = cb;
        this.id = ++uid$1;
        this.active = true;
        this.dirty = this.lazy;
        this.deps = [];
        this.newDeps = [];
        this.depIds = new _Set();
        this.newDepIds = new _Set();
        if (typeof expOrFn === 'function') {
          this.getter = expOrFn;
        } else {
          this.getter = parsePath(expOrFn);
          if (!this.getter) {
            this.getter = function () {};
            "development" !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
          }
        }
        this.value = this.lazy ? undefined : this.get();
      };
      Watcher.prototype.get = function get() {
        pushTarget(this);
        var value = this.getter.call(this.vm, this.vm);
        if (this.deep) {
          traverse(value);
        }
        popTarget();
        this.cleanupDeps();
        return value;
      };
      Watcher.prototype.addDep = function addDep(dep) {
        var id = dep.id;
        if (!this.newDepIds.has(id)) {
          this.newDepIds.add(id);
          this.newDeps.push(dep);
          if (!this.depIds.has(id)) {
            dep.addSub(this);
          }
        }
      };
      Watcher.prototype.cleanupDeps = function cleanupDeps() {
        var this$1 = this;
        var i = this.deps.length;
        while (i--) {
          var dep = this$1.deps[i];
          if (!this$1.newDepIds.has(dep.id)) {
            dep.removeSub(this$1);
          }
        }
        var tmp = this.depIds;
        this.depIds = this.newDepIds;
        this.newDepIds = tmp;
        this.newDepIds.clear();
        tmp = this.deps;
        this.deps = this.newDeps;
        this.newDeps = tmp;
        this.newDeps.length = 0;
      };
      Watcher.prototype.update = function update() {
        if (this.lazy) {
          this.dirty = true;
        } else if (this.sync) {
          this.run();
        } else {
          queueWatcher(this);
        }
      };
      Watcher.prototype.run = function run() {
        if (this.active) {
          var value = this.get();
          if (value !== this.value || isObject(value) || this.deep) {
            var oldValue = this.value;
            this.value = value;
            if (this.user) {
              try {
                this.cb.call(this.vm, value, oldValue);
              } catch (e) {
                "development" !== 'production' && warn("Error in watcher \"" + this.expression + "\"", this.vm);
                if (config.errorHandler) {
                  config.errorHandler.call(null, e, this.vm);
                } else {
                  throw e;
                }
              }
            } else {
              this.cb.call(this.vm, value, oldValue);
            }
          }
        }
      };
      Watcher.prototype.evaluate = function evaluate() {
        this.value = this.get();
        this.dirty = false;
      };
      Watcher.prototype.depend = function depend() {
        var this$1 = this;
        var i = this.deps.length;
        while (i--) {
          this$1.deps[i].depend();
        }
      };
      Watcher.prototype.teardown = function teardown() {
        var this$1 = this;
        if (this.active) {
          if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
            remove$1(this.vm._watchers, this);
          }
          var i = this.deps.length;
          while (i--) {
            this$1.deps[i].removeSub(this$1);
          }
          this.active = false;
        }
      };
      var seenObjects = new _Set();
      function traverse(val) {
        seenObjects.clear();
        _traverse(val, seenObjects);
      }
      function _traverse(val, seen) {
        var i, keys;
        var isA = Array.isArray(val);
        if (!isA && !isObject(val) || !Object.isExtensible(val)) {
          return;
        }
        if (val.__ob__) {
          var depId = val.__ob__.dep.id;
          if (seen.has(depId)) {
            return;
          }
          seen.add(depId);
        }
        if (isA) {
          i = val.length;
          while (i--) {
            _traverse(val[i], seen);
          }
        } else {
          keys = Object.keys(val);
          i = keys.length;
          while (i--) {
            _traverse(val[keys[i]], seen);
          }
        }
      }
      var arrayProto = Array.prototype;
      var arrayMethods = Object.create(arrayProto);
      ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
        var original = arrayProto[method];
        def(arrayMethods, method, function mutator() {
          var arguments$1 = arguments;
          var i = arguments.length;
          var args = new Array(i);
          while (i--) {
            args[i] = arguments$1[i];
          }
          var result = original.apply(this, args);
          var ob = this.__ob__;
          var inserted;
          switch (method) {
            case 'push':
              inserted = args;
              break;
            case 'unshift':
              inserted = args;
              break;
            case 'splice':
              inserted = args.slice(2);
              break;
          }
          if (inserted) {
            ob.observeArray(inserted);
          }
          ob.dep.notify();
          return result;
        });
      });
      var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
      var observerState = {
        shouldConvert: true,
        isSettingProps: false
      };
      var Observer = function Observer(value) {
        this.value = value;
        this.dep = new Dep();
        this.vmCount = 0;
        def(value, '__ob__', this);
        if (Array.isArray(value)) {
          var augment = hasProto ? protoAugment : copyAugment;
          augment(value, arrayMethods, arrayKeys);
          this.observeArray(value);
        } else {
          this.walk(value);
        }
      };
      Observer.prototype.walk = function walk(obj) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
          defineReactive$$1(obj, keys[i], obj[keys[i]]);
        }
      };
      Observer.prototype.observeArray = function observeArray(items) {
        for (var i = 0, l = items.length; i < l; i++) {
          observe(items[i]);
        }
      };
      function protoAugment(target, src) {
        target.__proto__ = src;
      }
      function copyAugment(target, src, keys) {
        for (var i = 0, l = keys.length; i < l; i++) {
          var key = keys[i];
          def(target, key, src[key]);
        }
      }
      function observe(value) {
        if (!isObject(value)) {
          return;
        }
        var ob;
        if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
          ob = value.__ob__;
        } else if (observerState.shouldConvert && !config._isServer && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
          ob = new Observer(value);
        }
        return ob;
      }
      function defineReactive$$1(obj, key, val, customSetter) {
        var dep = new Dep();
        var property = Object.getOwnPropertyDescriptor(obj, key);
        if (property && property.configurable === false) {
          return;
        }
        var getter = property && property.get;
        var setter = property && property.set;
        var childOb = observe(val);
        Object.defineProperty(obj, key, {
          enumerable: true,
          configurable: true,
          get: function reactiveGetter() {
            var value = getter ? getter.call(obj) : val;
            if (Dep.target) {
              dep.depend();
              if (childOb) {
                childOb.dep.depend();
              }
              if (Array.isArray(value)) {
                dependArray(value);
              }
            }
            return value;
          },
          set: function reactiveSetter(newVal) {
            var value = getter ? getter.call(obj) : val;
            if (newVal === value) {
              return;
            }
            if ("development" !== 'production' && customSetter) {
              customSetter();
            }
            if (setter) {
              setter.call(obj, newVal);
            } else {
              val = newVal;
            }
            childOb = observe(newVal);
            dep.notify();
          }
        });
      }
      function set(obj, key, val) {
        if (Array.isArray(obj)) {
          obj.length = Math.max(obj.length, key);
          obj.splice(key, 1, val);
          return val;
        }
        if (hasOwn(obj, key)) {
          obj[key] = val;
          return;
        }
        var ob = obj.__ob__;
        if (obj._isVue || ob && ob.vmCount) {
          "development" !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
          return;
        }
        if (!ob) {
          obj[key] = val;
          return;
        }
        defineReactive$$1(ob.value, key, val);
        ob.dep.notify();
        return val;
      }
      function del(obj, key) {
        var ob = obj.__ob__;
        if (obj._isVue || ob && ob.vmCount) {
          "development" !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
          return;
        }
        if (!hasOwn(obj, key)) {
          return;
        }
        delete obj[key];
        if (!ob) {
          return;
        }
        ob.dep.notify();
      }
      function dependArray(value) {
        for (var e = void 0, i = 0, l = value.length; i < l; i++) {
          e = value[i];
          e && e.__ob__ && e.__ob__.dep.depend();
          if (Array.isArray(e)) {
            dependArray(e);
          }
        }
      }
      function initState(vm) {
        vm._watchers = [];
        initProps(vm);
        initData(vm);
        initComputed(vm);
        initMethods(vm);
        initWatch(vm);
      }
      function initProps(vm) {
        var props = vm.$options.props;
        if (props) {
          var propsData = vm.$options.propsData || {};
          var keys = vm.$options._propKeys = Object.keys(props);
          var isRoot = !vm.$parent;
          observerState.shouldConvert = isRoot;
          var loop = function (i) {
            var key = keys[i];
            {
              defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
                if (vm.$parent && !observerState.isSettingProps) {
                  warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
                }
              });
            }
          };
          for (var i = 0; i < keys.length; i++) loop(i);
          observerState.shouldConvert = true;
        }
      }
      function initData(vm) {
        var data = vm.$options.data;
        data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};
        if (!isPlainObject(data)) {
          data = {};
          "development" !== 'production' && warn('data functions should return an object.', vm);
        }
        var keys = Object.keys(data);
        var props = vm.$options.props;
        var i = keys.length;
        while (i--) {
          if (props && hasOwn(props, keys[i])) {
            "development" !== 'production' && warn("The data property \"" + keys[i] + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
          } else {
            proxy(vm, keys[i]);
          }
        }
        observe(data);
        data.__ob__ && data.__ob__.vmCount++;
      }
      var computedSharedDefinition = {
        enumerable: true,
        configurable: true,
        get: noop,
        set: noop
      };
      function initComputed(vm) {
        var computed = vm.$options.computed;
        if (computed) {
          for (var key in computed) {
            var userDef = computed[key];
            if (typeof userDef === 'function') {
              computedSharedDefinition.get = makeComputedGetter(userDef, vm);
              computedSharedDefinition.set = noop;
            } else {
              computedSharedDefinition.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, vm) : bind$1(userDef.get, vm) : noop;
              computedSharedDefinition.set = userDef.set ? bind$1(userDef.set, vm) : noop;
            }
            Object.defineProperty(vm, key, computedSharedDefinition);
          }
        }
      }
      function makeComputedGetter(getter, owner) {
        var watcher = new Watcher(owner, getter, noop, { lazy: true });
        return function computedGetter() {
          if (watcher.dirty) {
            watcher.evaluate();
          }
          if (Dep.target) {
            watcher.depend();
          }
          return watcher.value;
        };
      }
      function initMethods(vm) {
        var methods = vm.$options.methods;
        if (methods) {
          for (var key in methods) {
            vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
            {
              methods[key] == null && warn("method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
              hasOwn(Vue$2.prototype, key) && warn("Avoid overriding Vue's internal method \"" + key + "\".", vm);
            }
          }
        }
      }
      function initWatch(vm) {
        var watch = vm.$options.watch;
        if (watch) {
          for (var key in watch) {
            var handler = watch[key];
            if (Array.isArray(handler)) {
              for (var i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i]);
              }
            } else {
              createWatcher(vm, key, handler);
            }
          }
        }
      }
      function createWatcher(vm, key, handler) {
        var options;
        if (isPlainObject(handler)) {
          options = handler;
          handler = handler.handler;
        }
        if (typeof handler === 'string') {
          handler = vm[handler];
        }
        vm.$watch(key, handler, options);
      }
      function stateMixin(Vue) {
        var dataDef = {};
        dataDef.get = function () {
          return this._data;
        };
        {
          dataDef.set = function (newData) {
            warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
          };
        }
        Object.defineProperty(Vue.prototype, '$data', dataDef);
        Vue.prototype.$set = set;
        Vue.prototype.$delete = del;
        Vue.prototype.$watch = function (expOrFn, cb, options) {
          var vm = this;
          options = options || {};
          options.user = true;
          var watcher = new Watcher(vm, expOrFn, cb, options);
          if (options.immediate) {
            cb.call(vm, watcher.value);
          }
          return function unwatchFn() {
            watcher.teardown();
          };
        };
      }
      function proxy(vm, key) {
        if (!isReserved(key)) {
          Object.defineProperty(vm, key, {
            configurable: true,
            enumerable: true,
            get: function proxyGetter() {
              return vm._data[key];
            },
            set: function proxySetter(val) {
              vm._data[key] = val;
            }
          });
        }
      }
      var VNode = function VNode(tag, data, children, text, elm, ns, context, componentOptions) {
        this.tag = tag;
        this.data = data;
        this.children = children;
        this.text = text;
        this.elm = elm;
        this.ns = ns;
        this.context = context;
        this.functionalContext = undefined;
        this.key = data && data.key;
        this.componentOptions = componentOptions;
        this.child = undefined;
        this.parent = undefined;
        this.raw = false;
        this.isStatic = false;
        this.isRootInsert = true;
        this.isComment = false;
        this.isCloned = false;
        this.isOnce = false;
      };
      var emptyVNode = function () {
        var node = new VNode();
        node.text = '';
        node.isComment = true;
        return node;
      };
      function cloneVNode(vnode) {
        var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.ns, vnode.context, vnode.componentOptions);
        cloned.isStatic = vnode.isStatic;
        cloned.key = vnode.key;
        cloned.isCloned = true;
        return cloned;
      }
      function cloneVNodes(vnodes) {
        var res = new Array(vnodes.length);
        for (var i = 0; i < vnodes.length; i++) {
          res[i] = cloneVNode(vnodes[i]);
        }
        return res;
      }
      function mergeVNodeHook(def, hookKey, hook, key) {
        key = key + hookKey;
        var injectedHash = def.__injected || (def.__injected = {});
        if (!injectedHash[key]) {
          injectedHash[key] = true;
          var oldHook = def[hookKey];
          if (oldHook) {
            def[hookKey] = function () {
              oldHook.apply(this, arguments);
              hook.apply(this, arguments);
            };
          } else {
            def[hookKey] = hook;
          }
        }
      }
      function updateListeners(on, oldOn, add, remove$$1, vm) {
        var name, cur, old, fn, event, capture;
        for (name in on) {
          cur = on[name];
          old = oldOn[name];
          if (!cur) {
            "development" !== 'production' && warn("Invalid handler for event \"" + name + "\": got " + String(cur), vm);
          } else if (!old) {
            capture = name.charAt(0) === '!';
            event = capture ? name.slice(1) : name;
            if (Array.isArray(cur)) {
              add(event, cur.invoker = arrInvoker(cur), capture);
            } else {
              if (!cur.invoker) {
                fn = cur;
                cur = on[name] = {};
                cur.fn = fn;
                cur.invoker = fnInvoker(cur);
              }
              add(event, cur.invoker, capture);
            }
          } else if (cur !== old) {
            if (Array.isArray(old)) {
              old.length = cur.length;
              for (var i = 0; i < old.length; i++) {
                old[i] = cur[i];
              }
              on[name] = old;
            } else {
              old.fn = cur;
              on[name] = old;
            }
          }
        }
        for (name in oldOn) {
          if (!on[name]) {
            event = name.charAt(0) === '!' ? name.slice(1) : name;
            remove$$1(event, oldOn[name].invoker);
          }
        }
      }
      function arrInvoker(arr) {
        return function (ev) {
          var arguments$1 = arguments;
          var single = arguments.length === 1;
          for (var i = 0; i < arr.length; i++) {
            single ? arr[i](ev) : arr[i].apply(null, arguments$1);
          }
        };
      }
      function fnInvoker(o) {
        return function (ev) {
          var single = arguments.length === 1;
          single ? o.fn(ev) : o.fn.apply(null, arguments);
        };
      }
      function normalizeChildren(children, ns, nestedIndex) {
        if (isPrimitive(children)) {
          return [createTextVNode(children)];
        }
        if (Array.isArray(children)) {
          var res = [];
          for (var i = 0, l = children.length; i < l; i++) {
            var c = children[i];
            var last = res[res.length - 1];
            if (Array.isArray(c)) {
              res.push.apply(res, normalizeChildren(c, ns, (nestedIndex || '') + "_" + i));
            } else if (isPrimitive(c)) {
              if (last && last.text) {
                last.text += String(c);
              } else if (c !== '') {
                res.push(createTextVNode(c));
              }
            } else if (c instanceof VNode) {
              if (c.text && last && last.text) {
                last.text += c.text;
              } else {
                if (ns) {
                  applyNS(c, ns);
                }
                if (c.tag && c.key == null && nestedIndex != null) {
                  c.key = "__vlist" + nestedIndex + "_" + i + "__";
                }
                res.push(c);
              }
            }
          }
          return res;
        }
      }
      function createTextVNode(val) {
        return new VNode(undefined, undefined, undefined, String(val));
      }
      function applyNS(vnode, ns) {
        if (vnode.tag && !vnode.ns) {
          vnode.ns = ns;
          if (vnode.children) {
            for (var i = 0, l = vnode.children.length; i < l; i++) {
              applyNS(vnode.children[i], ns);
            }
          }
        }
      }
      function getFirstComponentChild(children) {
        return children && children.filter(function (c) {
          return c && c.componentOptions;
        })[0];
      }
      var activeInstance = null;
      function initLifecycle(vm) {
        var options = vm.$options;
        var parent = options.parent;
        if (parent && !options.abstract) {
          while (parent.$options.abstract && parent.$parent) {
            parent = parent.$parent;
          }
          parent.$children.push(vm);
        }
        vm.$parent = parent;
        vm.$root = parent ? parent.$root : vm;
        vm.$children = [];
        vm.$refs = {};
        vm._watcher = null;
        vm._inactive = false;
        vm._isMounted = false;
        vm._isDestroyed = false;
        vm._isBeingDestroyed = false;
      }
      function lifecycleMixin(Vue) {
        Vue.prototype._mount = function (el, hydrating) {
          var vm = this;
          vm.$el = el;
          if (!vm.$options.render) {
            vm.$options.render = emptyVNode;
            {
              if (vm.$options.template) {
                warn('You are using the runtime-only build of Vue where the template ' + 'option is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
              } else {
                warn('Failed to mount component: template or render function not defined.', vm);
              }
            }
          }
          callHook(vm, 'beforeMount');
          vm._watcher = new Watcher(vm, function () {
            vm._update(vm._render(), hydrating);
          }, noop);
          hydrating = false;
          if (vm.$vnode == null) {
            vm._isMounted = true;
            callHook(vm, 'mounted');
          }
          return vm;
        };
        Vue.prototype._update = function (vnode, hydrating) {
          var vm = this;
          if (vm._isMounted) {
            callHook(vm, 'beforeUpdate');
          }
          var prevEl = vm.$el;
          var prevActiveInstance = activeInstance;
          activeInstance = vm;
          var prevVnode = vm._vnode;
          vm._vnode = vnode;
          if (!prevVnode) {
            vm.$el = vm.__patch__(vm.$el, vnode, hydrating);
          } else {
            vm.$el = vm.__patch__(prevVnode, vnode);
          }
          activeInstance = prevActiveInstance;
          if (prevEl) {
            prevEl.__vue__ = null;
          }
          if (vm.$el) {
            vm.$el.__vue__ = vm;
          }
          if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
            vm.$parent.$el = vm.$el;
          }
          if (vm._isMounted) {
            callHook(vm, 'updated');
          }
        };
        Vue.prototype._updateFromParent = function (propsData, listeners, parentVnode, renderChildren) {
          var vm = this;
          var hasChildren = !!(vm.$options._renderChildren || renderChildren);
          vm.$options._parentVnode = parentVnode;
          vm.$options._renderChildren = renderChildren;
          if (propsData && vm.$options.props) {
            observerState.shouldConvert = false;
            {
              observerState.isSettingProps = true;
            }
            var propKeys = vm.$options._propKeys || [];
            for (var i = 0; i < propKeys.length; i++) {
              var key = propKeys[i];
              vm[key] = validateProp(key, vm.$options.props, propsData, vm);
            }
            observerState.shouldConvert = true;
            {
              observerState.isSettingProps = false;
            }
            vm.$options.propsData = propsData;
          }
          if (listeners) {
            var oldListeners = vm.$options._parentListeners;
            vm.$options._parentListeners = listeners;
            vm._updateListeners(listeners, oldListeners);
          }
          if (hasChildren) {
            vm.$slots = resolveSlots(renderChildren, vm._renderContext);
            vm.$forceUpdate();
          }
        };
        Vue.prototype.$forceUpdate = function () {
          var vm = this;
          if (vm._watcher) {
            vm._watcher.update();
          }
        };
        Vue.prototype.$destroy = function () {
          var vm = this;
          if (vm._isBeingDestroyed) {
            return;
          }
          callHook(vm, 'beforeDestroy');
          vm._isBeingDestroyed = true;
          var parent = vm.$parent;
          if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
            remove$1(parent.$children, vm);
          }
          if (vm._watcher) {
            vm._watcher.teardown();
          }
          var i = vm._watchers.length;
          while (i--) {
            vm._watchers[i].teardown();
          }
          if (vm._data.__ob__) {
            vm._data.__ob__.vmCount--;
          }
          vm._isDestroyed = true;
          callHook(vm, 'destroyed');
          vm.$off();
          if (vm.$el) {
            vm.$el.__vue__ = null;
          }
          vm.__patch__(vm._vnode, null);
        };
      }
      function callHook(vm, hook) {
        var handlers = vm.$options[hook];
        if (handlers) {
          for (var i = 0, j = handlers.length; i < j; i++) {
            handlers[i].call(vm);
          }
        }
        vm.$emit('hook:' + hook);
      }
      var hooks = {
        init: init,
        prepatch: prepatch,
        insert: insert,
        destroy: destroy$1
      };
      var hooksToMerge = Object.keys(hooks);
      function createComponent(Ctor, data, context, children, tag) {
        if (!Ctor) {
          return;
        }
        if (isObject(Ctor)) {
          Ctor = Vue$2.extend(Ctor);
        }
        if (typeof Ctor !== 'function') {
          {
            warn("Invalid Component definition: " + String(Ctor), context);
          }
          return;
        }
        resolveConstructorOptions(Ctor);
        if (!Ctor.cid) {
          if (Ctor.resolved) {
            Ctor = Ctor.resolved;
          } else {
            Ctor = resolveAsyncComponent(Ctor, function () {
              context.$forceUpdate();
            });
            if (!Ctor) {
              return;
            }
          }
        }
        data = data || {};
        var propsData = extractProps(data, Ctor);
        if (Ctor.options.functional) {
          return createFunctionalComponent(Ctor, propsData, data, context, children);
        }
        var listeners = data.on;
        data.on = data.nativeOn;
        if (Ctor.options.abstract) {
          data = {};
        }
        mergeHooks(data);
        var name = Ctor.options.name || tag;
        var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, undefined, context, {
          Ctor: Ctor,
          propsData: propsData,
          listeners: listeners,
          tag: tag,
          children: children
        });
        return vnode;
      }
      function createFunctionalComponent(Ctor, propsData, data, context, children) {
        var props = {};
        var propOptions = Ctor.options.props;
        if (propOptions) {
          for (var key in propOptions) {
            props[key] = validateProp(key, propOptions, propsData);
          }
        }
        var vnode = Ctor.options.render.call(null, bind$1(createElement, { _self: Object.create(context) }), {
          props: props,
          data: data,
          parent: context,
          children: normalizeChildren(children),
          slots: function () {
            return resolveSlots(children, context);
          }
        });
        if (vnode instanceof VNode) {
          vnode.functionalContext = context;
          if (data.slot) {
            (vnode.data || (vnode.data = {})).slot = data.slot;
          }
        }
        return vnode;
      }
      function createComponentInstanceForVnode(vnode, parent) {
        var vnodeComponentOptions = vnode.componentOptions;
        var options = {
          _isComponent: true,
          parent: parent,
          propsData: vnodeComponentOptions.propsData,
          _componentTag: vnodeComponentOptions.tag,
          _parentVnode: vnode,
          _parentListeners: vnodeComponentOptions.listeners,
          _renderChildren: vnodeComponentOptions.children
        };
        var inlineTemplate = vnode.data.inlineTemplate;
        if (inlineTemplate) {
          options.render = inlineTemplate.render;
          options.staticRenderFns = inlineTemplate.staticRenderFns;
        }
        return new vnodeComponentOptions.Ctor(options);
      }
      function init(vnode, hydrating) {
        if (!vnode.child || vnode.child._isDestroyed) {
          var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance);
          child.$mount(hydrating ? vnode.elm : undefined, hydrating);
        }
      }
      function prepatch(oldVnode, vnode) {
        var options = vnode.componentOptions;
        var child = vnode.child = oldVnode.child;
        child._updateFromParent(options.propsData, options.listeners, vnode, options.children);
      }
      function insert(vnode) {
        if (!vnode.child._isMounted) {
          vnode.child._isMounted = true;
          callHook(vnode.child, 'mounted');
        }
        if (vnode.data.keepAlive) {
          vnode.child._inactive = false;
          callHook(vnode.child, 'activated');
        }
      }
      function destroy$1(vnode) {
        if (!vnode.child._isDestroyed) {
          if (!vnode.data.keepAlive) {
            vnode.child.$destroy();
          } else {
            vnode.child._inactive = true;
            callHook(vnode.child, 'deactivated');
          }
        }
      }
      function resolveAsyncComponent(factory, cb) {
        if (factory.requested) {
          factory.pendingCallbacks.push(cb);
        } else {
          factory.requested = true;
          var cbs = factory.pendingCallbacks = [cb];
          var sync = true;
          var resolve = function (res) {
            if (isObject(res)) {
              res = Vue$2.extend(res);
            }
            factory.resolved = res;
            if (!sync) {
              for (var i = 0, l = cbs.length; i < l; i++) {
                cbs[i](res);
              }
            }
          };
          var reject = function (reason) {
            "development" !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
          };
          var res = factory(resolve, reject);
          if (res && typeof res.then === 'function' && !factory.resolved) {
            res.then(resolve, reject);
          }
          sync = false;
          return factory.resolved;
        }
      }
      function extractProps(data, Ctor) {
        var propOptions = Ctor.options.props;
        if (!propOptions) {
          return;
        }
        var res = {};
        var attrs = data.attrs;
        var props = data.props;
        var domProps = data.domProps;
        if (attrs || props || domProps) {
          for (var key in propOptions) {
            var altKey = hyphenate(key);
            checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey) || checkProp(res, domProps, key, altKey);
          }
        }
        return res;
      }
      function checkProp(res, hash, key, altKey, preserve) {
        if (hash) {
          if (hasOwn(hash, key)) {
            res[key] = hash[key];
            if (!preserve) {
              delete hash[key];
            }
            return true;
          } else if (hasOwn(hash, altKey)) {
            res[key] = hash[altKey];
            if (!preserve) {
              delete hash[altKey];
            }
            return true;
          }
        }
        return false;
      }
      function mergeHooks(data) {
        if (!data.hook) {
          data.hook = {};
        }
        for (var i = 0; i < hooksToMerge.length; i++) {
          var key = hooksToMerge[i];
          var fromParent = data.hook[key];
          var ours = hooks[key];
          data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
        }
      }
      function mergeHook$1(a, b) {
        return function (_, __) {
          a(_, __);
          b(_, __);
        };
      }
      function createElement(tag, data, children) {
        if (data && (Array.isArray(data) || typeof data !== 'object')) {
          children = data;
          data = undefined;
        }
        return _createElement(this._self, tag, data, children);
      }
      function _createElement(context, tag, data, children) {
        if (data && data.__ob__) {
          "development" !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
          return;
        }
        if (!tag) {
          return emptyVNode();
        }
        if (typeof tag === 'string') {
          var Ctor;
          var ns = config.getTagNamespace(tag);
          if (config.isReservedTag(tag)) {
            return new VNode(tag, data, normalizeChildren(children, ns), undefined, undefined, ns, context);
          } else if (Ctor = resolveAsset(context.$options, 'components', tag)) {
            return createComponent(Ctor, data, context, children, tag);
          } else {
            var childNs = tag === 'foreignObject' ? 'xhtml' : ns;
            return new VNode(tag, data, normalizeChildren(children, childNs), undefined, undefined, ns, context);
          }
        } else {
          return createComponent(tag, data, context, children);
        }
      }
      function initRender(vm) {
        vm.$vnode = null;
        vm._vnode = null;
        vm._staticTrees = null;
        vm._renderContext = vm.$options._parentVnode && vm.$options._parentVnode.context;
        vm.$slots = resolveSlots(vm.$options._renderChildren, vm._renderContext);
        vm.$createElement = bind$1(createElement, vm);
        if (vm.$options.el) {
          vm.$mount(vm.$options.el);
        }
      }
      function renderMixin(Vue) {
        Vue.prototype.$nextTick = function (fn) {
          nextTick(fn, this);
        };
        Vue.prototype._render = function () {
          var vm = this;
          var ref = vm.$options;
          var render = ref.render;
          var staticRenderFns = ref.staticRenderFns;
          var _parentVnode = ref._parentVnode;
          if (vm._isMounted) {
            for (var key in vm.$slots) {
              vm.$slots[key] = cloneVNodes(vm.$slots[key]);
            }
          }
          if (staticRenderFns && !vm._staticTrees) {
            vm._staticTrees = [];
          }
          vm.$vnode = _parentVnode;
          var vnode;
          try {
            vnode = render.call(vm._renderProxy, vm.$createElement);
          } catch (e) {
            {
              warn("Error when rendering " + formatComponentName(vm) + ":");
            }
            if (config.errorHandler) {
              config.errorHandler.call(null, e, vm);
            } else {
              if (config._isServer) {
                throw e;
              } else {
                console.error(e);
              }
            }
            vnode = vm._vnode;
          }
          if (!(vnode instanceof VNode)) {
            if ("development" !== 'production' && Array.isArray(vnode)) {
              warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
            }
            vnode = emptyVNode();
          }
          vnode.parent = _parentVnode;
          return vnode;
        };
        Vue.prototype._h = createElement;
        Vue.prototype._s = _toString;
        Vue.prototype._n = toNumber;
        Vue.prototype._e = emptyVNode;
        Vue.prototype._q = looseEqual;
        Vue.prototype._i = looseIndexOf;
        Vue.prototype._m = function renderStatic(index, isInFor) {
          var tree = this._staticTrees[index];
          if (tree && !isInFor) {
            return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
          }
          tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
          markStatic(tree, "__static__" + index, false);
          return tree;
        };
        Vue.prototype._o = function markOnce(tree, index, key) {
          markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
          return tree;
        };
        function markStatic(tree, key, isOnce) {
          if (Array.isArray(tree)) {
            for (var i = 0; i < tree.length; i++) {
              if (tree[i] && typeof tree[i] !== 'string') {
                markStaticNode(tree[i], key + "_" + i, isOnce);
              }
            }
          } else {
            markStaticNode(tree, key, isOnce);
          }
        }
        function markStaticNode(node, key, isOnce) {
          node.isStatic = true;
          node.key = key;
          node.isOnce = isOnce;
        }
        var identity = function (_) {
          return _;
        };
        Vue.prototype._f = function resolveFilter(id) {
          return resolveAsset(this.$options, 'filters', id, true) || identity;
        };
        Vue.prototype._l = function renderList(val, render) {
          var ret, i, l, keys, key;
          if (Array.isArray(val)) {
            ret = new Array(val.length);
            for (i = 0, l = val.length; i < l; i++) {
              ret[i] = render(val[i], i);
            }
          } else if (typeof val === 'number') {
            ret = new Array(val);
            for (i = 0; i < val; i++) {
              ret[i] = render(i + 1, i);
            }
          } else if (isObject(val)) {
            keys = Object.keys(val);
            ret = new Array(keys.length);
            for (i = 0, l = keys.length; i < l; i++) {
              key = keys[i];
              ret[i] = render(val[key], key, i);
            }
          }
          return ret;
        };
        Vue.prototype._t = function (name, fallback) {
          var slotNodes = this.$slots[name];
          if (slotNodes && "development" !== 'production') {
            slotNodes._rendered && warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
            slotNodes._rendered = true;
          }
          return slotNodes || fallback;
        };
        Vue.prototype._b = function bindProps(data, value, asProp) {
          if (value) {
            if (!isObject(value)) {
              "development" !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
            } else {
              if (Array.isArray(value)) {
                value = toObject(value);
              }
              for (var key in value) {
                if (key === 'class' || key === 'style') {
                  data[key] = value[key];
                } else {
                  var hash = asProp || config.mustUseProp(key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                  hash[key] = value[key];
                }
              }
            }
          }
          return data;
        };
        Vue.prototype._k = function getKeyCodes(key) {
          return config.keyCodes[key];
        };
      }
      function resolveSlots(renderChildren, context) {
        var slots = {};
        if (!renderChildren) {
          return slots;
        }
        var children = normalizeChildren(renderChildren) || [];
        var defaultSlot = [];
        var name, child;
        for (var i = 0, l = children.length; i < l; i++) {
          child = children[i];
          if ((child.context === context || child.functionalContext === context) && child.data && (name = child.data.slot)) {
            var slot = slots[name] || (slots[name] = []);
            if (child.tag === 'template') {
              slot.push.apply(slot, child.children);
            } else {
              slot.push(child);
            }
          } else {
            defaultSlot.push(child);
          }
        }
        if (defaultSlot.length && !(defaultSlot.length === 1 && (defaultSlot[0].text === ' ' || defaultSlot[0].isComment))) {
          slots.default = defaultSlot;
        }
        return slots;
      }
      function initEvents(vm) {
        vm._events = Object.create(null);
        var listeners = vm.$options._parentListeners;
        var on = bind$1(vm.$on, vm);
        var off = bind$1(vm.$off, vm);
        vm._updateListeners = function (listeners, oldListeners) {
          updateListeners(listeners, oldListeners || {}, on, off, vm);
        };
        if (listeners) {
          vm._updateListeners(listeners);
        }
      }
      function eventsMixin(Vue) {
        Vue.prototype.$on = function (event, fn) {
          var vm = this;
          (vm._events[event] || (vm._events[event] = [])).push(fn);
          return vm;
        };
        Vue.prototype.$once = function (event, fn) {
          var vm = this;
          function on() {
            vm.$off(event, on);
            fn.apply(vm, arguments);
          }
          on.fn = fn;
          vm.$on(event, on);
          return vm;
        };
        Vue.prototype.$off = function (event, fn) {
          var vm = this;
          if (!arguments.length) {
            vm._events = Object.create(null);
            return vm;
          }
          var cbs = vm._events[event];
          if (!cbs) {
            return vm;
          }
          if (arguments.length === 1) {
            vm._events[event] = null;
            return vm;
          }
          var cb;
          var i = cbs.length;
          while (i--) {
            cb = cbs[i];
            if (cb === fn || cb.fn === fn) {
              cbs.splice(i, 1);
              break;
            }
          }
          return vm;
        };
        Vue.prototype.$emit = function (event) {
          var vm = this;
          var cbs = vm._events[event];
          if (cbs) {
            cbs = cbs.length > 1 ? toArray(cbs) : cbs;
            var args = toArray(arguments, 1);
            for (var i = 0, l = cbs.length; i < l; i++) {
              cbs[i].apply(vm, args);
            }
          }
          return vm;
        };
      }
      var uid = 0;
      function initMixin(Vue) {
        Vue.prototype._init = function (options) {
          var vm = this;
          vm._uid = uid++;
          vm._isVue = true;
          if (options && options._isComponent) {
            initInternalComponent(vm, options);
          } else {
            vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
          }
          {
            initProxy(vm);
          }
          vm._self = vm;
          initLifecycle(vm);
          initEvents(vm);
          callHook(vm, 'beforeCreate');
          initState(vm);
          callHook(vm, 'created');
          initRender(vm);
        };
      }
      function initInternalComponent(vm, options) {
        var opts = vm.$options = Object.create(vm.constructor.options);
        opts.parent = options.parent;
        opts.propsData = options.propsData;
        opts._parentVnode = options._parentVnode;
        opts._parentListeners = options._parentListeners;
        opts._renderChildren = options._renderChildren;
        opts._componentTag = options._componentTag;
        if (options.render) {
          opts.render = options.render;
          opts.staticRenderFns = options.staticRenderFns;
        }
      }
      function resolveConstructorOptions(Ctor) {
        var options = Ctor.options;
        if (Ctor.super) {
          var superOptions = Ctor.super.options;
          var cachedSuperOptions = Ctor.superOptions;
          var extendOptions = Ctor.extendOptions;
          if (superOptions !== cachedSuperOptions) {
            Ctor.superOptions = superOptions;
            extendOptions.render = options.render;
            extendOptions.staticRenderFns = options.staticRenderFns;
            options = Ctor.options = mergeOptions(superOptions, extendOptions);
            if (options.name) {
              options.components[options.name] = Ctor;
            }
          }
        }
        return options;
      }
      function Vue$2(options) {
        if ("development" !== 'production' && !(this instanceof Vue$2)) {
          warn('Vue is a constructor and should be called with the `new` keyword');
        }
        this._init(options);
      }
      initMixin(Vue$2);
      stateMixin(Vue$2);
      eventsMixin(Vue$2);
      lifecycleMixin(Vue$2);
      renderMixin(Vue$2);
      var warn = noop;
      var formatComponentName;
      {
        var hasConsole = typeof console !== 'undefined';
        warn = function (msg, vm) {
          if (hasConsole && !config.silent) {
            console.error("[Vue warn]: " + msg + " " + (vm ? formatLocation(formatComponentName(vm)) : ''));
          }
        };
        formatComponentName = function (vm) {
          if (vm.$root === vm) {
            return 'root instance';
          }
          var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
          return (name ? "component <" + name + ">" : "anonymous component") + (vm._isVue && vm.$options.__file ? " at " + vm.$options.__file : '');
        };
        var formatLocation = function (str) {
          if (str === 'anonymous component') {
            str += " - use the \"name\" option for better debugging messages.";
          }
          return "\n(found in " + str + ")";
        };
      }
      var strats = config.optionMergeStrategies;
      {
        strats.el = strats.propsData = function (parent, child, vm, key) {
          if (!vm) {
            warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
          }
          return defaultStrat(parent, child);
        };
      }
      function mergeData(to, from) {
        var key, toVal, fromVal;
        for (key in from) {
          toVal = to[key];
          fromVal = from[key];
          if (!hasOwn(to, key)) {
            set(to, key, fromVal);
          } else if (isObject(toVal) && isObject(fromVal)) {
            mergeData(toVal, fromVal);
          }
        }
        return to;
      }
      strats.data = function (parentVal, childVal, vm) {
        if (!vm) {
          if (!childVal) {
            return parentVal;
          }
          if (typeof childVal !== 'function') {
            "development" !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
            return parentVal;
          }
          if (!parentVal) {
            return childVal;
          }
          return function mergedDataFn() {
            return mergeData(childVal.call(this), parentVal.call(this));
          };
        } else if (parentVal || childVal) {
          return function mergedInstanceDataFn() {
            var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
            var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
            if (instanceData) {
              return mergeData(instanceData, defaultData);
            } else {
              return defaultData;
            }
          };
        }
      };
      function mergeHook(parentVal, childVal) {
        return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
      }
      config._lifecycleHooks.forEach(function (hook) {
        strats[hook] = mergeHook;
      });
      function mergeAssets(parentVal, childVal) {
        var res = Object.create(parentVal || null);
        return childVal ? extend(res, childVal) : res;
      }
      config._assetTypes.forEach(function (type) {
        strats[type + 's'] = mergeAssets;
      });
      strats.watch = function (parentVal, childVal) {
        if (!childVal) {
          return parentVal;
        }
        if (!parentVal) {
          return childVal;
        }
        var ret = {};
        extend(ret, parentVal);
        for (var key in childVal) {
          var parent = ret[key];
          var child = childVal[key];
          if (parent && !Array.isArray(parent)) {
            parent = [parent];
          }
          ret[key] = parent ? parent.concat(child) : [child];
        }
        return ret;
      };
      strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
        if (!childVal) {
          return parentVal;
        }
        if (!parentVal) {
          return childVal;
        }
        var ret = Object.create(null);
        extend(ret, parentVal);
        extend(ret, childVal);
        return ret;
      };
      var defaultStrat = function (parentVal, childVal) {
        return childVal === undefined ? parentVal : childVal;
      };
      function checkComponents(options) {
        for (var key in options.components) {
          var lower = key.toLowerCase();
          if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
          }
        }
      }
      function normalizeProps(options) {
        var props = options.props;
        if (!props) {
          return;
        }
        var res = {};
        var i, val, name;
        if (Array.isArray(props)) {
          i = props.length;
          while (i--) {
            val = props[i];
            if (typeof val === 'string') {
              name = camelize(val);
              res[name] = { type: null };
            } else {
              warn('props must be strings when using array syntax.');
            }
          }
        } else if (isPlainObject(props)) {
          for (var key in props) {
            val = props[key];
            name = camelize(key);
            res[name] = isPlainObject(val) ? val : { type: val };
          }
        }
        options.props = res;
      }
      function normalizeDirectives(options) {
        var dirs = options.directives;
        if (dirs) {
          for (var key in dirs) {
            var def = dirs[key];
            if (typeof def === 'function') {
              dirs[key] = {
                bind: def,
                update: def
              };
            }
          }
        }
      }
      function mergeOptions(parent, child, vm) {
        {
          checkComponents(child);
        }
        normalizeProps(child);
        normalizeDirectives(child);
        var extendsFrom = child.extends;
        if (extendsFrom) {
          parent = typeof extendsFrom === 'function' ? mergeOptions(parent, extendsFrom.options, vm) : mergeOptions(parent, extendsFrom, vm);
        }
        if (child.mixins) {
          for (var i = 0, l = child.mixins.length; i < l; i++) {
            var mixin = child.mixins[i];
            if (mixin.prototype instanceof Vue$2) {
              mixin = mixin.options;
            }
            parent = mergeOptions(parent, mixin, vm);
          }
        }
        var options = {};
        var key;
        for (key in parent) {
          mergeField(key);
        }
        for (key in child) {
          if (!hasOwn(parent, key)) {
            mergeField(key);
          }
        }
        function mergeField(key) {
          var strat = strats[key] || defaultStrat;
          options[key] = strat(parent[key], child[key], vm, key);
        }
        return options;
      }
      function resolveAsset(options, type, id, warnMissing) {
        if (typeof id !== 'string') {
          return;
        }
        var assets = options[type];
        var res = assets[id] || assets[camelize(id)] || assets[capitalize(camelize(id))];
        if ("development" !== 'production' && warnMissing && !res) {
          warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
        }
        return res;
      }
      function validateProp(key, propOptions, propsData, vm) {
        var prop = propOptions[key];
        var absent = !hasOwn(propsData, key);
        var value = propsData[key];
        if (isBooleanType(prop.type)) {
          if (absent && !hasOwn(prop, 'default')) {
            value = false;
          } else if (value === '' || value === hyphenate(key)) {
            value = true;
          }
        }
        if (value === undefined) {
          value = getPropDefaultValue(vm, prop, key);
          var prevShouldConvert = observerState.shouldConvert;
          observerState.shouldConvert = true;
          observe(value);
          observerState.shouldConvert = prevShouldConvert;
        }
        {
          assertProp(prop, key, value, vm, absent);
        }
        return value;
      }
      function getPropDefaultValue(vm, prop, key) {
        if (!hasOwn(prop, 'default')) {
          return undefined;
        }
        var def = prop.default;
        if (isObject(def)) {
          "development" !== 'production' && warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
        }
        if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm[key] !== undefined) {
          return vm[key];
        }
        return typeof def === 'function' && prop.type !== Function ? def.call(vm) : def;
      }
      function assertProp(prop, name, value, vm, absent) {
        if (prop.required && absent) {
          warn('Missing required prop: "' + name + '"', vm);
          return;
        }
        if (value == null && !prop.required) {
          return;
        }
        var type = prop.type;
        var valid = !type || type === true;
        var expectedTypes = [];
        if (type) {
          if (!Array.isArray(type)) {
            type = [type];
          }
          for (var i = 0; i < type.length && !valid; i++) {
            var assertedType = assertType(value, type[i]);
            expectedTypes.push(assertedType.expectedType);
            valid = assertedType.valid;
          }
        }
        if (!valid) {
          warn('Invalid prop: type check failed for prop "' + name + '".' + ' Expected ' + expectedTypes.map(capitalize).join(', ') + ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.', vm);
          return;
        }
        var validator = prop.validator;
        if (validator) {
          if (!validator(value)) {
            warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
          }
        }
      }
      function assertType(value, type) {
        var valid;
        var expectedType = getType(type);
        if (expectedType === 'String') {
          valid = typeof value === (expectedType = 'string');
        } else if (expectedType === 'Number') {
          valid = typeof value === (expectedType = 'number');
        } else if (expectedType === 'Boolean') {
          valid = typeof value === (expectedType = 'boolean');
        } else if (expectedType === 'Function') {
          valid = typeof value === (expectedType = 'function');
        } else if (expectedType === 'Object') {
          valid = isPlainObject(value);
        } else if (expectedType === 'Array') {
          valid = Array.isArray(value);
        } else {
          valid = value instanceof type;
        }
        return {
          valid: valid,
          expectedType: expectedType
        };
      }
      function getType(fn) {
        var match = fn && fn.toString().match(/^\s*function (\w+)/);
        return match && match[1];
      }
      function isBooleanType(fn) {
        if (!Array.isArray(fn)) {
          return getType(fn) === 'Boolean';
        }
        for (var i = 0, len = fn.length; i < len; i++) {
          if (getType(fn[i]) === 'Boolean') {
            return true;
          }
        }
        return false;
      }
      var util = Object.freeze({
        defineReactive: defineReactive$$1,
        _toString: _toString,
        toNumber: toNumber,
        makeMap: makeMap,
        isBuiltInTag: isBuiltInTag,
        remove: remove$1,
        hasOwn: hasOwn,
        isPrimitive: isPrimitive,
        cached: cached,
        camelize: camelize,
        capitalize: capitalize,
        hyphenate: hyphenate,
        bind: bind$1,
        toArray: toArray,
        extend: extend,
        isObject: isObject,
        isPlainObject: isPlainObject,
        toObject: toObject,
        noop: noop,
        no: no,
        genStaticKeys: genStaticKeys,
        looseEqual: looseEqual,
        looseIndexOf: looseIndexOf,
        isReserved: isReserved,
        def: def,
        parsePath: parsePath,
        hasProto: hasProto,
        inBrowser: inBrowser,
        UA: UA,
        isIE: isIE,
        isIE9: isIE9,
        isEdge: isEdge,
        isAndroid: isAndroid,
        isIOS: isIOS,
        devtools: devtools,
        nextTick: nextTick,
        get _Set() {
          return _Set;
        },
        mergeOptions: mergeOptions,
        resolveAsset: resolveAsset,
        get warn() {
          return warn;
        },
        get formatComponentName() {
          return formatComponentName;
        },
        validateProp: validateProp
      });
      function initUse(Vue) {
        Vue.use = function (plugin) {
          if (plugin.installed) {
            return;
          }
          var args = toArray(arguments, 1);
          args.unshift(this);
          if (typeof plugin.install === 'function') {
            plugin.install.apply(plugin, args);
          } else {
            plugin.apply(null, args);
          }
          plugin.installed = true;
          return this;
        };
      }
      function initMixin$1(Vue) {
        Vue.mixin = function (mixin) {
          Vue.options = mergeOptions(Vue.options, mixin);
        };
      }
      function initExtend(Vue) {
        Vue.cid = 0;
        var cid = 1;
        Vue.extend = function (extendOptions) {
          extendOptions = extendOptions || {};
          var Super = this;
          var isFirstExtend = Super.cid === 0;
          if (isFirstExtend && extendOptions._Ctor) {
            return extendOptions._Ctor;
          }
          var name = extendOptions.name || Super.options.name;
          {
            if (!/^[a-zA-Z][\w-]*$/.test(name)) {
              warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
            }
          }
          var Sub = function VueComponent(options) {
            this._init(options);
          };
          Sub.prototype = Object.create(Super.prototype);
          Sub.prototype.constructor = Sub;
          Sub.cid = cid++;
          Sub.options = mergeOptions(Super.options, extendOptions);
          Sub['super'] = Super;
          Sub.extend = Super.extend;
          config._assetTypes.forEach(function (type) {
            Sub[type] = Super[type];
          });
          if (name) {
            Sub.options.components[name] = Sub;
          }
          Sub.superOptions = Super.options;
          Sub.extendOptions = extendOptions;
          if (isFirstExtend) {
            extendOptions._Ctor = Sub;
          }
          return Sub;
        };
      }
      function initAssetRegisters(Vue) {
        config._assetTypes.forEach(function (type) {
          Vue[type] = function (id, definition) {
            if (!definition) {
              return this.options[type + 's'][id];
            } else {
              {
                if (type === 'component' && config.isReservedTag(id)) {
                  warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
                }
              }
              if (type === 'component' && isPlainObject(definition)) {
                definition.name = definition.name || id;
                definition = Vue.extend(definition);
              }
              if (type === 'directive' && typeof definition === 'function') {
                definition = {
                  bind: definition,
                  update: definition
                };
              }
              this.options[type + 's'][id] = definition;
              return definition;
            }
          };
        });
      }
      var KeepAlive = {
        name: 'keep-alive',
        abstract: true,
        created: function created() {
          this.cache = Object.create(null);
        },
        render: function render() {
          var vnode = getFirstComponentChild(this.$slots.default);
          if (vnode && vnode.componentOptions) {
            var opts = vnode.componentOptions;
            var key = vnode.key == null ? opts.Ctor.cid + '::' + opts.tag : vnode.key;
            if (this.cache[key]) {
              vnode.child = this.cache[key].child;
            } else {
              this.cache[key] = vnode;
            }
            vnode.data.keepAlive = true;
          }
          return vnode;
        },
        destroyed: function destroyed() {
          var this$1 = this;
          for (var key in this.cache) {
            var vnode = this$1.cache[key];
            callHook(vnode.child, 'deactivated');
            vnode.child.$destroy();
          }
        }
      };
      var builtInComponents = { KeepAlive: KeepAlive };
      function initGlobalAPI(Vue) {
        var configDef = {};
        configDef.get = function () {
          return config;
        };
        {
          configDef.set = function () {
            warn('Do not replace the Vue.config object, set individual fields instead.');
          };
        }
        Object.defineProperty(Vue, 'config', configDef);
        Vue.util = util;
        Vue.set = set;
        Vue.delete = del;
        Vue.nextTick = nextTick;
        Vue.options = Object.create(null);
        config._assetTypes.forEach(function (type) {
          Vue.options[type + 's'] = Object.create(null);
        });
        extend(Vue.options.components, builtInComponents);
        initUse(Vue);
        initMixin$1(Vue);
        initExtend(Vue);
        initAssetRegisters(Vue);
      }
      initGlobalAPI(Vue$2);
      Object.defineProperty(Vue$2.prototype, '$isServer', { get: function () {
          return config._isServer;
        } });
      Vue$2.version = '2.0.5';
      var mustUseProp = makeMap('value,selected,checked,muted');
      var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
      var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
      var isAttr = makeMap('accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' + 'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' + 'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' + 'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' + 'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' + 'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' + 'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' + 'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' + 'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' + 'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' + 'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' + 'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' + 'target,title,type,usemap,value,width,wrap');
      var xlinkNS = 'http://www.w3.org/1999/xlink';
      var isXlink = function (name) {
        return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
      };
      var getXlinkProp = function (name) {
        return isXlink(name) ? name.slice(6, name.length) : '';
      };
      var isFalsyAttrValue = function (val) {
        return val == null || val === false;
      };
      function genClassForVnode(vnode) {
        var data = vnode.data;
        var parentNode = vnode;
        var childNode = vnode;
        while (childNode.child) {
          childNode = childNode.child._vnode;
          if (childNode.data) {
            data = mergeClassData(childNode.data, data);
          }
        }
        while (parentNode = parentNode.parent) {
          if (parentNode.data) {
            data = mergeClassData(data, parentNode.data);
          }
        }
        return genClassFromData(data);
      }
      function mergeClassData(child, parent) {
        return {
          staticClass: concat(child.staticClass, parent.staticClass),
          class: child.class ? [child.class, parent.class] : parent.class
        };
      }
      function genClassFromData(data) {
        var dynamicClass = data.class;
        var staticClass = data.staticClass;
        if (staticClass || dynamicClass) {
          return concat(staticClass, stringifyClass(dynamicClass));
        }
        return '';
      }
      function concat(a, b) {
        return a ? b ? a + ' ' + b : a : b || '';
      }
      function stringifyClass(value) {
        var res = '';
        if (!value) {
          return res;
        }
        if (typeof value === 'string') {
          return value;
        }
        if (Array.isArray(value)) {
          var stringified;
          for (var i = 0, l = value.length; i < l; i++) {
            if (value[i]) {
              if (stringified = stringifyClass(value[i])) {
                res += stringified + ' ';
              }
            }
          }
          return res.slice(0, -1);
        }
        if (isObject(value)) {
          for (var key in value) {
            if (value[key]) {
              res += key + ' ';
            }
          }
          return res.slice(0, -1);
        }
        return res;
      }
      var namespaceMap = {
        svg: 'http://www.w3.org/2000/svg',
        math: 'http://www.w3.org/1998/Math/MathML',
        xhtml: 'http://www.w3.org/1999/xhtm'
      };
      var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template');
      var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr', true);
      var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source', true);
      var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track', true);
      var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' + 'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
      var isPreTag = function (tag) {
        return tag === 'pre';
      };
      var isReservedTag = function (tag) {
        return isHTMLTag(tag) || isSVG(tag);
      };
      function getTagNamespace(tag) {
        if (isSVG(tag)) {
          return 'svg';
        }
        if (tag === 'math') {
          return 'math';
        }
      }
      var unknownElementCache = Object.create(null);
      function isUnknownElement(tag) {
        if (!inBrowser) {
          return true;
        }
        if (isReservedTag(tag)) {
          return false;
        }
        tag = tag.toLowerCase();
        if (unknownElementCache[tag] != null) {
          return unknownElementCache[tag];
        }
        var el = document.createElement(tag);
        if (tag.indexOf('-') > -1) {
          return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
        } else {
          return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
        }
      }
      function query(el) {
        if (typeof el === 'string') {
          var selector = el;
          el = document.querySelector(el);
          if (!el) {
            "development" !== 'production' && warn('Cannot find element: ' + selector);
            return document.createElement('div');
          }
        }
        return el;
      }
      function createElement$1(tagName, vnode) {
        var elm = document.createElement(tagName);
        if (tagName !== 'select') {
          return elm;
        }
        if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
          elm.setAttribute('multiple', 'multiple');
        }
        return elm;
      }
      function createElementNS(namespace, tagName) {
        return document.createElementNS(namespaceMap[namespace], tagName);
      }
      function createTextNode(text) {
        return document.createTextNode(text);
      }
      function createComment(text) {
        return document.createComment(text);
      }
      function insertBefore(parentNode, newNode, referenceNode) {
        parentNode.insertBefore(newNode, referenceNode);
      }
      function removeChild(node, child) {
        node.removeChild(child);
      }
      function appendChild(node, child) {
        node.appendChild(child);
      }
      function parentNode(node) {
        return node.parentNode;
      }
      function nextSibling(node) {
        return node.nextSibling;
      }
      function tagName(node) {
        return node.tagName;
      }
      function setTextContent(node, text) {
        node.textContent = text;
      }
      function childNodes(node) {
        return node.childNodes;
      }
      function setAttribute(node, key, val) {
        node.setAttribute(key, val);
      }
      var nodeOps = Object.freeze({
        createElement: createElement$1,
        createElementNS: createElementNS,
        createTextNode: createTextNode,
        createComment: createComment,
        insertBefore: insertBefore,
        removeChild: removeChild,
        appendChild: appendChild,
        parentNode: parentNode,
        nextSibling: nextSibling,
        tagName: tagName,
        setTextContent: setTextContent,
        childNodes: childNodes,
        setAttribute: setAttribute
      });
      var ref = {
        create: function create(_, vnode) {
          registerRef(vnode);
        },
        update: function update(oldVnode, vnode) {
          if (oldVnode.data.ref !== vnode.data.ref) {
            registerRef(oldVnode, true);
            registerRef(vnode);
          }
        },
        destroy: function destroy(vnode) {
          registerRef(vnode, true);
        }
      };
      function registerRef(vnode, isRemoval) {
        var key = vnode.data.ref;
        if (!key) {
          return;
        }
        var vm = vnode.context;
        var ref = vnode.child || vnode.elm;
        var refs = vm.$refs;
        if (isRemoval) {
          if (Array.isArray(refs[key])) {
            remove$1(refs[key], ref);
          } else if (refs[key] === ref) {
            refs[key] = undefined;
          }
        } else {
          if (vnode.data.refInFor) {
            if (Array.isArray(refs[key])) {
              refs[key].push(ref);
            } else {
              refs[key] = [ref];
            }
          } else {
            refs[key] = ref;
          }
        }
      }
      var emptyNode = new VNode('', {}, []);
      var hooks$1 = ['create', 'update', 'remove', 'destroy'];
      function isUndef(s) {
        return s == null;
      }
      function isDef(s) {
        return s != null;
      }
      function sameVnode(vnode1, vnode2) {
        return vnode1.key === vnode2.key && vnode1.tag === vnode2.tag && vnode1.isComment === vnode2.isComment && !vnode1.data === !vnode2.data;
      }
      function createKeyToOldIdx(children, beginIdx, endIdx) {
        var i, key;
        var map = {};
        for (i = beginIdx; i <= endIdx; ++i) {
          key = children[i].key;
          if (isDef(key)) {
            map[key] = i;
          }
        }
        return map;
      }
      function createPatchFunction(backend) {
        var i, j;
        var cbs = {};
        var modules = backend.modules;
        var nodeOps = backend.nodeOps;
        for (i = 0; i < hooks$1.length; ++i) {
          cbs[hooks$1[i]] = [];
          for (j = 0; j < modules.length; ++j) {
            if (modules[j][hooks$1[i]] !== undefined) {
              cbs[hooks$1[i]].push(modules[j][hooks$1[i]]);
            }
          }
        }
        function emptyNodeAt(elm) {
          return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
        }
        function createRmCb(childElm, listeners) {
          function remove$$1() {
            if (--remove$$1.listeners === 0) {
              removeElement(childElm);
            }
          }
          remove$$1.listeners = listeners;
          return remove$$1;
        }
        function removeElement(el) {
          var parent = nodeOps.parentNode(el);
          if (parent) {
            nodeOps.removeChild(parent, el);
          }
        }
        function createElm(vnode, insertedVnodeQueue, nested) {
          var i;
          var data = vnode.data;
          vnode.isRootInsert = !nested;
          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.init)) {
              i(vnode);
            }
            if (isDef(i = vnode.child)) {
              initComponent(vnode, insertedVnodeQueue);
              return vnode.elm;
            }
          }
          var children = vnode.children;
          var tag = vnode.tag;
          if (isDef(tag)) {
            {
              if (!vnode.ns && !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) && config.isUnknownElement(tag)) {
                warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
              }
            }
            vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
            setScope(vnode);
            createChildren(vnode, children, insertedVnodeQueue);
            if (isDef(data)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
            }
          } else if (vnode.isComment) {
            vnode.elm = nodeOps.createComment(vnode.text);
          } else {
            vnode.elm = nodeOps.createTextNode(vnode.text);
          }
          return vnode.elm;
        }
        function createChildren(vnode, children, insertedVnodeQueue) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; ++i) {
              nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true));
            }
          } else if (isPrimitive(vnode.text)) {
            nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
          }
        }
        function isPatchable(vnode) {
          while (vnode.child) {
            vnode = vnode.child._vnode;
          }
          return isDef(vnode.tag);
        }
        function invokeCreateHooks(vnode, insertedVnodeQueue) {
          for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
            cbs.create[i$1](emptyNode, vnode);
          }
          i = vnode.data.hook;
          if (isDef(i)) {
            if (i.create) {
              i.create(emptyNode, vnode);
            }
            if (i.insert) {
              insertedVnodeQueue.push(vnode);
            }
          }
        }
        function initComponent(vnode, insertedVnodeQueue) {
          if (vnode.data.pendingInsert) {
            insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
          }
          vnode.elm = vnode.child.$el;
          if (isPatchable(vnode)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            setScope(vnode);
          } else {
            registerRef(vnode);
            insertedVnodeQueue.push(vnode);
          }
        }
        function setScope(vnode) {
          var i;
          if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setAttribute(vnode.elm, i, '');
          }
          if (isDef(i = activeInstance) && i !== vnode.context && isDef(i = i.$options._scopeId)) {
            nodeOps.setAttribute(vnode.elm, i, '');
          }
        }
        function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
          for (; startIdx <= endIdx; ++startIdx) {
            nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
          }
        }
        function invokeDestroyHook(vnode) {
          var i, j;
          var data = vnode.data;
          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.destroy)) {
              i(vnode);
            }
            for (i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](vnode);
            }
          }
          if (isDef(i = vnode.children)) {
            for (j = 0; j < vnode.children.length; ++j) {
              invokeDestroyHook(vnode.children[j]);
            }
          }
        }
        function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
          for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];
            if (isDef(ch)) {
              if (isDef(ch.tag)) {
                removeAndInvokeRemoveHook(ch);
                invokeDestroyHook(ch);
              } else {
                nodeOps.removeChild(parentElm, ch.elm);
              }
            }
          }
        }
        function removeAndInvokeRemoveHook(vnode, rm) {
          if (rm || isDef(vnode.data)) {
            var listeners = cbs.remove.length + 1;
            if (!rm) {
              rm = createRmCb(vnode.elm, listeners);
            } else {
              rm.listeners += listeners;
            }
            if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
              removeAndInvokeRemoveHook(i, rm);
            }
            for (i = 0; i < cbs.remove.length; ++i) {
              cbs.remove[i](vnode, rm);
            }
            if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
              i(vnode, rm);
            } else {
              rm();
            }
          } else {
            removeElement(vnode.elm);
          }
        }
        function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
          var oldStartIdx = 0;
          var newStartIdx = 0;
          var oldEndIdx = oldCh.length - 1;
          var oldStartVnode = oldCh[0];
          var oldEndVnode = oldCh[oldEndIdx];
          var newEndIdx = newCh.length - 1;
          var newStartVnode = newCh[0];
          var newEndVnode = newCh[newEndIdx];
          var oldKeyToIdx, idxInOld, elmToMove, before;
          var canMove = !removeOnly;
          while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (isUndef(oldStartVnode)) {
              oldStartVnode = oldCh[++oldStartIdx];
            } else if (isUndef(oldEndVnode)) {
              oldEndVnode = oldCh[--oldEndIdx];
            } else if (sameVnode(oldStartVnode, newStartVnode)) {
              patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
              oldStartVnode = oldCh[++oldStartIdx];
              newStartVnode = newCh[++newStartIdx];
            } else if (sameVnode(oldEndVnode, newEndVnode)) {
              patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
              oldEndVnode = oldCh[--oldEndIdx];
              newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldStartVnode, newEndVnode)) {
              patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
              canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
              oldStartVnode = oldCh[++oldStartIdx];
              newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldEndVnode, newStartVnode)) {
              patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
              canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
              oldEndVnode = oldCh[--oldEndIdx];
              newStartVnode = newCh[++newStartIdx];
            } else {
              if (isUndef(oldKeyToIdx)) {
                oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
              }
              idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
              if (isUndef(idxInOld)) {
                nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                newStartVnode = newCh[++newStartIdx];
              } else {
                elmToMove = oldCh[idxInOld];
                if ("development" !== 'production' && !elmToMove) {
                  warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
                }
                if (elmToMove.tag !== newStartVnode.tag) {
                  nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                  newStartVnode = newCh[++newStartIdx];
                } else {
                  patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                  oldCh[idxInOld] = undefined;
                  canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
                  newStartVnode = newCh[++newStartIdx];
                }
              }
            }
          }
          if (oldStartIdx > oldEndIdx) {
            before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
          } else if (newStartIdx > newEndIdx) {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
          }
        }
        function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
          if (oldVnode === vnode) {
            return;
          }
          if (vnode.isStatic && oldVnode.isStatic && vnode.key === oldVnode.key && (vnode.isCloned || vnode.isOnce)) {
            vnode.elm = oldVnode.elm;
            return;
          }
          var i;
          var data = vnode.data;
          var hasData = isDef(data);
          if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
            i(oldVnode, vnode);
          }
          var elm = vnode.elm = oldVnode.elm;
          var oldCh = oldVnode.children;
          var ch = vnode.children;
          if (hasData && isPatchable(vnode)) {
            for (i = 0; i < cbs.update.length; ++i) {
              cbs.update[i](oldVnode, vnode);
            }
            if (isDef(i = data.hook) && isDef(i = i.update)) {
              i(oldVnode, vnode);
            }
          }
          if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
              if (oldCh !== ch) {
                updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
              }
            } else if (isDef(ch)) {
              if (isDef(oldVnode.text)) {
                nodeOps.setTextContent(elm, '');
              }
              addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            } else if (isDef(oldCh)) {
              removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            } else if (isDef(oldVnode.text)) {
              nodeOps.setTextContent(elm, '');
            }
          } else if (oldVnode.text !== vnode.text) {
            nodeOps.setTextContent(elm, vnode.text);
          }
          if (hasData) {
            if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
              i(oldVnode, vnode);
            }
          }
        }
        function invokeInsertHook(vnode, queue, initial) {
          if (initial && vnode.parent) {
            vnode.parent.data.pendingInsert = queue;
          } else {
            for (var i = 0; i < queue.length; ++i) {
              queue[i].data.hook.insert(queue[i]);
            }
          }
        }
        var bailed = false;
        function hydrate(elm, vnode, insertedVnodeQueue) {
          {
            if (!assertNodeMatch(elm, vnode)) {
              return false;
            }
          }
          vnode.elm = elm;
          var tag = vnode.tag;
          var data = vnode.data;
          var children = vnode.children;
          if (isDef(data)) {
            if (isDef(i = data.hook) && isDef(i = i.init)) {
              i(vnode, true);
            }
            if (isDef(i = vnode.child)) {
              initComponent(vnode, insertedVnodeQueue);
              return true;
            }
          }
          if (isDef(tag)) {
            if (isDef(children)) {
              var childNodes = nodeOps.childNodes(elm);
              if (!childNodes.length) {
                createChildren(vnode, children, insertedVnodeQueue);
              } else {
                var childrenMatch = true;
                if (childNodes.length !== children.length) {
                  childrenMatch = false;
                } else {
                  for (var i$1 = 0; i$1 < children.length; i$1++) {
                    if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
                      childrenMatch = false;
                      break;
                    }
                  }
                }
                if (!childrenMatch) {
                  if ("development" !== 'production' && typeof console !== 'undefined' && !bailed) {
                    bailed = true;
                    console.warn('Parent: ', elm);
                    console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children);
                  }
                  return false;
                }
              }
            }
            if (isDef(data)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
            }
          }
          return true;
        }
        function assertNodeMatch(node, vnode) {
          if (vnode.tag) {
            return vnode.tag.indexOf('vue-component') === 0 || vnode.tag === nodeOps.tagName(node).toLowerCase();
          } else {
            return _toString(vnode.text) === node.data;
          }
        }
        return function patch(oldVnode, vnode, hydrating, removeOnly) {
          if (!vnode) {
            if (oldVnode) {
              invokeDestroyHook(oldVnode);
            }
            return;
          }
          var elm, parent;
          var isInitialPatch = false;
          var insertedVnodeQueue = [];
          if (!oldVnode) {
            isInitialPatch = true;
            createElm(vnode, insertedVnodeQueue);
          } else {
            var isRealElement = isDef(oldVnode.nodeType);
            if (!isRealElement && sameVnode(oldVnode, vnode)) {
              patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
            } else {
              if (isRealElement) {
                if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
                  oldVnode.removeAttribute('server-rendered');
                  hydrating = true;
                }
                if (hydrating) {
                  if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                    invokeInsertHook(vnode, insertedVnodeQueue, true);
                    return oldVnode;
                  } else {
                    warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
                  }
                }
                oldVnode = emptyNodeAt(oldVnode);
              }
              elm = oldVnode.elm;
              parent = nodeOps.parentNode(elm);
              createElm(vnode, insertedVnodeQueue);
              if (vnode.parent) {
                vnode.parent.elm = vnode.elm;
                if (isPatchable(vnode)) {
                  for (var i = 0; i < cbs.create.length; ++i) {
                    cbs.create[i](emptyNode, vnode.parent);
                  }
                }
              }
              if (parent !== null) {
                nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm));
                removeVnodes(parent, [oldVnode], 0, 0);
              } else if (isDef(oldVnode.tag)) {
                invokeDestroyHook(oldVnode);
              }
            }
          }
          invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
          return vnode.elm;
        };
      }
      var directives = {
        create: updateDirectives,
        update: updateDirectives,
        destroy: function unbindDirectives(vnode) {
          updateDirectives(vnode, emptyNode);
        }
      };
      function updateDirectives(oldVnode, vnode) {
        if (!oldVnode.data.directives && !vnode.data.directives) {
          return;
        }
        var isCreate = oldVnode === emptyNode;
        var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
        var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
        var dirsWithInsert = [];
        var dirsWithPostpatch = [];
        var key, oldDir, dir;
        for (key in newDirs) {
          oldDir = oldDirs[key];
          dir = newDirs[key];
          if (!oldDir) {
            callHook$1(dir, 'bind', vnode, oldVnode);
            if (dir.def && dir.def.inserted) {
              dirsWithInsert.push(dir);
            }
          } else {
            dir.oldValue = oldDir.value;
            callHook$1(dir, 'update', vnode, oldVnode);
            if (dir.def && dir.def.componentUpdated) {
              dirsWithPostpatch.push(dir);
            }
          }
        }
        if (dirsWithInsert.length) {
          var callInsert = function () {
            dirsWithInsert.forEach(function (dir) {
              callHook$1(dir, 'inserted', vnode, oldVnode);
            });
          };
          if (isCreate) {
            mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
          } else {
            callInsert();
          }
        }
        if (dirsWithPostpatch.length) {
          mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
            dirsWithPostpatch.forEach(function (dir) {
              callHook$1(dir, 'componentUpdated', vnode, oldVnode);
            });
          }, 'dir-postpatch');
        }
        if (!isCreate) {
          for (key in oldDirs) {
            if (!newDirs[key]) {
              callHook$1(oldDirs[key], 'unbind', oldVnode);
            }
          }
        }
      }
      var emptyModifiers = Object.create(null);
      function normalizeDirectives$1(dirs, vm) {
        var res = Object.create(null);
        if (!dirs) {
          return res;
        }
        var i, dir;
        for (i = 0; i < dirs.length; i++) {
          dir = dirs[i];
          if (!dir.modifiers) {
            dir.modifiers = emptyModifiers;
          }
          res[getRawDirName(dir)] = dir;
          dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
        }
        return res;
      }
      function getRawDirName(dir) {
        return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
      }
      function callHook$1(dir, hook, vnode, oldVnode) {
        var fn = dir.def && dir.def[hook];
        if (fn) {
          fn(vnode.elm, dir, vnode, oldVnode);
        }
      }
      var baseModules = [ref, directives];
      function updateAttrs(oldVnode, vnode) {
        if (!oldVnode.data.attrs && !vnode.data.attrs) {
          return;
        }
        var key, cur, old;
        var elm = vnode.elm;
        var oldAttrs = oldVnode.data.attrs || {};
        var attrs = vnode.data.attrs || {};
        if (attrs.__ob__) {
          attrs = vnode.data.attrs = extend({}, attrs);
        }
        for (key in attrs) {
          cur = attrs[key];
          old = oldAttrs[key];
          if (old !== cur) {
            setAttr(elm, key, cur);
          }
        }
        for (key in oldAttrs) {
          if (attrs[key] == null) {
            if (isXlink(key)) {
              elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
            } else if (!isEnumeratedAttr(key)) {
              elm.removeAttribute(key);
            }
          }
        }
      }
      function setAttr(el, key, value) {
        if (isBooleanAttr(key)) {
          if (isFalsyAttrValue(value)) {
            el.removeAttribute(key);
          } else {
            el.setAttribute(key, key);
          }
        } else if (isEnumeratedAttr(key)) {
          el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
        } else if (isXlink(key)) {
          if (isFalsyAttrValue(value)) {
            el.removeAttributeNS(xlinkNS, getXlinkProp(key));
          } else {
            el.setAttributeNS(xlinkNS, key, value);
          }
        } else {
          if (isFalsyAttrValue(value)) {
            el.removeAttribute(key);
          } else {
            el.setAttribute(key, value);
          }
        }
      }
      var attrs = {
        create: updateAttrs,
        update: updateAttrs
      };
      function updateClass(oldVnode, vnode) {
        var el = vnode.elm;
        var data = vnode.data;
        var oldData = oldVnode.data;
        if (!data.staticClass && !data.class && (!oldData || !oldData.staticClass && !oldData.class)) {
          return;
        }
        var cls = genClassForVnode(vnode);
        var transitionClass = el._transitionClasses;
        if (transitionClass) {
          cls = concat(cls, stringifyClass(transitionClass));
        }
        if (cls !== el._prevClass) {
          el.setAttribute('class', cls);
          el._prevClass = cls;
        }
      }
      var klass = {
        create: updateClass,
        update: updateClass
      };
      function updateDOMListeners(oldVnode, vnode) {
        if (!oldVnode.data.on && !vnode.data.on) {
          return;
        }
        var on = vnode.data.on || {};
        var oldOn = oldVnode.data.on || {};
        var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
          vnode.elm.addEventListener(event, handler, capture);
        });
        var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
          vnode.elm.removeEventListener(event, handler);
        });
        updateListeners(on, oldOn, add, remove, vnode.context);
      }
      var events = {
        create: updateDOMListeners,
        update: updateDOMListeners
      };
      function updateDOMProps(oldVnode, vnode) {
        if (!oldVnode.data.domProps && !vnode.data.domProps) {
          return;
        }
        var key, cur;
        var elm = vnode.elm;
        var oldProps = oldVnode.data.domProps || {};
        var props = vnode.data.domProps || {};
        if (props.__ob__) {
          props = vnode.data.domProps = extend({}, props);
        }
        for (key in oldProps) {
          if (props[key] == null) {
            elm[key] = '';
          }
        }
        for (key in props) {
          if ((key === 'textContent' || key === 'innerHTML') && vnode.children) {
            vnode.children.length = 0;
          }
          cur = props[key];
          if (key === 'value') {
            elm._value = cur;
            var strCur = cur == null ? '' : String(cur);
            if (elm.value !== strCur && !elm.composing) {
              elm.value = strCur;
            }
          } else {
            elm[key] = cur;
          }
        }
      }
      var domProps = {
        create: updateDOMProps,
        update: updateDOMProps
      };
      var cssVarRE = /^--/;
      var setProp = function (el, name, val) {
        if (cssVarRE.test(name)) {
          el.style.setProperty(name, val);
        } else {
          el.style[normalize(name)] = val;
        }
      };
      var prefixes = ['Webkit', 'Moz', 'ms'];
      var testEl;
      var normalize = cached(function (prop) {
        testEl = testEl || document.createElement('div');
        prop = camelize(prop);
        if (prop !== 'filter' && prop in testEl.style) {
          return prop;
        }
        var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
        for (var i = 0; i < prefixes.length; i++) {
          var prefixed = prefixes[i] + upper;
          if (prefixed in testEl.style) {
            return prefixed;
          }
        }
      });
      function updateStyle(oldVnode, vnode) {
        if ((!oldVnode.data || !oldVnode.data.style) && !vnode.data.style) {
          return;
        }
        var cur, name;
        var el = vnode.elm;
        var oldStyle = oldVnode.data.style || {};
        var style = vnode.data.style || {};
        if (typeof style === 'string') {
          el.style.cssText = style;
          return;
        }
        var needClone = style.__ob__;
        if (Array.isArray(style)) {
          style = vnode.data.style = toObject(style);
        }
        if (needClone) {
          style = vnode.data.style = extend({}, style);
        }
        for (name in oldStyle) {
          if (style[name] == null) {
            setProp(el, name, '');
          }
        }
        for (name in style) {
          cur = style[name];
          if (cur !== oldStyle[name]) {
            setProp(el, name, cur == null ? '' : cur);
          }
        }
      }
      var style = {
        create: updateStyle,
        update: updateStyle
      };
      function addClass(el, cls) {
        if (!cls || !cls.trim()) {
          return;
        }
        if (el.classList) {
          if (cls.indexOf(' ') > -1) {
            cls.split(/\s+/).forEach(function (c) {
              return el.classList.add(c);
            });
          } else {
            el.classList.add(cls);
          }
        } else {
          var cur = ' ' + el.getAttribute('class') + ' ';
          if (cur.indexOf(' ' + cls + ' ') < 0) {
            el.setAttribute('class', (cur + cls).trim());
          }
        }
      }
      function removeClass(el, cls) {
        if (!cls || !cls.trim()) {
          return;
        }
        if (el.classList) {
          if (cls.indexOf(' ') > -1) {
            cls.split(/\s+/).forEach(function (c) {
              return el.classList.remove(c);
            });
          } else {
            el.classList.remove(cls);
          }
        } else {
          var cur = ' ' + el.getAttribute('class') + ' ';
          var tar = ' ' + cls + ' ';
          while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, ' ');
          }
          el.setAttribute('class', cur.trim());
        }
      }
      var hasTransition = inBrowser && !isIE9;
      var TRANSITION = 'transition';
      var ANIMATION = 'animation';
      var transitionProp = 'transition';
      var transitionEndEvent = 'transitionend';
      var animationProp = 'animation';
      var animationEndEvent = 'animationend';
      if (hasTransition) {
        if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
          transitionProp = 'WebkitTransition';
          transitionEndEvent = 'webkitTransitionEnd';
        }
        if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
          animationProp = 'WebkitAnimation';
          animationEndEvent = 'webkitAnimationEnd';
        }
      }
      var raf = inBrowser && window.requestAnimationFrame || setTimeout;
      function nextFrame(fn) {
        raf(function () {
          raf(fn);
        });
      }
      function addTransitionClass(el, cls) {
        (el._transitionClasses || (el._transitionClasses = [])).push(cls);
        addClass(el, cls);
      }
      function removeTransitionClass(el, cls) {
        if (el._transitionClasses) {
          remove$1(el._transitionClasses, cls);
        }
        removeClass(el, cls);
      }
      function whenTransitionEnds(el, expectedType, cb) {
        var ref = getTransitionInfo(el, expectedType);
        var type = ref.type;
        var timeout = ref.timeout;
        var propCount = ref.propCount;
        if (!type) {
          return cb();
        }
        var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
        var ended = 0;
        var end = function () {
          el.removeEventListener(event, onEnd);
          cb();
        };
        var onEnd = function (e) {
          if (e.target === el) {
            if (++ended >= propCount) {
              end();
            }
          }
        };
        setTimeout(function () {
          if (ended < propCount) {
            end();
          }
        }, timeout + 1);
        el.addEventListener(event, onEnd);
      }
      var transformRE = /\b(transform|all)(,|$)/;
      function getTransitionInfo(el, expectedType) {
        var styles = window.getComputedStyle(el);
        var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
        var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
        var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
        var animationDelays = styles[animationProp + 'Delay'].split(', ');
        var animationDurations = styles[animationProp + 'Duration'].split(', ');
        var animationTimeout = getTimeout(animationDelays, animationDurations);
        var type;
        var timeout = 0;
        var propCount = 0;
        if (expectedType === TRANSITION) {
          if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
          }
        } else if (expectedType === ANIMATION) {
          if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
          }
        } else {
          timeout = Math.max(transitionTimeout, animationTimeout);
          type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
          propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
        }
        var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
        return {
          type: type,
          timeout: timeout,
          propCount: propCount,
          hasTransform: hasTransform
        };
      }
      function getTimeout(delays, durations) {
        while (delays.length < durations.length) {
          delays = delays.concat(delays);
        }
        return Math.max.apply(null, durations.map(function (d, i) {
          return toMs(d) + toMs(delays[i]);
        }));
      }
      function toMs(s) {
        return Number(s.slice(0, -1)) * 1000;
      }
      function enter(vnode) {
        var el = vnode.elm;
        if (el._leaveCb) {
          el._leaveCb.cancelled = true;
          el._leaveCb();
        }
        var data = resolveTransition(vnode.data.transition);
        if (!data) {
          return;
        }
        if (el._enterCb || el.nodeType !== 1) {
          return;
        }
        var css = data.css;
        var type = data.type;
        var enterClass = data.enterClass;
        var enterActiveClass = data.enterActiveClass;
        var appearClass = data.appearClass;
        var appearActiveClass = data.appearActiveClass;
        var beforeEnter = data.beforeEnter;
        var enter = data.enter;
        var afterEnter = data.afterEnter;
        var enterCancelled = data.enterCancelled;
        var beforeAppear = data.beforeAppear;
        var appear = data.appear;
        var afterAppear = data.afterAppear;
        var appearCancelled = data.appearCancelled;
        var transitionNode = activeInstance.$vnode;
        var context = transitionNode && transitionNode.parent ? transitionNode.parent.context : activeInstance;
        var isAppear = !context._isMounted || !vnode.isRootInsert;
        if (isAppear && !appear && appear !== '') {
          return;
        }
        var startClass = isAppear ? appearClass : enterClass;
        var activeClass = isAppear ? appearActiveClass : enterActiveClass;
        var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
        var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
        var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
        var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
        var expectsCSS = css !== false && !isIE9;
        var userWantsControl = enterHook && (enterHook._length || enterHook.length) > 1;
        var cb = el._enterCb = once(function () {
          if (expectsCSS) {
            removeTransitionClass(el, activeClass);
          }
          if (cb.cancelled) {
            if (expectsCSS) {
              removeTransitionClass(el, startClass);
            }
            enterCancelledHook && enterCancelledHook(el);
          } else {
            afterEnterHook && afterEnterHook(el);
          }
          el._enterCb = null;
        });
        if (!vnode.data.show) {
          mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
            var parent = el.parentNode;
            var pendingNode = parent && parent._pending && parent._pending[vnode.key];
            if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
              pendingNode.elm._leaveCb();
            }
            enterHook && enterHook(el, cb);
          }, 'transition-insert');
        }
        beforeEnterHook && beforeEnterHook(el);
        if (expectsCSS) {
          addTransitionClass(el, startClass);
          addTransitionClass(el, activeClass);
          nextFrame(function () {
            removeTransitionClass(el, startClass);
            if (!cb.cancelled && !userWantsControl) {
              whenTransitionEnds(el, type, cb);
            }
          });
        }
        if (vnode.data.show) {
          enterHook && enterHook(el, cb);
        }
        if (!expectsCSS && !userWantsControl) {
          cb();
        }
      }
      function leave(vnode, rm) {
        var el = vnode.elm;
        if (el._enterCb) {
          el._enterCb.cancelled = true;
          el._enterCb();
        }
        var data = resolveTransition(vnode.data.transition);
        if (!data) {
          return rm();
        }
        if (el._leaveCb || el.nodeType !== 1) {
          return;
        }
        var css = data.css;
        var type = data.type;
        var leaveClass = data.leaveClass;
        var leaveActiveClass = data.leaveActiveClass;
        var beforeLeave = data.beforeLeave;
        var leave = data.leave;
        var afterLeave = data.afterLeave;
        var leaveCancelled = data.leaveCancelled;
        var delayLeave = data.delayLeave;
        var expectsCSS = css !== false && !isIE9;
        var userWantsControl = leave && (leave._length || leave.length) > 1;
        var cb = el._leaveCb = once(function () {
          if (el.parentNode && el.parentNode._pending) {
            el.parentNode._pending[vnode.key] = null;
          }
          if (expectsCSS) {
            removeTransitionClass(el, leaveActiveClass);
          }
          if (cb.cancelled) {
            if (expectsCSS) {
              removeTransitionClass(el, leaveClass);
            }
            leaveCancelled && leaveCancelled(el);
          } else {
            rm();
            afterLeave && afterLeave(el);
          }
          el._leaveCb = null;
        });
        if (delayLeave) {
          delayLeave(performLeave);
        } else {
          performLeave();
        }
        function performLeave() {
          if (cb.cancelled) {
            return;
          }
          if (!vnode.data.show) {
            (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
          }
          beforeLeave && beforeLeave(el);
          if (expectsCSS) {
            addTransitionClass(el, leaveClass);
            addTransitionClass(el, leaveActiveClass);
            nextFrame(function () {
              removeTransitionClass(el, leaveClass);
              if (!cb.cancelled && !userWantsControl) {
                whenTransitionEnds(el, type, cb);
              }
            });
          }
          leave && leave(el, cb);
          if (!expectsCSS && !userWantsControl) {
            cb();
          }
        }
      }
      function resolveTransition(def$$1) {
        if (!def$$1) {
          return;
        }
        if (typeof def$$1 === 'object') {
          var res = {};
          if (def$$1.css !== false) {
            extend(res, autoCssTransition(def$$1.name || 'v'));
          }
          extend(res, def$$1);
          return res;
        } else if (typeof def$$1 === 'string') {
          return autoCssTransition(def$$1);
        }
      }
      var autoCssTransition = cached(function (name) {
        return {
          enterClass: name + "-enter",
          leaveClass: name + "-leave",
          appearClass: name + "-enter",
          enterActiveClass: name + "-enter-active",
          leaveActiveClass: name + "-leave-active",
          appearActiveClass: name + "-enter-active"
        };
      });
      function once(fn) {
        var called = false;
        return function () {
          if (!called) {
            called = true;
            fn();
          }
        };
      }
      var transition = inBrowser ? {
        create: function create(_, vnode) {
          if (!vnode.data.show) {
            enter(vnode);
          }
        },
        remove: function remove(vnode, rm) {
          if (!vnode.data.show) {
            leave(vnode, rm);
          } else {
            rm();
          }
        }
      } : {};
      var platformModules = [attrs, klass, events, domProps, style, transition];
      var modules = platformModules.concat(baseModules);
      var patch$1 = createPatchFunction({
        nodeOps: nodeOps,
        modules: modules
      });
      var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;
      if (isIE9) {
        document.addEventListener('selectionchange', function () {
          var el = document.activeElement;
          if (el && el.vmodel) {
            trigger(el, 'input');
          }
        });
      }
      var model = {
        inserted: function inserted(el, binding, vnode) {
          {
            if (!modelableTagRE.test(vnode.tag)) {
              warn("v-model is not supported on element type: <" + vnode.tag + ">. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.', vnode.context);
            }
          }
          if (vnode.tag === 'select') {
            var cb = function () {
              setSelected(el, binding, vnode.context);
            };
            cb();
            if (isIE || isEdge) {
              setTimeout(cb, 0);
            }
          } else if ((vnode.tag === 'textarea' || el.type === 'text') && !binding.modifiers.lazy) {
            if (!isAndroid) {
              el.addEventListener('compositionstart', onCompositionStart);
              el.addEventListener('compositionend', onCompositionEnd);
            }
            if (isIE9) {
              el.vmodel = true;
            }
          }
        },
        componentUpdated: function componentUpdated(el, binding, vnode) {
          if (vnode.tag === 'select') {
            setSelected(el, binding, vnode.context);
            var needReset = el.multiple ? binding.value.some(function (v) {
              return hasNoMatchingOption(v, el.options);
            }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
            if (needReset) {
              trigger(el, 'change');
            }
          }
        }
      };
      function setSelected(el, binding, vm) {
        var value = binding.value;
        var isMultiple = el.multiple;
        if (isMultiple && !Array.isArray(value)) {
          "development" !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
          return;
        }
        var selected, option;
        for (var i = 0, l = el.options.length; i < l; i++) {
          option = el.options[i];
          if (isMultiple) {
            selected = looseIndexOf(value, getValue(option)) > -1;
            if (option.selected !== selected) {
              option.selected = selected;
            }
          } else {
            if (looseEqual(getValue(option), value)) {
              if (el.selectedIndex !== i) {
                el.selectedIndex = i;
              }
              return;
            }
          }
        }
        if (!isMultiple) {
          el.selectedIndex = -1;
        }
      }
      function hasNoMatchingOption(value, options) {
        for (var i = 0, l = options.length; i < l; i++) {
          if (looseEqual(getValue(options[i]), value)) {
            return false;
          }
        }
        return true;
      }
      function getValue(option) {
        return '_value' in option ? option._value : option.value;
      }
      function onCompositionStart(e) {
        e.target.composing = true;
      }
      function onCompositionEnd(e) {
        e.target.composing = false;
        trigger(e.target, 'input');
      }
      function trigger(el, type) {
        var e = document.createEvent('HTMLEvents');
        e.initEvent(type, true, true);
        el.dispatchEvent(e);
      }
      function locateNode(vnode) {
        return vnode.child && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.child._vnode) : vnode;
      }
      var show = {
        bind: function bind(el, ref, vnode) {
          var value = ref.value;
          vnode = locateNode(vnode);
          var transition = vnode.data && vnode.data.transition;
          if (value && transition && !isIE9) {
            enter(vnode);
          }
          var originalDisplay = el.style.display === 'none' ? '' : el.style.display;
          el.style.display = value ? originalDisplay : 'none';
          el.__vOriginalDisplay = originalDisplay;
        },
        update: function update(el, ref, vnode) {
          var value = ref.value;
          var oldValue = ref.oldValue;
          if (value === oldValue) {
            return;
          }
          vnode = locateNode(vnode);
          var transition = vnode.data && vnode.data.transition;
          if (transition && !isIE9) {
            if (value) {
              enter(vnode);
              el.style.display = el.__vOriginalDisplay;
            } else {
              leave(vnode, function () {
                el.style.display = 'none';
              });
            }
          } else {
            el.style.display = value ? el.__vOriginalDisplay : 'none';
          }
        }
      };
      var platformDirectives = {
        model: model,
        show: show
      };
      var transitionProps = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String
      };
      function getRealChild(vnode) {
        var compOptions = vnode && vnode.componentOptions;
        if (compOptions && compOptions.Ctor.options.abstract) {
          return getRealChild(getFirstComponentChild(compOptions.children));
        } else {
          return vnode;
        }
      }
      function extractTransitionData(comp) {
        var data = {};
        var options = comp.$options;
        for (var key in options.propsData) {
          data[key] = comp[key];
        }
        var listeners = options._parentListeners;
        for (var key$1 in listeners) {
          data[camelize(key$1)] = listeners[key$1].fn;
        }
        return data;
      }
      function placeholder(h, rawChild) {
        return (/\d-keep-alive$/.test(rawChild.tag) ? h('keep-alive') : null
        );
      }
      function hasParentTransition(vnode) {
        while (vnode = vnode.parent) {
          if (vnode.data.transition) {
            return true;
          }
        }
      }
      var Transition = {
        name: 'transition',
        props: transitionProps,
        abstract: true,
        render: function render(h) {
          var this$1 = this;
          var children = this.$slots.default;
          if (!children) {
            return;
          }
          children = children.filter(function (c) {
            return c.tag;
          });
          if (!children.length) {
            return;
          }
          if ("development" !== 'production' && children.length > 1) {
            warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
          }
          var mode = this.mode;
          if ("development" !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
            warn('invalid <transition> mode: ' + mode, this.$parent);
          }
          var rawChild = children[0];
          if (hasParentTransition(this.$vnode)) {
            return rawChild;
          }
          var child = getRealChild(rawChild);
          if (!child) {
            return rawChild;
          }
          if (this._leaving) {
            return placeholder(h, rawChild);
          }
          var key = child.key = child.key == null || child.isStatic ? "__v" + (child.tag + this._uid) + "__" : child.key;
          var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
          var oldRawChild = this._vnode;
          var oldChild = getRealChild(oldRawChild);
          if (child.data.directives && child.data.directives.some(function (d) {
            return d.name === 'show';
          })) {
            child.data.show = true;
          }
          if (oldChild && oldChild.data && oldChild.key !== key) {
            var oldData = oldChild.data.transition = extend({}, data);
            if (mode === 'out-in') {
              this._leaving = true;
              mergeVNodeHook(oldData, 'afterLeave', function () {
                this$1._leaving = false;
                this$1.$forceUpdate();
              }, key);
              return placeholder(h, rawChild);
            } else if (mode === 'in-out') {
              var delayedLeave;
              var performLeave = function () {
                delayedLeave();
              };
              mergeVNodeHook(data, 'afterEnter', performLeave, key);
              mergeVNodeHook(data, 'enterCancelled', performLeave, key);
              mergeVNodeHook(oldData, 'delayLeave', function (leave) {
                delayedLeave = leave;
              }, key);
            }
          }
          return rawChild;
        }
      };
      var props = extend({
        tag: String,
        moveClass: String
      }, transitionProps);
      delete props.mode;
      var TransitionGroup = {
        props: props,
        render: function render(h) {
          var tag = this.tag || this.$vnode.data.tag || 'span';
          var map = Object.create(null);
          var prevChildren = this.prevChildren = this.children;
          var rawChildren = this.$slots.default || [];
          var children = this.children = [];
          var transitionData = extractTransitionData(this);
          for (var i = 0; i < rawChildren.length; i++) {
            var c = rawChildren[i];
            if (c.tag) {
              if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                children.push(c);
                map[c.key] = c;
                ;
                (c.data || (c.data = {})).transition = transitionData;
              } else {
                var opts = c.componentOptions;
                var name = opts ? opts.Ctor.options.name || opts.tag : c.tag;
                warn("<transition-group> children must be keyed: <" + name + ">");
              }
            }
          }
          if (prevChildren) {
            var kept = [];
            var removed = [];
            for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
              var c$1 = prevChildren[i$1];
              c$1.data.transition = transitionData;
              c$1.data.pos = c$1.elm.getBoundingClientRect();
              if (map[c$1.key]) {
                kept.push(c$1);
              } else {
                removed.push(c$1);
              }
            }
            this.kept = h(tag, null, kept);
            this.removed = removed;
          }
          return h(tag, null, children);
        },
        beforeUpdate: function beforeUpdate() {
          this.__patch__(this._vnode, this.kept, false, true);
          this._vnode = this.kept;
        },
        updated: function updated() {
          var children = this.prevChildren;
          var moveClass = this.moveClass || this.name + '-move';
          if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
            return;
          }
          children.forEach(callPendingCbs);
          children.forEach(recordPosition);
          children.forEach(applyTranslation);
          var f = document.body.offsetHeight;
          children.forEach(function (c) {
            if (c.data.moved) {
              var el = c.elm;
              var s = el.style;
              addTransitionClass(el, moveClass);
              s.transform = s.WebkitTransform = s.transitionDuration = '';
              el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                if (!e || /transform$/.test(e.propertyName)) {
                  el.removeEventListener(transitionEndEvent, cb);
                  el._moveCb = null;
                  removeTransitionClass(el, moveClass);
                }
              });
            }
          });
        },
        methods: { hasMove: function hasMove(el, moveClass) {
            if (!hasTransition) {
              return false;
            }
            if (this._hasMove != null) {
              return this._hasMove;
            }
            addTransitionClass(el, moveClass);
            var info = getTransitionInfo(el);
            removeTransitionClass(el, moveClass);
            return this._hasMove = info.hasTransform;
          } }
      };
      function callPendingCbs(c) {
        if (c.elm._moveCb) {
          c.elm._moveCb();
        }
        if (c.elm._enterCb) {
          c.elm._enterCb();
        }
      }
      function recordPosition(c) {
        c.data.newPos = c.elm.getBoundingClientRect();
      }
      function applyTranslation(c) {
        var oldPos = c.data.pos;
        var newPos = c.data.newPos;
        var dx = oldPos.left - newPos.left;
        var dy = oldPos.top - newPos.top;
        if (dx || dy) {
          c.data.moved = true;
          var s = c.elm.style;
          s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
          s.transitionDuration = '0s';
        }
      }
      var platformComponents = {
        Transition: Transition,
        TransitionGroup: TransitionGroup
      };
      Vue$2.config.isUnknownElement = isUnknownElement;
      Vue$2.config.isReservedTag = isReservedTag;
      Vue$2.config.getTagNamespace = getTagNamespace;
      Vue$2.config.mustUseProp = mustUseProp;
      extend(Vue$2.options.directives, platformDirectives);
      extend(Vue$2.options.components, platformComponents);
      Vue$2.prototype.__patch__ = config._isServer ? noop : patch$1;
      Vue$2.prototype.$mount = function (el, hydrating) {
        el = el && !config._isServer ? query(el) : undefined;
        return this._mount(el, hydrating);
      };
      setTimeout(function () {
        if (config.devtools) {
          if (devtools) {
            devtools.emit('init', Vue$2);
          } else if ("development" !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
            console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
          }
        }
      }, 0);
      function shouldDecode(content, encoded) {
        var div = document.createElement('div');
        div.innerHTML = "<div a=\"" + content + "\">";
        return div.innerHTML.indexOf(encoded) > 0;
      }
      var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;
      var decoder = document.createElement('div');
      function decode(html) {
        decoder.innerHTML = html;
        return decoder.textContent;
      }
      var singleAttrIdentifier = /([^\s"'<>/=]+)/;
      var singleAttrAssign = /(?:=)/;
      var singleAttrValues = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source];
      var attribute = new RegExp('^\\s*' + singleAttrIdentifier.source + '(?:\\s*(' + singleAttrAssign.source + ')' + '\\s*(?:' + singleAttrValues.join('|') + '))?');
      var ncname = '[a-zA-Z_][\\w\\-\\.]*';
      var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
      var startTagOpen = new RegExp('^<' + qnameCapture);
      var startTagClose = /^\s*(\/?)>/;
      var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
      var doctype = /^<!DOCTYPE [^>]+>/i;
      var comment = /^<!--/;
      var conditionalComment = /^<!\[/;
      var IS_REGEX_CAPTURING_BROKEN = false;
      'x'.replace(/x(.)?/g, function (m, g) {
        IS_REGEX_CAPTURING_BROKEN = g === '';
      });
      var isScriptOrStyle = makeMap('script,style', true);
      var hasLang = function (attr) {
        return attr.name === 'lang' && attr.value !== 'html';
      };
      var isSpecialTag = function (tag, isSFC, stack) {
        if (isScriptOrStyle(tag)) {
          return true;
        }
        if (isSFC && tag === 'template' && stack.length === 1 && stack[0].attrs.some(hasLang)) {
          return true;
        }
        return false;
      };
      var reCache = {};
      var ltRE = /&lt;/g;
      var gtRE = /&gt;/g;
      var nlRE = /&#10;/g;
      var ampRE = /&amp;/g;
      var quoteRE = /&quot;/g;
      function decodeAttr(value, shouldDecodeNewlines) {
        if (shouldDecodeNewlines) {
          value = value.replace(nlRE, '\n');
        }
        return value.replace(ltRE, '<').replace(gtRE, '>').replace(ampRE, '&').replace(quoteRE, '"');
      }
      function parseHTML(html, options) {
        var stack = [];
        var expectHTML = options.expectHTML;
        var isUnaryTag$$1 = options.isUnaryTag || no;
        var index = 0;
        var last, lastTag;
        while (html) {
          last = html;
          if (!lastTag || !isSpecialTag(lastTag, options.sfc, stack)) {
            var textEnd = html.indexOf('<');
            if (textEnd === 0) {
              if (comment.test(html)) {
                var commentEnd = html.indexOf('-->');
                if (commentEnd >= 0) {
                  advance(commentEnd + 3);
                  continue;
                }
              }
              if (conditionalComment.test(html)) {
                var conditionalEnd = html.indexOf(']>');
                if (conditionalEnd >= 0) {
                  advance(conditionalEnd + 2);
                  continue;
                }
              }
              var doctypeMatch = html.match(doctype);
              if (doctypeMatch) {
                advance(doctypeMatch[0].length);
                continue;
              }
              var endTagMatch = html.match(endTag);
              if (endTagMatch) {
                var curIndex = index;
                advance(endTagMatch[0].length);
                parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
                continue;
              }
              var startTagMatch = parseStartTag();
              if (startTagMatch) {
                handleStartTag(startTagMatch);
                continue;
              }
            }
            var text = void 0,
                rest$1 = void 0,
                next = void 0;
            if (textEnd > 0) {
              rest$1 = html.slice(textEnd);
              while (!endTag.test(rest$1) && !startTagOpen.test(rest$1) && !comment.test(rest$1) && !conditionalComment.test(rest$1)) {
                next = rest$1.indexOf('<', 1);
                if (next < 0) {
                  break;
                }
                textEnd += next;
                rest$1 = html.slice(textEnd);
              }
              text = html.substring(0, textEnd);
              advance(textEnd);
            }
            if (textEnd < 0) {
              text = html;
              html = '';
            }
            if (options.chars && text) {
              options.chars(text);
            }
          } else {
            var stackedTag = lastTag.toLowerCase();
            var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
            var endTagLength = 0;
            var rest = html.replace(reStackedTag, function (all, text, endTag) {
              endTagLength = endTag.length;
              if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
                text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
              }
              if (options.chars) {
                options.chars(text);
              }
              return '';
            });
            index += html.length - rest.length;
            html = rest;
            parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
          }
          if (html === last && options.chars) {
            options.chars(html);
            break;
          }
        }
        parseEndTag();
        function advance(n) {
          index += n;
          html = html.substring(n);
        }
        function parseStartTag() {
          var start = html.match(startTagOpen);
          if (start) {
            var match = {
              tagName: start[1],
              attrs: [],
              start: index
            };
            advance(start[0].length);
            var end, attr;
            while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
              advance(attr[0].length);
              match.attrs.push(attr);
            }
            if (end) {
              match.unarySlash = end[1];
              advance(end[0].length);
              match.end = index;
              return match;
            }
          }
        }
        function handleStartTag(match) {
          var tagName = match.tagName;
          var unarySlash = match.unarySlash;
          if (expectHTML) {
            if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
              parseEndTag('', lastTag);
            }
            if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
              parseEndTag('', tagName);
            }
          }
          var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;
          var l = match.attrs.length;
          var attrs = new Array(l);
          for (var i = 0; i < l; i++) {
            var args = match.attrs[i];
            if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
              if (args[3] === '') {
                delete args[3];
              }
              if (args[4] === '') {
                delete args[4];
              }
              if (args[5] === '') {
                delete args[5];
              }
            }
            var value = args[3] || args[4] || args[5] || '';
            attrs[i] = {
              name: args[1],
              value: decodeAttr(value, options.shouldDecodeNewlines)
            };
          }
          if (!unary) {
            stack.push({
              tag: tagName,
              attrs: attrs
            });
            lastTag = tagName;
            unarySlash = '';
          }
          if (options.start) {
            options.start(tagName, attrs, unary, match.start, match.end);
          }
        }
        function parseEndTag(tag, tagName, start, end) {
          var pos;
          if (start == null) {
            start = index;
          }
          if (end == null) {
            end = index;
          }
          if (tagName) {
            var needle = tagName.toLowerCase();
            for (pos = stack.length - 1; pos >= 0; pos--) {
              if (stack[pos].tag.toLowerCase() === needle) {
                break;
              }
            }
          } else {
            pos = 0;
          }
          if (pos >= 0) {
            for (var i = stack.length - 1; i >= pos; i--) {
              if (options.end) {
                options.end(stack[i].tag, start, end);
              }
            }
            stack.length = pos;
            lastTag = pos && stack[pos - 1].tag;
          } else if (tagName.toLowerCase() === 'br') {
            if (options.start) {
              options.start(tagName, [], true, start, end);
            }
          } else if (tagName.toLowerCase() === 'p') {
            if (options.start) {
              options.start(tagName, [], false, start, end);
            }
            if (options.end) {
              options.end(tagName, start, end);
            }
          }
        }
      }
      function parseFilters(exp) {
        var inSingle = false;
        var inDouble = false;
        var curly = 0;
        var square = 0;
        var paren = 0;
        var lastFilterIndex = 0;
        var c, prev, i, expression, filters;
        for (i = 0; i < exp.length; i++) {
          prev = c;
          c = exp.charCodeAt(i);
          if (inSingle) {
            if (c === 0x27 && prev !== 0x5C) {
              inSingle = !inSingle;
            }
          } else if (inDouble) {
            if (c === 0x22 && prev !== 0x5C) {
              inDouble = !inDouble;
            }
          } else if (c === 0x7C && exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
            if (expression === undefined) {
              lastFilterIndex = i + 1;
              expression = exp.slice(0, i).trim();
            } else {
              pushFilter();
            }
          } else {
            switch (c) {
              case 0x22:
                inDouble = true;
                break;
              case 0x27:
                inSingle = true;
                break;
              case 0x28:
                paren++;
                break;
              case 0x29:
                paren--;
                break;
              case 0x5B:
                square++;
                break;
              case 0x5D:
                square--;
                break;
              case 0x7B:
                curly++;
                break;
              case 0x7D:
                curly--;
                break;
            }
          }
        }
        if (expression === undefined) {
          expression = exp.slice(0, i).trim();
        } else if (lastFilterIndex !== 0) {
          pushFilter();
        }
        function pushFilter() {
          (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
          lastFilterIndex = i + 1;
        }
        if (filters) {
          for (i = 0; i < filters.length; i++) {
            expression = wrapFilter(expression, filters[i]);
          }
        }
        return expression;
      }
      function wrapFilter(exp, filter) {
        var i = filter.indexOf('(');
        if (i < 0) {
          return "_f(\"" + filter + "\")(" + exp + ")";
        } else {
          var name = filter.slice(0, i);
          var args = filter.slice(i + 1);
          return "_f(\"" + name + "\")(" + exp + "," + args;
        }
      }
      var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
      var regexEscapeRE = /[-.*+?^${}()|[\]/\\]/g;
      var buildRegex = cached(function (delimiters) {
        var open = delimiters[0].replace(regexEscapeRE, '\\$&');
        var close = delimiters[1].replace(regexEscapeRE, '\\$&');
        return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
      });
      function parseText(text, delimiters) {
        var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
        if (!tagRE.test(text)) {
          return;
        }
        var tokens = [];
        var lastIndex = tagRE.lastIndex = 0;
        var match, index;
        while (match = tagRE.exec(text)) {
          index = match.index;
          if (index > lastIndex) {
            tokens.push(JSON.stringify(text.slice(lastIndex, index)));
          }
          var exp = parseFilters(match[1].trim());
          tokens.push("_s(" + exp + ")");
          lastIndex = index + match[0].length;
        }
        if (lastIndex < text.length) {
          tokens.push(JSON.stringify(text.slice(lastIndex)));
        }
        return tokens.join('+');
      }
      function baseWarn(msg) {
        console.error("[Vue parser]: " + msg);
      }
      function pluckModuleFunction(modules, key) {
        return modules ? modules.map(function (m) {
          return m[key];
        }).filter(function (_) {
          return _;
        }) : [];
      }
      function addProp(el, name, value) {
        (el.props || (el.props = [])).push({
          name: name,
          value: value
        });
      }
      function addAttr(el, name, value) {
        (el.attrs || (el.attrs = [])).push({
          name: name,
          value: value
        });
      }
      function addDirective(el, name, rawName, value, arg, modifiers) {
        (el.directives || (el.directives = [])).push({
          name: name,
          rawName: rawName,
          value: value,
          arg: arg,
          modifiers: modifiers
        });
      }
      function addHandler(el, name, value, modifiers, important) {
        if (modifiers && modifiers.capture) {
          delete modifiers.capture;
          name = '!' + name;
        }
        var events;
        if (modifiers && modifiers.native) {
          delete modifiers.native;
          events = el.nativeEvents || (el.nativeEvents = {});
        } else {
          events = el.events || (el.events = {});
        }
        var newHandler = {
          value: value,
          modifiers: modifiers
        };
        var handlers = events[name];
        if (Array.isArray(handlers)) {
          important ? handlers.unshift(newHandler) : handlers.push(newHandler);
        } else if (handlers) {
          events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
        } else {
          events[name] = newHandler;
        }
      }
      function getBindingAttr(el, name, getStatic) {
        var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
        if (dynamicValue != null) {
          return dynamicValue;
        } else if (getStatic !== false) {
          var staticValue = getAndRemoveAttr(el, name);
          if (staticValue != null) {
            return JSON.stringify(staticValue);
          }
        }
      }
      function getAndRemoveAttr(el, name) {
        var val;
        if ((val = el.attrsMap[name]) != null) {
          var list = el.attrsList;
          for (var i = 0, l = list.length; i < l; i++) {
            if (list[i].name === name) {
              list.splice(i, 1);
              break;
            }
          }
        }
        return val;
      }
      var dirRE = /^v-|^@|^:/;
      var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
      var forIteratorRE = /\(([^,]*),([^,]*)(?:,([^,]*))?\)/;
      var bindRE = /^:|^v-bind:/;
      var onRE = /^@|^v-on:/;
      var argRE = /:(.*)$/;
      var modifierRE = /\.[^.]+/g;
      var specialNewlineRE = /\u2028|\u2029/g;
      var decodeHTMLCached = cached(decode);
      var warn$1;
      var platformGetTagNamespace;
      var platformMustUseProp;
      var platformIsPreTag;
      var preTransforms;
      var transforms;
      var postTransforms;
      var delimiters;
      function parse(template, options) {
        warn$1 = options.warn || baseWarn;
        platformGetTagNamespace = options.getTagNamespace || no;
        platformMustUseProp = options.mustUseProp || no;
        platformIsPreTag = options.isPreTag || no;
        preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
        transforms = pluckModuleFunction(options.modules, 'transformNode');
        postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
        delimiters = options.delimiters;
        var stack = [];
        var preserveWhitespace = options.preserveWhitespace !== false;
        var root;
        var currentParent;
        var inVPre = false;
        var inPre = false;
        var warned = false;
        parseHTML(template, {
          expectHTML: options.expectHTML,
          isUnaryTag: options.isUnaryTag,
          shouldDecodeNewlines: options.shouldDecodeNewlines,
          start: function start(tag, attrs, unary) {
            var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);
            if (options.isIE && ns === 'svg') {
              attrs = guardIESVGBug(attrs);
            }
            var element = {
              type: 1,
              tag: tag,
              attrsList: attrs,
              attrsMap: makeAttrsMap(attrs, options.isIE),
              parent: currentParent,
              children: []
            };
            if (ns) {
              element.ns = ns;
            }
            if ("client" !== 'server' && isForbiddenTag(element)) {
              element.forbidden = true;
              "development" !== 'production' && warn$1('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">.");
            }
            for (var i = 0; i < preTransforms.length; i++) {
              preTransforms[i](element, options);
            }
            if (!inVPre) {
              processPre(element);
              if (element.pre) {
                inVPre = true;
              }
            }
            if (platformIsPreTag(element.tag)) {
              inPre = true;
            }
            if (inVPre) {
              processRawAttrs(element);
            } else {
              processFor(element);
              processIf(element);
              processOnce(element);
              processKey(element);
              element.plain = !element.key && !attrs.length;
              processRef(element);
              processSlot(element);
              processComponent(element);
              for (var i$1 = 0; i$1 < transforms.length; i$1++) {
                transforms[i$1](element, options);
              }
              processAttrs(element);
            }
            function checkRootConstraints(el) {
              if ("development" !== 'production' && !warned) {
                if (el.tag === 'slot' || el.tag === 'template') {
                  warned = true;
                  warn$1("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes:\n' + template);
                }
                if (el.attrsMap.hasOwnProperty('v-for')) {
                  warned = true;
                  warn$1('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements:\n' + template);
                }
              }
            }
            if (!root) {
              root = element;
              checkRootConstraints(root);
            } else if (!stack.length) {
              if (root.if && element.else) {
                checkRootConstraints(element);
                root.elseBlock = element;
              } else if ("development" !== 'production' && !warned) {
                warned = true;
                warn$1("Component template should contain exactly one root element:\n\n" + template);
              }
            }
            if (currentParent && !element.forbidden) {
              if (element.else) {
                processElse(element, currentParent);
              } else {
                currentParent.children.push(element);
                element.parent = currentParent;
              }
            }
            if (!unary) {
              currentParent = element;
              stack.push(element);
            }
            for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
              postTransforms[i$2](element, options);
            }
          },
          end: function end() {
            var element = stack[stack.length - 1];
            var lastNode = element.children[element.children.length - 1];
            if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
              element.children.pop();
            }
            stack.length -= 1;
            currentParent = stack[stack.length - 1];
            if (element.pre) {
              inVPre = false;
            }
            if (platformIsPreTag(element.tag)) {
              inPre = false;
            }
          },
          chars: function chars(text) {
            if (!currentParent) {
              if ("development" !== 'production' && !warned && text === template) {
                warned = true;
                warn$1('Component template requires a root element, rather than just text:\n\n' + template);
              }
              return;
            }
            text = inPre || text.trim() ? decodeHTMLCached(text) : preserveWhitespace && currentParent.children.length ? ' ' : '';
            if (text) {
              var expression;
              if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
                currentParent.children.push({
                  type: 2,
                  expression: expression,
                  text: text
                });
              } else {
                text = text.replace(specialNewlineRE, '');
                currentParent.children.push({
                  type: 3,
                  text: text
                });
              }
            }
          }
        });
        return root;
      }
      function processPre(el) {
        if (getAndRemoveAttr(el, 'v-pre') != null) {
          el.pre = true;
        }
      }
      function processRawAttrs(el) {
        var l = el.attrsList.length;
        if (l) {
          var attrs = el.attrs = new Array(l);
          for (var i = 0; i < l; i++) {
            attrs[i] = {
              name: el.attrsList[i].name,
              value: JSON.stringify(el.attrsList[i].value)
            };
          }
        } else if (!el.pre) {
          el.plain = true;
        }
      }
      function processKey(el) {
        var exp = getBindingAttr(el, 'key');
        if (exp) {
          if ("development" !== 'production' && el.tag === 'template') {
            warn$1("<template> cannot be keyed. Place the key on real elements instead.");
          }
          el.key = exp;
        }
      }
      function processRef(el) {
        var ref = getBindingAttr(el, 'ref');
        if (ref) {
          el.ref = ref;
          el.refInFor = checkInFor(el);
        }
      }
      function processFor(el) {
        var exp;
        if (exp = getAndRemoveAttr(el, 'v-for')) {
          var inMatch = exp.match(forAliasRE);
          if (!inMatch) {
            "development" !== 'production' && warn$1("Invalid v-for expression: " + exp);
            return;
          }
          el.for = inMatch[2].trim();
          var alias = inMatch[1].trim();
          var iteratorMatch = alias.match(forIteratorRE);
          if (iteratorMatch) {
            el.alias = iteratorMatch[1].trim();
            el.iterator1 = iteratorMatch[2].trim();
            if (iteratorMatch[3]) {
              el.iterator2 = iteratorMatch[3].trim();
            }
          } else {
            el.alias = alias;
          }
        }
      }
      function processIf(el) {
        var exp = getAndRemoveAttr(el, 'v-if');
        if (exp) {
          el.if = exp;
        }
        if (getAndRemoveAttr(el, 'v-else') != null) {
          el.else = true;
        }
      }
      function processElse(el, parent) {
        var prev = findPrevElement(parent.children);
        if (prev && prev.if) {
          prev.elseBlock = el;
        } else {
          warn$1("v-else used on element <" + el.tag + "> without corresponding v-if.");
        }
      }
      function processOnce(el) {
        var once = getAndRemoveAttr(el, 'v-once');
        if (once != null) {
          el.once = true;
        }
      }
      function processSlot(el) {
        if (el.tag === 'slot') {
          el.slotName = getBindingAttr(el, 'name');
        } else {
          var slotTarget = getBindingAttr(el, 'slot');
          if (slotTarget) {
            el.slotTarget = slotTarget;
          }
        }
      }
      function processComponent(el) {
        var binding;
        if (binding = getBindingAttr(el, 'is')) {
          el.component = binding;
        }
        if (getAndRemoveAttr(el, 'inline-template') != null) {
          el.inlineTemplate = true;
        }
      }
      function processAttrs(el) {
        var list = el.attrsList;
        var i, l, name, rawName, value, arg, modifiers, isProp;
        for (i = 0, l = list.length; i < l; i++) {
          name = rawName = list[i].name;
          value = list[i].value;
          if (dirRE.test(name)) {
            el.hasBindings = true;
            modifiers = parseModifiers(name);
            if (modifiers) {
              name = name.replace(modifierRE, '');
            }
            if (bindRE.test(name)) {
              name = name.replace(bindRE, '');
              if (modifiers && modifiers.prop) {
                isProp = true;
                name = camelize(name);
                if (name === 'innerHtml') {
                  name = 'innerHTML';
                }
              }
              if (isProp || platformMustUseProp(name)) {
                addProp(el, name, value);
              } else {
                addAttr(el, name, value);
              }
            } else if (onRE.test(name)) {
              name = name.replace(onRE, '');
              addHandler(el, name, value, modifiers);
            } else {
              name = name.replace(dirRE, '');
              var argMatch = name.match(argRE);
              if (argMatch && (arg = argMatch[1])) {
                name = name.slice(0, -(arg.length + 1));
              }
              addDirective(el, name, rawName, value, arg, modifiers);
              if ("development" !== 'production' && name === 'model') {
                checkForAliasModel(el, value);
              }
            }
          } else {
            {
              var expression = parseText(value, delimiters);
              if (expression) {
                warn$1(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');
              }
            }
            addAttr(el, name, JSON.stringify(value));
          }
        }
      }
      function checkInFor(el) {
        var parent = el;
        while (parent) {
          if (parent.for !== undefined) {
            return true;
          }
          parent = parent.parent;
        }
        return false;
      }
      function parseModifiers(name) {
        var match = name.match(modifierRE);
        if (match) {
          var ret = {};
          match.forEach(function (m) {
            ret[m.slice(1)] = true;
          });
          return ret;
        }
      }
      function makeAttrsMap(attrs, isIE) {
        var map = {};
        for (var i = 0, l = attrs.length; i < l; i++) {
          if ("development" !== 'production' && map[attrs[i].name] && !isIE) {
            warn$1('duplicate attribute: ' + attrs[i].name);
          }
          map[attrs[i].name] = attrs[i].value;
        }
        return map;
      }
      function findPrevElement(children) {
        var i = children.length;
        while (i--) {
          if (children[i].tag) {
            return children[i];
          }
        }
      }
      function isForbiddenTag(el) {
        return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
      }
      var ieNSBug = /^xmlns:NS\d+/;
      var ieNSPrefix = /^NS\d+:/;
      function guardIESVGBug(attrs) {
        var res = [];
        for (var i = 0; i < attrs.length; i++) {
          var attr = attrs[i];
          if (!ieNSBug.test(attr.name)) {
            attr.name = attr.name.replace(ieNSPrefix, '');
            res.push(attr);
          }
        }
        return res;
      }
      function checkForAliasModel(el, value) {
        var _el = el;
        while (_el) {
          if (_el.for && _el.alias === value) {
            warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
          }
          _el = _el.parent;
        }
      }
      var isStaticKey;
      var isPlatformReservedTag;
      var genStaticKeysCached = cached(genStaticKeys$1);
      function optimize(root, options) {
        if (!root) {
          return;
        }
        isStaticKey = genStaticKeysCached(options.staticKeys || '');
        isPlatformReservedTag = options.isReservedTag || function () {
          return false;
        };
        markStatic(root);
        markStaticRoots(root, false);
      }
      function genStaticKeys$1(keys) {
        return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
      }
      function markStatic(node) {
        node.static = isStatic(node);
        if (node.type === 1) {
          for (var i = 0, l = node.children.length; i < l; i++) {
            var child = node.children[i];
            markStatic(child);
            if (!child.static) {
              node.static = false;
            }
          }
        }
      }
      function markStaticRoots(node, isInFor) {
        if (node.type === 1) {
          if (node.static || node.once) {
            node.staticInFor = isInFor;
          }
          if (node.static) {
            node.staticRoot = true;
            return;
          }
          if (node.children) {
            for (var i = 0, l = node.children.length; i < l; i++) {
              markStaticRoots(node.children[i], isInFor || !!node.for);
            }
          }
        }
      }
      function isStatic(node) {
        if (node.type === 2) {
          return false;
        }
        if (node.type === 3) {
          return true;
        }
        return !!(node.pre || !node.hasBindings && !node.if && !node.for && !isBuiltInTag(node.tag) && isPlatformReservedTag(node.tag) && !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
      }
      function isDirectChildOfTemplateFor(node) {
        while (node.parent) {
          node = node.parent;
          if (node.tag !== 'template') {
            return false;
          }
          if (node.for) {
            return true;
          }
        }
        return false;
      }
      var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;
      var keyCodes = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        up: 38,
        left: 37,
        right: 39,
        down: 40,
        'delete': [8, 46]
      };
      var modifierCode = {
        stop: '$event.stopPropagation();',
        prevent: '$event.preventDefault();',
        self: 'if($event.target !== $event.currentTarget)return;'
      };
      function genHandlers(events, native) {
        var res = native ? 'nativeOn:{' : 'on:{';
        for (var name in events) {
          res += "\"" + name + "\":" + genHandler(events[name]) + ",";
        }
        return res.slice(0, -1) + '}';
      }
      function genHandler(handler) {
        if (!handler) {
          return 'function(){}';
        } else if (Array.isArray(handler)) {
          return "[" + handler.map(genHandler).join(',') + "]";
        } else if (!handler.modifiers) {
          return simplePathRE.test(handler.value) ? handler.value : "function($event){" + handler.value + "}";
        } else {
          var code = '';
          var keys = [];
          for (var key in handler.modifiers) {
            if (modifierCode[key]) {
              code += modifierCode[key];
            } else {
              keys.push(key);
            }
          }
          if (keys.length) {
            code = genKeyFilter(keys) + code;
          }
          var handlerCode = simplePathRE.test(handler.value) ? handler.value + '($event)' : handler.value;
          return 'function($event){' + code + handlerCode + '}';
        }
      }
      function genKeyFilter(keys) {
        var code = keys.length === 1 ? normalizeKeyCode(keys[0]) : Array.prototype.concat.apply([], keys.map(normalizeKeyCode));
        if (Array.isArray(code)) {
          return "if(" + code.map(function (c) {
            return "$event.keyCode!==" + c;
          }).join('&&') + ")return;";
        } else {
          return "if($event.keyCode!==" + code + ")return;";
        }
      }
      function normalizeKeyCode(key) {
        return parseInt(key, 10) || keyCodes[key] || "_k(" + JSON.stringify(key) + ")";
      }
      function bind$2(el, dir) {
        el.wrapData = function (code) {
          return "_b(" + code + "," + dir.value + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")";
        };
      }
      var baseDirectives = {
        bind: bind$2,
        cloak: noop
      };
      var warn$2;
      var transforms$1;
      var dataGenFns;
      var platformDirectives$1;
      var staticRenderFns;
      var onceCount;
      var currentOptions;
      function generate(ast, options) {
        var prevStaticRenderFns = staticRenderFns;
        var currentStaticRenderFns = staticRenderFns = [];
        var prevOnceCount = onceCount;
        onceCount = 0;
        currentOptions = options;
        warn$2 = options.warn || baseWarn;
        transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
        dataGenFns = pluckModuleFunction(options.modules, 'genData');
        platformDirectives$1 = options.directives || {};
        var code = ast ? genElement(ast) : '_h("div")';
        staticRenderFns = prevStaticRenderFns;
        onceCount = prevOnceCount;
        return {
          render: "with(this){return " + code + "}",
          staticRenderFns: currentStaticRenderFns
        };
      }
      function genElement(el) {
        if (el.staticRoot && !el.staticProcessed) {
          return genStatic(el);
        } else if (el.once && !el.onceProcessed) {
          return genOnce(el);
        } else if (el.for && !el.forProcessed) {
          return genFor(el);
        } else if (el.if && !el.ifProcessed) {
          return genIf(el);
        } else if (el.tag === 'template' && !el.slotTarget) {
          return genChildren(el) || 'void 0';
        } else if (el.tag === 'slot') {
          return genSlot(el);
        } else {
          var code;
          if (el.component) {
            code = genComponent(el.component, el);
          } else {
            var data = el.plain ? undefined : genData(el);
            var children = el.inlineTemplate ? null : genChildren(el);
            code = "_h('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
          }
          for (var i = 0; i < transforms$1.length; i++) {
            code = transforms$1[i](el, code);
          }
          return code;
        }
      }
      function genStatic(el) {
        el.staticProcessed = true;
        staticRenderFns.push("with(this){return " + genElement(el) + "}");
        return "_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
      }
      function genOnce(el) {
        el.onceProcessed = true;
        if (el.staticInFor) {
          var key = '';
          var parent = el.parent;
          while (parent) {
            if (parent.for) {
              key = parent.key;
              break;
            }
            parent = parent.parent;
          }
          if (!key) {
            "development" !== 'production' && warn$2("v-once can only be used inside v-for that is keyed. ");
            return genElement(el);
          }
          return "_o(" + genElement(el) + "," + onceCount++ + (key ? "," + key : "") + ")";
        } else {
          return genStatic(el);
        }
      }
      function genIf(el) {
        var exp = el.if;
        el.ifProcessed = true;
        return "(" + exp + ")?" + genElement(el) + ":" + genElse(el);
      }
      function genElse(el) {
        return el.elseBlock ? genElement(el.elseBlock) : '_e()';
      }
      function genFor(el) {
        var exp = el.for;
        var alias = el.alias;
        var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
        var iterator2 = el.iterator2 ? "," + el.iterator2 : '';
        el.forProcessed = true;
        return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genElement(el) + '})';
      }
      function genData(el) {
        var data = '{';
        var dirs = genDirectives(el);
        if (dirs) {
          data += dirs + ',';
        }
        if (el.key) {
          data += "key:" + el.key + ",";
        }
        if (el.ref) {
          data += "ref:" + el.ref + ",";
        }
        if (el.refInFor) {
          data += "refInFor:true,";
        }
        if (el.component) {
          data += "tag:\"" + el.tag + "\",";
        }
        if (el.slotTarget) {
          data += "slot:" + el.slotTarget + ",";
        }
        for (var i = 0; i < dataGenFns.length; i++) {
          data += dataGenFns[i](el);
        }
        if (el.attrs) {
          data += "attrs:{" + genProps(el.attrs) + "},";
        }
        if (el.props) {
          data += "domProps:{" + genProps(el.props) + "},";
        }
        if (el.events) {
          data += genHandlers(el.events) + ",";
        }
        if (el.nativeEvents) {
          data += genHandlers(el.nativeEvents, true) + ",";
        }
        if (el.inlineTemplate) {
          var ast = el.children[0];
          if ("development" !== 'production' && (el.children.length > 1 || ast.type !== 1)) {
            warn$2('Inline-template components must have exactly one child element.');
          }
          if (ast.type === 1) {
            var inlineRenderFns = generate(ast, currentOptions);
            data += "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
              return "function(){" + code + "}";
            }).join(',') + "]}";
          }
        }
        data = data.replace(/,$/, '') + '}';
        if (el.wrapData) {
          data = el.wrapData(data);
        }
        return data;
      }
      function genDirectives(el) {
        var dirs = el.directives;
        if (!dirs) {
          return;
        }
        var res = 'directives:[';
        var hasRuntime = false;
        var i, l, dir, needRuntime;
        for (i = 0, l = dirs.length; i < l; i++) {
          dir = dirs[i];
          needRuntime = true;
          var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
          if (gen) {
            needRuntime = !!gen(el, dir, warn$2);
          }
          if (needRuntime) {
            hasRuntime = true;
            res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:\"" + dir.arg + "\"" : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
          }
        }
        if (hasRuntime) {
          return res.slice(0, -1) + ']';
        }
      }
      function genChildren(el) {
        if (el.children.length) {
          return '[' + el.children.map(genNode).join(',') + ']';
        }
      }
      function genNode(node) {
        if (node.type === 1) {
          return genElement(node);
        } else {
          return genText(node);
        }
      }
      function genText(text) {
        return text.type === 2 ? text.expression : JSON.stringify(text.text);
      }
      function genSlot(el) {
        var slotName = el.slotName || '"default"';
        var children = genChildren(el);
        return "_t(" + slotName + (children ? "," + children : '') + ")";
      }
      function genComponent(componentName, el) {
        var children = el.inlineTemplate ? null : genChildren(el);
        return "_h(" + componentName + "," + genData(el) + (children ? "," + children : '') + ")";
      }
      function genProps(props) {
        var res = '';
        for (var i = 0; i < props.length; i++) {
          var prop = props[i];
          res += "\"" + prop.name + "\":" + prop.value + ",";
        }
        return res.slice(0, -1);
      }
      function compile$1(template, options) {
        var ast = parse(template.trim(), options);
        optimize(ast, options);
        var code = generate(ast, options);
        return {
          ast: ast,
          render: code.render,
          staticRenderFns: code.staticRenderFns
        };
      }
      var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');
      var identRE = /[A-Za-z_$][\w$]*/;
      var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
      function detectErrors(ast) {
        var errors = [];
        if (ast) {
          checkNode(ast, errors);
        }
        return errors;
      }
      function checkNode(node, errors) {
        if (node.type === 1) {
          for (var name in node.attrsMap) {
            if (dirRE.test(name)) {
              var value = node.attrsMap[name];
              if (value) {
                if (name === 'v-for') {
                  checkFor(node, "v-for=\"" + value + "\"", errors);
                } else {
                  checkExpression(value, name + "=\"" + value + "\"", errors);
                }
              }
            }
          }
          if (node.children) {
            for (var i = 0; i < node.children.length; i++) {
              checkNode(node.children[i], errors);
            }
          }
        } else if (node.type === 2) {
          checkExpression(node.expression, node.text, errors);
        }
      }
      function checkFor(node, text, errors) {
        checkExpression(node.for || '', text, errors);
        checkIdentifier(node.alias, 'v-for alias', text, errors);
        checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
        checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
      }
      function checkIdentifier(ident, type, text, errors) {
        if (typeof ident === 'string' && !identRE.test(ident)) {
          errors.push("- invalid " + type + " \"" + ident + "\" in expression: " + text);
        }
      }
      function checkExpression(exp, text, errors) {
        try {
          new Function("return " + exp);
        } catch (e) {
          var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
          if (keywordMatch) {
            errors.push("- avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text);
          } else {
            errors.push("- invalid expression: " + text);
          }
        }
      }
      function transformNode(el, options) {
        var warn = options.warn || baseWarn;
        var staticClass = getAndRemoveAttr(el, 'class');
        if ("development" !== 'production' && staticClass) {
          var expression = parseText(staticClass, options.delimiters);
          if (expression) {
            warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');
          }
        }
        if (staticClass) {
          el.staticClass = JSON.stringify(staticClass);
        }
        var classBinding = getBindingAttr(el, 'class', false);
        if (classBinding) {
          el.classBinding = classBinding;
        }
      }
      function genData$1(el) {
        var data = '';
        if (el.staticClass) {
          data += "staticClass:" + el.staticClass + ",";
        }
        if (el.classBinding) {
          data += "class:" + el.classBinding + ",";
        }
        return data;
      }
      var klass$1 = {
        staticKeys: ['staticClass'],
        transformNode: transformNode,
        genData: genData$1
      };
      function transformNode$1(el) {
        var styleBinding = getBindingAttr(el, 'style', false);
        if (styleBinding) {
          el.styleBinding = styleBinding;
        }
      }
      function genData$2(el) {
        return el.styleBinding ? "style:(" + el.styleBinding + ")," : '';
      }
      var style$1 = {
        transformNode: transformNode$1,
        genData: genData$2
      };
      var modules$1 = [klass$1, style$1];
      var len;
      var str;
      var chr;
      var index$1;
      var expressionPos;
      var expressionEndPos;
      function parseModel(val) {
        str = val;
        len = str.length;
        index$1 = expressionPos = expressionEndPos = 0;
        if (val.indexOf('[') < 0) {
          return {
            exp: val,
            idx: null
          };
        }
        while (!eof()) {
          chr = next();
          if (isStringStart(chr)) {
            parseString(chr);
          } else if (chr === 0x5B) {
            parseBracket(chr);
          }
        }
        return {
          exp: val.substring(0, expressionPos),
          idx: val.substring(expressionPos + 1, expressionEndPos)
        };
      }
      function next() {
        return str.charCodeAt(++index$1);
      }
      function eof() {
        return index$1 >= len;
      }
      function isStringStart(chr) {
        return chr === 0x22 || chr === 0x27;
      }
      function parseBracket(chr) {
        var inBracket = 1;
        expressionPos = index$1;
        while (!eof()) {
          chr = next();
          if (isStringStart(chr)) {
            parseString(chr);
            continue;
          }
          if (chr === 0x5B) {
            inBracket++;
          }
          if (chr === 0x5D) {
            inBracket--;
          }
          if (inBracket === 0) {
            expressionEndPos = index$1;
            break;
          }
        }
      }
      function parseString(chr) {
        var stringQuote = chr;
        while (!eof()) {
          chr = next();
          if (chr === stringQuote) {
            break;
          }
        }
      }
      var warn$3;
      function model$1(el, dir, _warn) {
        warn$3 = _warn;
        var value = dir.value;
        var modifiers = dir.modifiers;
        var tag = el.tag;
        var type = el.attrsMap.type;
        {
          var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
          if (tag === 'input' && dynamicType) {
            warn$3("<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" + "v-model does not support dynamic input types. Use v-if branches instead.");
          }
        }
        if (tag === 'select') {
          genSelect(el, value, modifiers);
        } else if (tag === 'input' && type === 'checkbox') {
          genCheckboxModel(el, value, modifiers);
        } else if (tag === 'input' && type === 'radio') {
          genRadioModel(el, value, modifiers);
        } else {
          genDefaultModel(el, value, modifiers);
        }
        return true;
      }
      function genCheckboxModel(el, value, modifiers) {
        if ("development" !== 'production' && el.attrsMap.checked != null) {
          warn$3("<" + el.tag + " v-model=\"" + value + "\" checked>:\n" + "inline checked attributes will be ignored when using v-model. " + 'Declare initial values in the component\'s data option instead.');
        }
        var number = modifiers && modifiers.number;
        var valueBinding = getBindingAttr(el, 'value') || 'null';
        var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
        var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
        addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + ":_q(" + value + "," + trueValueBinding + ")");
        addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" + "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + value + "=$$c}", null, true);
      }
      function genRadioModel(el, value, modifiers) {
        if ("development" !== 'production' && el.attrsMap.checked != null) {
          warn$3("<" + el.tag + " v-model=\"" + value + "\" checked>:\n" + "inline checked attributes will be ignored when using v-model. " + 'Declare initial values in the component\'s data option instead.');
        }
        var number = modifiers && modifiers.number;
        var valueBinding = getBindingAttr(el, 'value') || 'null';
        valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
        addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
        addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
      }
      function genDefaultModel(el, value, modifiers) {
        {
          if (el.tag === 'input' && el.attrsMap.value) {
            warn$3("<" + el.tag + " v-model=\"" + value + "\" value=\"" + el.attrsMap.value + "\">:\n" + 'inline value attributes will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
          }
          if (el.tag === 'textarea' && el.children.length) {
            warn$3("<textarea v-model=\"" + value + "\">:\n" + 'inline content inside <textarea> will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
          }
        }
        var type = el.attrsMap.type;
        var ref = modifiers || {};
        var lazy = ref.lazy;
        var number = ref.number;
        var trim = ref.trim;
        var event = lazy || isIE && type === 'range' ? 'change' : 'input';
        var needCompositionGuard = !lazy && type !== 'range';
        var isNative = el.tag === 'input' || el.tag === 'textarea';
        var valueExpression = isNative ? "$event.target.value" + (trim ? '.trim()' : '') : "$event";
        valueExpression = number || type === 'number' ? "_n(" + valueExpression + ")" : valueExpression;
        var code = genAssignmentCode(value, valueExpression);
        if (isNative && needCompositionGuard) {
          code = "if($event.target.composing)return;" + code;
        }
        if ("development" !== 'production' && type === 'file') {
          warn$3("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");
        }
        addProp(el, 'value', isNative ? "_s(" + value + ")" : "(" + value + ")");
        addHandler(el, event, code, null, true);
      }
      function genSelect(el, value, modifiers) {
        {
          el.children.some(checkOptionWarning);
        }
        var number = modifiers && modifiers.number;
        var assignment = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})" + (el.attrsMap.multiple == null ? '[0]' : '');
        var code = genAssignmentCode(value, assignment);
        addHandler(el, 'change', code, null, true);
      }
      function checkOptionWarning(option) {
        if (option.type === 1 && option.tag === 'option' && option.attrsMap.selected != null) {
          warn$3("<select v-model=\"" + option.parent.attrsMap['v-model'] + "\">:\n" + 'inline selected attributes on <option> will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
          return true;
        }
        return false;
      }
      function genAssignmentCode(value, assignment) {
        var modelRs = parseModel(value);
        if (modelRs.idx === null) {
          return value + "=" + assignment;
        } else {
          return "var $$exp = " + modelRs.exp + ", $$idx = " + modelRs.idx + ";" + "if (!Array.isArray($$exp)){" + value + "=" + assignment + "}" + "else{$$exp.splice($$idx, 1, " + assignment + ")}";
        }
      }
      function text(el, dir) {
        if (dir.value) {
          addProp(el, 'textContent', "_s(" + dir.value + ")");
        }
      }
      function html(el, dir) {
        if (dir.value) {
          addProp(el, 'innerHTML', "_s(" + dir.value + ")");
        }
      }
      var directives$1 = {
        model: model$1,
        text: text,
        html: html
      };
      var cache = Object.create(null);
      var baseOptions = {
        isIE: isIE,
        expectHTML: true,
        modules: modules$1,
        staticKeys: genStaticKeys(modules$1),
        directives: directives$1,
        isReservedTag: isReservedTag,
        isUnaryTag: isUnaryTag,
        mustUseProp: mustUseProp,
        getTagNamespace: getTagNamespace,
        isPreTag: isPreTag
      };
      function compile$$1(template, options) {
        options = options ? extend(extend({}, baseOptions), options) : baseOptions;
        return compile$1(template, options);
      }
      function compileToFunctions(template, options, vm) {
        var _warn = options && options.warn || warn;
        {
          try {
            new Function('return 1');
          } catch (e) {
            if (e.toString().match(/unsafe-eval|CSP/)) {
              _warn('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
            }
          }
        }
        var key = options && options.delimiters ? String(options.delimiters) + template : template;
        if (cache[key]) {
          return cache[key];
        }
        var res = {};
        var compiled = compile$$1(template, options);
        res.render = makeFunction(compiled.render);
        var l = compiled.staticRenderFns.length;
        res.staticRenderFns = new Array(l);
        for (var i = 0; i < l; i++) {
          res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
        }
        {
          if (res.render === noop || res.staticRenderFns.some(function (fn) {
            return fn === noop;
          })) {
            _warn("failed to compile template:\n\n" + template + "\n\n" + detectErrors(compiled.ast).join('\n') + '\n\n', vm);
          }
        }
        return cache[key] = res;
      }
      function makeFunction(code) {
        try {
          return new Function(code);
        } catch (e) {
          return noop;
        }
      }
      var idToTemplate = cached(function (id) {
        var el = query(id);
        return el && el.innerHTML;
      });
      var mount = Vue$2.prototype.$mount;
      Vue$2.prototype.$mount = function (el, hydrating) {
        el = el && query(el);
        if (el === document.body || el === document.documentElement) {
          "development" !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
          return this;
        }
        var options = this.$options;
        if (!options.render) {
          var template = options.template;
          if (template) {
            if (typeof template === 'string') {
              if (template.charAt(0) === '#') {
                template = idToTemplate(template);
              }
            } else if (template.nodeType) {
              template = template.innerHTML;
            } else {
              {
                warn('invalid template option:' + template, this);
              }
              return this;
            }
          } else if (el) {
            template = getOuterHTML(el);
          }
          if (template) {
            var ref = compileToFunctions(template, {
              warn: warn,
              shouldDecodeNewlines: shouldDecodeNewlines,
              delimiters: options.delimiters
            }, this);
            var render = ref.render;
            var staticRenderFns = ref.staticRenderFns;
            options.render = render;
            options.staticRenderFns = staticRenderFns;
          }
        }
        return mount.call(this, el, hydrating);
      };
      function getOuterHTML(el) {
        if (el.outerHTML) {
          return el.outerHTML;
        } else {
          var container = document.createElement('div');
          container.appendChild(el.cloneNode(true));
          return container.innerHTML;
        }
      }
      Vue$2.compile = compileToFunctions;
      return Vue$2;
    });
  })($__require('17'));
  return module.exports;
});
$__System.register("18", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("default", "<div class=\"basket\">\n\n    <div class=\"basket-body\">\n        <table class=\"basket-breakdown\" v-if=\"totalItems\">\n            <transition-group name=\"basket-list\" tag=\"tbody\" enter-active-class=\"animated bounceIn\" leave-active-class=\"animated bounceOut\">\n                <tr v-for=\"item in basket.items\" :key=\"item.id\">\n                    <td>\n                        <div class=\"input-text small append\">\n                            <input class=\"changeqty\" type=\"number\" v-on:blur=\"changeQty(item, $event)\" v-on:keyup.enter=\"changeQty(item, $event)\" v-model=\"item.calc_weight\">\n                            <span>{{ item.unit }}</span>\n                        </div>\n                    </td>\n                    <td>\n                        {{ item.name }}\n                    </td>\n                    <td>\n                        {{ item.calc_carbs }}\n                    </td>\n                    <td>\n                        <button class=\"btn danger small removefrombasket\" v-on:click=\"removeFromBasket(item)\">×</button>\n                    </td>\n                </tr>\n            </transition-group>\n        </table>\n        <div class=\"basket-empty\" v-if=\"!totalItems\">\n            <div class=\"basket-empty-content\"> \n                <p>Za sestavo obroka dodajte živilo</p> \n            </div>\n        </div>\n    </div>\n\n    <div class=\"basket-foot\">\n        <section>\n            Skupaj OH: <span v-text=\"totalCarbs\"></span>\n        </section>\n        <section v-if=\"totalItems\">\n            <button class=\"btn extrasmall danger emptybasket\" v-on:click=\"emptyBasket()\">Počisti</button>\n        </section>\n    </div>\n\n</div>\n");
    }
  };
});
$__System.register('19', ['12', '13', '18', 'f'], function (_export) {
  'use strict';

  var Basket, Vue, template, _, myBasket, BasketComponent;

  return {
    setters: [function (_4) {
      Basket = _4['default'];
    }, function (_2) {
      Vue = _2['default'];
    }, function (_3) {
      template = _3['default'];
    }, function (_f) {
      _ = _f['default'];
    }],
    execute: function () {
      myBasket = Basket.get();
      BasketComponent = Vue.extend({
        template: template,
        data: function data() {
          return {
            basket: myBasket
          };
        },
        computed: {
          totalCarbs: function totalCarbs() {
            return _.reduce(myBasket.items, function (n, cart_item) {
              return cart_item.calc_carbs + n;
            }, 0).toFixed(0);
          },
          totalItems: function totalItems() {
            return this.basket.items.length;
          }
        },
        methods: {
          emptyBasket: Basket.emptyBasket,
          removeFromBasket: Basket.removeFromBasket,
          changeQty: Basket.changeQty
        }
      });

      _export('default', BasketComponent);
    }
  };
});
$__System.registerDynamic('1a', [], true, function ($__require, exports, module) {
  /* */
  "format cjs";
  //     Underscore.js 1.8.3
  //     http://underscorejs.org
  //     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  //     Underscore may be freely distributed under the MIT license.

  var define,
      global = this || self,
      GLOBAL = global;
  (function () {

    // Baseline setup
    // --------------

    // Establish the root object, `window` in the browser, or `exports` on the server.
    var root = this;

    // Save the previous value of the `_` variable.
    var previousUnderscore = root._;

    // Save bytes in the minified (but not gzipped) version:
    var ArrayProto = Array.prototype,
        ObjProto = Object.prototype,
        FuncProto = Function.prototype;

    // Create quick reference variables for speed access to core prototypes.
    var push = ArrayProto.push,
        slice = ArrayProto.slice,
        toString = ObjProto.toString,
        hasOwnProperty = ObjProto.hasOwnProperty;

    // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    var nativeIsArray = Array.isArray,
        nativeKeys = Object.keys,
        nativeBind = FuncProto.bind,
        nativeCreate = Object.create;

    // Naked function reference for surrogate-prototype-swapping.
    var Ctor = function () {};

    // Create a safe reference to the Underscore object for use below.
    var _ = function (obj) {
      if (obj instanceof _) return obj;
      if (!(this instanceof _)) return new _(obj);
      this._wrapped = obj;
    };

    // Export the Underscore object for **Node.js**, with
    // backwards-compatibility for the old `require()` API. If we're in
    // the browser, add `_` as a global object.
    if (typeof exports !== 'undefined') {
      if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = _;
      }
      exports._ = _;
    } else {
      root._ = _;
    }

    // Current version.
    _.VERSION = '1.8.3';

    // Internal function that returns an efficient (for current engines) version
    // of the passed-in callback, to be repeatedly applied in other Underscore
    // functions.
    var optimizeCb = function (func, context, argCount) {
      if (context === void 0) return func;
      switch (argCount == null ? 3 : argCount) {
        case 1:
          return function (value) {
            return func.call(context, value);
          };
        case 2:
          return function (value, other) {
            return func.call(context, value, other);
          };
        case 3:
          return function (value, index, collection) {
            return func.call(context, value, index, collection);
          };
        case 4:
          return function (accumulator, value, index, collection) {
            return func.call(context, accumulator, value, index, collection);
          };
      }
      return function () {
        return func.apply(context, arguments);
      };
    };

    // A mostly-internal function to generate callbacks that can be applied
    // to each element in a collection, returning the desired result — either
    // identity, an arbitrary callback, a property matcher, or a property accessor.
    var cb = function (value, context, argCount) {
      if (value == null) return _.identity;
      if (_.isFunction(value)) return optimizeCb(value, context, argCount);
      if (_.isObject(value)) return _.matcher(value);
      return _.property(value);
    };
    _.iteratee = function (value, context) {
      return cb(value, context, Infinity);
    };

    // An internal function for creating assigner functions.
    var createAssigner = function (keysFunc, undefinedOnly) {
      return function (obj) {
        var length = arguments.length;
        if (length < 2 || obj == null) return obj;
        for (var index = 1; index < length; index++) {
          var source = arguments[index],
              keys = keysFunc(source),
              l = keys.length;
          for (var i = 0; i < l; i++) {
            var key = keys[i];
            if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
          }
        }
        return obj;
      };
    };

    // An internal function for creating a new object that inherits from another.
    var baseCreate = function (prototype) {
      if (!_.isObject(prototype)) return {};
      if (nativeCreate) return nativeCreate(prototype);
      Ctor.prototype = prototype;
      var result = new Ctor();
      Ctor.prototype = null;
      return result;
    };

    var property = function (key) {
      return function (obj) {
        return obj == null ? void 0 : obj[key];
      };
    };

    // Helper for collection methods to determine whether a collection
    // should be iterated as an array or as an object
    // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
    // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
    var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    var getLength = property('length');
    var isArrayLike = function (collection) {
      var length = getLength(collection);
      return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
    };

    // Collection Functions
    // --------------------

    // The cornerstone, an `each` implementation, aka `forEach`.
    // Handles raw objects in addition to array-likes. Treats all
    // sparse array-likes as if they were dense.
    _.each = _.forEach = function (obj, iteratee, context) {
      iteratee = optimizeCb(iteratee, context);
      var i, length;
      if (isArrayLike(obj)) {
        for (i = 0, length = obj.length; i < length; i++) {
          iteratee(obj[i], i, obj);
        }
      } else {
        var keys = _.keys(obj);
        for (i = 0, length = keys.length; i < length; i++) {
          iteratee(obj[keys[i]], keys[i], obj);
        }
      }
      return obj;
    };

    // Return the results of applying the iteratee to each element.
    _.map = _.collect = function (obj, iteratee, context) {
      iteratee = cb(iteratee, context);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          results = Array(length);
      for (var index = 0; index < length; index++) {
        var currentKey = keys ? keys[index] : index;
        results[index] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
    };

    // Create a reducing function iterating left or right.
    function createReduce(dir) {
      // Optimized iterator function as using arguments.length
      // in the main function will deoptimize the, see #1991.
      function iterator(obj, iteratee, memo, keys, index, length) {
        for (; index >= 0 && index < length; index += dir) {
          var currentKey = keys ? keys[index] : index;
          memo = iteratee(memo, obj[currentKey], currentKey, obj);
        }
        return memo;
      }

      return function (obj, iteratee, memo, context) {
        iteratee = optimizeCb(iteratee, context, 4);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length,
            index = dir > 0 ? 0 : length - 1;
        // Determine the initial value if none is provided.
        if (arguments.length < 3) {
          memo = obj[keys ? keys[index] : index];
          index += dir;
        }
        return iterator(obj, iteratee, memo, keys, index, length);
      };
    }

    // **Reduce** builds up a single result from a list of values, aka `inject`,
    // or `foldl`.
    _.reduce = _.foldl = _.inject = createReduce(1);

    // The right-associative version of reduce, also known as `foldr`.
    _.reduceRight = _.foldr = createReduce(-1);

    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = _.detect = function (obj, predicate, context) {
      var key;
      if (isArrayLike(obj)) {
        key = _.findIndex(obj, predicate, context);
      } else {
        key = _.findKey(obj, predicate, context);
      }
      if (key !== void 0 && key !== -1) return obj[key];
    };

    // Return all the elements that pass a truth test.
    // Aliased as `select`.
    _.filter = _.select = function (obj, predicate, context) {
      var results = [];
      predicate = cb(predicate, context);
      _.each(obj, function (value, index, list) {
        if (predicate(value, index, list)) results.push(value);
      });
      return results;
    };

    // Return all the elements for which a truth test fails.
    _.reject = function (obj, predicate, context) {
      return _.filter(obj, _.negate(cb(predicate)), context);
    };

    // Determine whether all of the elements match a truth test.
    // Aliased as `all`.
    _.every = _.all = function (obj, predicate, context) {
      predicate = cb(predicate, context);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length;
      for (var index = 0; index < length; index++) {
        var currentKey = keys ? keys[index] : index;
        if (!predicate(obj[currentKey], currentKey, obj)) return false;
      }
      return true;
    };

    // Determine if at least one element in the object matches a truth test.
    // Aliased as `any`.
    _.some = _.any = function (obj, predicate, context) {
      predicate = cb(predicate, context);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length;
      for (var index = 0; index < length; index++) {
        var currentKey = keys ? keys[index] : index;
        if (predicate(obj[currentKey], currentKey, obj)) return true;
      }
      return false;
    };

    // Determine if the array or object contains a given item (using `===`).
    // Aliased as `includes` and `include`.
    _.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      if (typeof fromIndex != 'number' || guard) fromIndex = 0;
      return _.indexOf(obj, item, fromIndex) >= 0;
    };

    // Invoke a method (with arguments) on every item in a collection.
    _.invoke = function (obj, method) {
      var args = slice.call(arguments, 2);
      var isFunc = _.isFunction(method);
      return _.map(obj, function (value) {
        var func = isFunc ? method : value[method];
        return func == null ? func : func.apply(value, args);
      });
    };

    // Convenience version of a common use case of `map`: fetching a property.
    _.pluck = function (obj, key) {
      return _.map(obj, _.property(key));
    };

    // Convenience version of a common use case of `filter`: selecting only objects
    // containing specific `key:value` pairs.
    _.where = function (obj, attrs) {
      return _.filter(obj, _.matcher(attrs));
    };

    // Convenience version of a common use case of `find`: getting the first object
    // containing specific `key:value` pairs.
    _.findWhere = function (obj, attrs) {
      return _.find(obj, _.matcher(attrs));
    };

    // Return the maximum element (or element-based computation).
    _.max = function (obj, iteratee, context) {
      var result = -Infinity,
          lastComputed = -Infinity,
          value,
          computed;
      if (iteratee == null && obj != null) {
        obj = isArrayLike(obj) ? obj : _.values(obj);
        for (var i = 0, length = obj.length; i < length; i++) {
          value = obj[i];
          if (value > result) {
            result = value;
          }
        }
      } else {
        iteratee = cb(iteratee, context);
        _.each(obj, function (value, index, list) {
          computed = iteratee(value, index, list);
          if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
            result = value;
            lastComputed = computed;
          }
        });
      }
      return result;
    };

    // Return the minimum element (or element-based computation).
    _.min = function (obj, iteratee, context) {
      var result = Infinity,
          lastComputed = Infinity,
          value,
          computed;
      if (iteratee == null && obj != null) {
        obj = isArrayLike(obj) ? obj : _.values(obj);
        for (var i = 0, length = obj.length; i < length; i++) {
          value = obj[i];
          if (value < result) {
            result = value;
          }
        }
      } else {
        iteratee = cb(iteratee, context);
        _.each(obj, function (value, index, list) {
          computed = iteratee(value, index, list);
          if (computed < lastComputed || computed === Infinity && result === Infinity) {
            result = value;
            lastComputed = computed;
          }
        });
      }
      return result;
    };

    // Shuffle a collection, using the modern version of the
    // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
    _.shuffle = function (obj) {
      var set = isArrayLike(obj) ? obj : _.values(obj);
      var length = set.length;
      var shuffled = Array(length);
      for (var index = 0, rand; index < length; index++) {
        rand = _.random(0, index);
        if (rand !== index) shuffled[index] = shuffled[rand];
        shuffled[rand] = set[index];
      }
      return shuffled;
    };

    // Sample **n** random values from a collection.
    // If **n** is not specified, returns a single random element.
    // The internal `guard` argument allows it to work with `map`.
    _.sample = function (obj, n, guard) {
      if (n == null || guard) {
        if (!isArrayLike(obj)) obj = _.values(obj);
        return obj[_.random(obj.length - 1)];
      }
      return _.shuffle(obj).slice(0, Math.max(0, n));
    };

    // Sort the object's values by a criterion produced by an iteratee.
    _.sortBy = function (obj, iteratee, context) {
      iteratee = cb(iteratee, context);
      return _.pluck(_.map(obj, function (value, index, list) {
        return {
          value: value,
          index: index,
          criteria: iteratee(value, index, list)
        };
      }).sort(function (left, right) {
        var a = left.criteria;
        var b = right.criteria;
        if (a !== b) {
          if (a > b || a === void 0) return 1;
          if (a < b || b === void 0) return -1;
        }
        return left.index - right.index;
      }), 'value');
    };

    // An internal function used for aggregate "group by" operations.
    var group = function (behavior) {
      return function (obj, iteratee, context) {
        var result = {};
        iteratee = cb(iteratee, context);
        _.each(obj, function (value, index) {
          var key = iteratee(value, index, obj);
          behavior(result, value, key);
        });
        return result;
      };
    };

    // Groups the object's values by a criterion. Pass either a string attribute
    // to group by, or a function that returns the criterion.
    _.groupBy = group(function (result, value, key) {
      if (_.has(result, key)) result[key].push(value);else result[key] = [value];
    });

    // Indexes the object's values by a criterion, similar to `groupBy`, but for
    // when you know that your index values will be unique.
    _.indexBy = group(function (result, value, key) {
      result[key] = value;
    });

    // Counts instances of an object that group by a certain criterion. Pass
    // either a string attribute to count by, or a function that returns the
    // criterion.
    _.countBy = group(function (result, value, key) {
      if (_.has(result, key)) result[key]++;else result[key] = 1;
    });

    // Safely create a real, live array from anything iterable.
    _.toArray = function (obj) {
      if (!obj) return [];
      if (_.isArray(obj)) return slice.call(obj);
      if (isArrayLike(obj)) return _.map(obj, _.identity);
      return _.values(obj);
    };

    // Return the number of elements in an object.
    _.size = function (obj) {
      if (obj == null) return 0;
      return isArrayLike(obj) ? obj.length : _.keys(obj).length;
    };

    // Split a collection into two arrays: one whose elements all satisfy the given
    // predicate, and one whose elements all do not satisfy the predicate.
    _.partition = function (obj, predicate, context) {
      predicate = cb(predicate, context);
      var pass = [],
          fail = [];
      _.each(obj, function (value, key, obj) {
        (predicate(value, key, obj) ? pass : fail).push(value);
      });
      return [pass, fail];
    };

    // Array Functions
    // ---------------

    // Get the first element of an array. Passing **n** will return the first N
    // values in the array. Aliased as `head` and `take`. The **guard** check
    // allows it to work with `_.map`.
    _.first = _.head = _.take = function (array, n, guard) {
      if (array == null) return void 0;
      if (n == null || guard) return array[0];
      return _.initial(array, array.length - n);
    };

    // Returns everything but the last entry of the array. Especially useful on
    // the arguments object. Passing **n** will return all the values in
    // the array, excluding the last N.
    _.initial = function (array, n, guard) {
      return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
    };

    // Get the last element of an array. Passing **n** will return the last N
    // values in the array.
    _.last = function (array, n, guard) {
      if (array == null) return void 0;
      if (n == null || guard) return array[array.length - 1];
      return _.rest(array, Math.max(0, array.length - n));
    };

    // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
    // Especially useful on the arguments object. Passing an **n** will return
    // the rest N values in the array.
    _.rest = _.tail = _.drop = function (array, n, guard) {
      return slice.call(array, n == null || guard ? 1 : n);
    };

    // Trim out all falsy values from an array.
    _.compact = function (array) {
      return _.filter(array, _.identity);
    };

    // Internal implementation of a recursive `flatten` function.
    var flatten = function (input, shallow, strict, startIndex) {
      var output = [],
          idx = 0;
      for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
        var value = input[i];
        if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
          //flatten current level of array or arguments object
          if (!shallow) value = flatten(value, shallow, strict);
          var j = 0,
              len = value.length;
          output.length += len;
          while (j < len) {
            output[idx++] = value[j++];
          }
        } else if (!strict) {
          output[idx++] = value;
        }
      }
      return output;
    };

    // Flatten out an array, either recursively (by default), or just one level.
    _.flatten = function (array, shallow) {
      return flatten(array, shallow, false);
    };

    // Return a version of the array that does not contain the specified value(s).
    _.without = function (array) {
      return _.difference(array, slice.call(arguments, 1));
    };

    // Produce a duplicate-free version of the array. If the array has already
    // been sorted, you have the option of using a faster algorithm.
    // Aliased as `unique`.
    _.uniq = _.unique = function (array, isSorted, iteratee, context) {
      if (!_.isBoolean(isSorted)) {
        context = iteratee;
        iteratee = isSorted;
        isSorted = false;
      }
      if (iteratee != null) iteratee = cb(iteratee, context);
      var result = [];
      var seen = [];
      for (var i = 0, length = getLength(array); i < length; i++) {
        var value = array[i],
            computed = iteratee ? iteratee(value, i, array) : value;
        if (isSorted) {
          if (!i || seen !== computed) result.push(value);
          seen = computed;
        } else if (iteratee) {
          if (!_.contains(seen, computed)) {
            seen.push(computed);
            result.push(value);
          }
        } else if (!_.contains(result, value)) {
          result.push(value);
        }
      }
      return result;
    };

    // Produce an array that contains the union: each distinct element from all of
    // the passed-in arrays.
    _.union = function () {
      return _.uniq(flatten(arguments, true, true));
    };

    // Produce an array that contains every item shared between all the
    // passed-in arrays.
    _.intersection = function (array) {
      var result = [];
      var argsLength = arguments.length;
      for (var i = 0, length = getLength(array); i < length; i++) {
        var item = array[i];
        if (_.contains(result, item)) continue;
        for (var j = 1; j < argsLength; j++) {
          if (!_.contains(arguments[j], item)) break;
        }
        if (j === argsLength) result.push(item);
      }
      return result;
    };

    // Take the difference between one array and a number of other arrays.
    // Only the elements present in just the first array will remain.
    _.difference = function (array) {
      var rest = flatten(arguments, true, true, 1);
      return _.filter(array, function (value) {
        return !_.contains(rest, value);
      });
    };

    // Zip together multiple lists into a single array -- elements that share
    // an index go together.
    _.zip = function () {
      return _.unzip(arguments);
    };

    // Complement of _.zip. Unzip accepts an array of arrays and groups
    // each array's elements on shared indices
    _.unzip = function (array) {
      var length = array && _.max(array, getLength).length || 0;
      var result = Array(length);

      for (var index = 0; index < length; index++) {
        result[index] = _.pluck(array, index);
      }
      return result;
    };

    // Converts lists into objects. Pass either a single array of `[key, value]`
    // pairs, or two parallel arrays of the same length -- one of keys, and one of
    // the corresponding values.
    _.object = function (list, values) {
      var result = {};
      for (var i = 0, length = getLength(list); i < length; i++) {
        if (values) {
          result[list[i]] = values[i];
        } else {
          result[list[i][0]] = list[i][1];
        }
      }
      return result;
    };

    // Generator function to create the findIndex and findLastIndex functions
    function createPredicateIndexFinder(dir) {
      return function (array, predicate, context) {
        predicate = cb(predicate, context);
        var length = getLength(array);
        var index = dir > 0 ? 0 : length - 1;
        for (; index >= 0 && index < length; index += dir) {
          if (predicate(array[index], index, array)) return index;
        }
        return -1;
      };
    }

    // Returns the first index on an array-like that passes a predicate test
    _.findIndex = createPredicateIndexFinder(1);
    _.findLastIndex = createPredicateIndexFinder(-1);

    // Use a comparator function to figure out the smallest index at which
    // an object should be inserted so as to maintain order. Uses binary search.
    _.sortedIndex = function (array, obj, iteratee, context) {
      iteratee = cb(iteratee, context, 1);
      var value = iteratee(obj);
      var low = 0,
          high = getLength(array);
      while (low < high) {
        var mid = Math.floor((low + high) / 2);
        if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
      }
      return low;
    };

    // Generator function to create the indexOf and lastIndexOf functions
    function createIndexFinder(dir, predicateFind, sortedIndex) {
      return function (array, item, idx) {
        var i = 0,
            length = getLength(array);
        if (typeof idx == 'number') {
          if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
          } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
          }
        } else if (sortedIndex && idx && length) {
          idx = sortedIndex(array, item);
          return array[idx] === item ? idx : -1;
        }
        if (item !== item) {
          idx = predicateFind(slice.call(array, i, length), _.isNaN);
          return idx >= 0 ? idx + i : -1;
        }
        for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
          if (array[idx] === item) return idx;
        }
        return -1;
      };
    }

    // Return the position of the first occurrence of an item in an array,
    // or -1 if the item is not included in the array.
    // If the array is large and already in sort order, pass `true`
    // for **isSorted** to use binary search.
    _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
    _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

    // Generate an integer Array containing an arithmetic progression. A port of
    // the native Python `range()` function. See
    // [the Python documentation](http://docs.python.org/library/functions.html#range).
    _.range = function (start, stop, step) {
      if (stop == null) {
        stop = start || 0;
        start = 0;
      }
      step = step || 1;

      var length = Math.max(Math.ceil((stop - start) / step), 0);
      var range = Array(length);

      for (var idx = 0; idx < length; idx++, start += step) {
        range[idx] = start;
      }

      return range;
    };

    // Function (ahem) Functions
    // ------------------

    // Determines whether to execute a function as a constructor
    // or a normal function with the provided arguments
    var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
      if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
      var self = baseCreate(sourceFunc.prototype);
      var result = sourceFunc.apply(self, args);
      if (_.isObject(result)) return result;
      return self;
    };

    // Create a function bound to a given object (assigning `this`, and arguments,
    // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
    // available.
    _.bind = function (func, context) {
      if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
      if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
      var args = slice.call(arguments, 2);
      var bound = function () {
        return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
      };
      return bound;
    };

    // Partially apply a function by creating a version that has had some of its
    // arguments pre-filled, without changing its dynamic `this` context. _ acts
    // as a placeholder, allowing any combination of arguments to be pre-filled.
    _.partial = function (func) {
      var boundArgs = slice.call(arguments, 1);
      var bound = function () {
        var position = 0,
            length = boundArgs.length;
        var args = Array(length);
        for (var i = 0; i < length; i++) {
          args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
        }
        while (position < arguments.length) args.push(arguments[position++]);
        return executeBound(func, bound, this, this, args);
      };
      return bound;
    };

    // Bind a number of an object's methods to that object. Remaining arguments
    // are the method names to be bound. Useful for ensuring that all callbacks
    // defined on an object belong to it.
    _.bindAll = function (obj) {
      var i,
          length = arguments.length,
          key;
      if (length <= 1) throw new Error('bindAll must be passed function names');
      for (i = 1; i < length; i++) {
        key = arguments[i];
        obj[key] = _.bind(obj[key], obj);
      }
      return obj;
    };

    // Memoize an expensive function by storing its results.
    _.memoize = function (func, hasher) {
      var memoize = function (key) {
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
        return cache[address];
      };
      memoize.cache = {};
      return memoize;
    };

    // Delays a function for the given number of milliseconds, and then calls
    // it with the arguments supplied.
    _.delay = function (func, wait) {
      var args = slice.call(arguments, 2);
      return setTimeout(function () {
        return func.apply(null, args);
      }, wait);
    };

    // Defers a function, scheduling it to run after the current call stack has
    // cleared.
    _.defer = _.partial(_.delay, _, 1);

    // Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time. Normally, the throttled function will run
    // as much as it can, without ever going more than once per `wait` duration;
    // but if you'd like to disable the execution on the leading edge, pass
    // `{leading: false}`. To disable execution on the trailing edge, ditto.
    _.throttle = function (func, wait, options) {
      var context, args, result;
      var timeout = null;
      var previous = 0;
      if (!options) options = {};
      var later = function () {
        previous = options.leading === false ? 0 : _.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      };
      return function () {
        var now = _.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
    };

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    _.debounce = function (func, wait, immediate) {
      var timeout, args, context, timestamp, result;

      var later = function () {
        var last = _.now() - timestamp;

        if (last < wait && last >= 0) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) {
            result = func.apply(context, args);
            if (!timeout) context = args = null;
          }
        }
      };

      return function () {
        context = this;
        args = arguments;
        timestamp = _.now();
        var callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
          result = func.apply(context, args);
          context = args = null;
        }

        return result;
      };
    };

    // Returns the first function passed as an argument to the second,
    // allowing you to adjust arguments, run code before and after, and
    // conditionally execute the original function.
    _.wrap = function (func, wrapper) {
      return _.partial(wrapper, func);
    };

    // Returns a negated version of the passed-in predicate.
    _.negate = function (predicate) {
      return function () {
        return !predicate.apply(this, arguments);
      };
    };

    // Returns a function that is the composition of a list of functions, each
    // consuming the return value of the function that follows.
    _.compose = function () {
      var args = arguments;
      var start = args.length - 1;
      return function () {
        var i = start;
        var result = args[start].apply(this, arguments);
        while (i--) result = args[i].call(this, result);
        return result;
      };
    };

    // Returns a function that will only be executed on and after the Nth call.
    _.after = function (times, func) {
      return function () {
        if (--times < 1) {
          return func.apply(this, arguments);
        }
      };
    };

    // Returns a function that will only be executed up to (but not including) the Nth call.
    _.before = function (times, func) {
      var memo;
      return function () {
        if (--times > 0) {
          memo = func.apply(this, arguments);
        }
        if (times <= 1) func = null;
        return memo;
      };
    };

    // Returns a function that will be executed at most one time, no matter how
    // often you call it. Useful for lazy initialization.
    _.once = _.partial(_.before, 2);

    // Object Functions
    // ----------------

    // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
    var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
    var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

    function collectNonEnumProps(obj, keys) {
      var nonEnumIdx = nonEnumerableProps.length;
      var constructor = obj.constructor;
      var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

      // Constructor is a special case.
      var prop = 'constructor';
      if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

      while (nonEnumIdx--) {
        prop = nonEnumerableProps[nonEnumIdx];
        if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
          keys.push(prop);
        }
      }
    }

    // Retrieve the names of an object's own properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    _.keys = function (obj) {
      if (!_.isObject(obj)) return [];
      if (nativeKeys) return nativeKeys(obj);
      var keys = [];
      for (var key in obj) if (_.has(obj, key)) keys.push(key);
      // Ahem, IE < 9.
      if (hasEnumBug) collectNonEnumProps(obj, keys);
      return keys;
    };

    // Retrieve all the property names of an object.
    _.allKeys = function (obj) {
      if (!_.isObject(obj)) return [];
      var keys = [];
      for (var key in obj) keys.push(key);
      // Ahem, IE < 9.
      if (hasEnumBug) collectNonEnumProps(obj, keys);
      return keys;
    };

    // Retrieve the values of an object's properties.
    _.values = function (obj) {
      var keys = _.keys(obj);
      var length = keys.length;
      var values = Array(length);
      for (var i = 0; i < length; i++) {
        values[i] = obj[keys[i]];
      }
      return values;
    };

    // Returns the results of applying the iteratee to each element of the object
    // In contrast to _.map it returns an object
    _.mapObject = function (obj, iteratee, context) {
      iteratee = cb(iteratee, context);
      var keys = _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
    };

    // Convert an object into a list of `[key, value]` pairs.
    _.pairs = function (obj) {
      var keys = _.keys(obj);
      var length = keys.length;
      var pairs = Array(length);
      for (var i = 0; i < length; i++) {
        pairs[i] = [keys[i], obj[keys[i]]];
      }
      return pairs;
    };

    // Invert the keys and values of an object. The values must be serializable.
    _.invert = function (obj) {
      var result = {};
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        result[obj[keys[i]]] = keys[i];
      }
      return result;
    };

    // Return a sorted list of the function names available on the object.
    // Aliased as `methods`
    _.functions = _.methods = function (obj) {
      var names = [];
      for (var key in obj) {
        if (_.isFunction(obj[key])) names.push(key);
      }
      return names.sort();
    };

    // Extend a given object with all the properties in passed-in object(s).
    _.extend = createAssigner(_.allKeys);

    // Assigns a given object with all the own properties in the passed-in object(s)
    // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
    _.extendOwn = _.assign = createAssigner(_.keys);

    // Returns the first key on an object that passes a predicate test
    _.findKey = function (obj, predicate, context) {
      predicate = cb(predicate, context);
      var keys = _.keys(obj),
          key;
      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        if (predicate(obj[key], key, obj)) return key;
      }
    };

    // Return a copy of the object only containing the whitelisted properties.
    _.pick = function (object, oiteratee, context) {
      var result = {},
          obj = object,
          iteratee,
          keys;
      if (obj == null) return result;
      if (_.isFunction(oiteratee)) {
        keys = _.allKeys(obj);
        iteratee = optimizeCb(oiteratee, context);
      } else {
        keys = flatten(arguments, false, false, 1);
        iteratee = function (value, key, obj) {
          return key in obj;
        };
        obj = Object(obj);
      }
      for (var i = 0, length = keys.length; i < length; i++) {
        var key = keys[i];
        var value = obj[key];
        if (iteratee(value, key, obj)) result[key] = value;
      }
      return result;
    };

    // Return a copy of the object without the blacklisted properties.
    _.omit = function (obj, iteratee, context) {
      if (_.isFunction(iteratee)) {
        iteratee = _.negate(iteratee);
      } else {
        var keys = _.map(flatten(arguments, false, false, 1), String);
        iteratee = function (value, key) {
          return !_.contains(keys, key);
        };
      }
      return _.pick(obj, iteratee, context);
    };

    // Fill in a given object with default properties.
    _.defaults = createAssigner(_.allKeys, true);

    // Creates an object that inherits from the given prototype object.
    // If additional properties are provided then they will be added to the
    // created object.
    _.create = function (prototype, props) {
      var result = baseCreate(prototype);
      if (props) _.extendOwn(result, props);
      return result;
    };

    // Create a (shallow-cloned) duplicate of an object.
    _.clone = function (obj) {
      if (!_.isObject(obj)) return obj;
      return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };

    // Invokes interceptor with the obj, and then returns obj.
    // The primary purpose of this method is to "tap into" a method chain, in
    // order to perform operations on intermediate results within the chain.
    _.tap = function (obj, interceptor) {
      interceptor(obj);
      return obj;
    };

    // Returns whether an object has a given set of `key:value` pairs.
    _.isMatch = function (object, attrs) {
      var keys = _.keys(attrs),
          length = keys.length;
      if (object == null) return !length;
      var obj = Object(object);
      for (var i = 0; i < length; i++) {
        var key = keys[i];
        if (attrs[key] !== obj[key] || !(key in obj)) return false;
      }
      return true;
    };

    // Internal recursive comparison function for `isEqual`.
    var eq = function (a, b, aStack, bStack) {
      // Identical objects are equal. `0 === -0`, but they aren't identical.
      // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
      if (a === b) return a !== 0 || 1 / a === 1 / b;
      // A strict comparison is necessary because `null == undefined`.
      if (a == null || b == null) return a === b;
      // Unwrap any wrapped objects.
      if (a instanceof _) a = a._wrapped;
      if (b instanceof _) b = b._wrapped;
      // Compare `[[Class]]` names.
      var className = toString.call(a);
      if (className !== toString.call(b)) return false;
      switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case '[object RegExp]':
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case '[object String]':
          // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
          // equivalent to `new String("5")`.
          return '' + a === '' + b;
        case '[object Number]':
          // `NaN`s are equivalent, but non-reflexive.
          // Object(NaN) is equivalent to NaN
          if (+a !== +a) return +b !== +b;
          // An `egal` comparison is performed for other numeric values.
          return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case '[object Date]':
        case '[object Boolean]':
          // Coerce dates and booleans to numeric primitive values. Dates are compared by their
          // millisecond representations. Note that invalid dates with millisecond representations
          // of `NaN` are not equivalent.
          return +a === +b;
      }

      var areArrays = className === '[object Array]';
      if (!areArrays) {
        if (typeof a != 'object' || typeof b != 'object') return false;

        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor,
            bCtor = b.constructor;
        if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
          return false;
        }
      }
      // Assume equality for cyclic structures. The algorithm for detecting cyclic
      // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

      // Initializing stack of traversed objects.
      // It's done here since we only need them for objects and arrays comparison.
      aStack = aStack || [];
      bStack = bStack || [];
      var length = aStack.length;
      while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a) return bStack[length] === b;
      }

      // Add the first object to the stack of traversed objects.
      aStack.push(a);
      bStack.push(b);

      // Recursively compare objects and arrays.
      if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length) return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
          if (!eq(a[length], b[length], aStack, bStack)) return false;
        }
      } else {
        // Deep compare objects.
        var keys = _.keys(a),
            key;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (_.keys(b).length !== length) return false;
        while (length--) {
          // Deep compare each member
          key = keys[length];
          if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
        }
      }
      // Remove the first object from the stack of traversed objects.
      aStack.pop();
      bStack.pop();
      return true;
    };

    // Perform a deep comparison to check if two objects are equal.
    _.isEqual = function (a, b) {
      return eq(a, b);
    };

    // Is a given array, string, or object empty?
    // An "empty" object has no enumerable own-properties.
    _.isEmpty = function (obj) {
      if (obj == null) return true;
      if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
      return _.keys(obj).length === 0;
    };

    // Is a given value a DOM element?
    _.isElement = function (obj) {
      return !!(obj && obj.nodeType === 1);
    };

    // Is a given value an array?
    // Delegates to ECMA5's native Array.isArray
    _.isArray = nativeIsArray || function (obj) {
      return toString.call(obj) === '[object Array]';
    };

    // Is a given variable an object?
    _.isObject = function (obj) {
      var type = typeof obj;
      return type === 'function' || type === 'object' && !!obj;
    };

    // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
    _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
      _['is' + name] = function (obj) {
        return toString.call(obj) === '[object ' + name + ']';
      };
    });

    // Define a fallback version of the method in browsers (ahem, IE < 9), where
    // there isn't any inspectable "Arguments" type.
    if (!_.isArguments(arguments)) {
      _.isArguments = function (obj) {
        return _.has(obj, 'callee');
      };
    }

    // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
    // IE 11 (#1621), and in Safari 8 (#1929).
    if (typeof /./ != 'function' && typeof Int8Array != 'object') {
      _.isFunction = function (obj) {
        return typeof obj == 'function' || false;
      };
    }

    // Is a given object a finite number?
    _.isFinite = function (obj) {
      return isFinite(obj) && !isNaN(parseFloat(obj));
    };

    // Is the given value `NaN`? (NaN is the only number which does not equal itself).
    _.isNaN = function (obj) {
      return _.isNumber(obj) && obj !== +obj;
    };

    // Is a given value a boolean?
    _.isBoolean = function (obj) {
      return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
    };

    // Is a given value equal to null?
    _.isNull = function (obj) {
      return obj === null;
    };

    // Is a given variable undefined?
    _.isUndefined = function (obj) {
      return obj === void 0;
    };

    // Shortcut function for checking if an object has a given property directly
    // on itself (in other words, not on a prototype).
    _.has = function (obj, key) {
      return obj != null && hasOwnProperty.call(obj, key);
    };

    // Utility Functions
    // -----------------

    // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
    // previous owner. Returns a reference to the Underscore object.
    _.noConflict = function () {
      root._ = previousUnderscore;
      return this;
    };

    // Keep the identity function around for default iteratees.
    _.identity = function (value) {
      return value;
    };

    // Predicate-generating functions. Often useful outside of Underscore.
    _.constant = function (value) {
      return function () {
        return value;
      };
    };

    _.noop = function () {};

    _.property = property;

    // Generates a function for a given object that returns a given property.
    _.propertyOf = function (obj) {
      return obj == null ? function () {} : function (key) {
        return obj[key];
      };
    };

    // Returns a predicate for checking whether an object has a given set of
    // `key:value` pairs.
    _.matcher = _.matches = function (attrs) {
      attrs = _.extendOwn({}, attrs);
      return function (obj) {
        return _.isMatch(obj, attrs);
      };
    };

    // Run a function **n** times.
    _.times = function (n, iteratee, context) {
      var accum = Array(Math.max(0, n));
      iteratee = optimizeCb(iteratee, context, 1);
      for (var i = 0; i < n; i++) accum[i] = iteratee(i);
      return accum;
    };

    // Return a random integer between min and max (inclusive).
    _.random = function (min, max) {
      if (max == null) {
        max = min;
        min = 0;
      }
      return min + Math.floor(Math.random() * (max - min + 1));
    };

    // A (possibly faster) way to get the current timestamp as an integer.
    _.now = Date.now || function () {
      return new Date().getTime();
    };

    // List of HTML entities for escaping.
    var escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;'
    };
    var unescapeMap = _.invert(escapeMap);

    // Functions for escaping and unescaping strings to/from HTML interpolation.
    var createEscaper = function (map) {
      var escaper = function (match) {
        return map[match];
      };
      // Regexes for identifying a key that needs to be escaped
      var source = '(?:' + _.keys(map).join('|') + ')';
      var testRegexp = RegExp(source);
      var replaceRegexp = RegExp(source, 'g');
      return function (string) {
        string = string == null ? '' : '' + string;
        return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
      };
    };
    _.escape = createEscaper(escapeMap);
    _.unescape = createEscaper(unescapeMap);

    // If the value of the named `property` is a function then invoke it with the
    // `object` as context; otherwise, return it.
    _.result = function (object, property, fallback) {
      var value = object == null ? void 0 : object[property];
      if (value === void 0) {
        value = fallback;
      }
      return _.isFunction(value) ? value.call(object) : value;
    };

    // Generate a unique integer id (unique within the entire client session).
    // Useful for temporary DOM ids.
    var idCounter = 0;
    _.uniqueId = function (prefix) {
      var id = ++idCounter + '';
      return prefix ? prefix + id : id;
    };

    // By default, Underscore uses ERB-style template delimiters, change the
    // following template settings to use alternative delimiters.
    _.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };

    // When customizing `templateSettings`, if you don't want to define an
    // interpolation, evaluation or escaping regex, we need one that is
    // guaranteed not to match.
    var noMatch = /(.)^/;

    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
      "'": "'",
      '\\': '\\',
      '\r': 'r',
      '\n': 'n',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    };

    var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

    var escapeChar = function (match) {
      return '\\' + escapes[match];
    };

    // JavaScript micro-templating, similar to John Resig's implementation.
    // Underscore templating handles arbitrary delimiters, preserves whitespace,
    // and correctly escapes quotes within interpolated code.
    // NB: `oldSettings` only exists for backwards compatibility.
    _.template = function (text, settings, oldSettings) {
      if (!settings && oldSettings) settings = oldSettings;
      settings = _.defaults({}, settings, _.templateSettings);

      // Combine delimiters into one regular expression via alternation.
      var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');

      // Compile the template source, escaping string literals appropriately.
      var index = 0;
      var source = "__p+='";
      text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
        source += text.slice(index, offset).replace(escaper, escapeChar);
        index = offset + match.length;

        if (escape) {
          source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
        } else if (interpolate) {
          source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
        } else if (evaluate) {
          source += "';\n" + evaluate + "\n__p+='";
        }

        // Adobe VMs need the match returned to produce the correct offest.
        return match;
      });
      source += "';\n";

      // If a variable is not specified, place data values in local scope.
      if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

      source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';

      try {
        var render = new Function(settings.variable || 'obj', '_', source);
      } catch (e) {
        e.source = source;
        throw e;
      }

      var template = function (data) {
        return render.call(this, data, _);
      };

      // Provide the compiled source as a convenience for precompilation.
      var argument = settings.variable || 'obj';
      template.source = 'function(' + argument + '){\n' + source + '}';

      return template;
    };

    // Add a "chain" function. Start chaining a wrapped Underscore object.
    _.chain = function (obj) {
      var instance = _(obj);
      instance._chain = true;
      return instance;
    };

    // OOP
    // ---------------
    // If Underscore is called as a function, it returns a wrapped object that
    // can be used OO-style. This wrapper holds altered versions of all the
    // underscore functions. Wrapped objects may be chained.

    // Helper function to continue chaining intermediate results.
    var result = function (instance, obj) {
      return instance._chain ? _(obj).chain() : obj;
    };

    // Add your own custom functions to the Underscore object.
    _.mixin = function (obj) {
      _.each(_.functions(obj), function (name) {
        var func = _[name] = obj[name];
        _.prototype[name] = function () {
          var args = [this._wrapped];
          push.apply(args, arguments);
          return result(this, func.apply(_, args));
        };
      });
    };

    // Add all of the Underscore functions to the wrapper object.
    _.mixin(_);

    // Add all mutator Array functions to the wrapper.
    _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
      var method = ArrayProto[name];
      _.prototype[name] = function () {
        var obj = this._wrapped;
        method.apply(obj, arguments);
        if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
        return result(this, obj);
      };
    });

    // Add all accessor Array functions to the wrapper.
    _.each(['concat', 'join', 'slice'], function (name) {
      var method = ArrayProto[name];
      _.prototype[name] = function () {
        return result(this, method.apply(this._wrapped, arguments));
      };
    });

    // Extracts the result from a wrapped and chained object.
    _.prototype.value = function () {
      return this._wrapped;
    };

    // Provide unwrapping proxy for some methods used in engine operations
    // such as arithmetic and JSON stringification.
    _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

    _.prototype.toString = function () {
      return '' + this._wrapped;
    };

    // AMD registration happens at the end for compatibility with AMD loaders
    // that may not enforce next-turn semantics on modules. Even though general
    // practice for AMD registration is to be anonymous, underscore registers
    // as a named module because, like jQuery, it is a base library that is
    // popular enough to be bundled in a third party lib, but not be part of
    // an AMD load request. Those cases could generate an error when an
    // anonymous define() is called outside of a loader request.
    if (typeof define === 'function' && define.amd) {
      define('underscore', [], function () {
        return _;
      });
    }
  }).call(this);
  return module.exports;
});
$__System.registerDynamic("f", ["1a"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("1a");
  return module.exports;
});
$__System.register("12", ["f"], function (_export) {
	"use strict";

	var _;

	return {
		setters: [function (_f) {
			_ = _f["default"];
		}],
		execute: function () {
			_export("default", (function () {

				var basket = {
					items: []
				};

				return {
					get: function get() {

						try {
							var ls = JSON.parse(localStorage.getItem("items"));
							if (ls !== null) {
								basket.items = ls;
							}
						} catch (error) {
							basket.items = [];
						}

						return basket;
					},
					addToBasket: function addToBasket(item) {
						item.calc_weight = item.weight;
						basket.items.push(item);
						localStorage.setItem("items", JSON.stringify(basket.items));
					},
					removeFromBasket: function removeFromBasket(item) {
						basket.items.splice(basket.items.indexOf(item), 1);
						localStorage.setItem("items", JSON.stringify(basket.items));
					},
					isInBasket: function isInBasket(item) {
						var existsInBasket = false;
						_.each(basket.items, function (it) {
							if (it.id == item.id) {
								existsInBasket = true;
							}
						});
						return existsInBasket;
					},
					emptyBasket: function emptyBasket() {
						basket.items = [];
						localStorage.setItem("items", basket.items);
					},
					changeQty: function changeQty(item, event) {
						item.calc_carbs = Math.round(event.target.value * item.carbs / item.weight);
						item.calc_weight = event.target.value;

						localStorage.setItem("items", JSON.stringify(basket.items));
					}
				};
			})());
		}
	};
});
$__System.register('1b', ['11', '12', '13', '19', 'f'], function (_export) {
   'use strict';

   var ListComponent, Basket, Vue, BasketComponent, _;

   _export('bootstrap', bootstrap);

   function bootstrap() {

      new Vue({
         el: '#app',
         data: function data() {
            return {
               side: false,
               basket: Basket.get(),
               authors: false,
               agreement: false,
               readyStatus: false
            };
         },
         computed: {
            totalItems: function totalItems() {
               return this.basket.items.length;
            }
         },
         methods: {
            toggleSide: function toggleSide() {
               this.side = !this.side;
            },
            authorsModal: function authorsModal(value) {
               this.authors = value;
            },
            agreementDone: function agreementDone() {
               this.agreement = true;
               localStorage.setItem("agreement", JSON.stringify(this.agreement));
            }
         },
         mounted: function mounted() {
            this.readyStatus = true;
            this.agreement = JSON.parse(localStorage.getItem("agreement"));
         },
         components: {
            'list-component': ListComponent,
            'basket-component': BasketComponent
         }
      });
   }

   return {
      setters: [function (_3) {
         ListComponent = _3['default'];
      }, function (_5) {
         Basket = _5['default'];
      }, function (_2) {
         Vue = _2['default'];
      }, function (_4) {
         BasketComponent = _4['default'];
      }, function (_f) {
         _ = _f['default'];
      }],
      execute: function () {}
   };
});
$__System.register('1', ['1b'], function (_export) {
  'use strict';

  var bootstrap;
  return {
    setters: [function (_b) {
      bootstrap = _b.bootstrap;
    }],
    execute: function () {

      bootstrap();
    }
  };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=app.js.map