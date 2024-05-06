// .push agrega un dato al arreglo 
// .pop para quitar el ultimo dato del arreglo
// .shift para quitar el primer dato del arreglo
// .unishift para agregar un dato al principio del arreglo 
// let cuando quieres que l variable cambie 
// const cuando quieres que la variable no cambie
// i++ para sumar 1
// i-- para restar 1
// += sumar con la variable
// -= restar con la variable
// *= multiplicar con la variable
// /= dividir con la cariable
// \'	comilla simple
// \"	comilla doble
// \\	barra invertida
// \n	línea nueva
// \r	retorno de carro
// \t	tabulación
// \b	límite de palabra
// \f	fuente de formulario
// .length para  mostrar la cantidad de caracteres 
// firstName[firstName.length - 1]. para obtener la ultima letra 
// firstName[firstName.length - 3] para recuperar el enesimo
// [arrays]


/* function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
console.log(testEqual("12"));*/

// == puede ser igual de string o numer
// === tiene que ser exactamente igual los valores
// != el operador desigualdad 
// !== El operador de estricta desigualdad  es el opuesto lógico del operador de estricta igualdad. Esto significa "Estrictamente Desigual"
// > mayor que
// < menor que
// >= mayor o igual que
// <= manor o igual que
/* && devuelve true si y solo si los operandos a la izquierda y a la derecha son verdaderos.
    ejemplo
    if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
*/
// or || devuelve true si cualquiera de los operandos es true. De lo contrario, devuelve false.
/* if es si 
else if
else  en el metodo de functions se ulitiza para dar retornos */

//switch  Las sentencias se ejecutan desde el primer valor case coincidente hasta que se encuentra un break.
// default es el ultimo caso en el switch.
/* se puede cambiar un if por un metodo de switch

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
puede reemplazarse por:

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}*/


/* 
formas de acceder... Hay dos maneras de acceder a las propiedades de un objeto: notación de puntos (.) y notación de corchetes ([]), similar a un arreglo.

Forma con .

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Cambia solo el código debajo de esta línea
const hatValue = testObj.hat;  


Forma con []
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];*/

/* accede a propiedadesde objetos con variables
 ejemplo

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);*/



/*
Actualizando las propiedades de un objeto 
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

Así es como actualizamos la propiedad del nombre del objeto: ourDog.name = "Happy Camper"; o ourDog["name"] = "Happy Camper"*/

/* 
eliminar propiedades en un objeto 
delete ourDog.bark;

*/ 
////////////////////////////////////////////////////////
/*
Manipulando objetos complejos

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }, 
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
]; */

/* 
para acceder a objetos anidados

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"]; */
/* 
accede a arreglos anidados

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

para sacar el arreglo pines */
// hackerrank
// leetcode
// frontend mentor . io


/* ejercicio de dias de la semana
let days = [ "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "Domingo"];
function getDay(n) {
    if (n < 1 || n > 7){
        throw new Error("Out of range");
    }
    return days[n-1];
} */

/* while acendente 

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
} 

descendente

const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

*/

/*
El tipo más común de bucle de JavaScript se llama bucle for porque se ejecuta "por" un número específico de veces.

Los bucles for se declaran con tres expresiones opcionales separadas por punto y coma:

for (a; b; c), donde a es la sentencia de inicialización, b es la sentencia condicional, y c es la expresión final.

// 
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}

para seleccionar  numeros pares muetra arreglos  [0,2,4,6,8]

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

arreglo a la inversa [ 8,6,4,2,0]

const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
*/

/*
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

Esto imprime cada sub-elemento dentro de arr uno a la vez
*/

/* while do...
const myArray = [];
let i = 10;

 do {
  myArray.push(i);
  i++;
} while (i < 5)
console.log(myArray);*/

/* 


 function sum(arr, n) {

 if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }

}*/
// Math.random() que genera un número decimal aleatorio entre 0 (inclusivo) y 1 (exclusivo).

/*function donde da un numero aleatorio don Math.random


function randomFraction() {

var result = 0;
while (result === 0) {
result = Math.random();
}
  return result;

} */
// Math.floor() es para redonder el numero hacia abajo 
// Math.floor(Math.random() * 10); regresa un numero del 0 al 9 
// Math.floor(Math.random() * (max - min + 1)) + min regresa un numero aleatorio numero entero 

// parseInt() analiza una cadena y devuelve un entero
/* function convertToInteger(str) {
  return parseInt(str);
} */

/* parseInt(string, radix); con numero binarios


function convertToInteger(str) {
    return parseInt(str, 2);
    }
    */

    // condicional ternario 
    /* La sintaxis es a ? b : c, donde a es la condición, b es el código a ejecutar 
    cuando la condición devuelve true, y c es el código a ejecutar cuando la condición devuelve false. 
 
function checkEqual(a, b) {
return a == b ? "Equal" : "Not Equal"
}

*/

/* es igual a if, else if, y else.

function checkSign(num) {
return (num === 0) ? "zero"
  :(num > 0) ? "positive"
  : "negative";
} */

/*
\function rangeOfNumbers(startNum, endNum) {
  return endNum < startNum
  ? [] 
  :rangeOfNumbers(startNum, endNum - 1).concat(endNum)
};*/

/* para cambiar un elemento de una const

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;

el arreglo quedaria [5, 6, 45]
*/

// Object.freeze para prevenir la mutación de datos.
/* esta congelara la constannte PI asi hayan otras que declaren PI con otro valor, no ccambiara

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };

Object.freeze(MATH_CONSTANTS); */


/* function flecha

var magic = function() {
  return new Date();
};

const magic = () => new Date(); */


/* Al igual que una función regular, puedes pasar argumentos a una función flecha.

const doubler = (item) => item * 2;
doubler(4);
doubler(4) devolvería el valor 8.

Si una función flecha tiene un solo parámetro, los paréntesis que encierran el parámetro pueden ser omitidos.

const doubler = item => item * 2;
Es posible pasar más de un argumento a una función flecha.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
multiplier(4, 2) devolverá el valor 8. */

// Al parecer el metodo rest son lo ...
// apply()

/* ...arr1 copia todos los elemento de del arr1 en arr2

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Cambia esta línea

console.log(arr2);
*/
/* sintesis de desestruturacion para extraer valores de objetos


const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// asi 
const { today, tomorrow} = HIGH_TEMPERATURES;
*/


/* sintaxis de destructuracion para asignar variables desde objetos anidados



const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
// primera forma
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// asi queda mejor estructurado

const {today:{high: highToday, low: lowToday}} = LOCAL_FORECAST */

