(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('core-js/modules/es.symbol'), require('core-js/modules/es.symbol.description'), require('core-js/modules/es.symbol.async-iterator'), require('core-js/modules/es.symbol.has-instance'), require('core-js/modules/es.symbol.is-concat-spreadable'), require('core-js/modules/es.symbol.iterator'), require('core-js/modules/es.symbol.match'), require('core-js/modules/es.symbol.match-all'), require('core-js/modules/es.symbol.replace'), require('core-js/modules/es.symbol.search'), require('core-js/modules/es.symbol.species'), require('core-js/modules/es.symbol.split'), require('core-js/modules/es.symbol.to-primitive'), require('core-js/modules/es.symbol.to-string-tag'), require('core-js/modules/es.symbol.unscopables'), require('core-js/modules/es.array.concat'), require('core-js/modules/es.array.copy-within'), require('core-js/modules/es.array.every'), require('core-js/modules/es.array.fill'), require('core-js/modules/es.array.filter'), require('core-js/modules/es.array.find'), require('core-js/modules/es.array.find-index'), require('core-js/modules/es.array.flat'), require('core-js/modules/es.array.flat-map'), require('core-js/modules/es.array.for-each'), require('core-js/modules/es.array.from'), require('core-js/modules/es.array.includes'), require('core-js/modules/es.array.index-of'), require('core-js/modules/es.array.iterator'), require('core-js/modules/es.array.join'), require('core-js/modules/es.array.last-index-of'), require('core-js/modules/es.array.map'), require('core-js/modules/es.array.of'), require('core-js/modules/es.array.reduce'), require('core-js/modules/es.array.reduce-right'), require('core-js/modules/es.array.slice'), require('core-js/modules/es.array.some'), require('core-js/modules/es.array.species'), require('core-js/modules/es.array.splice'), require('core-js/modules/es.array.unscopables.flat'), require('core-js/modules/es.array.unscopables.flat-map'), require('core-js/modules/es.array-buffer.constructor'), require('core-js/modules/es.date.to-primitive'), require('core-js/modules/es.function.has-instance'), require('core-js/modules/es.function.name'), require('core-js/modules/es.global-this'), require('core-js/modules/es.json.stringify'), require('core-js/modules/es.json.to-string-tag'), require('core-js/modules/es.map'), require('core-js/modules/es.math.acosh'), require('core-js/modules/es.math.asinh'), require('core-js/modules/es.math.atanh'), require('core-js/modules/es.math.cbrt'), require('core-js/modules/es.math.clz32'), require('core-js/modules/es.math.cosh'), require('core-js/modules/es.math.expm1'), require('core-js/modules/es.math.fround'), require('core-js/modules/es.math.hypot'), require('core-js/modules/es.math.imul'), require('core-js/modules/es.math.log10'), require('core-js/modules/es.math.log1p'), require('core-js/modules/es.math.log2'), require('core-js/modules/es.math.sign'), require('core-js/modules/es.math.sinh'), require('core-js/modules/es.math.tanh'), require('core-js/modules/es.math.to-string-tag'), require('core-js/modules/es.math.trunc'), require('core-js/modules/es.number.constructor'), require('core-js/modules/es.number.epsilon'), require('core-js/modules/es.number.is-finite'), require('core-js/modules/es.number.is-integer'), require('core-js/modules/es.number.is-nan'), require('core-js/modules/es.number.is-safe-integer'), require('core-js/modules/es.number.max-safe-integer'), require('core-js/modules/es.number.min-safe-integer'), require('core-js/modules/es.number.parse-float'), require('core-js/modules/es.number.parse-int'), require('core-js/modules/es.number.to-fixed'), require('core-js/modules/es.object.assign'), require('core-js/modules/es.object.define-getter'), require('core-js/modules/es.object.define-setter'), require('core-js/modules/es.object.entries'), require('core-js/modules/es.object.freeze'), require('core-js/modules/es.object.from-entries'), require('core-js/modules/es.object.get-own-property-descriptor'), require('core-js/modules/es.object.get-own-property-descriptors'), require('core-js/modules/es.object.get-own-property-names'), require('core-js/modules/es.object.get-prototype-of'), require('core-js/modules/es.object.is'), require('core-js/modules/es.object.is-extensible'), require('core-js/modules/es.object.is-frozen'), require('core-js/modules/es.object.is-sealed'), require('core-js/modules/es.object.keys'), require('core-js/modules/es.object.lookup-getter'), require('core-js/modules/es.object.lookup-setter'), require('core-js/modules/es.object.prevent-extensions'), require('core-js/modules/es.object.seal'), require('core-js/modules/es.object.to-string'), require('core-js/modules/es.object.values'), require('core-js/modules/es.promise'), require('core-js/modules/es.promise.all-settled'), require('core-js/modules/es.promise.finally'), require('core-js/modules/es.reflect.apply'), require('core-js/modules/es.reflect.construct'), require('core-js/modules/es.reflect.define-property'), require('core-js/modules/es.reflect.delete-property'), require('core-js/modules/es.reflect.get'), require('core-js/modules/es.reflect.get-own-property-descriptor'), require('core-js/modules/es.reflect.get-prototype-of'), require('core-js/modules/es.reflect.has'), require('core-js/modules/es.reflect.is-extensible'), require('core-js/modules/es.reflect.own-keys'), require('core-js/modules/es.reflect.prevent-extensions'), require('core-js/modules/es.reflect.set'), require('core-js/modules/es.reflect.set-prototype-of'), require('core-js/modules/es.regexp.constructor'), require('core-js/modules/es.regexp.exec'), require('core-js/modules/es.regexp.flags'), require('core-js/modules/es.regexp.sticky'), require('core-js/modules/es.regexp.test'), require('core-js/modules/es.regexp.to-string'), require('core-js/modules/es.set'), require('core-js/modules/es.string.code-point-at'), require('core-js/modules/es.string.ends-with'), require('core-js/modules/es.string.from-code-point'), require('core-js/modules/es.string.includes'), require('core-js/modules/es.string.iterator'), require('core-js/modules/es.string.match'), require('core-js/modules/es.string.match-all'), require('core-js/modules/es.string.pad-end'), require('core-js/modules/es.string.pad-start'), require('core-js/modules/es.string.raw'), require('core-js/modules/es.string.repeat'), require('core-js/modules/es.string.replace'), require('core-js/modules/es.string.search'), require('core-js/modules/es.string.split'), require('core-js/modules/es.string.starts-with'), require('core-js/modules/es.string.trim'), require('core-js/modules/es.string.trim-end'), require('core-js/modules/es.string.trim-start'), require('core-js/modules/es.string.anchor'), require('core-js/modules/es.string.big'), require('core-js/modules/es.string.blink'), require('core-js/modules/es.string.bold'), require('core-js/modules/es.string.fixed'), require('core-js/modules/es.string.fontcolor'), require('core-js/modules/es.string.fontsize'), require('core-js/modules/es.string.italics'), require('core-js/modules/es.string.link'), require('core-js/modules/es.string.small'), require('core-js/modules/es.string.strike'), require('core-js/modules/es.string.sub'), require('core-js/modules/es.string.sup'), require('core-js/modules/es.typed-array.float32-array'), require('core-js/modules/es.typed-array.float64-array'), require('core-js/modules/es.typed-array.int8-array'), require('core-js/modules/es.typed-array.int16-array'), require('core-js/modules/es.typed-array.int32-array'), require('core-js/modules/es.typed-array.uint8-array'), require('core-js/modules/es.typed-array.uint8-clamped-array'), require('core-js/modules/es.typed-array.uint16-array'), require('core-js/modules/es.typed-array.uint32-array'), require('core-js/modules/es.typed-array.copy-within'), require('core-js/modules/es.typed-array.every'), require('core-js/modules/es.typed-array.fill'), require('core-js/modules/es.typed-array.filter'), require('core-js/modules/es.typed-array.find'), require('core-js/modules/es.typed-array.find-index'), require('core-js/modules/es.typed-array.for-each'), require('core-js/modules/es.typed-array.from'), require('core-js/modules/es.typed-array.includes'), require('core-js/modules/es.typed-array.index-of'), require('core-js/modules/es.typed-array.iterator'), require('core-js/modules/es.typed-array.join'), require('core-js/modules/es.typed-array.last-index-of'), require('core-js/modules/es.typed-array.map'), require('core-js/modules/es.typed-array.of'), require('core-js/modules/es.typed-array.reduce'), require('core-js/modules/es.typed-array.reduce-right'), require('core-js/modules/es.typed-array.reverse'), require('core-js/modules/es.typed-array.set'), require('core-js/modules/es.typed-array.slice'), require('core-js/modules/es.typed-array.some'), require('core-js/modules/es.typed-array.sort'), require('core-js/modules/es.typed-array.subarray'), require('core-js/modules/es.typed-array.to-locale-string'), require('core-js/modules/es.typed-array.to-string'), require('core-js/modules/es.weak-map'), require('core-js/modules/es.weak-set'), require('core-js/modules/web.dom-collections.for-each'), require('core-js/modules/web.dom-collections.iterator'), require('core-js/modules/web.queue-microtask'), require('core-js/modules/web.url'), require('core-js/modules/web.url.to-json'), require('core-js/modules/web.url-search-params'), require('regenerator-runtime/runtime'), require('whatwg-fetch'), require('gsap')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.symbol', 'core-js/modules/es.symbol.description', 'core-js/modules/es.symbol.async-iterator', 'core-js/modules/es.symbol.has-instance', 'core-js/modules/es.symbol.is-concat-spreadable', 'core-js/modules/es.symbol.iterator', 'core-js/modules/es.symbol.match', 'core-js/modules/es.symbol.match-all', 'core-js/modules/es.symbol.replace', 'core-js/modules/es.symbol.search', 'core-js/modules/es.symbol.species', 'core-js/modules/es.symbol.split', 'core-js/modules/es.symbol.to-primitive', 'core-js/modules/es.symbol.to-string-tag', 'core-js/modules/es.symbol.unscopables', 'core-js/modules/es.array.concat', 'core-js/modules/es.array.copy-within', 'core-js/modules/es.array.every', 'core-js/modules/es.array.fill', 'core-js/modules/es.array.filter', 'core-js/modules/es.array.find', 'core-js/modules/es.array.find-index', 'core-js/modules/es.array.flat', 'core-js/modules/es.array.flat-map', 'core-js/modules/es.array.for-each', 'core-js/modules/es.array.from', 'core-js/modules/es.array.includes', 'core-js/modules/es.array.index-of', 'core-js/modules/es.array.iterator', 'core-js/modules/es.array.join', 'core-js/modules/es.array.last-index-of', 'core-js/modules/es.array.map', 'core-js/modules/es.array.of', 'core-js/modules/es.array.reduce', 'core-js/modules/es.array.reduce-right', 'core-js/modules/es.array.slice', 'core-js/modules/es.array.some', 'core-js/modules/es.array.species', 'core-js/modules/es.array.splice', 'core-js/modules/es.array.unscopables.flat', 'core-js/modules/es.array.unscopables.flat-map', 'core-js/modules/es.array-buffer.constructor', 'core-js/modules/es.date.to-primitive', 'core-js/modules/es.function.has-instance', 'core-js/modules/es.function.name', 'core-js/modules/es.global-this', 'core-js/modules/es.json.stringify', 'core-js/modules/es.json.to-string-tag', 'core-js/modules/es.map', 'core-js/modules/es.math.acosh', 'core-js/modules/es.math.asinh', 'core-js/modules/es.math.atanh', 'core-js/modules/es.math.cbrt', 'core-js/modules/es.math.clz32', 'core-js/modules/es.math.cosh', 'core-js/modules/es.math.expm1', 'core-js/modules/es.math.fround', 'core-js/modules/es.math.hypot', 'core-js/modules/es.math.imul', 'core-js/modules/es.math.log10', 'core-js/modules/es.math.log1p', 'core-js/modules/es.math.log2', 'core-js/modules/es.math.sign', 'core-js/modules/es.math.sinh', 'core-js/modules/es.math.tanh', 'core-js/modules/es.math.to-string-tag', 'core-js/modules/es.math.trunc', 'core-js/modules/es.number.constructor', 'core-js/modules/es.number.epsilon', 'core-js/modules/es.number.is-finite', 'core-js/modules/es.number.is-integer', 'core-js/modules/es.number.is-nan', 'core-js/modules/es.number.is-safe-integer', 'core-js/modules/es.number.max-safe-integer', 'core-js/modules/es.number.min-safe-integer', 'core-js/modules/es.number.parse-float', 'core-js/modules/es.number.parse-int', 'core-js/modules/es.number.to-fixed', 'core-js/modules/es.object.assign', 'core-js/modules/es.object.define-getter', 'core-js/modules/es.object.define-setter', 'core-js/modules/es.object.entries', 'core-js/modules/es.object.freeze', 'core-js/modules/es.object.from-entries', 'core-js/modules/es.object.get-own-property-descriptor', 'core-js/modules/es.object.get-own-property-descriptors', 'core-js/modules/es.object.get-own-property-names', 'core-js/modules/es.object.get-prototype-of', 'core-js/modules/es.object.is', 'core-js/modules/es.object.is-extensible', 'core-js/modules/es.object.is-frozen', 'core-js/modules/es.object.is-sealed', 'core-js/modules/es.object.keys', 'core-js/modules/es.object.lookup-getter', 'core-js/modules/es.object.lookup-setter', 'core-js/modules/es.object.prevent-extensions', 'core-js/modules/es.object.seal', 'core-js/modules/es.object.to-string', 'core-js/modules/es.object.values', 'core-js/modules/es.promise', 'core-js/modules/es.promise.all-settled', 'core-js/modules/es.promise.finally', 'core-js/modules/es.reflect.apply', 'core-js/modules/es.reflect.construct', 'core-js/modules/es.reflect.define-property', 'core-js/modules/es.reflect.delete-property', 'core-js/modules/es.reflect.get', 'core-js/modules/es.reflect.get-own-property-descriptor', 'core-js/modules/es.reflect.get-prototype-of', 'core-js/modules/es.reflect.has', 'core-js/modules/es.reflect.is-extensible', 'core-js/modules/es.reflect.own-keys', 'core-js/modules/es.reflect.prevent-extensions', 'core-js/modules/es.reflect.set', 'core-js/modules/es.reflect.set-prototype-of', 'core-js/modules/es.regexp.constructor', 'core-js/modules/es.regexp.exec', 'core-js/modules/es.regexp.flags', 'core-js/modules/es.regexp.sticky', 'core-js/modules/es.regexp.test', 'core-js/modules/es.regexp.to-string', 'core-js/modules/es.set', 'core-js/modules/es.string.code-point-at', 'core-js/modules/es.string.ends-with', 'core-js/modules/es.string.from-code-point', 'core-js/modules/es.string.includes', 'core-js/modules/es.string.iterator', 'core-js/modules/es.string.match', 'core-js/modules/es.string.match-all', 'core-js/modules/es.string.pad-end', 'core-js/modules/es.string.pad-start', 'core-js/modules/es.string.raw', 'core-js/modules/es.string.repeat', 'core-js/modules/es.string.replace', 'core-js/modules/es.string.search', 'core-js/modules/es.string.split', 'core-js/modules/es.string.starts-with', 'core-js/modules/es.string.trim', 'core-js/modules/es.string.trim-end', 'core-js/modules/es.string.trim-start', 'core-js/modules/es.string.anchor', 'core-js/modules/es.string.big', 'core-js/modules/es.string.blink', 'core-js/modules/es.string.bold', 'core-js/modules/es.string.fixed', 'core-js/modules/es.string.fontcolor', 'core-js/modules/es.string.fontsize', 'core-js/modules/es.string.italics', 'core-js/modules/es.string.link', 'core-js/modules/es.string.small', 'core-js/modules/es.string.strike', 'core-js/modules/es.string.sub', 'core-js/modules/es.string.sup', 'core-js/modules/es.typed-array.float32-array', 'core-js/modules/es.typed-array.float64-array', 'core-js/modules/es.typed-array.int8-array', 'core-js/modules/es.typed-array.int16-array', 'core-js/modules/es.typed-array.int32-array', 'core-js/modules/es.typed-array.uint8-array', 'core-js/modules/es.typed-array.uint8-clamped-array', 'core-js/modules/es.typed-array.uint16-array', 'core-js/modules/es.typed-array.uint32-array', 'core-js/modules/es.typed-array.copy-within', 'core-js/modules/es.typed-array.every', 'core-js/modules/es.typed-array.fill', 'core-js/modules/es.typed-array.filter', 'core-js/modules/es.typed-array.find', 'core-js/modules/es.typed-array.find-index', 'core-js/modules/es.typed-array.for-each', 'core-js/modules/es.typed-array.from', 'core-js/modules/es.typed-array.includes', 'core-js/modules/es.typed-array.index-of', 'core-js/modules/es.typed-array.iterator', 'core-js/modules/es.typed-array.join', 'core-js/modules/es.typed-array.last-index-of', 'core-js/modules/es.typed-array.map', 'core-js/modules/es.typed-array.of', 'core-js/modules/es.typed-array.reduce', 'core-js/modules/es.typed-array.reduce-right', 'core-js/modules/es.typed-array.reverse', 'core-js/modules/es.typed-array.set', 'core-js/modules/es.typed-array.slice', 'core-js/modules/es.typed-array.some', 'core-js/modules/es.typed-array.sort', 'core-js/modules/es.typed-array.subarray', 'core-js/modules/es.typed-array.to-locale-string', 'core-js/modules/es.typed-array.to-string', 'core-js/modules/es.weak-map', 'core-js/modules/es.weak-set', 'core-js/modules/web.dom-collections.for-each', 'core-js/modules/web.dom-collections.iterator', 'core-js/modules/web.queue-microtask', 'core-js/modules/web.url', 'core-js/modules/web.url.to-json', 'core-js/modules/web.url-search-params', 'regenerator-runtime/runtime', 'whatwg-fetch', 'gsap'], factory) :
  (global = global || self, global.motext = factory(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, global.gsap));
}(this, (function (es_symbol, es_symbol_description, es_symbol_asyncIterator, es_symbol_hasInstance, es_symbol_isConcatSpreadable, es_symbol_iterator, es_symbol_match, es_symbol_matchAll, es_symbol_replace, es_symbol_search, es_symbol_species, es_symbol_split, es_symbol_toPrimitive, es_symbol_toStringTag, es_symbol_unscopables, es_array_concat, es_array_copyWithin, es_array_every, es_array_fill, es_array_filter, es_array_find, es_array_findIndex, es_array_flat, es_array_flatMap, es_array_forEach, es_array_from, es_array_includes, es_array_indexOf, es_array_iterator, es_array_join, es_array_lastIndexOf, es_array_map, es_array_of, es_array_reduce, es_array_reduceRight, es_array_slice, es_array_some, es_array_species, es_array_splice, es_array_unscopables_flat, es_array_unscopables_flatMap, es_arrayBuffer_constructor, es_date_toPrimitive, es_function_hasInstance, es_function_name, es_globalThis, es_json_stringify, es_json_toStringTag, es_map, es_math_acosh, es_math_asinh, es_math_atanh, es_math_cbrt, es_math_clz32, es_math_cosh, es_math_expm1, es_math_fround, es_math_hypot, es_math_imul, es_math_log10, es_math_log1p, es_math_log2, es_math_sign, es_math_sinh, es_math_tanh, es_math_toStringTag, es_math_trunc, es_number_constructor, es_number_epsilon, es_number_isFinite, es_number_isInteger, es_number_isNan, es_number_isSafeInteger, es_number_maxSafeInteger, es_number_minSafeInteger, es_number_parseFloat, es_number_parseInt, es_number_toFixed, es_object_assign, es_object_defineGetter, es_object_defineSetter, es_object_entries, es_object_freeze, es_object_fromEntries, es_object_getOwnPropertyDescriptor, es_object_getOwnPropertyDescriptors, es_object_getOwnPropertyNames, es_object_getPrototypeOf, es_object_is, es_object_isExtensible, es_object_isFrozen, es_object_isSealed, es_object_keys, es_object_lookupGetter, es_object_lookupSetter, es_object_preventExtensions, es_object_seal, es_object_toString, es_object_values, es_promise, es_promise_allSettled, es_promise_finally, es_reflect_apply, es_reflect_construct, es_reflect_defineProperty, es_reflect_deleteProperty, es_reflect_get, es_reflect_getOwnPropertyDescriptor, es_reflect_getPrototypeOf, es_reflect_has, es_reflect_isExtensible, es_reflect_ownKeys, es_reflect_preventExtensions, es_reflect_set, es_reflect_setPrototypeOf, es_regexp_constructor, es_regexp_exec, es_regexp_flags, es_regexp_sticky, es_regexp_test, es_regexp_toString, es_set, es_string_codePointAt, es_string_endsWith, es_string_fromCodePoint, es_string_includes, es_string_iterator, es_string_match, es_string_matchAll, es_string_padEnd, es_string_padStart, es_string_raw, es_string_repeat, es_string_replace, es_string_search, es_string_split, es_string_startsWith, es_string_trim, es_string_trimEnd, es_string_trimStart, es_string_anchor, es_string_big, es_string_blink, es_string_bold, es_string_fixed, es_string_fontcolor, es_string_fontsize, es_string_italics, es_string_link, es_string_small, es_string_strike, es_string_sub, es_string_sup, es_typedArray_float32Array, es_typedArray_float64Array, es_typedArray_int8Array, es_typedArray_int16Array, es_typedArray_int32Array, es_typedArray_uint8Array, es_typedArray_uint8ClampedArray, es_typedArray_uint16Array, es_typedArray_uint32Array, es_typedArray_copyWithin, es_typedArray_every, es_typedArray_fill, es_typedArray_filter, es_typedArray_find, es_typedArray_findIndex, es_typedArray_forEach, es_typedArray_from, es_typedArray_includes, es_typedArray_indexOf, es_typedArray_iterator, es_typedArray_join, es_typedArray_lastIndexOf, es_typedArray_map, es_typedArray_of, es_typedArray_reduce, es_typedArray_reduceRight, es_typedArray_reverse, es_typedArray_set, es_typedArray_slice, es_typedArray_some, es_typedArray_sort, es_typedArray_subarray, es_typedArray_toLocaleString, es_typedArray_toString, es_weakMap, es_weakSet, web_domCollections_forEach, web_domCollections_iterator, web_queueMicrotask, web_url, web_url_toJson, web_urlSearchParams, runtime, whatwgFetch, gsap) { 'use strict';

  gsap = gsap && Object.prototype.hasOwnProperty.call(gsap, 'default') ? gsap['default'] : gsap;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var cnt = 1;
  var DEFAULT_OPTIONS = {
    color: '#000000',
    colors: ['#0dafb7', '#eabc36', '#e154ed', '#62d628'],
    revealProperty: 'y',
    revealAmount: -6,
    revealDuration: 0.8,
    revealEase: 'elastic',
    strokeWidth: 8,
    strokeLinecap: 'square',
    strokeLinejoin: 'auto',
    strokeDuration: 1,
    strokeEase: 'slow',
    offsetDuration: 0.15,
    staggerAmount: 0.1,
    staggerEase: 'none',
    font: 'nunito' // TODO: hook-up to editor drop-down

  };
  var SYMBOL_MAP = {
    '!': 'exclamation-mark',
    '?': 'question-mark',
    '.': 'period',
    ',': 'comma',
    '"': 'double-quote',
    '\'': 'apostrophe',
    '&': 'ampersand'
  };

  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('prepend')) {
        // eslint-disable-line
        return;
      }

      Object.defineProperty(item, 'prepend', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // closest() polyfill for IE 11
  // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (Element.prototype.matches.call(el, s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  }

  var DESCENDERS = ['Q', 'g', 'j', 'p', 'q', 'y', ','];
  var ASCENDERS = ['"', '\''];
  var UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var instances = [];
  var prepped = false;
  var fetchPromise = null;

  function loadFont(path) {
    if (fetchPromise) {
      return fetchPromise;
    } else {
      fetchPromise = fetch(path).then(function (response) {
        return response.text();
      }).then(function (text) {
        var fontWrapper = document.createElement('div');
        fontWrapper.innerHTML = text;
        fontWrapper.setAttribute('class', 'motext-font');
        document.body.appendChild(fontWrapper);
        addStyles();
      }).catch(function (err) {
        console.error(err);
      });
      return fetchPromise;
    }
  }

  function init(el) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // eslint-disable-line no-unused-vars
    options = _objectSpread2(_objectSpread2({}, DEFAULT_OPTIONS), options);
    var timelines = [];
    var collection = getElementCollection(el);
    collection.forEach(function (target) {
      if (!prepped) {
        prepSVG(options);
      }

      target.setAttribute('aria-label', target.textContent);
      insertHTML(target, options);
      timelines.push(createTimeline(target, options));
    });
    var instance = {
      el: el,
      collection: collection,
      options: options,
      timelines: timelines,
      play: function play() {
        var promises = [];
        this.timelines.forEach(function (tl) {
          promises.push(tl.play());
        });
        return Promise.all(promises);
      }
    };
    instances.push(instance);
    return instance;
  }

  window.addEventListener('resize', function (e) {
    instances.forEach(function (instance) {
      instance.collection.forEach(function (target) {
        var fontSize = getFontSize(target);

        if (fontSize !== target.fontSize) {
          applyFontSize(target, fontSize);
        }
      });
    });
  });

  function prepSVG(options) {
    var font = document.getElementById(options.font);
    prepFontStyles(font);
    layerCharacters(font);
    prepped = true;
  }

  function prepFontStyles(font, options) {
    var STROKE_LENGTH_BUFFER = 11;
    Array.from(font.children).forEach(function (char) {
      if (char.nodeName !== 'g') return;
      char.setAttribute('class', 'motext-colored');
      var strokes = Array.from(char.querySelectorAll('mask path'));
      strokes.forEach(function (stroke) {
        var length = stroke.getTotalLength() + STROKE_LENGTH_BUFFER;
        stroke.style.strokeDasharray = length;
        stroke.style.strokeDashoffset = length;
      });
    });
  }

  function layerCharacters(font, options) {
    Array.from(font.children).forEach(function (char) {
      if (char.nodeName !== 'g') return;
      var charLayer = char.cloneNode(true);
      charLayer.setAttribute('class', 'motext-solid');
      charLayer.setAttribute('id', char.id + 'l');
      var mask = charLayer.querySelector('mask');
      var g = charLayer.querySelector('mask + g');
      var maskID = mask.getAttribute('id');
      mask.setAttribute('id', "".concat(maskID, "-dup"));
      g.setAttribute('mask', "url(#".concat(maskID, "-dup)"));
      font.appendChild(charLayer);
    });
  }

  function insertHTML(target, options) {
    var html = '<span class="motext"><span class="motext-word">';
    target.textContent.trim().split('').forEach(function (char) {
      if (char === ' ') {
        html += '</span><span class="motext-word">';
      } else {
        var symbol = SYMBOL_MAP[char];
        var selector = 'mo-' + char;
        if (symbol) selector = 'mo-' + symbol;
        var svgChar = document.getElementById(selector);
        var svgLayer = document.getElementById(selector + 'l');

        if (svgChar && svgLayer) {
          var size = svgChar.getBBox();
          var offset = '';

          if (DESCENDERS.includes(char)) {
            offset = 'descend';
          } else if (ASCENDERS.includes(char)) {
            offset = 'ascend';
          }

          html += openSVG({
            width: size.width + 11,
            height: size.height + 11,
            offset: offset,
            options: options,
            character: symbol || char
          });
          html += svgChar.outerHTML;
          html += svgLayer.outerHTML;
          html += '</g></svg>';
        } else {
          console.warn("motext.js does not support the character \"".concat(char, "\". This character has been omitted."));
        }
      }
    });
    html += '</span></span>';
    target.innerHTML = html;
    applyColors(target, options);
    var fontSize = getFontSize(target);
    applyFontSize(target, fontSize);
  }

  function applyColors(target, options) {
    var color = options.colors[0];
    Array.from(target.querySelectorAll('.motext-colored mask + g path')).forEach(function (char) {
      char.setAttribute('fill', color);
      var index = options.colors.indexOf(color) + 1;

      if (index >= options.colors.length) {
        index = 0;
      }

      color = options.colors[index];
    });
    Array.from(target.querySelectorAll('.motext-solid mask + g path')).forEach(function (char) {
      char.setAttribute('fill', options.color);
    });
  }

  function getFontSize(target) {
    var fontSize = window.getComputedStyle(target, null).getPropertyValue('font-size');
    fontSize = parseFloat(fontSize);
    return fontSize;
  }

  function applyFontSize(target, fontSize) {
    target.fontSize = fontSize;
    var BASE_SVG_FONT_SIZE = 55;
    var scale = fontSize / BASE_SVG_FONT_SIZE;
    Array.from(target.querySelectorAll('.motext-letter')).forEach(function (letter) {
      var width = letter.getAttribute('data-base-width');
      var height = letter.getAttribute('data-base-height');
      letter.setAttribute('width', width * scale + 'px');
      letter.setAttribute('height', height * scale + 'px');
    });
  }

  function createTimeline(target, options) {
    var colored = target.querySelectorAll('.motext-colored path, .motext-colored polyline');
    var tl = gsap.timeline();
    tl.to(colored, {
      duration: options.strokeDuration,
      ease: options.strokeEase,
      strokeDashoffset: 0,
      stagger: {
        each: options.staggerAmount,
        ease: options.staggerEase,
        onStart: function onStart() {
          revealCharacter.call(this, options);
        }
      }
    });
    var solid = target.querySelectorAll('.motext-solid path, .motext-solid polyline');
    tl.to(solid, {
      duration: options.strokeDuration,
      ease: options.strokeEase,
      strokeDashoffset: 0,
      stagger: {
        each: options.staggerAmount,
        ease: options.staggerEase
      }
    }, options.offsetDuration); // }, 10)

    tl.pause();
    return tl;
  }

  function revealCharacter(options) {
    var target = this.targets()[0].closest('.motext-letter');

    if (!target.getAttribute('data-revealed')) {
      var revealParams = {
        ease: options.revealEase,
        duration: options.revealDuration
      };
      revealParams[options.revealProperty] = options.revealAmount;
      gsap.from(target, revealParams);
      target.setAttribute('data-revealed', true);
    }
  }

  function openSVG(_ref) {
    var width = _ref.width,
        height = _ref.height,
        offset = _ref.offset,
        options = _ref.options,
        character = _ref.character;
    var className = 'motext-letter';

    if (offset) {
      className += " motext-letter--".concat(offset);
    }

    if (character) {
      className += " motext-letter--".concat(character);
    }

    if (UPPERCASE.includes(character)) {
      className += ' motext-letter--uppercase';
    } else if (LOWERCASE.includes(character)) {
      className += ' motext-letter--lowercase';
    }

    className += " motext-letter--".concat(cnt);
    cnt++;
    return "<svg class=\"".concat(className, "\" data-base-width=\"").concat(width, "\" data-base-height=\"").concat(height, "\" width=\"").concat(width, "px\" height=\"").concat(height, "px\" viewBox=\"0 0 ").concat(width, " ").concat(height, "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g class=\"motext-letterInner\" fill=\"none\" transform=\"translate(").concat(options.strokeWidth / 2, ", ").concat(options.strokeWidth / 2, ")\">");
  }

  function getElementCollection(el) {
    if (typeof el === 'string') {
      el = document.querySelectorAll(el);
      return Array.from(el);
    } else if (isNodeList(el)) {
      return Array.from(el);
    } else if (isNode(el) || isElement(el)) {
      return [el];
    } else {
      return [];
    }
  }

  function isNode(el) {
    // ref: https://stackoverflow.com/a/384380/918060
    return (typeof Node === "undefined" ? "undefined" : _typeof(Node)) === 'object' ? el instanceof Node : el && _typeof(el) === 'object' && typeof el.nodeType === 'number' && typeof el.nodeName === 'string';
  }

  function isElement(el) {
    return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object' ? el instanceof HTMLElement : el && _typeof(el) === 'object' && el !== null && el.nodeType === 1 && typeof el.nodeName === 'string';
  }

  function isNodeList(el) {
    // ref: https://stackoverflow.com/a/36857902/918060
    return NodeList.prototype.isPrototypeOf(el); // eslint-disable-line
  }

  function addStyles() {
    var style = document.createElement('style');
    document.head.prepend(style);
    style.textContent = "\n  .motext {\n    display: inline-block;\n  }\n\n  .motext-word {\n    white-space: nowrap;\n    display: inline-block;\n    vertical-align: bottom;\n    margin-right: 0.4em;\n    margin-bottom: 0.4em;\n  }\n\n  .motext-word:last-child {\n    margin-right: 0;\n  }\n\n  .motext-letter {\n    margin-right: -0.08em;\n  }\n\n  .motext-letter--ascend {\n    vertical-align: top;\n  }\n\n  .motext-letter--descend {\n    margin-bottom: -0.19em;\n  }\n\n  .motext-font {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n    width: 0;\n    height: 0;\n    overflow: hidden;\n    visibility: hidden;\n  }\n";
  }

  var motext = {
    loadFont: loadFont,
    init: init
  };

  return motext;

})));
