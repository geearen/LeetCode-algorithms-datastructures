/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {


      let i = m-1;
      let j = n-1;
      let y = m + n -1; 

      while(i >= 0 && j >= 0){

        if(nums1[i] < nums2[j]){
          let n = nums2[j]
          nums1[y] = n;
          y--;
          j--;
        }else{
          let n = nums1[i];
          nums1[y] = n;
          y--;
          i--;
        }

      }

      while( j >= 0 ){
        let n = nums2[j]
        nums1[y] = n;
        j--;
        y--;
      }
    
};