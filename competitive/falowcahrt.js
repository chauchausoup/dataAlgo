function performOperations(N, op) {
    // Write your code here
    //console.log(op)
 
  var ar = new Array(N).fill('').map((e,i)=>e=i+1);
    //console.log(ar)
    for(var i=0;i<op.length;i++){
        
        if(ar.includes(op[i])){
   // console.log(ar);
            
          [ar[0],ar[N-1]]=[ar[N-1],ar[0]]
    //console.log(ar);
            
            
        }else{
            console.log(ar);
            
            ar.pop();
            ar.push(op[i])
    console.log(ar);

        }
        
    }

    var sum = ar.reduce((a,b)=>a+b);
    console.log(sum);    
  return sum;
}



console.log(performOperations(3,[4,2]));

