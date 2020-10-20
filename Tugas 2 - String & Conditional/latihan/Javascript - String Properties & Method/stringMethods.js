console.log(".charAt([indeks])") // mengembalikan nilai pada indeks yang diinginkan
console.log('i am a string'.charAt(3)); // 'm'

/////////////////////////////////////////////////

console.log(".concat([string])") // Menggabungkan beberapa string dan mengembalikannya menjadi string baru.
var string1 = 'good';
var string2 = 'luck';
console.log(string1.concat(string2)); // goodluck

/////////////////////////////////////////////////

console.log(".indexOf([string/karakter])") // Mengembalikan indeks dari string/karakter yang dicari, yang pertama kali ditemukan, atau -1 apabila tidak ditemukan.
var text = 'dung dung ces!';
console.log(text.indexOf('dung'));  // 0
console.log(text.indexOf('u'));     // 1
console.log(text.indexOf('jreng')); // -1

//////////////////////////////////////////////////

console.log(".substring([indeks awal], [indeks akhir (optional)])") // Mengembalikan potongan string mulai dari indeks pada parameter pertama (indeks awal) sampai dengan indeks pada parameter kedua (indeks akhir). Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.
var car1 = 'Lykan Hypersport';
var car2 = car1.substr(6);
console.log(car2); // Hypersport

///////////////////////////////////////////////////

console.log(".substring([indeks awal], [indeks akhir (optional)])") // Mendapatkan potongan string mulai dari indeks pada parameter pertama (indeks awal) dengan jumlah indeks pada parameter kedua (jumlah karakter). Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.
var kata1 = 'Indonesia Tanah Air Beta';
var kata2 = kata1.substr(6, 10);
console.log(kata2); //

////////////////////////////////////////////////////

console.log(".toUpperCase()") // Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kapital.
var letter = 'This Letter Is For You';
var upper  = letter.toUpperCase();
console.log(upper); // THIS LETTER IS FOR YOU

////////////////////////////////////////////////////

console.log(".toLowerCase()") // Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kecil
var letter = 'This Letter Is For You';
var lower  = letter.toLowerCase();
console.log(lower); // this letter is for you

/////////////////////////////////////////////////////

console.log(".trim()") // Mengembalikan string baru yang sudah dihapus karakter whitespace (” “) pada awal dan akhir string tersebut.
var username    = ' administrator ';
var newUsername = username.trim(); 
console.log(newUsername) // 'administrator'