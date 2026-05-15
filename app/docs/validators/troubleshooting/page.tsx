"use client";

import { DocsLayout } from "@/components/docs-layout";

export default function TroubleshootingPage() {
  return (
    <DocsLayout
      title="Troubleshooting"
      description="Common issues and their solutions"
      href="/docs/validators/troubleshooting"
      section="Validators"
      sectionHref="/docs/validators"
      status="planned"
    >
      <h2>Overview</h2>
      <p>
        This guide covers common issues encountered when running a ComputeNet 
        validator and their solutions.
      </p>

      <div className="not-prose my-8 p-6 rounded-xl bg-muted/30 border border-border">
        <h3 className="text-lg font-semibold text-muted-foreground mb-2">Planned Documentation</h3>
        <p className="text-sm text-muted-foreground">
          Comprehensive troubleshooting documentation will be developed based on 
          testnet operational experience.
        </p>
      </div>

      <h2>Common Issues</h2>
      <p>
        The following categories of issues are commonly encountered:
      </p>

      <h3>Sync Issues</h3>
      <ul>
        <li>Node stuck syncing</li>
        <li>Peer discovery failures</li>
        <li>Chain reorganization handling</li>
      </ul>

      <h3>Performance Issues</h3>
      <ul>
        <li>High proof generation latency</li>
        <li>Memory exhaustion</li>
        <li>Disk I/O bottlenecks</li>
      </ul>

      <h3>Network Issues</h3>
      <ul>
        <li>Connection timeouts</li>
        <li>NAT traversal problems</li>
        <li>Firewall configuration</li>
      </ul>

      <h3>Consensus Issues</h3>
      <ul>
        <li>Missed attestations</li>
        <li>Invalid proof rejections</li>
        <li>Slashing events</li>
      </ul>

      <h2>Diagnostic Commands</h2>
      <p>
        Useful commands for diagnosing issues (planned):
      </p>

      <div className="not-prose my-8">
        <div className="rounded-xl bg-[#0d1117] border border-border/50 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-2 text-xs text-muted-foreground">terminal</span>
          </div>
          <pre className="p-4 text-sm overflow-x-auto">
            <code className="text-emerald-300/90 font-mono">{`# Check node status
computenet status

# View sync progress
computenet sync status

# Check peer connections
computenet peers list

# View recent logs
computenet logs --tail 100

# Diagnostic report
computenet debug report`}</code>
          </pre>
        </div>
      </div>

      <h2>Getting Help</h2>
      <p>
        If you encounter issues not covered here:
      </p>
      <ul>
        <li>Check the GitHub issues for known problems</li>
        <li>Join the community Discord for support</li>
        <li>Review validator announcements for known issues</li>
      </ul>
    </DocsLayout>
  );
}
