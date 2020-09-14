/* 
var x =[1,2,3,5,6,10];
console.log(x.pop())
var T=14

while(!x.includes(T)){
    T=T-1;
    console.log(T)
}

 */


function hackerlandRadioTransmitters(x, k) {
    //var coverage = 2*k+1;
    var biru=[];
    var i=0;

   var x=x.sort((a,b)=>a-b)
   
console.log(x)

 while(i<x[x.length-1]){
   var T=x[i]+k;
    console.log(T)

    if(!x.includes(T)){
        while(!(x.includes(T))){
            T=T-1
            console.log(T)
        }
    }
    //i=T+2*k+1
   i=i+k

 }

    console.log(biru)

}



hackerlandRadioTransmitters([2,4,5,6,7,9,11,12],2);
