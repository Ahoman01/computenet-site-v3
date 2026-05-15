import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Building on ComputeNet | ComputeNet Docs",
  description: "Getting started with ComputeNet development",
};

export default function BuildingPage() {
  return (
    <DocsLayout
      title="Building on ComputeNet"
      description="Getting started with ComputeNet development"
      href="/docs/dev/building"
      status="draft"
      section="Development"
      sectionHref="/docs/dev"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Getting Started</h2>
          <p className="text-muted-foreground leading-relaxed">
            This guide walks through the fundamentals of building applications that 
            leverage ComputeNet for verifiable computation. You will learn how to 
            submit jobs, verify results, and integrate receipts into your applications.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Prerequisites</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Node.js 18+ or Python 3.10+
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              ComputeNet SDK installed
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Testnet access credentials
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Start</h2>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
            <pre className="text-muted-foreground">
{`# Install the SDK
npm install @computenet/sdk

# Initialize a client
import { ComputeNet } from '@computenet/sdk';

const client = new ComputeNet({
  network: 'testnet',
  apiKey: process.env.COMPUTENET_API_KEY
});

// Submit a compute job
const receipt = await client.compute({
  program: 'sha256',
  input: Buffer.from('hello world')
});

console.log('Receipt:', receipt.id);
console.log('Output:', receipt.output);`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Next Steps</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span>Learn about <strong className="text-foreground">Submitting Jobs</strong> for detailed job configuration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span>Read <strong className="text-foreground">Verifying Results</strong> to understand receipt validation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span>Explore the <strong className="text-foreground">SDK Reference</strong> for complete API documentation</span>
            </li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  );
}
