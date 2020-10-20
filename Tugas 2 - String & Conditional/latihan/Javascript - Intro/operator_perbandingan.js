console.log("equal")
var angka = 100
console.log(angka == 100)
console.log(angka == 20)

console.log("not equal")
var sifat = "rajin"
console.log(sifat != "malas")
console.log(sifat != "bandel")
console.log(sifat != "rajin")

console.log("strict equal / identik") // membandingkan equal dan tipe datanya
var strict = 8
console.log(strict == "8") // true, padahal "8" adalah string.
console.log(strict === "8") // false, karena tipe data nya berbeda
console.log(strict === 8) // true 

console.log("strict not equal / tidak identik") // kebalikan dari strict equal
var notstrict = 11
console.log(notstrict != "11") // false, padahal "11" adalah string
console.log(notstrict !== "11") // true, karena tipe datanya berbeda
console.log(notstrict !== 11) // false

console.log("<, >, <=, >=")
var number = 17
console.log( number < 20 ) // true
console.log( number > 17 ) // false
console.log( number >= 17 ) // true, karena terdapat sama dengan
console.log( number <= 20 ) // true