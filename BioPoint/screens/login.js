/* ---------------------------------------Iportação de Funções----------------------------------------*/

import React from 'react';
import { View, Button, Text,Image,TouchableHighlight,TextInput } from 'react-native';
/*------------------------------------------Inicio do codigo------------------------------------------*/

const Page8 = ({ navigation }) => (
    <View style={{ flex: 1 }}>

{/*------------------------------------obtenção da imagem da tela de login---------------------------*/}


    <Image
        style={{ width: 360, height: 568 }}
        source={require('./img/LOGIN.png')}
    />
    
{/*------------------------------funçao de entrada de dados---------------------------------------------*/}
<TextInput
        style={{position:'absolute', top:196, left:104,height: 40, borderColor: 'gray', borderWidth: 0,fontSize:19}}
        onChangeText={(text) => {name=text}}
        placeholder="Digite seu Nome"
      />
<TextInput
        style={{position:'absolute', top:313, left:104,height: 40, borderColor: 'gray', borderWidth: 0,fontSize:19}}
        onChangeText={(text) => {name=text}} secureTextEntry={true}
        placeholder="Digite sua Senha"
      />      

{/*-------habilitaçao do touch e execuçao da funçao abrir outra tela quando o texto for tocado-------*/}   

<TouchableHighlight
     style={{position:'absolute', top:370, left:130}}
     underlayColor={'transparent'}
     onPress={()=>navigation.navigate('Inicio')}
     >
         <Text style={{fontSize:28, color:'#000'}}>           </Text>
      </TouchableHighlight>



    
    </View>
);

{/*-------------------------CRiaçao da funçao da pagina e possibilidade de exporta-la-----------------*/}

Page8.navigationOptions = {
title: 'Login',
}


export default Page8;