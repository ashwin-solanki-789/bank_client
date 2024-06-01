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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewComponent } from "./OverviewComponents";
import { Button } from "../ui/button";
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
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Tabs defaultValue="overview" className="w-full mt-5">
        <div className="flex justify-between">
          <TabsList className="grid grid-cols-3 gap-6 w-2/6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notification">Notifications</TabsTrigger>
          </TabsList>
          <div id="buttonGroup" className="flex items-center">
            <Button variant={"link"}>Send Money</Button>
            <div className="w-[2px] h-5 bg-white"></div>
            <Button variant={"link"}>Request Money</Button>
          </div>
        </div>
        <TabsContent value="overview">
          <OverviewComponent />
        </TabsContent>
        <TabsContent value="account">
          <p>Account</p>
        </TabsContent>
        <TabsContent value="notification">
          <p>Notification</p>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