//A la variable a se le asigna el primer valor del arreglo, y a b se le asigna el segundo valor del arreglo

/*
let a = 8, b = 6;
[a, b] = [b, a];
*/


/* metodos

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

forma de eliminar el function

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};*/

// class clases para definir una función constructora, forma con un new

/* forma anterior

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

con la clase contructor y new

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter'); */
/*


Utiliza getters (accesores) y setters (mutadores) para controlar el acceso a un objeto

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

Las funciones getter están destinadas a simplemente devolver (get) el valor de la variable privada de un objeto al usuario sin que el usuario acceda directamente a la variable privada.

Las funciones setter están destinadas a modificar (set) el valor de la variable privada de un objeto basado en el valor pasado a la función setter.


*/

// para anexar a html <script type="module" src="filename.js"></script> tiene que llevar un src que es el link de enlace a js


/*

 para exportar hay varias formas

 1.
 export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}

2.
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export{ppercaseString};
export{lowercaseString};

3.
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export{uppercaseString, lowercaeString};
*/

// para importar   import { add } from './math_functions.js'; siempre en from './' y el nombre para llamar

// Use * para importar todo de un archivo    import * as 
/*
import * as stringFunctions from "./string_functions.js";  

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
*/

/* export default
export default function subtract(x, y) {
  return x - y;
}

export default function(x, y) {
  return x - y;
}
*/

//importar... import add from "./math_functions.js";

/*
se utiliza para hacer una promesa de que harás algo, habitualmente de forma asíncrona
Promise es una función constructora, así que tu necesitas usar la palabra clave new para crear una
con dos parámetros: resolve y reject. Estos métodos se utilizan para determinar el resultado de la promesa

const makeServerRequest = new Promise((resolve, reject) => {

});



con revolve y reject

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
*/

// Maneja una promesa cumplida usando then  
/*

myPromise.then(result => {
console.log(result);
});

//catch es el método utilizado cuando tu promesa ha sido rechazada.

myPromise.catch(error => {
console.log(error);
});

*/

/*
i quieres encontrar la palabra the en la cadena The dog chased the cat, 
puedes utilizar la siguiente expresión regular: /the/. Ten en cuenta que las comillas no son 
requeridas dentro de la expresión regular.

El método .test() toma la expresión regular, la aplica a una cadena, y devuelve true o false si tu patrón encuentra algo o no.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);


para poner mas parametros /yes|no|maybe/. de busqueda

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);
console.log(result);
*/
// se le agrega asi /ignorecase/i   Esta expresión regular puede coincidir con las cadenas ignorecase, igNoreCase e IgnoreCase.
// tambie se puede con .match()  

/*
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); */

// Para buscar o extraer un patrón más de una vez, puedes utilizar la bandera g.

/*

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; 
let result = twinkleStar.match(starRegex);

*/
// . coincidirá con cualquier carácter único
//Por ejemplo, si quieres hacer coincidir hug, huh, hut, y hum, puedes usar la la expresión regular /hu./

/*

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

*/

/*
para buscar cualquier letra /b[aei]g/ las []los caracteres que quieres coincidir

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
let result = quoteSample.match(vowelRegex); */

/*
con el llamado /[a-e]/ ira en busqueda desde la a hasta la e a,b,c,d,e

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);*/ 
/*
lo mismo pero con numeros /[0-6]/ buscara de 0 hacia el 6

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex); 
*/
/*
para crear un conjunto de caracteres negados colocas un carácter de intercalación (^) después del corchete de apertura y antes de los caracteres que no quieres coincidir.

/[^aeiou]/gi
*/
/*para encontar coincidencias en textos 
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);
*/

// let chewieRegex = /Aa*/;   * es para encontrar mas concidencias como Aaaaaaaaaaaaarg

// Sin embargo, puedes usar el carácter ? para cambiarla a una coincidencia perezosa. "titanic" al coincidir con la expresión regular ajustada de /t[a-z]*?i/ devuelve ["ti"].

/*

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
let result = text.match(myRegex);

*/ 

/*
Puedes buscar el final de las cadenas usando el carácter del signo de dólar $ al final de la expresión regular

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);

*/


// \w. Este atajo equivale a [A-Za-z0-9_]. Esta clase de caracteres coincide con letras mayúsculas y minúsculas más números. Ten en cuenta que esta clase de caracteres también incluye el carácter de guión bajo (_).

/*

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;

*/ 
// \W. Ten en cuenta, el patrón contrario usa letra mayúscula. Este atajo es lo mismo que [^A-Za-z0-9_]

/*

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;

*/

// El atajo para buscar caracteres de dígitos es \d, con una d minúscula. Esto es igual a la clase de caracteres [0-9], la cual busca un solo carácter de cualquier número entre cero y nueve.


/*

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result = movieName.match(numRegex).length;

*/

//El atajo para buscar caracteres que no sean dígitos es \D. Esto es igual a la clase de caracteres [^0-9], el cual busca un único carácter que no sea un número entre cero y nueve.

/*

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex).length;

*/

/*

let username = "JackOfAllTrades";
let userCheck = /^([0-9]{2,}|[a-z]+\d*)$/i; 
let result = userCheck.test(username);

^- inicio de entrada
[a-z]- el primer carácter es una letra
[0-9]{2,0}- termina con dos o más números
|- o
[a-z]+- tiene una o más letras al lado
\d*- y termina con cero o más números
$- fin de entrada
i- ignorar caso de entrada

*/

//Puedes buscar los espacios en blanco usando \s = [ \r\t\f\n\v]

/*

let sample = "Whitespace is important in separating words ";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);


*/

// Busca caracteres que no sean espacios en blanco usando \S   = [^ \r\t\f\n\v]

// para que coincida con la letra a si aparece entre 3 y 5 veces en la cadena ah, la expresión regular debe ser /a{3,5}h/.

/*

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; 
let result = ohRegex.test(ohStr);

*/

//para hacer coincidir solo con la cadena hah cuando la letra a aparezca al menos 3 veces, la expresión regular sería /ha{3,}h/.

/*

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);

*/
//Especifica el número exacto de coincidencias
/*

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result = timRegex.test(timStr);

*/

// Puedes especificar la posible existencia de un elemento con un signo de interrogación, ?

/*
esto dara True en las dos condiciones


let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);

*/

//  Un lookahead positivo se usa como (?=...) donde el ... es la parte requerida que no coincide.
// Un lookahead negativo se usa como (?!...) donde el ... es el patrón que no quieres que esté allí.

/*

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; 
let result = pwRegex.test(sampleWord);

*/

