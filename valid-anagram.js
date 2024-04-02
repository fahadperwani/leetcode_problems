/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  var counts = {};
  if (s.length !== t.length) return false;
  for (var i of s) {
    if (i in counts) counts[i] += 1;
    else counts[i] = 1;
  }
  for (var i of t) {
    if (!(i in counts)) return false;
    if (counts[i] === 0) return false;
    counts[i] -= 1;
  }
  return true;
};
