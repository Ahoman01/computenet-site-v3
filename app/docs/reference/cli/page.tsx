import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "CLI Reference | ComputeNet Docs",
  description: "Command-line interface documentation",
};

export default function CliPage() {
  return (
    <DocsLayout
      title="CLI Reference"
      description="Command-line interface documentation"
      href="/docs/reference/cli"
      status="draft"
      section="Reference"
      sectionHref="/docs/reference"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">ComputeNet CLI</h2>
          <p className="text-muted-foreground leading-relaxed">
            The ComputeNet CLI provides tools for node operation, job submission, 
            and network interaction from the command line.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Installation</h2>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
            <pre className="text-muted-foreground">
{`# Download and install
curl -L https://releases.computenet.io/cli/latest | sh

# Verify installation
computenet --version`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Commands</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-mono text-foreground mb-2">computenet node</h3>
              <p className="text-sm text-muted-foreground">Node management commands (start, stop, status)</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-mono text-foreground mb-2">computenet job</h3>
              <p className="text-sm text-muted-foreground">Submit and manage compute jobs</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-mono text-foreground mb-2">computenet receipt</h3>
              <p className="text-sm text-muted-foreground">View and verify compute receipts</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-mono text-foreground mb-2">computenet key</h3>
              <p className="text-sm text-muted-foreground">Key generation and management</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <h3 className="font-mono text-foreground mb-2">computenet config</h3>
              <p className="text-sm text-muted-foreground">Configuration management</p>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6 border-yellow-500/30">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">Draft</h2>
          <p className="text-muted-foreground">
            CLI is in development. Commands and options may change.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
