import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Changelog | ComputeNet Docs",
  description: "Version history and release notes",
};

export default function ChangelogPage() {
  return (
    <DocsLayout
      title="Changelog"
      description="Version history and release notes"
      href="/docs/reference/changelog"
      status="stable"
      section="Reference"
      sectionHref="/docs/reference"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Version History</h2>
          <p className="text-muted-foreground leading-relaxed">
            Release notes and changes for ComputeNet protocol and tooling.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-2">Research Preview</h2>
          <p className="text-sm text-muted-foreground mb-4">Current</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Initial protocol specification
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Private testnet deployment
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Core validator node implementation
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Basic telemetry and monitoring
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              Documentation site launch
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6 border-muted">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Upcoming</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Public testnet launch
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              SDK releases (JavaScript, Python)
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Enhanced proof systems
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Cross-chain integrations
            </li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  );
}
