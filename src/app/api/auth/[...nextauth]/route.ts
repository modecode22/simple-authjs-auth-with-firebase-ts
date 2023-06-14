import NextAuth, { NextAuthOptions } from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials'
// import CredentialsProvider from 'next-auth/providers/credentials';


export const authOptions: NextAuthOptions = {
  providers: [
     CredentialsProvider({
       name: 'Email & Password',
       credentials: {
         username: {
           label: 'User Id (Email)',
           type: 'text',
           placeholder: 'hoge@example.com',
           value: 'noripi10@example.com',
         },
         password: { label: 'Password', type: 'password', value: 'password' },
       },
       authorize: async (credentials, req) => {
         const users = [{ id: '1', username: 'noripi10@example.com', password: 'password' },
         { id: '2', username: 'aaa@example.com', password: 'aaa' },
         { id: '3', username: 'bbb@example.com', password: 'bbb' }];
         if (credentials) {
           const { username, password } = credentials;
           const user = users.find((e) => e.username === username && e.password === password);
           console.info('findedUser', user);
           if (user) {
             return user;
           }
         }
         return null;
       },
     }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET !,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
