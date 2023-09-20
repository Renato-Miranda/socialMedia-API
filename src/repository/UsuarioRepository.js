import Repository from "./Repository.js";

const entidade = "usuario"

class UsuarioRepository extends Repository {
  static async inserirUsuario(data) {
    await this.inserir(data, entidade)
  }

  static async buscarUsuario() {
    return this.buscar(entidade)
  }
  
  static async updateUsuario(data, id) {
    await this.update(data, id, entidade)
  }

  static async deleteUsuario(id) {
    await this.delete(id, entidade)
  }
}

export default UsuarioRepository