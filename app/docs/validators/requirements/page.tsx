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
      status="stable"
      section="Validators"
      sectionHref="/docs/validators"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Current ComputeNet public testnet workloads are lightweight research and verification workloads.
            Validator hardware requirements will increase as the network scales toward mainnet.
          </p>
        </div>

        {/* Public Testnet Requirements */}
        <div className="glass-panel rounded-xl p-6 border-primary/30">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold text-foreground">Public Testnet Requirements</h2>
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
              Current
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            These are the requirements for participating in the current open public testnet.
          </p>
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
                  <td className="py-3 px-4">2 cores</td>
                  <td className="py-3 px-4">4 cores</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">RAM</td>
                  <td className="py-3 px-4">4 GB</td>
                  <td className="py-3 px-4">8 GB</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">Storage</td>
                  <td className="py-3 px-4">50 GB SSD</td>
                  <td className="py-3 px-4">100 GB SSD</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">Network</td>
                  <td className="py-3 px-4">Stable VPS or broadband</td>
                  <td className="py-3 px-4">100 Mbps symmetric</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground">GPU</td>
                  <td className="py-3 px-4 text-muted-foreground/70">Not required</td>
                  <td className="py-3 px-4 text-muted-foreground/70">Not required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Future High-Performance Targets */}
        <div className="glass-panel rounded-xl p-6 border-amber-500/30">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold text-foreground">Future High-Performance Validator Targets</h2>
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Planned
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            These specifications are planned for future mainnet validators. Subject to change before mainnet.
          </p>
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
          <h2 className="text-xl font-semibold text-foreground mb-4">Cloud Provider Examples</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            For current public testnet, entry-level VPS instances are sufficient.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">DigitalOcean</h3>
              <p className="text-sm text-muted-foreground">Basic Droplet ($12-24/mo)</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Hetzner</h3>
              <p className="text-sm text-muted-foreground">CX21 or CPX21</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">AWS</h3>
              <p className="text-sm text-muted-foreground">t3.medium or similar</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Vultr / Linode</h3>
              <p className="text-sm text-muted-foreground">Any basic VPS</p>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6 border-blue-500/30">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Note</h2>
          <p className="text-muted-foreground">
            Hardware requirements will evolve as the protocol scales. Final mainnet specifications 
            will be published well in advance. Current testnet participation does not require 
            high-end hardware.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
