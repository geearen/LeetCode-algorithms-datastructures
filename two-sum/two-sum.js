/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = function(nums, target) {
//     let indices = [];
//     for(let i = 0; i < nums.length; i++){
//         for(let j = 1+i; j < nums.length; j++){
//             if((nums[i]+nums[j]) == target){
//               indices.push(i,j);
//               return indices;
//             }
//         }
//     }
//     return "No solution";
// };

// const twoSum = function(nums, target){
//     const comp ={};
//     for(let i=0; i<nums.length; i++){
//         if(comp[nums[i]] >= 0){
//             return [comp[nums[i]], i]
//         }
//         comp[target-nums[i]] = i;
//     }
// }

function twoSum(nums, target){
  const dict = {};
    for(let i = 0; i < nums.length; i++){
      dict[nums[i]] = i;
    }

    for(let i = 0; i <nums.length; i++){
      let diff = target - nums[i]
        if(diff in dict && i != dict[diff.valueOf()] ) return [i, dict[diff]]
    }
  return [];
}