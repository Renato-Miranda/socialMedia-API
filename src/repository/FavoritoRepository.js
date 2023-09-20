import Repository from "./Repository.js";

const entidade = "favorito"

class FavoritoRepository extends Repository {
  /**
   * Método para inserir comentário
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
   * Método para buscar comentário por id
   * @param { string } id 
   * @returns { object }
   */
  static async buscarFavoritoUnico(id) {
    return this.buscarUnico(id, entidade)
  }

  /**
   * Método para realizar update de comentário
   * @param { object } data 
   * @param { string } id 
   */
  static async updateComentario(data, id) {
    await this.update(data, id, entidade)
  }

  /**
   * Método para excluir comentário
   * @param { string } id 
   */
  static async deleteComentario(id) {
    await this.delete(id, entidade)
  }
}

export default FavoritoRepository