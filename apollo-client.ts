import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
    connectToDevTools: true
});

export default client;

// https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/