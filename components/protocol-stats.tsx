"use client"

import { motion } from "framer-motion"
import { Activity, Cpu, Shield, Box, Zap, RefreshCw, Wifi, Clock } from "lucide-react"
import { useTelemetry } from "@/hooks/use-telemetry"
import { formatNumber, formatLastPoll, formatLatency } from "@/lib/telemetry"

export function ProtocolStats() {
  const { validators, onlineCount, totalTruthRecords, totalPeers, totalPropagationQueue, isLoading: loading } = useTelemetry()

  const stats = [
    {
      label: "Active Validators",
      value: loading ? "..." : onlineCount.toString(),
      subtext: `${validators.length} total nodes`,
      icon: Shield,
      color: "text-primary",
      available: true,
    },
    {
      label: "Truth Records",
      value: loading ? "..." : formatNumber(totalTruthRecords),
      subtext: "Total verified",
      icon: Box,
      color: "text-chart-2",
      available: true,
    },
    {
      label: "Network Peers",
      value: loading ? "..." : formatNumber(totalPeers),
      subtext: "Connected peers",
      icon: Wifi,
      color: "text-chart-4",
      available: true,
    },
    {
      label: "Propagation Queue",
      value: loading ? "..." : formatNumber(totalPropagationQueue),
      subtext: "Pending propagation",
      icon: Zap,
      color: "text-chart-1",
      available: true,
    },
  ]

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-panel rounded-xl p-5 group hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg bg-secondary/50 ${stat.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                {!stat.available && (
                  <span className="text-[10px] text-muted-foreground/60 font-mono">Research Preview</span>
                )}
              </div>
              <div className="space-y-1">
                <p className={`text-2xl font-semibold tracking-tight font-mono ${!stat.available ? 'text-muted-foreground/50' : ''}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground/70">{stat.subtext}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
      <p className="text-[10px] text-muted-foreground/50 text-center">
        Telemetry reflects live ComputeNet research/testnet activity.
      </p>
    </div>
  )
}

export function ValidatorTelemetry() {
  const { validators, isLoading: loading, lastUpdate, refresh } = useTelemetry()

  return (
    <div className="glass-panel rounded-xl overflow-hidden">
      <div className="p-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Shield className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Validator Network</h3>
            <p className="text-xs text-muted-foreground">Live Testnet Status</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={refresh}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            title="Refresh"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        </div>
      </div>
      <div className="divide-y divide-border/50">
        {validators.map((validator, index) => (
          <motion.div
            key={validator.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-4 hover:bg-secondary/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${validator.online ? 'bg-primary' : 'bg-destructive'}`} />
                <span className="font-mono text-sm">{validator.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${validator.online ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'}`}>
                  {validator.online ? 'online' : 'offline'}
                </span>
              </div>
              <span className="text-xs text-muted-foreground font-mono">{validator.region}</span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Box className="w-3 h-3" />
                {validator.status?.truth_records !== undefined 
                  ? `${validator.status.truth_records} records`
                  : "N/A"}
              </span>
              <span className="flex items-center gap-1">
                <Wifi className="w-3 h-3" />
                {validator.status?.peers !== undefined 
                  ? `${validator.status.peers} peers`
                  : "N/A"}
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3" />
                {validator.status?.propagation_queue !== undefined 
                  ? `${validator.status.propagation_queue} queued`
                  : "N/A"}
              </span>
              {validator.online && validator.latencyMs !== null && (
                <span className="flex items-center gap-1 text-primary">
                  <Activity className="w-3 h-3" />
                  {formatLatency(validator.latencyMs)}
                </span>
              )}
              {validator.lastSuccessfulPoll && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {formatLastPoll(validator.lastSuccessfulPoll)}
                </span>
              )}
              {validator.error && !validator.online && (
                <span className="text-destructive/80">{validator.error}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="p-3 border-t border-border/50 bg-secondary/20">
        <p className="text-[10px] text-muted-foreground/50 text-center">
          Telemetry reflects live ComputeNet research/testnet activity. Last update: {formatLastPoll(lastUpdate)}
        </p>
      </div>
    </div>
  )
}

export function ComputeReceiptPreview() {
  const { validators, totalTruthRecords, totalPeers, totalPropagationQueue, isLoading: loading } = useTelemetry()
  
  // Get aggregated data from all online validators
  const onlineValidators = validators.filter(v => v.online)
  const hasData = onlineValidators.length > 0

  // Build a sample receipt showing aggregate data
  const receipt = {
    network_status: hasData ? "operational" : "connecting",
    active_validators: onlineValidators.length,
    total_truth_records: totalTruthRecords,
    connected_peers: totalPeers,
    propagation_queue: totalPropagationQueue,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel rounded-xl overflow-hidden"
    >
      <div className="p-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-chart-4/10">
            <Cpu className="w-4 h-4 text-chart-4" />
          </div>
          <div>
            <h3 className="font-medium">Network Status</h3>
            <p className="text-xs text-muted-foreground">
              {hasData ? "Live aggregate telemetry" : "Connecting to network..."}
            </p>
          </div>
        </div>
        {hasData ? (
          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            Live
          </span>
        ) : (
          <span className="px-2 py-1 rounded-full bg-muted/50 text-muted-foreground text-xs font-medium">
            {loading ? "Loading..." : "Offline"}
          </span>
        )}
      </div>
      <div className="p-4 space-y-3 font-mono text-sm">
        {Object.entries(receipt).map(([key, value]) => (
          <div key={key} className="flex items-start justify-between gap-4">
            <span className="text-muted-foreground shrink-0">{key}:</span>
            <span className={`text-right break-all ${!hasData && key !== 'network_status' ? 'text-muted-foreground/50' : key === 'network_status' && hasData ? 'text-primary' : ''}`}>
              {String(value)}
            </span>
          </div>
        ))}
      </div>
      {!hasData && !loading && (
        <div className="p-3 border-t border-border/50 bg-secondary/20">
          <p className="text-[10px] text-muted-foreground/50 text-center">
            Unable to connect to validator nodes. Check network status.
          </p>
        </div>
      )}
    </motion.div>
  )
}
