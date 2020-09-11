//lets recreate a raonsom note problem solution
var ransom="hhello papaya".split("");
//console.log(ransom)
var note="heh paypalz".split('')
//console.log(note)
//crawal through the note
//splice the ransom array as you find one..
//
const len = note.length;
console.log(len)

var flag=2;

for(var i= 0 ; i<len ; i++){
       console.log(ransom)
        console.log(note)
        console.log(i);

    if(ransom.includes(note[0]) && flag!=0){
        ransom.splice(ransom.indexOf(note[0]),1);
        note.splice(0,1)
        flag =1
     
        console.log("mama");

    }else{
        flag=0;
        
    }
    
}
console.log(flag)
