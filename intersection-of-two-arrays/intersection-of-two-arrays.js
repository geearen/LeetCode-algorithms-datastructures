/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const dict = {}
    
    const result = []
        for(let i = 0; i <nums1.length; i++){
            dict[nums1[i]] = i    
        }

        for(let j = 0; j < nums2.length; j++){
          if(nums2[j] in dict){
            if(!result.includes(nums2[j])){
              result.push(nums2[j])
            }
          }
        }

    return result;
};