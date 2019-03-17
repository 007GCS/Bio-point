
/* ---------------------------------------Iportação de Funções----------------------------------------*/
import React from 'react';
import { View, Button, Text,Image,TouchableHighlight } from 'react-native';
/*------------------------------------------Inicio do codigo------------------------------------------*/

function mudarTela( navigation){


    alert('2% Foram Somados A Sua Conta')
    navigation.navigate('Inicio')
  
  }
const Page10 = ({ navigation }) => (
    <View style={{ flex: 1 }}>

{/*--------------------------------obtenção da imagem da tela tabela---------------------------*/}


    <Image
        style={{ width: 360, height: 568 }}
        source={require('./img/Entrega.png')}
    />

 {/*-------habilitaçao do touth e execuçao da funçao abrir outra tela quando o texto for tocado-------*/}   
 
 <TouchableHighlight
     style={{position:'absolute', top:370, left:150}}
     underlayColor={'transparent'}
     
     onPress={()=>mudarTela(navigation)}
     >
         <Text style={{fontSize:25, color:'#000'}}>            </Text>
      </TouchableHighlight>
{/*------------------------------------------------------------------------------------------------ */}

      <TouchableHighlight
     style={{position:'absolute', top:230, left:150}}
     underlayColor={'transparent'}
     onPress={()=>navigation.navigate('Pedido')}
     >
         <Text style={{fontSize:25, color:'#000'}}>            </Text>
      </TouchableHighlight>


{/*------------------------------------------------------------------------------------------------- */}
   
    </View>
    
);
{/*-------------------------CRiaçao da funçao da pagina e possibilidade de exporta-la-----------------*/}

Page10.navigationOptions = {
  title: 'Opção de entregas',
}


export default Page10;
