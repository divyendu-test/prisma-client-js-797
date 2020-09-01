const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    const nanData = await prisma.withNan.create({
      data: { num: NaN },
    })
    console.log({ nanData })
  } catch (e) {
    console.log(e)
  }
}

main().finally(() => {
  prisma.$disconnect()
})
