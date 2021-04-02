var arrayOfCelsiusValues = [-2,34,56,-10];

	
    //add your code here and return the new value
    
var conversionfahren= function(values){ 
	return values*1.8 +32;
}

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(conversionfahren);

console.log(arrayOfFahrenheitValues);