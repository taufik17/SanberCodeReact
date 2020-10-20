if ( true ) {
    console.log("jalankan code")
}

/////////////////////////////////////////

if ( false ) {
    console.log("code tidak dijalankan")
}

////////////////////////////////////////

var mood = "happy"
if ( mood == "happy" ) {
    console.log("hari ini aku bahagia!")
}

/////////////////////////////////////////

var minimarketStatus = "open"
if ( minimarketStatus == "open" ) {
    console.log("saya akan membeli telur dan buah")
} else {
    console.log("minimarketnya tutup")
}

///////////////////////////////////////////

var minimarketStatus = "close"
var minuteRemainingToOpen = 5
if ( minimarketStatus == "open" ) {
    console.log("saya akan membeli telur dan buah")
} else if ( minuteRemainingToOpen <= 5 ) {
    console.log("minimarket buka sebentar lagi, saya tungguin")
} else {
    console.log("minimarket tutup, saya pulang lagi")
}

/////////////////////////////////////////////

var minimarketStatus = "open"
var telur = "soldout"
var buah = "soldout" 
if ( minimarketStatus == "open" ) {
    console.log("saya akan membeli telur dan buah")
    if(telur == "soldout" || buah == "soldout" ) {
        console.log("belanjaan saya tidak lengkap")    
    } else if( telur == "soldout") {
        console.log("telur habis")
    } else if ( buah == "soldout" ) {
        console.log("buah habis")
    }
} else {
    console.log("minimarket tutup, saya pulang lagi")
}

//////////////////////////////////////////////

