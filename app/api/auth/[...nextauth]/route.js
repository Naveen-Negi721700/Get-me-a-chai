// import NextAuth from 'next-auth'
// // import AppleProvider from 'next-auth/providers/apple'
// // import FacebookProvider from 'next-auth/providers/facebook'
// // import GoogleProvider from 'next-auth/providers/google'
// // import EmailProvider from 'next-auth/providers/email'
// import GitHubProvider from 'next-auth/providers/github'

// export const authoptions = NextAuth( {
//     providers: [
//         // OAuth authentication providers...

//         GitHubProvider({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET
//         }),

//     //     AppleProvider({
//     //         clientId: process.env.APPLE_ID,
//     //         clientSecret: process.env.APPLE_SECRET
//     //     }),
//     //     FacebookProvider({
//     //         clientId: process.env.FACEBOOK_ID,
//     //         clientSecret: process.env.FACEBOOK_SECRET
//     //     }),
//     //     GoogleProvider({
//     //         clientId: process.env.GOOGLE_ID,
//     //         clientSecret: process.env.GOOGLE_SECRET
//     //     }),
//     //     // Passwordless / email sign in
//     //     EmailProvider({
//     //         server: process.env.MAIL_SERVER,
//     //         from: 'NextAuth.js <no-reply@example.com>'
//     //     }),
//     ]
// })
// export { authoptions as GET, authoptions as POST }  

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "@/app/models/User";
import connectDB from "@/app/db/connectDb";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
  async signIn({ user, account }) {
    try {
      if (account?.provider === "github") {
        await connectDB();

        const currentUser = await User.findOne({
          email: user.email,
        });

        if (!currentUser) {
          const newUser = await User.create({
            email: user.email,
            Username: user.email.split("@")[0],
          });

          user.name = newUser.Username;
        } else {
          user.name = currentUser.Username;
        }
      }

      return true;
    } catch (error) {
      console.log("SIGNIN ERROR:", error);
      return false;
    }
  },

  async session({ session }) {
    try {
      await connectDB();

      const dbUser = await User.findOne({
        email: session.user.email,
      });

      if (dbUser) {
        session.user.name = dbUser.Username;
      }

      return session;
    } catch (error) {
      console.log("SESSION ERROR:", error);
      return session;
    }
  },
},
});

export { handler as GET, handler as POST };