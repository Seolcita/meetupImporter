/** @format */
'use client';
import { ApolloProvider } from '@apollo/client';
import client from '../apolloConfig';

import JsonToCsvConverter from '../src/json-to-csv-converter';
import UserInfo from '../pages/userInfo';

export default function Home() {
  return (
    <main>
      <h1>Meetup Importer</h1>
      <ApolloProvider client={client}>
        <UserInfo />
      </ApolloProvider>
      <JsonToCsvConverter />
    </main>
  );
}
