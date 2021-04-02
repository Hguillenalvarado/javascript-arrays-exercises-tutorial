var coordinatesArray = [[33.747252,-112.633853],[-33.867886, -63.987],[41.303921, -81.901693],[-33.350534, -71.653268]];
var latitude = coordinatesArray[0][0];
console.log(latitude);
var longitude=coordinatesArray[0][1];
console.log(longitude);

var largo=coordinatesArray.length;
console.log(largo);

for(i=0;i<coordinatesArray.length;i++){
    for(j=1;j<coordinatesArray[i].length;j++)
    console.log(coordinatesArray[i][j]);
}