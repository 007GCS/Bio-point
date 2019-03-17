/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/* ---------------------------------------Iportação de Funções----------------------------------------*/


import React, {Component} from 'react';
import {StyleSheet,Button, Image,Text, View, TouchableHighlight} from 'react-native';
/*------------------------------------------Inicio do codigo------------------------------------------*/


  const Page2 = ({ navigation }) => (

   
     
      <View style={{flex:1}}>
        
      
 {/*------------------------------------obtenção da imagem da tela Home-----------------------------*/}

        <Image
        style={{width:360,height:568}}
        source={require('./img/capa2.png')}
        
        
        />
{/*-------habilitaçao do touth e execuçao da funçao abrir outra tela quando o texto for tocado-------*/}   

        <TouchableHighlight
        style={{position:'absolute', top:82, left:198, }}
        underlayColor={'transparent'}
        onPress={()=>navigation.navigate('Tabela')}
        >
         <Text style={{fontSize: 26, color:'#000'}}>            </Text>
        </TouchableHighlight>

{/* ---------------------------------------------------------------------------- */}

       <TouchableHighlight 
        style={{position:'absolute', top:35, left:19}}
       underlayColor={'transparent'}
       onPress={()=>navigation.navigate('Tabelat')}
       >
          <Text style={{fontSize: 57, color:'#000'}}>      </Text>
        </TouchableHighlight>

{/* --------------------------------------------------------------------------------------- */}

        <TouchableHighlight 
        style={{position:'absolute', top:180, left:209}}
        underlayColor={'transparent'}
        onPress={()=>navigation.navigate('Comof')}
        >
           <Text style={{fontSize:28, color:'#000'}}>             </Text>
        </TouchableHighlight>

    {/* --------------------------------------------------------------------------------- */}
     
     <TouchableHighlight
     style={{position:'absolute', top:272, left:230}}
     underlayColor={'transparent'}
     onPress={()=>navigation.navigate('entrega')}
     >
         <Text style={{fontSize:30, color:'#000'}}>           </Text>
      </TouchableHighlight>

      </View>
    );
  
{/*-------------------------CRiaçao da funçao da pagina e possibilidade de exporta-la-----------------*/}


const styles = StyleSheet.create({

});
  Page2.navigationOptions = {
     title: 'Home',
     }
    
     export default Page2;