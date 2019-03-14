import ApolloClient from "apollo-boost";

const isDev = process.env.NODE_ENV === "development";
const client = new ApolloClient({
  uri: isDev
    ? "http://localhost:4000"
    : "https://git.heroku.com/graphqlmovie.git"
});

export default client;
