import { useApollo } from "@/lib/apollo";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
