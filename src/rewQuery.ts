import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const rawQuery=async()=>{
    const allPost = await prisma.$queryRaw ( Prisma.sql`select * from posts where id =1`)
    console.log(allPost)

    // delete all use data
    await prisma.$queryRaw`truncate table "users" cascade`
}
rawQuery()