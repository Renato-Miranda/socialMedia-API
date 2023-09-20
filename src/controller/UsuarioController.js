import UsuarioModel from "../model/UsuarioModel.js"
import UsuarioRepository from "../repository/UsuarioRepository.js"
import ValidacaoUsuarioServices from "../services/ValidacaoUsuarioServices.js"

class UsuarioController {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    /**
     * Método para criar novo usuário
     */
    app.post('/usuarios', async (req, res) => {
      const data = Object.values(req.body)
      const usuario = new UsuarioModel(...data)

     if(ValidacaoUsuarioServices.ValidaCamposUsuario(...data)) {
       res.status(201).json(
         UsuarioRepository.inserirUsuario(usuario)
       )
     } else {
        res.status(406).json({
          error: true,
          message: `Os campos inseridos são inválidos`
        })
     }
    })

    /**
     * Método para buscar todos os usuários
     */
    app.get('/usuarios', (req, res) => {
      const buscaUsuarios = UsuarioRepository.buscarUsuario()

      if(buscaUsuarios) {
        buscaUsuarios.then((result) => {
          res.status(200).json(result)
        })
      } else {
        res.status(404).json({
          error: true,
          message: `Não há usuários para mostrar`
        })
      }
    })

    /**
     * Método para buscar um único usuário
     */
    app.get('/usuarios/:id', (req, res) => {
      const id = req.params.id
      const buscaUsuarios = UsuarioRepository.buscarUsuario()

      buscaUsuarios.then((result) => {
        res.status(200).json(result[id - 1])
      })
    })

    /**
     * Método para fazer update de usuário por id
     */
    app.put('/usuarios/:id', (req, res) => {
      const data = Object.values(req.body)
      const id = req.params.id
      const usuario = new UsuarioModel(...data)
      console.log(usuario)
      const buscaUsuarios = UsuarioRepository.buscarUsuario()

      if(ValidacaoUsuarioServices.ValidaCamposUsuario(...data)) {
        buscaUsuarios.then((result) => {
          res.status(204).json(UsuarioRepository.updateUsuario(usuario, result[id - 1].id))
        })
      } else {
      res.status(406).json({
                error: true,
                message: `Os campos inseridos são inválidos`
              })
           }
    })

    /**
     * Método para deletar usuário
     */
    app.delete('/usuarios/:id', (req, res) => {
      const id = req.params.id
      const buscaUsuarios = UsuarioRepository.buscarUsuario()

      buscaUsuarios.then((result) => {
        res.status(204).json(UsuarioRepository.deleteUsuario(result[id - 1].id))
      })
    })
  }
}

export default UsuarioController