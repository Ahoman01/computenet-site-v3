import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Network Architecture | ComputeNet Docs",
  description: "Overview of the ComputeNet network architecture",
};

export default function InfraArchitecturePage() {
  return (
    <DocsLayout
      title="Network Architecture"
      description="Overview of the ComputeNet network architecture"
      href="/docs/infra/architecture"
      status="draft"
      section="Infrastructure"
      sectionHref="/docs/infra"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Architecture Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            ComputeNet is built on a decentralized architecture designed for high availability, 
            fault tolerance, and geographic distribution. The network consists of multiple 
            layers working together to provide verified computation.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Network Layers</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-background/50 border-l-2 border-primary">
              <h3 className="font-medium text-foreground mb-2">Execution Layer</h3>
              <p className="text-sm text-muted-foreground">
                Validator nodes that execute compute jobs and generate proofs. 
                Responsible for the actual computation work.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border-l-2 border-primary/70">
              <h3 className="font-medium text-foreground mb-2">Consensus Layer</h3>
              <p className="text-sm text-muted-foreground">
                Coordinates validators, orders receipts, and maintains network state. 
                Provides finality guarantees.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border-l-2 border-primary/50">
              <h3 className="font-medium text-foreground mb-2">Data Availability Layer</h3>
              <p className="text-sm text-muted-foreground">
                Stores receipts and historical data. Enables verification without 
                requiring all nodes to store everything.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border-l-2 border-primary/30">
              <h3 className="font-medium text-foreground mb-2">Gateway Layer</h3>
              <p className="text-sm text-muted-foreground">
                RPC and API endpoints for external applications. Bridges between 
                clients and the core network.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Node Communication</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nodes communicate using libp2p for peer-to-peer networking with encrypted 
            channels. The gossip protocol ensures rapid propagation of jobs and receipts 
            across the network.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
