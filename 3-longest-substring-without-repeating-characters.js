/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charArray = [];
    let longestLength = -1;

    for (let i = 0; i < s.length; i++) {
        if (charArray.includes(s.charAt(i))) {
            if (charArray.length > longestLength) {
                longestLength = charArray.length;
            }
            charArray = charArray.slice(charArray.indexOf(s.charAt(i)) + 1, charArray.length); // Remove substring before found char
        }
        charArray.push(s.charAt(i));
    }
    return Math.max(longestLength, charArray.length); // Consider case that longestLength is not updated in the end e.g. "aac"
};
