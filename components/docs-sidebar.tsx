"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { docsConfig, type DocSection } from "@/lib/docs-config";

function StatusBadge({ status }: { status?: string }) {
  if (!status || status === "stable") return null;

  const colors = {
    draft: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    experimental: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    planned: "bg-muted text-muted-foreground border-border",
  };

  return (
    <span
      className={cn(
        "ml-auto text-[10px] px-1.5 py-0.5 rounded border uppercase tracking-wider",
        colors[status as keyof typeof colors] || colors.planned
      )}
    >
      {status}
    </span>
  );
}

function SidebarSection({ section }: { section: DocSection }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/docs/${section.slug}`);
  const [isOpen, setIsOpen] = useState(isActive);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          isActive
            ? "text-foreground bg-muted/50"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
        )}
      >
        <section.icon className="w-4 h-4 text-emerald-400" />
        <span>{section.title}</span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4 ml-auto" />
        ) : (
          <ChevronRight className="w-4 h-4 ml-auto" />
        )}
      </button>

      {isOpen && (
        <ul className="mt-1 ml-4 border-l border-border/50 space-y-1">
          {section.pages.map((page) => {
            const isPageActive = pathname === page.href;
            return (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className={cn(
                    "flex items-center gap-2 pl-4 pr-2 py-1.5 text-sm transition-colors border-l-2 -ml-[1px]",
                    isPageActive
                      ? "text-emerald-400 border-emerald-400 bg-emerald-500/5"
                      : "text-muted-foreground hover:text-foreground border-transparent hover:border-border"
                  )}
                >
                  <span className="truncate">{page.title}</span>
                  <StatusBadge status={page.status} />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function DocsSidebar() {
  return (
    <aside className="w-64 shrink-0 hidden lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4 pb-8">
        <Link
          href="/docs"
          className="flex items-center gap-2 px-3 py-2 mb-4 text-sm font-semibold text-foreground hover:text-emerald-400 transition-colors"
        >
          Documentation Home
        </Link>
        <nav>
          {docsConfig.map((section) => (
            <SidebarSection key={section.slug} section={section} />
          ))}
        </nav>
      </div>
    </aside>
  );
}

export function MobileDocsSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-card/50 border border-border rounded-lg text-sm font-medium text-foreground"
      >
        <span>Documentation Menu</span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="mt-2 p-4 bg-card/50 border border-border rounded-lg">
          <Link
            href="/docs"
            className="block px-3 py-2 mb-2 text-sm font-semibold text-foreground hover:text-emerald-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Documentation Home
          </Link>
          {docsConfig.map((section) => (
            <div key={section.slug} className="mb-3">
              <div className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground">
                <section.icon className="w-4 h-4 text-emerald-400" />
                {section.title}
              </div>
              <ul className="ml-6 space-y-1">
                {section.pages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-3 py-1.5 text-sm transition-colors rounded",
                        pathname === page.href
                          ? "text-emerald-400 bg-emerald-500/10"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
