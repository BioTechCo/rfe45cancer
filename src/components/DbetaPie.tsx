import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import data from '@/components/Dbeta';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#8DD1E1', '#A4DE6C', '#D0ED57'];

const RADIAN = Math.PI / 180;
interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: CustomizedLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface MDXExampleProps {
  dataset?: keyof typeof data;
}

export default function DbetaPie({ dataset = 'GSE66313' }: MDXExampleProps) {
  // Get the first available dataset key if the provided one doesn't exist
  const availableDatasets = Object.keys(data) as Array<keyof typeof data>;
  const validDataset = dataset && data[dataset] ? dataset : availableDatasets[0];
  
  // Make sure data exists before trying to access it
  const featureData = data[validDataset] && data[validDataset][0]?.feature_counts 
    ? data[validDataset][0].feature_counts 
    : [];
    
  return (
    <div style={{ width: '100%', height: 500 }}>
      <h2>Distribution of Gene Features - {validDataset}</h2>
      <PieChart width={500} height={400}>
        <Pie
          data={featureData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {featureData.map((entry: { name: string; value: number }, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value, name) => [`${value} genes`, `${name}`]} />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
      </PieChart>
    </div>
  );
}


