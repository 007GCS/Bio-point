/* ---------------------------------------Iportação de Funções----------------------------------------*/

import React from 'react';
import { View, Button, Text,Image,TextInput,TouchableHighlight } from 'react-native';
/*------------------------------------------Inicio do codigo------------------------------------------*/

const Page9 = ({ navigation }) => (
    <View style={{ flex: 1 }}>
{/*------------------------------------obtenção da imagem da tela de cadastro-------------------------*/}



    <Image
        style={{ width: 360, height: 568 }}
        source={require('./img/Cadastro.png')}
    />
{/*------------------------------funçao de entrada de dados---------------------------------------------*/}
<TextInput
        style={{position:'absolute', top:200, left:108,height: 40, borderColor: 'gray', borderWidth: 0,fontSize:19}}
        onChangeText={(text) => {name=text}}
        placeholder="Digite seu Nome"
      />
<TextInput
        style={{position:'absolute', top:300, left:108,height: 40, borderColor: 'gray', borderWidth: 0,fontSize:19}}
        onChangeText={(text) => {name=text}}
        placeholder="Digite seu E-mail"
      />
<TextInput
        style={{position:'absolute', top:388, left:108,height: 40, borderColor: 'gray', borderWidth: 0,fontSize:19}}
        onChangeText={(text) => {name=text}} secureTextEntry={true}
        placeholder="Digite sua Senha"
      />





    
{/*-------habilitaçao do touth e execuçao da funçao abrir outra tela quando o texto for tocado-------*/}   

<TouchableHighlight
     style={{position:'absolute', top:429, left:130}}
     underlayColor={'transparent'}
     onPress={()=>navigation.navigate('Inicio')}
     >
         <Text style={{fontSize:25, color:'#000'}}>              </Text>
      </TouchableHighlight>


 
    </View>
);
{/*-------------------------CRiaçao da funçao da pagina e possibilidade de exporta-la-----------------*/}


Page9.navigationOptions = {
title: 'Cadastro',
}


export default Page9;