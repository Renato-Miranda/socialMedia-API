import CurtidoRepository from "../repository/CurtidoRepository.js"
import CurtidoModel from "../model/CurtidoModel.js"

class CurtidoController {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    // Inserir novo curtido
    app.post('/curtido', async (req, res) => {
        const data = Object.values(req.body)
        const novoCurtido = new CurtidoModel(...data)

        res.status(201).json(
          CurtidoRepository.inserirCurtido(novoCurtido)
        )
    })

    // Buscar Todos os curtidos
    app.get('/curtido', (req, res) => {
      const buscarcurtido = CurtidoRepository.buscarCurtido()

      buscarcurtido.then((result) => {
        if(result && result.length > 0) {
          res.status(200).json(result)
        } else {
          res.status(404).json({
            error: true,
            message: `Não há curtidos para mostrar`
          })
        }
      })
    })

    // Buscar curtido por id
    app.get('/curtido/:id', (req, res) => {
      const id = req.params.id
      const buscarCurtidoUnico = CurtidoRepository.buscarCurtidoUnico()

      buscarCurtidoUnico.then((result) => {
        if(result && result[id - 1]) {
          res.status(200).json(result[id - 1])
        } else {
          res.status(404).json({
            error: true,
            message: `Curtido com ID ${id} não encontrado`
          })
        }
      })
    })

    // Fazer update de curtido
    app.put('/curtido/:id', (req, res) => {
      const data = req.body
      const id = req.params.id
      const buscarCurtido = CurtidoRepository.buscarCurtido()

      buscarCurtido.then((result) => {
        if(result && result[id - 1]) {
          CurtidoRepository.updateCurtido(data, result[id - 1].id)
          res.status(204).end()
        } else {
          res.status(404).json({
            error: true,
            message: `Curtido com ID ${id} não encontrado`
          })
        }
      })
    })

    // Fazer a deleção do curtido
    app.delete('/curtido/:id', (req, res) => {
      const id = req.params.id
      const buscarcurtido = CurtidoRepository.buscarCurtido()

      buscarcurtido.then((result) => {
        if(result && result[id - 1]) {
          CurtidoRepository.deleteCurtido(result[id - 1].id)
          res.status(204).end()
        } else {
          res.status(404).json({
            error: true,
            message: `Curtido com ID ${id} não encontrado`
          })
        }
      })
    })
  }
}

export default CurtidoController
