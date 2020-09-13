function utopianTree(n) {

    //here n gives us the array to find the sum
   /*  console.log(n) */

   function inno(enno){
       // console.log(enno)

        if(enno<=0){
            return 1;
        } 

        if(enno%2!=0){
           return inno(enno-1)*2;
       }

       if(enno%2==0){
           return inno(enno-1)+1;
       }

      
    }

    var h= inno(n)  
    
   
    return h;

}

console.log(utopianTree(4));


