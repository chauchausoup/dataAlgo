function sudoku2(grid) {
    //row checker
      function checkIfDuplicateExists(w){
            return new Set(w).size !== w.length 
        }
        
        var column=[];
        
    for(var i = 0;i<grid.length;i++){
        for(var j = 0;j<grid.length;j++){
       if(checkIfDuplicateExists(grid[i])){
           return false
       }
       column.push(grid[j][i])
    }
     if(checkIfDuplicateExists(column)){
           return false
       }
    
    }
    
    
    
        
        
    
    return true;
    //return either true or false
    }
    