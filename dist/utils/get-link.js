"use strict";
exports.__esModule = true;
// import from npm
require("core-js");
var lodash_1 = require("lodash");
/**
 * map for link names against utility objects
 * @type {Map<string, LinkState>}
 */
var loadedLinks = new Map();
/**
 * Get a style or other linked resource from a remote location.
 * @param name {string} - The name of the resource to be retrieved.
 * @param url {string} - The URL/location of the resource to be retrieved.
 */
function getLink(url, name) {
    if (!loadedLinks.has(name) && !document.querySelector("link[href=\"" + url + "\"]")) {
        var link = document.createElement("link");
        var body = document.getElementsByTagName("body")[0];
        lodash_1.assignIn(link, {
            href: url,
            rel: "stylesheet",
            type: "text/css"
        });
        body.appendChild(link);
        var linkObject = {
            hasLoaded: false,
            link: link,
            wasRejected: false
        };
        loadedLinks.set(name, linkObject);
    }
    return loadedLinks.get(name);
}
exports.getLink = getLink;
// make the "getLink" method the default export
exports["default"] = getLink;
