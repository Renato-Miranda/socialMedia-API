import ComentarioRepository from "../repository/ComentarioRepository.js"
import ComentarioModel from "../model/ComentarioModel.js"

class ComentarioController {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    // Inserir novo Comentario
    app.post('/comentario', async (req, res) => {
        const data = Object.values(req.body)
        const novoComentario = new ComentarioModel(...data)

        res.status(201).json(
          ComentarioRepository.inserirComentario(novoComentario)
        )
    })

    // Buscar Todos os Comentarios
    app.get('/comentario', (req, res) => {
      const buscarComentario = ComentarioRepository.buscarComentario()

      buscarComentario.then((result) => {
        if(result && result.length > 0) {
          res.status(200).json(result)
        } else {
          res.status(404).json({
            error: true,
            message: `Não há comentários para mostrar`
          })
        }
      })
    })

    // Buscar Comentario por id
    app.get('/comentario/:id', (req, res) => {
      const id = req.params.id
      const buscarComentarioUnico = ComentarioRepository.buscarComentarioUnico()

      buscarComentarioUnico.then((result) => {
        if(result && result[id - 1]) {
          res.status(200).json(result[id - 1])
        } else {
          res.status(404).json({
            error: true,
            message: `Comentário com ID ${id} não encontrado`
          })
        }
      })
    })

    // Fazer update de Comentario
    app.put('/comentario/:id', (req, res) => {
      const data = req.body
      const id = req.params.id
      const buscarComentario = ComentarioRepository.buscarComentario()

      buscarComentario.then((result) => {
        if(result && result[id - 1]) {
          ComentarioRepository.updateComentario(data, result[id - 1].id)
          res.status(204).end()
        } else {
          res.status(404).json({
            error: true,
            message: `Comentário com ID ${id} não encontrado`
          })
        }
      })
    })

    // Fazer a deleção do Comentario
    app.delete('/comentario/:id', (req, res) => {
      const id = req.params.id
      const buscarComentario = ComentarioRepository.buscarComentario()

      buscarComentario.then((result) => {
        if(result && result[id - 1]) {
          ComentarioRepository.deleteComentario(result[id - 1].id)
          res.status(204).end()
        } else {
          res.status(404).json({
            error: true,
            message: `Comentário com ID ${id} não encontrado`
          })
        }
      })
    })
  }
}

export default ComentarioController
