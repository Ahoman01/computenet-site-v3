"use client";

import { DocsLayout } from "@/components/docs-layout";

export default function MonitoringPage() {
  return (
    <DocsLayout
      title="Monitoring"
      description="Monitoring your validator node health and performance"
      href="/docs/validators/monitoring"
      section="Validators"
      sectionHref="/docs/validators"
      status="planned"
    >
      <h2>Overview</h2>
      <p>
        Effective monitoring is essential for maintaining a healthy validator node. 
        This guide covers the metrics, tools, and practices for monitoring your 
        ComputeNet validator.
      </p>

      <div className="not-prose my-8 p-6 rounded-xl bg-muted/30 border border-border">
        <h3 className="text-lg font-semibold text-muted-foreground mb-2">Planned Documentation</h3>
        <p className="text-sm text-muted-foreground">
          Detailed monitoring documentation will be available when validator tooling 
          is finalized. The information below outlines the planned approach.
        </p>
      </div>

      <h2>Key Metrics</h2>
      <p>
        Validators should monitor the following categories of metrics:
      </p>

      <h3>Node Health</h3>
      <ul>
        <li>Sync status and block height</li>
        <li>Peer connections and network health</li>
        <li>Memory and CPU utilization</li>
        <li>Disk I/O and storage capacity</li>
      </ul>

      <h3>Validator Performance</h3>
      <ul>
        <li>Jobs executed per epoch</li>
        <li>Proof generation latency</li>
        <li>Attestation inclusion rate</li>
        <li>Missed attestation count</li>
      </ul>

      <h3>Economic Metrics</h3>
      <ul>
        <li>Rewards earned</li>
        <li>Slashing events</li>
        <li>Stake balance</li>
      </ul>

      <h2>Monitoring Stack</h2>
      <p>
        The recommended monitoring stack will include:
      </p>
      <ul>
        <li><strong>Prometheus</strong> — Metrics collection and storage</li>
        <li><strong>Grafana</strong> — Visualization and dashboards</li>
        <li><strong>Alertmanager</strong> — Alert routing and notifications</li>
      </ul>

      <h2>Alerts</h2>
      <p>
        Critical alerts to configure:
      </p>
      <ul>
        <li>Node falling out of sync</li>
        <li>High missed attestation rate</li>
        <li>Resource exhaustion warnings</li>
        <li>Network connectivity issues</li>
        <li>Slashing conditions detected</li>
      </ul>

      <h2>Dashboards</h2>
      <p>
        Pre-built Grafana dashboards will be provided for:
      </p>
      <ul>
        <li>Node overview and health</li>
        <li>Validator performance</li>
        <li>Network statistics</li>
        <li>Economic metrics</li>
      </ul>
    </DocsLayout>
  );
}
