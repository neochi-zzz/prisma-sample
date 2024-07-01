import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const users = await prisma.user.findMany({
        where:{
           name: 'shohei-otani' 
        }
    })
    console.log("find: ", users)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })