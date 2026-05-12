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
import mongoose from "mongoose";
import User from "@/app/models/User";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider == "github") {

        await mongoose.connect("mongodb://localhost:27017/chai");

        const currentUser = await User.findOne({
          email: user.email,
        });

        if (!currentUser) {

          const newUser = new User({
            email: user.email,
            Username: user.email.split("@")[0],
          });

          await newUser.save();

          user.name = newUser.Username;

        } else {

          user.name = currentUser.Username;
        }

        return true;
      }
    },
  },
});

export { handler as GET, handler as POST };