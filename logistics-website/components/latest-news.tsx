import Link from 'next/link'
import { Button } from '@/components/ui/button'

const newsItems = [
  {
    title: '中国跨境电商出口规模持续增长，2023年达2.38万亿元',
    date: '2024-03-15',
    excerpt: '据海关总署数据显示，2023年中国跨境电商出口规模达2.38万亿元，同比增长15.6%。这一增长趋势凸显了跨境物流服务的重要性...',
    link: '/news/1'
  },
  {
    title: '全球集装箱运价指数回升，反映航运市场复苏迹象',
    date: '2024-03-01',
    excerpt: '上海航运交易所发布的最新数据显示，全球集装箱运价指数（SCFI）近期出现回升，这可能预示着全球航运市场正在逐步复苏...',
    link: '/news/2'
  },
  {
    title: '欧盟实施新进口管控系统ICS2，跨境物流企业需积极应对',
    date: '2024-02-20',
    excerpt: '欧盟海关即将全面实施新的进口管控系统ICS2，这将对跨境电商和物流企业产生重大影响。企业需要及时调整策略，确保合规...',
    link: '/news/3'
  }
]

export default function LatestNews() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">最新动态</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{item.date}</p>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <Link href={item.link}>
                <Button variant="outline">阅读更多</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

