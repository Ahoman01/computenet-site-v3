"use client";

import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle2,
  Circle,
  Cpu,
  HardDrive,
  Network,
  Server,
} from "lucide-react";
import Link from "next/link";

const roadmapPhases = [
  {
    phase: "Research Preview",
    title: "Protocol Experimentation",
    status: "active",
    description: "Core protocol research, proof-of-concept implementations, and internal testing.",
    items: [
      { text: "Protocol specification drafts", done: true },
      { text: "Whitepaper development", done: true },
      { text: "Initial validator architecture", done: true },
      { text: "Compute receipt proof-of-concept", done: true },
    ],
  },
  {
    phase: "Public Testnet",
    title: "Open Network Testing",
    status: "upcoming",
    description: "Public testnet deployment for external validator participation and protocol validation.",
    items: [
      { text: "Testnet validator onboarding", done: false },
      { text: "Public compute receipt generation", done: false },
      { text: "Consensus testing at scale", done: false },
      { text: "SDK and tooling preview", done: false },
    ],
  },
  {
    phase: "Validator Documentation",
    title: "Operator Guides",
    status: "upcoming",
    description: "Comprehensive documentation for running and maintaining validator infrastructure.",
    items: [
      { text: "Hardware setup guides", done: false },
      { text: "Software configuration docs", done: false },
      { text: "Monitoring and alerting", done: false },
      { text: "Security best practices", done: false },
    ],
  },
  {
    phase: "Open-Source Release Candidate",
    title: "Code Publication",
    status: "upcoming",
    description: "Full open-source release of validator software and protocol implementations.",
    items: [
      { text: "Core protocol open-source", done: false },
      { text: "Validator client release", done: false },
      { text: "SDK stable release", done: false },
      { text: "Developer documentation", done: false },
    ],
  },
  {
    phase: "Genesis Candidate",
    title: "Pre-Mainnet Preparation",
    status: "upcoming",
    description: "Final preparation phase before mainnet launch, including security audits and genesis validator coordination.",
    items: [
      { text: "Security audit completion", done: false },
      { text: "Genesis validator coordination", done: false },
      { text: "Final protocol parameters", done: false },
      { text: "Network stress testing", done: false },
    ],
  },
  {
    phase: "Mainnet Candidate",
    title: "Network Launch Readiness",
    status: "upcoming",
    description: "Final readiness assessment and mainnet genesis block preparation.",
    items: [
      { text: "Genesis block preparation", done: false },
      { text: "Validator set finalization", done: false },
      { text: "Mainnet deployment", done: false },
      { text: "Decentralized governance activation", done: false },
    ],
  },
];

const genesisRequirements = [
  {
    title: "Hardware Expectations",
    icon: Server,
    items: [
      "Modern multi-core CPU",
      "Adequate RAM for workload execution",
      "Fast storage (SSD recommended)",
      "Reliable network connectivity",
    ],
    note: "Final specifications will be published during Public Testnet phase.",
  },
  {
    title: "Technical Requirements",
    icon: Cpu,
    items: [
      "Linux server environment",
      "Static IP address or reliable DNS",
      "24/7 operation capability",
      "Monitoring infrastructure",
    ],
    note: "Detailed setup guides will be provided in documentation.",
  },
  {
    title: "Participation Requirements",
    icon: Network,
    items: [
      "Testnet participation recommended",
      "Familiarity with validator operations",
      "Commitment to network security",
      "Community engagement",
    ],
    note: "Genesis validator selection criteria will be announced.",
  },
];

export default function GenesisPage() {
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
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
              Genesis Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Genesis Candidate{" "}
              <span className="text-emerald-400">Roadmap</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The path from research preview to mainnet genesis. ComputeNet is 
              currently in the Research Preview phase, with subsequent phases 
              to be announced as development progresses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/validators"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
              >
                Learn About Validators
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

      {/* Current Status */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-emerald-400">Current Phase</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Research Preview</h3>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              ComputeNet is currently in research preview mode. The network is experimental, 
              non-economic, and focused on protocol development and validation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Development Roadmap
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              The roadmap outlines major milestones on the path to mainnet. Specific 
              timelines will be announced as each phase approaches.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border/50" />

            <div className="space-y-8">
              {roadmapPhases.map((milestone, index) => (
                <motion.div
                  key={milestone.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-background z-10">
                    {milestone.status === "active" ? (
                      <div className="w-full h-full rounded-full bg-emerald-500 animate-pulse" />
                    ) : (
                      <div className="w-full h-full rounded-full bg-muted" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`p-6 rounded-xl bg-card/50 border transition-all duration-300 ${
                      milestone.status === "active"
                        ? "border-emerald-500/50"
                        : "border-border/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded">
                        {milestone.phase}
                      </span>
                      {milestone.status === "active" && (
                        <span className="px-2 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {milestone.description}
                    </p>
                    <ul className="space-y-2">
                      {milestone.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                        >
                          {item.done ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                          )}
                          <span
                            className={
                              item.done
                                ? "text-muted-foreground"
                                : "text-foreground"
                            }
                          >
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Genesis Validator Requirements Preview */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Genesis Validator Expectations
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              While final requirements will be published closer to genesis, the following 
              provides a preview of what genesis validators should expect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {genesisRequirements.map((req, index) => (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card/50 border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                  <req.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {req.title}
                </h3>
                <ul className="space-y-3 mb-4">
                  {req.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Circle className="w-3 h-3 mt-1.5 shrink-0 text-emerald-400/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground/70 italic">
                  {req.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-card/50 border border-border/50 text-center">
              <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Stay Informed
              </h2>
              <p className="text-muted-foreground mb-6">
                Genesis validator applications are not yet open. Follow the project 
                to receive updates on testnet participation opportunities and 
                genesis validator selection criteria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
                >
                  Read Documentation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/validators"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border hover:border-emerald-500/50 text-foreground font-medium rounded-lg transition-colors"
                >
                  Validator Overview
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
