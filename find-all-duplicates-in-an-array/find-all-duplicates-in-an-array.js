/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    // let dup = []
    //   for(let i = 0; i < nums.length; i++){
    //     for(let j = i + 1; j < nums.length; j++ ){
    //       if(nums[i] === nums[j]){
    //         dup.push(nums[i]);
    //       }
    //     }
    //   }
    //   dup.sort();
    //   return dup;
    nums.sort();
    const result = nums.filter((element, idx) => {
        return element === nums[++idx];
    })
    return result;
};