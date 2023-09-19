class UsuarioModel {
    constructor(nomeUsuario, senha, email, feed, posts, favoritos, curtidos, comentarioId) {
        this.nomeUsuario = nomeUsuario;
        this.senha = senha;
        this.email = email;
        this.feed = feed;
        this.posts = posts;
        this.favoritos = favoritos;
        this.curtidos = curtidos;
        this.comentarioId = comentarioId;
    }
}

export default UsuarioModel;