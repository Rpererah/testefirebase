import { AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

function erroFirebase(error) {
    let mensagem = '';
    switch (error.code) {
        case AuthErrorCodes.EMAIL_EXISTS:
            mensagem = "Email ja esta em uso"
            break;
        case AuthErrorCodes.INVALID_EMAIL:
            mensagem = "Email invalido"
            break;
        case AuthErrorCodes.WEAK_PASSWORD:
            mensagem = "senha precisa de no minimo 6 caracteres"
            break;
        default:
            mensagem='erro desconhecido';
    }
    return mensagem;
}

export async function cadastrar(email, senha) {
   const resultado = await createUserWithEmailAndPassword(auth, email, senha)
        .then((dadosDoUsuario) => {
            console.log(dadosDoUsuario);
            return "Sucesso";
        })
        .catch((error) => {
            console.log(error);
            return erroFirebase(error);


        });
        return resultado;
}