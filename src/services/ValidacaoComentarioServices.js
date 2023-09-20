class ValidacaoComentarioServices {
    static ValidaConteudoComentario(conteudo) {
        return conteudo.length >= 1 && conteudo.length <= 560
    }
}

export default ValidacaoComentarioServices