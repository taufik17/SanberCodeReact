import React from 'react';
import { 
  View, 
  Text,
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  Dimensions, 
  TextInput,  
  Button
} from 'react-native';

import data from './data.json';

const DEVICE = Dimensions.get('window')

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      totalHarga: 0,
      idBeli : 0
    }
  }

  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  };

  updatePrice = (d) => {
    //? #Soal Bonus (10 poin) 
    //? Buatlah teks 'Total Harga' yang akan bertambah setiap kali salah satu barang/item di klik/tekan.
    //? Di sini, buat fungsi untuk menambahkan nilai dari state.totalHarga dan ditampilkan pada 'Total Harga'.
    
    // Kode di sini
    
    let {totalHarga} = this.state
    totalHarga = parseInt(totalHarga) + parseInt(d.harga)
    this.setState({totalHarga})

    let {id, stock} = d

    this.setState({idBeli : id})
    // Mengurangi Stok
    data.produk.filter(function(item){
      return item.id == id
    })[0].stock = stock - 1

  }

  render() {
    const {userName} = this.props.route.params
    let {totalHarga, searchText} = this.state
    let list_product = data.produk
    list_product = list_product.filter(function(item){
      return item.nama.includes(searchText)
    })
    return (
      <View style={styles.container}>
        <View style={{ minHeight: 50, width: DEVICE.width * 0.88 + 20, marginVertical: 8 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Hai,{'\n'}
            {/* //? #Soal 1 Tambahan, Simpan userName yang dikirim dari halaman Login pada komponen Text di bawah ini */}
              <Text style={styles.headerText}>{userName}</Text>
            </Text>

            {/* //? #Soal Bonus, simpan Total Harga dan state.totalHarga di komponen Text di bawah ini */}
            <Text style={{ textAlign: 'right' }}>Total Harga Beli{'\n'}
              <Text style={styles.headerText}>{this.currencyFormat(totalHarga)}</Text>
            </Text>
          </View>
          <View>

          </View>
          <TextInput
            style={{ backgroundColor: 'white', marginTop: 8 }}
            placeholder='Cari barang..'
            onChangeText={(searchText => this.setState({ searchText }))}
          />
        </View>

        {/* 
        //? #Soal No 2 (15 poin)
        //? Buatlah 1 komponen FlatList dengan input berasal dari data.json
        //? dan pada prop renderItem menggunakan komponen ListItem -- ada di bawah --
        //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal)

        // Lanjutkan di bawah ini!
        */}
        <FlatList data={list_product}
                        renderItem={(produk) => <ListItem data={produk.item} onBeli={this.updatePrice}/>}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        />

      </View>
    )
  }
};

class ListItem extends React.Component {

  constructor(props){
    super(props)
    this.handleBeli = this.handleBeli.bind(this)
  }
  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  };

  handleBeli(){
    const data = this.props.data
    this.props.onBeli(data)
  }
  //? #Soal No 3 (15 poin)
  //? Buatlah styling komponen ListItem, agar dapat tampil dengan baik di device

  render() {
    const data = this.props.data
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: data.gambaruri }} style={styles.itemImage} resizeMode='contain' />
        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.itemName} >{data.nama}</Text>
        <View style={styles.itemDetail}>
          <Text style={styles.itemPrice}>{this.currencyFormat(Number(data.harga))}</Text>
          <Text style={styles.itemStock}>Sisa stok: {data.stock}</Text>
          { data.stock > 0 &&
            <TouchableOpacity style={styles.itemButton} onPress={this.handleBeli}>
              <Text style={styles.buttonText}>Beli</Text>
            </TouchableOpacity>
          }
          { data.stock == 0 &&
            <View style={styles.itemButtonHabis}>
              <Text style={styles.buttonText}>Stok Habis</Text>
            </View>
          }
          
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  //? Lanjutkan styling di sini
  itemContainer: {
    width: DEVICE.width * 0.44,
    padding:20,
    borderRadius : 10,
    backgroundColor:"white",
    marginHorizontal : DEVICE.width * 0.03,
    marginVertical : DEVICE.width * 0.03
  },
  itemImage: {
    height:100
  },
  itemName: {
    fontSize : 15,
    fontWeight : "bold",
    alignSelf:"center"
  },
  itemPrice: {
    justifyContent : "flex-end",
    alignSelf : "center", 
    fontSize : 15,
    color : "blue"
  },
  itemStock: {
    fontSize : 15,
  },
  itemDetail:{
    flex :1,
    justifyContent : 'flex-end',
    alignItems : 'center'
  },
  itemButton: {
    width : "50%",
    padding : 10,
    marginTop : 10,
    borderRadius : 10, 
    backgroundColor : "blue",
    alignItems : "center",
    justifyContent : 'center'
  },
  itemButtonHabis: {
    padding : 10,
    marginTop : 10,
    borderRadius : 5, 
    backgroundColor : "gray",
    alignItems : "center",
    justifyContent : 'center',
    width : "100%"
  },
  buttonText: {
    color:"white",
    fontSize : 15
  },
})
