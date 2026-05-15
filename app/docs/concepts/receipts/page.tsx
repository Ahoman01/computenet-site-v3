import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Compute Receipts | ComputeNet Docs",
  description: "Understanding cryptographic proofs of computation",
};

export default function ReceiptsPage() {
  return (
    <DocsLayout
      title="Compute Receipts"
      description="Understanding cryptographic proofs of computation"
      href="/docs/concepts/receipts"
      status="stable"
      section="Core Concepts"
      sectionHref="/docs/concepts"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">What is a Compute Receipt?</h2>
          <p className="text-muted-foreground leading-relaxed">
            A compute receipt is a cryptographic proof that a specific computation was performed 
            correctly. It contains all the information needed to verify the result without 
            re-executing the computation.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Receipt Structure</h2>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`interface ComputeReceipt {
  // Job identification
  job_id: string;
  timestamp: number;
  
  // Input/Output hashes
  input_hash: string;
  output_hash: string;
  
  // Execution metadata
  executor_id: string;
  execution_time_ms: number;
  
  // Cryptographic proof
  proof: {
    type: "zk-snark" | "attestation";
    data: string;
    signature: string;
  };
  
  // Validator attestations
  attestations: Attestation[];
}`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Verification Process</h2>
          <ol className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0">1</span>
              <span>Verify the cryptographic proof matches the stated computation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0">2</span>
              <span>Check that sufficient validator attestations are present</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0">3</span>
              <span>Validate all signatures against known validator public keys</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0">4</span>
              <span>Confirm the receipt has been anchored to the consensus layer</span>
            </li>
          </ol>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Receipt Types</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">ZK-SNARK Proofs</h3>
              <p className="text-sm text-muted-foreground">
                Zero-knowledge proofs that verify computation without revealing inputs. 
                Highest security but computationally expensive to generate.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Attestation-Based</h3>
              <p className="text-sm text-muted-foreground">
                Multiple validators independently execute and attest to results. 
                Faster but requires trust in validator set honesty.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
