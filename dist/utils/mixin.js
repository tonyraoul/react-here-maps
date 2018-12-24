"use strict";
exports.__esModule = true;
require("core-js");
function mixin(behaviour, sharedBehaviour) {
    if (sharedBehaviour === void 0) { sharedBehaviour = {}; }
    // these keys reflect the behaviour that is to be attached to class instances
    var instanceKeys = Reflect.ownKeys(behaviour);
    // these keys reflect static behaviour
    var sharedKeys = Reflect.ownKeys(sharedBehaviour);
    var typeTag = Symbol("isA");
    function _mixin(workingClass) {
        // attach instance-oriented behaviour
        for (var _i = 0, instanceKeys_1 = instanceKeys; _i < instanceKeys_1.length; _i++) {
            var property = instanceKeys_1[_i];
            Object.defineProperty(workingClass.prototype, property, {
                value: behaviour[property],
                writable: true
            });
        }
        Object.defineProperty(workingClass.prototype, typeTag, { value: true });
        // attach static behaviour
        for (var _a = 0, sharedKeys_1 = sharedKeys; _a < sharedKeys_1.length; _a++) {
            var property = sharedKeys_1[_a];
            Object.defineProperty(workingClass, property, {
                enumerable: sharedBehaviour.propertyIsEnumerable(property),
                value: sharedBehaviour[property],
                writable: true
            });
        }
    }
    // this allows you to use "instanceof" on an object that uses a mixin
    Object.defineProperty(_mixin, Symbol.hasInstance, {
        value: function (instance) { return !!instance[typeTag]; },
        writable: true
    });
    return _mixin;
}
exports.mixin = mixin;
exports["default"] = mixin;
