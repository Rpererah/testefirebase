import React, { useState } from 'react';
import { View } from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import estilos from './estilos';
import { logar } from '../../services/firebaserequisicoes';
import Alerta from '../../componentes/Alerta';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [statusErro,setStatusErro]=useState('');
  const [mensagemErro,setMensagemErro]=useState('');

async function realizarLogin(){
  if(email == ''){
    setMensagemErro('O email eh obrigatorio');
    setStatusErro('email')
  }else if(senha == ''){
    setMensagemErro('A senha eh obrigatoria');
    setStatusErro('senha');
  }else{
  const resultado=await logar(email,senha);
  console.log(resultado);
  if(resultado=='erro'){
    setStatusErro('firebase');
    setMensagemErro('Email ou senha nao conferem');
  }else{
    navigation.replace('Principal')
  }
  }
  
}

  return (
    <View style={estilos.container}>
      <EntradaTexto 
        label="E-mail"
        value={email}
        onChangeText={texto => setEmail(texto)}
        error={statusErro == 'email'}
        messageError={mensagemErro}
      />
      <EntradaTexto
        label="Senha"
        value={senha}
        onChangeText={texto => setSenha(texto)}
        secureTextEntry
        error={statusErro == 'senha'}
        messageError={mensagemErro}
      />
      
      <Botao onPress={() => realizarLogin()}>LOGAR</Botao>
      <Botao 
        onPress={() => { navigation.navigate('Cadastro') }}
      >
        CADASTRAR USUÁRIO
      </Botao>
      <Alerta
      mensagem={mensagemErro}
      error={statusErro == 'firebase'}
      setError={setStatusErro}
      />
    </View>
  );
}
