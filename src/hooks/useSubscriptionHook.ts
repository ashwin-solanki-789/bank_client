import {
  GraphQLSubscriptionConfig,
  RequestParameters,
  Variables,
} from "relay-runtime";
import { useEffect } from "react";
import { useRelayEnvironment } from "react-relay";

function useSubscriptionHook<TSubscription>({
  subscription,
  variables,
  onNext,
  onError,
}: GraphQLSubscriptionConfig<TSubscription>) {
  const environment = useRelayEnvironment();

  useEffect(() => {
    const subscriptionDisposable = environment
      .executeSubscription({ subscription, variables })
      .subscribe({
        next: onNext,
        error: onError,
      });

    return () => {
      subscriptionDisposable.unsubscribe();
    };
  }, [environment, subscription, variables, onNext, onError]);
}

export default useSubscriptionHook;
