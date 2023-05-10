/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0;
    const absX = parseInt(x.toString().split("").reverse().join("")); // convert number to string and then array to reverse

    if (absX > 2 ** 31 - 1 || absX < -1 * 2 ** 31) {
        return 0;
    }

    return isNegative ? -1 * absX : absX;
};
