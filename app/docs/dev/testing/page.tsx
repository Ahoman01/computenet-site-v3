import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Testing Guide | ComputeNet Docs",
  description: "Testing your ComputeNet integrations",
};

export default function TestingPage() {
  return (
    <DocsLayout
      title="Testing Guide"
      description="Testing your ComputeNet integrations"
      href="/docs/dev/testing"
      status="planned"
      section="Development"
      sectionHref="/docs/dev"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Testing Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            This guide covers testing strategies for applications that integrate with 
            ComputeNet, including local development, testnet usage, and mocking.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Planned Topics</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Local development environment setup
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Mock SDK for unit testing
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Testnet integration testing
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Receipt verification testing
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Error handling and edge cases
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6 border-muted">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            Detailed testing documentation will be published alongside SDK releases.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
