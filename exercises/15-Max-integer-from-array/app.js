var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

var mayor=0

for(i=0;i<myArray.length;i++){
    if(myArray[i]>mayor){
        mayor=myArray[i];
    }else{
        mayor=mayor;
    }
}

console.log("El número mayor del arreglo es: "+mayor);