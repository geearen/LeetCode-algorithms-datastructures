/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {


  let compare = []

  if((t.length === 0 && s.length === 0) || s.length === 0){
      return true
  }else if(t.length === 0){
      return false
  }
  let x = 0

  for(let i = 0; i < t.length; i++){
    if(s[x] === t[i]){
    compare.push(s[x])
    x++;

    }
  }

  return(s === compare.join('').toString()) ? true : false;
};