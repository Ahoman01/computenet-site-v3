"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ChevronRight, Activity, Shield, Box, Network, Radio,
  Clock, CheckCircle2, AlertCircle, Globe, Zap, Wifi,
  ArrowUpRight, RefreshCw, Eye, WifiOff
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTelemetry } from "@/hooks/use-telemetry"
import { formatNumber, formatLatency, formatLastPoll, VALIDATOR_ENDPOINTS } from "@/lib/telemetry"

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { 
                label: "Active Validators", 
                value: isLoading ? "..." : onlineCount.toString(),
                icon: Shield, 
                color: "text-primary", 
                subtext: `${validators.length} total nodes`,
                available: true
              },
              { 
                label: "Truth Records", 
                value: isLoading ? "..." : formatNumber(totalTruthRecords),
                icon: Box, 
                color: "text-chart-2", 
                subtext: "Total verified",
                available: true
              },
              { 
                label: "Network Peers", 
                value: isLoading ? "..." : formatNumber(totalPeers),
                icon: Wifi, 
                color: "text-chart-4", 
                subtext: "Connected",
                available: true
              },
              { 
                label: "Propagation Queue", 
                value: isLoading ? "..." : formatNumber(totalPropagationQueue),
                icon: Zap, 
                color: "text-chart-1", 
                subtext: "Pending propagation",
                available: true
              },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-panel rounded-xl p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className={`p-2 rounded-lg bg-secondary/50 ${stat.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {!stat.available && (
                      <span className="text-[10px] text-muted-foreground/60">Research Preview</span>
                    )}
                  </div>
                  <p className={`text-2xl font-semibold font-mono ${!stat.available ? 'text-muted-foreground/50' : ''}`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-xs text-muted-foreground/70">{stat.subtext}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Validators Panel */}
            <div className="lg:col-span-2 glass-panel rounded-xl overflow-hidden">
              <div className="p-4 border-b border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold">Validator Network</h2>
                    <p className="text-xs text-muted-foreground">Live Testnet Status</p>
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
              <div className="divide-y divide-border/50">
                {validators.map((validator) => (
                  <motion.div
                    key={validator.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          validator.online ? "bg-primary" : "bg-destructive"
                        }`} />
                        <span className="font-mono text-sm font-medium">{validator.name}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                          validator.online ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
                        }`}>
                          {validator.online ? "online" : "offline"}
                        </span>
                        {validator.error && !validator.online && (
                          <span className="text-[10px] text-destructive/70">{validator.error}</span>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">{validator.region}</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                      <div>
                        <span className="text-muted-foreground block mb-1">Truth Records</span>
                        <span className="font-mono">
                          {validator.status?.truth_records !== undefined 
                            ? validator.status.truth_records
                            : "N/A"}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-1">Peers</span>
                        <span className="font-mono">
                          {validator.status?.peers !== undefined 
                            ? validator.status.peers
                            : "N/A"}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-1">Queue</span>
                        <span className="font-mono">
                          {validator.status?.propagation_queue !== undefined 
                            ? validator.status.propagation_queue
                            : "N/A"}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-1">Latency</span>
                        <span className="font-mono text-primary">
                          {formatLatency(validator.latencyMs)}
                        </span>
                      </div>
                    </div>
                    {validator.lastSuccessfulPoll && (
                      <div className="mt-2 text-[10px] text-muted-foreground/70">
                        Last poll: {formatLastPoll(validator.lastSuccessfulPoll)}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Network Stats */}
            <div className="space-y-6">
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
                    { 
                      label: "Nodes Online", 
                      value: `${onlineCount}/${validators.length}`, 
                      status: onlineCount > 0 ? "ok" : "warn" 
                    },
                    { 
                      label: "Telemetry", 
                      value: lastUpdate > 0 ? "Connected" : "Connecting...", 
                      status: lastUpdate > 0 ? "ok" : "warn" 
                    },
                    { 
                      label: "Truth Records", 
                      value: totalTruthRecords > 0 ? "Active" : "N/A", 
                      status: totalTruthRecords > 0 ? "ok" : "na" 
                    },
                    { 
                      label: "Mode", 
                      value: "Research Testnet", 
                      status: "ok" 
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{item.value}</span>
                        {item.status === "ok" && <CheckCircle2 className="w-4 h-4 text-primary" />}
                        {item.status === "warn" && <AlertCircle className="w-4 h-4 text-chart-4" />}
                        {item.status === "na" && <Clock className="w-4 h-4 text-muted-foreground" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Telemetry Summary */}
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
          </div>

          {/* Network Topology Map */}
          <div className="mt-8 glass-panel rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold">Network Topology</h2>
                  <p className="text-xs text-muted-foreground">Geographic validator distribution</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg bg-secondary/30 flex items-center justify-center">
              <div className="text-center">
                <Network className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Network topology visualization</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {onlineCount} validator{onlineCount !== 1 ? 's' : ''} online across {validators.length} regions
                </p>
              </div>
              {/* Live node indicators */}
              {validators.map((v, idx) => (
                <div 
                  key={v.id}
                  className={`absolute w-3 h-3 rounded-full ${v.online ? 'bg-primary animate-pulse' : 'bg-destructive/50'}`}
                  style={{
                    top: `${30 + idx * 15}%`,
                    left: `${25 + idx * 20}%`,
                    animationDelay: `${idx * 0.5}s`
                  }}
                  title={`${v.name} (${v.region}) - ${v.online ? 'Online' : 'Offline'}`}
                />
              ))}
            </div>
          </div>

          {/* Telemetry Disclaimer */}
          <div className="mt-6 text-center">
            <p className="text-[10px] text-muted-foreground/50">
              Telemetry reflects live ComputeNet research/testnet activity.
            </p>
          </div>
        </div>
      </main>
  )
}
