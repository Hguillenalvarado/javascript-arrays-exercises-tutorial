var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    var nombreborrar=people.indexOf(personName);
    people.splice(nombreborrar,1);

   return console.log(people)
}

deletePerson("daniella");

/*console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));*/

/*prueba:
var borrar = "daniella";
    var nombreborrar=people.indexOf(borrar);
    console.log(nombreborrar);
    people.splice(nombreborrar,1);
    console.log(people);*/