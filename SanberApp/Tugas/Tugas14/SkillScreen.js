import React from 'react';
import { 
    View,
    Text, 
    Image, 
    StyleSheet,
    Platform,
    TouchableOpacity ,
    FlatList,
    StatusBar,
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SkillItem from './components/SkillItem';
import data from './skillData.json';

export default class App extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <StatusBar 
                backgroundColor="#003366"
                barStyle="light-content"/>

                <View style={styles.navBar}>
                    <Image source={require('../Tugas13/assets/images/logo.png')} style={{width:150, height:50}} />
                </View>
                <View style={styles.profil}>
                    <TouchableOpacity>
                        <Icon style={styles.fotoProfil} name="account-circle" size={45}></Icon>
                    </TouchableOpacity>
                    <View>
                        <Text>Hai,</Text>
                        <Text style={styles.namaProfil}>Taufik Agung Santoso</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.skill}>SKILL</Text>
                </View>
                <View style={styles.skillKategori}>
                    <ImageBackground style={styles.listKategori}>
                        <Text style={styles.textKategoriSkill}>Library / Framework</Text>
                    </ImageBackground>
                    <ImageBackground style={styles.listKategori}>
                        <Text style={styles.textKategoriSkill}>Bahasa Pemrograman</Text>
                    </ImageBackground>
                    <ImageBackground style={styles.listKategori}>
                        <Text style={styles.textKategoriSkill}>Teknologi</Text>
                    </ImageBackground>
                </View>

                <View style={styles.body}>
                  <FlatList 
                  data={data.items}
                  renderItem={(skill)=><SkillItem skill={skill.item}/>}
                  keyExtractor={(item)=>item.id}
                  ItemSeparatorComponent={()=><View style={{height:0.5,backgroundColor:'#E5E5E5'}} />}
                  />
                </View>

            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15
    },
    navBar: {
        height: 55,
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    profil: {
        alignItems:'center',
        flexDirection: 'row'
    },
    fotoProfil: {
        color: '#3EC6FF'
    },

    namaProfil: {
        fontSize: 15,
        color: '#003366',
        fontWeight: 'bold'
    },
    skill: {
        fontSize: 20,
        color: "#003366",
        marginTop: 10,
        borderBottomColor: '#3EC6FF',
        borderBottomWidth: 3,
    },
    skillKategori: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    listKategori:{
        backgroundColor: "#B4E9FF",
        borderRadius: 5,
        padding: 3,
        marginBottom: 10,
        margin: 5
    },
    textKategoriSkill: {
        fontSize: 13,
    },
    body: {
        flex: 1,
    }
});