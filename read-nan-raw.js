const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    const nanData = await prisma.$queryRaw(
      `SELECT num from "public"."WithNan" where id =2;`,
    )
    console.log({ nanData })
  } catch (e) {
    console.log(e)
  }
}

main().finally(() => {
  prisma.$disconnect()
})
