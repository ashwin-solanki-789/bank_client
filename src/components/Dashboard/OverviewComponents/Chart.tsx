import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import moment from "moment";
import { TransactionInterface } from "@/interfaces/transaction.interface";

interface ChartProps {
  dataset: [TransactionInterface];
  account_id: number;
}

export default function Chart({ dataset, account_id }: ChartProps) {
  const [chartData] = useState({
    labels: dataset.map((transaction) =>
      moment(parseInt(transaction.createdAt)).format("DD-MM-YYYY HH:mm")
    ),
    datasets: [
      {
        label: "Amount ($)",
        data: dataset.map((transaction) => {
          if (transaction.sender.account_number !== account_id) {
            return transaction.amount;
          }

          return -transaction.amount;
        }),
        backgroundColor: dataset.map((transaction) =>
          transaction.sender.account_number !== account_id
            ? "rgba(75, 192, 192, 0.2)"
            : "rgba(255, 99, 132, 0.2)"
        ),
        borderColor: dataset.map((transaction) =>
          transaction.sender.account_number !== account_id
            ? "rgba(75, 192, 192, 1)"
            : "rgba(255, 99, 132, 1)"
        ),
        borderWidth: 1,
        borderRadius: 10, // Making bars rounded
      },
    ],
  });

  useEffect(() => {
    // This effect runs only once on mount to handle any setup needed
    return () => {
      // This cleanup runs when the component is unmounted
      // Ensuring any instances are properly destroyed
      if (ChartJS.instances) {
        Object.keys(ChartJS.instances).forEach((key) => {
          if (ChartJS.instances[key]) {
            ChartJS.instances[key].destroy();
          }
        });
      }
    };
  }, []);
  return (
    <div>
      <h1>Chart Transactions</h1>
      {/* <div> */}
      <Bar data={chartData} />
      {/* </div> */}
    </div>
  );
}
