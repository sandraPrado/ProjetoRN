import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';

const Lista = ({data}) => {

    const [tema, setTema ] = useState(data);

    return (
        <View style={estiloLista.areaTemas}>

            <LinearGradient colors={['#14417b', '#92afd7', '#92afd7']}>
                <Text style={estiloLista.temaTitulo}> {tema.titulo} </Text>
            </LinearGradient>
            <Text style={estiloLista.temaSubTitulo}> {tema.autor} ({tema.data}) </Text>
            
            <LinearGradient colors={['#92afd7', '#92afd7', '#14417b']}>
                <Image 
                    style={estiloLista.temaFoto}
                    source={tema.foto}  
                    resizeMode='contain' />
            </LinearGradient>
        </View>
    );
}

export default Lista;