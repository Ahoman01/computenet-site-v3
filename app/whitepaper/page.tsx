"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ChevronRight, Download, Share2, Copy, Check,
  FileText, BookOpen, Box, Shield, Cpu, Network,
  Binary, Lock, Eye, Globe, AlertTriangle
} from "lucide-react"
import { Button } from "@/components/ui/button"

const sections = [
  { id: "abstract", title: "Abstract", icon: FileText },
  { id: "introduction", title: "1. Introduction", icon: BookOpen },
  { id: "philosophy", title: "2. Protocol Philosophy", icon: Lock },
  { id: "architecture", title: "3. System Architecture", icon: Box },
  { id: "pouc", title: "4. Proof of Useful Compute", icon: Cpu },
  { id: "verification", title: "4A. Verification Pipeline", icon: Binary },
  { id: "validators", title: "5. Validator Network", icon: Shield },
  { id: "consensus", title: "6. Consensus Model", icon: Network },
  { id: "receipts", title: "7. Compute Receipts", icon: FileText },
  { id: "security", title: "8. Security Model", icon: Lock },
  { id: "telemetry", title: "9. Telemetry", icon: Eye },
  { id: "genesis", title: "10. Genesis Candidate", icon: Globe },
  { id: "status", title: "11. Development Status", icon: AlertTriangle },
  { id: "vision", title: "12. Long-Term Vision", icon: Globe },
  { id: "ethos", title: "13. Protocol Ethos", icon: Lock },
  { id: "disclaimer", title: "14. Disclaimer", icon: AlertTriangle },
]

