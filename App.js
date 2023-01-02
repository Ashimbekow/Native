import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

export default function App() {
  const [UserName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const handleLogin =() =>{
    alert(UserName +" "+password)
  }
  const handleChangeUserName = (text) =>{
    setUserName(text)
  }
  const handleChangePassword = (text) =>{
    setPassword(text)
  }
  return (
    <SafeAreaView>

     <View style={{padding:20}}>
      <Text style={styles.txt_title}>Login </Text>
      <TextInput
      onChangeText={handleChangeUserName}
      placeholder='UserName'  
      style={styles.input_container}
      />
       <TextInput
       secureTextEntry={true}
       onChangeText={handleChangePassword}
      placeholder='Password'  
      style={styles.input_container}
      />
      <Text style={styles.text_password}>
        Забыли пороль
      </Text>
      <TouchableOpacity
      onPress={handleLogin}
      style={styles.btn_login}
      >

       <Text style={styles.txt_login}>Login</Text>

      </TouchableOpacity>


     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  txt_title: {
   marginTop:100,
   fontSize:46,
   color: "#000",
   fontWeight:"bold"
  },
  input_container:{
    borderWidth:0.5,
    padding:16,
    fontSize:17,
    marginTop:20,
    borderRadius:50
  },
  text_password:{
    marginTop:10,
    textAlign:"right",
    fontSize:15,
    color:"blue"
  },
  btn_login:{
    backgroundColor:"#000000",
    padding:15,
    marginTop:20,
    borderRadius:10
  },
  txt_login:{
    color:"#FFFFFF",
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center'
  }
});
