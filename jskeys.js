function jskeys_goto(url)
{
    document.location = url;
}

function jskeys_convert_to_keystr(e)
{
    var char = String.fromCharCode(e.charCode || e.keyCode);
    char = char.toLowerCase();

    if (e.shiftKey)
        char = "S-" + char;
    if (e.altKey || e.metaKey)
        char = "M-" + char;
    if (e.ctrlKey)
        char = "C-" + char;

    return char;
}

function jskeys_initialize(binds)
{
    window.addEventListener(
        "keydown",
        function(e) {
            var e = window.event || e;
            var char = jskeys_convert_to_keystr(e);

            if (char in binds) {
                window[binds[char][0]].apply(null, binds[char].slice(1));
                e.returnValue = false;
                e.preventDefault();
            }
        },
        false
    );
}
