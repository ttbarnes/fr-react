import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';

const link = createHttpLink({
  uri: process.env.GRAPHQL_API,
  credentials: 'include',
  headers: {
    origin: process.env.NEXT_PUBLIC_BASE_URL
  }
});

const client = new ApolloClient({
  uri: process.env.GRAPHQL_API,
  cache: new InMemoryCache(),
  link
});

export default client;
