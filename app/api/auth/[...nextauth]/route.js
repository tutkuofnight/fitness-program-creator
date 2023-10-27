import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  async signIn(req){
    const data = await req.json()
    console.log('api data ' , data)
    // try {
    //   const user = await prisma.user.findUnique({
    //     where: {
    //       email: profile.email
    //     }
    //   })
    //   if(!user) {
    //     const response = await prisma.user.create({
    //       data: profile
    //     })
    //   }
    // } catch (error) {
    //   console.log("catch block" , error)
    // }
  }
})

export {handler as GET, handler as POST}