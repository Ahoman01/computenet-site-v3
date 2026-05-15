import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Audit Process | ComputeNet Docs",
  description: "How the protocol undergoes security review",
};

export default function AuditsPage() {
  return (
    <DocsLayout
      title="Audit Process"
      description="How the protocol undergoes security review"
      href="/docs/security/audits"
      status="planned"
      section="Security"
      sectionHref="/docs/security"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Security Audits</h2>
          <p className="text-muted-foreground leading-relaxed">
            ComputeNet undergoes rigorous security review before major releases. 
            This page will document the audit process and published reports.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Planned Audits</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Core protocol cryptography review
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Consensus mechanism analysis
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Node implementation security review
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Smart contract integration audit
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6 border-muted">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            Audit reports will be published as they are completed. No audits have been 
            performed yet on the current codebase.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
