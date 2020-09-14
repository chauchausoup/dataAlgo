var str="namaste esmeeta".split('');

var ob={};
var count=0;

str.forEach((e,i)=>{
  
   if(ob[e]){
    ob[e]++
   }else{
       ob[e]=1
   }
   
    
})



console.log(ob)
var entry=[],max=0;
for(const item in ob){
if(ob[item]>max){
    max=ob[item]
    entry.push(item)
}
}
console.log(entry.pop())



