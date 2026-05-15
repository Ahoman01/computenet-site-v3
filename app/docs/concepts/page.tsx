"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Cpu } from "lucide-react";
import { DocsSidebar, MobileDocsSidebar } from "@/components/docs-sidebar";
import { getSectionBySlug } from "@/lib/docs-config";

export default function ConceptsIndexPage() {
  const section = getSectionBySlug("concepts");
  
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex gap-12">
          <DocsSidebar />
          
          <div className="flex-1 min-w-0 max-w-3xl">
            <MobileDocsSidebar />
            
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/docs" className="hover:text-foreground transition-colors">
                Docs
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Core Concepts</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <header className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    Core Concepts
                  </h1>
                </div>
                <p className="text-lg text-muted-foreground">
                  {section?.description}
                </p>
              </header>

              <div className="grid gap-4">
                {section?.pages.map((page, index) => (
                  <motion.div
                    key={page.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={page.href}
                      className="group block p-5 rounded-xl bg-card/30 border border-border/50 hover:border-emerald-500/30 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-emerald-400 transition-colors mb-1">
                            {page.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {page.description}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-emerald-400 transition-colors shrink-0 mt-0.5" />
                      </div>
                      {page.status && page.status !== "stable" && (
                        <span className={`inline-block mt-3 text-xs px-2 py-0.5 rounded border uppercase tracking-wider ${
                          page.status === "draft" ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" :
                          page.status === "experimental" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                          "bg-muted text-muted-foreground border-border"
                        }`}>
                          {page.status}
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
