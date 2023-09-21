import FavoritoRepository from "../repository/FavoritoRepository.js"
import FavoritoModel from "../model/FavoritoModel.js"

class FavoritoController {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    // Inserir novo Favorito
    app.post('/favorito', async (req, res) => {
        const data = Object.values(req.body)
        const novoFavorito = new FavoritoModel(...data)
  
        res.status(201).json(
          FavoritoRepository.inserirFavorito(novoFavorito)
        )
    })

    // Buscar Todos os Favoritos
    app.get('/favorito', (req, res) => {
      const buscarFavorito = FavoritoRepository.buscarFavorito()

      buscarFavorito.then((result) => {
        if (result && result.length > 0) {
          res.status(200).json(result)
        } else {
          res.status(404).json({
            error: true,
            message: "Não há favoritos para mostrar"
          })
        }
      })
    })

    // Buscar Favorito por id
    app.get('/favorito/:id', (req, res) => {
      const id = req.params.id
      const buscarFavoritoUnico = FavoritoRepository.buscarFavoritoUnico()

      buscarFavoritoUnico.then((result) => {
        if (result[id - 1]) {
          res.status(200).json(result[id - 1])
        } else {
          res.status(404).json({
            error: true,
            message: `Não foi encontrado o favorito com ID: ${id}`
          })
        }
      })
    })

    // Fazer update de Favorito
    app.put('/favorito/:id', (req, res) => {
      const data = req.body
      const id = req.params.id
      const buscarFavorito = FavoritoRepository.buscarFavorito()

      buscarFavorito.then((result) => {
        if (result[id - 1]) {
          res.status(204).json(FavoritoRepository.updateFavorito(data, result[id - 1].id))
        } else {
          res.status(404).json({
            error: true,
            message: `Não foi encontrado o favorito com ID: ${id} para atualizar`
          })
        }
      })
    })

    // Fazer a deleção do Favorito
    app.delete('/favorito/:id', (req, res) => {
      const id = req.params.id
      const buscarFavorito = FavoritoRepository.buscarFavorito()

      buscarFavorito.then((result) => {
        if (result[id - 1]) {
          res.status(204).json(FavoritoRepository.deleteFavorito(result[id - 1].id))
        } else {
          res.status(404).json({
            error: true,
            message: `Não foi encontrado o favorito com ID: ${id} para deletar`
          })
        }
      })
    })
  }
}

export default FavoritoController
