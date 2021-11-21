/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = [];
    if(s.length %2 !=0 ) return false;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] ===  "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i])
        }else if( s[i] === ")" && stack.length && stack[stack.length - 1] === "(" ){
            stack.pop()
        }else if( s[i] === "}" && stack.length && stack[stack.length - 1] === "{" ){
            stack.pop()
        }else if( s[i] === "]" && stack.length  && stack[stack.length - 1] === "[" ){   
            stack.pop()
        }else{
            return false;
        }
        
    }
    return (stack.length ? false : true);
    
    
};


//stack concept    
// var stack = [];
// stack.push(2);       // stack is now [2]
// stack.push(5);       // stack is now [2, 5]
// var i = stack.pop();