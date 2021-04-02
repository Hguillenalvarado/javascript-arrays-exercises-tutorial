let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];



/*  prueba 1:
if(typeof(myArray[3])=='object'){
    console.log(1);
}*/


let hello = [];
contadorobjetos=0;
for(i = 0; i < myArray.length; i++){
    //let element = myArray[i];
    //MAGIC HAPPENS HERE
    if(typeof(myArray[i])=='object'){
        contadorobjetos=contadorobjetos+1;
       
       console.log(contadorobjetos);
       hello.push(myArray[i]);
    }
}

console.log(hello)
