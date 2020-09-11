var arr = [1,2,3,7,3,2];
var copy = [1,2,3,7,3,2];
var a,b=0;
var pad=[];


var num = 4;
var main=[]

for(item in arr){
    a=arr[item];
    b=rotasory(copy)[0]
    if(a+b== num){
       pad.push(a)
       pad.push(b)
       main.push(pad)
        console.log(main) 
       
    }
   

    
}


function rotasory(ar){
    var a= ar.splice(0,1)
    ar.push(...a)
    return ar
}


/* console.log(rotasory(copy))
console.log(copy) */

/* var e1=[1,3];
var e2=[2,2];

main.push(e1)
main.push(e2)
*/

//console.log([].push(e2))


