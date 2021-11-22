/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = []
    
    for(let i = 0; i < numRows; i++){
      let currentRow = [];
      
      if( i == 0 ){
        currentRow.push(1)
      }else if( i == 1 ){
        currentRow.push(1,1)
      }else{

        let previous = (triangle[i-1].length)
        for(let j = 0; j < previous; j++ ){
          if(j == 0){
            currentRow.push(1)
          }else{
            currentRow.push((triangle[i-1][j] + triangle[i-1][j-1]))
            
          }
        }
        currentRow.push(1)
       
      }
      triangle.push(currentRow)
    }
    return triangle;
    
  
};