import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Overview | ComputeNet Docs",
  description: "An introduction to the ComputeNet protocol and its purpose",
};

export default function OverviewPage() {
  return (
    <DocsLayout
      title="What is ComputeNet?"
      description="An introduction to the ComputeNet protocol and its purpose"
      href="/docs/concepts/overview"
      status="stable"
      section="Core Concepts"
      sectionHref="/docs/concepts"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            ComputeNet is an experimental open protocol for verified useful compute. It enables 
            cryptographically verifiable proof that computation was performed correctly, creating 
            a trustless infrastructure layer for distributed computing workloads.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Key Principles</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong className="text-foreground">Verifiability</strong> — Every computation produces cryptographic proof of correct execution</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong className="text-foreground">Decentralization</strong> — No single point of control or failure in the network</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong className="text-foreground">Minimal Trust</strong> — Cryptographic guarantees replace trust assumptions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong className="text-foreground">Permissionless</strong> — Anyone can participate as a validator or submit jobs</span>
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The protocol coordinates a network of validator nodes that execute compute jobs 
            and generate cryptographic receipts. These receipts can be independently verified 
            by any party without re-executing the computation.
          </p>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
            <pre className="text-muted-foreground">
{`// Simplified flow
1. Client submits compute job
2. Validators execute and generate receipt
3. Receipt contains cryptographic proof
4. Anyone can verify proof validity`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">AI/ML Inference</h3>
              <p className="text-sm text-muted-foreground">Verifiable model inference for critical applications</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Scientific Computing</h3>
              <p className="text-sm text-muted-foreground">Trustless execution of research workloads</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Financial Computation</h3>
              <p className="text-sm text-muted-foreground">Auditable execution of financial models</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Data Processing</h3>
              <p className="text-sm text-muted-foreground">Verifiable data transformation pipelines</p>
            </div>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
