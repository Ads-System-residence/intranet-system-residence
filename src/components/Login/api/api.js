import * as WebApi from "../../../services/webApi";

const LoginAPI = class {

    static obterPerguntaSeguranca(cpf) {
        return WebApi.SystemResidenceAPI.get("/login/recuperarPerguntaSeguranca/" + cpf);
    }

    static autenticarUsuario(cpf, senha) {
        debugger;
        return WebApi.SystemResidenceAPI.post("/login/autenticar", {cpf, senha});
    }

    static validarRespostaSeguranca(cpf, respostaSeguranca) {
        return WebApi.SystemResidenceAPI.post("/login/validarRespostaSeguranca", {cpf, respostaSeguranca});
    }

    static redefinirSenha(cpf, novaSenha) {
        return WebApi.SystemResidenceAPI.put("/logar/redefinirSenha", {cpf, novaSenha});
    }
  
}
export default LoginAPI;