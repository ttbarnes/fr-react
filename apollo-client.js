import {
  ApolloClient,
  InMemoryCache,
  HttpLink
} from '@apollo/client';

import { Defer20220824Handler } from '@apollo/client/incremental';
import { LocalState } from '@apollo/client/local-state';

const link = new HttpLink({
  uri: process.env.GRAPHQL_API,
  credentials: 'include',
  headers: {
    origin: process.env.NEXT_PUBLIC_BASE_URL
  }
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  link: new HttpLink({}),
  localState: new LocalState({}),
  incrementalHandler: new Defer20220824Handler(),
  link: new HttpLink({}),
  localState: new LocalState({}),
});

export default client;
