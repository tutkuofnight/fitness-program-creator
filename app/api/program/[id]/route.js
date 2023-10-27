import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const GET = async (req) => {
  return new Response(await prisma.program.findUnique({
    where: {
      creatorId: req.headers.creatorId,
      id: req.params.id
    }
  })).json()
}

export const PUT = async (req) => {
  const updateProgram = await prisma.program.update({
    where: {
      id: req.params.id,
      creatorId: req.headers.creatorId
    },
    data: req.body
  })
  if(updateProgram)
    return new Response('Program Successfully Updated!').status(200)
  else return new Response('Program Updated Error :(').status(404)
}

export const DELETE = async (req) => {
  const deleteProgram = await  prisma.program.delete({
    where: {
      id: req.params.id
    }
  })
  if(!deleteProgram)
    return new Response('Program Successfully Deleted!').status(200)
  else return new Response('Program Delete Error :(').status(404)
}