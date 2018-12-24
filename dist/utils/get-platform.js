"use strict";
exports.__esModule = true;
var platform;
// return the current platform if there is one,
// otherwise open up a new platform
function getPlatform(platformOptions) {
    if (platform) {
        return platform;
    }
    platform = new H.service.Platform(platformOptions);
    return platform;
}
exports.getPlatform = getPlatform;
// make the getPlatform method the default export
exports["default"] = getPlatform;
