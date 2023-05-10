/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arr = [];

    for (let i = 0; i < nums.length; i++) {
        if (arr.includes(target - nums[i])) {
            return [i, arr.indexOf(target - nums[i])];
        }

        arr.push(nums[i])
    }
};
