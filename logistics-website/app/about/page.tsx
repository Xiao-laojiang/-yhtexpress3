import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">关于粤航通国际</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/placeholder.svg?height=400&width=600&text=公司图片"
            alt="粤航通国际办公环境"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">我们的使命</h2>
          <p className="mb-6">
            粤航通国际致力于为全球客户提供高效、可靠、创新的物流解决方案。我们的目标是成为跨境电商物流领域的领导者，通过卓越的服务质量和先进的技术，助力客户实现业务增长。
          </p>
          <h2 className="text-2xl font-semibold mb-4">我们的优势</h2>
          <ul className="list-disc list-inside mb-6">
            <li>专业的跨境电商物流经验</li>
            <li>覆盖全球的物流网络</li>
            <li>先进的仓储管理系统</li>
            <li>定制化的物流解决方案</li>
            <li>24/7全天候客户支持</li>
          </ul>
          <Button size="lg">了解更多服务</Button>
        </div>
      </div>
    </div>
  )
}

