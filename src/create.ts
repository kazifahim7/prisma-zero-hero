import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const main = async () => {
    //! insert user data in user table
       const createUser = await prisma.user.create({
        data:{
            username:"kazi fahim7",
            email:"kazifahim6611@gmail.com",
            role:"user",
            age:25
        }
       })
       console.log(createUser)

    //! create profile into db
    // const createProfile = await prisma.profile.create({
    //     data:{
    //         bio:"this is a bio",
    //         userId : 1
    //     }
    // })
    // console.log(createProfile)
    //! create category into db
    // const createCategory = await prisma.category.create({
    //     data:{name:"js"}
    // })
    // console.log(createCategory)

    //! crate post in db
    // const createPost= await prisma.post.create({
    //     data:{
    //         title:"this is a title",
    //         content:"this is a content",
    //         authorId:1,
    //         postCategory:{
    //             create:[{
    //                 cateGoryId:4
    //                 // category:{
    //                 //     connect :{
    //                 //         id:5
    //                 //     }
    //                 // }
    //             },
    //             {
    //                 cateGoryId:5
    //             }
    //         ]
    //         }
    //     },
    //     include:{postCategory:true}
    // })

    // console.log(createPost)


}
main()


