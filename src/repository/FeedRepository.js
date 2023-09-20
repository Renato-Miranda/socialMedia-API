import Repository from "./Repository.js";

const entidade = "feed"

class FeedRepository extends Repository {
  static async inserirFeed(data) {
    await this.inserir(data, entidade)
  }

  static async buscarFeed() {
    return this.buscar(entidade)
  }

  static async updateFeed(data, id) {
    await this.update(data, id, entidade)
  }

  static async deleteFeed(id) {
    await this.delete(id, entidade)
  }
}

export default FeedRepository