let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let cambio=function(valor){
    if(valor==0) return "wiki";
    else if(valor==1) return "woko";

}

let cambiobooleano=theBools.map(cambio);

console.log(cambiobooleano);