import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import estilos from './estilos';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { cadastrar } from '../../services/firebaserequisicoes';
import Alerta from '../../componentes/Alerta';

export default function Cadastro({ navigation }) {  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [statusErro,setStatusErro]=useState('');
  const [mensagemErro,setMensagemErro]=useState('');


async function realizacadastro(){
  if(email == ''){
    setMensagemErro('Preencha o campo de email');
    setStatusErro('email')
  }else if(senha == ''){
    setMensagemErro('Digite sua senha');
    setStatusErro('senha');
  }else if(confirmaSenha != senha){
    setMensagemErro('As senhas nao conferem');
    setStatusErro('confirmaSenha');
  }else{
  const resultado=await cadastrar(email,senha);
  
  setStatusErro('firebase');
  if(resultado=='sucesso'){
  setMensagemErro('usuario criado com sucesso');
  setEmail('');
  setSenha(' ');
  setConfirmaSenha(' ');
  }else{
    setMensagemErro(resultado);
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

      <EntradaTexto
        label="Confirmar Senha"
        value={confirmaSenha}
        onChangeText={texto => setConfirmaSenha(texto)}
        secureTextEntry
        error={statusErro == 'confirmaSenha'}
        messageError={mensagemErro}
      />
      <Alerta
      mensagem={mensagemErro}
      error={statusErro == 'firebase'}
      setError={setStatusErro}
      />
      <Botao onPress={() => {realizacadastro()}}>CADASTRAR</Botao>
    </View>
  );
}
