console.log("No 1 Range")
function range(startNum, finishNum) {

    if(startNum < finishNum){
        var isi = []
        for(var angka = startNum; angka <= finishNum; angka++) {
            isi.push(angka)
        } 
        return isi
    } else if (startNum > finishNum){
        var isi = []
        for(var angka = startNum; angka >= finishNum; angka--) {
            isi.push(angka)
        } 
        return isi
    } else {
        return " -1"
    }
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

//////////////////////////////////////////////////////////////////////////////

console.log("No 2 Range with step")
function rangeWithStep(startNum, finishNum, step){
    if(startNum < finishNum){
        var isi = []
        for(var angka = startNum; angka <= finishNum; angka += step) {
            isi.push(angka)
        } 
        return isi
    } else{
        var isi = []
        for(var angka = startNum; angka >= finishNum; angka-= step) {
            isi.push(angka)
        } 
        return isi
    }
}
 
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

//////////////////////////////////////////////////////////////////////////////

console.log("No 3 Sum Of Range")
function sum(startNum, finishNum, step){
    hasil = 0
    if(step == null){
        if (finishNum == null){
            if(startNum == null){
                return hasil = 0
            }
            else {
                return hasil = hasil + startNum
            }
        } 
        else {
            if(startNum < finishNum){
                for(var angka = startNum; angka <= finishNum; angka++) {
                    hasil = hasil + angka
                } 
                return hasil
            } 
            else {
                for(var angka = startNum; angka >= finishNum; angka--) {
                    hasil = hasil + angka
                } 
                return hasil
            }
        } 
    } 
    else {
        if(startNum < finishNum){
            for(var angka = startNum; angka <= finishNum; angka += step) {
                hasil = hasil + angka
            } 
            return hasil
        } 
        else {
            for(var angka = startNum; angka >= finishNum; angka-= step) {
                hasil = hasil + angka
            } 
            return hasil
        }
    }
}
 
console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

//////////////////////////////////////////////////////////////////////////////

console.log("No 4 Array Multidimensi")
var biodata = [
["Nomor ID: ", "Nama Lengkap: ", "TTL: ", "Hobi: "]

]

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function dataHandling() {
    for (var i = 0; i<input.length; i++){
        console.log("Nomor ID: " + input[i][0])
        console.log("Nama Lengkap: " + input[i][1])
        console.log("TTL: " + input[i][2] + " " +input[i][3])
        console.log("Hobi: " + input[i][4])
        console.log("\n") 
    }
}

dataHandling()

//////////////////////////////////////////////////////////////////////////////

console.log("No 5 Balik Kata")
function balikKata(kata){
    var katabalik = '';
    for(var i = kata.length -1; i>=0; i--){
        katabalik = katabalik + kata[i]
    } 
    return katabalik
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

//////////////////////////////////////////////////////////////////////////////

console.log("No 6 Metode Array")
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1, 1, "Roman Alamsyah Elsharawy")
    input.splice(2, 1, "Provinsi Bandar Lampung")
    input.splice(4, 2, "Pria", "SMA Internasional Metro")
    console.log(input)

    var ttl = input[0,3]
    var ttl = ttl.split("/")
    var ttlint = [ttl[0,0], ttl[0,1], ttl[0,2]]

    var bulan = ttl[0,1]
    switch(bulan){
        case '01': { console.log(' Januari '); break;}
        case '02': { console.log(' Februari '); break;}
        case '03': { console.log(' Maret '); break;}
        case '04': { console.log(' April '); break;}
        case '05': { console.log(' Mei '); break;}
        case '06': { console.log(' Juni '); break;}
        case '07': { console.log(+ ' Juli '); break;}
        case '08': { console.log(+ ' Agustus '); break;}
        case '09': { console.log(+ ' September '); break;}
        case '10': { console.log(+ ' Oktober '); break;}
        case '11': { console.log(+ ' November '); break;}
        case '12': { console.log(+ ' Desember '); break;}
        default: { console.log(''); }
    }
    ttlint.sort(function (a, b) { return b - a } ) ;
    console.log(ttlint)

    var join = ttl.join("-")
    console.log(join)

    var nama = input[0,1]
    var slice = nama.slice(0,15) 
    console.log(slice)
}
dataHandling2(input)
 
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */ 