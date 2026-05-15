import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Validator Setup | ComputeNet Docs",
  description: "Step-by-step guide to setting up a validator node",
};

export default function ValidatorSetupPage() {
  return (
    <DocsLayout
      title="Validator Setup"
      description="Step-by-step guide to setting up a validator node"
      href="/docs/validators/setup"
      status="draft"
      section="Validators"
      sectionHref="/docs/validators"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Prerequisites</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Linux-based operating system (Ubuntu 22.04+ recommended)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Hardware meeting minimum requirements (see Hardware Requirements)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Static IP address or dynamic DNS configured
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Ports 30333 (P2P) and 9933 (RPC) accessible
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Installation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-foreground mb-2">Step 1: Download the binary</h3>
              <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                <pre className="text-muted-foreground">
{`# Download latest release
curl -L https://releases.computenet.io/latest/computenet-node \\
  -o /usr/local/bin/computenet-node

chmod +x /usr/local/bin/computenet-node`}
                </pre>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Step 2: Generate node keys</h3>
              <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                <pre className="text-muted-foreground">
{`# Generate validator keys
computenet-node key generate --scheme sr25519 \\
  --output-type json > validator-key.json

# Store securely - this is your validator identity`}
                </pre>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Step 3: Configure the node</h3>
              <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
                <pre className="text-muted-foreground">
{`# Create configuration directory
mkdir -p /etc/computenet

# Create config file
cat > /etc/computenet/config.toml << EOF
[node]
name = "my-validator"
role = "validator"

[network]
listen_addr = "/ip4/0.0.0.0/tcp/30333"
external_addr = "/ip4/YOUR_PUBLIC_IP/tcp/30333"

[validator]
key_file = "/etc/computenet/validator-key.json"
EOF`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Running the Node</h2>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
            <pre className="text-muted-foreground">
{`# Start validator node
computenet-node --config /etc/computenet/config.toml

# Or run as systemd service (recommended)
sudo systemctl enable computenet-validator
sudo systemctl start computenet-validator`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6 border-yellow-500/30">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">Important Notes</h2>
          <p className="text-muted-foreground">
            Validator setup is currently only available on the private testnet. 
            Public testnet validator registration will be announced separately. 
            Join the community channels for updates.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
