/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s){
    
  let len = s.length  
  for(let i = 0; i < len/2; i++){
    let right = s[len-1-i]
    
    
    s[len-1-i] = s[i]
    s[i] = right
    
  }
  return s
}