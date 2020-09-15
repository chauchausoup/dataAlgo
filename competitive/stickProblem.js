function cutTheSticks(a) {
    //var a = [1,2,3,7,7];
    var b1=[];
    var ci=[]
var len = a.length;
var b=[...a];
console.log(b);

for(var i =0;i<len;i++){

    
    var min = Math.min(...b);
    if(min == Math.max(...b) && b.length>1 ){
        return ci;
    }
    if(b.length ==1){
         ci.push(1)
        return ci
    }
    var c=0;

    b=b.map((e,i,ar)=>{
        c++
        return e-min;
    })
    ci.push(c);

    console.log(b+"b")
    
        var d= [...b]

    b.forEach((e,i)=>{
        if(e==0){
            d.splice(i,1)
        }else{
             b1.push(b[i])
        }
       
    })
    console.log(b1+"b1")
    b=[...b1]
    b1.length=0;



    
}

return (ci)
    
}



