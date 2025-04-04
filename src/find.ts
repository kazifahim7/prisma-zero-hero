import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const main = async () => {
    //! find all posts
    const allFormDB = await prisma.post.findMany()
    console.log(allFormDB)


    //! find first -> j data  ta firstly match hbe  oi data ta paowa jabe & findFirstOrThrow -> data na file error dibe
    // const findFirst = await prisma.post.findFirstOrThrow({
    //     where:{id:6}
    // })
    

    //! find unique and hide specific data

    const findUnique = await prisma.post.findUniqueOrThrow({
        where: { id: 14},
        select:{
            title:true,
            content:true,
            author:true
        }
    })
    console.log({ findUnique })




}
main()


