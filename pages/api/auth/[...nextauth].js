import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
    }),
   
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  pages:{
    signIn:'/auth/signin'  },
    callbacks :{
      async session ({session,token,user}) {
        if (!session) return {} ;
        session.user.id  = token.sub;
        return session;
      }
    }
}
)