const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    const nanData = await prisma.$queryRaw(
      `SELECT id, NULLIF(num, 'NaN') From "WithNan"`,
    )
    console.log({ nanData })
  } catch (e) {
    console.log(e)
  }
}

main().finally(() => {
  prisma.$disconnect()
})
