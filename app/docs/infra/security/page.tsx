import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Infrastructure Security | ComputeNet Docs",
  description: "Security best practices for node operators",
};

export default function InfraSecurityPage() {
  return (
    <DocsLayout
      title="Security"
      description="Security best practices for node operators"
      href="/docs/infra/security"
      status="draft"
      section="Infrastructure"
      sectionHref="/docs/infra"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Security Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Operating a ComputeNet node requires careful attention to security. 
            This guide covers best practices for securing your validator infrastructure.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Key Management</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Store validator keys in hardware security modules (HSMs) when possible
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Never expose private keys in environment variables or logs
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Use separate keys for signing and encryption
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Implement key rotation procedures
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Network Security</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Run nodes behind firewalls with minimal exposed ports
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Use VPNs for remote administration
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Enable DDoS protection for public endpoints
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Monitor for unusual network activity
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">System Hardening</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Keep operating system and dependencies updated
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Run node software with minimal privileges
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Enable audit logging for all administrative actions
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Use containerization for isolation
            </li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  );
}
