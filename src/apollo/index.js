import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  // API: https://launchpad.graphql.com/5qz5mr35n9
  uri: "https://5qz5mr35n9.lp.gql.zone/graphql"
});

export default client;