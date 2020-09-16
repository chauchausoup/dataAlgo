//ok here 
var text = "3 + 3 = 5";
var wors = ['h','w','d','u','j','e','o'];
//given keys along with the special characters are correct ones
//every things is considered as lowercase
//keys except these are not valid entry and show nothing in the compiler
//my job is to find the no of valid word entry
var word=0;

var splitted = text.split(' ');
splitted.forEach((e,i)=>{
    var c=0;
   var splitted2=e.split('')

    splitted2.forEach((E,I)=>{
        var item =E.toLowerCase();

        if(wors.includes(item)){
            c++;
        }if(e.charCodeAt(I)<97 && e.charCodeAt(I)>90 || e.charCodeAt(I)>122 ||e.charCodeAt(I)<65 ){
            c++
        }
    })
    if(c==e.length){
        word++
    }
})

console.log(word);



/* var s="W";
s.toLowerCase()
console.log(s) */


