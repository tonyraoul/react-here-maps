"use strict";
exports.__esModule = true;
function getScriptMap(secure) {
    // store the versions of the HERE API
    var apiVersion = "v3";
    var codeVersion = "3.0";
    // get the relevant protocol for the HERE Maps API
    var protocol = "";
    if (secure === true) {
        protocol = "https:";
    }
    // the base url for all scripts from the API
    var baseUrl = protocol + "//js.api.here.com/" +
        (apiVersion + "/" + codeVersion);
    // core code
    var coreScript = baseUrl + "/mapsjs-core.js";
    // service code
    var serviceScript = baseUrl + "/mapsjs-service.js";
    // default ui code
    var uiScript = baseUrl + "/mapsjs-ui.js";
    // map events (pan, scroll wheel zoom) code
    var mapEventsScript = baseUrl + "/mapsjs-mapevents.js";
    // return an array with all script names within
    return {
        coreScript: coreScript,
        mapEventsScript: mapEventsScript,
        serviceScript: serviceScript,
        uiScript: uiScript
    };
}
exports.getScriptMap = getScriptMap;
// make the getScriptMap method the default export
exports["default"] = getScriptMap;
