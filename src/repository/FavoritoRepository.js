import Repository from "./Repository.js";

const entidade = "favorito"

class FavoritoRepository extends Repository {
  static async inserirComentario(data) {
    await this.inserir(data, entidade)
  }

  static async buscarComentario() {
    return this.buscar(entidade)
  }

  static async updateComentario(data, id) {
    await this.update(data, id, entidade)
  }

  static async deleteComentario(id) {
    await this.delete(id, entidade)
  }
}

export default FavoritoRepository