/** @format */
import { SessionProvider } from 'next-auth/react';
import { ApolloProvider } from '@apollo/client';
import client from '../apolloConfig';

function MyApp({ Component, pageProps, session }) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
