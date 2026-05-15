import { DocsLayout } from "@/components/docs-layout";

export const metadata = {
  title: "Staking | ComputeNet Docs",
  description: "Understanding validator staking mechanics",
};

export default function StakingPage() {
  return (
    <DocsLayout
      title="Staking"
      description="Understanding validator staking mechanics"
      href="/docs/validators/staking"
      status="planned"
      section="Validators"
      sectionHref="/docs/validators"
    >
      <section className="space-y-6">
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Staking Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Validators stake tokens to participate in the network and earn rewards for 
            correct computation and verification. Staking requirements and mechanics 
            will be detailed closer to mainnet launch.
          </p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Planned Features</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Minimum stake requirements for validator participation
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Slashing conditions for misbehavior
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Reward distribution mechanisms
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Unbonding periods and withdrawal process
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2" />
              Delegation support for non-operator participants
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl p-6 border-muted">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            Detailed staking documentation will be published as the protocol economics 
            are finalized. No token sale, premine, or ICO is currently being conducted.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
