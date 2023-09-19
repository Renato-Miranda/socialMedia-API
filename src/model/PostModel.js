class PostModel {
    constructor(conteudo, curtidas, comentarios, usuarioId, favoritosId)  {
        this.conteudo = conteudo;
        this.curtidas = curtidas;
        this.comentarios = comentarios;
        this.usuarioId = usuarioId;
        this.favoritosId = favoritosId;
        
    }
}

export default PostModel;