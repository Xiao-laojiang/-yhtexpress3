import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function AirTransportation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">粤航通国际空运服务</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6379374358678776607416969.jpg-1p4324PceWNKQjh7LqfDLrJUqB1bvQ.jpeg"
            alt="空运货物装卸现场" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">高效全球空运解决方案</h2>
          <p className="mb-4">
            粤航通国际为您提供专业的空运服务，专注于美国、欧洲、加拿大和英国市场。
            我们的FBA头程专线服务，让您的跨境电商物流更加快速高效。
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>查验率低，减少延误风险</li>
            <li>时效稳定，准时交付</li>
            <li>合规清关，专业处理</li>
            <li>安全交付，全程保障</li>
            <li>航班运作快，缩短运输时间</li>
            <li>FBA头程专线服务</li>
          </ul>
          <Button size="lg">获取空运报价</Button>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">为什么选择粤航通国际的空运服务？</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">低查验率：</strong> 通过优化包装和文件准备，显著降低海关查验率，加快通关速度。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">稳定时效：</strong> 精选优质航线和合作伙伴，确保货物按时到达目的地。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">合规清关：</strong> 专业的清关团队，熟悉各国法规，确保顺利通关。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">安全保障：</strong> 全程跟踪系统和专业的操作流程，确保货物安全。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">快速航班：</strong> 与多家航空公司合作，提供频繁的航班选择，加快运输速度。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">FBA专线：</strong> 针对亚马逊卖家的专门服务，优化您的跨境电商物流体验。
          </li>
        </ul>
      </div>
    </div>
  )
}

