import { graphql } from "relay-runtime";
import DashboardLayout from "./DashboardLayout";
import { useLazyLoadQuery } from "react-relay";
import type { OverviewQuery } from "./__generated__/OverviewQuery.graphql";
import { useNavigate } from "react-router-dom";
import { paths } from "@/paths";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewComponent } from "./OverviewComponents";
import NewTransactionDialog from "./OverviewComponents/NewTransactionDialog";
import { Suspense } from "react";
import Transactions from "./Transactions/Transactions";
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
          accounts {
            account_number
            balance
          }
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

  // const greeting = useSubscription<OverviewGreetingSubscription>(
  //   subscriptionExample,
  //   {}
  // );

  // console.log(queryRef);

  if (data.getUser.status_code === 601) {
    localStorage.clear();
    navigate(paths.auth.signIn);
    return;
  }

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Tabs defaultValue="overview" className="mt-5">
        <div className="flex justify-between">
          <TabsList className="grid grid-cols-2 gap-6 w-2/6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>
          <div id="buttonGroup" className="flex items-center">
            <NewTransactionDialog
              btnLabel="Send Money"
              type={"NORMAL"}
              header="Send"
              account_details={data.getUser.accounts[0]}
            />
            <div className="w-[2px] h-5 bg-white"></div>
            <NewTransactionDialog
              btnLabel="Request Money"
              type={"REQUEST"}
              header="Request"
              account_details={data.getUser.accounts[0]}
            />
          </div>
        </div>
        <TabsContent value="overview">
          <Suspense fallback={<h1>loading...</h1>}>
            {data?.getUser?.accounts && data?.getUser?.accounts?.length > 0 ? (
              <OverviewComponent account={data.getUser.accounts[0]} />
            ) : null}
          </Suspense>
        </TabsContent>
        <TabsContent value="transactions">
          {data?.getUser?.accounts && data?.getUser?.accounts?.[0] ? (
            <Transactions
              account_id={data.getUser.accounts[0]?.account_number}
            />
          ) : null}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
