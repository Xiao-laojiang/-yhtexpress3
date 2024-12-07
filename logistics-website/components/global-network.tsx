import Image from 'next/image'

export default function GlobalNetwork() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">全球物流网络</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=600&text=全球物流网络图"
              alt="粤航通国际全球物流网络"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4">覆盖全球的物流解决方案</h3>
            <p className="text-gray-600 mb-4">
              粤航通国际拥有覆盖全球的物流网络，为客户提供全方位的跨境电商物流服务。我们的网络包括：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>战略位置的海外仓储中心</li>
              <li>高效的跨境运输线路</li>
              <li>本地化的配送服务</li>
              <li>全球范围内的合作伙伴网络</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

