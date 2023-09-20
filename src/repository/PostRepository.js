import Repository from "./Repository.js";

const entidade = "post"

class PostRepository extends Repository {
  static async inserirPost(data) {
    await this.inserir(data, entidade)
  }

  static async buscarPost() {
    return this.buscar(entidade)
  }

  static async updatePost(data, id) {
    await this.update(data, id, entidade)
  }

  static async deletePost(id) {
    await this.delete(id, entidade)
  }
}

export default PostRepository