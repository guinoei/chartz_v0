import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DemoCharts } from "./_components/DemoCharts";

export default function HomePage() {
  return (
    <main className="px-4 md:px-10 py-16 text-center">
      <h1 className="text-5xl font-bold mb-4">CHARTZ</h1>
      <h2 className="text-4xl font-bold mb-4">Create Custom Charts Instantly</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
        Build beautiful, personalized charts directly in your browser. Add your data, preview in real-time, and export your chart as a PNG. Perfect for reports, presentations, and social media. You can even upload your own CSV/JSON file!
      </p>
      <Link href="/builder">
        <Button className="text-lg px-6 py-3">CHARTZ IT</Button>
      </Link>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Chart Types</h2>
        <DemoCharts />
      </div>

      <div className="mt-20 text-left max-w-3xl mx-auto">
        <div className="mt-24 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">What You Can Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">🧮 Add and Edit Data in Real-Time</h3>
              <p className="text-gray-600">
                Instantly update your chart as you type. Add labels and values, tweak them, or remove data
                on the fly — all without page reloads.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">🎨 Pick Custom Colors</h3>
              <p className="text-gray-600">
                Choose the perfect color for each slice or bar using our built-in color picker. Stay on brand,
                match your theme, or just make it pop.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">📥 Import CSV or JSON</h3>
              <p className="text-gray-600">
                Upload structured data from spreadsheets or databases. Drag and drop a file and your chart is
                ready in seconds — no formatting hassle.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">📤 Export as PNG</h3>
              <p className="text-gray-600">
                Download a high-quality image of your chart. Perfect for presentations, reports, or social
                media — no watermarks, no compromises.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-lg mb-2">🚀 100% Free & Private</h3>
              <p className="text-gray-600">
                No sign-ups, no fees, and no tracking. Everything runs in your browser and nothing gets saved.
                You stay in control of your data.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/builder">
            <Button className="text-lg px-6 py-3">Try it now!</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}