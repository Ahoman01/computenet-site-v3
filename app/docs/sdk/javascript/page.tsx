import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "JavaScript SDK | ComputeNet Docs",
  description: "ComputeNet SDK for Node.js and browsers",
};

export default function JavaScriptSDKPage() {
  return (
    <DocsLayout
      title="JavaScript SDK"
      description="ComputeNet SDK for Node.js and browsers"
      href="/docs/sdk/javascript"
      status="draft"
      section="SDKs"
      sectionHref="/docs/sdk"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            The JavaScript SDK provides a type-safe interface for interacting with 
            ComputeNet from Node.js and browser environments.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Installation</h2>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
            <pre className="text-muted-foreground">
{`# npm
npm install @computenet/sdk

# yarn
yarn add @computenet/sdk

# pnpm
pnpm add @computenet/sdk`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Start</h2>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`import { ComputeNet } from '@computenet/sdk';

// Initialize client
const client = new ComputeNet({
  network: 'testnet',
  apiKey: process.env.COMPUTENET_API_KEY
});

// Submit a compute job
const receipt = await client.compute({
  program: 'sha256',
  input: Buffer.from('hello world')
});

console.log('Job ID:', receipt.jobId);
console.log('Output:', receipt.output.toString('hex'));

// Verify the receipt
const isValid = await client.verify(receipt);
console.log('Valid:', isValid);`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">TypeScript Support</h2>
          <p className="text-muted-foreground leading-relaxed">
            The SDK is written in TypeScript and includes full type definitions. 
            All methods are fully typed for excellent IDE support.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6 border-yellow-500/30">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">Draft</h2>
          <p className="text-muted-foreground">
            The JavaScript SDK is in development. API may change before stable release.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
