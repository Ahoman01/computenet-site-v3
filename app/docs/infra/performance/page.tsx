import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Performance | ComputeNet Docs",
  description: "Performance tuning and optimization",
};

export default function PerformancePage() {
  return (
    <DocsLayout
      title="Performance"
      description="Performance tuning and optimization"
      href="/docs/infra/performance"
      status="planned"
      section="Infrastructure"
      sectionHref="/docs/infra"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Performance Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            This guide covers performance tuning for validator nodes to maximize 
            throughput and minimize latency while maintaining reliability.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Planned Topics</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              CPU and memory optimization
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Storage I/O tuning
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Network latency reduction
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Proof generation optimization
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Benchmarking and profiling
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6 border-muted">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            Performance documentation will be published based on testnet benchmarks.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
