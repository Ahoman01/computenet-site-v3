import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Smart Contracts | ComputeNet Docs",
  description: "Writing and deploying smart contracts",
};

export default function ContractsPage() {
  return (
    <DocsLayout
      title="Smart Contracts"
      description="Writing and deploying smart contracts"
      href="/docs/dev/contracts"
      status="experimental"
      section="Development"
      sectionHref="/docs/dev"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            ComputeNet supports smart contracts that can trigger and verify compute jobs 
            on-chain. This enables trustless integration of verified computation into 
            decentralized applications.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Contract Interface</h2>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`// ComputeNet contract interface (Solidity-like)
interface IComputeNet {
    // Submit a compute job
    function submitJob(
        bytes32 programHash,
        bytes calldata input
    ) external returns (bytes32 jobId);
    
    // Verify a compute receipt
    function verifyReceipt(
        bytes32 jobId,
        bytes calldata receipt
    ) external view returns (bool valid);
    
    // Get job result after verification
    function getResult(
        bytes32 jobId
    ) external view returns (bytes memory output);
}`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Example Integration</h2>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`contract VerifiedMLModel {
    IComputeNet public computenet;
    bytes32 public modelHash;
    
    mapping(bytes32 => bool) public verifiedPredictions;
    
    function predict(bytes calldata input) external returns (bytes32) {
        // Submit prediction job to ComputeNet
        bytes32 jobId = computenet.submitJob(modelHash, input);
        return jobId;
    }
    
    function finalizePrediction(
        bytes32 jobId,
        bytes calldata receipt
    ) external {
        require(computenet.verifyReceipt(jobId, receipt), "Invalid receipt");
        verifiedPredictions[jobId] = true;
        
        bytes memory output = computenet.getResult(jobId);
        // Process verified output...
    }
}`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6 border-blue-500/30">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Experimental</h2>
          <p className="text-muted-foreground">
            Smart contract integration is experimental. The interface and supported 
            chains may change. Currently testing on EVM-compatible testnets.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
