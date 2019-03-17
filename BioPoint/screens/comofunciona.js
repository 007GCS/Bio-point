/* ---------------------------------------Iportação de Funções----------------------------------------*/

import React from 'react';
import { View, Button, Text,Image } from 'react-native';
/*------------------------------------------Inicio do codigo------------------------------------------*/

const Page4 = ({ navigation }) => (
    <View style={{ flex: 1 }}>


{/*------------------------------------obtenção da imagem da duvidas---------------------------------*/}

    <Image
        style={{ width: 360, height: 568 }}
        source={require('./img/ComoFunciona.png')}
    />


    
    </View>
);
{/*-------------------------CRiaçao da funçao da pagina e possibilidade de exporta-la-----------------*/}

Page4.navigationOptions = {
  title: 'Como Funciona',
}


export default Page4;