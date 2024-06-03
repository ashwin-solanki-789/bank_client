import { graphql } from "relay-runtime";
import { Card } from "@/components/ui/card";
import type {
  TransactionsMutation,
  TransactionsMutation$data,
} from "./__generated__/TransactionsMutation.graphql";
import { useMutation } from "react-relay";
import { useEffect, useState } from "react";
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
import type { Transactions_UpdateMutation } from "./__generated__/Transactions_UpdateMutation.graphql";

interface Props {
  account_id: number;
}

export default function Transactions({ account_id }: Props) {
  const [data, setData] = useState<TransactionsMutation$data>();
  const [currentPage, setCurrentPage] = useState(1);
  const DEFAULT_LENGTH = 5;
  const transactionPagination = graphql`
    mutation TransactionsMutation(
      $account_id: Int!
      $length: Int
      $page_number: Int
    ) {
      paginationTransaction(
        account_id: $account_id
        length: $length
        page_number: $page_number
      ) {
        total
        page_number
        Transactions {
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
    }
  `;

  //   useEffect(() => {
  //     useMutation()
  //   },[])

  const [commitMutation, isLoading] = useMutation<TransactionsMutation>(
    transactionPagination
  );

  useEffect(() => {
    commitMutation({
      variables: {
        account_id: account_id,
        page_number: currentPage,
        length: DEFAULT_LENGTH,
      },
      onCompleted(paginationTransaction) {
        // const transactions = paginationTransaction?.Transactions;
        setData(paginationTransaction);
      },
    });
  }, [currentPage]);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (data && data?.length <= 0) {
    return (
      <h1 className="font-sans font-bold text-2xl">No Transactions Found.</h1>
    );
  }
  console.log(data);
  return (
    <div>
      <div className="w-full pb-4">
        <p className="text-right">
          Page: {currentPage} of{" "}
          {data?.paginationTransaction?.total
            ? Math.ceil(data?.paginationTransaction?.total / DEFAULT_LENGTH)
            : 1}
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {data?.paginationTransaction?.Transactions?.map(
          (transaction, index) => (
            <TransactionCard
              data={transaction}
              key={index}
              isSender={transaction?.sender.account_number === account_id}
            />
          )
        )}
      </div>
      <div className="flex gap-5 mt-5 justify-end">
        <Button
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </Button>
        <Button
          disabled={currentPage === Math.ceil(10 / DEFAULT_LENGTH)}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </Button>
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
        console.log(updateTransaction);
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
      <div className="grid grid-cols-3 justify-between items-center">
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
        <div className="flex flex-col gap-5 items-center justify-center">
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
        <div className="flex gap-4 justify-end">
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
      <div className="mt-3 font-sans font-bold text-lg">
        <span className="text-xl underline">Description</span> :{" "}
        {data.description}
      </div>
    </Card>
  );
}
