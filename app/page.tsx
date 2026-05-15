import { Hero } from "@/components/hero"
import { ProtocolStats, ValidatorTelemetry, ComputeReceiptPreview } from "@/components/protocol-stats"
import {
  WhatIsComputeNet,
  WhyUsefulCompute,
  ProofOfUsefulCompute,
  VerificationPipeline,
  ValidatorConsensus,
  OpenProtocolPhilosophy,
  ResearchPreview,
  LongTermVision,
  CTASection,
} from "@/components/home-sections"

export default function HomePage() {
  return (
    <main>
        <Hero />
        
        {/* Protocol Stats */}
        <section className="py-12 relative -mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProtocolStats />
          </div>
        </section>

        {/* Telemetry Cards */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6">
              <ValidatorTelemetry />
              <ComputeReceiptPreview />
            </div>
          </div>
        </section>

        <WhatIsComputeNet />
        <WhyUsefulCompute />
        <ProofOfUsefulCompute />
        <VerificationPipeline />
        <ValidatorConsensus />
        <OpenProtocolPhilosophy />
        <ResearchPreview />
        <LongTermVision />
        <CTASection />
    </main>
  )
}
