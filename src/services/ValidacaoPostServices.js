class ValidacaoPostServices {
    static ValidaConteudoPost(conteudo) {
        return conteudo.length >= 1 && conteudo.length <= 560
    }
}

export default ValidacaoPostServices