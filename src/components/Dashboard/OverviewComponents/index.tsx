import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ArrowDownLeftSquare,
  DollarSign,
  SquareArrowUpRight,
} from "lucide-react";
import React from "react";
export const OverviewComponent: React.FC<React.PropsWithChildren> = () => {
  return (
    <div id="OverviewMain" className="p-5 w-full">
      <div id="summaries" className="grid grid-flow-col gap-5 w-full">
        <Card>
          <CardHeader className="flex justify-between flex-row items-center">
            <p className="font-sans text-xl">Balance</p>
          </CardHeader>
          <CardContent className="flex items-center text-3xl font-black">
            <DollarSign />
            10,000
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between flex-row items-center">
            <p className="font-sans text-xl">Received</p>
            <ArrowDownLeftSquare color="green" />
          </CardHeader>
          <CardContent className="flex items-center text-3xl font-black">
            <DollarSign />
            1000
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between flex-row items-center">
            <p className="font-sans text-xl">Send</p>
            <SquareArrowUpRight color="red" />
          </CardHeader>
          <CardContent className="flex items-center text-3xl font-black">
            <DollarSign />
            1000
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
              <h1>Recent Transactions</h1>
            </CardHeader>
            <CardContent>
              {/* <h1 className="font-sans font-bold text-2xl">
                No Transactions Found.
              </h1> */}
              <div className="flex gap-6 flex-col">
                {<TransactionCard type="received" />}
                {<TransactionCard type="sent" />}
                {<TransactionCard type="sent" />}
                {<TransactionCard type="sent" />}
                {<TransactionCard type="sent" />}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

interface TransactionType {
  type: string;
}
function TransactionCard({ type }: TransactionType) {
  return (
    <div className="px-2 flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-sm">
          <p>Ashwin Solanki</p>
          <p>ashwin.solanki@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center">
        <DollarSign color={type === "received" ? "green" : "red"} />
        <p className="font-sans font-bold text-xl">1000</p>
      </div>
    </div>
  );
}
