import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Submitting Jobs | ComputeNet Docs",
  description: "How to submit compute jobs to the network",
};

export default function JobsPage() {
  return (
    <DocsLayout
      title="Submitting Jobs"
      description="How to submit compute jobs to the network"
      href="/docs/dev/jobs"
      status="experimental"
      section="Development"
      sectionHref="/docs/dev"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Job Submission</h2>
          <p className="text-muted-foreground leading-relaxed">
            A compute job consists of a program specification and input data. When submitted, 
            the job is distributed to validators who execute it and generate a verifiable receipt.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Job Structure</h2>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`interface ComputeJob {
  // Program to execute (hash or identifier)
  program: string;
  
  // Input data for the program
  input: Buffer | string | object;
  
  // Optional configuration
  options?: {
    // Maximum execution time in ms
    timeout?: number;
    
    // Number of validators required
    redundancy?: number;
    
    // Priority level
    priority?: 'low' | 'normal' | 'high';
    
    // Callback URL for async notification
    webhook?: string;
  };
}`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Submitting a Job</h2>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`import { ComputeNet } from '@computenet/sdk';

const client = new ComputeNet({ network: 'testnet' });

// Simple job submission
const receipt = await client.compute({
  program: 'sha256',
  input: 'data to hash'
});

// Advanced job with options
const receipt = await client.compute({
  program: 'ml-inference-v1',
  input: { 
    model: 'sentiment-analysis',
    text: 'ComputeNet is amazing!'
  },
  options: {
    timeout: 30000,
    redundancy: 3,
    priority: 'high'
  }
});

console.log('Job ID:', receipt.jobId);
console.log('Status:', receipt.status);
console.log('Output:', receipt.output);`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Async Jobs</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For long-running computations, use async submission with webhooks:
          </p>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`// Submit async job
const { jobId } = await client.submitAsync({
  program: 'complex-computation',
  input: largeDataset,
  options: {
    webhook: 'https://myapp.com/webhooks/computenet'
  }
});

// Check status later
const status = await client.getJobStatus(jobId);

// Retrieve receipt when complete
if (status.complete) {
  const receipt = await client.getReceipt(jobId);
}`}
            </pre>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
