import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts"; 

interface RadialChartProps {
  series: number[];
  labels: string[];
  height?: number;
}

const RadialChart: React.FC<RadialChartProps> = ({
  series,
  labels,
  height = 265,
}) => {
  const conversions: ApexOptions = {
    chart: {
      height: height,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "14px",
            color: "undefined",
            offsetY: 100,
          },
          value: {
            offsetY: 55,
            fontSize: "20px",
            color: undefined,
            // formatter: function (val: string) {
            //   return val + "%";
            // },
          },
        },
        track: {
          background: "rgba(170,184,197, 0.2)",
          margin: 0,
        },
      },
    },
    fill: {
      gradient: {
        // enabled: true,
        shade: "dark",
        shadeIntensity: 0.2,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    colors: ["#017ccc", "#22c55e"],
    series: series,
    labels: labels,
    responsive: [
      {
        breakpoint: 380,
        options: {
          chart: {
            height: 180,
          },
        },
      },
    ],
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  };

  return (
    <div className="apex-charts mb-2 mt-n2">
      <ReactApexChart
        options={conversions}
        series={series}
        type="radialBar"
        width={265}
      />
    </div>
  );
};

export default RadialChart;
