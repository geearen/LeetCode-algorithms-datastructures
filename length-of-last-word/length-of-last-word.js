/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    
  
 
    let count = 0
    let start = false
    for(let i = s.length-1 ; i >= 0; i--){
      
      if(s[i] !== ' '){
        start = true;
      }
      if(start){
        if(s[i] ===' ')break;
        count++
      }

    }

  return count;
};