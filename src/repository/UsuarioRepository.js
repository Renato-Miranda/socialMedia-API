import Repository from "./Repository.js";

const entidade = "usuario"

class UsuarioRepository extends Repository {
  /**
   * Método para inserir usuário
   * @param { object } data 
   */
  static async inserirUsuario(data) {
    await this.inserir(data, entidade)
  }

  /**
   * Método para buscar todos os usuários
   * @returns { Array<object> }
   */
  static async buscarUsuario() {
    return this.buscar(entidade)
  }

  /**
   * Método para buscar usuário por id
   * @param { string } id 
   * @returns { object }
   */
  static async buscarUsuarioUnico(id) {
    return this.buscarUnicoId(id, entidade)
  }

  /**
   * Método para buscar usuário por email
   * @param { string } value 
   * @returns { object }
   */
  static async buscarUsuarioEmail(value) {
    return this.buscarUnicoEmail(value, entidade)
  }
  
  /**
   * Método para fazer update de usuário
   * @param { object } data 
   * @param { string } id 
   */
  static async updateUsuario(data, id) {
    await this.update(data, id, entidade)
  }

  /**
   * Método para deletar usuário
   * @param { string } id 
   */
  static async deleteUsuario(id) {
    await this.delete(id, entidade)
  }
}

export default UsuarioRepository