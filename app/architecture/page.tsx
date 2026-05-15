"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ChevronRight, Shield, Cpu, Box, Network, Binary, 
  Eye, Radio, Database, ArrowRight, CheckCircle2,
  Workflow, Layers, Globe, Lock, Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"

const components = [
  {
    id: "validators",
    title: "Validator Nodes",
    icon: Shield,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Validators receive compute receipts, verify deterministic outputs, attest validity, and participate in consensus.",
    details: [
      "Receipt validation",
      "Output verification",
      "Validity attestation",
      "Consensus participation",
      "FastAPI-based services",
    ],
  },
  {
    id: "runner",
    title: "Deterministic Runner",
    icon: Cpu,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    description: "The execution layer ensures workloads produce reproducible outputs with stable execution and predictable results.",
    details: [
      "Stable execution",
      "Predictable outputs",
      "Reproducible hashing",
      "Deterministic receipts",
      "Workload isolation",
    ],
  },
  {
    id: "receipts",
    title: "Receipt Engine",
    icon: Box,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    description: "Execution results are transformed into structured receipts containing job metadata and proof payloads.",
    details: [
      "Job identifiers",
      "Manifest hashes",
      "Execution hashes",
      "Validator metadata",
      "Timestamps & proofs",
    ],
  },
  {
    id: "proofs",
    title: "Proof Engine",
    icon: Binary,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    description: "Verifies compute validity through local deterministic proofs and placeholder ZK integration layers.",
    details: [
      "Local proofs",
      "ZK placeholders",
      "Aggregate structures",
      "Future zkVM",
      "Hardware attestation",
    ],
  },
  {
    id: "consensus",
    title: "Consensus Layer",
    icon: Network,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
    description: "Validators independently verify receipts, cast weighted attestations, and finalize accepted compute.",
    details: [
      "Independent verification",
      "Weighted attestations",
      "Consensus ratios",
      "Finalization",
      "Future BFT research",
    ],
  },
  {
    id: "telemetry",
    title: "Telemetry Systems",
    icon: Eye,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Protocol telemetry for validator uptime, peer liveness, receipt activity, and consensus reports.",
    details: [
      "Validator uptime",
      "Peer liveness",
      "Receipt activity",
      "Consensus reports",
      "Runtime metrics",
    ],
  },
  {
    id: "peers",
    title: "Peer Registry",
    icon: Radio,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    description: "Validators maintain peer registries with bootstrap lists, gossip sync, and liveness scoring.",
    details: [
      "Bootstrap peers",
      "Gossip synchronization",
      "Liveness scoring",
      "Trust weighting",
      "Discovery protocols",
    ],
  },
  {
    id: "observer",
    title: "Public Observer",
    icon: Globe,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    description: "Public-facing infrastructure providing readable telemetry and bootstrap peer visibility.",
    details: [
      "Public telemetry",
      "Peer visibility",
      "Genesis candidates",
      "Explorer access",
      "Read-only mode",
    ],
  },
]

const pipelineSteps = [
  { title: "Job Manifest", desc: "Deterministic execution blueprint", icon: Database },
  { title: "Execution", desc: "Reproducible workload processing", icon: Cpu },
  { title: "Hashing", desc: "Immutable output fingerprint", icon: Binary },
  { title: "Receipt", desc: "Portable evidence artifact", icon: Box },
  { title: "Validation", desc: "Independent re-execution", icon: Shield },
  { title: "Consensus", desc: "Distributed agreement", icon: CheckCircle2 },
]

