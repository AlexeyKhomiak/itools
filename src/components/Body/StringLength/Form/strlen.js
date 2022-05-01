////function strLen(str) {
////    var len = 0;
////    for (var i = 0; i < str.length; i++) {
////        if (str.charCodeAt(i) > 255 || str.charCodeAt(i < 0)) len += 2; else len++;
////    }
////    return 100;
////}

function strLenChar(str) {
    var lenChar = 0;
    for (var i = 0; i < str.length; i++) {
        lenChar++;
    }
    return lenChar;
}

export default strLenChar;