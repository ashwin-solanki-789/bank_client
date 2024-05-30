import { graphql } from "relay-runtime";
import DashboardLayout from "./DashboardLayout";
import {
  // PreloadedQuery,
  useLazyLoadQuery,
  // usePreloadedQuery,
} from "react-relay";
import type { OverviewQuery } from "./__generated__/OverviewQuery.graphql";
import { useNavigate } from "react-router-dom";
import { paths } from "@/paths";
// import ErrorBoundary from "@/ErrorBoundary";
// import type { OverviewGreetingSubscription } from "./__generated__/OverviewGreetingSubscription.graphql";

export default function Overview() {
  const navigate = useNavigate();
  const getUserQuery = graphql`
    query OverviewQuery {
      getUser {
        ... on User {
          id
          email
          tax_id
        }

        ... on Error {
          status_code
          message
        }
      }
    }
  `;

  // const subscriptionExample = graphql`
  //   subscription OverviewGreetingSubscription {
  //     greetings {
  //       data
  //     }
  //   }
  // `;

  const data = useLazyLoadQuery<OverviewQuery>(getUserQuery, {});
  // const [queryRef] = useQueryLoader<OverviewQuery>(getUserQuery);

  // const greeting = useSubscription<OverviewGreetingSubscription>(
  //   subscriptionExample,
  //   {}
  // );

  console.log(data);

  // console.log(queryRef);

  if (data.getUser.status_code === 601) {
    localStorage.clear();
    navigate(paths.auth.signIn);
  }

  return (
    <DashboardLayout>
      <h1>Dashboard Overview page</h1>
      <p>{data.getUser.email}</p>
    </DashboardLayout>
  );
}
