/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    
    let dict = {};
        
    for(let i = 0; i < s.length; i++){
        let char = s[i]
        if( char in dict){
          dict[s[i]].push(i);
        }else{
          dict[s[i]] = [i];
        }
    }
    
    for(let i = 0; i <s.length; i++){
      if(dict[s[i]].length === 1 ){
        return i;
      }
    }
    return -1;


};


