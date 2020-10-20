console.log("String([angka/array])"); // Fungsi global String() dapat dipanggil kapan saja pada program JavaScript dan akan mengembalikan data dalam tipe data String dari parameter yang diberikan.
var int  = 12;
var real = 3.45;
var arr  = [6, 7, 8];

var strInt  = String(int);
var strReal = String(real);
var strArr  = String(arr);

console.log(strInt);  // '12'
console.log(strReal); // '3.45'
console.log(strArr);  // '6,7,8'

//////////////////////////////////////////////

console.log(".toString()"); // Mengonversi tipe data lain menjadi string. Bila data tersebut adalah array, setiap nilai akan dituliskan dan dipisah dengan karakter koma.
var number = 21;
console.log(number.toString()); // '21'
var array = [1,2];
console.log(array.toString());  // '1,2'

//////////////////////////////////////////////

console.log("Number([String])"); // Fungsi global Number() mengonversi tipe data string menjadi angka. Data yang diberikan pada parameter harus berupa karakter angka saja, dengan titik (separator) bila angka adalah bilangan desimal. Bila parameter berisi karakter selain angka dan/atau titik, Number() akan mengembalikan NaN (Not a Number).
var number1 = Number("90");   // number1 = 90
var number2 = Number("1.23"); // number2 = 1.23
var number3 = Number("4 5");  // number3 = NaN
console.log(number1);
console.log(number2);
console.log(number3);

///////////////////////////////////////////////

console.log("parseInt([String]) dan parseFloat([String])"); // Fungsi global parseInt([String]) dan parseFloat([String]) mengembalikan angka dari string. Bila angka adalah bilangan desimal maka gunakan parseFloat(), bila tidak bilangan dibelakang koma akan diabaikan.
var int2  = '89';
var real2 = '56.7';
var strInt_1 = parseInt(int2);  // strInt_1 = 89
var strInt_2 = parseInt(real2); // strInt_2 = 56
var strReal_1 = parseFloat(int2); // strReal_1 = 89
var strReal_2 = parseFloat(real2); // strReal_2 = 56.7
console.log(strInt_1);
console.log(strInt_2);
console.log(strReal_1);
console.log(strReal_2);