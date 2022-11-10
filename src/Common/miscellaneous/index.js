import { Storage } from "../Util/storage";

export default function validationToken(token) {
    let valido = false;

    if (PossuiPermissao(token)) {
        valido = true;
    }

    return valido;
}

export const  PossuiPermissao = (tokenAcessSystem) => {
    const jwt =  Storage("token");
    return jwt.some((t) => t === tokenAcessSystem);
};

export const redirect = (url) => {
    window.location.href = url;
}