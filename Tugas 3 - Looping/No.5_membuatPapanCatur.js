var pagar = "#"
var kosong = " ";
var hasil = " ";
for(var i=0 ;i<8; i++ ) { // perulangan untuk vertikal
    for(let j=0; j<8; j++) { // perulangan untuk horizontal
        if(i%2==1) { // setiap i ketemu bilangan ganjil
            if(j%2==0) { // setiap j ketemu bilangan genap
                hasil = hasil + pagar; // cetak pagar '#'
            }
            else { // setiap j ketemu bilangan ganjil 
                hasil = hasil + kosong; // cetak spasi / kosong ' '
            }
        }
        else { // setiap i ketemu bilangan genap polanya di ganti
            if( j%2==0) { // setiap j ketemu bilangan genap
                hasil = hasil + kosong; // cetak pagar '#'
            }
            else { // setiap j ketemu bilangan ganjil
                hasil = hasil + pagar; // cetak spasi / kosong ' '
            }
        }
    }
    console.log(hasil); // cetak hasil setiap satu baris ke html_
    hasil = " " ; // refresh wadah pola
}