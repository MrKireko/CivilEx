if (/\bMSIE 6/.test(navigator.userAgent) && !window.opera) {
    document.location = "outdated.html";
}if ((navigator.userAgent.indexOf('iPad') != -1) || (navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('Mobile') == -1)) { /*checking if user uses a non-desktop browser*/
    document.location = "mobile.html";
}else if ((navigator.userAgent.indexOf('Mobile') != -1)) {
    document.location = "mobile.html";
}