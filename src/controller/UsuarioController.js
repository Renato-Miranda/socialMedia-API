import UsuarioModel from '../model/UsuarioModel.js';
import UsuarioRepository from '../repository/UsuarioRepository.js';
import ValidacaoUsuarioServices from '../services/ValidacaoUsuarioServices.js';

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
      const data = Object.values(req.body);
      const usuario = new UsuarioModel(...data);

      if (ValidacaoUsuarioServices.validaSenha(usuario.senha)) {
        const usuarioInserido = UsuarioRepository.inserirUsuario(usuario);
        res.status(201).json({
          success: true,
          message: `Usuário ${usuario.nomeUsuario} inserido com sucesso`,
          data: usuarioInserido,
        });
      } else {
        res.status(406).json({
          error: true,
          message: 'Os campos inseridos são inválidos',
        });
      }
    });

    /**
     * Método para buscar todos os usuários
     */
    app.get('/usuarios', (req, res) => {
      const buscaUsuarios = UsuarioRepository.buscarUsuario();

      if (buscaUsuarios) {
        buscaUsuarios.then((result) => {
          res.status(200).json(result);
        });
      } else {
        res.status(404).json({
          error: true,
          message: `Não há usuários para mostrar`,
        });
      }
    });

    /**
     * Método para buscar um único usuário por id
     */
    app.get('/usuarios/:id', (req, res) => {
      const id = req.params.id;
      const buscaUsuarios = UsuarioRepository.buscarUsuario();

      buscaUsuarios
        .then((result) => {
          if (result[id - 1]) {
            res.status(200).json(result[id - 1]);
          } else {
            res.status(404).json({
              error: true,
              message: `Usuário para o id ${id} não encontrado`,
            });
          }
        })
        .catch((error) => {
          res.status(400).json({
            error: true,
            message: `Ocorreu um erro ao buscar o usuário para o id ${id}`,
          });
        });
    });

    /**
     * Método para buscar usuário por email
     */
    app.get('/usuario/:email', (req, res) => {
      const email = req.params.email;

      const buscarUsuarioEmail = UsuarioRepository.buscarUsuarioEmail(email);

      buscarUsuarioEmail
        .then((usuario) => {
          if (ValidacaoUsuarioServices.validaEmail(usuario.email)) {
            res.status(200).json(usuario);
          }
        })
        .catch((error) => {
          console.error(error);
          res.status(404).json({
            error: true,
            message: `Usuário não encontrado, o email ${email} não consta no banco de dados`,
          });
        });
    });

    /**
     * Método para fazer update de usuário por id
     */
    app.put('/usuarios/:id', (req, res) => {
      const data = Object.values(req.body);
      const id = req.params.id;
      const usuario = new UsuarioModel(...data);

      const buscaUsuarios = UsuarioRepository.buscarUsuario();

      if (ValidacaoUsuarioServices.ValidaCamposUsuario(...data)) {
        buscaUsuarios.then((result) => {
          res
            .status(204)
            .json(UsuarioRepository.updateUsuario(usuario, result[id - 1].id));
        });
      } else {
        res.status(406).json({
          error: true,
          message: `Os campos inseridos são inválidos`,
        });
      }
    });

    /**
     * Método para deletar usuário
     */
    app.delete('/usuarios/:id', (req, res) => {
      const id = req.params.id;
      const buscaUsuarios = UsuarioRepository.buscarUsuario();

      buscaUsuarios.then((usuarios) => {
        if (usuarios[id - 1]) {
          const usuarioParaExcluir = usuarios[id - 1];
          UsuarioRepository.deleteUsuario(usuarioParaExcluir.id);
          res.status(204).json();
        } else {
          res.status(404).json({
            error: true,
            message: `Usuário com o id ${id} não encontrado`,
          });
        }
      });
    });
    
    app.post('/login', async (req, res) => {
      const { email } = req.body;
      const password = req.get("X-Password");
    
      try {
        const usuarios = await UsuarioRepository.buscarUsuario();
    
        const usuarioBuscado = usuarios.find(usuario => usuario.email === email);
    
        if (!usuarioBuscado) {
          return res.status(401).json({ message: 'Email não encontrado.', success: false });
        }
    
        if (usuarioBuscado.senha !== password) {
          return res.status(401).json({ message: 'Senha incorreta.', success: false });
        }
    
        res.status(200).json({ data: usuarioBuscado, success: true });
      } catch (error) {
        // Trate os erros aqui, se houver algum problema ao buscar os usuários.
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar os usuários.', success: false });
      }
    });
  }
}

export default UsuarioController;
