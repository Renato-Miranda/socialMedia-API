class PostModel {
    constructor(conteudo, curtidas, comentarios, usuarioId, favoritosId, curtidoId)  {
        this.conteudo = conteudo;
        this.curtidas = curtidas;
        this.comentarios = comentarios;
        this.usuarioId = usuarioId;
        this.favoritosId = favoritosId;
        this.curtidoId = curtidoId;
    }
}

export default PostModel;