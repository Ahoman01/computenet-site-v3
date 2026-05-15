import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Consensus | ComputeNet Docs",
  description: "The consensus mechanism for verified compute coordination",
};

export default function ConsensusPage() {
  return (
    <DocsLayout
      title="Consensus"
      description="The consensus mechanism for verified compute coordination"
      href="/docs/concepts/consensus"
      status="experimental"
      section="Core Concepts"
      sectionHref="/docs/concepts"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Consensus Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            ComputeNet uses a hybrid consensus mechanism that combines BFT-style 
            agreement for receipt ordering with probabilistic finality for high throughput. 
            This allows the network to process many compute jobs while maintaining strong 
            consistency guarantees.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Consensus Phases</h2>
          <ol className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0">1</span>
              <div>
                <strong className="text-foreground">Proposal</strong>
                <p className="text-sm mt-1">Leader proposes a batch of compute receipts for inclusion</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0">2</span>
              <div>
                <strong className="text-foreground">Verification</strong>
                <p className="text-sm mt-1">Validators verify all receipts in the proposed batch</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0">3</span>
              <div>
                <strong className="text-foreground">Pre-commit</strong>
                <p className="text-sm mt-1">Validators signal intent to commit if verification passes</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0">4</span>
              <div>
                <strong className="text-foreground">Commit</strong>
                <p className="text-sm mt-1">With quorum achieved, batch is finalized and receipts are anchored</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quorum Requirements</h2>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
            <pre className="text-muted-foreground">
{`// Quorum calculation
const VALIDATOR_COUNT = activeValidators.length;
const QUORUM = Math.ceil((2 * VALIDATOR_COUNT) / 3) + 1;

// Example: 100 validators
// Quorum = ceil(200/3) + 1 = 68 validators required

// For a batch to be committed:
// - At least QUORUM validators must verify and sign
// - No conflicting receipts in the batch
// - All receipts pass cryptographic verification`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Finality</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Probabilistic Finality</h3>
              <p className="text-sm text-muted-foreground">
                Receipts are considered finalized after inclusion in a committed batch. 
                Probability of reversal decreases exponentially with subsequent batches.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Absolute Finality</h3>
              <p className="text-sm text-muted-foreground">
                After a configurable number of confirmations, receipts achieve 
                absolute finality and cannot be reversed under any circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
