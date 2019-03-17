/* ---------------------------------------Iportação de Funções----------------------------------------*/

import React from 'react';
import { View, Button, Text,Image } from 'react-native';
/*------------------------------------------Inicio do codigo------------------------------------------*/

const Page3 = ({ navigation }) => (
    <View style={{ flex: 1 }}>

{/*------------------------------------obtenção da imagem da tela de registro-------------------------*/}


    <Image
        style={{ width: 360, height: 568 }}
        source={require('./img/Cadastro.png')}
    />
    </View>
);
{/*-------------------------CRiaçao da funçao da pagina e possibilidade de exporta-la-----------------*/}
Page3.navigationOptions = {
    title:'Registro',
 
}


export default Page3;