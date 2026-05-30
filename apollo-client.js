import {
  ApolloClient,
  HttpLink,
  InMemoryCache
} from '@apollo/client';

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
  ssrMode: typeof window === 'undefined',
});

export default client;
