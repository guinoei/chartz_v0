# Chartz

**Create beautiful charts instantly — no account, no setup, no friction.**

Chartz was born from a simple personal need: a fast way to turn raw numbers into a clean, shareable chart without signing up for anything or wrestling with overcomplicated tools. It's now open for anyone who needs exactly that.

## What it does

Open the app, enter your data, pick a chart type, and download your chart as a PNG. That's it.

- **Three chart types** — Pie, Bar, and Line
- **Real-time preview** — the chart updates as you type
- **Custom colors** — per-entry color picker for full visual control
- **CSV / JSON import** — drop in a file and your chart is ready in seconds
- **PNG export** — clean, watermark-free image download
- **Zero account required** — nothing is stored, nothing is tracked, everything stays in your browser

## Stack

- [Next.js 15](https://nextjs.org/) + React 19
- [Recharts](https://recharts.org/) for chart rendering
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [html2canvas](https://html2canvas.hertzen.com/) for PNG export

## CSV format

When importing a CSV file, use the following column order:

```
name,value,color
Sales,4200,#6366F1
Marketing,1800,#F59E0B
Engineering,3100,#10B981
```

The `color` column is optional — a default color will be applied if omitted.
