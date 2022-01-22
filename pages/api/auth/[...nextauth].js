import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { connectToDB } from "../../../database/connectDb"
import { findUserByEmail } from "../../../database/services/user.service"
import { passwordCheck } from "../../../database/utils/tools"

export default NextAuth({
  session:{
    jwt:true
  },
  providers : [
    Credentials({
      async authorize(credentials){
        try{
          await connectToDB()
          const user = await findUserByEmail(credentials.email)
          if(!user) throw new Error('User not found')
          if(!await passwordCheck(credentials.password , user.password)) throw new Error('Password is incorrect')
          return {
            _id: user._id,
            email: user.email,
            role: user.role
        }

        }catch(error){
          console.error("error",error)
        }
      }
    })
  ],
  callbacks : {
    async jwt({token , user}){
      if(user?._id) token._id = user._id
      if(user?.role) token.role = user.role
      return token
    },
    async session({session , token}){
      if(token?._id) session.user._id = token._id
      if(token?.role) session.user.role = token.role
      return session
    }
  }
})


