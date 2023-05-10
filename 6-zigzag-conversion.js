/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    let up = true;
    let rowPointer = -1;
    const rows = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        rows[i] = [];
    }

    for (const char of s) {
        rowPointer = up ? rowPointer + 1 : rowPointer - 1;
        rows[rowPointer].push(char);

        if (rowPointer === 0) {
            up = true;
        } else if (rowPointer === numRows - 1) {
            up = false;
        }
    }

    return [].concat(...rows).join("");
};
