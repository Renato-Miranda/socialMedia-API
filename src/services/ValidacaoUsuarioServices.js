import UsuarioRepository from "../repository/UsuarioRepository.js";

class ValidacaoUsuarioServices {
    static validaExistenciaUsuario(email) {
        const usuario = UsuarioRepository.buscarUsuarioEmail(email)
        if (usuario) {
            return true
        } else {
            return false
        }
    }

    static validaNomeUsuario(nomeUsuario) {
        return typeof nomeUsuario == "string" && nomeUsuario.length > 2
    }
    static validaEmail(email) {
        let validacaoRegex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
        return validacaoRegex.test(email)
    }
    static validaSenha(senha) {
        if (senha.length <= 6) {
            return false
        }
        if (!/\d/.test(senha)) {
            return false
        }
        if (!/[!@#$%^&*()-_=+[\]{}|;:'",.<>?/]/.test(senha)) {
            return false
        }
        return true
    }

    static ValidaCamposUsuario(nomeUsuario, email, senha) {
        const isValid = this.validaNomeUsuario(nomeUsuario) && this.validaEmail(email) && this.validaSenha(senha)
        return isValid
    }
}

export default ValidacaoUsuarioServices