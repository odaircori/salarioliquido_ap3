import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: ''
    };
  }
  
  calcular() {
    var salarioMes = this.state.valor * 30;
    const inss = 0.08*salarioMes;
    const imposto=0.11*salarioMes;
    const sindicato=0.05*salarioMes;

    var salarioLiquido = salarioMes - (inss + imposto + sindicato);

    

    return Alert.alert("Salário Líquido:", salarioLiquido.toString());
  }

  render() {

    return (      
      <View style={styles.container}>

        <FontAwesomeIcon icon={ faHandHoldingUsd } size={80} />

        <TextInput 
          keyboardType="numeric" 
          style={styles.input} 
          placeholder="Quanto você ganha por dia?"
          value={this.state.valor}
          onChangeText={value => this.setState({valor: value})} />

        <TouchableOpacity 
          style={styles.botao} 
          onPress={() => {this.calcular()}}>

          <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#546E7A',
      color:'#000',
      alignItems: 'center',
      justifyContent: 'center'
  },
    input: {
      width:250,
      backgroundColor:'#fff',
      marginTop:50,
      borderRadius:5
    },
    botao: {
      width:250,
      backgroundColor:'#222',
      justifyContent:'center',
      marginTop:20,
      borderRadius:5,
      padding:10
    },
    textoBotao: {
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold'
    },

});