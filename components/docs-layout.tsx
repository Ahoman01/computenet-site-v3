"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { DocsSidebar, MobileDocsSidebar } from "./docs-sidebar";
import { getAdjacentPages, type DocPage } from "@/lib/docs-config";

interface DocsLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  href: string;
  status?: "draft" | "experimental" | "planned" | "stable";
  section: string;
  sectionHref: string;
}

function StatusBanner({ status }: { status?: string }) {
  if (!status || status === "stable") return null;

  const config = {
    draft: {
      bg: "bg-yellow-500/10 border-yellow-500/30",
      text: "text-yellow-400",
      label: "Draft Documentation",
      message: "This documentation is under development and may be incomplete or subject to change.",
    },
    experimental: {
      bg: "bg-blue-500/10 border-blue-500/30",
      text: "text-blue-400",
      label: "Experimental Feature",
      message: "This feature is experimental and may change significantly in future versions.",
    },
    planned: {
      bg: "bg-muted/50 border-border",
      text: "text-muted-foreground",
      label: "Planned Feature",
      message: "This feature is planned for future development. Documentation is preliminary.",
    },
  };

  const { bg, text, label, message } = config[status as keyof typeof config] || config.planned;

  return (
    <div className={`mb-8 p-4 rounded-lg border ${bg}`}>
      <p className={`text-sm font-medium ${text} mb-1`}>{label}</p>
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}

function PrevNextNav({ href }: { href: string }) {
  const { prev, next } = getAdjacentPages(href);

  return (
    <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row gap-4 justify-between">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex-1 p-4 rounded-lg border border-border/50 hover:border-emerald-500/30 transition-colors"
        >
          <span className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <ArrowLeft className="w-4 h-4" />
            Previous
          </span>
          <span className="font-medium text-foreground group-hover:text-emerald-400 transition-colors">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex-1 p-4 rounded-lg border border-border/50 hover:border-emerald-500/30 transition-colors text-right"
        >
          <span className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-1">
            Next
            <ArrowRight className="w-4 h-4" />
          </span>
          <span className="font-medium text-foreground group-hover:text-emerald-400 transition-colors">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}

export function DocsLayout({
  children,
  title,
  description,
  href,
  status,
  section,
  sectionHref,
}: DocsLayoutProps) {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex gap-12">
          <DocsSidebar />

          <div className="flex-1 min-w-0 max-w-3xl">
            <MobileDocsSidebar />

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/docs" className="hover:text-foreground transition-colors">
                Docs
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={sectionHref} className="hover:text-foreground transition-colors">
                {section}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{title}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header */}
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {title}
                </h1>
                <p className="text-lg text-muted-foreground">{description}</p>
              </header>

              <StatusBanner status={status} />

              {/* Content */}
              <article className="prose prose-invert prose-emerald max-w-none">
                {children}
              </article>

              <PrevNextNav href={href} />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
