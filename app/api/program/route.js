import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const POST = async (req) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.user.email
    }
  })
  if(!user) {
    const response = await prisma.user.create({
      data: req.user
    })
    if(response)
      return new Response("User Saved")
  }
  else return new Response(null , {status: 200})
}