export default function StartPage() {
  return (
    <main className="min-h-screen bg-black text-white p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">
          Run a ComputeNet Validator
        </h1>

        <p className="text-zinc-400 mb-10 text-lg">
          Experimental research testnet validator bootstrap.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 font-mono text-green-400 text-sm overflow-x-auto">
          curl -fsSL https://compute-net.org/install-validator.sh | bash
        </div>

        <div className="mt-12 space-y-4 text-zinc-300">
          <p>• installs validator runtime</p>
          <p>• configures peer discovery</p>
          <p>• enables telemetry</p>
          <p>• joins research testnet</p>
        </div>
      </div>
    </main>
  )
}
