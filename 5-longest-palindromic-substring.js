/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longestStart = 0;
    let longestEnd = 0;
    let left = 0;
    let right = 0;

    for (let i = 0; i < s.length; i++) {
        left = i;
        right = i;

        while (s.charAt(left - 1) === s.charAt(left)) {
            left--;
        }
        while (s.charAt(right + 1) === s.charAt(right)) {
            right ++;
        }

        while (left >= 0 && right < s.length) {
            if (left - 1 >= 0 && right + 1 < s.length && s.charAt(left - 1) === s.charAt(right + 1)) {
                left--;
                right++;
            } else {
                if (right - left > longestEnd - longestStart) {
                    longestStart = left;
                    longestEnd = right;
                }
                break;
            }
        }
    }

    return s.slice(longestStart, longestEnd + 1);
};
