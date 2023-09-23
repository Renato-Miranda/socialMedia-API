class PostModel {
    constructor(conteudo, curtidas, usuarioId, comentarios, favoritosId, curtidoId)  {
        this.conteudo = conteudo;
        this.curtidas = curtidas;
        this.usuarioId = usuarioId;
        this.comentarios = comentarios;
        this.favoritosId = favoritosId;
        this.curtidoId = curtidoId;
    }
}

export default PostModel;