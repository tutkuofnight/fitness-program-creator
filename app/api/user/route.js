import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const GET = async (req) => {
  return new Response(await prisma.user.findUnique({
    where: {
      id: req.params.id
    }
  })).json()
}

export const PUT = async (req) => {
  const updateUser = await prisma.user.update({
    where: {
      id: req.params.id
    },
    data: req.body
  })
  if(updateUser)
    return new Response('User Updated Successfully!').status(200)
  else return new Response('User Cannot Updated :(').status(404)
}

