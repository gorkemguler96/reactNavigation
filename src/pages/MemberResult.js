import React from 'react';
import {View, Text,StyleSheet} from "react-native";

function MemberResult({route}) {

    const {user} =route.params
    return (
        <View style={styles.container}>
            <Text style={styles.tamam}>Kayıt Tamamlandi </Text>
            <View>
                <Text style={styles.bolder}>Üye Adı: {user.userName}</Text>
                <Text style={styles.bolder}>Üye Soyadı: {user.userSurname}</Text>
                <Text style={styles.bolder}>Üye Yaşı: {user.userAge}</Text>
                <Text style={styles.bolder}>Üye E-postası: {user.userMail}</Text>
                <Text style={styles.bolder}>Üye Memleketi: {user.userHomeTown}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bolder:{
        fontWeight:"bold",
        fontSize:20,
        marginLeft:20
    },
    tamam:{
        margin:20,
        fontSize:20,
        fontWeight:"bold",
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default MemberResult;
