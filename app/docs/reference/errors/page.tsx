import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Error Codes | ComputeNet Docs",
  description: "Complete list of error codes and meanings",
};

export default function ErrorsPage() {
  return (
    <DocsLayout
      title="Error Codes"
      description="Complete list of error codes and meanings"
      href="/docs/reference/errors"
      status="planned"
      section="Reference"
      sectionHref="/docs/reference"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Error Code Reference</h2>
          <p className="text-muted-foreground leading-relaxed">
            Complete reference of error codes returned by the ComputeNet protocol, 
            nodes, and SDKs.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Planned Categories</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Network errors (connection, timeout, peer issues)
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Validation errors (invalid input, failed verification)
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Execution errors (timeout, resource limits)
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Consensus errors (quorum, finality issues)
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              API errors (rate limits, authentication)
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6 border-muted">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            Error code documentation will be published with SDK releases.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
