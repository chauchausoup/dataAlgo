function getMaxStreaks(toss) {
    // Return an array of two integers containing the maximum streak of heads and tails respectively
   
    //toss is an array
    var toss= toss.map((e,i)=>{
        if(e=="Heads"){
            return e=1;
        }else{
            return e=0;
        }
    })
    
    var Xhighest=0
    var Yhighest=0;
    var x=0;
    var y=0;
    
    
   for(var i =0; i <toss.length;i++){
       if(toss[i]){
           y=0
           x+=1;
           if(x>Xhighest){
               Xhighest=x
           }
       }else{
           x=0;
           y+=1;
           if(y>Yhighest){
               Yhighest=y
           }
       }
   }
    
    
    return [Xhighest,Yhighest];
}




 