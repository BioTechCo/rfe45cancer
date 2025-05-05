import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Cell,
} from "recharts";

import data from "@/components/Dbeta";
import "@/app/utils.css";

const COLORS = ["#8884D8", "#82CA9D"]; // Purple for hyper, Green for hypo
const FEATURE_COLORS = [
  "#8884D8",
  "#82CA9D",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
]; // Colors for feature bars

interface MDXExampleProps {
  dataset?: keyof typeof data;
  dataset_name?: string;
}

export default function DbetaPie({
  dataset = "GSE66313",
  dataset_name = "GSE66313",
}: MDXExampleProps) {
  // Get the first available dataset key if the provided one doesn't exist
  const availableDatasets = Object.keys(data) as Array<keyof typeof data>;
  const validDataset =
    dataset && data[dataset] ? dataset : availableDatasets[0];

  // Make sure data exists before trying to access it
  const dbetaData =
    data[validDataset] && data[validDataset][0]?.dbeta
      ? data[validDataset][0].dbeta
      : { hyper: 0, hypo: 0 };

  const featureData =
    data[validDataset] && data[validDataset][0]?.feature_counts
      ? data[validDataset][0].feature_counts
      : [];

  // Transform data for the bar chart
  const chartData = [
    {
      name: "Hyper",
      value: dbetaData.hyper,
      fill: COLORS[0],
    },
    {
      name: "Hypo",
      value: dbetaData.hypo,
      fill: COLORS[1],
    },
  ];

  // Custom tooltip to display values
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "white",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <p>{`${payload[0].name}: ${payload[0].value} genes`}</p>
        </div>
      );
    }
    return null;
  };

  // Custom bar label to show counts on bars
  const renderCustomBarLabel = (props: any) => {
    const { x, y, width, height, value } = props;
    return (
      <text
        x={x + width / 2}
        y={y + height / 2}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}
      </text>
    );
  };

  // Custom tooltip for feature counts
  const FeatureTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "white",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <p>{`${payload[0].name}: ${payload[0].value} genes`}</p>
        </div>
      );
    }
    return null;
  };

  // Custom bar label for feature counts
  const renderFeatureBarLabel = (props: any) => {
    const { x, y, width, height, value } = props;
    const labelY = value > 3000 ? y + height / 2 : y - 5; // Position label inside or above bar based on value
    const labelColor = value > 3000 ? "#fff" : "#666"; // White text for bigger bars, dark for smaller

    return (
      <text
        x={x + width / 2}
        y={labelY}
        fill={labelColor}
        textAnchor="middle"
        dominantBaseline={value > 3000 ? "middle" : "bottom"}
        fontSize={10}
      >
        {value}
      </text>
    );
  };

  return (
    <div style={{ width: "70%", height: "70%" }}>
      <h2>Hyper/Hypo Methylation Distribution - {dataset_name}</h2>
      <BarChart
        width={500}
        height={400}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="value" label={renderCustomBarLabel}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>

      <h2>Feature Distribution - {dataset_name}</h2>
      <BarChart
        width={500}
        height={400}
        data={featureData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
        <YAxis />
        <Tooltip content={<FeatureTooltip />} />
        <Bar dataKey="value" label={renderFeatureBarLabel}>
          {featureData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={FEATURE_COLORS[index % FEATURE_COLORS.length]}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
