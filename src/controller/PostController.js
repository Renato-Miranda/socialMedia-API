import PostModel from '../model/PostModel.js'
import ValidacaoPostServices from '../services/ValidacaoPostServices.js';
import PostRepository from '../repository/PostRepository.js';
class PostController {
  /**
   *
   * @param { Express } app
   */
  static rotas(app) {
    /**
     * Método para criar novo post
     */
    app.post('/post', async (req, res) => {
      const data = Object.values(req.body);
      const post = new PostModel(...data);

      if (ValidacaoPostServices.ValidaConteudoPost(post.conteudo)) {
        PostRepository.inserirPost(post);
        res.status(201).json({
          success: true,
          message: `Post inserido com sucesso`
        });
      } else {
        res.status(406).json({
          error: true,
          message: 'Os campos inseridos são inválidos',
        });
      }
    });

    /**
     * Método para buscar todos os posts
     */
    app.get('/post', (req, res) => {
      const buscarPosts = PostRepository.buscarPost();

      if (buscarPosts) {
        buscarPosts.then((posts) => {
          res.status(200).json(posts);
        });
      } else {
        res.status(404).json({
          error: true,
          message: `Não há usuários para mostrar`,
        });
      }
    });

    /**
     * Método para buscar um único post por id
     */
    app.get('/post/:id', (req, res) => {
      const id = req.params.id;
      const buscaPost = PostRepository.buscarPost(id);

      buscaPost
        .then((post) => {
          if (post[id - 1]) {
            res.status(200).json(post[id - 1]);
          } else {
            res.status(404).json({
              error: true,
              message: `Usuário para o id ${id} não encontrado`,
            });
          }
        })
        .catch((error) => {
          res.status(400).json({
            error: true,
            message: `Ocorreu um erro ao buscar o usuário para o id ${id}`,
          });
        });
    });

    /**
     * Método para fazer update com put de post por id
     */
    app.put('/post/:id', (req, res) => {
      const data = Object.values(req.body);
      const id = req.params.id;
      const post = new PostModel(...data);

      const buscarPosts = PostRepository.buscarPost();

      if (ValidacaoPostServices.ValidaConteudoPost(post.conteudo)) {
        buscarPosts.then((posts) => {
          res
            .status(204)
            .json(PostRepository.updatePost(post, posts[id - 1].id));
        });
      } else {
        res.status(406).json({
          error: true,
          message: `Os campos inseridos são inválidos`,
        });
      }
    });

    /**
     * Método para fazer update com patch de post por id
     */
    app.patch('/post/:id', (req, res) => {
      const data = Object.values(req.body);
      const id = req.params.id;
      const post = new PostModel(...data);

      const buscarPosts = PostRepository.buscarPost();

      if (ValidacaoPostServices.ValidaConteudoPost(post.conteudo)) {
        buscarPosts.then((posts) => {
          res
            .status(204)
            .json(PostRepository.updatePost(post, posts[id - 1].id));
        });
      } else {
        res.status(406).json({
          error: true,
          message: `Os campos inseridos são inválidos`,
        });
      }
    });

    /**
     * Método para deletar post
     */
    app.delete('/post/:id', (req, res) => {
      const id = req.params.id;
      const buscarPosts = PostRepository.buscarPost();

      buscarPosts.then((posts) => {
        if (posts[id - 1]) {
          const postParaExcluir = posts[id - 1];
          PostRepository.deletePost(postParaExcluir.id);
          res.status(204).json();
        } else {
          res.status(404).json({
            error: true,
            message: `Usuário com o id ${id} não encontrado`,
          });
        }
      });
    });
  }
}

export default PostController;
