import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Threat Model | ComputeNet Docs",
  description: "Understanding the security assumptions and threats",
};

export default function ThreatsPage() {
  return (
    <DocsLayout
      title="Threat Model"
      description="Understanding the security assumptions and threats"
      href="/docs/security/threats"
      status="draft"
      section="Security"
      sectionHref="/docs/security"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Security Model</h2>
          <p className="text-muted-foreground leading-relaxed">
            ComputeNet operates under specific security assumptions. Understanding these 
            assumptions and potential threats is essential for building secure applications.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Trust Assumptions</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Cryptographic primitives are secure (hash functions, signatures)
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              At least 2/3 of validators are honest
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Network eventually delivers messages
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Proof systems are sound and complete
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Threat Categories</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Validator Collusion</h3>
              <p className="text-sm text-muted-foreground">
                If more than 1/3 of validators collude, they could produce invalid receipts. 
                Mitigated by economic incentives and slashing.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Denial of Service</h3>
              <p className="text-sm text-muted-foreground">
                Attackers may attempt to overwhelm the network. Mitigated by rate limiting 
                and resource pricing.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Data Availability Attacks</h3>
              <p className="text-sm text-muted-foreground">
                Withholding receipt data could prevent verification. Mitigated by data 
                availability sampling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
