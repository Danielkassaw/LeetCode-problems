/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let yes = 0;
    let leng = nums.length;
    for (let i = 0; i <= leng; i++) {
        for (let j = 0; j <= leng; j++) {
            if (i !==j && nums[i] === nums[j]) {
                yes = 0;
                break;
            }
            else {
                yes = 1;
            }
        }
        if (yes == 1) {
            return nums[i];
        }
    }
};