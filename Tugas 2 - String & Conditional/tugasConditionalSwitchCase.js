var hari = 17; 
var bulan = 2; 
var tahun = 1998;

if(hari >=1 && hari <=31 ) {
    if(bulan >=1 && bulan <=12 ){
        if(tahun >= 1990 && tahun <= 2200){

            switch(bulan){
                case 1: { console.log(hari + ' Januari '+ tahun); break;}
                case 2: { console.log(hari + ' Februari '+ tahun); break;}
                case 3: { console.log(hari + ' Maret '+ tahun); break;}
                case 4: { console.log(hari + ' April '+ tahun); break;}
                case 5: { console.log(hari + ' Mei '+ tahun); break;}
                case 6: { console.log(hari + ' Juni '+ tahun); break;}
                case 7: { console.log(hari + ' Juli '+ tahun); break;}
                case 8: { console.log(hari + ' Agustus '+ tahun); break;}
                case 9: { console.log(hari + ' September '+ tahun); break;}
                case 10: { console.log(hari + ' Oktober '+ tahun); break;}
                case 11: { console.log(hari + ' November '+ tahun); break;}
                case 12: { console.log(hari + ' Desember '+ tahun); break;}
                default: { console.log(''); }
            }

        }
        else{
            console.log('Tahun tidak valid');
        }
    } 
    else{
        console.log('Bulan tidak valid');
    }
}
else{
    console.log('Hari tidak valid');
}
