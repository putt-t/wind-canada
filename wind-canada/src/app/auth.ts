import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Resend from "next-auth/providers/resend";
import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "@neondatabase/serverless";
import { sendVerificationRequest } from "@/app/lib/authSendRequest";

export const { auth, handlers, signIn, signOut } = NextAuth(() => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const emailFrom = process.env.EMAIL_FROM;
  
  if (!emailFrom) {
    throw new Error(
      "EMAIL_FROM environment variable must be set."
    );
  }

  return {
    adapter: PostgresAdapter(pool),
    providers: [
      Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
      Resend({
        from: emailFrom,
        apiKey: process.env.RESEND_API_KEY, 
        sendVerificationRequest, 
      }),
    ],
    session: {
      strategy: 'jwt',
    },
    callbacks: {
      async session({ session, token }) {
        if (token.sub) {
          session.user.id = token.sub;
        }
        return session;
      },
      authorized: async ({ auth }) => {
        return !!auth;
      },
    },
    pages: {
      verifyRequest: '/verify-request',
      signIn: '/signin',
    },
  };
});
