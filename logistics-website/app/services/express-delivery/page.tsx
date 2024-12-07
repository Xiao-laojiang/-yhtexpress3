import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function ExpressDelivery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">粤航通国际快递服务</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-ilAP8iI1tnbWFEdIsJ0BNKQ06Th1ul.jpeg"
            alt="国际快递合作伙伴机队" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">高效全球快递解决方案</h2>
          <p className="mb-4">
            粤航通国际为您提供全面的全球快递服务，不排仓不限量，让您的货物快速到达世界各地。
            我们的服务旨在为您节省时间和成本，提供最优质的快递体验。
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>全球覆盖，无地域限制</li>
            <li>不排仓，不限制货物数量</li>
            <li>当天提取，快速处理</li>
            <li>最快48小时入仓，加快发货速度</li>
            <li>为您省时省本，优化物流成本</li>
            <li>全程跟踪，实时更新货物状态</li>
            <li>与UPS、DHL、FEDEX等知名快递公司合作</li>
          </ul>
          <Button size="lg">获取快递报价</Button>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">为什么选择粤航通国际的快递服务？</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">全球覆盖：</strong> 我们的服务网络遍布全球，无论您的货物目的地在哪里，我们都能送达。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">无限制：</strong> 不排仓不限量，无论您的货物数量多少，我们都能及时处理。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">快速处理：</strong> 当天提取服务，确保您的货物能够及时发出。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">高效入仓：</strong> 最快48小时入仓，大大缩短了您的等待时间。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">成本优化：</strong> 我们的服务旨在为您节省时间和成本，提高您的运营效率。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">全程跟踪：</strong> 先进的跟踪系统，让您随时了解货物的位置和状态。
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-600">强大的合��伙伴：</strong> 我们与UPS、DHL、FEDEX等全球知名快递公司合作，确保您的货物得到最优质的处理和运送。
          </li>
        </ul>
      </div>
    </div>
  )
}

