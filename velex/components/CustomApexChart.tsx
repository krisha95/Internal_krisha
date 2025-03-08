"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type PropsType = {
  type?: ApexChart["type"];
  height: number;
  options: ApexOptions;
  series: ApexOptions["series"];
  className?: string;
};

const CustomApexChart = ({
  type,
  height,
  options,
  series,
  className,
}: PropsType) => {
  return (
    <ApexChart
      type={type}
      height={height}
      options={options}
      series={series}
      className={className}
    />
  );
};

export default CustomApexChart;
