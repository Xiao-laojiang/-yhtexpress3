import { HeroCarousel } from '@/components/hero-carousel'
import Services from '@/components/services'
import WhyChooseUs from '@/components/why-choose-us'
import LatestNews from '@/components/latest-news'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'

export default function Home() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto max-w-[1980px]">
          <HeroCarousel />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">公司简介</h2>
          <p className="text-xl text-justify max-w-4xl mx-auto">
            深圳市粤航通国际货运代理有限公司主营欧洲、美国海运FBA专线、UPS红单、DHL国际快递以及超大件运输服务，并专注于亚马逊、阿里巴巴等各大跨境电商平台整体物流供应链的操作和管理。为跨境电商客户群体提供优质服务和打造产品线，报关、清关、仓储、运输、配送一体的综合型服务企业。鉴于多年丰富的操作经验，有着足够能力为各平台以及中大型企业提供专业、高效的供应链以及解决方案服务。
          </p>
        </div>
      </section>
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <LatestNews />
      <CTA />
    </>
  )
}

