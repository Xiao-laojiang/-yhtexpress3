import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function OversizedTransportation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">粤航通国际超大件国际运输服务</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v2-4b463ed96235c0d0c41608e508c380b8_720w.jpg-mhLaNWv54dAHMriJAJRJXW9ApLyQ1f.jpeg"
            alt="超大件货物运输实例" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">专业超大件国际运输解决方案</h2>
          <p className="mb-4">
            粤航通国际为您提供专业的超大件国际运输服务，专注于美国、欧洲、加拿大和英国市场。
            我们的服务涵盖超大家具家私、超重设备机器、超长木箱木架等特殊货物的运输需求。
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>专业处理超大尺寸货物</li>
            <li>超重设备和机器的安全运输</li>
            <li>超长木箱和木架的定制解决方案</li>
            <li>海运双清包税服务</li>
            <li>安全到门，全程无忧</li>
            <li>专业团队，丰富经验</li>
          </ul>
          <Button size="lg">获取超大件运输报价</Button>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">为什么选择粤航通国际的超大件运输服务？</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">专业经验：</strong> 多年超大件运输经验，熟悉各大市场特点和要求。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">定制方案：</strong> 根据货物特性提供个性化运输解决方案。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">全程监控：</strong> 先进的跟踪系统，实时掌握货物状态。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">双清包税：</strong> 提供海运双清包税服务，简化通关流程。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">安全保障：</strong> 采用先进的包装和固定技术，确保货物安全。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">一站式服务：</strong> 从提货、包装、运输到清关、送货，全程无忧。
          </li>
        </ul>
      </div>
    </div>
  )
}

