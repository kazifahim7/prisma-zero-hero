import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const query = async()=>{

    //! fluent api
    const result = await prisma.user.findUnique({
        where:{id:1},
       
    }).post()

    //! full data with information
    const result1 = await prisma.user.findUnique({
        where:{id:1},
        include:{post:true}
       
    })
   
    //! relational filter
    const publishedPostUser = await prisma.user.findMany({include:
        {post:{where:{published:true}}}
    })
    console.dir(publishedPostUser,{depth:Infinity})



}
query()