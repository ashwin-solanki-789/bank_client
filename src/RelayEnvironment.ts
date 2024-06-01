import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
  SubscribeFunction,
  RequestParameters,
  Variables,
  Observable,
} from "relay-runtime";
import { getStorage } from "./utils/sessionStorage";
import { createClient } from "graphql-ws";

const HTTP_ENDPOINT = import.meta.env.VITE_GRAPHQL_ENDPOINT;

const wsClient = createClient({
  url: "ws://localhost:4000/graphql",
  connectionParams: () => {
    return {
      Authorization: `Bearer ${getStorage("token")}`,
    };
  },
});

const fetchFn = (
  setError: (error: { code: number; message: string } | null) => void
): FetchFunction => {
  return async (request, variables) => {
    const resp = await fetch(HTTP_ENDPOINT, {
      method: "POST",
      headers: {
        Accept:
          "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getStorage("token")}`,
        // <-- Additional headers like 'Authorization' would go here
      },
      body: JSON.stringify({
        query: request.text, // <-- The GraphQL document composed by Relay
        variables,
      }),
    });
    const result = await resp.json();
    if (result.errors) {
      setError({
        code: 401,
        message: result.errors[0].message,
      });
    }
    return result;
  };
};

const subscribe: SubscribeFunction = (
  operation: RequestParameters,
  variables: Variables
): Observable<any> => {
  return Observable.create((sink) => {
    return wsClient.subscribe(
      {
        operationName: operation.name,
        query: operation.text as string,
        variables,
      },
      sink
    );
  });
};

function createRelayEnvironment(
  setError: (error: { code: number; message: string } | null) => void
) {
  return new Environment({
    // network: Network.create(fetchFn, subscribe),
    network: Network.create(fetchFn(setError), subscribe),
    store: new Store(new RecordSource()),
  });
}

export default createRelayEnvironment;
