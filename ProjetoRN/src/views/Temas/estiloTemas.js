import { StyleSheet } from 'react-native';

const estiloTemas = StyleSheet.create({
   container: {   
      flex: 1,
   },
   header: {
       height: 40,
       backgroundColor: '#2D3340',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       padding: 5,
   },
   texto: {
       fontSize: 18,
       color: '#000000',
   },
});

  export default estiloTemas;