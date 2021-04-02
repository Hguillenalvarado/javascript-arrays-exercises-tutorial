let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

let oracion="Pura vida";
 //console.log(oracion.length);

for(i=0;i<oracion.length;i++){
oracion.charAt(i);
    contar=0;
    for(j=0;j<oracion.length;j++)
        if(oracion.charAt(i)==oracion.charAt(j)){
            contar=contar+1
        }
;
console.log(oracion.charAt(i)+" : "+contar);
}

//console.log(counts);