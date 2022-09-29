/*
Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes("viagra") || lowerStr.includes("xxx")

    // if ( str.includes("viagra") || 
    //      str.includes("xxx") ) {
    //         return true;
    // }
    // return false;
}

console.log ( checkSpam('buy ViAgRA now') );
console.log ( checkSpam('free xxxxx') );
console.log ( checkSpam('innocent rabbit') );