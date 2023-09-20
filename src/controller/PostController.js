import PostRepository from "../repository/PostRepository.js"

class PostController {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    //Inserir novo usuário
    app.post('/post', async (req, res) => {
      const data = req.body
      
      res.status(200).json(
        PostRepository.inserirPost(data)
      )
    })

    //Buscar Todos os Usuários
    app.get('/post', (req, res) => {
      const buscaPosts = PostRepository.buscarPost()

      buscaPosts.then((result) => {
        res.send(result)
      })

    })

    // Buscar usuário por id
    app.get('/post/:id', (req, res) => {
      const id = req.params.id
      const buscaPosts = PostRepository.buscarPost()

      buscaPosts.then((result) => {
        res.send(result[id - 1])
      })
    })

    //Fazer update de usuário
    app.put('/post/:id', (req, res) => {
      const data = req.body
      const id = req.params.id
      const buscaPosts = PostRepository.buscarPost()

      buscaPosts.then((result) => {
        res.status(204).json(PostRepository.updatePost(data, result[id - 1].id))
      })
    })

    //Fazer a deleção do usuário
    app.delete('/post/:id', (req, res) => {
      const id = req.params.id
      const buscaPosts = PostRepository.buscarPost()

      buscaPosts.then((result) => {
        res.status(204).json(PostRepository.deletePost(result[id - 1].id))
      })
    })
  }
}

export default PostController