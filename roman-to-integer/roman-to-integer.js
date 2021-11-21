/**
 * @param {string} s
 * @return {number}
 */
// const romanToInt = function(s) {
//     const romanNumMap = new Map();
//     romanNumMap.set('I', 1);
//     romanNumMap.set('V', 5);
//     romanNumMap.set('X',10);
//     romanNumMap.set('L',50);
//     romanNumMap.set('C',100);
//     romanNumMap.set('D',500);
//     romanNumMap.set('M',1000);
//     let total = 0;
//     for(let i = 0; i < s.length; i++){
//         if(i > 0 && romanNumMap.get(s[i]) > romanNumMap.get(s[i-1])){
//           total += romanNumMap.get(s[i]) - 2* romanNumMap.get(s[i-1]);
//         }else{
//           total += romanNumMap.get(s[i]);
//         }

//     };
//     return total;
// };


const romanToInt = function(s){
  const dict = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
  }
  let total = 0;
  
  
  for(let i = 0; i < s.length; i ++){
    let char = s[i]
    let beforeChar = s[i-1]
    
    if(i >0 && dict[char] > dict[beforeChar]){
      total += dict[char] - 2* dict[beforeChar];
    }else{
      total += dict[char];
    }
  }
  return total;
}