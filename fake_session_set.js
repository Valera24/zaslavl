function setFakeSession() {
    var name = "laravel_session";
    var value = "eyJpdiI6IjZzNG41Um1VRkRQMlUwVGZ4bkFDY1NUbXZkRGpKZUtvUVwvaHNVTHFqeno4PSIsInZhbHVlIjoiTTlhcE1OUnVhVmJpT0VlYlhEYVpobnlHZnhQaTFING5rbDhqWWVqTlJLY3FiUkVLMnRKaUFCU1MxcHhQWHczNFRXQTFCU2ptUjlXQ2lRRlJXdXlVdXc9PSIsIm1hYyI6ImI2MzZlYjZiZjRkODYwODA5YjZiODIxZTgxZTNjNGU2MTIxMWVlOWFiM2UxYzcxMGVmYTczNTAyYTZlNTE2NWYifQ==";
    var expire = 1504645444;

    setCookie(name, value, {expires: expire});
}

function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires === "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}