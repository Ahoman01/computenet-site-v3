import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Disaster Recovery | ComputeNet Docs",
  description: "Backup and recovery procedures",
};

export default function RecoveryPage() {
  return (
    <DocsLayout
      title="Disaster Recovery"
      description="Backup and recovery procedures"
      href="/docs/infra/recovery"
      status="planned"
      section="Infrastructure"
      sectionHref="/docs/infra"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Recovery Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            This guide covers backup strategies and recovery procedures for validator 
            nodes to minimize downtime and protect against data loss.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Planned Topics</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Key backup and secure storage
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Database backup strategies
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              State synchronization from peers
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Migration to new hardware
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Incident response procedures
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6 border-muted">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            Recovery documentation will be published with validator operations guides.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
