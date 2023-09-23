import express from 'express';
import ComentarioController from './src/controller/ComentarioController.js';
import CurtidoController from './src/controller/CurtidoController.js';
import FavoritoController from './src/controller/FavoritoController.js';
import FeedController from './src/controller/FeedController.js';
import PostController from './src/controller/PostController.js';
import UsuarioController from './src/controller/UsuarioController.js';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} 🚀🚀🚀!`)
});

app.use(express.json())

ComentarioController.rotas(app)
CurtidoController.rotas(app)
FavoritoController.rotas(app)
FeedController.rotas(app)
PostController.rotas(app)
UsuarioController.rotas(app)