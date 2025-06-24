"use client";

import Link from "next/link";

import { useState } from "react";
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
    Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";

const initialData = [
    { name: "Chartz", value: 100, color: "#910991" },
    { name: "Others", value: 10, color: "#F59E0B" },
];

export default function ChartBuilder() {
    const [data, setData] = useState(initialData);
    const [type, setType] = useState("pie");
    const [inputName, setInputName] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [inputColor, setInputColor] = useState("#6366F1");

    const handleDownload = async () => {
        const chartNode = document.getElementById("chart-preview");
        if (!chartNode) return;
        const canvas = await html2canvas(chartNode);
        const link = document.createElement("a");
        link.download = "chart.png";
        link.href = canvas.toDataURL();
        link.click();
    };

    const handleAddData = () => {
        if (!inputName || isNaN(Number(inputValue))) return;
        const newData = [...data, { name: inputName, value: Number(inputValue), color: inputColor }];
        setData(newData);
        setInputName("");
        setInputValue("");
        setInputColor("#6366F1");
    };

    const handleEdit = (index: number, key: keyof typeof initialData[0], value: string | number) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [key]: key === "value" ? Number(value) : value };
        setData(updated);
    };

    const handleDelete = (index: number) => {
        const updated = [...data];
        updated.splice(index, 1);
        setData(updated);
    };

    const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const text = event.target?.result as string;
                if (file.name.endsWith(".json")) {
                    const json = JSON.parse(text);
                    if (Array.isArray(json)) setData(json);
                } else if (file.name.endsWith(".csv")) {
                    const rows = text.trim().split("\n").slice(1);
                    const parsed = rows.map((row) => {
                        const [name, value, color] = row.split(",");
                        return {
                            name: name.trim(),
                            value: Number(value),
                            color: color?.trim() || "#6366F1",
                        };
                    });
                    setData(parsed);
                }
            } catch (err) {
                console.error("Import failed", err);
            }
        };
        reader.readAsText(file);
    };

    return (
        <div className="min-h-screen p-6 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-10">CHARTZ IT&apos;S EASY!</h2>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="border px-3 py-2 rounded"
                >
                    <option value="pie">Pie</option>
                    <option value="bar">Bar</option>
                    <option value="line">Line</option>
                </select>
                <input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="Label"
                    className="border px-3 py-2 rounded"
                />
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Value"
                    className="border px-3 py-2 rounded w-24"
                />
                <input
                    type="color"
                    value={inputColor}
                    onChange={(e) => setInputColor(e.target.value)}
                    className="w-10 h-10 p-0 border rounded"
                    title="Pick color"
                />
                <Button onClick={handleAddData}>Add</Button>
            </div>

            <div className="mb-6 text-center">
                <label className="font-medium block mb-2 text-sm">📂 Import CSV or JSON</label>
                <input type="file" accept=".csv,.json" onChange={handleImport} />
                <p className="text-sm text-gray-500 mt-1">
                    Use the format: <code>name,value,color</code> — example:{" "}
                    <code>Chartz,100,#6366F1</code>
                </p>
            </div>

            <div className="overflow-x-auto w-full max-w-3xl mb-6">
                <table className="w-full text-sm text-left border border-gray-200 rounded">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2">Label</th>
                            <th className="px-4 py-2">Value</th>
                            <th className="px-4 py-2">Color</th>
                            <th className="px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-4 py-2">
                                    <input
                                        className="w-full border rounded px-2 py-1"
                                        value={item.name}
                                        onChange={(e) => handleEdit(index, "name", e.target.value)}
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    <input
                                        type="number"
                                        className="w-full border rounded px-2 py-1"
                                        value={item.value}
                                        onChange={(e) => handleEdit(index, "value", e.target.value)}
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    <input
                                        type="color"
                                        className="w-10 h-10 p-0 border rounded"
                                        value={item.color}
                                        onChange={(e) => handleEdit(index, "color", e.target.value)}
                                    />
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <Button onClick={() => handleDelete(index)} variant="destructive">
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div id="chart-preview" className="bg-white p-4 rounded shadow mb-6">
                {type === "pie" && (
                    <PieChart width={400} height={300}>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={entry.color || "#6366F1"} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                )}
                {type === "bar" && (
                    <BarChart width={500} height={300} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value">
                            {data.map((entry, index) => (
                                <Cell key={index} fill={entry.color || "#6366F1"} />
                            ))}
                        </Bar>
                    </BarChart>
                )}
                {type === "line" && (
                    <LineChart width={500} height={300} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke={data[0]?.color || "#6366F1"}
                            strokeWidth={2}
                        />
                    </LineChart>
                )}
            </div>

            <Button onClick={handleDownload}>Download PNG</Button>
            
            <Link href="/">
                <Button className="text-lg px-6 py-3 m-5">Home</Button>
            </Link>
        </div>
    );
}
