import FeedRepository from "../repository/FeedRepository.js"

class FeedController {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    //Inserir novo usuário
    app.post('/feed', async (req, res) => {
      const data = req.body
      
      res.status(200).json(
        FeedRepository.inserirFeed(data)
      )
    })

    //Buscar Todos os Usuários
    app.get('/feed', (req, res) => {
      const buscaFeed = FeedRepository.buscarFeed()

      buscaFeed.then((result) => {
        res.send(result)
      })

    })

    // Buscar usuário por id
    app.get('/feed/:id', (req, res) => {
      const id = req.params.id
      const buscaFeed = FeedRepository.buscarFeed()

      buscaFeed.then((result) => {
        res.send(result[id - 1])
      })
    })

    //Fazer update de usuário
    app.put('/feed/:id', (req, res) => {
      const data = req.body
      const id = req.params.id
      const buscaFeed = FeedRepository.buscarFeed()

      buscaFeed.then((result) => {
        res.status(204).json(FeedRepository.updateFeed(data, result[id - 1].id))
      })
    })

    //Fazer a deleção do usuário
    app.delete('/feed/:id', (req, res) => {
      const id = req.params.id
      const buscaFeed = FeedRepository.buscarFeed()

      buscaFeed.then((result) => {
        res.status(204).json(FeedRepository.deleteFeed(result[id - 1].id))
      })
    })
  }
}

export default FeedController