let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here


var ambosarreglos=[];
//var contarodd=0;
//var contareven=0;

function mergeTwoList(list_of_numbers){
    var odd=[];
    var even=[];
 for(i=0;i<list_of_numbers.length;i++){
     if(list_of_numbers[i] % 2 ===0){
           // contareven=contareven+1;
            even.push(list_of_numbers[i]);
     }else{
           // contarodd=contarodd+1;
            odd.push(list_of_numbers[i]);
     }
 }
  return odd.concat(even);
}
 
//console.log(ambosarreglos=odd.concat(even));

console.log(mergeTwoList(list_of_numbers));
