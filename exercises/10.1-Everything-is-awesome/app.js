let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];
/*
const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item,index) => {
            // magic goes inside these brackets
            
            
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));*/

var nuevo=[];
for(i=0;i<myArray.length;i++){
    if(myArray[i]==0){
                myArray[i]="yahoo";
            }else{
                myArray[i]=1
            }
            nuevo.push(myArray[i]);
}
console.log(nuevo);