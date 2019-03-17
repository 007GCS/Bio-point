/* ---------------------------------------Iportação de Funções----------------------------------------*/
import React from 'react';
import { View, Button, Text,Image, } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
/*------------------------------------------Inicio do codigo------------------------------------------*/

const Page11 = ({ navigation }) => (
    <View style={{ flex: 1 }}>

{/*--------------------------------obtenção da imagem da tela tabela---------------------------*/}


    <Image
        style={{ width: 360, height: 568 }}
        source={require('./img/gif.png')}
    /> 
   
    </View>
);
{/*-------------------------Criaçao da funçao da pagina e possibilidade de exporta-la-----------------*/}

Page11.navigationOptions = {
  title: 'GIF',
}


export default Page11;
