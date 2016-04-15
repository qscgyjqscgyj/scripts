window.jQuery || function() {
    window.setTimeout(function() {
        var a = document,
            c = a.getElementsByTagName("script")[0],
            a = a.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
        c.parentNode.insertBefore(a, c)
    }, 1)
}();
$('.span12').css('width', '100%');
