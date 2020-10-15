import { StyleSheet } from 'react-native';

const estiloLogin = StyleSheet.create({

    container: {
        flex:1,
    },
    borda: {
        justifyContent: 'center',
        backgroundColor: '081a31',
        width: '100%',
        height: '100%',
    },
    fundo: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    textoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    texto: {
        size: 36,
        alignItems: 'center',
        padding: 20,
        fontFamily: 'Arial',
    },
    campo: {
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
    },
    campoContainer: {
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    texto: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        paddingLeft: 15,
        fontWeight: 'bold',
    },

});

export default estiloLogin;