function sumTheElements(theArray){
	
	
    //your code here
    var total = 0;
    for(var i=0;i<theArray.length;i++){
        total = total+theArray[i];
    }
    
	return total;
}


console.log(sumTheElements([1,2]));



/*var arreglo=[1,4];
var total = 0;
    for(var i=0;i<arreglo.length;i++){
        console.log(arreglo[i]);
        total = total+arreglo[i];
        console.log(total);
    }*/
    
    