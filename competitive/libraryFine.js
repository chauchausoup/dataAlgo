// Complete the libraryFine function below.
function libraryFine(d1, m1, y1, d2, m2, y2) {
    var fine=0;
    
    if(y2>y1){
        fine =0
    }
    else if(y2==y1){
        if(m2>m1){
            fine =0;
        }else if(m1==m2){
            if(d2>d1){
                fine=0
            }
            else if (d1==d2){
                fine=0
            }else{
                fine = (d1-d2)*15;
            }
        }else{
            fine=(m1-m2)*500
        }
    }else{
        fine = 10000;
    }
return fine;
}


