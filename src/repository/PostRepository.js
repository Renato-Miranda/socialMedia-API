import Repository from "./Repository.js";

const entidade = "post"

class PostRepository extends Repository {
  /**
   * Método para inserir um post
   * @param { object } data 
   */
  static async inserirPost(data) {
    await this.inserir(data, entidade)
  }

  /**
   * Método para retornar todos os posts
   * @returns { Array<object> }
   */
  static async buscarPost() {
    return this.buscar(entidade)
  }

  /**
   * Métodos para buscar um post por id
   * @param { string } id 
   * @returns { object }
   */
  static async buscarPostUnico(id) {
    return this.buscarUnico(id, entidade)
  }

  /**
   * Método para fazer update de um post
   * @param { object } data 
   * @param { string } id 
   */
  static async updatePost(data, id) {
    await this.update(data, id, entidade)
  }

  /**
   * Método para excluir um post
   * @param { string } id 
   */
  static async deletePost(id) {
    await this.delete(id, entidade)
  }
}

export default PostRepository