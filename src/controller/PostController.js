import Repository from "../repository/Repository.js";

class PostController {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    //Inserir novo post
    app.post('/post', async (req, res) => {
      const body = req.body
            
    })

    //Buscar Todos os posts
    app.get('/post', (req, res) => {
      console.log('Ainda em construção');
    })

    //Buscar post por id
    app.get('/post/:id', (req, res) => {
      console.log('Ainda em construção');
    })

    //Fazer update de post
    app.put('/post/:id', (req, res) => {
      console.log('Ainda em construção');
    })

    //Fazer a deleção do post
    app.delete('/post/:id', (req, res) => {
      console.log('Ainda em construção');
    })
  }
}

export default PostController