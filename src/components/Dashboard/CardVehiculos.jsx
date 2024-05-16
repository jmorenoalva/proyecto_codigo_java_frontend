import { Card, Metric, Text } from "@tremor/react";
import { FaCar } from "react-icons/fa";

export function CardVehiculos() {
  return (
    <Card
      // className="mx-auto max-w-xs"
      className="w-full h-full m-2"
      decoration="top"
      decorationColor="indigo"
    >
      <div className="flex ">
        <FaCar className="dark:text-dark-tremor-content"
        size={25}
        />
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content ml-2 text-xl">
          Vehiculos
        </p>
      </div>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        2
      </p>
    </Card>
  );
}
