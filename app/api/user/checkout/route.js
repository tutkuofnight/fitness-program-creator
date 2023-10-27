import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const POST = async (req) => {
  try {
    const data = await req.json()
    const user = await prisma.user.findUnique({
      where: {
        email: data.email
      }
    })
    if(!user) {
      await prisma.user.create({
        data: data
      })
      return new Response().status(200)
    } else return new Response().status(404)
  } catch (error) {
    console.log('api error' , error)
    return new Response().text('user already saved')
  }
}