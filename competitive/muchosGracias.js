function cutTheSticks(a) {
    var flag=1;
    var cp=a;
    var count=[];

    while(flag){
 
    count.push(cp.length);
    console.log(count)


    var min = Math.min(...cp);
    var reducedMin = cp.map((e,i)=>{
        return e= e-min;
    })

    //copy
    var idealMain=reducedMin;

    //any 
    var ani=[];

    //lets chop off the 0 part

   reducedMin.forEach((e,i)=>{
        if(e!=0){
            ani.push(e)
        }
    })

    //console.log(ani)
    if(ani.length==0){
        flag=0
    }else{
        flag=1
        cp=ani;
    }

    }
  return count;
    
}

function cutTheSticks(a){
    a=a.sort((a,b)=>a-b);
    var out=[];
    for(var i=0;i<a.length;i++){
        out.push(a.length-i);
        while(a[i]==a[i+1]){
            i++;
        }
        console.log(out);
    }
    return out;
    }
    
