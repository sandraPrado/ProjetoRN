import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import estiloTemas from './estiloTemas';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Temas({ navigation }) {

    const [temas, setTemas] = useState([
        {
            id: '1',
            titulo: ' Tema: As Partes da Missa\n',
            descricao: 'Descrição: Encontro sobre as partes da missa, nele foi explicado o que acontece em cada parte\n',
            autor: 'Apresentador: Gabrielly Jaspert\n',
            data: 'Data: 20/09/2020',
            foto: require('../../../assets/itens/2.jpeg'),
        },
        {
            id: '2',
            titulo: 'Tema: Santa Clara de Assis',
            descricao: 'Descrição Neste encontro foi apresentado a história de Santa Clara de Assis',
            autor: 'Apresentador: Bernardo',
            data: 'Data: 16/08/2020',
            foto: require('../../../assets/itens/3.jpeg'),     
        },
        {
            id: '3',
            titulo: 'Tema: Talento',
            descricao: 'Descrição: O que significa ter talento? Qual é o seu? Neste encontro foi nos mostrado a importância do talento',
            autor: 'Apresentador: Luiz',
            data: 'Data: 1962',
            foto: require('../../../assets/itens/4.jpeg'), 
        },
       
    ]);
    
    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloTemas.container}>

            <View style={estiloTemas.header}> 
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloTemas.texto}> Temas </Text>
                <MaterialIcons name="add" size={24} color="white" />
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={temas}
                renderItem={ ({item}) => <Lista data={item} /> }
            />
        </View>
    )
}

export default Temas;