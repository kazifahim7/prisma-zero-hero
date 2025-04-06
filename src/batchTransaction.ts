import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const batchTransaction = async () => {

    const [userData, updateData] = await prisma.$transaction([
        prisma.user.create({
            data: {
                username: "shahariar",
                age: 22,
                email: "kazifahim667@gmail.com"

            }
        }),
        prisma.user.update({
            where: {
                id: 1
            },
            data: {
                age: 100
            }
        })

    ])

    console.log(userData,updateData)

}
batchTransaction()