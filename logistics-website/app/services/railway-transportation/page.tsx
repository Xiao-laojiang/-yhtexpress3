import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function RailwayTransportation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">粤航通国际铁路运输服务</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image 
            src="/placeholder.svg?height=400&width=600" 
            alt="铁路运输" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">环保经济的铁路货运</h2>
          <p className="mb-4">
            我们的铁路运输服务为长途货运提供环保且具有成本效益的解决方案。
            通过访问广泛的铁路网络，我们为各种类型的货物提供可靠高效的运输。
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>多式联运集装箱运输</li>
            <li>散货铁路运输</li>
            <li>冷藏铁路服务</li>
            <li>超大和重载货物运输</li>
            <li>跨境铁路解决方案</li>
          </ul>
          <Button size="lg">咨询铁路货运</Button>
        </div>
      </div>
    </div>
  )
}

