import {
  Cpu,
  Shield,
  FileCode,
  Server,
  Key,
  Database,
  Code2,
} from "lucide-react";

export interface DocPage {
  title: string;
  href: string;
  description: string;
  status?: "draft" | "experimental" | "planned" | "stable";
}

export interface DocSection {
  title: string;
  slug: string;
  icon: typeof Cpu;
  description: string;
  pages: DocPage[];
}

export const docsConfig: DocSection[] = [
  {
    title: "Core Concepts",
    slug: "concepts",
    icon: Cpu,
    description: "Fundamental concepts and architecture of the ComputeNet protocol",
    pages: [
      {
        title: "Overview",
        href: "/docs/concepts/overview",
        description: "An introduction to the ComputeNet protocol and its purpose",
        status: "stable",
      },
      {
        title: "Compute Receipts",
        href: "/docs/concepts/receipts",
        description: "Understanding cryptographic proofs of computation",
        status: "stable",
      },
      {
        title: "Verification Protocol",
        href: "/docs/concepts/verification",
        description: "How compute results are verified across the network",
        status: "experimental",
      },
      {
        title: "Network Topology",
        href: "/docs/concepts/topology",
        description: "The structure and organization of the ComputeNet network",
        status: "draft",
      },
      {
        title: "Consensus",
        href: "/docs/concepts/consensus",
        description: "The consensus mechanism for verified compute coordination",
        status: "experimental",
      },
    ],
  },
  {
    title: "Validators",
    slug: "validators",
    icon: Shield,
    description: "Running and operating validator nodes on the network",
    pages: [
      {
        title: "Validator Setup",
        href: "/docs/validators/setup",
        description: "Step-by-step guide to setting up a validator node",
        status: "draft",
      },
      {
        title: "Hardware Requirements",
        href: "/docs/validators/requirements",
        description: "Minimum and recommended hardware specifications",
        status: "draft",
      },
      {
        title: "Staking",
        href: "/docs/validators/staking",
        description: "Understanding validator staking mechanics",
        status: "planned",
      },
      {
        title: "Monitoring",
        href: "/docs/validators/monitoring",
        description: "Monitoring your validator node health and performance",
        status: "planned",
      },
      {
        title: "Troubleshooting",
        href: "/docs/validators/troubleshooting",
        description: "Common issues and their solutions",
        status: "planned",
      },
    ],
  },
  {
    title: "Development",
    slug: "dev",
    icon: FileCode,
    description: "Building applications on ComputeNet",
    pages: [
      {
        title: "Building on ComputeNet",
        href: "/docs/dev/building",
        description: "Getting started with ComputeNet development",
        status: "draft",
      },
      {
        title: "Smart Contracts",
        href: "/docs/dev/contracts",
        description: "Writing and deploying smart contracts",
        status: "experimental",
      },
      {
        title: "Submitting Jobs",
        href: "/docs/dev/jobs",
        description: "How to submit compute jobs to the network",
        status: "experimental",
      },
      {
        title: "Verifying Results",
        href: "/docs/dev/verification",
        description: "Validating compute receipts and results",
        status: "experimental",
      },
      {
        title: "Testing Guide",
        href: "/docs/dev/testing",
        description: "Testing your ComputeNet integrations",
        status: "planned",
      },
    ],
  },
  {
    title: "Infrastructure",
    slug: "infra",
    icon: Server,
    description: "Network infrastructure and node operations",
    pages: [
      {
        title: "Network Architecture",
        href: "/docs/infra/architecture",
        description: "Overview of the ComputeNet network architecture",
        status: "draft",
      },
      {
        title: "Node Configuration",
        href: "/docs/infra/config",
        description: "Configuring and optimizing node settings",
        status: "planned",
      },
      {
        title: "Security",
        href: "/docs/infra/security",
        description: "Security best practices for node operators",
        status: "draft",
      },
      {
        title: "Performance",
        href: "/docs/infra/performance",
        description: "Performance tuning and optimization",
        status: "planned",
      },
      {
        title: "Disaster Recovery",
        href: "/docs/infra/recovery",
        description: "Backup and recovery procedures",
        status: "planned",
      },
    ],
  },
  {
    title: "Security",
    slug: "security",
    icon: Key,
    description: "Security model and cryptographic foundations",
    pages: [
      {
        title: "Threat Model",
        href: "/docs/security/threats",
        description: "Understanding the security assumptions and threats",
        status: "draft",
      },
      {
        title: "Cryptography",
        href: "/docs/security/crypto",
        description: "Cryptographic primitives used in ComputeNet",
        status: "experimental",
      },
      {
        title: "Audit Process",
        href: "/docs/security/audits",
        description: "How the protocol undergoes security review",
        status: "planned",
      },
      {
        title: "Bug Bounty",
        href: "/docs/security/bounty",
        description: "Security vulnerability disclosure program",
        status: "planned",
      },
      {
        title: "Incident Response",
        href: "/docs/security/incidents",
        description: "Procedures for handling security incidents",
        status: "planned",
      },
    ],
  },
  {
    title: "Reference",
    slug: "reference",
    icon: Database,
    description: "API reference and technical specifications",
    pages: [
      {
        title: "CLI Reference",
        href: "/docs/reference/cli",
        description: "Command-line interface documentation",
        status: "draft",
      },
      {
        title: "Configuration",
        href: "/docs/reference/config",
        description: "All configuration options and parameters",
        status: "draft",
      },
      {
        title: "Error Codes",
        href: "/docs/reference/errors",
        description: "Complete list of error codes and meanings",
        status: "planned",
      },
      {
        title: "Glossary",
        href: "/docs/reference/glossary",
        description: "Definitions of key terms and concepts",
        status: "stable",
      },
      {
        title: "Changelog",
        href: "/docs/reference/changelog",
        description: "Version history and release notes",
        status: "stable",
      },
    ],
  },
  {
    title: "SDKs",
    slug: "sdk",
    icon: Code2,
    description: "Client libraries for various programming languages",
    pages: [
      {
        title: "JavaScript SDK",
        href: "/docs/sdk/javascript",
        description: "ComputeNet SDK for Node.js and browsers",
        status: "draft",
      },
      {
        title: "Python SDK",
        href: "/docs/sdk/python",
        description: "ComputeNet SDK for Python applications",
        status: "planned",
      },
      {
        title: "Go SDK",
        href: "/docs/sdk/go",
        description: "ComputeNet SDK for Go applications",
        status: "planned",
      },
      {
        title: "Rust SDK",
        href: "/docs/sdk/rust",
        description: "ComputeNet SDK for Rust applications",
        status: "planned",
      },
    ],
  },
];

export function getAllDocPages(): DocPage[] {
  return docsConfig.flatMap((section) => section.pages);
}

export function getDocPageByHref(href: string): DocPage | undefined {
  return getAllDocPages().find((page) => page.href === href);
}

export function getSectionBySlug(slug: string): DocSection | undefined {
  return docsConfig.find((section) => section.slug === slug);
}

export function getAdjacentPages(href: string): { prev?: DocPage; next?: DocPage } {
  const allPages = getAllDocPages();
  const currentIndex = allPages.findIndex((page) => page.href === href);
  
  return {
    prev: currentIndex > 0 ? allPages[currentIndex - 1] : undefined,
    next: currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : undefined,
  };
}
