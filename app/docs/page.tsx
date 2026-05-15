"use client";

import { motion } from "framer-motion";
import {
  Book,
  Code,
  Terminal,
  Cpu,
  Shield,
  Zap,
  ArrowRight,
  Search,
  ChevronRight,
  FileCode,
  Server,
  Key,
  Database,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const quickLinks = [
  {
    title: "Core Concepts",
    description: "Understand the fundamentals of verified compute",
    icon: Book,
    href: "/docs/core-concepts",
    color: "emerald",
  },
  {
    title: "Run a Validator",
    description: "Set up and operate a validator node on testnet",
    icon: Shield,
    href: "/docs/validators",
    color: "blue",
  },
  {
    title: "Build on ComputeNet",
    description: "Submit jobs and verify results programmatically",
    icon: Code,
    href: "/docs/development",
    color: "purple",
  },
  {
    title: "CLI Reference",
    description: "Command-line tools for node operators and developers",
    icon: Terminal,
    href: "/docs/reference/cli",
    color: "orange",
  },
];

const sections = [
  {
    title: "Core Concepts",
    icon: Cpu,
    href: "/docs/core-concepts",
    items: [
      { title: "What is ComputeNet?", href: "/docs/concepts/what-is-computenet" },
      { title: "Compute Receipts", href: "/docs/concepts/compute-receipts" },
      { title: "Verification Protocol", href: "/docs/concepts/verification-protocol" },
      { title: "Network Topology", href: "/docs/concepts/network-topology" },
      { title: "Consensus Mechanism", href: "/docs/concepts/consensus" },
    ],
  },
  {
    title: "Validators",
    icon: Shield,
    href: "/docs/validators",
    items: [
      { title: "Running a Validator", href: "/docs/validators/setup" },
      { title: "Hardware Requirements", href: "/docs/validators/requirements" },
      { title: "Monitoring & Alerts", href: "/docs/validators/monitoring" },
      { title: "Troubleshooting", href: "/docs/validators/troubleshooting" },
    ],
  },
  {
    title: "Development",
    icon: FileCode,
    href: "/docs/development",
    items: [
      { title: "Building on ComputeNet", href: "/docs/dev/building-on-computenet" },
      { title: "Submitting Jobs", href: "/docs/dev/submitting-jobs" },
      { title: "Verifying Results", href: "/docs/dev/verifying-results" },
      { title: "Testing Guide", href: "/docs/dev/testing-guide" },
    ],
  },
  {
    title: "Infrastructure",
    icon: Server,
    href: "/docs/infrastructure",
    items: [
      { title: "Network Architecture", href: "/docs/infra/network-architecture" },
      { title: "Node Configuration", href: "/docs/infra/node-configuration" },
      { title: "Security Best Practices", href: "/docs/infra/security" },
      { title: "Performance Tuning", href: "/docs/infra/performance" },
    ],
  },
  {
    title: "Security",
    icon: Key,
    href: "/docs/security",
    items: [
      { title: "Threat Model", href: "/docs/security/threats" },
      { title: "Cryptographic Primitives", href: "/docs/security/crypto" },
      { title: "Audit Process", href: "/docs/security/audits" },
      { title: "Incident Response", href: "/docs/security/incidents" },
    ],
  },
  {
    title: "Reference",
    icon: Database,
    href: "/docs/reference",
    items: [
      { title: "CLI Reference", href: "/docs/reference/cli" },
      { title: "Configuration Options", href: "/docs/reference/config" },
      { title: "Error Codes", href: "/docs/reference/errors" },
      { title: "Glossary", href: "/docs/reference/glossary" },
      { title: "Changelog", href: "/docs/reference/changelog" },
    ],
  },
];

const codeExample = `import { ComputeNet } from '@computenet/sdk';

// Initialize client (testnet)
const client = new ComputeNet({
  network: 'testnet',
  // API keys not required for testnet
});

// Submit a compute job
const job = await client.submit({
  runtime: 'wasm',
  code: myWasmModule,
  inputs: { data: inputData },
  verification: 'full'
});

// Wait for verified result
const result = await job.waitForCompletion();
console.log('Receipt:', result.receipt);`;

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_50%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
              Documentation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Build on <span className="text-emerald-400">ComputeNet</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Everything you need to understand and integrate with the ComputeNet protocol
            </p>
            <p className="text-sm text-amber-400/80 mb-8">
              Documentation is under active development. Some sections contain placeholder content.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
              <kbd className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-muted-foreground bg-muted/50 rounded border border-border">
                ⌘K
              </kbd>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="group block p-5 rounded-xl bg-card/50 border border-border/50 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 group-hover:bg-emerald-500/20 transition-colors">
                    <link.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-emerald-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Documentation Sections */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-foreground mb-8">
                Documentation Sections
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-5 rounded-xl bg-card/30 border border-border/50"
                  >
                    <Link href={section.href} className="flex items-center gap-3 mb-4 group">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <section.icon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                        {section.title}
                      </h3>
                    </Link>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-400 transition-colors"
                          >
                            <ChevronRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Code Example */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-8">
                Quick Example
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl bg-[#0d1117] border border-border/50 overflow-hidden"
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <span className="ml-2 text-xs text-muted-foreground">
                    example.ts
                  </span>
                  <span className="ml-auto text-xs text-amber-400/70">
                    Draft SDK
                  </span>
                </div>
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="text-emerald-300/90 font-mono">
                    {codeExample}
                  </code>
                </pre>
              </motion.div>

              <div className="mt-6 p-5 rounded-xl bg-card/30 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold text-foreground">
                    Getting Started
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  New to ComputeNet? Start with the fundamentals.
                </p>
                <div className="space-y-2">
                  <Link
                    href="/docs/concepts/what-is-computenet"
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/30 transition-colors group"
                  >
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      What is ComputeNet?
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
                  </Link>
                  <Link
                    href="/docs/concepts/compute-receipts"
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/30 transition-colors group"
                  >
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Compute Receipts
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
                  </Link>
                  <Link
                    href="/docs/validators/setup"
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/30 transition-colors group"
                  >
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Run a Validator
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border/50">
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
              Dive into the whitepaper for a comprehensive technical overview of the ComputeNet protocol.
            </p>
            <Link
              href="/whitepaper"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
            >
              Read Whitepaper
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
