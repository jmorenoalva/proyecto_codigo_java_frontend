import { Card, Metric, Text } from "@tremor/react";
import { SlNotebook } from "react-icons/sl";

export function CardReservas() {
  return (
    <Card
      className="w-full h-full m-2"
      decoration="top"
      decorationColor="indigo"
    >
      <div className="flex ">
        <SlNotebook className="dark:text-dark-tremor-content"
          size={25}
        />
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content ml-2 text-xl">
          Reservas
        </p>
      </div>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        1
      </p>
    </Card>
  );
}
