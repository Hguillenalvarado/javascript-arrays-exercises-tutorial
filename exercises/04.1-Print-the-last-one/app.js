function generateRandomArray()
{
	var auxArray = [];
	var randomLength = Math.floor(Math.random()*100);
	for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
var myStupidArray = generateRandomArray();
//console.log(myStupidArray);

//Your code here
var totalItems = myStupidArray.length;
console.log(totalItems);
