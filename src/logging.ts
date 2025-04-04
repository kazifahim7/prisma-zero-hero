import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log:[
        {
            emit:"event",
            level:"query"
        }
    ]
})
prisma.$on("query",(e)=>{
    console.log(e)
})


const main = async()=>{
    const allPost = await prisma.post.findMany()
}
main()