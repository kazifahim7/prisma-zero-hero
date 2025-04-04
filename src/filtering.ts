import { PrismaClient } from "@prisma/client";
import { title } from "process";


const prisma = new PrismaClient()


const filter = async () => {
    const andFiltering = await prisma.post.findMany({
        where: {
            AND: [
                { title: { contains: "title" } },
                { published: true }
            ]
        }
    })
    const orFiltering = await prisma.post.findMany({
        where: {
            OR: [
                { title: { contains: "title" } },
                { published: true }
            ]
        }
    })
    //! contains
    const notFiltering = await prisma.post.findMany({
        where: {
            NOT: [
                { title: { contains: "title" } }
            ]
        }
    })
    //! startWith

    const startWith = await prisma.user.findMany({
        where: {
            email: { startsWith: "k" }
        }
    })
    console.log(startWith)

    //! end with
    const endWith = await prisma.user.findMany({
        where: {
            email: { endsWith: "k" }
        }
    })
    //! equal
    const equals = await prisma.user.findMany({
        where: {
            email: { equals: "kazifahim661@gmail.com" }
        }
    })

    const userNameArray = ["kazi fahim", "kazi roman"]
    //! in keyword use
    const findArrayUsingNameArray = await prisma.user.findMany({
        where: {
            username: {
                in: userNameArray
            }
        }
    })
   

    //! show all nested data
    const inDepthData =await prisma.user.findUnique({
            where:{id:1},
            include:{post:{
                include:{
                    postCategory:{
                        include:{
                            category:true
                        }
                    }
                }
            }}
    })
    console.dir(inDepthData,{depth:Infinity})

}

filter()