if (/\bMSIE 6/.test(navigator.userAgent) && !window.opera) {
    document.location = "outdated.html";
} else if ((navigator.userAgent.indexOf('Mobile') != -1)) {
    document.location = "mobile.html";
}