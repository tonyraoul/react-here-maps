"use strict";
exports.__esModule = true;
require("core-js");
/**
 * Map for image URL strings against H.map.Icon instances
 * @type {Map<string, ScriptState>}
 */
exports.Icons = new Map();
/**
 * Returns the Icon for the input bitmap URL string, ensuring that no more
 * than one Icon is created for each bitmap
 * @param bitmap {string} - The location of the bitmap to be used as an icon
 */
function getMarkerIcon(bitmap) {
    if (!exports.Icons.has(bitmap)) {
        var icon = new H.map.Icon(bitmap);
        exports.Icons.set(bitmap, icon);
    }
    return exports.Icons.get(bitmap);
}
exports["default"] = getMarkerIcon;