// A veces queremos comprobar grupos de caracteres utilizando una expresión regular y para conseguirlo usamos paréntesis ().
// Si deseas encontrar Penguin o Pumpkin en una cadena, puedes usar la siguiente expresión regular: /P(engu|umpk)in/g
/*

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);

*/

// este seria un arreglo para cambiar eleanor y franklin los dos roosevelt
/*

let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*Roosevelt/;
let result = myRegex.test(myString);

*/

/*
esto devolveera la cadena three two one

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);

*/
// "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); esto devolvera la cadena al reves Camp Code

// quieta los espacios en blanco del comienzo y del final 

/*

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
*/

// console.clear(); para limpiar la consola

/*
typeof 

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});

Agrega dos sentencias console.log() para comprobar el typeof de cada una de las dos variables
*/

/*
las comillas "" van primero y ahi si van las ''   Captura el uso mixto de comillas simples y dobles

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml); */


/*
este arreglo cambiaria la b por una r

let myArray = ["a", "b", "c", "d"];
myArray[1] = "r";
console.log(myArray);

*/
 /*
    la funcion da como resultado [ 'I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9 ]

function mixedNumbers(arr) {
arr.unshift('I', 2, 'three');
arr.push(7, 'VIII', 9)
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

*/

/*
Tanto push() como unshift() tienen métodos correspondientes que son casi opuestos funcionales: pop() y shift(). 
Como ya habrás adivinado, en lugar de agregar, pop() elimina un elemento al final de un arreglo, 
mientras que shift() elimina un elemento al principio.


function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
*/

/*
splice() representa el índice del arreglo a partir del cual se empiezan a eliminar los elementos,
mientras que el segundo parámetro indica el número de elementos a eliminar.

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1,4);
console.log(arr);
*/


/*
splice El índice en el que empezar a borrar elementos (0), el número de elementos a borrar (2) 
y el resto de argumentos 'DarkSalmon', 'BlanchedAlmond'.


function htmlColorNames(arr) {

const startIndex = 0;
const amountToDelete = 2 ;
arr.splice(startIndex, amountToDelete,'DarkSalmon', 'BlanchedAlmond');
  // Cambia solo el código encima de esta línea
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
*/

/*
slice copia o extrae un número determinado de elementos a un nuevo arreglo, dejando intacto el arreglo al que se llama
en el cual slice obtendra del arreglo warm and sunny

function forecast(arr) {
 

  return arr.slice(2,4)
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));*/

/* 

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Cambia solo el código debajo de esta línea
newArr.push([...arr]);  //

    // Cambia solo el código encima de esta línea
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

*/

/*
esto devolvera ['learning', 'to', 'code', 'is', 'fun'].


function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut());
*/


/*

function quickCheck(arr, elem) {
  // Cambia solo el código debajo de esta línea
  return arr.indexOf(elem) >= 0 
  ? true 
  : false;

  // Cambia solo el código encima de esta línea
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
*/

/*
estos dan  rspuesta de Deepest

let myNestedArray = [
  // Cambia solo el código debajo de esta línea
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array',['deep']],
  ['mutate', 1327.98, 'splice', 'slice', 'push',[['deeper']]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
  // Cambia solo el código encima de esta línea
];
console.log(myNestedArray[4][6][0][0][0]) */
/*
para agregar cosas al arreglo foods 

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Cambia solo el código debajo de esta línea
foods.bananas = 13;
foods['grapes'] = 35;
foods.strawberries = 27;

// Cambia solo el código encima de esta línea

console.log(foods);
*/

/*
esto ayuda a reemplazar un valor dentro de los arreglos


let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Cambia solo el código debajo de esta línea
userActivity.data.online = 45;
// Cambia solo el código encima de esta línea

console.log(userActivity);

*/

// Accede a los nombres de propiedad con la notación de corchetes

/*

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Cambia solo el código debajo de esta línea
return foods[scannedItem];
  // Cambia solo el código encima de esta línea
}

console.log(checkInventory("apples"));
*/


//  "delete" para eliminar las propiedades de los objetos


/*

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Cambia solo el código debajo de esta línea
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Cambia solo el código encima de esta línea

console.log(foods);*/

/*    Uno utiliza el método hasOwnProperty() y el otro utiliza la palabra clave in. Si tenemos un objeto users con una propiedad de Alan
users.hasOwnProperty('Alan');
'Alan' in users;

ejemplo

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Cambia solo el código debajo de esta línea
if( userObj.hasOwnProperty('Alan') &&
    userObj.hasOwnProperty('Jeff') &&
    userObj.hasOwnProperty('Sarah') &&
    userObj.hasOwnProperty('Ryan')){
  return true
}
return false
  // Cambia solo el código encima de esta línea
}

console.log(isEveryoneHere(users)); */


/*

Itera a través de las claves de un objeto con una sentencia "for...in"

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Cambia solo el código debajo de esta línea
let result = 0;
for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
}
}
return result;
  // Cambia solo el código encima de esta línea
}

console.log(countOnline(users));*/

//el arrgelo Object.key(); en estes caso dara  [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]

/*
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Cambia solo el código debajo de esta línea
return Object.keys(obj);
  // Cambia solo el código encima de esta línea
}

console.log(getArrayOfUsers(users));*/


/*
Termina de escribirla para que tome un objeto user y agregue el nombre del argumento friend al arreglo almacenado en user.data.friends y devuelva ese arreglo.



let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Cambia solo el código debajo de esta línea
userObj.data.friends.push(friend);
return userObj.data.friends;
  // Cambia solo el código encima de esta línea
}

console.log(addFriend(user, 'Pete')); 

muestra [ 'Sam', 'Kira', 'Tomo', 'Pete' ]*/


/*
Convierte Celsius a Fahrenheit

function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9/5)+32;
  return fahrenheit;
}

convertCtoF(30);


*/
/*

Invierte una cadena

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");*/

/*
Factoriza un número


function factorialize(num) {
   let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;

}

factorialize(5);*/

/*
Encuentra la cadena mas larga

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}*/

/*

Devuelve los números mayores en los arreglos

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);*/


/*

Confirma el final
Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;

}

confirmEnding("Bastian", "n");*/

/*
Repite una cadena repite una cadena
Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento)

function repeatStringNumTimes(str, num) {
   let repeat = "";

  for (let i = 0; i < num; i++) {
    repeat += str;
  }

  return repeat;
}
repeatStringNumTimes("abc", 3);*/


