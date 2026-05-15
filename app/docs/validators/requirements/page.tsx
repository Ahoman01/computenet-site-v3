import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Hardware Requirements | ComputeNet Docs",
  description: "Minimum and recommended hardware specifications",
};

export default function RequirementsPage() {
  return (
    <DocsLayout
      title="Hardware Requirements"
      description="Minimum and recommended hardware specifications"
      href="/docs/validators/requirements"
      status="draft"
      section="Validators"
      sectionHref="/docs/validators"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Validator hardware requirements depend on the types of compute jobs you 
            plan to execute. The following specifications represent baseline requirements 
            for participating in the network.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Minimum Requirements</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Component</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Minimum</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Recommended</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">CPU</td>
                  <td className="py-3 px-4">8 cores / 16 threads</td>
                  <td className="py-3 px-4">16+ cores / 32+ threads</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">RAM</td>
                  <td className="py-3 px-4">32 GB</td>
                  <td className="py-3 px-4">64+ GB</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">Storage</td>
                  <td className="py-3 px-4">500 GB NVMe SSD</td>
                  <td className="py-3 px-4">1+ TB NVMe SSD</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">Network</td>
                  <td className="py-3 px-4">100 Mbps symmetric</td>
                  <td className="py-3 px-4">1 Gbps symmetric</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground">GPU (optional)</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">NVIDIA RTX 3080+ / A100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Operating System</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Ubuntu 22.04 LTS (recommended)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Debian 12
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Rocky Linux 9
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
              Windows and macOS (development only, not for production)
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Cloud Provider Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">AWS</h3>
              <p className="text-sm text-muted-foreground">c6i.4xlarge or better</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">GCP</h3>
              <p className="text-sm text-muted-foreground">n2-standard-16 or better</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Azure</h3>
              <p className="text-sm text-muted-foreground">Standard_D16s_v5 or better</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Hetzner</h3>
              <p className="text-sm text-muted-foreground">AX102 dedicated or better</p>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6 border-blue-500/30">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Note</h2>
          <p className="text-muted-foreground">
            Hardware requirements are subject to change as the protocol evolves. 
            Final specifications will be published before mainnet launch.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
