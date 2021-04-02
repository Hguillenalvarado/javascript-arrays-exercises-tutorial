
let arrayOfStrings = ['1','5','45','34','343','34',6556,323];

let tipodato=function(tipo){


    return typeof tipo;
    
}

let newArray = arrayOfStrings.map(tipodato);

console.log(newArray);


