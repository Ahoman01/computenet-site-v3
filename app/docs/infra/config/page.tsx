import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Node Configuration | ComputeNet Docs",
  description: "Configuring and optimizing node settings",
};

export default function InfraConfigPage() {
  return (
    <DocsLayout
      title="Node Configuration"
      description="Configuring and optimizing node settings"
      href="/docs/infra/config"
      status="planned"
      section="Infrastructure"
      sectionHref="/docs/infra"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Configuration Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            This guide covers node configuration options for validators, full nodes, 
            and gateway nodes. Proper configuration is essential for optimal performance.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Planned Topics</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Configuration file format and options
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Network settings and peer management
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Storage and database configuration
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Resource limits and tuning
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Environment variables reference
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6 border-muted">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            Detailed configuration documentation will be published with node software releases.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