/* console.log("antes" + JSON.stringify());  para borrar el primero y poner el otro numero en el arreglo 


function ProximoEnLaFIla(arr, elem){
    arr.push(elem);             // Agregar al final del arreglo 
    return arr.shitf();         // remover el primer elemento
}

var myArr = [1, 2, 3, 4 , 5];

console.log("Antes" + JSON.stringify(myArr));

console.log(proximoEnLaFila(myArr), 6);

console.log("Despúes" + JSON.stringify(myArr));



*/

/*
Recorta una cadena

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str
}


truncateString("A-tisket a-tasket A green and yellow basket", 8); */

// objeto  dentor de un arreglo 

/*
 const crearPersona = (nombre, edad, idioma) => {
return{
    nombre: nombre,
    edad: edad,
    idioma: idioma
    };
};

const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});

console.log(crearPersona("Gino Smith", 28, "Español"))
*/

// las clases todas comienzan con mayuscula

/*class TransbordadorEspacial{
    constructor(planeta){
        this.planeta = planeta;
    }
}

var zues = new TransbordadorEspacial("Jupiter");
var apolo = new TransbordadorEspacial("Marte");


class Mascota{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

}

var miMascota = new Mascota("Nora", 5);
var tuMascota = new Mascota("Gino", 2);*/

/*
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) debe devolver 8.

function findElement(arr, func) {
    let num = 0;
    for( let i = 0; i < arr.length; i++){
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
    return undefined;
  }
  
  console.log(findElement([1, 3, 5, 7, 9], num => num % 2 === 0)); */

  //Comprueba si el valor está clasificado como booleano primitivo. Devuelve true o false. Booleanos primitivos son true y false.

  /*
  function booWho(bool) {
  return typeof bool === "boolean"
}

booWho(null);*/

/*

class Libro{
    contructor(autor){
        this._autor = autor; //
    }

    get autor() {
        return this._autor;
    }

    set autor(nuevoAutor) {
        this.autor = nuevoAutor;

    }
}

const libro = new Libro("anónimo");
console.log(libro.autor);

libro.autor = "Gino Smith";
console.log(libro.autor);
*/

/*
Haz que la primera letra de una palabra este en mayúscula

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

titleCase("I'm a little tea pot");


*/
/*
cortar y rebanar

function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  for(let i =0; i < arr1.length; i++){
    localArr.splice(n, 0, arr1[i]);
    n++;
  }
  return localArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);*/

/*

function bouncer(arr) {
 let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

bouncer([7, "ate", "", false, 9]);

quitara estos resultados false, null, 0, "", undefined y NaN.
*/

/*
*/

// operadores aritmeticos
// + suma
// - resta 
// ++ incremento
// * multiplicacion
// ** potencia
// / division
// -- decremento
// % modulo


/*

function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num)
      return i;
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);
*/

/*
mutaciones


function mutation(arr) {
 let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);*/

/*

Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.

function chunkArrayInGroups(arr, size) {
 let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2) debe devolver [["a", "b"], ["c", "d"]].
  */

/*

Crea un método en un objeto

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function(){
    return "This dog has " + dog.numLegs + " legs.";
  }
};

dog.sayLegs();*/

// nstanceof permite comparar un objeto con un constructor, devuelve true o false basado en si ese objeto fue creado o no con dicho constructor. 
/*

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Cambia solo el código debajo de esta línea
let myHouse = new House(4);

myHouse instanceof House;
*/

/*

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Cambia solo el código debajo de esta línea
for(let property in canary){
  if(canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
}

console.log(ownProps);

*/

/*
Utiliza propiedades "prototype" para reducir código duplicado


function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;



// Cambia solo el código encima de esta línea
let beagle = new Dog("Snoopy");*/

/*
Itera sobre todas las propiedades

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Cambia solo el código debajo de esta línea
for (let property in beagle){
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}*/

/*
Entiende la propiedad constructor


function Dog(name) {
  this.name = name;
}

// Cambia solo el código debajo de esta línea
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog){
    return true;
  } else {
    return false;
  }
}*/

/*
Una forma más eficiente es establecer el prototype a un nuevo objeto que ya contenga las propiedades. De esta forma, las propiedades son añadidas todas a la vez:


function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Cambia solo el código debajo de esta línea
numLegs: 4,
eat: function(){
  console.log("nom nom nom");
  },
describe: function(){
    console.log("My name is " + this.name)
  }
};*/

/*
Para solucionar esto, cada vez que un prototipo se establece de forma manual a un nuevo objeto, recuerda definir la propiedad constructor:

function Dog(name) {
  this.name = name;
}

// Cambia solo el código debajo de esta línea
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};*/


/*
me tienes en un va y ven
que vas a hacer con mi vida
dime si hay una salida
si al fin me vas a querer

me tienes tan confundio
que hasta he llegado a pensar 
que un dia me vas a encontrar 
con el corazon partido

es que me das tan poquito y yo te pido bastante 
no aguanto la sed de amarte 
toca mi corazoncito como palpita y palpita  
no quiere estar mas solito 


ayer te estaba pensando
me dibuje en tu regazo 
y entre susurro y abrazos
los dos juramos amarnos

no tengas miedo al amor noo
pedazo de vida mia
miedo es una cobardia 
preguntale al corazon 


*/

/* prototype directamente de la función constructor que lo creó.

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Cambia solo el código debajo de esta línea
Dog.prototype.isPrototypeOf(beagle);*/

/*
Debido a que prototype es un objeto, ¡unprototype puede tener su propio prototype! En este caso, el prototype de Bird.prototype es Object.prototype:

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");


Dog.prototype.isPrototypeOf(beagle);  // produce true

// Arregla el código de abajo para que evalúe a true
Object.prototype.isPrototypeOf(Dog.prototype);*/


/*
en el primero se repite  la funcion eat eso puede provovar errores

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};


en el segundo se corrige y se le da el valor animal para despejar el eat de los dos


function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};*/
/*
no me des mas sufrimiento 
mira que me pongo triste 
cuando de noche en mi casa
me torturan los recuerdos
y al no mirarte conmigo 
del sentimiento me muero */

/*
Object.create(obj) crea un objeto nuevo y establece obj como el prototype del nuevo objeto. Recuerda que prototype es como la "receta" para crear un objecto. Al establecer el prototype de animal como el prototype de Animal, estás dándole a la instancia animal la misma “receta" que a cualquier otra instancia de Animal.


function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Cambia solo el código debajo de esta línea

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
*/

/*

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Cambia solo el código debajo de esta línea
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog(); */

/*
 establecer manualmente la propiedad del constructor de Bird al objeto Bird:
 propiedad "constructor" heredada


function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Cambia solo el código debajo de esta línea



let duck = new Bird();
let beagle = new Dog();

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

duck.constructor
beagle.constructor*/


