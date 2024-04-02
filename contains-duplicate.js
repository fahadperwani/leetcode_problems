var containsDuplicate = function (nums) {
  var times = {};
  for (var i = 0; i < nums.length; i++) {
    if (times[nums[i]]) times[nums[i]] += 1;
    else times[nums[i]] = 0;
  }
  for (var [key, value] of Object.entries(times)) {
    console.log(key + ": " + value);
    if (value > 0) return true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
