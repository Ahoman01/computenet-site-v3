"use client";

import { motion } from "framer-motion";
import {
  FileText,
  BookOpen,
  Users,
  ArrowRight,
  Cpu,
  Shield,
  Network,
  Scale,
  Fingerprint,
  RefreshCw,
  Activity,
} from "lucide-react";
import Link from "next/link";

const researchAreas = [
  {
    title: "Proof of Useful Compute",
    description:
      "Exploring cryptographic mechanisms for proving that computational work produces reusable, verifiable outputs.",
    icon: Cpu,
    status: "Active research",
  },
  {
    title: "Compute Receipt Verification",
    description:
      "Developing portable, tamper-proof artifacts that encode execution proofs for independent validation.",
    icon: FileText,
    status: "Active research",
  },
  {
    title: "Validator Coordination",
    description:
      "Designing consensus protocols for distributed validator networks with heterogeneous compute resources.",
    icon: Network,
    status: "Active research",
  },
  {
    title: "Decentralized Compute Markets",
    description:
      "Analyzing economic mechanisms and incentive structures for fair compute resource allocation.",
    icon: Scale,
    status: "Active research",
  },
  {
    title: "Sybil Resistance",
    description:
      "Investigating identity and stake-based mechanisms to prevent malicious validator proliferation.",
    icon: Shield,
    status: "Active research",
  },
  {
    title: "Reproducible Workloads",
    description:
      "Defining deterministic execution environments that enable independent result verification.",
    icon: RefreshCw,
    status: "Active research",
  },
];

const technicalNotes = [
  {
    title: "Compute Receipt Data Structures",
    description: "Technical specification for portable compute receipt formats and encoding schemes.",
    status: "Draft technical note planned",
  },
  {
    title: "Validator Selection Mechanisms",
    description: "Analysis of stake-weighted and reputation-based validator selection algorithms.",
    status: "Draft technical note planned",
  },
  {
    title: "Deterministic Execution Sandboxing",
    description: "Approaches to ensuring reproducible computation across heterogeneous validator hardware.",
    status: "Draft technical note planned",
  },
  {
    title: "Consensus Finality Guarantees",
    description: "Formal analysis of consensus termination and finality properties under adversarial conditions.",
    status: "Draft technical note planned",
  },
  {
    title: "Economic Attack Vectors",
    description: "Game-theoretic analysis of potential economic attacks and mitigation strategies.",
    status: "Draft technical note planned",
  },
  {
    title: "Cross-Shard Compute Verification",
    description: "Protocols for verifying computation that spans multiple network partitions.",
    status: "Draft technical note planned",
  },
];

const telemetryTopics = [
  {
    title: "Testnet Validator Metrics",
    description: "Real-time telemetry from active testnet validator nodes.",
    icon: Activity,
  },
  {
    title: "Receipt Generation Statistics",
    description: "Aggregate data on compute receipt generation and verification rates.",
    icon: FileText,
  },
  {
    title: "Consensus Round Analytics",
    description: "Performance metrics for consensus round completion and finality.",
    icon: Network,
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_50%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
              Research
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Advancing the Science of{" "}
              <span className="text-emerald-400">Verified Compute</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ComputeNet is a research-first protocol. Our work explores the theoretical 
              foundations and practical implementations of decentralized compute verification, 
              with all findings published openly to advance the field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Research Areas
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Our research spans cryptography, distributed systems, and economics to
              build a robust foundation for verified compute.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <area.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {area.description}
                </p>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                  {area.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Notes */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Technical Notes
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Internal technical documentation and specifications under development. 
              These notes will be published as they reach sufficient maturity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {technicalNotes.map((note, index) => (
              <motion.div
                key={note.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-5 rounded-xl bg-card/50 border border-border/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {note.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {note.description}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded whitespace-nowrap">
                    {note.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Testnet Telemetry */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Public Testnet Telemetry
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Real-time data from the ComputeNet testnet, providing transparency into 
              network performance and validator behavior during the research phase.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {telemetryTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                  <topic.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link
              href="/explorer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              View live telemetry in Explorer
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Explore the Protocol
            </h2>
            <p className="text-muted-foreground mb-8">
              Dive deeper into the technical foundations of ComputeNet through the 
              whitepaper and documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/whitepaper"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
              >
                Read Whitepaper
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border hover:border-emerald-500/50 text-foreground font-medium rounded-lg transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
