import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Glossary | ComputeNet Docs",
  description: "Definitions of key terms and concepts",
};

export default function GlossaryPage() {
  return (
    <DocsLayout
      title="Glossary"
      description="Definitions of key terms and concepts"
      href="/docs/reference/glossary"
      status="stable"
      section="Reference"
      sectionHref="/docs/reference"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Terms</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground">Attestation</h3>
              <p className="text-sm text-muted-foreground mt-1">
                A cryptographic signature from a validator confirming they have 
                verified a compute receipt.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Compute Job</h3>
              <p className="text-sm text-muted-foreground mt-1">
                A unit of work submitted to the network consisting of a program 
                specification and input data.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Compute Receipt</h3>
              <p className="text-sm text-muted-foreground mt-1">
                A cryptographic proof that a computation was performed correctly, 
                including the output and validator attestations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Consensus</h3>
              <p className="text-sm text-muted-foreground mt-1">
                The process by which validators agree on the ordering and validity 
                of compute receipts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Finality</h3>
              <p className="text-sm text-muted-foreground mt-1">
                The point at which a receipt is considered permanently committed 
                and cannot be reversed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Quorum</h3>
              <p className="text-sm text-muted-foreground mt-1">
                The minimum number of validators required to reach agreement, 
                typically 2/3 + 1 of the active set.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Slashing</h3>
              <p className="text-sm text-muted-foreground mt-1">
                The penalty mechanism where validators lose staked tokens for 
                malicious behavior or severe negligence.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Validator</h3>
              <p className="text-sm text-muted-foreground mt-1">
                A node that executes compute jobs, generates proofs, and participates 
                in consensus.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Zero-Knowledge Proof</h3>
              <p className="text-sm text-muted-foreground mt-1">
                A cryptographic proof that verifies a statement without revealing 
                any information beyond the validity of the statement itself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
