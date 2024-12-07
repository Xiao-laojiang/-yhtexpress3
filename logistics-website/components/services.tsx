import { Anchor, Plane, Truck, Package, Warehouse } from 'lucide-react'
import { ServiceCard } from './service-card'

const services = [
  {
    title: '海运服务',
    description: '专注欧洲、美国海运FBA专线。精选美森、OA联盟优质船司，价格合理，时效稳定，安全交付，让您省心。提供整柜（FCL）和拼箱（LCL）服务，满足不同规模的运输需求。',
    icon: Anchor,
    link: '/services/sea-transportation',
  },
  {
    title: '空运服务',
    description: '面向美国、欧洲市场，提供FBA头程专线。查验率低，时效稳定，合规清关，安全交付，航班运作快速高效。支持紧急货物和高价值商品的快速运输，确保您的货物准时送达。',
    icon: Plane,
    link: '/services/air-transportation',
  },
  {
    title: '快递服务',
    description: '全面覆盖欧美市场，不排仓不限量。当天提取，最快48小时入仓，为您省时省本。与UPS、DHL、FEDEX等知名快递公司合作，提供快速高效的门到门配送服务。支持小包裹和文件的国际快递。',
    icon: Truck,
    link: '/services/express-delivery',
  },
  {
    title: '超大件国际运输',
    description: '专业处理美国、欧洲的超大家具家私、超重设备机器、超长木箱木架等。提供海运双清包税，确保安全到门服务。我们的团队具备处理复杂、超规格货物的丰富经验，为您的特殊运输需求提供定制解决方案。',
    icon: Package,
    link: '/services/oversized-transportation',
  },
  {
    title: '海外仓服务',
    description: '在欧美主要市场提供货物退货换标、转运仓储、一件代发等服务，助力您无忧跨境出海。专业的海外仓储解决方案，优化您的欧美供应链。我们的仓储管理系统支持实时库存追踪，帮助您更好地管理库存和订单。',
    icon: Warehouse,
    link: '/services/overseas-warehouse',
  }
]

export default function Services() {
  return (
    <div id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">我们的服务</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}

