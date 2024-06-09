import { graphql } from "relay-runtime";
import { Card } from "@/components/ui/card";
import { useLazyLoadQuery, useMutation } from "react-relay";
import {
  TransactionInterface,
  TransactionStatusEnum,
} from "@/interfaces/transaction.interface";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowDownLeftSquare,
  DollarSign,
  EllipsisVertical,
  SquareArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import moment from "moment";
import type { Transactions_UpdateMutation } from "./__generated__/Transactions_UpdateMutation.graphql";
import { TransactionsQuery } from "./__generated__/TransactionsQuery.graphql";

interface Props {
  account_id: number;
}

export default function Transactions({ account_id }: Props) {
  const transaction_details = graphql`
    query TransactionsQuery($account_id: Int!) {
      getAllTransaction(account_id: $account_id) {
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
    }
  `;

  const data = useLazyLoadQuery<TransactionsQuery>(transaction_details, {
    account_id: account_id,
  });

  // const subscriptionTransaction = graphql`
  //   subscription TransactionsSubscription($account_number: Int!) {
  //     transactionSub(account_number: $account_number) {
  //       id
  //       type
  //       status
  //       amount
  //       sender {
  //         User {
  //           firstname
  //           lastname
  //           email
  //         }
  //       }
  //       senderId
  //       receiver {
  //         User {
  //           firstname
  //           lastname
  //           email
  //         }
  //       }
  //       receiverId
  //       status
  //       description
  //       createdAt
  //     }
  //   }
  // `;

  // const subscriptionTransactionConfig: GraphQLSubscriptionConfig<TransactionsSubscription> =
  //   {
  //     subscription: subscriptionTransaction,
  //     variables: { account_number: account_id },
  //     onError: (error) => {
  //       console.error(error);
  //     },
  //     updater: (store) => {
  //       const payload = store.getRootField("transactionSub");
  //       if (!payload) {
  //         console.log("No payload found!");
  //         return;
  //       }
  //       // const root = store.getRoot();
  //       const transactionData = store.get(payload.getValue("id"));

  //       console.log({ transactionData });

  //       if (!transactionData) {
  //         console.log("No transaction found for receive subscription.");
  //         return;
  //       }

  //       const payload_status = payload.getValue("status");
  //       console.log({ payload_status });
  //       if (payload_status === "CANCELLED") {
  //         transactionData.setValue(payload_status, "status");
  //         console.log(
  //           "Setting value done..",
  //           transactionData.getValue("status")
  //         );
  //         return;
  //       }
  //     },
  //   };

  // useSubscription(subscriptionTransactionConfig);

  if (data.getAllTransaction && data.getAllTransaction?.length <= 0) {
    return (
      <h1 className="font-sans font-bold text-2xl">No Transactions Found.</h1>
    );
  }
  return (
    <div>
      <div className="flex flex-col gap-5">
        {data.getAllTransaction?.map((transaction, index) => (
          <TransactionCard
            data={transaction}
            key={index}
            isSender={transaction?.sender.account_number === account_id}
          />
        ))}
      </div>
    </div>
  );
}

function TransactionCard({
  data,
  isSender,
}: {
  data: TransactionInterface;
  isSender: boolean;
}) {
  const updateSchema = graphql`
    mutation Transactions_UpdateMutation(
      $transaction_id: ID!
      $status: TransactionStatus!
    ) {
      updateTransaction(transaction_id: $transaction_id, status: $status) {
        id
        status
        type
        amount
        sender {
          account_number
          User {
            firstname
            lastname
            email
          }
        }
        receiver {
          account_number
          User {
            firstname
            lastname
            email
          }
        }
      }
    }
  `;

  const [commitMutation] =
    useMutation<Transactions_UpdateMutation>(updateSchema);
  function updateTransaction(status: TransactionStatusEnum) {
    commitMutation({
      variables: {
        transaction_id: data.id,
        status: status,
      },
      onCompleted({ updateTransaction }) {
        window.location.reload();
      },
      onError(error) {
        console.error(error);
      },
    });
  }

  const user = isSender ? data.receiver.User : data.sender.User;
  return (
    <Card className="p-3">
      <div className="grid gap-4 lg:grid-cols-3 justify-between items-">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>{`${user.firstname[0]}${user.lastname[0]}`}</AvatarFallback>
          </Avatar>
          <div className="font-sans text-sm">
            <div className="flex gap-2 items-center">
              <p>{`${user.firstname} ${user.lastname}`}</p>
              {isSender ? (
                <SquareArrowUpRight className="h-4" color="red" />
              ) : (
                <ArrowDownLeftSquare className="h-4" color="green" />
              )}
            </div>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:items-center lg:justify-center">
          <div className="font-sans">
            <span className="mr-2">Status:</span>
            {data.status === TransactionStatusEnum.COMPLETED ? (
              <Badge className="bg-green-500" variant={"outline"}>
                COMPLETED
              </Badge>
            ) : data.status === TransactionStatusEnum.PENDING ? (
              <Badge className="bg-yellow-500" variant={"outline"}>
                PENDING
              </Badge>
            ) : (
              <Badge variant={"destructive"}>{data.status}</Badge>
            )}
          </div>
          <div className="font-sans">
            <span className="mr-2">Type:</span>
            <Badge>{data.type}</Badge>
          </div>
        </div>
        <div className="flex gap-4 lg:justify-end">
          <div className="flex text-xl items-center font-sans font-bold">
            <DollarSign color={isSender ? "red" : "green"} />
            {data.amount}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={
                data.status === TransactionStatusEnum.PENDING ? "" : "invisible"
              }
            >
              <Button className="h-8 w-8 p-0" size={"sm"} variant={"ghost"}>
                <EllipsisVertical className="h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {isSender && (
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() =>
                    updateTransaction(TransactionStatusEnum.COMPLETED)
                  }
                >
                  Accept Request
                </DropdownMenuItem>
              )}
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() =>
                  updateTransaction(TransactionStatusEnum.CANCELLED)
                }
              >
                Cancel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="mt-3 font-sans font-bold text-md lg:text-lg flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div>
          <span className="text-md lg:text-xl underline">Description</span> :{" "}
          {data.description}
        </div>
        <div>
          <span className="text-md lg:text-xl underline">Date</span> :{" "}
          {moment(parseInt(data.createdAt)).format("DD-MM-YYYY HH:mm")}
        </div>
      </div>
    </Card>
  );
}
