//double shows time limit

/* function minimumAbsoluteDifference(arr) {
    var min =Math.max(...arr);
   
   for(var i =0;i<arr.length;i++){
       for(var j=i+1;j<arr.length;j++){
          
           var k=Math.abs(arr[i]-arr[j]);
            
           if(k<min){
               min=k;
           }
       


       }
   }
   return min;

}


 */


//not double but a greedy appraoch solves the problem


function minimumAbsoluteDifference(arr) {
    var min =Math.max(...arr);

    function signCheck(a,b){
        return a>0 == b>0 ? true : false;
    }
    
    var m = arr.sort((a,b)=>a-b);
    console.log(m)

    for(var i =0; i < m.length;i++){
        if(signCheck(m[i+1],m[i])){
            if((m[i+1]-m[i])<min){
                min=m[i+1]-m[i]
            }
        }else{
            if((Math.abs(m[i])+Math.abs(m[i+1]))<min){
                min=Math.abs(m[i])+Math.abs(m[i+1])
            }
        }
        console.log(min)
    }




    return min;

}

