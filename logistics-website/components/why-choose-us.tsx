import { Shield, Clock, TrendingUp, Truck, HeadsetIcon as HeadSet } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: '安全可靠',
    description: '严格的质量控制和先进的跟踪系统，确保您的货物安全无忧。我们采用最新的安全技术和流程，保护您的货物在运输全程的安全。'
  },
  {
    icon: Clock,
    title: '高效快速',
    description: '优化的物流网络和流程，为您节省时间和成本。我们的快速通关和高效配送服务，确保您的货物以最快的速度到达目的地。'
  },
  {
    icon: TrendingUp,
    title: '持续创新',
    description: '不断引入新技术和服务，助力您的业务增长。我们投资于最新的物流技术和自动化系统，提高运营效率和客户满意度。'
  },
  {
    icon: Truck,
    title: '定制化服务',
    description: '根据您的具体需求，提供量身定制的物流解决方案。我们理解每个客户的需求都是独特的，因此我们提供灵活的服务选项。'
  },
  {
    icon: HeadSet,
    title: '专业客户支持',
    description: '24/7全天候客户服务，随时解答您的疑问并提供支持。我们的专业团队致力于为您提供最优质的客户体验。'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">为什么选择粤航通国际</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <reason.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

