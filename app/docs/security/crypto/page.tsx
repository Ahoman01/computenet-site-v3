import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Cryptography | ComputeNet Docs",
  description: "Cryptographic primitives used in ComputeNet",
};

export default function CryptoPage() {
  return (
    <DocsLayout
      title="Cryptography"
      description="Cryptographic primitives used in ComputeNet"
      href="/docs/security/crypto"
      status="experimental"
      section="Security"
      sectionHref="/docs/security"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Cryptographic Foundations</h2>
          <p className="text-muted-foreground leading-relaxed">
            ComputeNet uses modern cryptographic primitives for security. This document 
            outlines the algorithms and their applications in the protocol.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Hash Functions</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span><strong className="text-foreground">SHA-256</strong> — Primary hash function for job IDs and input hashing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span><strong className="text-foreground">Blake3</strong> — Fast hashing for large data structures</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span><strong className="text-foreground">Poseidon</strong> — ZK-friendly hash for proof circuits</span>
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Digital Signatures</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span><strong className="text-foreground">Ed25519</strong> — Validator attestation signatures</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span><strong className="text-foreground">BLS12-381</strong> — Aggregate signatures for consensus</span>
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Zero-Knowledge Proofs</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For verifiable computation, ComputeNet supports multiple ZK proof systems:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span><strong className="text-foreground">Groth16</strong> — Constant-size proofs for fixed circuits</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span><strong className="text-foreground">PLONK</strong> — Universal setup for flexible programs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span><strong className="text-foreground">STARKs</strong> — Transparent proofs without trusted setup (planned)</span>
            </li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  );
}
