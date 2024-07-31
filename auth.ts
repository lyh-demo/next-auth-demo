import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { UnstorageAdapter } from "@auth/unstorage-adapter";
import { createStorage } from "unstorage";

const storage = createStorage();

export const { handlers, auth, signIn, signOut } = NextAuth({
    theme: { logo: "https://authjs.dev/img/logo-sm.png" },
    adapter: UnstorageAdapter(storage),
    providers: [GitHub],
    callbacks: {
        jwt({ token }) {
            return token;
        },
        session({ session }) {
            return session;
        }
    }
});