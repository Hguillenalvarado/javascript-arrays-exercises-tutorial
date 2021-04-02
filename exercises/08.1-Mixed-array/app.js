var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

let nuevo=[];
for(i=0;i<mix.length;i++){
nuevo.push(typeof(mix[i]));

}

console.log(nuevo);

