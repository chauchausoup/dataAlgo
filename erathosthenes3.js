function here(num){

    var ar=[...Array(num)];
    ar=ar.map((e,i)=> i+1)
    ar.splice(0,1)
    var special=[];
    var sum=0;



    var arT=ar.map((e,i)=>true)



    
    for(var i =0 ; i<ar.length;i++){
        if(!special.includes(ar[i])&& arT[i]){
            special.push(ar[i])
            sum+=ar[i]
            j=2;
                while((ar[i]*j)<ar.length+2){
                    arT[ar.indexOf(j*ar[i])]=false;
                    j++;
                }
        }
    }
    return special;
}

console.log(here(10000))