export default function ArchitecturePage() {
  return (
      <main className="pt-16">
        {/* Header */}
        <section className="border-b border-border/50 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span>Architecture</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">System Architecture</h1>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                ComputeNet is built on a modular architecture where each component can evolve 
                independently while preserving protocol interoperability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-bold mb-4">High-Level Architecture</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The protocol consists of validator nodes, deterministic compute runners, proof engines, 
                receipt engines, consensus coordinators, and telemetry systems.
              </p>
            </motion.div>

            {/* Visual Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-8 mb-16"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Compute Input", icon: Database, color: "text-muted-foreground" },
                  { label: "Execution", icon: Cpu, color: "text-chart-2" },
                  { label: "Verification", icon: Shield, color: "text-primary" },
                  { label: "Consensus", icon: CheckCircle2, color: "text-chart-4" },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="relative">
                      <div className="flex flex-col items-center p-4 rounded-xl bg-secondary/50">
                        <div className={`p-3 rounded-lg bg-background/50 ${item.color} mb-3`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      {index < 3 && (
                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="border-t border-border/50 pt-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm mb-2">
                      <Layers className="w-4 h-4" />
                      Layer 1
                    </div>
                    <p className="text-sm text-muted-foreground">Deterministic Execution</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 text-chart-2 text-sm mb-2">
                      <Layers className="w-4 h-4" />
                      Layer 2
                    </div>
                    <p className="text-sm text-muted-foreground">Receipt Generation</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-4/10 text-chart-4 text-sm mb-2">
                      <Layers className="w-4 h-4" />
                      Layer 3
                    </div>
                    <p className="text-sm text-muted-foreground">Validator Consensus</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Core Components */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Core Components</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {components.map((component, index) => {
                  const Icon = component.icon
                  return (
                    <motion.div
                      key={component.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="glass-panel rounded-xl p-5 hover:border-primary/30 transition-colors group"
                    >
                      <div className={`p-2 rounded-lg ${component.bgColor} w-fit mb-3`}>
                        <Icon className={`w-5 h-5 ${component.color}`} />
                      </div>
                      <h3 className="font-semibold mb-2">{component.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {component.description}
                      </p>
                      <ul className="space-y-1">
                        {component.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Verification Pipeline */}
        <section className="py-16 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-sm mb-4">
                <Workflow className="w-4 h-4 text-primary" />
                <span>Verification Flow</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Verification Pipeline</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The protocol approaches verification through a layered pipeline where verification 
                is designed to be cheaper than execution.
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {pipelineSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="glass-panel rounded-xl p-4 text-center hover:border-primary/30 transition-colors h-full relative z-10 bg-background">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-medium text-sm mb-1">{step.title}</h4>
                        <p className="text-xs text-muted-foreground">{step.desc}</p>
                      </div>
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center text-xs font-mono text-muted-foreground z-20">
                        {index + 1}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Data Flow */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Data Flow Architecture</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The protocol processes compute through a structured flow: manifests define workloads, 
                  runners execute deterministically, receipts capture evidence, and validators reach consensus.
                </p>
                <div className="space-y-4">
                  {[
                    { label: "Input Layer", desc: "Job manifests define deterministic workloads" },
                    { label: "Execution Layer", desc: "Reproducible compute with stable outputs" },
                    { label: "Evidence Layer", desc: "Receipts capture execution proof" },
                    { label: "Consensus Layer", desc: "Validators attest and finalize" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-mono text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{item.label}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel rounded-xl p-6"
              >
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">{">"}</span>
                    <span>// Compute flow visualization</span>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50 space-y-2">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-muted-foreground" />
                      <span>manifest.json</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <Cpu className="w-4 h-4 text-chart-2" />
                      <span className="text-chart-2">deterministic_runner</span>
                    </div>
                    <div className="flex items-center gap-2 pl-12">
                      <Binary className="w-4 h-4 text-chart-4" />
                      <span className="text-chart-4">execution_hash</span>
                    </div>
                    <div className="flex items-center gap-2 pl-18">
                      <Box className="w-4 h-4 text-primary" />
                      <span className="text-primary">compute_receipt</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50 space-y-2">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>validators[]</span>
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <span className="text-muted-foreground">verify(receipt)</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      <span className="text-primary">attest()</span>
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <span className="text-muted-foreground">consensus_ratio:</span>
                      <span className="text-primary">1.00</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Future Research */}
        <section className="py-16 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-3/10 text-chart-3 text-sm mb-4">
                    <Lock className="w-4 h-4" />
                    <span>Future Research</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Long-Term Architecture Goals</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    The architecture is designed to evolve. Future research directions may include 
                    zkVM integrations, recursive proof systems, hardware attestation, and trusted 
                    execution environments.
                  </p>
                  <Button asChild className="gap-2">
                    <Link href="/research">
                      <Zap className="w-4 h-4" />
                      View Research
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "zkVM Integration", status: "Research" },
                    { label: "Recursive Proofs", status: "Planned" },
                    { label: "Hardware Attestation", status: "Exploration" },
                    { label: "Async BFT", status: "Research" },
                  ].map((item) => (
                    <div key={item.label} className="glass-panel rounded-lg p-4">
                      <p className="font-medium text-sm mb-1">{item.label}</p>
                      <span className="text-xs text-muted-foreground">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
  )
}
