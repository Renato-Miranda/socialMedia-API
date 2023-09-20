import Repository from "../repository/Repository.js";

class FeedController {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    //Inserir novo feed
    app.post('/feed', async (req, res) => {
      const body = req.body
            
    })

    //Buscar Todos os feeds
    app.get('/feed', (req, res) => {
      console.log('Ainda em construção');
    })

    //Buscar feed por id
    app.get('/feed/:id', (req, res) => {
      console.log('Ainda em construção');
    })

    //Fazer update de feed
    app.put('/feed/:id', (req, res) => {
      console.log('Ainda em construção');
    })

    //Fazer a deleção do feed
    app.delete('/feed/:id', (req, res) => {
      console.log('Ainda em construção');
    })
  }
}

export default FeedController