"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, FileText, Compass, Github, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NetworkGlobe } from "@/components/network-globe"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Research Preview</span>
              <span className="text-foreground font-medium">Private Testnet</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                <span className="text-gradient">An Open Protocol</span>
                <br />
                <span className="text-foreground">for Verified Useful Compute</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                ComputeNet explores a decentralized future where useful computation becomes a verifiable protocol primitive.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Link href="/whitepaper">
                  <FileText className="w-4 h-4" />
                  Read Whitepaper
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/explorer">
                  <Compass className="w-4 h-4" />
                  View Explorer
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="gap-2">
                <Link href="/docs">
                  <BookOpen className="w-4 h-4" />
                  Documentation
                </Link>
              </Button>
            </div>

            {/* Secondary Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link
                href="https://github.com/Ahoman01/-computenet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                Open Source
                <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/validators"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                Join Testnet
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>

          {/* Network Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <NetworkGlobe />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-muted-foreground" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
