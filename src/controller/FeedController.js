import FeedModel from '../model/FeedModel.js';
import FeedRepository from '../repository/FeedRepository.js';
import UsuarioRepository from '../repository/UsuarioRepository.js';

class FeedController {
  /**
   *
   * @param { Express } app
   */
  static rotas(app) {
    /**
     * Método para criar feed
     */
    app.post('/feed', async (req, res) => {
      const data = Object.values(req.body);
      const feed = new FeedModel(...data);

      if (feed) {
        FeedRepository.inserirFeed(feed);
        res.status(201).json({
          success: true,
          message: `Feed inserido com sucesso`,
        });
      } else {
        res.status(406).json({
          error: true,
          message: 'Não foi possível inserir feed',
        });
      }
    });

    /**
     * Método para buscar todos os feed
     */
    app.get('/feed', (req, res) => {
      const todosFeed = FeedRepository.buscarFeed();

      if (todosFeed) {
        todosFeed.then((feeds) => {
          res.status(200).json(feeds);
        });
      } else {
        res.status(404).json({
          error: true,
          message: `Não há feed para mostrar`,
        });
      }
    });

    /**
     * Método para buscar um único feed por usuário
     */
    app.get('/feed/:id', (req, res) => {
      const id = req.params.id;

      const usuarioBuscado = null;
      const buscarTodosUsuarios = UsuarioRepository.buscarUsuario();

      buscarTodosUsuarios.then((usuarios) => {
        usuarios.forEach((usuario) => {
          if (usuario.id == id) {
            const usuarioBuscado = usuario;
            const buscarFeed = FeedRepository.buscarFeedPorUsuario(
              usuarioBuscado.id
            );

            buscarFeed.then((feed) => {
              res.status(200).json(feed);
            });
          }
        });
      });
    });

    /**
     * Método para fazer update adicionando post ao feed por id
     */
    app.patch('/feed/:feedId/:postId', async (req, res) => {
      const { feedId, postId } = req.params;
      const { post } = req.body;
    
      try {
        const updatedPost = await FeedRepository.postarFeed(feedId, postId, post);
        res.status(200).json({
          message: `Post atualizado com sucesso`,
          updatedPost,
        });
      } catch (error) {
        res.status(406).json({
          error: true,
          message: error.message,
        });
      }
    });
    
    /**
     * Método para deletar feed
     */
    app.delete('/feed/:id', (req, res) => {
      const id = req.params.id;
      const buscarFeeds = FeedRepository.buscarFeed();

      buscarFeeds.then((feed) => {
        if (feed[id - 1]) {
          const feedParaExcluir = feed[id - 1];
          FeedRepository.deleteFeed(feedParaExcluir.id);
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

export default FeedController;
