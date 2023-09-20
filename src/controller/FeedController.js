import FeedRepository from "../repository/FeedRepository.js"

class FeedController {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    //Inserir novo feed
    app.post('/feed', async (req, res) => {
      const data = req.body
      
      res.status(200).json(
        FeedRepository.inserirFeed(data)
      )
    })

    //Buscar Todos os feeds
    app.get('/feed', (req, res) => {
      const buscaFeed = FeedRepository.buscarFeed()

      buscaFeed.then((result) => {
        res.send(result)
      })

    })

    // Buscar feed por id do usuário
    app.get('/feed/:id', (req, res) => {
      const id = req.params.id
      const buscaFeed = FeedRepository.buscarFeed()

      buscaFeed.then((result) => {
        res.send(result[id - 1])
      })
    })

    //Fazer update do feed
    app.put('/feed/:id', (req, res) => {
      const data = req.body
      const id = req.params.id
      const buscaFeed = FeedRepository.buscarFeed()

      buscaFeed.then((result) => {
        res.status(204).json(FeedRepository.updateFeed(data, result[id - 1].id))
      })
    })

    //Fazer a deleção do feed
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