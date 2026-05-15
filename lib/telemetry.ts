export const VALIDATOR_ENDPOINTS = [
  {
    id: "validator-alpha",
    name: "Alpha",
    region: "EU-West",
    url: "46.101.39.92"
  },
  {
    id: "validator-beta",
    name: "Beta",
    region: "US-East",
    url: "138.68.134.235"
  },
  {
    id: "validator-gamma",
    name: "Gamma",
    region: "APAC",
    url: "178.62.15.134"
  }
]

export interface ValidatorTelemetry {
  id: string
  online: boolean
  latencyMs: number | null
  lastSuccessfulPoll: number | null
  error?: string
  status?: {
    truth_records?: number
    peers?: number
    propagation_queue?: number
  }
}

export interface NetworkTelemetry {
  validators: ValidatorTelemetry[]
  onlineCount: number
  totalTruthRecords: number
  totalPeers: number
  totalPropagationQueue: number
  lastUpdate: number
}

export async function fetchNetworkTelemetry(): Promise<NetworkTelemetry> {
  try {
    const res = await fetch("/api/telemetry")

    const data = await res.json()

    const validators = data.map((v: any, idx: number) => ({
      id: VALIDATOR_ENDPOINTS[idx].id,
      online: v.online,
      latencyMs: v.latency,
      lastSuccessfulPoll: v.online ? Date.now() : null,
      status: v.status
    }))

    return {
      validators,
      onlineCount: validators.filter((v: any) => v.online).length,
      totalTruthRecords: validators.reduce(
        (a: number, v: any) => a + (v.status?.truth_records || 0),
        0
      ),
      totalPeers: validators.reduce(
        (a: number, v: any) => a + (v.status?.peers || 0),
        0
      ),
      totalPropagationQueue: validators.reduce(
        (a: number, v: any) => a + (v.status?.propagation_queue || 0),
        0
      ),
      lastUpdate: Date.now()
    }
  } catch {
    return {
      validators: [],
      onlineCount: 0,
      totalTruthRecords: 0,
      totalPeers: 0,
      totalPropagationQueue: 0,
      lastUpdate: Date.now()
    }
  }
}

export const fetchTelemetry = fetchNetworkTelemetry

export function formatNumber(value: number | null | undefined): string {
  if (value == null) return "--"
  return value.toLocaleString()
}

export function formatLatency(ms: number | null): string {
  if (ms == null) return "--"
  return `${ms}ms`
}

export function formatLastPoll(timestamp: number | null): string {
  if (!timestamp) return "never"

  const seconds = Math.floor((Date.now() - timestamp) / 1000)

  if (seconds < 60) return `${seconds}s ago`

  const minutes = Math.floor(seconds / 60)

  return `${minutes}m ago`
}
