import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  // API: https://repl.it/@_shoonia/graphql-demo?language=express
  uri: 'https://graphql-demo---shoonia.repl.co/graphql'
});

export default client;
