/* ---------------------------------------Iportação de Funções----------------------------------------*/
import React from 'react';
import { View, Button, Text,Image,TouchableHighlight } from 'react-native';
/*------------------------------------------Inicio do codigo------------------------------------------*/
const Page1 = ({ navigation }) => (
    <View style={{ flex: 1 }}>


{/*------------------------------------obtenção da imagem da tela de inicio---------------------------*/}
    <Image
        style={{ width: 360, height: 568 }}
        source={require('./img/Telai.png')}
    />
 {/*-------habilitaçao do touth e execuçao da funçao abrir outra tela quando o texto for tocado-------*/}   
    <TouchableHighlight
     style={{position:'absolute', top:348, left:73}}
     underlayColor={'transparent'}
     onPress={()=>navigation.navigate('Cadastro')}
     >
         <Text style={{fontSize:60, color:'#000'}}>                </Text>
      </TouchableHighlight>
{/*------------------------------------------------------------------------------------------------ */}

      <TouchableHighlight
     style={{position:'absolute', top:220, left:100}}
     underlayColor={'transparent'}
     onPress={()=>navigation.navigate('Login')}
     >
         <Text style={{fontSize:50, color:'#000'}}>              </Text>
      </TouchableHighlight>


{/*------------- ----------------------------------------------------------------------------------- */}

    
    </View>
);

{/*-------------------------CRiaçao da funçao da pagina e possibilidade de exporta-la-----------------*/}
Page1.navigationOptions = {
title: 'Inicio',
}


export default Page1;

