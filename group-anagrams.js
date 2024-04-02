/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var seen = new Set();
  var output = [];
  for (var i = 0; i < strs.length; i++) {
    if (seen.has(strs[i])) continue;
    var arr = [strs[i]];
    var map = {};
    for (var j of strs[i]) {
      if (j in map) map[j] += 1;
      else map[j] = 1;
    }
    var temp = { ...map };
    for (var j = i + 1; j < strs.length; j++) {
      if (seen.has(strs[j])) continue;
      if (strs[j].length !== strs[i].length) continue;
      var isAnagram = true;
      for (var k of strs[j]) {
        if (!(k in temp) || temp[k] === 0) {
          isAnagram = false;
          break;
        } else temp[k] -= 1;
      }
      temp = { ...map };
      if (isAnagram) {
        seen.add(strs[j]);
        arr.push(strs[j]);
      }
    }
    output.push(arr);
  }
  return output;
};
console.log(groupAnagrams(["", "", ""]));
