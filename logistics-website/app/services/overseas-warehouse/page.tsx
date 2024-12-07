import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function OverseasWarehouse() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">粤航通国际海外仓服务</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-201112094A3C8.jpg-TJPj9ymQljrSPmFGNzeLDX61rs9hSP.jpeg"
            alt="粤航通国际海外仓储设施" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">专业海外仓储解决方案</h2>
          <p className="mb-4">
            粤航通国际为您提供全面的海外仓服务，助力您无忧跨境出海。我们的服务涵盖货物退货换标、转运仓储、一件代发等多个方面，
            为您的跨境电商业务提供强大支持。
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>货物退货换标服务</li>
            <li>转运仓储管理</li>
            <li>一件代发服务</li>
            <li>库存管理与报告</li>
            <li>质量检查服务</li>
            <li>定制包装与贴标</li>
          </ul>
          <Button size="lg">咨询海外仓服务</Button>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">为什么选择粤航通国际的海外仓服务？</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">全球网络：</strong> 战略性布局的海外仓网络，覆盖主要跨境电商市场。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">灵活服务：</strong> 根据您的需求提供定制化的仓储和配送解决方案。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">高效管理：</strong> 先进的仓库管理系统，实时库存追踪和管理。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">快速配送：</strong> 本地化配送网络，缩短交付时间，提高客户满意度。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">增值服务：</strong> 提供退货处理、换标、重新包装等增值服务，优化您的供应链。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">成本优化：</strong> 通过集中化管理和规模效应，帮助您降低运营成本。
          </li>
        </ul>
      </div>
    </div>
  )
}

