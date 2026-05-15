export default function StartPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        <div className="mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400">
          ComputeNet Validator Bootstrap
        </div>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Join the ComputeNet Testnet
        </h1>

        <p className="text-zinc-400 text-lg mb-10">
          Install a validator node, connect to peers, and verify useful compute in under two minutes.
        </p>

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-950 p-6 mb-8 overflow-x-auto">
          <code className="text-cyan-400 text-sm">
            curl -fsSL https://compute-net.org/install-validator.sh | bash
          </code>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <div className="text-cyan-400 mb-2">1</div>
            <div className="font-semibold mb-2">Install Validator</div>
            <div className="text-sm text-zinc-500">
              Runtime, config, telemetry, and daemon setup automatically.
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <div className="text-cyan-400 mb-2">2</div>
            <div className="font-semibold mb-2">Connect to Peers</div>
            <div className="text-sm text-zinc-500">
              Bootstrap into the decentralized validator network.
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <div className="text-cyan-400 mb-2">3</div>
            <div className="font-semibold mb-2">Verify Compute</div>
            <div className="text-sm text-zinc-500">
              Execute deterministic compute verification demos.
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-950 p-6">
          <div className="text-zinc-400 mb-3">Example:</div>

          <div className="rounded-lg bg-black border border-zinc-800 p-4 overflow-x-auto">
            <pre className="text-sm text-cyan-400">
{`computenet verify-demo

{
  "job_id": "demo_001",
  "verified": true,
  "validators": 3,
  "truth_score": 1.0,
  "receipt_hash": "a13c9f2d91b5..."
}`}
            </pre>
          </div>
        </div>
      </div>
    </main>
  )
}
