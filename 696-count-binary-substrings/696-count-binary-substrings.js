/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    //O(N) solution
    
//     if(s.length <= 1) return 0;
//     let count = 0;
//     let prev = 0;
//     let curr = 1;
    
//     for(let i = 1; i < s.length; i++){
//       if(s[i] === s[i-1]){
//           curr++;
//       }else{
//           prev = curr;
//           curr = 1;
//       };
//       if(prev >= curr) count++;  
        
//     };
//     return count;
    
    let count = 0;
    
    for(let i = 0; i <s.length-1; i++){
        
        let leftPoint = s[i];
        let rightPoint = s[i+1];
        
        if(leftPoint !== rightPoint){
            let left = i;
            let right = i+1;
            
            while(s[left] === leftPoint && s[right] === rightPoint){
                count++;
                left--;
                right++;
                
            }
        }
    }
    return count;
};