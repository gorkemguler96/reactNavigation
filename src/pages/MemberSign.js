import React, {useState} from 'react';
import {View, Text, Alert} from "react-native";
import Input from '../../components/Input'

import Button from '../../components/Button'


function MemberSign({navigation, route}) {
    const [userName,setUserName]=useState(null)
    const [userSurname,setUserSurname]=useState(null)
    const [userAge,setUserAge]=useState(null)
    const [userMail,setUserMail]=useState(null)
    const [userHomeTown,setHomeTown]=useState(null)

    function backToFirst(){
        navigation.goBack()
    }

    function handleSubmit(){

        if(!userName ||!setUserName||!userAge||!userMail||!userHomeTown){
            Alert.alert('Kebap Fitness Salonu','Bilgileri boş bırakamazsın dayıcım')
            return;
        }
        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userHomeTown,
        }

        navigation.navigate('MemberResultScreen',{user})
    }


    return (
        <View>
            <Input label={"Üye Adı"} placeholder={"Üye İsmini Giriniz..."} onChangeText={setUserName}/>
            <Input label={"Üye Soyadı"} placeholder={"Üye Soyismini Giriniz..."} onChangeText={setUserSurname}/>
            <Input label={"Üye Yaşı"} placeholder={"Üye Yaşını Giriniz..."} onChangeText={setUserAge}/>
            <Input label={"Üye E-posta Adresi"} placeholder={"Üye E-posta Adresi Giriniz..."} onChangeText={setUserMail}/>
            <Input label={"Üye Memleketi"} placeholder={"Üye Memleketi Giriniz..."} onChangeText={setHomeTown}/>
            <Button  text={"Kaydı Tamamla "} onPress={handleSubmit}/>
        </View>
    );
}

export default MemberSign;
