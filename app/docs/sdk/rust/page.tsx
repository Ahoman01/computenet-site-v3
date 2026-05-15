import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Rust SDK | ComputeNet Docs",
  description: "ComputeNet SDK for Rust applications",
};

export default function RustSDKPage() {
  return (
    <DocsLayout
      title="Rust SDK"
      description="ComputeNet SDK for Rust applications"
      href="/docs/sdk/rust"
      status="planned"
      section="SDKs"
      sectionHref="/docs/sdk"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Rust SDK</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Rust SDK will provide a safe, performant interface for ComputeNet, 
            suitable for systems programming and WASM targets.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Planned Features</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Async runtime agnostic (tokio, async-std)
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              no_std support for embedded use
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              WASM compilation target
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Zero-copy deserialization
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6 border-muted">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            The Rust SDK is planned for development after core SDKs are stable.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
