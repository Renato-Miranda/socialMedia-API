import Repository from "./Repository.js";

const entidade = "curtido"

class CurtidoRepository extends Repository {
  /**
   * Método para inserir um post curtido
   * @param { object } data 
   */
  static async inserirCurtido(data) {
    await this.inserir(data, entidade)
  }

  /**
   * Método para buscar todos os posts curtidos
   * @returns { Array<object> }
   */
  static async buscarCurtido() {
    return this.buscar(entidade)
  }

  /**
   * Método para buscar post curtido único
   * @param { string } id 
   * @returns 
   */
  static async buscarCurtidoUnico(id) {
    return this.buscarUnico(id, entidade)
  }

  /**
   * Método para atualizar post curtido
   * @param { object } data 
   * @param { string } id 
   */
  static async updateCurtido(data, id) {
    await this.update(data, id, entidade)
  }

  /**
   * Método para deletar post curtido
   * @param { string } id 
   */
  static async deleteCurtido(id) {
    await this.delete(id, entidade)
  }
}

export default CurtidoRepository