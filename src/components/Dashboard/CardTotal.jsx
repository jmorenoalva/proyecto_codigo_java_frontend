import { Card, Metric, Text } from "@tremor/react";
import { FaRegMoneyBill1 } from "react-icons/fa6";

export function CardTotal() {
  return (
    <Card
      className="w-full h-full m-2"
      decoration="top"
      decorationColor="indigo"
    >
      <div className="flex ">
        <FaRegMoneyBill1    className="dark:text-dark-tremor-content"
          size={25}
        />
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content ml-2 text-xl">
          Total
        </p>
      </div>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        $ 1000.00
      </p>
    </Card>
  );
}
