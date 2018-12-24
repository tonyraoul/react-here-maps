"use strict";
exports.__esModule = true;
require("core-js");
/**
 * Map for HTML strings against H.map.DomIcon instances
 * @type {Map<string, ScriptState>}
 */
exports.DomIcons = new Map();
/**
 * Returns the DOM Icon for the input HTML string, ensuring that no more
 * than one DOM Icon is created for each HTML string
 * @param html {string} - A string containing the markup to be used as a Dom Icon.
 */
function getDomMarkerIcon(html) {
    if (!exports.DomIcons.has(html)) {
        var icon = new H.map.DomIcon(html);
        exports.DomIcons.set(html, icon);
    }
    return exports.DomIcons.get(html);
}
exports["default"] = getDomMarkerIcon;
