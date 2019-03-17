/* ---------------------------------------Iportação de Funções----------------------------------------*/

import React from 'react';
import { View, Button, Text,Image} from 'react-native';
/*------------------------------------------Inicio do codigo------------------------------------------*/

const Page5 = ({ navigation }) => (
    <View style={{ flex: 1 }}>

{/*------------------------------------obtenção da imagem da tabela---------------------------*/}


    <Image
        style={{ width: 360, height: 568 }}
        source={require('./img/Tabelabiopoint.png')}
    />

   
    </View>
);
{/*-------------------------CRiaçao da funçao da pagina e possibilidade de exporta-la-----------------*/}

Page5.navigationOptions = {
  title: 'Tabela Bio Point',
}


export default Page5;