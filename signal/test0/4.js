// mean groups

//array has some arraies 
//we need to collect the similar means in an array
//sort the collected array



        var ar=[];
        var n=2000;
        for(var i = 0 ; i < n ; i ++ ){
        ar.push(new Array(2000).fill().map(()=>(Math.round(Math.random()*100))))
        }


        ar=ar.map((e,i,a)=>{
            e=e.reduce((a,b)=>a+b)/e.length;
            return e;
        })

//group same avarages as per their index

var ob={};
//our semi final result

var fin=[];

var checker=[];
//to check which was checked recently also need to update the count of each to push the newly data accordingly

for(var i =0;i<ar.length;i++){
    if(checker.includes(ar[i])){
        for(var item in  ob){
            if(item== ar[i]){
                ob[ar[i]].push(i)
            }
        }
    }
    if(!checker.includes(ar[i])){
        checker.push(ar[i])
        ob[ar[i]]=[i]
    }

}

for(var item in ob){
   fin.push(ob[item])
}

console.log(fin);


/* 

function coun(arr){
    var ob={};

    arr.forEach((e,i)=>{
        if(e in ob){
            ob[e]++
        }else{
            ob[e]=1
        }
    })

    return ob;

}
*/