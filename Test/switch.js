var a=[1,2,2,3,1,2];
var b=[];

a.forEach((value,index,array)=>{
    var b1=array[index-1]
    var b2=array[index]
    var b3=array[index+1]

    switch(b1== undefined ? b1:0 || b2== undefined ? b2:0 || b3== undefined ? b3:0 ){
        case b1:
            b.push(0+b2+b3);
            break;
        case b2:
            b.push(b1+0+b3);
            break;
        case b3:
            b.push(array[index-1]+array[index]+0);
            break;
            
        default:
            b.push(array[index]+array[index-1]+array[index+1])
    }
    
});

console.log(b);









