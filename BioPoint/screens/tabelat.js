
/* ---------------------------------------Iportação de Funções----------------------------------------*/
import React from 'react';
import { View, Button, Text,Image,TouchableHighlight } from 'react-native';
/*------------------------------------------Inicio do codigo------------------------------------------*/

const Page6 = ({ navigation }) => (
    <View style={{ flex: 1 }}>

{/*--------------------------------obtenção da imagem da tela tabela---------------------------*/}


    <Image
        style={{ width: 360, height: 568 }}
        source={require('./img/Tabeladetrocas.png')}
    />

{/*------------------------------------------------------------------------------------------------ */}

<TouchableHighlight
     style={{position:'absolute', top:50, left:265}}
    underlayColor={'transparent'}
     onPress={()=>navigation.navigate('gif')}
     >
         <Text style={{fontSize:25, color:'#000'}}>             </Text>
      </TouchableHighlight>


{/*------------- ----------------------------------------------------------------------------------- */}
   
    </View>
);
{/*-------------------------CRiaçao da funçao da pagina e possibilidade de exporta-la-----------------*/}

Page6.navigationOptions = {
  title: 'Tabela de trocas',
}


export default Page6;
