import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class Repository {
  /**
   * Inserir único usuário 
   * @param { object } data 
   * @param { string } entidade 
   * @returns 
   */
  static async inserir(data, entidade) {
    await prisma[entidade].create({ data })
  }

  /**
   * Método para buscar todos
   * @param { String } entidade 
   * @returns { Array<any> }
   */
  static async buscar(entidade) {
    return await prisma[entidade].findMany()
  }

  /**
   * Método para atualizar registro
   * @param { object } data 
   * @param { string } id 
   */
  static async update(data, id, entidade) {
    await prisma[entidade].update({
      where: {
        id: id
      },
      data
    })
  }

  /**
   * Método para excluir registro de entidade
   * @param { string } id 
   * @param { string } entidade 
   */
  static async delete(id, entidade) {
    await prisma[entidade].delete({
      where: {
        id: id
      }
    })
  }
}

export default Repository