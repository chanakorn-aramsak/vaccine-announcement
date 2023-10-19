'use client'
import { SessionProvider } from "next-auth/react";

const NextAuthProvider = ({ children, session }: { children: React.ReactNode, session: any }): React.ReactNode => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
);

export default NextAuthProvider;