export default function WhitepaperPage() {
  const [activeSection, setActiveSection] = useState("abstract")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
      <main className="pt-16">
        {/* Header */}
        <section className="border-b border-border/50 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
            >
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span>Whitepaper</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">ComputeNet Whitepaper</h1>
                <p className="text-muted-foreground">Research Preview v1.0 — An Open Protocol for Verified Useful Compute</p>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <Button variant="outline" size="sm" className="gap-2" onClick={handleCopyLink}>
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied ? "Copied" : "Copy Link"}
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                  <Button 
                    size="sm" 
                    className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a href="/whitepaper/ComputeNet_Whitepaper_V5_1.pdf" download="ComputeNet_Whitepaper_V5_1.pdf">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>Version: Research Preview v1.0</span>
                  <span className="hidden sm:inline">|</span>
                  <span className="hidden sm:inline">Format: PDF</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24 space-y-1 max-h-[calc(100vh-8rem)] overflow-y-auto">
                <p className="text-sm font-medium mb-4">Contents</p>
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeSection === section.id
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{section.title}</span>
                    </a>
                  )
                })}
              </nav>
            </aside>

            {/* Content */}
            <article className="prose prose-invert max-w-none">
              <section id="abstract" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Abstract</h2>
                <div className="glass-panel rounded-xl p-6 mb-6">
                  <p className="text-muted-foreground leading-relaxed m-0">
                    ComputeNet is an experimental open protocol designed to transform compute into a verifiable, 
                    decentralized, utility-backed network resource. Where Bitcoin introduced decentralized monetary 
                    consensus and Ethereum introduced decentralized execution, ComputeNet explores a third primitive: 
                    <strong className="text-foreground"> decentralized verification of useful compute.</strong>
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The protocol proposes a Proof of Useful Compute (PoUC) model in which computational work 
                  is only considered valid when the task is deterministic, the output is reproducible, 
                  the execution can be independently verified, receipts can be cryptographically attested, 
                  and validators can reach consensus on execution validity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  ComputeNet is being developed under a research-first framework with no ICO, no premine, 
                  no founder allocation, no custodial promises, and no investment guarantees. The protocol 
                  is intended to follow a Bitcoin-style fair-launch philosophy where network participation 
                  emerges organically through open-source infrastructure and validator participation.
                </p>
              </section>

              <section id="introduction" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">1. Introduction</h2>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">1.1 The Compute Problem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Artificial intelligence, simulation systems, cryptographic verification, scientific modeling, 
                  rendering, and inference workloads are rapidly increasing global demand for compute. Modern 
                  compute markets suffer from several structural problems:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Centralized cloud dependency</li>
                  <li>Opaque compute pricing</li>
                  <li>Unverifiable execution</li>
                  <li>Fragmented idle compute</li>
                  <li>Weak trust guarantees</li>
                  <li>Poor interoperability</li>
                  <li>Inefficient resource coordination</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  At the same time, existing proof-of-work systems consume energy while producing 
                  computational outputs with little reusable utility. ComputeNet explores an alternative model: 
                  <strong className="text-foreground"> computational work should produce reusable value.</strong>
                </p>

                <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">1.2 Core Thesis</h3>
                <div className="glass-panel rounded-xl p-6 border-l-4 border-primary">
                  <p className="text-lg font-medium text-foreground m-0">
                    Useful computation can become a native protocol primitive.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Instead of hashing purely for difficulty competition, nodes may eventually compete by 
                  executing deterministic workloads, generating verifiable outputs, producing cryptographic 
                  execution receipts, and participating in decentralized validation.
                </p>
              </section>

              <section id="philosophy" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">2. Protocol Philosophy</h2>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">2.1 Research-First Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ComputeNet is currently operating in <strong className="text-foreground">Research Preview / Private Testnet mode</strong>. 
                  The current network is non-economic, non-custodial, non-commercial, and experimental.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  There is currently no public token, no mining, no public rewards, no economic issuance, 
                  and no investment mechanism. The purpose of the current network phase is protocol experimentation, 
                  validator architecture testing, compute receipt verification, consensus validation, and 
                  distributed systems research.
                </p>

                <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">2.2 Fair Launch Principles</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "No Premine", desc: "No founder allocation or hidden supply" },
                    { title: "No ICO", desc: "No public fundraising through token sales" },
                    { title: "No Central Custody", desc: "Protocol operates without custodial control" },
                    { title: "Open Participation", desc: "Validator participation through open protocol rules" },
                    { title: "Utility-First", desc: "Prioritize useful computation over speculation" },
                  ].map((item) => (
                    <div key={item.title} className="glass-panel rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground m-0">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="architecture" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">3. System Architecture</h2>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">3.1 High-Level Architecture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ComputeNet currently consists of validator nodes, deterministic compute runners, proof engines, 
                  receipt engines, consensus coordinators, telemetry systems, peer registries, and public observer 
                  infrastructure. The architecture is intentionally modular — each component can evolve independently 
                  while preserving protocol interoperability.
                </p>

                <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">3.2 Core Components</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Validator Nodes",
                      desc: "Validators receive compute receipts, verify deterministic outputs, attest validity, and participate in consensus. Currently operating through FastAPI-based services.",
                    },
                    {
                      title: "Deterministic Runner",
                      desc: "The deterministic execution layer ensures workloads produce reproducible outputs with stable execution, predictable outputs, reproducible hashing, and deterministic receipt generation.",
                    },
                    {
                      title: "Compute Receipt Engine",
                      desc: "Execution results are transformed into structured receipts containing job identifiers, manifest hashes, execution hashes, validator metadata, timestamps, and proof metadata.",
                    },
                    {
                      title: "Proof Engine",
                      desc: "The Proof Engine verifies compute validity. Current research implementations include local deterministic proofs, placeholder ZK proof integration layers, and aggregate proof structures.",
                    },
                    {
                      title: "Consensus Layer",
                      desc: "Validators independently verify receipts, cast weighted attestations, determine consensus ratios, and finalize accepted compute.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="glass-panel rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground m-0">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="pouc" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">4. Proof of Useful Compute (PoUC)</h2>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">4.1 Definition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proof of Useful Compute (PoUC) is the conceptual foundation of ComputeNet. In PoUC, 
                  computational work must produce reusable outputs, outputs must be independently verifiable, 
                  validators must be able to reproduce execution, and receipts must be consensus-verifiable.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The protocol does not currently claim to have solved decentralized useful compute fully. 
                  Instead, ComputeNet should be viewed as an evolving research framework attempting to solve 
                  it incrementally.
                </p>

                <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">4.2 Desired Properties</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "Determinism", desc: "Inputs should produce reproducible outputs" },
                    { title: "Verifiability", desc: "Independent validators should verify execution validity" },
                    { title: "Replay Resistance", desc: "Receipts should resist duplication or manipulation" },
                    { title: "Fraud Detection", desc: "Dishonest validators should be identifiable" },
                    { title: "Cost Efficiency", desc: "Verification should remain cheaper than generation" },
                    { title: "Utility Production", desc: "Network should generate reusable computational value" },
                  ].map((item) => (
                    <div key={item.title} className="glass-panel rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground m-0">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="verification" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">4A. Verification Pipeline</h2>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">4A.1 Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The central challenge ComputeNet attempts to address is not simply distributed computation. 
                  The deeper challenge is: how can a decentralized network verify that useful computation was 
                  genuinely executed correctly?
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  ComputeNet approaches this problem through a layered verification pipeline combining 
                  deterministic execution, reproducible workloads, execution hashing, portable compute receipts, 
                  validator re-execution, consensus attestations, and aggregate proof formation.
                </p>

                <div className="my-8 space-y-4">
                  {[
                    { step: "4A.2", title: "Job Manifest Creation", desc: "Every compute task begins as a deterministic job manifest containing job identifiers, execution targets, workload definitions, expected inputs, execution parameters, and verification modes." },
                    { step: "4A.3", title: "Deterministic Execution", desc: "The deterministic runner executes workloads under reproducible constraints to ensure identical inputs produce identical outputs." },
                    { step: "4A.4", title: "Execution Hashing", desc: "After execution completes, outputs are hashed to create an immutable execution fingerprint and reproducibility anchor." },
                    { step: "4A.5", title: "Compute Receipt Construction", desc: "Execution metadata is transformed into a structured compute receipt containing manifest hashes, execution hashes, validator IDs, timestamps, and proof payload references." },
                    { step: "4A.6", title: "Validator Re-Execution", desc: "Validators independently retrieve manifests, rerun workloads, regenerate outputs, and compare execution hashes." },
                    { step: "4A.7", title: "Consensus Attestation", desc: "Validators cast attestations, acceptance ratios are aggregated, and consensus thresholds determine finalization." },
                  ].map((item, index) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-mono font-semibold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.step} {item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="validators" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">5. Validator Network</h2>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">5.1 Validator Roles</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Validators serve as the trust infrastructure of ComputeNet. Their responsibilities include 
                  receipt validation, consensus participation, peer propagation, uptime reporting, and fraud detection.
                </p>

                <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">5.2 Validator Topology</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The current architecture is evolving from single-machine simulated validators to multi-VPS 
                  distributed validators. Future topology goals include geographically distributed validators, 
                  independent operators, peer discovery, resilient gossip propagation, and autonomous recovery.
                </p>
              </section>

              <section id="consensus" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">6. Consensus Model</h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  Current consensus is validator-attestation based. Validators verify receipts, cast attestations, 
                  aggregate acceptance ratios, and finalize valid execution bundles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Future consensus research areas may include asynchronous BFT, validator reputation systems, 
                  adaptive verification thresholds, probabilistic sampling, and challenge-response dispute windows. 
                  The long-term objective is decentralized compute validity without centralized trust.
                </p>
              </section>

              <section id="receipts" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">7. Compute Receipts</h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  Compute receipts are the foundational truth artifact within ComputeNet. A receipt acts as 
                  proof of execution, execution identity, validator evidence, and consensus reference.
                </p>
                <div className="glass-panel rounded-xl p-6 font-mono text-sm my-6">
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-muted-foreground">job_id:</span><span>cnet_job_8f3a9b2c4d5e6f7a</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">manifest_hash:</span><span>0x7a8b9c0d...</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">execution_hash:</span><span>0x3e4f5a6b...</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">validator_id:</span><span>validator-alpha</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">timestamp:</span><span>2024-01-15T14:32:18Z</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">status:</span><span className="text-primary">verified</span></div>
                  </div>
                </div>
              </section>

              <section id="security" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">8. Security Model</h2>
                
                <div className="glass-panel rounded-xl p-6 border-l-4 border-destructive/50 mb-6">
                  <p className="text-muted-foreground m-0">
                    ComputeNet is currently experimental. The network has not undergone formal audits, 
                    adversarial stress testing, or production-grade security certification.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-foreground">Threat Areas</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Validator collusion</li>
                  <li>Replay attacks</li>
                  <li>Receipt forgery</li>
                  <li>Fake compute outputs</li>
                  <li>Sybil attacks</li>
                  <li>Peer poisoning</li>
                  <li>Denial-of-service attacks</li>
                  <li>Consensus manipulation</li>
                </ul>
              </section>

              <section id="telemetry" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">9. Telemetry and Observability</h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  ComputeNet includes telemetry systems for validator uptime, peer liveness, receipt activity, 
                  consensus reports, and runtime compute jobs. The current public-facing infrastructure operates 
                  in Public Observer Mode, allowing public-readable telemetry and bootstrap peer visibility 
                  without public mining or economic participation.
                </p>
              </section>

              <section id="genesis" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">10. Genesis Candidate</h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  ComputeNet intends to treat genesis as a protocol freeze event. Genesis should only occur 
                  after multi-node validation, adversarial testing, consensus stability, deterministic compute 
                  verification, public documentation, and reproducible snapshots.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Planned genesis principles include open-source launch, no premine, no ICO, no founder allocation, 
                  transparent issuance rules, and public reproducibility.
                </p>
              </section>

              <section id="status" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">11. Current Development Status</h2>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">Current Capabilities</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Live validator services</li>
                  <li>Systemd daemonization</li>
                  <li>Compute receipt generation</li>
                  <li>Deterministic execution</li>
                  <li>Validator telemetry</li>
                  <li>Public observer infrastructure</li>
                  <li>Bootstrap peer manifests</li>
                  <li>Genesis candidate manifests</li>
                  <li>Private testnet explorer</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Current Limitations</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Limited validator count</li>
                  <li>Early-stage peer discovery</li>
                  <li>Placeholder proof systems</li>
                  <li>No production-grade security review</li>
                  <li>Limited compute workload diversity</li>
                  <li>No external validator mesh yet</li>
                </ul>
              </section>

              <section id="vision" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">12. Long-Term Vision</h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  The long-term objective of ComputeNet is a decentralized protocol for verifiable useful compute. 
                  Potential future use cases may include AI inference verification, distributed scientific workloads, 
                  rendering networks, simulation markets, decentralized benchmarking, verifiable agent execution, 
                  and cryptographic proof marketplaces.
                </p>
                
                <h3 className="text-xl font-semibold mb-4 mt-8 text-foreground">Open Research Questions</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>How should useful compute be measured?</li>
                  <li>How should fraud be penalized?</li>
                  <li>How can deterministic execution scale?</li>
                  <li>What workloads qualify as useful?</li>
                  <li>How should validator incentives function?</li>
                  <li>Can useful compute remain decentralized?</li>
                  <li>Can verification remain cheaper than execution?</li>
                </ul>
              </section>

              <section id="ethos" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">13. Protocol Ethos</h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  ComputeNet is being developed around several foundational ideas:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                  <li>Openness over exclusivity</li>
                  <li>Utility over speculation</li>
                  <li>Experimentation over marketing</li>
                  <li>Infrastructure over hype</li>
                  <li>Decentralization over control</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The project should be understood primarily as a protocol research initiative exploring 
                  verifiable useful compute.
                </p>
              </section>

              <section id="disclaimer" className="scroll-mt-24 mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">14. Disclaimer</h2>
                
                <div className="glass-panel rounded-xl p-6 border-l-4 border-destructive/50">
                  <p className="text-muted-foreground leading-relaxed m-0">
                    ComputeNet is experimental software. The protocol is currently in research-preview/private-testnet mode. 
                    Nothing in this document constitutes investment advice, an offer of securities, financial guarantees, 
                    economic promises, mining guarantees, or token issuance commitments. Participation in future testnets 
                    may involve technical, operational, and security risks. The protocol may change substantially prior 
                    to any potential public launch.
                  </p>
                </div>
              </section>

              {/* Conclusion */}
              <section className="scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Conclusion</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ComputeNet explores a simple but ambitious idea: computation itself may eventually become 
                  a verifiable decentralized protocol primitive. The current network remains early-stage, 
                  experimental, and intentionally limited.
                </p>
                <div className="glass-panel rounded-xl p-6 my-6 border-l-4 border-primary">
                  <p className="text-foreground font-medium m-0">
                    The long-term research direction is clear: useful compute, deterministic verification, 
                    decentralized consensus, reproducible execution, and open participation.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Whether such a system can scale globally remains an open question. ComputeNet exists to 
                  explore that question openly.
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>
  )
}
