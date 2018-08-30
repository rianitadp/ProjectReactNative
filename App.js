/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import Judul from './Component/Judul';

export default class App extends React.Component {
  render() {
    return (
       <View style={styles.container}>
       <Judul/>
        <Text style={styles.instructions}>Nama: Rianita Dwi Pangestu</Text>
        <Text style={styles.instructions}>Kelas: XI RPL 1 </Text>
        <Text style={styles.instructions}>No.Absen: 30 </Text>
        <Image style={{width: 300, height:300}}
        source={require('./sapa.jpg')}
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b1cfdd',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
