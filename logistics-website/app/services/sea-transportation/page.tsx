import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function SeaTransportation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">粤航通国际欧美海运服务</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tupian-500825341_3_0_0%20%E6%8B%B7%E8%B4%9D.jpg-f0mnNOdzxP1pnML6CCaKZQp4iPodUm.jpeg"
            alt="集装箱码头装卸作业" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">专业欧美海运解决方案</h2>
          <p className="mb-4">
            粤航通国际为您提供专业的欧美海运服务，专注于美国和欧洲市场。
            我们的FBA头程专线服务，让您的跨境电商物流更加便捷高效。
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>精选美森、OA联盟优质船司</li>
            <li>价格合理，具有市场竞争力</li>
            <li>时效稳定，准时交付</li>
            <li>安全可靠，让您省心</li>
            <li>FBA头程专线服务</li>
            <li>全程跟踪，实时更新</li>
          </ul>
          <Button size="lg">获取海运报价</Button>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">为什么选择粤航通国际的欧美海运服务？</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">专业经验：</strong> 多年欧美海运经验，熟悉各大市场特点和要求。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">优质合作：</strong> 与美森、OA联盟等知名船司深度合作，保证运力和服务质量。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">价格优势：</strong> 通过规模效应和长期合作，为客户争取最优惠的价格。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">稳定可靠：</strong> 严格的操作流程和先进的跟踪系统，确保货物安全准时送达。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">FBA专线：</strong> 专门针对亚马逊卖家的FBA头程服务，优化您的跨境电商物流。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">一站式服务：</strong> 从提货、报关到目的地配送，全程无忧。
          </li>
        </ul>
      </div>
    </div>
  )
}

