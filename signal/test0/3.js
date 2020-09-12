//hash mapper
//so at this program hash mapper basically i am going to find the sum


var queryStrings=['add','addKey','addValue','get'];
var query = [[1,3],[6],[2],[1]];



function f(queryStrings,query){
    var ob ={};

    queryStrings.forEach((e,i)=>{
        console.log(ob);

        switch(e){
            case "add":
                ob[query[i][0]]=query[i][1]
                break;
            case "addKey":
                for(var itemK in ob){
                
                    console.log(itemK);
                    itemK=parseInt(itemK)+parseInt(query[i][0])
                    console.log(itemK);

                }
                break;
            case "addValue":
                console.log("mama")

                for(var itemV in ob){
                    ob[itemV]=parseInt(ob[itemV])+parseInt(query[i][0])
                }
                break;
            case "get":
                for(var itemG in ob){
                    if(itemG == query[i][0]){
                        console.log(`Key: ${itemG} Value: ${ob[itemG]}`)
                    }
                }
                break;

        }
    })
    return ob;
}

var o=f(queryStrings,query);
console.log(o);

