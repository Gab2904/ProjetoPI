import React, {useState} from 'react';
import {Text,View, Image, StyleSheet, TextInput, Button, Alert, ScrollView,TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function Produtos(props){
    return (

<SafeAreaView style={styles.container}>

<Image
        source={require('../assets/alcool.png')}
         style={styles.imagem}
        />
   
<View style={styles.descricao}>

      <Text style={styles.titulo}>Alcool em Gel</Text>
         <Text style={styles.tituloNome}>Quantidade: 80</Text>
      <Text style={styles.tituloNome}>Preço Unidade: R$ 4,50</Text>
        
       
       </View>

       <TouchableOpacity style={styles.icon} onPress = {() => {props.navigation.navigate('Produto')}}>
        <Ionicons
          name="ios-add" size={35} color="black"
          
        /> 
		</TouchableOpacity>


</SafeAreaView>

//     <View style={styles.container}>
//         <Image
//         source={require('../assets/alcool.png')}
//          style={styles.imagem}
//         />
//         <View style={styles.descricao}>

//         <Text style={styles.titulo}>Alcool em Gel</Text>
//         <Text style={styles.tituloNome}>Quantidade: 80</Text>
//         <Text style={styles.tituloNome}>Preço Unidade: R$ 4,50</Text>
        
       
//         </View>

        
// <View>
// <TouchableOpacity style={styles.icon} onPress = {() => {props.navigation.navigate('Produto')}}>
//         <Ionicons
//           name="ios-add" size={35} color="black"
          
//         /> 
// 		</TouchableOpacity>
// </View>
                
//     </View>

    

    
    )
}


const styles = StyleSheet.create({
    container:{
        height: 100,
        borderWidth: 1,
        borderColor: "#191919",
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        flex: 1
    },

    imagem:{
        height: 80,
        width: 100,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },

    descricao:{
        flex: 2,
        padding: 10
    },

    titulo:{
        fontWeight: 'bold',
        fontSize: 18
    },
    tituloNome:{
        color: 'gray'
    },
    
    icon:{
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#0094FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        right: 25,
        bottom: 25,
        elevation: 2,
        zIndex: 9,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        textShadowOffset:{
            width: 1,
            height: 3
        }

        
    }
})


