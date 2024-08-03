import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { UnstorageAdapter } from "@auth/unstorage-adapter";
import { createStorage } from "unstorage";
import "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        accessToken?: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string
    }
}

const storage = createStorage();

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: UnstorageAdapter(storage),
    providers: [
        GitHub({
            async profile(profile) {
                return {
                    id: profile.id.toString(),
                    username: profile.login,
                    name: profile.name,
                    email: profile.email,
                    image: profile.avatar_url
                };
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            if (token?.accessToken) {
                session.accessToken = token.accessToken;
            }
            return session;
        }
    }, 
    debug: process.env.NODE_ENV !== "production" ? true : false
});