"use client"

import { useState, useEffect, useCallback } from "react"
import { 
  fetchNetworkTelemetry, 
  NetworkTelemetry,
  VALIDATOR_ENDPOINTS
} from "@/lib/telemetry"

const POLL_INTERVAL = 20000 // 20 seconds

const initialState: NetworkTelemetry = {
  validators: VALIDATOR_ENDPOINTS.map(e => ({
    id: e.id,
    name: e.name,
    url: e.url,
    region: e.region,
    online: false,
    status: null,
    latencyMs: null,
    lastSuccessfulPoll: null,
    lastFetch: 0,
  })),
  totalTruthRecords: 0,
  onlineCount: 0,
  totalPeers: 0,
  totalPropagationQueue: 0,
  lastUpdate: 0,
  isLoading: true,
}

export function useTelemetry(autoRefresh = true) {
  const [telemetry, setTelemetry] = useState<NetworkTelemetry>(initialState)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    try {
      setTelemetry(prev => ({ ...prev, isLoading: true }))
      const data = await fetchNetworkTelemetry()
      setTelemetry(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch telemetry")
      setTelemetry(prev => ({ ...prev, isLoading: false }))
    }
  }, [])

  useEffect(() => {
    // Initial fetch
    refresh()

    // Set up polling if autoRefresh is enabled
    if (autoRefresh) {
      const interval = setInterval(refresh, POLL_INTERVAL)
      return () => clearInterval(interval)
    }
  }, [refresh, autoRefresh])

  return {
    isLoading: false,
    ...telemetry,
    error,
    refresh,
  }
}

// Hook for single validator status
export function useValidatorStatus(validatorId: string) {
  const telemetry = useTelemetry()
  const validator = telemetry.validators.find(v => v.id === validatorId)
  
  return {
    validator,
    isLoading: telemetry.isLoading,
    refresh: telemetry.refresh,
  }
}
