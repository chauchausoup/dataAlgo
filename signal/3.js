// here 

function minAbsolute(a,b){
    /// but the mean absolute such that only a single value of of a can be changed
    var bMax=Math.max(...b)
    var bIndex = b.indexOf(bMax);
    console.log(bIndex);
    console.log(bMax);
    var min =(2^51)-1;
    console.log(a)
    console.log(b)

    var small = a.map((e,i)=>{
        return  Math.abs(e-bMax);
    })
    console.log(small);
    
    var mi = Math.min(...small)
    var aIndex = 0;
    var sum=0;


    if(small.includes(0)){
        aIndex = small.indexOf(0)
    }else{
        console.log(small.indexOf(mi))
        aIndex = small.indexOf(mi)
    }
    console.log(aIndex);
    console.log(a);


    //lets swap
    var temp = a[bIndex];
     a[bIndex]=a[aIndex];
    a[aIndex]=temp;

    console.log(a);


   for(var i = 0 ; i < a.length ; i++){
       sum+=Math.abs(a[i]-b[i])
   }
    console.log(sum)
}
console.log(minAbsolute([1,3,5],[4,3,1]));


