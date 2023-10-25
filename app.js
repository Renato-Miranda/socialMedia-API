import express from 'express';
import PostController from './src/controller/PostController.js';
import UsuarioController from './src/controller/UsuarioController.js';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} 🚀🚀🚀!`)
});

app.use(express.json())

PostController.rotas(app)
UsuarioController.rotas(app)