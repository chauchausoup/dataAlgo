function leastDuplicateIndex(arr){
    var table=[]
    var counter=-1;

  

   for(var i=0;i<arr.length-1;i++){
       for(var j=i; j<arr.length-1;j++){
           if(arr[i]== arr[j+1]){
            table.push(j+1-i)
  
            if(Math.min(...table)===(j+1-i)){
                counter=arr[j+1]
            }
            
           }
       }
   }
  

   return counter;

}


console.log(leastDuplicateIndex([2,1,3,2,5,5,123,234,9,456,77,43,4,3523,4,23,423,42,34,23,4,23,423,4,234,23,4,234,23,4,234,23,23,23]))


