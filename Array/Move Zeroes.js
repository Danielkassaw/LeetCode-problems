/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let n = nums.length - 1; 
    let pu = 0;
    for (let i = n; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(pu);
        }
    }
    return nums;

}