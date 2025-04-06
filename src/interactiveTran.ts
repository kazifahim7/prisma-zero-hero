import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const interactiveTrans = async () => {
    const result = await prisma.$transaction(async(tx)=>{
        //! query 1
        const allPost = await tx.post.findMany()
        //! query 1
        const updateUser = await tx.user.update({
            where:{id:1},
            data:{age:45}
        })

        return {
            allPost,
            updateUser
        }
    })

    console.log(result)
}
interactiveTrans()