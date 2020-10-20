console.log("\n#######################################################################################")
console.log("Soal No. 1 (Array to Object)")
function arrayToObject(arr) {

    var now = new Date()
    var thisYear = now.getFullYear() // 2020 (tahun sekarang)

    function getyear(arr){
        if(arr == null){
            return "Invalid birth year"
        }
        else {
            if(arr > thisYear) {
                return "Invalid birth year"
            }
            else {
                return thisYear - arr
            }
        }
    }

    for (var i = 0; i<arr.length; i++){
        var obj = {
            firstName : arr[i][0],
            lastName : arr[i][1],
            gender : arr[i][2],
            age : getyear(arr[i][3])
        }
        console.log(i+1 +". " + arr[i][0]+ " "+ arr[i][1] +" : ")
        console.log(obj)
    }
}

// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
console.log("\n")
arrayToObject(people2) 
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
// Error case 
arrayToObject([]) // ""
console.log("#######################################################################################")
console.log("\n#######################################################################################")

console.log("Soal No. 2 (Shopping Time)")
var barang = {
    "Sepatu Stacattu" : 1500000,
    "Baju Zoro" : 500000,
    "Baju H&N" : 250000,
    "Sweater Uniklooh" : 175000,
    "Casing Handphone" : 50000
}
function shoppingTime(memberId, money) {

    function mungkinbeli(money){
        var list = []
        if(money > barang["Sepatu Stacattu"]){
            list.push("Sepatu Stacattu")
            if(money >= barang["Baju Zoro"]){
                list.push("Baju Zoro")
                if(money >= barang["Baju H&N"]){
                    list.push("Baju H&N")
                    if(money >= barang["Sweater Uniklooh"]){
                        list.push("Sweater Uniklooh")
                        if(money >= barang["Casing Handphone"]){
                            list.push("Casing Handphone")
                            return list
                        }
                        else {
                            return list
                        }
                    }
                    else {
                        return list
                    }
                }
                else {
                    return list
                }
            }
            else {
                return list
            }
        }
        else if(money >= barang["Baju Zoro"]){
            list.push("Baju Zoro")
            if(money >= barang["Baju H&N"]){
                list.push("Baju H&N")
                if(money >= barang["Sweater Uniklooh"]){
                    list.push("Sweater Uniklooh")
                    if(money >= barang["Casing Handphone"]){
                        list.push("Casing Handphone")
                        return list
                    }
                    else {
                        return list
                    }
                }
                else {
                    return list
                }
            }
            else {
                return list
            }
        }
        else if(money >= barang["Baju H&N"]){
            list.push("Baju H&N")
            if(money >= barang["Sweater Uniklooh"]){
                list.push("Sweater Uniklooh")
                if(money >= barang["Casing Handphone"]){
                    list.push("Casing Handphone")
                    return list
                }
                else {
                    return list
                }
            }
            else {
                return list
            }
        }
        else if(money >= barang["Sweater Uniklooh"]){
            list.push("Sweater Uniklooh")
            if(money >= barang["Casing Handphone"]){
                list.push("Casing Handphone")
                return list
            }
            else {
                return list
            }
        }
        else if(money >= barang["Casing Handphone"]){
            list.push("Casing Handphone")
            return list
        }
    }

    function uangkembali(money){
        if(money >= barang["Sepatu Stacattu"]){
            money = money - barang["Sepatu Stacattu"]
            if(money >= barang["Baju Zoro"]){
                money = money - barang["Baju Zoro"]
                if(money >= barang["Baju H&N"]){
                    money = money - barang["Baju H&N"]
                    if(money >= barang["Sweater Uniklooh"]){
                        money = money - barang["Sweater Uniklooh"]
                        if(money >= barang["Casing Handphone"]){
                            money = money - barang["Casing Handphone"]
                            return money
                        }
                        else {
                            return money
                        }
                    }
                    else {
                        return money
                    }
                }
                else {
                    return money
                }
            }
            else {
                return money
            }
        }
        else if(money >= barang["Baju Zoro"]){
            money = money - barang["Baju Zoro"]
            if(money >= barang["Baju H&N"]){
                money = money - barang["Baju H&N"]
                if(money >= barang["Sweater Uniklooh"]){
                    money = money - barang["Sweater Uniklooh"]
                    if(money >= barang["Casing Handphone"]){
                        money = money - barang["Casing Handphone"]
                        return money
                    }
                    else {
                        return money
                    }
                }
                else {
                    return money
                }
            }
            else {
                return money
            }
        } 
        else if(money >= barang["Baju H&N"]){
            money = money - barang["Baju H&N"]
            if(money >= barang["Sweater Uniklooh"]){
                money = money - barang["Sweater Uniklooh"]
                if(money >= barang["Casing Handphone"]){
                    money = money - barang["Casing Handphone"]
                    return money
                }
                else {
                    return money
                }
            }
            else {
                return money
            }
        }
        else if(money >= barang["Sweater Uniklooh"]){
            money = money - barang["Sweater Uniklooh"]
            if(money >= barang["Casing Handphone"]){
                money = money - barang["Casing Handphone"]
                return money
            }
            else {
                return money
            }
        }
        else if(money >= barang["Casing Handphone"]){
            money = money - barang["Casing Handphone"]
            return money
        }
    }

    // you can only write your code here!
    if(memberId == null || memberId == ''){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    else {
        if(money < 50000){
            return "Mohon maaf, uang tidak cukup"
        }
        else {
            var keranjang = {
                memberId : memberId,
                money : money,
                listPurchased : mungkinbeli(money),
                changeMoney : uangkembali(money)
            }
            return keranjang
        }
    }
  }
   
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

  console.log("#######################################################################################")
  console.log("\n#######################################################################################")

  console.log("Soal No. 3 (Naik Angkot)")
  function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    function getbayar(dari, tujuan){
        
        var indexdari = rute.indexOf(dari)
        var indextujuan = rute.indexOf(tujuan)
        var hasil = 0

        if(indexdari < indextujuan) {
            for(var i = indexdari; i<indextujuan; i++){
                hasil = hasil+2000
            }
            return hasil
        }
        else {
            for(var i = indexdari; i > indextujuan; i--){
                hasil = hasil+2000
            }
            return hasil
        }   
    }

    var arraypenumpang = []
    for (var i = 0; i<arrPenumpang.length; i++){
        var obj = {
            penumpang : arrPenumpang[i][0],
            naikDari : arrPenumpang[i][1],
            tujuan : arrPenumpang[i][2],
            bayar : getbayar(arrPenumpang[i][1],arrPenumpang[i][2])
        }
        arraypenumpang.push(obj)
    }
    return arraypenumpang
  }
   
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
  console.log("#######################################################################################")
  