import UsuarioRepository from "../repository/UsuarioRepository.js";

class ValidacaoUsuarioServices {
    static async validaExistenciaUsuario(email) {
        const usuario = await UsuarioRepository.buscarUsuarioEmail(email)
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
        let validacaoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return validacaoRegex.test(email);
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

    static ValidaCamposUsuario(nomeUsuario, senha, email) {
        const isValid = this.validaNomeUsuario(nomeUsuario) && this.validaEmail(email) && this.validaSenha(senha)
        return isValid
    }
}

export default ValidacaoUsuarioServices