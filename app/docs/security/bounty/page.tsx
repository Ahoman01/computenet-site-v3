import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Bug Bounty | ComputeNet Docs",
  description: "Security vulnerability disclosure program",
};

export default function BountyPage() {
  return (
    <DocsLayout
      title="Bug Bounty"
      description="Security vulnerability disclosure program"
      href="/docs/security/bounty"
      status="planned"
      section="Security"
      sectionHref="/docs/security"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Bug Bounty Program</h2>
          <p className="text-muted-foreground leading-relaxed">
            ComputeNet will operate a bug bounty program to reward responsible 
            disclosure of security vulnerabilities. Details will be published 
            when the program launches.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Planned Scope</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Core protocol vulnerabilities
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Cryptographic implementation issues
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Node software security bugs
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              SDK and tooling vulnerabilities
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6 border-muted">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            The bug bounty program will launch closer to mainnet. For now, please 
            report security issues via the project communication channels.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
