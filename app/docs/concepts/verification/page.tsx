import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Verification Protocol | ComputeNet Docs",
  description: "How compute results are verified across the network",
};

export default function VerificationPage() {
  return (
    <DocsLayout
      title="Verification Protocol"
      description="How compute results are verified across the network"
      href="/docs/concepts/verification"
      status="experimental"
      section="Core Concepts"
      sectionHref="/docs/concepts"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            The verification protocol ensures that all compute results can be independently 
            validated without trusting any single party. It combines cryptographic proofs 
            with multi-validator attestation for robust guarantees.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Verification Layers</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-background/50 border-l-2 border-primary">
              <h3 className="font-medium text-foreground mb-2">Layer 1: Cryptographic Proof</h3>
              <p className="text-sm text-muted-foreground">
                Mathematical proof that the computation was performed correctly. 
                Cannot be forged without breaking cryptographic assumptions.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border-l-2 border-primary/70">
              <h3 className="font-medium text-foreground mb-2">Layer 2: Validator Attestation</h3>
              <p className="text-sm text-muted-foreground">
                Multiple independent validators verify and sign the result. 
                Requires collusion to forge.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border-l-2 border-primary/50">
              <h3 className="font-medium text-foreground mb-2">Layer 3: Consensus Anchoring</h3>
              <p className="text-sm text-muted-foreground">
                Results are anchored to the consensus layer for immutability 
                and global ordering.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Verification Flow</h2>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`// Verification pseudocode
async function verifyReceipt(receipt: ComputeReceipt): boolean {
  // Step 1: Verify cryptographic proof
  if (!verifyProof(receipt.proof, receipt.input_hash, receipt.output_hash)) {
    return false;
  }
  
  // Step 2: Check validator attestations
  const validAttestations = receipt.attestations.filter(
    a => verifySignature(a, validators[a.validator_id])
  );
  
  if (validAttestations.length < QUORUM_THRESHOLD) {
    return false;
  }
  
  // Step 3: Verify consensus anchoring
  return await checkConsensusAnchor(receipt.job_id);
}`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Security Guarantees</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Forgery requires breaking cryptographic assumptions OR corrupting a quorum of validators</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Replay attacks prevented by unique job IDs and timestamps</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Double-spending of compute results prevented by consensus ordering</span>
            </li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  );
}
