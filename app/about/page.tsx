"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Shield,
  Target,
  Users,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Code,
  GitBranch,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

const principles = [
  {
    title: "Verifiability First",
    description:
      "Every computation on ComputeNet produces a cryptographic receipt that can be independently verified. Trust is replaced by mathematical proof.",
    icon: Shield,
  },
  {
    title: "Decentralized by Design",
    description:
      "No single entity controls the network. Validators are distributed globally, ensuring censorship resistance and fault tolerance.",
    icon: Globe,
  },
  {
    title: "Minimal Trust Assumptions",
    description:
      "The protocol assumes adversarial conditions by default. Security guarantees hold even when most participants are malicious.",
    icon: Target,
  },
  {
    title: "Open and Permissionless",
    description:
      "Anyone can participate as a validator, submit compute jobs, or build on the protocol. No gatekeepers, no permission required.",
    icon: Users,
  },
];

const values = [
  {
    title: "Research-Driven",
    description:
      "We publish our research openly and build on peer-reviewed foundations. Theory informs implementation.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "We optimize for protocol longevity over short-term metrics. Infrastructure should outlast its creators.",
  },
  {
    title: "Community Ownership",
    description:
      "The protocol belongs to its participants. Governance transitions to the community at mainnet.",
  },
  {
    title: "Pragmatic Idealism",
    description:
      "We hold strong principles but make practical tradeoffs. Perfection is the enemy of progress.",
  },
];

const openDevelopment = [
  {
    icon: Code,
    title: "Open Source",
    description: "All protocol code is developed in the open under permissive licenses.",
  },
  {
    icon: GitBranch,
    title: "Public Development",
    description: "Protocol changes are proposed, discussed, and reviewed publicly.",
  },
  {
    icon: BookOpen,
    title: "Open Research",
    description: "Technical specifications and research notes are published openly.",
  },
  {
    icon: Users,
    title: "Community Contributions",
    description: "Contributions from independent researchers and developers are welcome.",
  },
];

export default function AboutPage() {
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
              About ComputeNet
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Building the Foundation for{" "}
              <span className="text-emerald-400">Trustless Compute</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ComputeNet is an experimental open protocol for verified useful computation. 
              We believe the future of computing is decentralized, verifiable, and
              accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Our Philosophy
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              We are building infrastructure for the long term. These principles
              guide every protocol decision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <principle.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                <Lightbulb className="w-3 h-3" />
                Vision
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                A World Where Compute is Verifiable
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Imagine a world where every computational result comes with a
                  proof of correctness. Where you don&apos;t have to trust the
                  cloud provider, the AI model, or the smart contract—you can
                  verify it yourself.
                </p>
                <p>
                  This is the future ComputeNet is exploring. A global network of
                  validators that can execute any computation and produce
                  cryptographic receipts proving the work was done correctly.
                </p>
                <p>
                  From machine learning inference to financial calculations,
                  from scientific simulations to zero-knowledge proofs—all
                  verified, all trustless, all permissionless.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-4 rounded-xl bg-card/30 border border-border/50"
                >
                  <h3 className="font-semibold text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Protocol Development Section (replaces Team) */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Open Protocol Development
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              ComputeNet is currently an experimental open-source protocol initiative. 
              Development is conducted openly, with all code, specifications, and research 
              published for community review and contribution.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {openDevelopment.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-xl bg-card/30 border border-border/50"
          >
            <p className="text-sm text-muted-foreground text-center">
              A formal team page is not published at this time. ComputeNet operates as an 
              open research initiative with contributions from independent researchers and developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Get Involved
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you want to run a validator on testnet, contribute to the codebase, 
              or explore the research—there are many ways to participate in ComputeNet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/validators"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
              >
                Explore Validators
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border hover:border-emerald-500/50 text-foreground font-medium rounded-lg transition-colors"
              >
                Read the Docs
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
