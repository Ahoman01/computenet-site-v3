import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Configuration | ComputeNet Docs",
  description: "All configuration options and parameters",
};

export default function ConfigPage() {
  return (
    <DocsLayout
      title="Configuration"
      description="All configuration options and parameters"
      href="/docs/reference/config"
      status="draft"
      section="Reference"
      sectionHref="/docs/reference"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Configuration Reference</h2>
          <p className="text-muted-foreground leading-relaxed">
            Complete reference for all configuration options available for ComputeNet 
            nodes, clients, and applications.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Configuration File</h2>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`# computenet.toml

[node]
name = "my-node"
role = "validator"  # validator | full | light
data_dir = "/var/lib/computenet"

[network]
listen_addr = "/ip4/0.0.0.0/tcp/30333"
bootstrap_peers = []
max_peers = 50
enable_dht = true

[consensus]
block_time_ms = 6000
finality_depth = 32

[validator]
key_file = "/etc/computenet/validator.key"
enabled = true

[rpc]
enabled = true
listen_addr = "127.0.0.1:9933"
cors_origins = ["*"]

[metrics]
enabled = true
listen_addr = "127.0.0.1:9615"

[logging]
level = "info"
format = "json"`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Environment Variables</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Variable</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground font-mono">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">COMPUTENET_CONFIG</td>
                  <td className="py-3 px-4 font-sans">Path to config file</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">COMPUTENET_DATA_DIR</td>
                  <td className="py-3 px-4 font-sans">Data directory path</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">COMPUTENET_LOG_LEVEL</td>
                  <td className="py-3 px-4 font-sans">Logging verbosity</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground">COMPUTENET_NETWORK</td>
                  <td className="py-3 px-4 font-sans">Network to connect to</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
