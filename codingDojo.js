const arr1=[-1,2,4,5,3,20]
const arr2 = [4,1,7,4,9,2]



function csd(arr1,arr2,val){
//have same length 
var tav=[];
var pair= [];

//anyone sum is closer to given number
for(var i=0; i <arr1.length;i++){
    for(var j=0; j<arr2.length;j++){
        tav.push(Math.abs(val-(arr1[i]+arr2[j])));

        if((Math.min(...tav)===Math.abs(val-(arr1[i]+arr2[j])))){

            pair.push({
                key:arr1[i],
                value:arr2[j]
            });
            console.log(pair)
        }

    }
}
return pair.pop();
}

console.log(csd(arr1,arr2,23))