/*
se quiere añadir un comportamiento que sea exclusivo de los objetos Dog. Aquí, Dog obtendrá una función bark();
Las funciones se añaden al prototype de Dog's del mismo modo que cualquier función constructor:

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Cambia solo el código debajo de esta línea
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
};

// Cambia solo el código encima de esta línea

let beagle = new Dog(); 
*/





/*

palindromo

function palindrome(str) {

  var re = /[\W_]/g || /[^A-Za-z0-9]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
   return reverseStr === lowRegStr;
}

palindrome("eye"); 
*/

/*
numeros romanos 


function convertToRoman(n) {
  var
		values = [1, 5, 10, 50, 100, 500, 1000],
		letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
		res = [],
		num, letra, val, pos, insert

	for(var i = 6; num = values[i], letra = letras[i]; i--) {
		// Suficientemente grande
		if(n >= num) {
			// Número de letras repetidas
			var r = Math.floor(n / num); 

			// Restamos el actual
			n -= r * num; 

			if(r < 4){
				// Metemos las letras
				while(r--){
					res.push(letra);
				}
			} else {
				// No se pueden repetir 4+ veces
				val = res.pop(); // Última letra

				// Si es el string vacío o letra == "M" (no hay anterior)
				// usamos la letra anterior a esta
				pos = (val ? letras.indexOf(val) : i) + 1; 

				// Y si letra == "M" -> letras[pos] no existirá y usamos M
				insert = letra + (letras[pos] || 'M'); 

				// Insertamos el string
				res.push(insert);
			}
		} else {
			// Si no vamos a poner letra usamos un ""
			// para que no afecte pop
			res.push('');
		}
	}

	return res.join('');

 
}

convertToRoman(36);*/

/*

cifrado cesar (ZNEVN GR NZB)

const abcValues = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]
function isAlpha(str) {
  return /^[a-zA-Z()]+$/.test(str);
}

function movePosition(position) {
  position += 13;
  if (position >= 26) {
    position -= 26;
  }
  return position;
}

function rot13(str) {
  const arrStr = str.split('')
  const arrCipher = arrStr.map(char => {
    if (isAlpha(char)) {
      let position = abcValues.indexOf(char);
      position = movePosition(position);
      return abcValues[position];
    }
    return char;
  });
  return arrCipher.join("");
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("ZNEVN GR NZB"))
*/








/*
Sobrescribir métodos heredados



function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Cambia solo el código debajo de esta línea

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};

// Cambia solo el código encima de esta línea

let penguin = new Penguin();
console.log(penguin.fly());*/

/*

Un "mixin" permite a otros objetos utilizar una colección de funciones.

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Cambia solo el código debajo de esta línea
let glideMixin = function(obj){
  obj.glide = function(){
    console.log("Gliding!");
  }
}


glideMixin(bird);
glideMixin(boat);





*/

/*
function Bird() {
  let weight = 15;

  this.getWeight = function(){
    return weight;
  };

}*/

/*

funciones que son invocadas inmediatamente
Esta es una expresión de función anónima que se ejecuta de inmediato y produce A cozy nest is ready inmediatamente.

(function () {
  console.log("A cozy nest is ready");
})();

*/

/*
Crea un módulo llamado funModule para envolver los dos mixins isCuteMixin y singMixin. funModule debe devolver un objeto.

let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};


solucion
//
let funModule = (function(){
  return { 
   isCuteMixin : function(obj) {
  obj.isCute = function() {
    return true;
  };
},
   singMixin : function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
      };  
    }
  };
})();

// solucion 2

let funModule = ( () => {
  return {
    isCuteMixin: (obj) => {
      obj.isCute = () => { true; };
    },
    singMixin: (obj) => {
      obj.sing = () => { console.log("Singing to an awesome tune"); }
    }

  }
})();
*/

/*
La programación funcional se refiere a:

Funciones aisladas: sin dependencia alguna del estado del programa, el cual incluye variables globales sujetas a cambios

Funciones puras: una misma entrada siempre da la misma salida

Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función son cuidadosamente controlados
*/

/*

// Función que retorna una cadena de texto representando una taza de té verde
const prepareTea = () => 'greenTea';


//Dada una función (representando el tipo de té) y el número de tazas necesarias, la 
    siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).

const getTea = (numOfCups) => {
    const teaCups = [];
  
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
  };
  
  // Cambia solo el código debajo de esta línea
  let tea4TeamFCC = getTea(40);
  // Cambia solo el código encima de esta línea
  */

  /*
  Podemos modificar getTea para aceptar una función como parámetro y así poder cambiar el tipo de té que prepara.

  // Función que retorna una cadena de texto representando una taza de té verde
const prepareGreenTea = () => 'greenTea';

// Función que retorna una cadena de texto representando una taza de té negro
const prepareBlackTea = () => 'blackTea';


//Dada una función (representando el tipo de té) y el número de tazas necesarias, la 
    siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).

const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];
  
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
  };
  
  // Cambia solo el código debajo de esta línea
  const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
  const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
  // Cambia solo el código encima de esta línea
  
  console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
  );*/
  /*

  // tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
const Window = function(tabs) {
  this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
};

// Cuando unes dos ventanas en una
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// Cuando abres una nueva pestaña al final
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
  return this;
};

// Cuando cierras una pestaña
Window.prototype.tabClose = function(index) {

  // Cambia solo el código debajo de esta línea

  const tabsBeforeIndex = this.tabs.splice(0, index); // Obtiene las pestañas antes de la pestaña
  const tabsAfterIndex = this.tabs.splice(1); // Obtiene las pestañas después de la pestaña

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos

  // Cambia solo el código encima de esta línea

  return this;
 };

// Vamos a crear tres ventanas del navegador
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento

// Ahora completa la apertura de la pestaña, cierre, y otras operaciones
const finalTabs = socialWindow
  .tabOpen() // Abre una nueva pestaña para memes de gatos
  .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);*/

/*

Completa el código de la función incrementer para que devuelva el valor de la variable global fixedValue incrementada en uno.

// La variable global
let fixedValue = 4;

function incrementer() {
  // Cambia solo el código debajo de esta línea
return fixedValue + 1

  // Cambia solo el código encima de esta línea
}*/

/*
Actualicemos la función incrementer para declarar claramente sus dependencias.

Escribe la función incrementer para que reciba un argumento, y luego devuelva un resultado después de aumentar el valor en uno.


// La variable global
let fixedValue = 4;

// Cambia solo el código debajo de esta línea
function incrementer(value) {
  return value + 1


  // Cambia solo el código encima de esta línea
}*/

