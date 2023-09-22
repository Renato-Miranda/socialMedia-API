import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class InsertData {
  static async inserirUmUsuario() {
    const usuario = {
      nomeUsuario: faker.internet.userName(),
      senha: faker.internet.password(),
      email: faker.internet.email()
    }
    await prisma.usuario.create({ data: { ...usuario } })
  }

  static async inserirVariosUsuarios(qtd) {
    const usuarios = Array.from( { length: qtd }).map(() => ({
      nomeUsuario: faker.internet.userName(),
      senha: faker.internet.password(),
      email: faker.internet.email()
    }))

    await prisma.usuario.createMany({data: [...usuarios]})
  }
}

InsertData.inserirVariosUsuarios(1000);

export default InsertData