import { graphql } from "relay-runtime";
import { Card } from "@/components/ui/card";
import { useLazyLoadQuery, useMutation } from "react-relay";
import { TransactionStatusEnum } from "@/interfaces/transaction.interface";
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
import type {
  TransactionsQuery,
  TransactionsQuery$data,
} from "./__generated__/TransactionsQuery.graphql";

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

  if (data.getAllTransaction && data.getAllTransaction?.length <= 0) {
    return (
      <h1 className="font-sans font-bold text-2xl">No Transactions Found.</h1>
    );
  }
  return (
    <div>
      <div className="flex flex-col gap-5">
        {/* {data.getAllTransaction?.map((transaction, index) => ( */}
        <TransactionCard
          data={data}
          // key={index}
          account_id={account_id}
          // isSender={transaction?.sender.account_number === account_id}
        />
        {/* ))} */}
      </div>
    </div>
  );
}

interface TransactionCardProps {
  data: TransactionsQuery$data;
  account_id: number;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  data,
  account_id,
}: TransactionCardProps) => {
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

  function updateTransaction(status: TransactionStatusEnum, id: string) {
    if (!id) {
      console.error("Error Occured");
      return;
    }
    commitMutation({
      variables: {
        transaction_id: id,
        status: status,
      },
      onCompleted() {
        window.location.reload();
      },
      onError(error) {
        console.error(error);
      },
    });
  }

  return (
    data.getAllTransaction &&
    data.getAllTransaction?.map((transaction, index) => {
      const user =
        transaction?.sender.account_number === account_id
          ? transaction?.receiver.User
          : transaction?.sender.User;
      return (
        <Card className="p-3" key={index}>
          <div className="grid gap-4 lg:grid-cols-3 justify-between items-">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>{`${user?.firstname[0]}${
                  user?.lastname && user?.lastname[0]
                }`}</AvatarFallback>
              </Avatar>
              <div className="font-sans text-sm">
                <div className="flex gap-2 items-center">
                  <p>{`${user?.firstname} ${user?.lastname}`}</p>
                  {transaction?.sender.account_number === account_id ? (
                    <SquareArrowUpRight className="h-4" color="red" />
                  ) : (
                    <ArrowDownLeftSquare className="h-4" color="green" />
                  )}
                </div>
                <p>{user?.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:items-center lg:justify-center">
              <div className="font-sans">
                <span className="mr-2">Status:</span>
                {transaction?.status === TransactionStatusEnum.COMPLETED ? (
                  <Badge className="bg-green-500" variant={"outline"}>
                    COMPLETED
                  </Badge>
                ) : transaction?.status === TransactionStatusEnum.PENDING ? (
                  <Badge className="bg-yellow-500" variant={"outline"}>
                    PENDING
                  </Badge>
                ) : (
                  <Badge variant={"destructive"}>{transaction?.status}</Badge>
                )}
              </div>
              <div className="font-sans">
                <span className="mr-2">Type:</span>
                <Badge>{transaction?.type}</Badge>
              </div>
            </div>
            <div className="flex gap-4 lg:justify-end">
              <div className="flex text-xl items-center font-sans font-bold">
                <DollarSign
                  color={
                    transaction?.sender.account_number === account_id
                      ? "red"
                      : "green"
                  }
                />
                {transaction?.amount}
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={
                    transaction?.status === TransactionStatusEnum.PENDING
                      ? ""
                      : "invisible"
                  }
                >
                  <Button className="h-8 w-8 p-0" size={"sm"} variant={"ghost"}>
                    <EllipsisVertical className="h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {transaction?.sender.account_number === account_id && (
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() =>
                        updateTransaction(
                          TransactionStatusEnum.COMPLETED,
                          transaction.id
                        )
                      }
                    >
                      Accept Request
                    </DropdownMenuItem>
                  )}
                  {transaction?.id && (
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() =>
                        updateTransaction(
                          TransactionStatusEnum.CANCELLED,
                          transaction.id
                        )
                      }
                    >
                      Cancel
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="mt-3 font-sans font-bold text-md lg:text-lg flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <div>
              <span className="text-md lg:text-xl underline">Description</span>{" "}
              : {transaction?.description}
            </div>
            {transaction?.createdAt && (
              <div>
                <span className="text-md lg:text-xl underline">Date</span> :{" "}
                {moment(parseInt(transaction.createdAt)).format(
                  "DD-MM-YYYY HH:mm"
                )}
              </div>
            )}
          </div>
        </Card>
      );
    })
  );
};
