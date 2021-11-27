/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
//     let output = []
    
//     if(nums == []) return output;
    
//     let placeholder = []
//     for(let i = 0; i < nums.length; i++){
//       placeholder.push(nums[i])
        
//       if(nums[i] === nums[i+1]-1){
//         placeholder.push(nums[i+1]);
//       }else if(placeholder.length === 1){
//         placeholder.push(nums[i])
//         output.push(`${placeholder[0]}`)
//         placeholder =[];
//       }else{
//         output.push(`${placeholder[0]}->${placeholder[placeholder.length-1]}`)
//         placeholder = [];
//       }
//     }
//     return output;
    
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