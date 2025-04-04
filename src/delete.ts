import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
    // const singleDelete = await prisma.post.delete({
    //     where: { id: 9 }
    // })
    const deleteMany = await prisma.post.deleteMany({
        where: { title: "this is a updated title" }
    })
    console.log(deleteMany)
}

deleteData()