/*

Refactoriza variables globales por fuera de funciones

// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  newArr.push(bookName); // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

// Cambia el código debajo de esta línea
function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
  }
}
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);*/


/*
Usa el método "map" para extraer datos de un arreglo
El método map iterará sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene los resultados de llamar a la función callback en cada elemento. Esto lo hace sin mutar el arreglo original.

// La variable global
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Cambia solo el código debajo de esta línea

const ratings = [];
for (let i = 0; i < watchList.length; i++) {
  ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
}

//solucion 


const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));

// Cambia solo el código encima de esta línea

console.log(JSON.stringify(ratings));*/

/*
implementa map en un prototipo

// La variable global
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
 this.forEach(a => newArray.push(callback(a)));
  // Cambia solo el código encima de esta línea
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});*/

/*
Usa el método de "filter" para extraer datos de un arreglo

// La variable global
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Cambia solo el código debajo de esta línea

const filteredList = watchList
  .filter(movie => movie.imdbRating >= 8.0)
  .map(movie => ({ title: movie["Title"], rating: movie["imdbRating"] }));
// Only change code above this line
console.log(filteredList);

// Cambia solo el código encima de esta línea

console.log(filteredList);*/

/*
Implementa el método filter en un prototipo

// La variable global
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Cambia solo el código debajo de esta línea
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
  // Cambia solo el código encima de esta línea
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});*/

/*
Devolver parte de un arreglo mediante el método slice

[ 'Dog', 'Tiger' ] eso da de respuesta

function sliceArray(anim, beginSlice, endSlice) {
  // Cambia solo el código debajo de esta línea
  return anim.slice(beginSlice, endSlice)
  // Cambia solo el código encima de esta línea
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));
*/

/*


function nonMutatingSplice(cities) {
  // Cambia solo el código debajo de esta línea
  // return cities.splice(3);     linea que se cambio
  return cities.slice(0,3);

  // Cambia solo el código encima de esta línea
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));*/

/*

concat 

Combina dos arreglos utilizando el método "concat"

[1, 2, 3].concat([4, 5, 6]);
El arreglo devuelto sería [1, 2, 3, 4, 5, 6].

function nonMutatingConcat(original, attach) {
  // Cambia solo el código debajo de esta línea
return original.concat(attach);

  // Cambia solo el código encima de esta línea
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second));*/

/*

Agrega elementos al final de un arreglo utilizando concat en lugar de push


function nonMutatingPush(original, newItem) {
  // Cambia solo el código debajo de esta línea
  // return original.push(newItem);  linea que se cambio
  return original.concat(newItem);

  // Cambia solo el código encima de esta línea
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);


/*


function getRating(watchList) {
  // Cambia solo el código debajo de esta línea
  let averageRating = watchList.filter(film => film.Director === "Christopher Nolan").map(film => Number(film.imdbRating)).reduce((sumOfRatings, rating) => sumOfRatings + rating)/watchList.filter(film => film.Director === "Christopher Nolan").length;



  // Cambia solo el código encima de esta línea
  return averageRating;
}

console.log(getRating(watchList));*/


/*
Utiliza las funciones de orden superior "map", "filter" o "reduce" para resolver un problema complejo


const squareList = arr => {
  // Cambia solo el código debajo de esta línea
  return arr
  .filter(num => num > 0 && num % parseInt(num) === 0 )
  . map(num => Math.pow(num, 2));
  // Cambia solo el código encima de esta línea
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);*/

/*

Ordena un arreglo alfabéticamente con el método sort

El método sort ordena los elementos de un arreglo de acuerdo a la función callback.

Por ejemplo:

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
Esto devolvería el valor de [1, 2, 3, 4, 5].

// function que da al reves los valores

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
Esto devolvería el valor de ['z', 's', 'l', 'h', 'b']. 


// ejemplo de ejercicio 

function alphabeticalOrder(arr) {
  // Cambia solo el código debajo de esta línea

  return arr.sort();
  // Cambia solo el código encima de esta línea
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
*/

/*
Devuelve un arreglo ordenado sin cambiar el arreglo original


const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea
return  [].concat(arr).sort(function(x, y){
  return x - y
})
  // Cambia solo el código encima de esta línea
}

nonMutatingSort(globalArray);
*/

/*
Divide una cadena en un arreglo utilizando el método "split"

function splitify(str) {
  // Cambia solo el código debajo de esta línea
return str.split(/\W/);

  // Cambia solo el código encima de esta línea
}

splitify("Hello World,I-am code");*/

/*
El método join se utiliza para unir los elementos de un arreglo creando una cadena de texto. Se necesita un argumento para especificar el delimitador a utilizar para separar los elementos del arreglo en la cadena.

function sentensify(str) {
  // Cambia solo el código debajo de esta línea
return str.split(/\W/).join(" ");

  // Cambia solo el código encima de esta línea
}

sentensify("May-the-force-be-with-you");*/

// El método trim( ) elimina los espacios en blanco en ambos extremos del string.

/*
El resultado es una cadena con los espacios entre palabras reemplazadas por un guion (-)

// Cambia solo el código debajo de esta línea
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}

// Cambia solo el código encima de esta línea
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
*/

/*
El método every funciona con arreglos para comprobar si every element pasa una prueba en particular. Devuelve un valor booleano - true si todos los valores cumplen los criterios, false si no.
 La función debe devolver un valor booleano.

function checkPositive(arr) {
  // Cambia solo el código debajo de esta línea
return arr.every(val => val > 0);


  // Cambia solo el código encima de esta línea
}

checkPositive([1, 2, 3, -4, 5]);*/

/*
El método some funciona con arreglos para comprobar si algún elemento pasa una prueba en particular. Devuelve un valor booleano true si alguno de los valores cumple el criterio, false si no.


function checkPositive(arr) {
  // Cambia solo el código debajo de esta línea
return arr.some(value => value > 0)


  // Cambia solo el código encima de esta línea
}

checkPositive([1, 2, 3, -4, 5]);
*/


/*
Introducción a la currificación y a la aplicación de funciones parciales
La aridad de una función es el número de argumentos que requiere. Currificar una función significa convertir una función de N aridades a N funciones de 1 aridad.

En otras palabras, reestructura una función, por lo que toma un argumento, luego devolverá otra función que toma el siguiente argumento, y así sucesivamente.


function add(x) {
  // Cambia solo el código debajo de esta línea
return y => z => x + y + z;

  // Cambia solo el código encima de esta línea
}

add(10)(20)(30);


// segunda opcion 

function add(x) {
  // Add your code below this line
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
  // Add your code above this line
}
add(10)(20)(30);
*/


