import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Incident Response | ComputeNet Docs",
  description: "Procedures for handling security incidents",
};

export default function IncidentsPage() {
  return (
    <DocsLayout
      title="Incident Response"
      description="Procedures for handling security incidents"
      href="/docs/security/incidents"
      status="planned"
      section="Security"
      sectionHref="/docs/security"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Incident Response</h2>
          <p className="text-muted-foreground leading-relaxed">
            This page will document procedures for identifying, responding to, and 
            recovering from security incidents affecting the ComputeNet network.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Planned Topics</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Incident classification and severity levels
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Communication protocols
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Emergency response procedures
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Post-incident analysis
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6 border-muted">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            Incident response documentation will be published with mainnet preparations.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
