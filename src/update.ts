import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const update = async () => {
    // ! single update
    //    const singleUpdate = await prisma.post.update({where:{id:6}, data:{
    //     title: "this is a updated title"
    //    }})
    //! multiple update
    //     const multipleUpdate = await prisma.post.updateMany({
    //         where: { title:"this is a updated title"}, data:{
    //     published:true
    //    }})
    //     console.log(multipleUpdate)
    //! upsert true
    const upsertData = await prisma.post.upsert({
        where: { id: 9 },
        update: { title: "" },
        create: {
            title: "this this upsert data",
            content: "this is the best content ever",
            author: "kazi fahim"
        }

    })
    console.log(upsertData)

}

update()