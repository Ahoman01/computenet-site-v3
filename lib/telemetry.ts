export interface ValidatorTelemetry {
  id: string
  name: string
  url: string
  region: string
  online: boolean
  latencyMs: number | null
  lastSuccessfulPoll: number | null
  lastFetch: number
  status?: {
    truth_records?: number
    peers?: number
    propagation_queue?: number
  } | null
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
