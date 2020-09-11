var objet={
    name:"Krishna",
    home:{
        place:"nana",
        ghar:"hama"
    },
    last:"dhakal"
}


for(const item in objet){
    console.log(objet[item])
    if(objet[item]== "Krishna"){
        delete objet[item];
        //console.log(item+ " : fuc")
    }
}

console.log(objet)






