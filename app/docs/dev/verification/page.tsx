import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Verifying Results | ComputeNet Docs",
  description: "Validating compute receipts and results",
};

export default function DevVerificationPage() {
  return (
    <DocsLayout
      title="Verifying Results"
      description="Validating compute receipts and results"
      href="/docs/dev/verification"
      status="experimental"
      section="Development"
      sectionHref="/docs/dev"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Receipt Verification</h2>
          <p className="text-muted-foreground leading-relaxed">
            Every compute job produces a receipt that can be independently verified. 
            Verification confirms that the computation was performed correctly without 
            needing to re-execute it.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Basic Verification</h2>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`import { ComputeNet, verifyReceipt } from '@computenet/sdk';

const client = new ComputeNet({ network: 'testnet' });

// Get a receipt
const receipt = await client.getReceipt(jobId);

// Verify the receipt
const isValid = await verifyReceipt(receipt);

if (isValid) {
  console.log('Receipt is valid!');
  console.log('Output:', receipt.output);
} else {
  console.error('Receipt verification failed');
}`}
            </pre>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Verification Steps</h2>
          <ol className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0">1</span>
              <div>
                <strong className="text-foreground">Check proof validity</strong>
                <p className="text-sm mt-1">Verify the cryptographic proof against the input/output hashes</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0">2</span>
              <div>
                <strong className="text-foreground">Validate attestations</strong>
                <p className="text-sm mt-1">Confirm sufficient validator signatures are present and valid</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0">3</span>
              <div>
                <strong className="text-foreground">Check consensus anchor</strong>
                <p className="text-sm mt-1">Verify the receipt was included in a finalized consensus block</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Offline Verification</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Receipts can be verified offline without network access:
          </p>
          <div className="bg-background/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`import { verifyReceiptOffline } from '@computenet/sdk';

// Verify without network (requires trusted validator keys)
const isValid = verifyReceiptOffline(receipt, {
  trustedValidators: validatorPublicKeys
});`}
            </pre>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
