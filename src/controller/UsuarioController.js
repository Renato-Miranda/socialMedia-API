import UsuarioRepository from "../repository/UsuarioRepository.js"

class UsuarioController {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    //Inserir novo usuário
    app.post('/usuarios', async (req, res) => {
      const data = req.body
      
      res.status(200).json(
        UsuarioRepository.inserirUsuario(data)
      )
    })

    //Buscar Todos os Usuários
    app.get('/usuarios', (req, res) => {
      const buscaUsuarios = UsuarioRepository.buscarUsuario()

      buscaUsuarios.then((result) => {
        res.send(result)
      })

    })

    // Buscar usuário por id
    app.get('/usuarios/:id', (req, res) => {
      const id = req.params.id
      const buscaUsuarios = UsuarioRepository.buscarUsuario()

      buscaUsuarios.then((result) => {
        res.send(result[id - 1])
      })
    })

    //Fazer update de usuário
    app.put('/usuarios/:id', (req, res) => {
      const data = req.body
      const id = req.params.id
      const buscaUsuarios = UsuarioRepository.buscarUsuario()

      buscaUsuarios.then((result) => {
        res.status(204).json(UsuarioRepository.updateUsuario(data, result[id - 1].id))
      })
    })

    //Fazer a deleção do usuário
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