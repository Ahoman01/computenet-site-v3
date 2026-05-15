import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Network Topology | ComputeNet Docs",
  description: "The structure and organization of the ComputeNet network",
};

export default function TopologyPage() {
  return (
    <DocsLayout
      title="Network Topology"
      description="The structure and organization of the ComputeNet network"
      href="/docs/concepts/topology"
      status="draft"
      section="Core Concepts"
      sectionHref="/docs/concepts"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Network Structure</h2>
          <p className="text-muted-foreground leading-relaxed">
            ComputeNet uses a decentralized peer-to-peer topology where nodes communicate 
            directly without central coordination. The network self-organizes into 
            overlapping validator sets for efficient job distribution.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Node Types</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Validator Nodes</h3>
              <p className="text-sm text-muted-foreground">
                Execute compute jobs, generate proofs, and participate in consensus. 
                Require staking and meet hardware requirements.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Full Nodes</h3>
              <p className="text-sm text-muted-foreground">
                Store complete history and verify all proofs. Do not execute jobs 
                but provide data availability.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Light Clients</h3>
              <p className="text-sm text-muted-foreground">
                Verify specific receipts without storing full history. 
                Suitable for end-user applications.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-medium text-foreground mb-2">Gateway Nodes</h3>
              <p className="text-sm text-muted-foreground">
                Provide RPC interfaces for external applications. 
                Bridge between clients and the network.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Peer Discovery</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nodes discover peers through a combination of bootstrap nodes, 
            DHT-based discovery, and gossip protocols.
          </p>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
            <pre className="text-muted-foreground">
{`# Example node configuration
[network]
bootstrap_peers = [
  "/dns4/boot1.computenet.io/tcp/30333",
  "/dns4/boot2.computenet.io/tcp/30333"
]
max_peers = 50
enable_dht = true`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Geographic Distribution</h2>
          <p className="text-muted-foreground leading-relaxed">
            For optimal performance and fault tolerance, validators are encouraged 
            to distribute geographically. The protocol includes latency-aware 
            job routing to minimize execution time while maintaining verification guarantees.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
