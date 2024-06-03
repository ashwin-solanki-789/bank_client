import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ArrowDownLeftSquare,
  DollarSign,
  SquareArrowUpRight,
} from "lucide-react";
import React, { Suspense } from "react";
import { graphql } from "relay-runtime";
import type { OverviewComponentsQuery } from "./__generated__/OverviewComponentsQuery.graphql";
import { useLazyLoadQuery } from "react-relay";

interface PropsInterface {
  account: {
    account_number: number;
    balance: number;
  };
}

export const OverviewComponent: React.FC<PropsInterface> = ({ account }) => {
  const transaction_details = graphql`
    query OverviewComponentsQuery(
      $account_id: Int!
      $status: TransactionStatus
      $length: Int
    ) {
      getAllTransaction(
        account_id: $account_id
        status: $status
        length: $length
      ) {
        id
        status
        type
        amount
        description
        createdAt
        sender {
          User {
            firstname
            lastname
            email
          }
          account_number
        }
        receiver {
          User {
            firstname
            lastname
            email
          }
          account_number
        }
      }

      transactionStats(account_id: $account_id) {
        total_send
        total_received
      }
    }
  `;

  const transactions = useLazyLoadQuery<OverviewComponentsQuery>(
    transaction_details,
    { account_id: account?.account_number, status: "COMPLETED", length: 5 }
  );

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div id="OverviewMain" className="p-5 w-full">
        <div id="summaries" className="grid grid-flow-col gap-5 w-full">
          <Card>
            <CardHeader className="flex justify-between flex-row items-center">
              <p className="font-sans text-xl">Balance</p>
            </CardHeader>
            <CardContent className="flex items-center text-3xl font-black">
              <DollarSign />
              {account?.balance}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex justify-between flex-row items-center">
              <p className="font-sans text-xl">Received</p>
              <ArrowDownLeftSquare color="green" />
            </CardHeader>
            <CardContent className="flex items-center text-3xl font-black">
              <DollarSign />
              {transactions.transactionStats?.total_received}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex justify-between flex-row items-center">
              <p className="font-sans text-xl">Send</p>
              <SquareArrowUpRight color="red" />
            </CardHeader>
            <CardContent className="flex items-center text-3xl font-black">
              <DollarSign />
              {transactions.transactionStats?.total_send}
            </CardContent>
          </Card>
        </div>
        <div id="secondSection" className="flex flex-row gap-5">
          <div className="w-6/12 py-3">
            <Card>
              <CardHeader>
                <h1>Charts</h1>
              </CardHeader>
            </Card>
          </div>
          <div className="w-6/12 py-3">
            <Card>
              <CardHeader>
                <h1>Recent Transactions - Completed</h1>
              </CardHeader>
              <CardContent>
                <div className="flex gap-6 flex-col">
                  {transactions.getAllTransaction &&
                  transactions.getAllTransaction?.length > 0 ? (
                    transactions.getAllTransaction.map((transaction, index) => (
                      <TransactionCard
                        type={
                          account.account_number ===
                          transaction?.sender.account_number
                            ? "sender"
                            : "received"
                        }
                        details={
                          account.account_number ===
                          transaction?.sender.account_number
                            ? transaction.receiver.User
                            : transaction?.sender.User
                        }
                        amount={transaction?.amount}
                        key={index}
                      />
                    ))
                  ) : (
                    <h1 className="font-sans font-bold text-2xl">
                      No Transactions Found.
                    </h1>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

interface TransactionType {
  type: string;
  details: {
    firstname: string;
    lastname: string;
    email: string;
  };
  amount: number;
}
function TransactionCard({ type, details, amount }: TransactionType) {
  return (
    <div className="px-2 flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback>{`${details.firstname[0]}${details.lastname[0]}`}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-sm">
          <p>{`${details.firstname} ${details.lastname}`}</p>
          <p>{details.email}</p>
        </div>
      </div>
      <div className="flex items-center">
        <DollarSign color={type === "received" ? "green" : "red"} />
        <p className="font-sans font-bold text-xl">{amount}</p>
      </div>
    </div>
  );
}
