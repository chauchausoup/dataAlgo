//here we go caesar cipher

var str= "ddd".split('');
var n=2;
var ch=0;
var b=[]


for(var i =0 ;i<str.length;i++){
    ch=str[i].toString().charCodeAt(0)
    console.log(ch)

     if((ch >=65 && ch<=90)||(ch>=97 && ch<=122) ){
         // here the real ceaser cipher starts
         if(ch >=97 && ch<=122){
           if(n>0){
               ch=97+(n%(122-ch))-(n/(122-ch))
           }
          /*  if(n<0){
            ch=90-(n%(90-ch))-(n/(90-ch))
           } */
           
         }

        } 
   

    b.push(String.fromCharCode(ch))
    
    
}
console.log(b.join(''))
