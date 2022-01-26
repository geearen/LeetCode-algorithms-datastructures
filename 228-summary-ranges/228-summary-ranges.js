/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const ranges = [];
    let i = 0 // left pointers
    for(let j = 1; j <= nums.length; j++){
      if(nums[j] !== nums[j-1]+ 1){
        if(i === j -1 ){
          console.log(ranges.push(`${nums[i]}`))
        }else{
          console.log(ranges.push(`${nums[i]}->${nums[j-1]}`))
        }
        i = j;
      }
    }
    return ranges; 
};