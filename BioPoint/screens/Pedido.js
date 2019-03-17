/* ---------------------------------------Iportação de Funções----------------------------------------*/
import React from 'react';
import { View, Button, Text,Image,TextInput,TouchableHighlight } from 'react-native';
/*------------------------------------------Inicio do codigo------------------------------------------*/

function mudarTela( navigation){


  alert('Seu Pedido Foi Enviado Com Sucesso')
  navigation.navigate('Inicio')

}

const Page7 = ({ navigation }) => (
    <View style={{ flex: 1 }}>


{/*------------------------------------obtenção da imagem da tela de pedido---------------------------*/}

    <Image
        style={{ width: 360, height: 568 }}
        source={require('./img/Pedido.png')}
    />
    
{/*-------habilitaçao do touth e execuçao da funçao abrir outra tela quando o texto for tocado-------*/}   

<TouchableHighlight

        style={{position:'absolute', top:412, left:140, }}
        underlayColor={'transparent'}
        
        
        onPress={()=>mudarTela( navigation)}
        >
         <Text style={{fontSize: 26, color:'#000'}}>            </Text>
        </TouchableHighlight>


{/*------------------------------funçao de entrada de dados---------------------------------------------*/}
<TextInput
        style={{position:'absolute', top:140, left:130,height: 40, borderColor: 'gray', borderWidth: 0,fontSize:19}}
        onChangeText={(text) => {name=text}}
        placeholder="Digite seu Nome"
      />
      {/*------------------------------funçao de entrada de dados---------------------------------------------*/}
<TextInput
        style={{position:'absolute', top:189, left:130,height: 40, borderColor: 'gray', borderWidth: 0,fontSize:19}}
        onChangeText={(text) => {name=text}}
        placeholder="Digite sua Cidade"
      />
      {/*------------------------------funçao de entrada de dados---------------------------------------------*/}
<TextInput
        style={{position:'absolute', top:235, left:130,height: 40, borderColor: 'gray', borderWidth: 0,fontSize:19}}
        onChangeText={(text) => {name=text}}
        placeholder="Digite seu CEP"
      />
      <TextInput
        style={{position:'absolute', top:280, left:130,height: 40, borderColor: 'gray', borderWidth: 0,fontSize:19}}
        onChangeText={(text) => {name=text}}
        placeholder="Digite seu Bairro"
      />
      <TextInput
        style={{position:'absolute', top:327, left:157,height: 40, borderColor: 'gray', borderWidth: 0,fontSize:18}}
        onChangeText={(text) => {name=text}}
        placeholder="Digite seu Endereço"
      />
      <TextInput
        style={{position:'absolute', top:373, left:157,height: 40, borderColor: 'gray', borderWidth: 0,fontSize:19}}
        onChangeText={(text) => {name=text}}
        placeholder="Digite seu Número"
      />
      

    
    </View>
);
{/*-------------------------CRiaçao da funçao da pagina e possibilidade de exporta-la-----------------*/}
Page7.navigationOptions = {
title: 'Pedido',
}


export default Page7;