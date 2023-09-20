import Repository from "./Repository.js";

const entidade = "curtido"

class CurtidoRepository extends Repository {
  static async inserirCurtido(data) {
    await this.inserir(data, entidade)
  }

  static async buscarCurtido() {
    return this.buscar(entidade)
  }

  static async updateCurtido(data, id) {
    await this.update(data, id, entidade)
  }

  static async deleteCurtido(id) {
    await this.delete(id, entidade)
  }
}

export default CurtidoRepository