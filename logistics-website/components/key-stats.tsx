import { Truck, Package, Globe, Users } from 'lucide-react'

const stats = [
  { icon: Truck, value: '1000+', label: '每日处理订单' },
  { icon: Package, value: '50+', label: '全球仓储网点' },
  { icon: Globe, value: '200+', label: '覆盖国家和地区' },
  { icon: Users, value: '10000+', label: '满意客户' },
]

export default function KeyStats() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">粤航通国际的实力</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <p className="text-4xl font-bold text-blue-800 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

