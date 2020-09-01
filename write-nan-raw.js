const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    const nanData = await prisma.$executeRaw(
      `INSERT INTO "WithNan" (num) VALUES ('NaN');`,
    )
    console.log({ nanData })
  } catch (e) {
    console.log(e)
  }
}

main().finally(() => {
  prisma.$disconnect()
})
