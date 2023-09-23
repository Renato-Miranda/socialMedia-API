import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class Repository {
  /**
   * Método geral para inserir único usuário 
   * @param { object } data 
   * @param { string } entidade 
   * @returns 
   */
  static async inserir(data, entidade) {
    await prisma[entidade].create({ data })
  }

  /**
   * Método geral para buscar todos
   * @param { String } entidade 
   * @returns { Array<object> }
   */
  static async buscar(entidade) {
    return await prisma[entidade].findMany()
  }

  /**
   * Método geral para buscar um único usuário por id
   * @param { string } id 
   * @param { string } entidade 
   * @returns { object }
   */
  static async buscarUnicoId(id, entidade) {
    return await prisma[entidade].findUnique({
      where: {
        id: id
      }
    }
    )
  }

  /**
   * Método geral para buscar um único usuário por email
   * @param { string } value 
   * @param { string } entidade 
   * @returns { object }
   */
  static async buscarUnicoEmail(value, entidade) {
    return await prisma[entidade].findUnique({
      where: {
        email: value
      }
    }
    )
  }

  /**
   * Método geral para atualizar registro
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
   * Método geral para excluir registro de entidade
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