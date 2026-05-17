export interface ValidatorTelemetry {
  id: string
  name: string
  url: string
  region: string
  online: boolean
  latencyMs: number | null
  lastSuccessfulPoll: number | null
  lastFetch: number
  error?: string | null
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
  error: string | null
  isLoading: boolean
}

export const VALIDATOR_ENDPOINTS = [
  {
    id: "alpha",
    name: "Validator Alpha",
    url: "https://alpha.computenet.ai",
    region: "London"
  },
  {
    id: "beta",
    name: "Validator Beta",
    url: "https://beta.computenet.ai",
    region: "Frankfurt"
  },
  {
    id: "gamma",
    name: "Validator Gamma",
    url: "https://gamma.computenet.ai",
    region: "New York"
  },
  {
    id: "macbook",
    name: "Validator MacBook",
    url: "https://likeness-vowel-scrunch.ngrok-free.dev",
    region: "UK / External"
  }
]

export async function fetchNetworkTelemetry(): Promise<NetworkTelemetry> {
  const validators: ValidatorTelemetry[] = VALIDATOR_ENDPOINTS.map((v) => ({
    ...v,
    online: Math.random() > 0.2,
    latencyMs: Math.floor(Math.random() * 120),
    lastSuccessfulPoll: Date.now(),
    lastFetch: Date.now(),
    error: null,
    status: {
      truth_records: Math.floor(Math.random() * 100000),
      peers: Math.floor(Math.random() * 500),
      propagation_queue: Math.floor(Math.random() * 50)
    }
  }))

  return {
    validators,
    onlineCount: validators.filter(v => v.online).length,
    totalTruthRecords: validators.reduce((a, v) => a + (v.status?.truth_records || 0), 0),
    totalPeers: validators.reduce((a, v) => a + (v.status?.peers || 0), 0),
    totalPropagationQueue: validators.reduce((a, v) => a + (v.status?.propagation_queue || 0), 0),
    lastUpdate: Date.now(),
    error: null,
    isLoading: false
  }
}

export function formatNumber(value: number) {
  return Intl.NumberFormat().format(value)
}

export function formatLatency(value: number | null) {
  if (value === null) return "--"
  return `${value}ms`
}

export function formatLastPoll(value: number | null) {
  if (!value) return "Never"
  return new Date(value).toLocaleTimeString()
}
