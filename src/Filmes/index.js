import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class Filmes extends Component{
    
    render(){
        const {title, poster_path} = this.props.data;
        return(
            <View>
                <View style={styles.cartao}>
                    <Text style={styles.titulo}>{title}</Text>
                    <Image
                    source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}} 
                    style={styles.poster}
                    />

                    <View style={styles.btnCtn}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnTxt}>INFORMAÇÕES</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
            </View>
        );
    }
}
const styles = StyleSheet.create({
    cartao:{
        shadowColor:'#000',
        backgroundColor:'#FFF',
        shadowOffset:{width:0, height:2},
        shadowOpacity:1,
        margin:15,
        shadowRadius:5,
        borderRadius:5,
        elevation:3
    },
    titulo:{
        fontSize: 18,
        padding: 15,
    },
    poster:{
        height:500,
        zIndex:2,
        
    },
    btnCtn:{
        alignItems:'flex-end',
        marginTop: -60,
        zIndex:9
    },
    btn:{
        width:120   ,
        backgroundColor:'white',
        opacity:3,
        padding:8,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10,
        
    },
    btnTxt:{
        fontWeight:'bold',
        color:'black'
    }

});
export default Filmes;