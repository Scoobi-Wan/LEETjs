/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = "";
    for (let i = 0; i < strs[0].length; i++) {
        let filtered = strs.filter(v => v[i] === strs[0][i]);
        if (filtered.length !== strs.length) {
            return common;
        } else {
            common += strs[0][i];
        }
    }
    
    return common;
};
