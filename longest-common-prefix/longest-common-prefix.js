/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs){
  
    if(strs == null || strs.length == 0) return "";
  let current = strs[0]
  
  for(let i = 1; i <strs.length; i++){
      
    while(strs[i].indexOf(current) != 0){
      current = current.substring(0, current.length -1)
      if(current === "") return "";
    }
  }
  return current;
};