"use strict";
var WhiteListHOST = __WHITE_LIST__;

function FindProxyForURL(url, host) {
    if (host.indexOf(".") < 0 ||
        true === WhiteListHOST[host] ||
        __IS_HOST__
    ) {
        //Plain Host Name
        //or host in whitelist
        return "DIRECT";
    } else if (/^(\d{1,3}\.){3}\d{1,3}$/.test(host) &&
        (__IS_NET__)
    ) {
        //Intranet IP
        return "DIRECT";
    }
    return "PROXY __proxy__";
};