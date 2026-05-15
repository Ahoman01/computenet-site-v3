import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Python SDK | ComputeNet Docs",
  description: "ComputeNet SDK for Python applications",
};

export default function PythonSDKPage() {
  return (
    <DocsLayout
      title="Python SDK"
      description="ComputeNet SDK for Python applications"
      href="/docs/sdk/python"
      status="planned"
      section="SDKs"
      sectionHref="/docs/sdk"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Python SDK</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Python SDK will provide an async-first interface for ComputeNet, 
            suitable for backend services and data science workflows.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Planned Features</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Async/await support with asyncio
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Type hints for IDE support
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              NumPy/Pandas integration for data jobs
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Context managers for resource management
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6 border-muted">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            The Python SDK is planned for development after the JavaScript SDK is stable.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
