import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloCadastro from './estiloCadastro';

function Cadastro({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }

    return (
        <View style={estiloCadastro.container}>
            <Text style={estiloCadastro.texto}>Cadastro</Text>
            <View style={estiloCadastro.borda}>


                
            </View>

            <TouchableOpacity style={estiloCadastro.botaoContainer} onPress={voltar}>
                    <Text style={estiloCadastro.botaoTexto}>Voltar</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Cadastro;