import { StyleSheet } from 'react-native';

const estiloLista = StyleSheet.create({
    areaTemas: {
        flex: 1,
        backgroundColor: '#92afd7',
    },
    temaTitulo: {
        height: 40,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
    },
    temaSubTitulo: {
        fontSize: 16,
        textAlign: 'center',
    },
    temaFoto: {
        height: 300,
        marginTop: 20,
        marginBottom: 20
    },
});

export default estiloLista;