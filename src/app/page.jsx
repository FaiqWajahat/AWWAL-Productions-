import Hero from '@/components/Hero'
import MarketContext from '@/components/MarketContext'
import GrowthLevers from '@/components/GrowthLevers'
import BusinessEconomics from '@/components/BusinessEconomics'
import ServicesOverview from '@/components/ServicesOverview'
import StrategyQualifier from '@/components/StrategyQualifier'
import ProofWall from '@/components/ProofWall'
import AwwalProcess from '@/components/AwwalProcess'

export const metadata = {
  title: "Awwal Productions | Performance Marketing & Web Development",
  description: "We build the websites, strategies, and performance marketing systems that turn searchers into customers. Claim your free growth audit today.",
};

const page = () => {
  return (
    <>
    <Hero/>
    <MarketContext/>
    <GrowthLevers/>
    <BusinessEconomics/>
    <ServicesOverview/>
    <ProofWall/>
    {/* <StrategyQualifier/> */}
    <AwwalProcess/>
  </>
  )
}

export default page