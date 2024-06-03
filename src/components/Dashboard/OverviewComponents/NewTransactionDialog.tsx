// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { graphql, useMutation } from "react-relay";
import { z } from "zod";
import type { NewTransactionDialogMutation } from "./__generated__/NewTransactionDialogMutation.graphql";
import type { NewTransactionDialog_CreateMutation } from "./__generated__/NewTransactionDialog_CreateMutation.graphql";
interface ComponentsProps {
  type: string;
  header: string;
  btnLabel: string;
  account_details: {
    balance: number;
    account_number: number;
  };
}

export default function NewTransactionDialog({
  type,
  btnLabel,
  header,
  account_details,
}: ComponentsProps) {
  const TransactionSchema = z.object({
    account_number: z
      .string()
      .nonempty("Account number is required")
      .min(10)
      .max(10)
      .refine(
        (value) => {
          console.log(
            value,
            account_details.account_number.toString(),
            value === account_details.account_number.toString()
          );
          if (value === account_details.account_number.toString()) {
            return false;
          } else {
            return true;
          }
        },
        {
          message: "Invalid account number",
        }
      ),
    description: z.string({ message: "Description is required" }),
    amount: z
      .string()
      .nonempty("Amount is required")
      .refine(
        (value) => {
          if (!isNumeric(value) || parseFloat(value) <= 0) {
            return false;
          }
          return true;
        },
        {
          message: "Invalid amount",
        }
      )
      .refine(
        (value) => {
          if (
            type === "NORMAL" &&
            parseFloat(value) > account_details.balance
          ) {
            return false;
          }
          return true;
        },
        {
          message: "Insufficient fund",
        }
      ),
  });

  const [isVerified, setIsVerified] = useState(false);

  const form = useForm<z.infer<typeof TransactionSchema>>({
    resolver: zodResolver(TransactionSchema),
    defaultValues: {
      account_number: "",
      amount: undefined,
      description: "",
    },
  });
  const account_number = form.watch("account_number");

  useEffect(() => {
    if (account_number) {
      setIsVerified(false);
      form.clearErrors("account_number");
    }
  }, [account_number]);

  const verifyQuery = graphql`
    mutation NewTransactionDialogMutation($account_number: Int!) {
      verifyAccount(account_number: $account_number)
    }
  `;
  const createTransaction = graphql`
    mutation NewTransactionDialog_CreateMutation(
      $sendMoneyInput: sendMoneyInput!
    ) {
      createTransaction(transaction_details: $sendMoneyInput) {
        id
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
        amount
        type
        status
        description
      }
    }
  `;

  const [commitMutation, isLoading] =
    useMutation<NewTransactionDialogMutation>(verifyQuery);
  const [createTransactionMutation, createIsLoading] =
    useMutation<NewTransactionDialog_CreateMutation>(createTransaction);

  function verifyAccount() {
    const account_number = form.getValues("account_number");
    if (!account_number) {
      form.setError(
        "account_number",
        { message: "Account number is required" },
        { shouldFocus: true }
      );
      return;
    }
    commitMutation({
      variables: {
        account_number: parseInt(account_number),
      },
      onCompleted({ verifyAccount }) {
        if (!verifyAccount) {
          form.setError(
            "account_number",
            { message: "Invalid account number" },
            { shouldFocus: true }
          );
          return;
        }
        form.clearErrors("account_number");
        setIsVerified(true);
      },
    });
  }

  function onSubmit(data: z.infer<typeof TransactionSchema>) {
    if (!isVerified) {
      form.setError("account_number", { message: "Not Verified" });
    }
    if (type === "NORMAL") {
      createTransactionFn(
        account_details.account_number,
        parseInt(data.account_number),
        "NORMAL",
        data.amount,
        data.description
      );
    } else {
      createTransactionFn(
        parseInt(data.account_number),
        account_details.account_number,
        "REQUEST",
        data.amount,
        data.description
      );
    }
  }

  function createTransactionFn(
    sender: number,
    receiver: number,
    type: string,
    amount: string,
    description: string
  ) {
    createTransactionMutation({
      variables: {
        sendMoneyInput: {
          sender: sender,
          receiver: receiver,
          amount: parseFloat(amount),
          type: type === "NORMAL" ? "NORMAL" : "REQUEST",
          description: description,
        },
      },
      onCompleted({ createTransaction }) {
        console.log(createTransaction);
        window.location.reload();
      },
      onError(error) {
        console.log(error);
      },
    });
  }

  function isNumeric(input: string) {
    const regex = /^\d+$/;
    return regex.test(input);
  }
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"link"}>{btnLabel}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <Form {...form}>
            <form
              className="flex flex-col gap-5"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="account_number"
                render={({ field }) => (
                  <div className="flex gap-2 mt-5">
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Account Number"
                          className="h-9"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    <Button
                      type="button"
                      variant={"outline"}
                      size={"sm"}
                      disabled={isLoading || isVerified}
                      onClick={verifyAccount}
                      className={
                        isVerified ? "bg-green-500 text-white font-bold" : ""
                      }
                    >
                      {isVerified ? "Verified" : isLoading ? "..." : "Verify"}
                    </Button>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="flex gap-2 mt-5">
                      <Input
                        {...field}
                        placeholder="Amount ($)"
                        className="h-9"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="flex gap-2 mt-5">
                      <Input
                        {...field}
                        placeholder="Description (Ex. Food, Shopping, etc)"
                        className="h-9"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* {type === "REQUEST" && (
                <>
                  <p className="mt-5 font-sans text-xl">Recents</p>
                  <ScrollArea className="h-[150px]">
                    <div className="grid grid-cols-3 mt-5 gap-5">
                      <div className="flex justify-center flex-col items-center">
                        <Avatar className="cursor-pointer">
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <p className="font-sans text-sm">Ashwin Solanki</p>
                      </div>

                      <div className="flex justify-center flex-col items-center cursor-pointer">
                        <Avatar className="">
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <p className="font-sans text-sm">Ashwin Solanki</p>
                      </div>

                      <div className="flex justify-center flex-col items-center cursor-pointer">
                        <Avatar className="">
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <p className="font-sans text-sm">Ashwin Solanki</p>
                      </div>
                      <div className="flex justify-center flex-col items-center cursor-pointer">
                        <Avatar className="">
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <p className="font-sans text-sm">Ashwin Solanki</p>
                      </div>
                      <div className="flex justify-center flex-col items-center cursor-pointer">
                        <Avatar className="">
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <p className="font-sans text-sm">Ashwin Solanki</p>
                      </div>
                      <div className="flex justify-center flex-col items-center cursor-pointer">
                        <Avatar className="">
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <p className="font-sans text-sm">Ashwin Solanki</p>
                      </div>
                      <div className="flex justify-center flex-col items-center cursor-pointer">
                        <Avatar className="">
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <p className="font-sans text-sm">Ashwin Solanki</p>
                      </div>
                      <div className="flex justify-center flex-col items-center cursor-pointer">
                        <Avatar className="">
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <p className="font-sans text-sm">Ashwin Solanki</p>
                      </div>
                      <div className="flex justify-center flex-col items-center cursor-pointer">
                        <Avatar className="">
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <p className="font-sans text-sm">Ashwin Solanki</p>
                      </div>
                      <div className="flex justify-center flex-col items-center cursor-pointer">
                        <Avatar className="">
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <p className="font-sans text-sm">Ashwin Solanki</p>
                      </div>
                    </div>
                  </ScrollArea>
                </>
              )} */}
              <Button
                type="submit"
                className="mt-5 w-full"
                disabled={createIsLoading}
                size={"sm"}
              >
                Submit
              </Button>
            </form>
          </Form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
