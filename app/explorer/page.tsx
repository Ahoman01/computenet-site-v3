"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, Activity, Shield, Box, Network, Radio,
  Clock, CheckCircle2, AlertCircle, Globe, Zap, Wifi,
  ArrowUpRight, RefreshCw, Eye, Cpu, FileCheck, Users,
  TrendingUp, Lock, Gauge, BarChart3, CircleDot, Triangle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTelemetry } from "@/hooks/use-telemetry"
import { formatNumber, formatLatency, formatLastPoll, VALIDATOR_ENDPOINTS } from "@/lib/telemetry"

// Synthetic data generators
function generateActivityEvent() {
  const events = [
    { type: "receipt_verified", icon: FileCheck, color: "text-primary" },
    { type: "attestation_finalized", icon: CheckCircle2, color: "text-chart-2" },
    { type: "replay_successful", icon: RefreshCw, color: "text-chart-4" },
    { type: "witness_quorum", icon: Users, color: "text-chart-1" },
    { type: "consensus_finalized", icon: Lock, color: "text-primary" },
    { type: "challenge_resolved", icon: Shield, color: "text-chart-3" },
  ]
  const event = events[Math.floor(Math.random() * events.length)]
  const jobId = `cn_job_${Math.random().toString(36).substring(2, 6)}`
  const validators = Math.floor(Math.random() * 2) + 2
  const latency = Math.floor(Math.random() * 120) + 40
  return {
    ...event,
    id: Date.now() + Math.random(),
    timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
    jobId,
    validators: `${validators}/3`,
    replay: Math.random() > 0.05 ? "success" : "pending",
    latency: `${latency}ms`
  }
}

function generateComputeJob() {
  const jobTypes = [
    { type: "AI Inference", model: "llama-3.2-8b", status: "verifying" },
    { type: "Rendering", model: "blender-cycles", status: "verified" },
    { type: "Proof Validation", model: "zk-snark", status: "verified" },
    { type: "Distributed Replay", model: "consensus-v2", status: "verifying" },
    { type: "AI Inference", model: "mistral-7b", status: "verified" },
    { type: "Verification", model: "receipt-hash", status: "verified" },
  ]
  const job = jobTypes[Math.floor(Math.random() * jobTypes.length)]
  return {
    ...job,
    id: `cn_job_${Math.random().toString(36).substring(2, 8)}`,
    witnesses: Math.floor(Math.random() * 3) + 2,
    confidence: (95 + Math.random() * 5).toFixed(1),
  }
}

