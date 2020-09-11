function leastDuplicateIndex(arr){
    //given array of numbers
    var table=[];

    arr.forEach((value,index,array)=>{
        table.push({

         "key" : value,
         "value":index
      })
    })
for (let item of table){
   console.log(item.key)
}
  


   return table;

}


console.log(leastDuplicateIndex([2,1,3,2,5,5]))



// console.log(`${array[index]} ${value}`)