/*
Suma todos los números en un rango
Devuelve la suma de estos dos números más la suma de todos los números entre ellos. El número más bajo no siempre será el primero.

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
*/


/*

Compara dos arreglos y devuelve un nuevo arreglo con los elementos que sólo se encuentran en uno de los dos arreglos dados, pero no en ambos. En otras palabras, devuelve la diferencia simétrica de los dos arreglos.

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(i => !arr1.includes(i) || !arr2.includes(i));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
*/


// Busca y destruye
// Se proporcionará un arreglo inicial (el primer argumento en la función destroyer), seguido de uno o más argumentos. Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.

/*

function destroyer(arr) {
  const ToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !ToRemove.includes(val);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); */



/*
Crea una función que busque a través de un arreglo de objetos (primer argumento) y devuelva un arreglo de todos los objetos que tengan pares de nombre y valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto fuente tiene que estar presente en el objeto de la colección si se va a incluir en el arreglo devuelto.



function whatIsInAName(collection, source) {
  
  // Cambia solo el código debajo de esta línea
  const sourceKeys = Object.keys(source);
  return collection.filter(obj => sourceKeys
    .every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));

  // Cambia solo el código encima de esta línea
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
*/


/*

Convierte una cadena a spinal case. Spinal case significa todas-las-palabras-en-minúscula-unidas-por-guiones.

function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

console.log(spinalCase('This Is Spinal Tap'));

*/

/*
 es una manera de alterar las palabras en inglés. Las normas son las siguientes:

- Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, muévela al final de la palabra, y añade ay a ella.

- Si una palabra comienza con una vocal, solo añade way al final.

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";

}


translatePigLatin("consonant");

*/

/*
Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la nueva oración.

El primer argumento es la frase sobre la que se va a realizar la búsqueda y el reemplazo.

El segundo argumento es la palabra que se reemplazará (antes).

El tercer argumento es lo que reemplazará el segundo argumento (después).

function myReplace(str, before, after) {
  const strArr = str.split(" ");
  const [wordToReplace] = strArr.filter(item => item === before);
  const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
    ? after[0].toUpperCase() + after.slice(1)
    : after[0].toLowerCase() + after.slice(1);
  return strArr.map(item => (item === before ? replacement : item)).join(" ");

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

*/

/*
El par de hebras del ADN esta formado por pares de nucleobases. Los pares de base son representados por los caracteres AT y CG, que forman bloques de doble hélix ADN.

A la cadena de ADN le falta el elemento de emparejamiento. Escribe una función que coincida con los pares de base faltantes para la hebra de ADN proporcionada. Para cada carácter de la cadena proporcionada, encuentra el carácter de par base. Devuelve los resultados como un arreglo 2d.

Por ejemplo, la entrada GCG, devuelve [["G", "C"], ["C","G"], ["G", "C"]]

El carácter y su par se emparejan en un arreglo, y todos los arreglos se agrupan en un arreglo encapsulado.


function pairElement(str) {
  var adn = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, adn[x]]);
}

pairElement("GCG");
*/

/*
Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.

Si todas las letras están presentes en la cadena, devuelve undefined.

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");

*/

/*

Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos manteniendo el orden original de los arreglos proporcionados.

En otras palabras, todos los valores presentes de todos los arreglos deben incluirse en su orden original, pero sin duplicados en el arreglo final.

Los números únicos deben ser ordenados según su orden original, pero el arreglo final no debe ordenarse según el orden numérico.

Revisa las pruebas de afirmación para ver ejemplos.

function uniteUnique(arr) {
 const args = [...arguments];
  const result = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);*/

/*
Convierte entidades HTML
Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), en un cadena con su correspondiente entidad HTML.

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");*/


/*

Suma todos los números impares de Fibonacci
Dado un entero positivo num, devuelve la suma de todos los números impares de Fibonacci que son menores o iguales a num.

Los dos primeros números en la secuencia de Fibonacci son 1 y 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. Los seis primeros números de la secuencia de Fibonacci son 1, 1, 2, 3, 5 y 8.

Por ejemplo, sumFibs(10) debe devolver 10 porque todos los números impares de Fibonacci menores o iguales a 10 son 1, 1, 3 y 5.

function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

sumFibs(4);
*/

/*

Suma todos los números primos
Un número primo es un número entero mayor que 1 con sólo dos divisores: 1 y el propio número. Por ejemplo, 2 es un número primo porque sólo es divisible entre 1 y 2. Por el contrario, 4 no es primo ya que es divisible entre 1, 2 y 4.

Reescribe sumPrimes para que devuelva la suma de todos los números primos que sean menores o iguales a num.

function sumPrimes(num) {
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

sumPrimes(10); 
*/


/*


Mínimo común múltiplo
Encuentra el múltiplo común más pequeño de los parámetros proporcionados que pueden dividirse equitativamente por ambos, así como por todos los números consecutivos del rango entre estos parámetros.

El rango será un arreglo de dos números que no necesariamente estarán en orden numérico.

Por ejemplo, si se dan 1 y 3, encuentra el múltiplo común más pequeño de 1 y 3 que también es dividido por todos los números entre 1 y 3. La respuesta sería 6.


function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
  .fill(0)
  .map((_, i) => i + min);
  const upperB = range.reduce((prod, curr) => prod * curr);
  for (let multiple = max; multiple <= upperB; multiple 
  += max){
    const divisible = range.every((value) => multiple % value === 0)
    if (divisible){
      return multiple;
    }
  }
}

smallestCommons([1,5]);
*/      

/*


Déjalo caer
Dado el arreglo arr, itera y elimina cada elemento comenzando desde el primer elemento (el índice 0) hasta que la función func devuelva true cuando el elemento iterado se pasa a través de él.

Luego devuelve el resto del arreglo una vez que se cumpla la condición, de lo contrario, arr debe devolverse como un arreglo vacío.

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])){
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

*/


/*

Aplanadora
Aplana un arreglo anidado. Debes tener en cuenta los diferentes niveles de anidación.

function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) 
  ? steamrollArray(flat)
  :flat; 
}

steamrollArray([1, [2], [3, [[4]]]]);
*/

/*

Agentes binarios
Devuelve una frase traducida al inglés de una cadena binaria pasada.

La cadena binaria estará separada por espacios.

function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char){
      return parseInt(char, 2)
    })
  );
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
*/

