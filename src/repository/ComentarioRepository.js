import Repository from "./Repository.js";

const entidade = "comentario"

class ComentarioRepository extends Repository {
  /**
   * Método para inserir um comentário
   * @param { object } data 
   */
  static async inserirComentario(data) {
    await this.inserir(data, entidade)
  }

  /**
   * Método para buscar todos os comentários
   * @returns { Array<object> }
   */
  static async buscarComentario() {
    return this.buscar(entidade)
  }

  /**
   * Método para buscar um único comentário
   * @param { string } id 
   * @returns { object }
   */
  static async buscarComentarioUnico(id) {
    return this.buscarUnico(id, entidade)
  }

  /**
   * Método para fazer update de um comentário
   * @param { object } data 
   * @param { string } id 
   */
  static async updateComentario(data, id) {
    await this.update(data, id, entidade)
  }

  /**
   * Método para deleter um comentário
   * @param { string } id 
   */
  static async deleteComentario(id) {
    await this.delete(id, entidade)
  }
}

export default ComentarioRepository