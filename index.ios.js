import React from 'react'
import {
  AppRegistry,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native'

const gerarFrase = function (){
  var numeroAleatorio = Math.random()
  numeroAleatorio = Math.floor(numeroAleatorio*5)
  var frase = Array()
  frase[0] = "A vida é um dom. Nunca desista dela"
  frase[1] = "Quem cedo madruga Deus Ajuda!"
  frase[2] = "O importante é aprender com os erros."
  frase[3] = "Não se faz pão sem fermento."
  frase[4] = "O ócio é o maior inimigo do homem."
  Alert.alert(`${frase[numeroAleatorio]}`)
}
const App = () => {
  const {estiloImagem, estiloBotao, estiloView, estiloTexto} = Estilo
  return (
    <View style={estiloView}>
      <Image source={require("./img/frases.jpg")}/>
      <TouchableOpacity style={estiloBotao} onPress={gerarFrase}>
        <Text style={estiloTexto}>Gerar Frase</Text>
      </TouchableOpacity>
    </View>
  )
}

AppRegistry.registerComponent('app2', () => App)

const Estilo = {
  estiloImagem: {
    width: 100,
    height: 100
  },
  imagem:{
    flex: 1
  },
  estiloBotao:{
    backgroundColor: '#0066cc',
    shadowColor:'grey',
    shadowOpacity: 5,
    shadowRadius: 1,
    shadowOffset: {width:0,height:3},
    borderColor: '#0066cc',
    borderRadius: 10,
    borderWidth: 3,
  },
  estiloView:{
    flex:0.1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
   
  },
  estiloTexto: {
    padding:20,
    fontSize: 30,
    color: 'white',

  }
}