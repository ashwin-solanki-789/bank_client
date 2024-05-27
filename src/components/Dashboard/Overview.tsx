import { graphql } from "relay-runtime";
import DashboardLayout from "./DashboardLayout";
import { useLazyLoadQuery } from "react-relay";
import type { OverviewQuery } from "./__generated__/OverviewQuery.graphql";

export default function Overview() {
  const getUserQuery = graphql`
    query OverviewQuery {
      getUser {
        id
        firstname
        email
        tax_id
        createdAt
      }
    }
  `;

  const data = useLazyLoadQuery<OverviewQuery>(getUserQuery, {});

  return (
    <DashboardLayout>
      <h1>Dashboard Overview page</h1>
      <p>{data.getUser.firstname}</p>
    </DashboardLayout>
  );
}
