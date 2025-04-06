import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const aggregate = async () => {
    //! average and count aggregation ->
    const averageAndCount = await prisma.user.aggregate({
        _avg: {
            age: true
        },
        _count: {
            age: true
        }
    })
    // ! _sum aggregation ->
    const sumOfAge = await prisma.user.aggregate({
        _sum: {
            age: true
        }
    })


    //! find number of records
    const countData = await prisma.user.count()

    //! find max age
    const maxAge = await prisma.user.aggregate({
        _max: {
            age: true
        }
    })

    //! find min age
    const minAge = await prisma.user.aggregate({
        _min: {
            age: true
        }
    })
    console.log(minAge)



}

aggregate()