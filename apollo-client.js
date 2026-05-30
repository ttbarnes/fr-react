import {
  ApolloClient,
  HttpLink
} from '@apollo/client';

const link = new HttpLink({
  uri: process.env.GRAPHQL_API,
  credentials: 'include',
  headers: {
    origin: process.env.NEXT_PUBLIC_BASE_URL
  }
});

const client = new ApolloClient({
  uri: process.env.GRAPHQL_API,
  link,
});

export default client;