/*
Todo sea verdad
Comprueba si el predicado (segundo argumento) es truthy en todos los elementos de una colección (primer argumento).

En otras palabras, se te da una colección de arreglos de objetos. El predicado pre será una propiedad del objeto y debe devolver true si su valor es truthy. De lo contrario, devuelve false.

En JavaScript, los valores truthy son valores que se traducen en true cuando se evalúan en un contexto booleano.

Recuerda, puedes acceder a las propiedades del objeto mediante la notación de puntos o la notación de corchetes [].

function truthCheck(collection, pre) {
  let counter = 0;
  for ( let c in collection){
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])){
      counter++
    }
  }
  return counter == collection.length;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
*/


/*

Argumentos opcionales
Crea una función que sume dos argumentos. Si sólo se proporciona un argumento, entonces devuelve una función que espera un argumento y devuelve la suma.

Por ejemplo, addTogether(2, 3) debe devolver 5 y addTogether(2) debe devolver una función.

Si se llama a esta función devuelta con un solo argumento, se obtendrá la suma:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) devuelve 5.

Si cualquiera de los dos argumentos no es un número válido, devuelve undefined.

function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
  
}

addTogether(2,3);
*/


/*
Crea una persona
Completa el constructor de objetos con los siguientes métodos:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Ejecuta las pruebas para ver el resultado esperado para cada método. Los métodos que toman un argumento deben aceptar sólo un argumento y tiene que ser una cadena. Estos métodos deben ser el único medio disponible para interactuar con el objeto.

const Person = function(firstAndLast) {
  // Cambia solo el código debajo de esta línea
  // Completa el método de abajo e implementa los otros de manera similar
    let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();
*/


/*
Mapea el Debris
De acuerdo con la Tercera Ley de Kepler, el período orbital  T  de dos puntos se orbitan mutuamente en una órbita circular o elíptica es:

T=2πa3μ‾‾‾√
 
a  es el eje semi-mayor de la órbita
μ=GM  es el parámetro gravitatorio estándar
G  es la constante gravitatoria,
M  es la masa del cuerpo más masivo.
Devuelve un nuevo arreglo que transforma la altitud media de los elementos en sus periodos orbitales (en segundos).

El arreglo contendrá objetos en el formato {name: 'name', avgAlt: avgAlt}.

Los valores deben redondearse al número entero más cercano. El cuerpo orbitado es la Tierra.

El radio de la tierra es de, 6367.4447 kilómetros y el valor GM de la tierra es de, 398600.4418 km3s-2.



function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = [];

  //Looping through each key in arr object
  for (let elem in arr) {
    //Rounding off the orbital period value
    const orbitalPer = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
    );
    //Adding new object with orbitalPeriod property
    newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
  }

  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);*/

/*

Validador de números telefónicos
Devuelve true si la cadena pasada concuerda con un número de teléfono válido en Estados Unidos.

function telephoneCheck(str) {
    let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
        rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (rex1.test(str)) {
        return true;
    }
    else {
        return rex2.test(str) ? true : false
    }
}
telephoneCheck("555-555-5555");*/


/*
caja registradora

function checkCashRegister(price, cash, cid) {
  // the default result if cash-in-drawer [cid] is less than the change due,
  // OR if cannot return the exact change.
  const result = {status: "INSUFFICIENT_FUNDS", change: []};
  // calc the total of cid OR change
  const getTotal = (arr) => arr.reduce((total, cash) => total + cash[1], 0);
  // remove the decimal and make all [cid] values integers
  cid = cid.map(([unit,value]) => [unit, value*100]);
  // declare variables
  let value, change, totalChange, totalCash, remainder;
  // First work out how much change is needed [remainder]
  remainder = cash*100 - price*100;
  // Next work out how much cash there is in the cash register using
  // reduce to add all the values and turn to whole numbers
  totalCash = getTotal(cid);
  // Check that there is enough change in the register
  if(totalCash >= remainder) {
    // Next set up the coins array/object with empty values,
    // and the coin denomination, e.g Penny = 1 and dollar = 100 pennies
    const coins = [
      {unit: "ONE HUNDRED", value: 0, amount: 10000},
      {unit: "TWENTY", value: 0, amount: 2000},
      {unit: "TEN", value: 0, amount: 1000},
      {unit: "FIVE", value: 0, amount: 500},
      {unit: "ONE", value: 0, amount: 100},
      {unit: "QUARTER", value: 0, amount: 25},
      {unit: "DIME", value: 0, amount: 10},
      {unit: "NICKEL", value: 0, amount: 5},
      {unit: "PENNY", value: 0, amount: 1},
    ];
    // from the info passed to the function add the values for each coin into
    // the cash register objects.
    coins.forEach(coin => {
      cid.forEach(item => {
        if(item[0] === coin.unit)
          coin.value = item[1];
      })
    });
    // get the change values per unit
    change = coins.reduce( (acc, coin) => {
      if (remainder && coin.value && (remainder/coin.amount) >= 1 ) {
        value = +(Math.floor(remainder/coin.amount) * coin.amount).toFixed(2);
        value = (value < coin.value)? value : coin.value;
        console.log('TCL: --------------------------------------');
        console.log('TCL: checkCashRegister -> remainder', remainder);
        console.log('TCL: checkCashRegister -> coin.value', coin.value);
        console.log('TCL: checkCashRegister -> coin.amount', coin.amount);
        console.log('TCL: checkCashRegister -> value', value);
        console.log('TCL: --------------------------------------');
        acc.push([coin.unit, value]);
        remainder -= +value.toFixed(2);
      }
      return acc;
    }, []);
    // get the total change value
    totalChange = getTotal(change);
    // only if return the excat change
    if(remainder === 0) {
      // if the excat change equal to [cid] return cid
      if (totalCash === totalChange) {
        result.status = "CLOSED";
        result.change = cid;
      }
      // if the excat change smaller than [cid] return excat change
      else if (totalCash > totalChange) {
        result.status = "OPEN";
        result.change = change;
      }
    }
  }
  // reconvert the integers to decimal values and make all [cahnge] values decimals
  result.change = result.change.map(([unit,value]) => [unit, value/100])
  // return the result
  // return { result, totalCash, totalChange, remainder, price, cash };
  return result;
}



*/

//https://everest.talently.tech/register/?utm_source=Google&utm_medium=display&utm_campaign=Talently_B2C_GA_PMAX_Leads_2022_Performance_Mix_All-Dev&utm_content=Custom&utm_term=performancead&gclid=CjwKCAjwvsqZBhAlEiwAqAHElVfZ3NAh4f9OQfhgfa0O4HSS57h1l7eU-lu28KDsy0lnhEiyMyoMOhoCO-cQAvD_BwE
//https://www.workana.com/worker-onboarding-steps
/*



*/