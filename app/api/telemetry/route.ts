import { NextResponse } from "next/server"

const validators = [
  { id: "alpha", url: "http://46.101.39.92:8787/status" },
  { id: "beta", url: "http://138.68.134.235:8787/status" },
  { id: "gamma", url: "http://178.62.15.134:8787/status" }
]

async function checkValidator(v: any) {
  const start = Date.now()

  try {
    const res = await fetch(v.url, {
      cache: "no-store"
    })

    const data = await res.json()

    return {
      id: v.id,
      online: true,
      latency: Date.now() - start,
      status: data
    }
  } catch (err) {
    return {
      id: v.id,
      online: false,
      latency: null,
      status: null
    }
  }
}

export async function GET() {
  const results = await Promise.all(
    validators.map(checkValidator)
  )

  return NextResponse.json(results)
}
