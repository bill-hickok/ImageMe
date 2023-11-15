import type { Account, AuthOptions, Profile, Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import AzureADProvider from "next-auth/providers/azure-ad";

export const options: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID ?? "",
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET ?? "",
      tenantId: process.env.AZURE_AD_TENANT_ID ?? "",
    }),
  ],
  callbacks: {
    signIn({
      account,
      profile,
    }: {
      account: (Account & { provider?: string }) | null;
      profile?: Profile & { oid?: string };
    }) {
      return true;
    },
    session({ session, token }: { session: Session; token: JWT }) {
      // do stuff with session
      return { ...session, ...token };
    },
    jwt({
      token,
      account,
      profile,
      trigger,
      session,
    }: {
      token: JWT;
      session?: Session;
      account?: Account | null;
      profile?: Profile & { oid?: string };
      trigger?: "signIn" | "signUp" | "session" | "signOut" | "update";
    }) {
      // do stuff with token
      return { ...token, ...session };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    redirect({ url, baseUrl }) {
      return url;
    },
  },
  pages: {
    //todo: we will build out these custom pages if/when necessary
    // signIn: '/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

export default NextAuth(options);
