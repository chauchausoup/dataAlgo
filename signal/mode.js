var a= "champa chameli 12311111".split('').sort();
//lets find the mode here

var ob ={};
var c=1;



for(const item of a){
    console.log(item)

    if(item in ob){
        c=ob[item]+1;
       // console.log(ob[item])
    }else{
        c=1;
    }
    
   ob[item]=c;
    
}
console.log(ob);


