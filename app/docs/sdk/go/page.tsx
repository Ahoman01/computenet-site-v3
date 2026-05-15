import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Go SDK | ComputeNet Docs",
  description: "ComputeNet SDK for Go applications",
};

export default function GoSDKPage() {
  return (
    <DocsLayout
      title="Go SDK"
      description="ComputeNet SDK for Go applications"
      href="/docs/sdk/go"
      status="planned"
      section="SDKs"
      sectionHref="/docs/sdk"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Go SDK</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Go SDK will provide an idiomatic interface for ComputeNet, 
            suitable for high-performance backend services and infrastructure.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Planned Features</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Idiomatic Go error handling
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Context-based cancellation
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Zero external dependencies for core functionality
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              gRPC and HTTP client options
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6 border-muted">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            The Go SDK is planned for development after core SDKs are stable.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
