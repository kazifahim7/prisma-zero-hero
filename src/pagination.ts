import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const pagination = async () => {
    //! offset pagination prefer two attribute skip and take
    const offsetData = await prisma.post.findMany({ skip: 5, take: 4 })

    //! cursor based pagination
    const cursorBasedData = await prisma.post.findMany({ skip: 5, take: 4, cursor: {id:19} })


    //! sort data
    const sortData = await prisma.post.findMany({orderBy:{id:"desc"}})
    console.log(sortData)
   



}

pagination()