export default function ExplorerPage() {
  const { 
    validators, 
    onlineCount, 
    totalTruthRecords, 
    totalPeers,
    totalPropagationQueue,
    isLoading, 
    lastUpdate,
    refresh 
  } = useTelemetry()

  // Synthetic metrics state
  const [syntheticMetrics, setSyntheticMetrics] = useState({
    jobsProcessed: 12847,
    receiptsGenerated: 38291,
    attestationsSigned: 115842,
    replaySuccessRate: 99.7,
    consensusLatency: 82,
    fraudChallenges: 3,
    witnessCount: 847,
    validatorUptime: 99.94,
  })

  const [verificationMetrics, setVerificationMetrics] = useState({
    replaySuccess: 99.7,
    receiptDivergence: 0.02,
    consensusConfidence: 99.8,
    witnessQuorumAvg: 2.8,
    fraudChallenges: 3,
    failedReplays: 12,
    attestationAgreement: 99.9,
  })

  const [activityFeed, setActivityFeed] = useState<ReturnType<typeof generateActivityEvent>[]>([])
  const [computeJobs, setComputeJobs] = useState<ReturnType<typeof generateComputeJob>[]>([])
  const feedRef = useRef<HTMLDivElement>(null)

  // Initialize and update synthetic data
  useEffect(() => {
    // Initial activity feed
    const initialFeed = Array.from({ length: 8 }, generateActivityEvent)
    setActivityFeed(initialFeed)

    // Initial compute jobs
    const initialJobs = Array.from({ length: 5 }, generateComputeJob)
    setComputeJobs(initialJobs)

    // Update metrics periodically
    const metricsInterval = setInterval(() => {
      setSyntheticMetrics(prev => ({
        ...prev,
        jobsProcessed: prev.jobsProcessed + Math.floor(Math.random() * 3),
        receiptsGenerated: prev.receiptsGenerated + Math.floor(Math.random() * 5),
        attestationsSigned: prev.attestationsSigned + Math.floor(Math.random() * 8),
        consensusLatency: 70 + Math.floor(Math.random() * 30),
        witnessCount: prev.witnessCount + (Math.random() > 0.7 ? 1 : 0),
      }))
      setVerificationMetrics(prev => ({
        ...prev,
        replaySuccess: Math.min(99.9, prev.replaySuccess + (Math.random() - 0.5) * 0.1),
        consensusConfidence: Math.min(99.95, prev.consensusConfidence + (Math.random() - 0.5) * 0.05),
        witnessQuorumAvg: 2.5 + Math.random() * 0.5,
      }))
    }, 3000)

    // Add new activity events
    const activityInterval = setInterval(() => {
      setActivityFeed(prev => {
        const newEvent = generateActivityEvent()
        return [newEvent, ...prev.slice(0, 11)]
      })
    }, 2500)

    // Rotate compute jobs
    const jobsInterval = setInterval(() => {
      setComputeJobs(prev => {
        const newJobs = [...prev]
        const idx = Math.floor(Math.random() * newJobs.length)
        newJobs[idx] = generateComputeJob()
        return newJobs
      })
    }, 4000)

    return () => {
      clearInterval(metricsInterval)
      clearInterval(activityInterval)
      clearInterval(jobsInterval)
    }
  }, [])

  // Validator reliability data (synthetic)
  const validatorReliability = validators.map(v => ({
    name: v.name,
    uptime: v.online ? (98 + Math.random() * 2).toFixed(2) : "0.00",
    replayAccuracy: v.online ? (99 + Math.random() * 1).toFixed(2) : "N/A",
    avgLatency: v.online ? `${Math.floor(60 + Math.random() * 40)}ms` : "N/A",
    witnessParticipation: v.online ? `${Math.floor(85 + Math.random() * 15)}%` : "0%",
    totalAttestations: v.online ? formatNumber(Math.floor(30000 + Math.random() * 10000)) : "0",
    online: v.online,
  }))

  return (
    <main className="pt-16 min-h-screen">
      {/* Header */}
      <section className="border-b border-border/50 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span>Explorer</span>
              </div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold">Protocol Explorer</h1>
                <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-primary/10">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs text-primary font-medium">Live</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Visualizing observable and attestable useful compute across the network.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">
                {lastUpdate > 0 ? `Last update: ${new Date(lastUpdate).toLocaleTimeString()}` : 'Loading...'}
              </span>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={refresh}
                disabled={isLoading}
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Top Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {[
            { label: "Jobs Processed", value: formatNumber(syntheticMetrics.jobsProcessed), icon: Cpu, color: "text-primary" },
            { label: "Receipts Generated", value: formatNumber(syntheticMetrics.receiptsGenerated), icon: FileCheck, color: "text-chart-2" },
            { label: "Attestations Signed", value: formatNumber(syntheticMetrics.attestationsSigned), icon: CheckCircle2, color: "text-chart-4" },
            { label: "Replay Success", value: `${syntheticMetrics.replaySuccessRate.toFixed(1)}%`, icon: RefreshCw, color: "text-primary" },
            { label: "Consensus Latency", value: `${syntheticMetrics.consensusLatency}ms`, icon: Gauge, color: "text-chart-1" },
            { label: "Fraud Challenges", value: syntheticMetrics.fraudChallenges.toString(), icon: Shield, color: "text-chart-3" },
            { label: "Witness Count", value: formatNumber(syntheticMetrics.witnessCount), icon: Users, color: "text-chart-2" },
            { label: "Validator Uptime", value: `${syntheticMetrics.validatorUptime}%`, icon: Activity, color: "text-primary" },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="glass-panel rounded-lg p-3"
              >
                <div className={`p-1.5 rounded-md bg-secondary/50 ${stat.color} w-fit mb-2`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <p className="text-lg font-semibold font-mono">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground leading-tight">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Main Grid: Activity Feed + Truth Panel */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Live Receipt Activity Feed */}
          <div className="lg:col-span-2 glass-panel rounded-xl overflow-hidden">
            <div className="p-4 border-b border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Activity className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold">Live Protocol Activity</h2>
                  <p className="text-xs text-muted-foreground">Real-time verification events</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs text-muted-foreground">Streaming</span>
              </div>
            </div>
            <div ref={feedRef} className="h-[400px] overflow-y-auto divide-y divide-border/30">
              <AnimatePresence initial={false}>
                {activityFeed.map((event) => {
                  const Icon = event.icon
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -20, height: 0 }}
                      animate={{ opacity: 1, x: 0, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 hover:bg-secondary/20 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-1.5 rounded-md bg-secondary/50 ${event.color} mt-0.5`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-sm font-medium capitalize">
                              {event.type.replace(/_/g, " ")}
                            </span>
                            <span className="text-[10px] font-mono text-muted-foreground">
                              [{event.timestamp}]
                            </span>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                            <div>
                              <span className="text-muted-foreground">job_id: </span>
                              <span className="text-primary">{event.jobId}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">validators: </span>
                              <span>{event.validators}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">replay: </span>
                              <span className={event.replay === "success" ? "text-primary" : "text-chart-4"}>
                                {event.replay}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">latency: </span>
                              <span>{event.latency}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Truth / Verification Panel */}
          <div className="glass-panel rounded-xl overflow-hidden">
            <div className="p-4 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-chart-2/10">
                  <Lock className="w-4 h-4 text-chart-2" />
                </div>
                <div>
                  <h2 className="font-semibold">Verification Integrity</h2>
                  <p className="text-xs text-muted-foreground">Truth metrics</p>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-4">
              {[
                { label: "Replay Success", value: `${verificationMetrics.replaySuccess.toFixed(2)}%`, color: "text-primary", bar: verificationMetrics.replaySuccess },
                { label: "Receipt Divergence", value: `${verificationMetrics.receiptDivergence.toFixed(2)}%`, color: "text-chart-4", bar: 100 - verificationMetrics.receiptDivergence * 10 },
                { label: "Consensus Confidence", value: `${verificationMetrics.consensusConfidence.toFixed(2)}%`, color: "text-primary", bar: verificationMetrics.consensusConfidence },
                { label: "Witness Quorum Avg", value: `${verificationMetrics.witnessQuorumAvg.toFixed(1)}/3`, color: "text-chart-2", bar: (verificationMetrics.witnessQuorumAvg / 3) * 100 },
                { label: "Fraud Challenges", value: verificationMetrics.fraudChallenges.toString(), color: "text-chart-3", bar: null },
                { label: "Failed Replays", value: verificationMetrics.failedReplays.toString(), color: "text-destructive", bar: null },
                { label: "Attestation Agreement", value: `${verificationMetrics.attestationAgreement}%`, color: "text-primary", bar: verificationMetrics.attestationAgreement },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">{metric.label}</span>
                    <span className={`text-sm font-mono font-medium ${metric.color}`}>{metric.value}</span>
                  </div>
                  {metric.bar !== null && (
                    <div className="h-1 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full rounded-full ${metric.color === "text-primary" ? "bg-primary" : metric.color === "text-chart-2" ? "bg-chart-2" : "bg-chart-4"}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.bar}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border/50 bg-secondary/20">
              <p className="text-[10px] text-muted-foreground text-center">
                Verification integrity score: <span className="text-primary font-medium">99.8%</span>
              </p>
            </div>
          </div>
        </div>

        {/* Validator Reliability Table */}
        <div className="glass-panel rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold">Validator Reliability</h2>
                <p className="text-xs text-muted-foreground">Performance metrics per validator</p>
              </div>
            </div>
            <Link 
              href="/validators"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              View all
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-secondary/20">
                  <th className="text-left text-xs font-medium text-muted-foreground p-3">Validator</th>
                  <th className="text-right text-xs font-medium text-muted-foreground p-3">Uptime %</th>
                  <th className="text-right text-xs font-medium text-muted-foreground p-3">Replay Accuracy</th>
                  <th className="text-right text-xs font-medium text-muted-foreground p-3">Avg Latency</th>
                  <th className="text-right text-xs font-medium text-muted-foreground p-3">Witness Part.</th>
                  <th className="text-right text-xs font-medium text-muted-foreground p-3">Attestations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {validatorReliability.map((v) => (
                  <tr key={v.name} className="hover:bg-secondary/20 transition-colors">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${v.online ? "bg-primary" : "bg-destructive"}`} />
                        <span className="font-mono text-sm">{v.name}</span>
                      </div>
                    </td>
                    <td className="p-3 text-right font-mono text-sm">{v.uptime}%</td>
                    <td className="p-3 text-right font-mono text-sm">{v.replayAccuracy}%</td>
                    <td className="p-3 text-right font-mono text-sm text-primary">{v.avgLatency}</td>
                    <td className="p-3 text-right font-mono text-sm">{v.witnessParticipation}</td>
                    <td className="p-3 text-right font-mono text-sm">{v.totalAttestations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Consensus Flow + Compute Jobs */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Consensus Flow Visualization */}
          <div className="glass-panel rounded-xl overflow-hidden">
            <div className="p-4 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-chart-4/10">
                  <Network className="w-4 h-4 text-chart-4" />
                </div>
                <div>
                  <h2 className="font-semibold">Consensus Flow</h2>
                  <p className="text-xs text-muted-foreground">Verification pipeline</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="relative">
                {/* Flow stages */}
                <div className="flex items-center justify-between mb-8">
                  {[
                    { label: "Receipt", icon: FileCheck, active: true },
                    { label: "Propagate", icon: Radio, active: true },
                    { label: "Witness", icon: Users, active: true },
                    { label: "Attest", icon: CheckCircle2, active: true },
                    { label: "Consensus", icon: Lock, active: true },
                  ].map((stage, idx) => {
                    const Icon = stage.icon
                    return (
                      <div key={stage.label} className="flex flex-col items-center gap-2 relative">
                        <motion.div 
                          className={`p-3 rounded-xl ${stage.active ? "bg-primary/20 text-primary" : "bg-secondary/50 text-muted-foreground"}`}
                          animate={{ scale: stage.active ? [1, 1.05, 1] : 1 }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.div>
                        <span className="text-[10px] text-muted-foreground">{stage.label}</span>
                        {idx < 4 && (
                          <motion.div 
                            className="absolute left-full top-1/3 w-8 h-0.5 bg-primary/30 -ml-1"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
                          />
                        )}
                      </div>
                    )
                  })}
                </div>
                
                {/* Animated packets */}
                <div className="h-24 relative overflow-hidden rounded-lg bg-secondary/20">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-primary"
                      animate={{
                        x: ["-10%", "110%"],
                        y: [20 + i * 25, 20 + i * 25],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "linear",
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">Receipt propagation active</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-lg font-mono font-semibold text-primary">{syntheticMetrics.consensusLatency}ms</p>
                    <p className="text-[10px] text-muted-foreground">Avg Latency</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-mono font-semibold">{onlineCount}/3</p>
                    <p className="text-[10px] text-muted-foreground">Validators</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-mono font-semibold text-chart-2">{verificationMetrics.witnessQuorumAvg.toFixed(1)}</p>
                    <p className="text-[10px] text-muted-foreground">Quorum Avg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Synthetic Compute Jobs */}
          <div className="glass-panel rounded-xl overflow-hidden">
            <div className="p-4 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-chart-1/10">
                  <Cpu className="w-4 h-4 text-chart-1" />
                </div>
                <div>
                  <h2 className="font-semibold">Compute Jobs</h2>
                  <p className="text-xs text-muted-foreground">Active verification workloads</p>
                </div>
              </div>
            </div>
            <div className="divide-y divide-border/30">
              {computeJobs.map((job) => (
                <motion.div 
                  key={job.id} 
                  className="p-4 hover:bg-secondary/20 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${job.status === "verified" ? "bg-primary" : "bg-chart-4 animate-pulse"}`} />
                      <span className="text-sm font-medium">{job.type}</span>
                    </div>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      job.status === "verified" 
                        ? "bg-primary/10 text-primary" 
                        : "bg-chart-4/10 text-chart-4"
                    }`}>
                      {job.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    <div>
                      <span className="text-muted-foreground">id: </span>
                      <span className="text-primary">{job.id}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">model: </span>
                      <span>{job.model}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">confidence: </span>
                      <span className="text-chart-2">{job.confidence}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Node Endpoints + Network Health */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Node Endpoints */}
          <div className="glass-panel rounded-xl overflow-hidden">
            <div className="p-4 border-b border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-chart-2/10">
                  <Radio className="w-4 h-4 text-chart-2" />
                </div>
                <h2 className="font-semibold">Node Endpoints</h2>
              </div>
              <span className="text-xs text-muted-foreground">{onlineCount}/{validators.length} online</span>
            </div>
            <div className="p-4 space-y-3">
              {VALIDATOR_ENDPOINTS.map((endpoint) => {
                const validator = validators.find(v => v.id === endpoint.id)
                const isOnline = validator?.online || false
                return (
                  <div key={endpoint.id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        isOnline ? "bg-primary" : "bg-destructive"
                      }`} />
                      <span className="font-mono text-xs truncate max-w-[140px]">{endpoint.url}/status</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-muted-foreground">{endpoint.region}</span>
                      {validator?.latencyMs && (
                        <span className="text-primary font-mono">{validator.latencyMs}ms</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Network Health */}
          <div className="glass-panel rounded-xl p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-chart-4/10">
                <Activity className="w-4 h-4 text-chart-4" />
              </div>
              <h2 className="font-semibold">Network Health</h2>
            </div>
            <div className="space-y-3">
              {[
                { label: "Nodes Online", value: `${onlineCount}/${validators.length}`, status: onlineCount > 0 ? "ok" : "warn" },
                { label: "Telemetry", value: lastUpdate > 0 ? "Connected" : "Connecting...", status: lastUpdate > 0 ? "ok" : "warn" },
                { label: "Verification", value: "Active", status: "ok" },
                { label: "Mode", value: "Research Testnet", status: "ok" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{item.value}</span>
                    {item.status === "ok" && <CheckCircle2 className="w-4 h-4 text-primary" />}
                    {item.status === "warn" && <AlertCircle className="w-4 h-4 text-chart-4" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Aggregate Telemetry */}
          <div className="glass-panel rounded-xl p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Eye className="w-4 h-4 text-primary" />
              </div>
              <h2 className="font-semibold">Aggregate Telemetry</h2>
            </div>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">truth_records:</span>
                <span>{totalTruthRecords}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">peers:</span>
                <span>{totalPeers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">propagation_queue:</span>
                <span>{totalPropagationQueue}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">validators_online:</span>
                <span className="text-primary">{onlineCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Telemetry Disclaimer */}
        <div className="text-center">
          <p className="text-[10px] text-muted-foreground/50">
            Telemetry reflects live ComputeNet research/testnet activity. Some metrics are synthetic for demonstration.
          </p>
        </div>
      </div>
    </main>
  )
}
