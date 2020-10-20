import React from 'react';
import { 
    View,
    Text, 
    Image, 
    StyleSheet,
    TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SkillItem extends React.Component {
    render(){
        let skill = this.props.skill;
        return (
            <View style={styles.container}>
                <View style={styles.skillBox}>
                    <Icon name={skill.iconName} style={styles.iconSkill}/>
                    <View style={styles.namaSkill}>
                        <Text style={styles.textNamaSkill}>{skill.skillName}</Text>
                        <Text style={styles.textKategori}>{skill.categoryName}</Text>
                        <View style={styles.precentage}>
                            <Text style={styles.textPersen}>{skill.percentageProgress}</Text>
                        </View>
                    </View>
                    <Icon name="chevron-right" style={styles.iconSkill}/>
                </View>               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    skillBox:{
        flexDirection: 'row',
        backgroundColor: "#B4E9FF",
        borderRadius: 5,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'space-between',   
        marginBottom: 5     
    },
    iconSkill: {
        color: '#003366',
        fontSize: 70
    },
    namaSkill: {
        flexDirection: 'column'
    },
    textNamaSkill: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#003366'
    },
    textKategori: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#3EC6FF'
    },
    precentage: {
        alignItems: 'flex-end'
    },
    textPersen: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#FFFFFF',
        
    }
});