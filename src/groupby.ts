import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const groupBy = async () => {
    const groupPost = await prisma.post.groupBy({
        by:"published",
        _count:{
            published:true
        },
        having:{
            authorId:{
                _sum:{
                    gte:1
                }
            }
        },
        
    })
    console.log(groupPost)
}

groupBy()