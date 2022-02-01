/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    
    if(s.length <= 1) return 0;
    let count = 0;
    let prev = 0;
    let curr = 1;
    
    for(let i = 1; i < s.length; i++){
      if(s[i] === s[i-1]){
          curr++;
      }else{
          prev = curr;
          curr = 1;
      };
      if(prev >= curr) count++;  
        
    };
    return count;
};