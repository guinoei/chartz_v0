"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const demoData = [
  { name: "A", value: 300, color: "#6366F1" },
  { name: "B", value: 500, color: "#F59E0B" },
  { name: "C", value: 200, color: "#10B981" },
];

export function DemoCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-medium mb-2">Pie Chart</h3>
        <PieChart width={250} height={200}>
          <Pie
            data={demoData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            label
          >
            {demoData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-medium mb-2">Bar Chart</h3>
        <BarChart width={250} height={200} data={demoData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value">
            {demoData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-medium mb-2">Line Chart</h3>
        <LineChart width={250} height={200} data={demoData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke={demoData[0].color}
            strokeWidth={2}
          />
        </LineChart>
      </div>
    </div>
  );
}
